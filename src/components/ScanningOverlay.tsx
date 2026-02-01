import { Loader2, Shield, Radio } from 'lucide-react';

interface ScanningOverlayProps {
  isVisible: boolean;
}

export const ScanningOverlay = ({ isVisible }: ScanningOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="relative inline-block">
          <Shield className="w-20 h-20 text-primary animate-pulse" />
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-ping" />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping animation-delay-200" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
            <span className="text-lg font-semibold text-foreground">
              Scanning Dark Web Sources
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            Analyzing threat databases and underground forums...
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Radio className="w-3 h-3 animate-pulse text-primary" />
          <span className="font-mono">Active connections: 147</span>
        </div>
      </div>
    </div>
  );
};
