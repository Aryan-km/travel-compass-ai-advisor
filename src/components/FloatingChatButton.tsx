
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";

interface FloatingChatButtonProps {
  initialOpen?: boolean;
}

const FloatingChatButton = ({ initialOpen = false }: FloatingChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-0 z-50 flex flex-col h-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between p-4 border-b bg-background/50">
              <h2 className="text-2xl font-bold text-gradient">Travel Insurance Advisor</h2>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <ChatInterface />
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={cn(
            "rounded-full w-14 h-14 main-gradient shadow-lg transition-transform hover:scale-105",
            isOpen && "bg-destructive hover:bg-destructive"
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </>
  );
};

export default FloatingChatButton;
