const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'template.html');
const CONFIG_PATH = path.join(ROOT_DIR, 'config.json');

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

console.log('🚀 Starting HTML generation...\n');

// Auto-discover all day folders
const folders = fs.readdirSync(ROOT_DIR)
    .filter(item => {
        const fullPath = path.join(ROOT_DIR, item);
        return fs.statSync(fullPath).isDirectory() && item.startsWith('day-');
    })
    .sort((a, b) => {
        const numA = parseInt(a.split('-')[1]);
        const numB = parseInt(b.split('-')[1]);
        return numA - numB;
    });

const topics = [];

// Process each day folder
folders.forEach(folder => {
    const folderPath = path.join(ROOT_DIR, folder);
    const readmePath = path.join(folderPath, 'README.md');
    const outputPath = path.join(folderPath, 'index.html');
    
    if (!fs.existsSync(readmePath)) {
        console.log(`⚠️  Skipping ${folder}: README.md not found`);
        return;
    }
    
    // Read markdown content
    const markdownContent = fs.readFileSync(readmePath, 'utf8');
    
    // Extract title from first H1 in markdown
    const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : folder;
    
    // Extract description from first paragraph after title
    const descMatch = markdownContent.match(/^#\s+.+\n+(.+)$/m);
    const description = descMatch ? descMatch[1].substring(0, 100) + '...' : 'Click to view notes';
    
    // Find all PDF files in the folder
    const pdfFiles = fs.existsSync(folderPath) 
        ? fs.readdirSync(folderPath).filter(file => file.endsWith('.pdf'))
        : [];
    
    // Convert markdown to HTML
    const htmlContent = marked.parse(markdownContent);
    
    // Generate PDF download buttons HTML
    let pdfButtonsHtml = '';
    if (pdfFiles.length > 0) {
        if (pdfFiles.length === 1) {
            // Single PDF - simple "Download as PDF" button
            pdfButtonsHtml = `<a href="${pdfFiles[0]}" class="download-btn" download>
                📥 Download as PDF
            </a>`;
        } else {
            // Multiple PDFs - show all with names
            pdfButtonsHtml = pdfFiles.map(pdfFile => 
                `<a href="${pdfFile}" class="download-btn" download>
                    📥 ${pdfFile.replace('.pdf', '')}
                </a>`
            ).join('\n            ');
        }
    } else {
        pdfButtonsHtml = '<p class="no-pdf">PDF notes will be available soon</p>';
    }
    
    // Generate HTML from template
    let html = template
        .replace(/\{\{TITLE\}\}/g, title)
        .replace('{{CONTENT}}', htmlContent)
        .replace('{{PDF_BUTTONS}}', pdfButtonsHtml);
    
    // Write HTML file
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`✅ Generated: ${folder}/index.html`);
    
    // Add to topics list for config
    const dayNumber = parseInt(folder.split('-')[1]);
    topics.push({
        day: `Day ${dayNumber}`,
        title: title.replace(/^Day \d+:\s*/, ''),
        description: description,
        folder: folder
    });
});

// Auto-generate/update config.json
let extraTopics = [];

if (fs.existsSync(CONFIG_PATH)) {
    try {
        const existingConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
        if (Array.isArray(existingConfig.extraTopics)) {
            extraTopics = [...existingConfig.extraTopics].sort((a, b) => {
                const orderA = typeof a.order === 'number' ? a.order : 0;
                const orderB = typeof b.order === 'number' ? b.order : 0;
                return orderA - orderB;
            });
        }
    } catch (error) {
        console.warn('⚠️  Unable to read existing config.json extras:', error.message);
    }
}

const config = { topics, extraTopics };
fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
console.log(`\n📝 Updated config.json with ${topics.length} topics`);

console.log('\n🎉 HTML generation complete!');
