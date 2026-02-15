import { Diagnostic, Severity } from './diagnostic';

export interface RuleContext {
  filePath: string;
  data: any;
}

export interface Rule {
  id: string;
  defaultSeverity: Severity;
  run(ctx: RuleContext): Diagnostic[];
}
