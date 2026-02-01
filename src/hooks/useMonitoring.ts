import { useState, useCallback, useEffect } from 'react';
import { Keyword, ScanResult, Alert, ScanStats } from '@/types/monitoring';
import { generateMockResult, generateInitialResults } from '@/data/mockData';

export const useMonitoring = () => {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [results, setResults] = useState<ScanResult[]>(generateInitialResults());
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [stats, setStats] = useState<ScanStats>({
    totalScans: 0,
    activeKeywords: 0,
    highRiskFindings: 0,
    lastScanTime: null,
  });

  // Update stats when results change
  useEffect(() => {
    setStats((prev) => ({
      ...prev,
      activeKeywords: keywords.length,
      highRiskFindings: results.filter((r) => r.riskLevel === 'high').length,
    }));
  }, [keywords, results]);

  const addKeyword = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return false;
    
    const exists = keywords.some(
      (k) => k.value.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) return false;

    const newKeyword: Keyword = {
      id: `kw-${Date.now()}`,
      value: trimmed,
      addedAt: new Date(),
      isScanning: false,
    };

    setKeywords((prev) => [...prev, newKeyword]);
    return true;
  }, [keywords]);

  const removeKeyword = useCallback((id: string) => {
    setKeywords((prev) => prev.filter((k) => k.id !== id));
  }, []);

  const scanKeyword = useCallback(async (keyword: Keyword) => {
    setKeywords((prev) =>
      prev.map((k) => (k.id === keyword.id ? { ...k, isScanning: true } : k))
    );

    // Simulate scan delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 2000));

    // Generate random number of results (0-3)
    const resultCount = Math.floor(Math.random() * 4);
    const newResults: ScanResult[] = [];

    for (let i = 0; i < resultCount; i++) {
      const result = generateMockResult(keyword.value);
      newResults.push(result);

      // Create alert for high risk findings
      if (result.riskLevel === 'high') {
        const alert: Alert = {
          id: `alert-${Date.now()}-${i}`,
          keyword: keyword.value,
          message: `High risk finding detected: ${result.details}`,
          riskLevel: 'high',
          timestamp: new Date(),
          isRead: false,
        };
        setAlerts((prev) => [alert, ...prev]);
      }
    }

    setResults((prev) => [...newResults, ...prev]);
    setKeywords((prev) =>
      prev.map((k) => (k.id === keyword.id ? { ...k, isScanning: false } : k))
    );
    setStats((prev) => ({
      ...prev,
      totalScans: prev.totalScans + 1,
      lastScanTime: new Date(),
    }));

    return newResults;
  }, []);

  const scanAllKeywords = useCallback(async () => {
    if (keywords.length === 0 || isScanning) return;
    
    setIsScanning(true);
    
    for (const keyword of keywords) {
      await scanKeyword(keyword);
    }
    
    setIsScanning(false);
  }, [keywords, isScanning, scanKeyword]);

  const markAlertAsRead = useCallback((id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isRead: true } : a))
    );
  }, []);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  const getRiskDistribution = useCallback(() => {
    const distribution = { low: 0, medium: 0, high: 0 };
    results.forEach((r) => {
      distribution[r.riskLevel]++;
    });
    return distribution;
  }, [results]);

  return {
    keywords,
    results,
    alerts,
    stats,
    isScanning,
    addKeyword,
    removeKeyword,
    scanKeyword,
    scanAllKeywords,
    markAlertAsRead,
    clearAlerts,
    getRiskDistribution,
  };
};
