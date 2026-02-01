export type RiskLevel = 'low' | 'medium' | 'high';

export interface Keyword {
  id: string;
  value: string;
  addedAt: Date;
  isScanning: boolean;
}

export interface ScanResult {
  id: string;
  keyword: string;
  source: string;
  riskLevel: RiskLevel;
  timestamp: Date;
  details: string;
}

export interface Alert {
  id: string;
  keyword: string;
  message: string;
  riskLevel: RiskLevel;
  timestamp: Date;
  isRead: boolean;
}

export interface ScanStats {
  totalScans: number;
  activeKeywords: number;
  highRiskFindings: number;
  lastScanTime: Date | null;
}
