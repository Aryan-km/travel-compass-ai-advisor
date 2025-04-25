
# Travel Compass AI Advisor

An AI-powered travel insurance advisor application that helps users find the best insurance plans based on their travel needs.

## Features

- Modern, responsive UI with gradient themes and smooth animations
- Light/dark mode toggle
- Interactive travel preferences form
  - Destination selection
  - Trip duration
  - Age range
  - Budget preferences
  - Departure and return date pickers
  - Insurance add-on toggles
- Dynamic insurance summary with cost estimations
- AI-powered chat interface using Google's Gemini API

## Setup and Usage

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:8080`

## Using the Chatbot

To use the AI chatbot functionality:
1. You'll need a Google Gemini API key
2. When you first attempt to send a message, you'll be prompted to enter your API key
3. Enter your API key and click "Save"
4. The API key is stored only in your browser's local storage and is never sent to our servers

## Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- shadcn/ui for UI components
- Vite for fast development
- Google Gemini API for AI responses

## Development

### Backend Integration

In a production environment, you would need to:

1. Set up a Node.js/Express backend server
2. Use the provided `src/server/api/chat.js` file as a reference for your API endpoint
3. Configure proper API key management and security measures

## License

This project is for demonstration purposes only.

