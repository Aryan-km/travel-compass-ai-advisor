
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const destinations = [
  "Europe",
  "North America",
  "South America",
  "Asia",
  "Africa",
  "Australia & Oceania",
  "Antarctica",
];

const ageRanges = [
  "18-25",
  "26-35",
  "36-45",
  "46-55",
  "56-65",
  "66-75",
  "76+",
];

const budgetRanges = [
  "Economy (< $100)",
  "Standard ($100-$200)",
  "Premium ($200-$400)",
  "Luxury (> $400)",
];

const durations = [
  "1-7 days",
  "8-14 days",
  "15-30 days",
  "1-3 months",
  "3-6 months",
  "6+ months",
];

const addOns = [
  { id: "medical", label: "Medical Coverage" },
  { id: "cancellation", label: "Trip Cancellation" },
  { id: "baggage", label: "Lost Baggage" },
  { id: "activities", label: "Adventure Activities" },
  { id: "electronics", label: "Electronics Coverage" },
];

interface TravelFormProps {
  onFormUpdate: (formData: any) => void;
}

const TravelForm = ({ onFormUpdate }: TravelFormProps) => {
  const [destination, setDestination] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>(
    addOns.reduce((acc, addon) => ({ ...acc, [addon.id]: false }), {})
  );

  const handleAddOnChange = (id: string, checked: boolean) => {
    setSelectedAddOns((prev) => ({ ...prev, [id]: checked }));
  };

  // Update parent component when form changes
  React.useEffect(() => {
    const formData = {
      destination,
      age,
      budget,
      duration,
      departureDate,
      returnDate,
      addOns: Object.entries(selectedAddOns)
        .filter(([_, selected]) => selected)
        .map(([id]) => id),
    };
    onFormUpdate(formData);
  }, [
    destination,
    age,
    budget,
    duration,
    departureDate,
    returnDate,
    selectedAddOns,
    onFormUpdate,
  ]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger id="destination" className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {destinations.map((dest) => (
                <SelectItem key={dest} value={dest}>
                  {dest}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Trip Duration</Label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger id="duration" className="w-full">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {durations.map((dur) => (
                <SelectItem key={dur} value={dur}>
                  {dur}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age Range</Label>
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger id="age" className="w-full">
              <SelectValue placeholder="Select age range" />
            </SelectTrigger>
            <SelectContent>
              {ageRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !departureDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? (
                  format(departureDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Return Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !returnDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? (
                  format(returnDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                initialFocus
                disabled={(date) =>
                  departureDate ? date < departureDate : false
                }
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-lg">Insurance Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className="flex items-center justify-between space-x-2 p-4 border rounded-lg"
            >
              <Label htmlFor={addon.id} className="cursor-pointer">
                {addon.label}
              </Label>
              <Switch
                id={addon.id}
                checked={selectedAddOns[addon.id]}
                onCheckedChange={(checked) =>
                  handleAddOnChange(addon.id, checked)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
