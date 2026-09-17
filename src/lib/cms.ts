import fs from 'fs';
import path from 'path';

export function getCmsData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'cms.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading CMS data:', error);
    return null;
  }
}
