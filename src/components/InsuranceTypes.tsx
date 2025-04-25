
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Plane, Users, FileText } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface InsuranceTypeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hoverContent: string;
}

const InsuranceType = ({ title, description, icon, hoverContent }: InsuranceTypeProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="card-gradient card-hover cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">
            {hoverContent}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const InsuranceTypes = () => {
  return (
    <div className="py-16" id="insurance-types">
      <h2 className="text-4xl font-bold text-center mb-4">Types of Coverage</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        We offer a variety of insurance plans to suit your specific travel needs
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <InsuranceType 
          title="Single Trip" 
          description="Coverage for a one-time journey"
          icon={<Plane className="h-6 w-6 text-primary" />}
          hoverContent="Comprehensive coverage for a single trip, including medical expenses, trip cancellation, and lost baggage. Perfect for occasional travelers."
        />
        <InsuranceType 
          title="Annual Multi-Trip" 
          description="Year-round protection for frequent travelers"
          icon={<CalendarDays className="h-6 w-6 text-primary" />}
          hoverContent="Cost-effective insurance for those who travel multiple times per year. One policy covers all your trips for a full year."
        />
        <InsuranceType 
          title="Family Coverage" 
          description="Protection for the whole family"
          icon={<Users className="h-6 w-6 text-primary" />}
          hoverContent="Specially designed plans for families traveling together. Includes coverage for children and dependents at advantageous rates."
        />
        <InsuranceType 
          title="Business Travel" 
          description="Specialized coverage for corporate trips"
          icon={<FileText className="h-6 w-6 text-primary" />}
          hoverContent="Tailored insurance for business travelers, including coverage for work equipment, liability protection, and emergency business assistance."
        />
      </div>
    </div>
  );
};

export default InsuranceTypes;
