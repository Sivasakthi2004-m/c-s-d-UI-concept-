import { Layout } from '@/components/Layout';
import { StatsCards } from '@/components/StatsCards';
import { RiskChart } from '@/components/RiskChart';
import { useMonitoring } from '@/hooks/useMonitoring';
import { Activity, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const { stats, getRiskDistribution, results } = useMonitoring();

  const recentResults = results.slice(0, 5);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Overview of your threat monitoring system
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards stats={stats} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risk Chart */}
          <div className="lg:col-span-1">
            <RiskChart distribution={getRiskDistribution()} />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>

              <div className="space-y-3">
                {recentResults.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No recent activity. Start by adding keywords to monitor.
                  </p>
                ) : (
                  recentResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${result.riskLevel === 'high'
                              ? 'bg-destructive'
                              : result.riskLevel === 'medium'
                                ? 'bg-warning'
                                : 'bg-success'
                            }`}
                        />
                        <div>
                          <p className="text-sm font-mono text-foreground">{result.keyword}</p>
                          <p className="text-xs text-muted-foreground">{result.source}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(result.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Run Scan</p>
                <p className="text-xs text-muted-foreground">Scan all keywords</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-chart-4/10">
                <TrendingUp className="w-5 h-5 text-chart-4" />
              </div>
              <div>
                <p className="font-medium text-foreground">View Reports</p>
                <p className="text-xs text-muted-foreground">Analytics & insights</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-warning/10">
                <Activity className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="font-medium text-foreground">Check Alerts</p>
                <p className="text-xs text-muted-foreground">Review notifications</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
