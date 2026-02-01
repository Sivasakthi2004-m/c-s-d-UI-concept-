import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Search, FileText, Settings, Bell, Activity } from 'lucide-react';

export const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/keywords', icon: Activity, label: 'Keywords' },
        { path: '/alerts', icon: Bell, label: 'Alerts' },
        { path: '/search', icon: Search, label: 'Search' },
        { path: '/reports', icon: FileText, label: 'Reports' },
        { path: '/settings', icon: Settings, label: 'Settings' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <aside className="w-64 bg-card border-r border-border min-h-screen flex flex-col">
            {/* Logo/Brand */}
            <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Shield className="w-7 h-7 text-primary" />
                        <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-50" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-foreground">
                            Dark<span className="text-primary">Watch</span>
                        </h1>
                        <p className="text-[10px] text-muted-foreground font-mono">
                            Threat Monitor
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
                ${active
                                    ? 'bg-primary/10 text-primary border-l-2 border-primary'
                                    : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                                }
              `}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* System Status */}
            <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/10 border border-success/30">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-medium text-success">System Active</span>
                </div>
            </div>
        </aside>
    );
};
