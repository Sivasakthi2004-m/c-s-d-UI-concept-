import { useNavigate } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { NotificationsDropdown } from './NotificationsDropdown';
import { useMonitoring } from '@/hooks/useMonitoring';

export const TopHeader = () => {
    const navigate = useNavigate();
    const { alerts, markAlertAsRead } = useMonitoring();

    return (
        <header className="h-16 bg-card border-b border-border/50 flex items-center px-6 justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search keywords, alerts, or reports..."
                    className="pl-10 bg-background border-border/50 h-9 text-sm"
                />
            </div>

            {/* Right Side - Spacer and Icons */}
            <div className="flex items-center gap-4 ml-auto">
                {/* Notifications Dropdown */}
                <NotificationsDropdown alerts={alerts} onMarkAsRead={markAlertAsRead} />

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-border/50">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-foreground">Security Admin</p>
                        <p className="text-xs text-muted-foreground">Enterprise Plan</p>
                    </div>
                    <button
                        onClick={() => navigate('/login')}
                        className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 hover:border-primary/50 border border-border transition-all"
                    >
                        <User className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </header>
    );
};
