import { Shield, Activity, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                Dark<span className="text-primary text-glow-primary">Web</span> Monitor
              </h1>
              <p className="text-xs text-muted-foreground font-mono">
                Threat Intelligence Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
              <Activity className="w-3.5 h-3.5 text-success animate-pulse" />
              <span className="text-xs font-medium text-success">System Active</span>
            </div>

            {/* Account Icon */}
            <button
              onClick={() => navigate('/login')}
              className="relative p-2 rounded-full border border-border bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 group"
              aria-label="Account login"
            >
              <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
