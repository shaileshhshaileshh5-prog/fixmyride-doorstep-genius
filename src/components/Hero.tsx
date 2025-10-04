import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mechanic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional mechanic fixing vehicle at home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your Bike & Car Serviced at Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Certified mechanics just a click away.
          </p>

          {/* Booking Bar */}
          <div id="booking" className="bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-slide-up">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Vehicle Type</label>
                <Select>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="bike">Bike</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter your location"
                    className="pl-10 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground md:opacity-0">Action</label>
                <Button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
