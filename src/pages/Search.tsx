import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Search as SearchIcon, Filter, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = [
        {
            id: 1,
            keyword: 'admin@company.com',
            source: 'TorMarket Forums',
            category: 'Email',
            date: '2 hours ago',
            risk: 'high',
        },
        {
            id: 2,
            keyword: 'internal-api-key',
            source: 'BreachForums',
            category: 'Credential',
            date: '1 day ago',
            risk: 'medium',
        },
        {
            id: 3,
            keyword: '+1-555-0123',
            source: 'Telegram Dark Channels',
            category: 'Phone',
            date: '5 hours ago',
            risk: 'low',
        },
    ];

    return (
        <Layout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Search</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Deep scan across dark web sources and databases
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Export Results
                    </Button>
                </div>

                {/* Search Bar */}
                <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search keywords, domains, IPs, emails, or credentials..."
                                className="pl-10 bg-background border-border h-11 font-mono"
                            />
                        </div>
                        <Button className="h-11 px-6 bg-primary hover:bg-primary/90">
                            <SearchIcon className="w-4 h-4 mr-2" />
                            Search
                        </Button>
                        <Button variant="outline" size="icon" className="h-11 w-11">
                            <Filter className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Quick Filters */}
                    <div className="flex gap-2 mt-4">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                            Email
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                            Domain
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                            Credential
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                            IP Address
                        </Badge>
                    </div>
                </div>

                {/* Search Results */}
                <div className="bg-card border border-border rounded-lg">
                    <div className="p-4 border-b border-border flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Search Results</h2>
                        <span className="text-sm text-muted-foreground">{searchResults.length} findings</span>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="border-border hover:bg-transparent">
                                <TableHead>Keyword</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Source</TableHead>
                                <TableHead>Risk</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {searchResults.map((result) => (
                                <TableRow key={result.id} className="border-border">
                                    <TableCell className="font-mono text-sm">{result.keyword}</TableCell>
                                    <TableCell>{result.category}</TableCell>
                                    <TableCell className="text-muted-foreground text-sm">{result.source}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={`
                        ${result.risk === 'high' ? 'risk-badge-high' : ''}
                        ${result.risk === 'medium' ? 'risk-badge-medium' : ''}
                        ${result.risk === 'low' ? 'risk-badge-low' : ''}
                      `}
                                        >
                                            {result.risk}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-sm">{result.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
