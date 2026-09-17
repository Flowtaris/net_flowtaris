const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const url = 'https://dippfmawkvpdpshtmtrh.supabase.co';
const key = process.env.SUPABASE_SERVICE_KEY_NET || '';

if (!key) {
  console.error('Missing key');
  process.exit(1);
}

const supabase = createClient(url, key);
const content = JSON.parse(fs.readFileSync('src/data/cms.json', 'utf8'));

async function seed() {
  const { error } = await supabase
    .from('page_content')
    .upsert({ id: 'net-cms', content: content, updated_at: new Date().toISOString() });
    
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Successfully seeded full CMS data to Supabase!');
  }
}
seed();
