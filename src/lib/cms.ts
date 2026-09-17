import fs from 'fs';
import path from 'path';
import { supabase } from './supabase';

export async function getCmsData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'cms.json');
    const fallbackData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // 1. Try to fetch live data from Supabase
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('id', 'net-cms')
      .single();

    if (!error && data && data.content) {
      // Merge live data on top of fallback data deeply to prevent undefined arrays
      const mergeDeep = (target: any, source: any) => {
        if (typeof target !== 'object' || target === null) return source;
        if (typeof source !== 'object' || source === null) return source;
        
        const output = Object.assign({}, target);
        Object.keys(source).forEach(key => {
          if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            if (!(key in target)) Object.assign(output, { [key]: source[key] });
            else output[key] = mergeDeep(target[key], source[key]);
          } else {
            Object.assign(output, { [key]: source[key] });
          }
        });
        return output;
      };
      
      return mergeDeep(fallbackData, data.content);
    }
  } catch (error) {
    console.error('Error fetching CMS data from Supabase:', error);
  }

  // 2. Fallback to local file if Supabase fails
  try {
    console.log('Falling back to local cms.json');
    const filePath = path.join(process.cwd(), 'src', 'data', 'cms.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading fallback CMS data:', error);
    return null;
  }
}
