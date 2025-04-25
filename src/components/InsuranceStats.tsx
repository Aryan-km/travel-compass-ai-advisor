
import { Card, CardContent } from "@/components/ui/card";

interface StatProps {
  title: string;
  value: string;
  description: string;
}

const Stat = ({ title, value, description }: StatProps) => (
  <div className="text-center p-4">
    <h3 className="text-xl font-semibold text-gradient mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-2">{value}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const InsuranceStats = () => {
  return (
    <Card className="card-gradient hover:scale-[1.02] transition-transform duration-300">
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Stat
          title="Protected Travelers"
          value="2M+"
          description="Travelers protected worldwide annually"
        />
        <Stat
          title="Claims Success"
          value="95%"
          description="Claims processed within 48 hours"
        />
        <Stat
          title="Global Coverage"
          value="180+"
          description="Countries covered by our insurance"
        />
      </CardContent>
    </Card>
  );
};

export default InsuranceStats;
