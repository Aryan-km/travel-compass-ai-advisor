
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Destination {
  name: string;
  image: string;
  insuranceTip: string;
}

const destinations: Destination[] = [
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    insuranceTip: "Popular for adventure coverage & medical insurance",
  },
  {
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    insuranceTip: "Ski insurance & emergency evacuation coverage essential",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    insuranceTip: "Weather protection & trip cancellation recommended",
  },
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    insuranceTip: "Desert adventure & luxury travel coverage",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    insuranceTip: "Urban travel & medical coverage recommended",
  },
];

const PopularDestinations = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Popular Destinations & Insurance Tips</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {destinations.map((destination, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 card-gradient">
                  <h3 className="font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {destination.insuranceTip}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopularDestinations;
