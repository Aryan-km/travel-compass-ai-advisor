
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingChatButton from "@/components/FloatingChatButton";
import InsuranceStats from "@/components/InsuranceStats";
import PopularDestinations from "@/components/PopularDestinations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 backdrop-blur-md bg-background/80">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-4xl font-bold text-gradient">Travel Shield AI</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Smart Travel Insurance
            <br />
            <span className="text-gradient">Powered by AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized travel insurance recommendations from our AI advisor.
            Protect your journey with confidence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <InsuranceStats />
        </div>

        {/* Popular Destinations */}
        <PopularDestinations />

        {/* Floating Chat Button */}
        <FloatingChatButton />
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Travel Shield AI. All rights reserved.</p>
          <p className="mt-2">
            This is a demo application. No real insurance products are being sold.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
