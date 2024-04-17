const fs = require('fs');
const path = require('path');

const markdownDirectory = path.join(__dirname, 'public', 'blogmd');
const outputFile = path.join(__dirname, 'src', 'assets', 'posts.json');

const getMarkdownFiles = (dir) => {
  const files = fs.readdirSync(dir);
  const markdownFiles = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      markdownFiles.push(...getMarkdownFiles(filePath));
    } else if (path.extname(file) === '.md') {
      markdownFiles.push(filePath);
    }
  });

  return markdownFiles;
};

const markdownFiles = getMarkdownFiles(markdownDirectory);

const posts = markdownFiles.map((filePath) => {
  const relativePath = path.relative(markdownDirectory, filePath);
  const id = path.basename(relativePath, '.md');
  const category = path.dirname(relativePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleLine = content.split('\n').find((line) => line.startsWith('# '));

  if (titleLine) {
    const title = titleLine.replace('# ', '').trim();
    return { id, title, category };
  }

  return { id, title: 'No Title', category };
});

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));