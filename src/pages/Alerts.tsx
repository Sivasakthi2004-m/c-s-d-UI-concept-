import { Layout } from '@/components/Layout';
import { AlertsPanel } from '@/components/AlertsPanel';
import { useMonitoring } from '@/hooks/useMonitoring';
import { Bell, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Alerts = () => {
    const { alerts, markAlertAsRead, clearAlerts } = useMonitoring();

    const unreadCount = alerts.filter((a) => !a.isRead).length;
    const highRiskCount = alerts.filter((a) => a.riskLevel === 'high').length;

    return (
        <Layout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Alerts</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Monitor and manage security alerts
                        </p>
                    </div>
                    {alerts.length > 0 && (
                        <Button variant="outline" onClick={clearAlerts} className="gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Mark All Read
                        </Button>
                    )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Alerts</p>
                                <p className="text-3xl font-bold text-foreground mt-2">{alerts.length}</p>
                            </div>
                            <Bell className="w-8 h-8 text-primary" />
                        </div>
                    </Card>

                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Unread</p>
                                <p className="text-3xl font-bold text-foreground mt-2">{unreadCount}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                                <Bell className="w-5 h-5 text-destructive" />
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">High Risk</p>
                                <p className="text-3xl font-bold text-destructive mt-2">{highRiskCount}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                                <span className="text-xl">⚠</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Alerts Panel */}
                <AlertsPanel
                    alerts={alerts}
                    onMarkAsRead={markAlertAsRead}
                    onClearAll={clearAlerts}
                />
            </div>
        </Layout>
    );
};

export default Alerts;
