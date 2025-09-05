import { useEffect, useState } from "react";

const LoadingPage = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-luxury-charcoal to-luxury-blue flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Car Outline */}
        <div className="relative w-80 h-40 mx-auto">
          <svg
            viewBox="0 0 400 160"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 120 L80 80 L120 70 L280 70 L320 80 L350 120 L350 140 L320 140 L320 130 L300 130 L300 140 L100 140 L100 130 L80 130 L80 140 L50 140 Z M90 110 A15 15 0 1 1 120 110 A15 15 0 1 1 90 110 M280 110 A15 15 0 1 1 310 110 A15 15 0 1 1 280 110"
              stroke="url(#goldGradient)"
              strokeWidth="3"
              fill="none"
              className="car-outline"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--luxury-gold))" />
                <stop offset="50%" stopColor="hsl(var(--luxury-gold-dark))" />
                <stop offset="100%" stopColor="hsl(var(--luxury-gold))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Text */}
        <div className="space-y-2">
          <h1 className="text-6xl font-display font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Car Zone Luxury
          </h1>
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Premium Automotive Experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-2">
          <div className="h-1 bg-luxury-charcoal-lighter rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-accent text-sm font-medium">{progress}%</p>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--luxury-gold))_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </div>
  );
};

export default LoadingPage;