
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingChatButton from "@/components/FloatingChatButton";
import InsuranceStats from "@/components/InsuranceStats";
import PopularDestinations from "@/components/PopularDestinations";
import { Card, CardContent } from "@/components/ui/card";

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
      <main className="container py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Smart Travel Insurance
            <br />
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-600">Powered by AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized travel insurance recommendations from our AI advisor.
            Protect your journey with confidence.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="hover:scale-105 transition-transform duration-300 card-gradient">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Instant Coverage</h3>
              <p className="text-muted-foreground">Get insured within minutes with our AI-powered system</p>
            </CardContent>
          </Card>
          <Card className="hover:scale-105 transition-transform duration-300 card-gradient">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">Access our AI advisor anytime, anywhere</p>
            </CardContent>
          </Card>
          <Card className="hover:scale-105 transition-transform duration-300 card-gradient">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-muted-foreground">Travel confidently with worldwide protection</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-16 animate-fade-in">
          <InsuranceStats />
        </div>

        {/* Popular Destinations */}
        <PopularDestinations />

        {/* Trust Section */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Trusted by Travelers Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join millions of satisfied travelers who trust Travel Shield AI for their insurance needs.
            Our AI-powered platform ensures you get the best coverage for your journey.
          </p>
        </div>

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
