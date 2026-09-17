import fs from 'fs';
import path from 'path';
import { supabase } from './supabase';

export async function getCmsData() {
  try {
    // 1. Try to fetch live data from Supabase
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('id', 'net-cms')
      .single();

    if (!error && data && data.content) {
      return data.content;
    }
  } catch (error) {
    console.error('Error fetching CMS data from Supabase:', error);
  }

  // 2. Fallback to local file if Supabase fails or is empty
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
