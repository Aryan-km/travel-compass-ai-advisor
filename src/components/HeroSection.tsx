
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onChatClick }: { onChatClick: () => void }) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVuXDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80")',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container relative z-10 text-center text-white">
        <div className="animate-slide-down">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Your Trusted Travel Insurance Advisor
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Plan stress-free adventures with expert coverage advice.
            Protect your journey with confidence.
          </p>
          <Button 
            onClick={onChatClick} 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 animate-scale-in"
          >
            Chat with Advisor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
