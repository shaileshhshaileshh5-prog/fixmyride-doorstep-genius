import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Car Owner",
    rating: 5,
    text: "Excellent service! The mechanic arrived on time and fixed my car right at my doorstep. Very professional and reasonably priced.",
  },
  {
    name: "Priya Sharma",
    role: "Bike Owner",
    rating: 5,
    text: "I was amazed by how convenient this service is. No more waiting at service centers. Highly recommended!",
  },
  {
    name: "Amit Patel",
    role: "Car Owner",
    rating: 5,
    text: "The mechanic was very knowledgeable and explained everything clearly. Great experience overall!",
  },
  {
    name: "Sneha Reddy",
    role: "Bike Owner",
    rating: 5,
    text: "Fast, reliable, and transparent pricing. FixMyRide has become my go-to for all vehicle repairs.",
  },
  {
    name: "Vikram Singh",
    role: "Car Owner",
    rating: 5,
    text: "Outstanding service! The quality of work is excellent and the convenience is unbeatable.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
