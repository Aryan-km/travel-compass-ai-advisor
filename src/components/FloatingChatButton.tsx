
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[400px] h-[600px] card-gradient rounded-lg shadow-lg animate-fade-in">
          <div className="p-4 h-full">
            <ChatInterface />
          </div>
        </div>
      )}
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
  );
};

export default FloatingChatButton;
