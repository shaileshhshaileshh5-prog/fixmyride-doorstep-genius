import { Award, DollarSign, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Mechanics",
    description: "All our mechanics are verified, trained, and experienced professionals",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. You know the exact cost before booking",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Quick turnaround time with guaranteed quality workmanship",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for all your service needs",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the best in doorstep vehicle service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
