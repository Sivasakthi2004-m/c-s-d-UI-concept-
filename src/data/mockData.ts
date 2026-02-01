import { RiskLevel, ScanResult } from '@/types/monitoring';

export const darkWebSources = [
  'TorMarket Forums',
  'BreachForums',
  'Dread Marketplace',
  'Empire Market',
  'Dark0de Reborn',
  'Russian Market',
  'Genesis Market',
  'XSS.is Forum',
  'Exploit.in',
  'RaidForums Archive',
  'Telegram Dark Channels',
  'Pastebin Leaks',
  'Discord Data Dumps',
  'IRC Underground',
  'Onion Chan',
];

export const riskDescriptions: Record<RiskLevel, string[]> = {
  high: [
    'Full credentials exposed with plaintext password',
    'Active sale of personal data detected',
    'Recent data breach containing this keyword',
    'Multiple occurrences in active threat databases',
    'Associated with ongoing phishing campaign',
  ],
  medium: [
    'Partial information leaked',
    'Found in older data dumps',
    'Mentioned in threat actor discussions',
    'Associated email found in breach database',
    'Username variant detected in dark forums',
  ],
  low: [
    'Indirect reference found',
    'Possible false positive match',
    'Historical mention with no current activity',
    'Similar keyword in unrelated context',
    'Archived forum post reference',
  ],
};

export const generateMockResult = (keyword: string): ScanResult => {
  const riskLevels: RiskLevel[] = ['low', 'medium', 'high'];
  const riskWeights = [0.5, 0.35, 0.15]; // 50% low, 35% medium, 15% high
  
  const random = Math.random();
  let riskLevel: RiskLevel = 'low';
  if (random > riskWeights[0] + riskWeights[1]) {
    riskLevel = 'high';
  } else if (random > riskWeights[0]) {
    riskLevel = 'medium';
  }

  const source = darkWebSources[Math.floor(Math.random() * darkWebSources.length)];
  const details = riskDescriptions[riskLevel][
    Math.floor(Math.random() * riskDescriptions[riskLevel].length)
  ];

  return {
    id: `result-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    keyword,
    source,
    riskLevel,
    timestamp: new Date(),
    details,
  };
};

export const generateInitialResults = (): ScanResult[] => {
  const sampleKeywords = ['admin@company.com', 'john.doe', '+1-555-0123'];
  const results: ScanResult[] = [];
  
  sampleKeywords.forEach((keyword) => {
    const count = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < count; i++) {
      const result = generateMockResult(keyword);
      result.timestamp = new Date(Date.now() - Math.random() * 86400000 * 7);
      results.push(result);
    }
  });

  return results.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};
