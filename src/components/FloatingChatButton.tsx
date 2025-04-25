
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-4 z-50 bg-background rounded-lg shadow-lg border animate-scale-up overflow-hidden">
            <div className="absolute top-4 right-4">
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6 h-full pt-14">
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
