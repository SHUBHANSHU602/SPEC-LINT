import { Diagnostic } from './diagnostic';
import { RuleContext } from './context';

export function runRules(
  ctx: RuleContext,
  rules: any[]
): Diagnostic[] {
  let diagnostics: Diagnostic[] = [];

  for (const rule of rules) {
    try {
      const result = rule.run(ctx);
      diagnostics = diagnostics.concat(result);
    } catch (err) {
      diagnostics.push({
        ruleId: rule.id || 'unknown-rule',
        severity: 'error',
        message: 'Rule execution failed'
      });
    }
  }

  return diagnostics;
}
