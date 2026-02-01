import { useState } from 'react';
import { Bell, AlertTriangle, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/types/monitoring';

interface NotificationsDropdownProps {
    alerts: Alert[];
    onMarkAsRead: (id: string) => void;
}

export const NotificationsDropdown = ({ alerts, onMarkAsRead }: NotificationsDropdownProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const unreadAlerts = alerts.filter((a) => !a.isRead);
    const recentAlerts = alerts.slice(0, 5);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button className="relative p-2 rounded-lg hover:bg-muted/30 transition-colors">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    {unreadAlerts.length > 0 && (
                        <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0 bg-card border-border" align="end">
                {/* Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-foreground">Notifications</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            {unreadAlerts.length} unread
                        </p>
                    </div>
                    {unreadAlerts.length > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                unreadAlerts.forEach((alert) => onMarkAsRead(alert.id));
                            }}
                            className="text-xs h-7"
                        >
                            <Check className="w-3 h-3 mr-1" />
                            Mark all read
                        </Button>
                    )}
                </div>

                {/* Notifications List */}
                <ScrollArea className="h-[400px]">
                    {recentAlerts.length === 0 ? (
                        <div className="p-8 text-center">
                            <Bell className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground">No notifications yet</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-border">
                            {recentAlerts.map((alert) => (
                                <div
                                    key={alert.id}
                                    className={`p-4 hover:bg-muted/30 transition-colors cursor-pointer ${!alert.isRead ? 'bg-primary/5' : ''
                                        }`}
                                    onClick={() => {
                                        if (!alert.isRead) {
                                            onMarkAsRead(alert.id);
                                        }
                                        setOpen(false);
                                        navigate('/alerts');
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`p-2 rounded-lg ${alert.riskLevel === 'high'
                                                    ? 'bg-destructive/10'
                                                    : alert.riskLevel === 'medium'
                                                        ? 'bg-warning/10'
                                                        : 'bg-success/10'
                                                }`}
                                        >
                                            <AlertTriangle
                                                className={`w-4 h-4 ${alert.riskLevel === 'high'
                                                        ? 'text-destructive'
                                                        : alert.riskLevel === 'medium'
                                                            ? 'text-warning'
                                                            : 'text-success'
                                                    }`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="text-sm font-medium text-foreground truncate">
                                                    {alert.keyword}
                                                </p>
                                                {!alert.isRead && (
                                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                                {alert.message}
                                            </p>
                                            <p className="text-xs text-muted-foreground/70 mt-2">
                                                {format(alert.timestamp, 'MMM d, h:mm a')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollArea>

                {/* Footer */}
                {recentAlerts.length > 0 && (
                    <div className="p-3 border-t border-border">
                        <Button
                            variant="ghost"
                            className="w-full justify-between h-9 text-sm"
                            onClick={() => {
                                setOpen(false);
                                navigate('/alerts');
                            }}
                        >
                            View all alerts
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
};
