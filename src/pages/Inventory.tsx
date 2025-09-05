import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Star, Calendar, Fuel, Settings } from "lucide-react";

// Import car images
import carBmw from "@/assets/car-bmw.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carAudi from "@/assets/car-audi.jpg";
import carTesla from "@/assets/car-tesla.jpg";
import carHonda from "@/assets/car-honda.jpg";

const Inventory = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cars = [
    {
      id: 1,
      name: "BMW M8 Competition",
      brand: "BMW",
      year: 2024,
      price: 165000,
      image: carBmw,
      category: "luxury",
      type: "Coupe",
      fuel: "Gasoline",
      transmission: "Automatic",
      features: ["Twin-Turbo V8", "All-Wheel Drive", "Carbon Fiber"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Mercedes-AMG GT R Pro",
      brand: "Mercedes-Benz",
      year: 2024,
      price: 198000,
      image: carMercedes,
      category: "luxury",
      type: "Coupe",
      fuel: "Gasoline", 
      transmission: "Automatic",
      features: ["Track Performance", "Carbon Fiber Body", "Race Suspension"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Audi R8 V10 Performance",
      brand: "Audi",
      year: 2024,
      price: 175000,
      image: carAudi,
      category: "luxury",
      type: "Coupe",
      fuel: "Gasoline",
      transmission: "Automatic",
      features: ["Naturally Aspirated V10", "Quattro AWD", "Carbon Ceramic Brakes"],
      rating: 4.7
    },
    {
      id: 4,
      name: "Tesla Model S Plaid",
      brand: "Tesla",
      year: 2024,
      price: 89000,
      image: carTesla,
      category: "budget",
      type: "Sedan",
      fuel: "Electric",
      transmission: "Automatic",
      features: ["1020 HP", "Autopilot", "Over-the-Air Updates"],
      rating: 4.6
    },
    {
      id: 5,
      name: "Honda Civic Type R",
      brand: "Honda",
      year: 2024,
      price: 45000,
      image: carHonda,
      category: "budget",
      type: "Hatchback",
      fuel: "Gasoline",
      transmission: "Manual",
      features: ["VTEC Turbo", "Limited Slip Differential", "Track Mode"],
      rating: 4.5
    }
  ];

  const filteredCars = cars.filter((car) => {
    const matchesCategory = selectedCategory === "all" || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-24 page-transition">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            Premium <span className="text-accent">Inventory</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked collection of luxury and performance vehicles, 
            each one carefully selected to exceed your expectations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-card p-6 rounded-xl border border-border">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="budget">Performance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing <span className="text-accent font-semibold">{filteredCars.length}</span> vehicles
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Card key={car.id} className="car-card group overflow-hidden">
              {/* Car Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      car.category === 'luxury' 
                        ? 'bg-accent/20 text-accent border-accent/30' 
                        : 'bg-secondary/20 text-secondary border-secondary/30'
                    } backdrop-blur-sm`}
                  >
                    {car.category === 'luxury' ? 'Luxury' : 'Performance'}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold text-foreground line-clamp-1">
                      {car.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-medium text-accent">{car.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{car.brand} • {car.year}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-1">
                      <Settings className="h-3 w-3" />
                      <span>{car.type}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Fuel className="h-3 w-3" />
                      <span>{car.fuel}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {car.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-display font-bold text-accent">
                      {formatPrice(car.price)}
                    </div>
                    <div className="text-sm text-muted-foreground">Starting price</div>
                  </div>
                  <Button variant="luxury" size="sm">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                No vehicles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button 
                variant="luxury" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;