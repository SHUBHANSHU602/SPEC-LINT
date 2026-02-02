import { parseJson } from './json';
import { parseYaml } from './yaml';

export function parseFile(filePath: string): any {
  if (filePath.endsWith('.json')) return parseJson(filePath);
  if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) {
    return parseYaml(filePath);
  }
  throw new Error('Unsupported file type');
}
