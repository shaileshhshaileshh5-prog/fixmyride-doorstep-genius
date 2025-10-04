import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceOil from "@/assets/service-oil.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceBrake from "@/assets/service-brake.jpg";
import serviceCheckup from "@/assets/service-checkup.jpg";

const services = [
  {
    title: "General Service",
    description: "Complete vehicle inspection and basic maintenance",
    image: serviceGeneral,
  },
  {
    title: "Engine Oil Change",
    description: "Premium quality oil change with filter replacement",
    image: serviceOil,
  },
  {
    title: "Battery Replacement",
    description: "New battery installation with testing and warranty",
    image: serviceBattery,
  },
  {
    title: "Brake/Clutch Repair",
    description: "Expert brake and clutch system repair and replacement",
    image: serviceBrake,
  },
  {
    title: "Full Vehicle Checkup",
    description: "Comprehensive diagnostic and health check",
    image: serviceCheckup,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional vehicle care services delivered to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full rounded-lg" variant="default">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
