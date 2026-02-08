#!/usr/bin/env node

import { parseFile } from '../parser';
import { runRules } from '../core/engine';
import { genericRules } from '../rules';
import { prettyFormat } from '../formatters/pretty';

const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== 'lint') {
  console.error('Usage: spec-lint lint <file>');
  process.exit(1);
}

const filePath = args[1];

let data;
try {
  data = parseFile(filePath);
} catch (err: any) {
  console.error(`Failed to parse file: ${err.message}`);
  process.exit(1);
}

const diagnostics = runRules(
  { filePath, data },
  genericRules
);

prettyFormat(diagnostics);
