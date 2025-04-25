
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <Card className="card-gradient card-hover">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const WhyInsurance = () => {
  return (
    <div className="py-16" id="why-insurance">
      <h2 className="text-4xl font-bold text-center mb-4">Why Travel Insurance?</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Travel insurance is an essential part of any trip planning process
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Benefit 
          icon="🏥" 
          title="Medical Emergencies" 
          description="Coverage for unexpected illnesses or injuries while traveling abroad"
        />
        <Benefit 
          icon="✈️" 
          title="Trip Cancellations" 
          description="Reimbursement for non-refundable expenses if you need to cancel your trip"
        />
        <Benefit 
          icon="🧳" 
          title="Lost Baggage" 
          description="Compensation for lost, stolen, or damaged luggage during your travels"
        />
        <Benefit 
          icon="🔄" 
          title="Trip Interruptions" 
          description="Coverage for unexpected events that cut your trip short"
        />
        <Benefit 
          icon="🚑" 
          title="Emergency Evacuation" 
          description="Transportation to the nearest adequate medical facility when necessary"
        />
        <Benefit 
          icon="💼" 
          title="24/7 Assistance" 
          description="Round-the-clock support for emergencies and travel concerns"
        />
      </div>
    </div>
  );
};

export default WhyInsurance;
