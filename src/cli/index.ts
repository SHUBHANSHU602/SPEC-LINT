#!/usr/bin/env node

import { parseFile } from '../parser';
import { runRules } from '../core/engine';
import { rules } from '../rules';
import { prettyFormat } from '../formatters/pretty';
import { jsonFormat } from '../formatters/json';
import { loadConfig } from '../core/config';

const args = process.argv.slice(2);

if (args[0] !== 'lint' || !args[1]) {
  console.error('Usage: spec-lint lint <file> [--format json]');
  process.exit(1);
}

const filePath = args[1];
const format = args.includes('--format') && args.includes('json')
  ? 'json'
  : 'pretty';

const data = parseFile(filePath);
const config = loadConfig();

const diagnostics = runRules(
  { filePath, data },
  rules,
  config
);

if (format === 'json') {
  jsonFormat(diagnostics);
} else {
  prettyFormat(diagnostics);
}

if (diagnostics.some(d => d.severity === 'error')) {
  process.exit(1);
}
