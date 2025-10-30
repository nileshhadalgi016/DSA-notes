const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'template.html');
const CONFIG_PATH = path.join(ROOT_DIR, 'config.json');

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Read config
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

console.log('🚀 Starting HTML generation...\n');

// Process each topic
config.topics.forEach(topic => {
    const folderPath = path.join(ROOT_DIR, topic.folder);
    const readmePath = path.join(folderPath, 'README.md');
    const outputPath = path.join(folderPath, 'index.html');
    
    if (!fs.existsSync(readmePath)) {
        console.log(`⚠️  Skipping ${topic.folder}: README.md not found`);
        return;
    }
    
    // Read and convert markdown
    const markdownContent = fs.readFileSync(readmePath, 'utf8');
    const htmlContent = marked.parse(markdownContent);
    
    // Generate HTML from template
    let html = template
        .replace(/\{\{TITLE\}\}/g, topic.title)
        .replace('{{CONTENT}}', htmlContent)
        .replace('{{PDF_FILE}}', topic.pdfFile);
    
    // Write HTML file
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`✅ Generated: ${topic.folder}/index.html`);
});

console.log('\n🎉 HTML generation complete!');
