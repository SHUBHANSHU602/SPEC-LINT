import { Diagnostic } from '../../core/diagnostic';
import { RuleContext } from '../../core/context';

export const requiredFieldsRule = {
  id: 'required-fields',
  severity: 'error',

  run(ctx: RuleContext): Diagnostic[] {
    const diagnostics: Diagnostic[] = [];

    if (!ctx.data || typeof ctx.data !== 'object') {
      return diagnostics;
    }

    if (!ctx.data.name) {
      diagnostics.push({
        ruleId: this.id,
        severity: 'error',
        message: 'Missing required field: name',
        path: '$.name',
        suggestion: 'Add a top-level "name" field'
      });
    }

    return diagnostics;
  }
};
