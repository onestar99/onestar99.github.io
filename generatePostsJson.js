// generatePostsJson.js

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
  const uncategorizeTitle = 'Uncategorized'; // 카테고리 미분류 이름
  
  if (titleLine) {
    const match = titleLine.match(/# \[(.+)\]/);
    if (match) {
      const category = match[1].trim();
      const title = titleLine.replace(/# \[.+\]/, '').trim();
      return { id, title, category };
    } else {
      const title = titleLine.replace('#', '').trim();
      return { id, title, category: uncategorizeTitle };
    }
  }
  
  return { id, title: 'No Title', category: uncategorizeTitle };
});

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));