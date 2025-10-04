import { Search, MapPin, Wrench, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Service",
    description: "Select from our range of vehicle repair and maintenance services",
  },
  {
    icon: MapPin,
    title: "Mechanic Comes to You",
    description: "A certified mechanic arrives at your doorstep at the scheduled time",
  },
  {
    icon: Wrench,
    title: "Get It Fixed Quickly",
    description: "Professional repair and service completed right at your location",
  },
  {
    icon: CreditCard,
    title: "Pay Securely & Rate",
    description: "Make secure payment and rate the service experience",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your vehicle serviced in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-hero rounded-full flex items-center justify-center shadow-md">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground mx-auto left-0 right-0">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
