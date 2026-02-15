import { Diagnostic } from '../core/diagnostic';

export function prettyFormat(diagnostics: Diagnostic[]) {
  if (diagnostics.length === 0) {
    console.log('No issues found');
    return;
  }

  for (const d of diagnostics) {
    const location = d.path ? ` ${d.path}` : '';
    console.log(
      `${d.severity.toUpperCase()}  ${d.ruleId}  ${d.message}${location}`
    );
  }
}
