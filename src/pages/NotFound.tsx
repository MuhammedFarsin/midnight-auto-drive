import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background page-transition">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-display font-bold text-accent">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-semibold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground">
            The luxury experience you're looking for has taken a different route.
          </p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
