import { Layout } from '@/components/Layout';
import { FileText, Download, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Reports = () => {
    const reports = [
        {
            id: 1,
            name: 'Weekly Threat Summary',
            date: 'Jan 28, 2026',
            findings: 47,
            trend: 'up',
            percentage: 12,
        },
        {
            id: 2,
            name: 'High-Risk Alerts Report',
            date: 'Jan 25, 2026',
            findings: 23,
            trend: 'down',
            percentage: 8,
        },
        {
            id: 3,
            name: 'Monthly Security Audit',
            date: 'Jan 1, 2026',
            findings: 156,
            trend: 'up',
            percentage: 23,
        },
    ];

    return (
        <Layout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Reports</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Generated reports and analytics
                        </p>
                    </div>
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                        <FileText className="w-4 h-4" />
                        Generate Report
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Reports</p>
                                <p className="text-3xl font-bold text-foreground mt-2">24</p>
                            </div>
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                    </Card>

                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">This Month</p>
                                <p className="text-3xl font-bold text-foreground mt-2">8</p>
                            </div>
                            <Calendar className="w-8 h-8 text-chart-4" />
                        </div>
                    </Card>

                    <Card className="bg-card border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Avg. Findings</p>
                                <p className="text-3xl font-bold text-foreground mt-2">52</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-warning" />
                        </div>
                    </Card>
                </div>

                {/* Reports List */}
                <div className="bg-card border border-border rounded-lg">
                    <div className="p-4 border-b border-border">
                        <h2 className="text-lg font-semibold">Recent Reports</h2>
                    </div>

                    <div className="divide-y divide-border">
                        {reports.map((report) => (
                            <div
                                key={report.id}
                                className="p-4 hover:bg-muted/30 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                                            <FileText className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{report.name}</h3>
                                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {report.date}
                                                </span>
                                                <span>{report.findings} findings</span>
                                                <span className="flex items-center gap-1">
                                                    {report.trend === 'up' ? (
                                                        <TrendingUp className="w-3 h-3 text-destructive" />
                                                    ) : (
                                                        <TrendingDown className="w-3 h-3 text-success" />
                                                    )}
                                                    {report.percentage}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reports;
