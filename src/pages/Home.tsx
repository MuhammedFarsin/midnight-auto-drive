import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Every vehicle undergoes rigorous inspection and certification"
    },
    {
      icon: Award,
      title: "Luxury Selection",
      description: "Curated collection of the world's finest automobiles"
    },
    {
      icon: Star,
      title: "Expert Service",
      description: "Dedicated specialists for personalized customer experience"
    },
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Fast and secure delivery to your preferred location"
    }
  ];

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury car" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-left max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">Luxury</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Redefined
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Experience the pinnacle of automotive excellence with our curated collection of premium vehicles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="xl" className="group" asChild>
                <Link to="/inventory">
                  Book Your Ride
                  <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
              <Button variant="luxurySecondary" size="xl">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Premium Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-luxury-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose <span className="text-accent">Car Zone</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver an unparalleled automotive experience through premium service, 
              luxury selection, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="car-card group cursor-pointer">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-luxury-charcoal via-luxury-blue to-luxury-charcoal">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              Ready to Drive Your
              <span className="block text-accent">Dream Car?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our exclusive collection and find the perfect luxury vehicle 
              that matches your style and ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/inventory">
                  Explore Inventory
                </Link>
              </Button>
              <Button variant="luxurySecondary" size="xl">
                Schedule Test Drive
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;