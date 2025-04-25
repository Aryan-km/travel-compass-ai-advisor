
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InsuranceSummaryProps {
  formData: {
    destination: string;
    age: string;
    budget: string;
    duration: string;
    departureDate: Date | undefined;
    returnDate: Date | undefined;
    addOns: string[];
  };
}

const InsuranceSummary = ({ formData }: InsuranceSummaryProps) => {
  // Calculate a mock premium based on user inputs
  const calculatePremium = () => {
    let base = 50; // Base premium

    // Add for destination
    if (formData.destination) {
      if (["Europe", "North America"].includes(formData.destination)) {
        base += 30;
      } else if (["Asia", "Australia & Oceania"].includes(formData.destination)) {
        base += 40;
      } else if (["Africa", "South America", "Antarctica"].includes(formData.destination)) {
        base += 60;
      }
    }

    // Add for age
    if (formData.age) {
      if (formData.age === "18-25") base += 10;
      else if (formData.age === "26-35") base += 15;
      else if (formData.age === "36-45") base += 25;
      else if (formData.age === "46-55") base += 35;
      else if (formData.age === "56-65") base += 50;
      else if (formData.age === "66-75") base += 80;
      else base += 120; // 76+
    }

    // Add for duration
    if (formData.duration) {
      if (formData.duration === "1-7 days") base += 10;
      else if (formData.duration === "8-14 days") base += 20;
      else if (formData.duration === "15-30 days") base += 30;
      else if (formData.duration === "1-3 months") base += 60;
      else if (formData.duration === "3-6 months") base += 100;
      else base += 150; // 6+ months
    }

    // Add for add-ons
    base += formData.addOns.length * 15;

    // Discount based on budget
    if (formData.budget?.includes("Economy")) {
      base = base * 0.8;
    } else if (formData.budget?.includes("Luxury")) {
      base = base * 1.2;
    }

    return base.toFixed(2);
  };

  // Check if we have enough data to show a meaningful summary
  const hasEnoughData =
    formData.destination &&
    formData.age &&
    formData.duration &&
    formData.departureDate &&
    formData.returnDate;

  if (!hasEnoughData) {
    return (
      <Card className="mt-4 card-gradient animate-fade-in">
        <CardHeader>
          <CardTitle className="text-gradient">Insurance Summary</CardTitle>
          <CardDescription>
            Complete the form to see your insurance estimate
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const premium = calculatePremium();

  return (
    <Card className="mt-4 card-gradient animate-fade-in shadow-soft">
      <CardHeader>
        <CardTitle className="text-gradient">Insurance Summary</CardTitle>
        <CardDescription>
          Based on your travel details and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Destination:</div>
          <div>{formData.destination}</div>
          <div className="font-medium">Trip Duration:</div>
          <div>{formData.duration}</div>
          <div className="font-medium">Traveler Age:</div>
          <div>{formData.age}</div>
          <div className="font-medium">Travel Period:</div>
          <div>
            {formData.departureDate && formData.returnDate
              ? `${formData.departureDate.toLocaleDateString()} - ${formData.returnDate.toLocaleDateString()}`
              : "Dates not selected"}
          </div>
          <div className="font-medium">Add-ons:</div>
          <div>
            {formData.addOns.length > 0
              ? formData.addOns
                  .map((addon) =>
                    addon
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())
                  )
                  .join(", ")
              : "None"}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Estimated Premium:</span>
            <span className="text-2xl font-bold text-gradient">
              ${premium}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Final price may vary based on additional options and specific
            coverage details.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full main-gradient">Get Full Quote</Button>
      </CardFooter>
    </Card>
  );
};

export default InsuranceSummary;
