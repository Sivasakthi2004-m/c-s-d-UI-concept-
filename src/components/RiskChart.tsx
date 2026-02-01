import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BarChart3 } from 'lucide-react';

interface RiskChartProps {
  distribution: { low: number; medium: number; high: number };
}

export const RiskChart = ({ distribution }: RiskChartProps) => {
  const data = [
    { name: 'High Risk', value: distribution.high, color: 'hsl(0, 85%, 55%)' },
    { name: 'Medium Risk', value: distribution.medium, color: 'hsl(38, 92%, 50%)' },
    { name: 'Low Risk', value: distribution.low, color: 'hsl(142, 76%, 45%)' },
  ];

  const total = distribution.low + distribution.medium + distribution.high;

  if (total === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Risk Distribution</h2>
        </div>
        <div className="h-[200px] flex items-center justify-center">
          <p className="text-muted-foreground text-sm">No data to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Risk Distribution</h2>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="hsl(222, 47%, 8%)"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 8%)',
                border: '1px solid hsl(222, 30%, 18%)',
                borderRadius: '8px',
                color: 'hsl(180, 100%, 95%)',
              }}
              labelStyle={{ color: 'hsl(180, 100%, 95%)' }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-muted-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="text-center p-2 rounded bg-secondary/30"
          >
            <p
              className="text-xl font-bold font-mono"
              style={{ color: item.color }}
            >
              {item.value}
            </p>
            <p className="text-xs text-muted-foreground">{item.name.split(' ')[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
