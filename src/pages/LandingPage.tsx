import { Link } from 'react-router-dom';
import { Leaf, TrendingUp, Users, Sparkles } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo/Icon */}
        <div className="mb-8 animate-float">
          <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center">
            <Leaf size={48} strokeWidth={2.5} className="text-lime" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Small Habits,<br />
          <span className="text-coral">Big Impact</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-muted-foreground text-center max-w-md mb-10">
          Join Team Runtime in the fight against climate change.
        </p>

        {/* CTA Button */}
        <Link to="/login" className="btn-coral text-lg px-10 py-4">
          Get Started
        </Link>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
            <TrendingUp size={18} strokeWidth={2.5} className="text-lime" />
            <span className="text-sm font-medium text-foreground">Track Carbon</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
            <Users size={18} strokeWidth={2.5} className="text-coral" />
            <span className="text-sm font-medium text-foreground">Compete</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
            <Sparkles size={18} strokeWidth={2.5} className="text-lime" />
            <span className="text-sm font-medium text-foreground">Earn Badges</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-sm text-muted-foreground">
          ClimateChange+ by Team Runtime
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
