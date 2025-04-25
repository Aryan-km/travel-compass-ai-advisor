
// This is a simple API client for backend requests
import { toast } from "@/hooks/use-toast";

export async function sendChatRequest(message: string, context: string, apiKey: string) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, context, apiKey }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    toast({
      title: "API Error",
      description: "Failed to connect to the chat service.",
      variant: "destructive",
    });
    throw error;
  }
}
