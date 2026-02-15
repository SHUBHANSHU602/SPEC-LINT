import fs from 'fs';
import yaml from 'js-yaml';

export function parseYaml(filePath: string): any {
  const content = fs.readFileSync(filePath, 'utf-8');
  return yaml.load(content);
}
