const fs = require('fs');
const path = require('path');

const markdownDirectory = path.join(__dirname, 'public', 'blogmd');
const outputFile = path.join(__dirname, 'src', 'assets', 'posts.json');

const markdownFiles = fs.readdirSync(markdownDirectory);

const posts = markdownFiles.map(filename => {
  const id = filename.replace('.md', '');
  const filePath = path.join(markdownDirectory, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleLine = content.split('\n').find(line => line.startsWith('# '));
  const title = titleLine ? titleLine.replace('# ', '').trim() : 'No Title';

  return { id, title };
});

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
