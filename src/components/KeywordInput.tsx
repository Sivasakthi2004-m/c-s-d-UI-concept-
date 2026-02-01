import { useState } from 'react';
import { Plus, Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Keyword } from '@/types/monitoring';

interface KeywordInputProps {
  keywords: Keyword[];
  onAddKeyword: (value: string) => boolean;
  onRemoveKeyword: (id: string) => void;
  onScanAll: () => void;
  isScanning: boolean;
}

export const KeywordInput = ({
  keywords,
  onAddKeyword,
  onRemoveKeyword,
  onScanAll,
  isScanning,
}: KeywordInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!inputValue.trim()) {
      setError('Please enter a keyword');
      return;
    }

    const success = onAddKeyword(inputValue);
    if (success) {
      setInputValue('');
    } else {
      setError('Keyword already exists');
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Keyword Monitoring</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError('');
            }}
            placeholder="Enter email, phone, username, or company name..."
            className="bg-background border-border font-mono text-sm h-11 pr-4 focus:border-primary focus:ring-primary/20"
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          className="h-11 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </form>

      {error && (
        <p className="text-sm text-destructive animate-fade-in-up">{error}</p>
      )}

      {keywords.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Badge
                key={keyword.id}
                variant="secondary"
                className={`
                  py-2 px-3 text-sm font-mono flex items-center gap-2 
                  bg-secondary/50 border border-border hover:border-primary/50 
                  transition-all duration-200 animate-slide-in
                  ${keyword.isScanning ? 'border-primary glow-primary' : ''}
                `}
              >
                {keyword.isScanning && (
                  <Loader2 className="w-3 h-3 animate-spin text-primary" />
                )}
                <span>{keyword.value}</span>
                <button
                  onClick={() => onRemoveKeyword(keyword.id)}
                  className="ml-1 hover:text-destructive transition-colors"
                  disabled={keyword.isScanning}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </Badge>
            ))}
          </div>

          <Button
            onClick={onScanAll}
            disabled={isScanning || keywords.length === 0}
            className="w-full sm:w-auto bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Scan All Keywords
              </>
            )}
          </Button>
        </div>
      )}

      {keywords.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Add keywords to start monitoring the dark web for potential threats
        </p>
      )}
    </div>
  );
};
