import { Diagnostic } from '../core/diagnostic';

export function jsonFormat(diagnostics: Diagnostic[]) {
  console.log(JSON.stringify(diagnostics, null, 2));
}
