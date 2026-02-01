import { Activity, Search, AlertTriangle, Clock } from 'lucide-react';
import { ScanStats } from '@/types/monitoring';
import { formatDistanceToNow } from 'date-fns';

interface StatsCardsProps {
  stats: ScanStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  const statItems = [
    {
      label: 'Active Keywords',
      value: stats.activeKeywords,
      icon: Search,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
    },
    {
      label: 'Total Scans',
      value: stats.totalScans,
      icon: Activity,
      color: 'text-chart-4',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/30',
    },
    {
      label: 'High Risk Findings',
      value: stats.highRiskFindings,
      icon: AlertTriangle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/30',
    },
    {
      label: 'Last Scan',
      value: stats.lastScanTime
        ? formatDistanceToNow(stats.lastScanTime, { addSuffix: true })
        : 'Never',
      icon: Clock,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/50',
      borderColor: 'border-muted',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div
          key={item.label}
          className={`
            relative overflow-hidden rounded-lg border ${item.borderColor} 
            ${item.bgColor} p-4 transition-all duration-300 
            hover:scale-[1.02] animate-fade-in-up
          `}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {item.label}
              </p>
              <p className={`text-2xl font-bold mt-1 font-mono ${item.color}`}>
                {item.value}
              </p>
            </div>
            <item.icon className={`w-5 h-5 ${item.color} opacity-70`} />
          </div>
        </div>
      ))}
    </div>
  );
};
