import { Diagnostic } from './diagnostic';
import { RuleContext, Rule } from './context';
import { LintConfig } from './config';

export function runRules(
  ctx: RuleContext,
  rules: Rule[],
  config?: LintConfig
): Diagnostic[] {
  let results: Diagnostic[] = [];

  for (const rule of rules) {
    const level = config?.rules?.[rule.id];

    if (level === 'off') continue;

    const diagnostics = rule.run(ctx).map(d => ({
      ...d,
      severity: level ?? rule.defaultSeverity
    }));

    results = results.concat(diagnostics);
  }

  return results;
}
