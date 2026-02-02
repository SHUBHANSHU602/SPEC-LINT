export type Severity = 'error' | 'warning' | 'info';

export interface Diagnostic {
  ruleId: string;
  severity: Severity;
  message: string;
  path?: string;
  line?: number;
  suggestion?: string;
}
