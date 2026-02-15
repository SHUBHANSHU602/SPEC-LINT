import fs from 'fs';

export interface LintConfig {
  rules?: Record<string, 'error' | 'warning' | 'info' | 'off'>;
}

export function loadConfig(): LintConfig {
  const path = '.spec-lintrc.json';

  if (!fs.existsSync(path)) {
    return {};
  }

  const raw = fs.readFileSync(path, 'utf-8');
  return JSON.parse(raw);
}
