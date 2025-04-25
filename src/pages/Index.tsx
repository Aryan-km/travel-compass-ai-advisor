
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import TravelForm from "@/components/TravelForm";
import InsuranceSummary from "@/components/InsuranceSummary";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  const [formData, setFormData] = useState({
    destination: "",
    age: "",
    budget: "",
    duration: "",
    departureDate: undefined,
    returnDate: undefined,
    addOns: [],
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 backdrop-blur-md bg-background/80">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gradient">Travel Compass AI</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="card-gradient p-6 rounded-lg shadow-soft">
              <h2 className="text-xl font-semibold mb-4">Find Your Perfect Travel Insurance</h2>
              <TravelForm onFormUpdate={setFormData} />
            </div>
            
            <InsuranceSummary formData={formData} />
          </div>
          
          <div className="card-gradient p-6 rounded-lg shadow-soft h-[600px] flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Insurance Assistant</h2>
            <div className="flex-1 overflow-hidden">
              <ChatInterface formData={formData} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Travel Compass AI. All rights reserved.</p>
          <p className="mt-2">
            This is a demo application. No real insurance products are being sold.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
