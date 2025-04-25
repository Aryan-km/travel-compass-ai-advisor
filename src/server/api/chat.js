
// This file would be used in a real backend implementation

/**
 * Example API handler for chat requests
 * In a production environment, this would be part of a Node.js/Express backend
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context, apiKey } = req.body;
    
    if (!apiKey) {
      return res.status(401).json({ error: 'API key is required' });
    }
    
    // Format prompt
    const systemPrompt = `
      You are a friendly and knowledgeable travel insurance advisor. 
      You help travelers understand their insurance options, explain coverage details,
      and make recommendations based on their trip details and preferences.
      Always be helpful, accurate, and provide concise explanations of insurance terms.
      If you don't know something, admit it rather than providing incorrect information.
      
      The user has provided the following information about their trip:
      ${context || "No specific information provided yet."}
      
      If the user asks about specific prices or quotes, remind them that the prices shown are estimates
      and actual policies may vary in cost and coverage.
    `;
    
    // In a real implementation, this would call the Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'system',
            parts: [{ text: systemPrompt }]
          },
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1000,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        ]
      })
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || 'API Error');
    }

    let reply = '';
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      reply = data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format');
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
