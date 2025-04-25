
import React, { useState, useRef, useEffect } from "react";
import { Send, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  formData?: any;
}

const ChatInterface = ({ formData }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      content:
        "👋 Hello! I'm your Travel Insurance Advisor. How can I help you with your travel insurance needs today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Add API key state (to be entered by user)
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Check if API key is set
    if (!apiKey) {
      setShowApiKeyInput(true);
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to continue.",
        variant: "destructive",
      });
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare context from form data
      let context = "";
      if (formData) {
        context = `
          User travel details:
          Destination: ${formData.destination || "Not specified"}
          Age range: ${formData.age || "Not specified"}
          Trip duration: ${formData.duration || "Not specified"}
          Budget preference: ${formData.budget || "Not specified"}
          Travel dates: ${
            formData.departureDate && formData.returnDate
              ? `${formData.departureDate.toLocaleDateString()} - ${formData.returnDate.toLocaleDateString()}`
              : "Not specified"
          }
          Selected add-ons: ${
            formData.addOns?.length > 0
              ? formData.addOns.join(", ")
              : "None"
          }
        `;
      }

      // Send request to Gemini API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          context,
          apiKey,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      // Add AI response
      const aiMessage: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description:
          "Failed to get a response. Please check your API key and try again.",
        variant: "destructive",
      });
      
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "ai",
          content:
            "I'm sorry, but I encountered an error processing your request. Please check your API key or try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* API Key Input */}
      {showApiKeyInput && (
        <div className="mb-4 p-3 border rounded-md animate-fade-in card-gradient">
          <h3 className="text-sm font-medium mb-2">Enter Gemini API Key</h3>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={() => setShowApiKeyInput(false)}
              disabled={!apiKey}
            >
              Save
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Your API key is stored locally and never sent to our servers.
          </p>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-1">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <Card
              className={cn(
                "max-w-[80%] animate-slide-up",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "card-gradient"
              )}
            >
              <CardContent className="p-3">
                {message.content}
              </CardContent>
            </Card>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="mt-auto">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowApiKeyInput(true)}
            className="flex-shrink-0"
          >
            <User className="h-4 w-4" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about travel insurance..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 main-gradient"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
