import fs from 'fs';

export function parseJson(filePath: string): any {
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}
