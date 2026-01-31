import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Leaf, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [pin, setPin] = useState(['', '']);

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input
    if (value && index < 1) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validate credentials here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      {/* Back Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={20} strokeWidth={2.5} />
        <span className="font-medium">Back</span>
      </Link>

      {/* Logo */}
      <div className="mb-8">
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
          <Leaf size={32} strokeWidth={2.5} className="text-lime" />
        </div>
      </div>

      {/* Login Card */}
      <div className="lisboa-card w-full max-w-sm">
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-foreground font-semibold">
              Mobile Number
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="+351 912 345 678"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="h-14 rounded-2xl border-2 border-primary/20 bg-cream text-foreground text-lg font-medium placeholder:text-muted-foreground focus:border-primary"
            />
          </div>

          {/* 2-Digit PIN */}
          <div className="space-y-2">
            <Label className="text-foreground font-semibold">
              2-Digit PIN
            </Label>
            <div className="flex gap-4 justify-center">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-20 h-20 text-center text-3xl font-bold rounded-2xl border-2 border-primary/20 bg-cream text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              ))}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn-jungle w-full text-lg"
          >
            Login
          </button>
        </form>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          New to ClimateChange+?{' '}
          <Link to="/login" className="text-coral font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
