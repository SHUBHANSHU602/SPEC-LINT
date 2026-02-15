import { Rule } from '../../core/context';
import { Diagnostic } from '../../core/diagnostic';

export const requiredFieldsRule: Rule = {
  id: 'required-fields',
  defaultSeverity: 'error',

  run(ctx) {
  const diagnostics: Diagnostic[] = [];

  if (!ctx.data?.name) {
    diagnostics.push({
      ruleId: this.id,
      severity: this.defaultSeverity,
      message: 'Missing required field: name',
      path: '$.name',
      suggestion: 'Add a top-level "name" field'
    });
  }

  return diagnostics;
}
};