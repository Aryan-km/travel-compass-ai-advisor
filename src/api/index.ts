
// This is a simple API client for backend requests
import { toast } from "@/hooks/use-toast";

export async function sendChatRequest(message: string, context: string, apiKey: string = "YOUR_GEMINI_API_KEY") {
  try {
    // Format the system prompt for the travel insurance advisor
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
      
      Use markdown format with ** for important terms and key points which will be rendered as bold text.
    `;

    // Call the Gemini API directly
    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              { text: systemPrompt },
              { text: message }
            ]
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    
    let reply = '';
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      reply = data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }

    return { reply };
  } catch (error) {
    console.error("Chat API error:", error);
    toast({
      title: "API Error",
      description: "Failed to connect to the Gemini chat service. Please check your API key or try again later.",
      variant: "destructive",
    });
    throw error;
  }
}
