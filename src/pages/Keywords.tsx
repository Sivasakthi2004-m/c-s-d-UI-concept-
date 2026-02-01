import { Layout } from '@/components/Layout';
import { KeywordInput } from '@/components/KeywordInput';
import { ResultsTable } from '@/components/ResultsTable';
import { useMonitoring } from '@/hooks/useMonitoring';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Keywords = () => {
    const {
        keywords,
        results,
        isScanning,
        addKeyword,
        removeKeyword,
        scanAllKeywords,
    } = useMonitoring();

    return (
        <Layout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Keywords</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Manage your monitored keywords and tracking rules
                        </p>
                    </div>
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4" />
                        Add Keyword
                    </Button>
                </div>

                {/* Keyword Input Component */}
                <KeywordInput
                    keywords={keywords}
                    onAddKeyword={addKeyword}
                    onRemoveKeyword={removeKeyword}
                    onScanAll={scanAllKeywords}
                    isScanning={isScanning}
                />

                {/* Results Table */}
                <ResultsTable results={results} />
            </div>
        </Layout>
    );
};

export default Keywords;
