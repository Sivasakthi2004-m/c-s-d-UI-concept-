import { AlertTriangle, Bell, Check, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert } from '@/types/monitoring';

interface AlertsPanelProps {
  alerts: Alert[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
}

export const AlertsPanel = ({ alerts, onMarkAsRead, onClearAll }: AlertsPanelProps) => {
  const unreadCount = alerts.filter((a) => !a.isRead).length;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="w-5 h-5 text-primary" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </div>
          <h2 className="text-lg font-semibold">Alerts</h2>
        </div>
        {alerts.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      <ScrollArea className="h-[300px]">
        {alerts.length === 0 ? (
          <div className="p-8 text-center">
            <AlertTriangle className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No alerts yet</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`
                  p-4 transition-all duration-200 animate-slide-in
                  ${alert.isRead ? 'opacity-60' : 'bg-destructive/5 border-l-2 border-l-destructive'}
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="font-mono text-sm font-medium truncate">
                        {alert.keyword}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {alert.message}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1 font-mono">
                      {format(alert.timestamp, 'MMM d, HH:mm:ss')}
                    </p>
                  </div>
                  {!alert.isRead && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onMarkAsRead(alert.id)}
                      className="flex-shrink-0 h-8 w-8 text-muted-foreground hover:text-success"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
