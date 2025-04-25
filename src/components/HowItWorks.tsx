
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Search, CheckCircle } from "lucide-react";

const HowItWorksStep = ({ number, title, description, icon }: { 
  number: number; 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="card-gradient card-hover">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const HowItWorks = () => {
  return (
    <div className="py-16" id="how-it-works">
      <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Getting the right travel insurance advice has never been easier
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HowItWorksStep 
          number={1}
          title="Chat With Our Advisor"
          description="Tell our AI advisor about your travel plans, preferences, and concerns"
          icon={<MessageCircle className="h-6 w-6 text-primary" />}
        />
        <HowItWorksStep 
          number={2}
          title="Get Personalized Recommendations"
          description="Receive tailored insurance options based on your specific travel needs"
          icon={<Search className="h-6 w-6 text-primary" />}
        />
        <HowItWorksStep 
          number={3}
          title="Travel With Confidence"
          description="Choose the perfect coverage and enjoy peace of mind during your trip"
          icon={<CheckCircle className="h-6 w-6 text-primary" />}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
