import { format } from 'date-fns';
import { FileSearch, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScanResult, RiskLevel } from '@/types/monitoring';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResultsTableProps {
  results: ScanResult[];
}

const getRiskBadgeClass = (level: RiskLevel): string => {
  switch (level) {
    case 'high':
      return 'risk-badge-high';
    case 'medium':
      return 'risk-badge-medium';
    case 'low':
      return 'risk-badge-low';
  }
};

const getRiskLabel = (level: RiskLevel): string => {
  return level.charAt(0).toUpperCase() + level.slice(1);
};

export const ResultsTable = ({ results }: ResultsTableProps) => {
  if (results.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <FileSearch className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-medium text-muted-foreground">No Results Yet</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Add keywords and run a scan to see results
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileSearch className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Scan Results</h2>
        </div>
        <span className="text-sm text-muted-foreground font-mono">
          {results.length} findings
        </span>
      </div>

      <ScrollArea className="h-[400px]">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground font-semibold">Keyword</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Source</TableHead>
              <TableHead className="text-muted-foreground font-semibold">Risk Level</TableHead>
              <TableHead className="text-muted-foreground font-semibold hidden md:table-cell">Details</TableHead>
              <TableHead className="text-muted-foreground font-semibold text-right">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow
                key={result.id}
                className="border-border hover:bg-secondary/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
              >
                <TableCell className="font-mono text-sm text-foreground">
                  {result.keyword}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{result.source}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${getRiskBadgeClass(result.riskLevel)} font-medium`}
                  >
                    {getRiskLabel(result.riskLevel)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground max-w-[250px] truncate">
                  {result.details}
                </TableCell>
                <TableCell className="text-right font-mono text-xs text-muted-foreground">
                  {format(result.timestamp, 'MMM d, HH:mm')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};
