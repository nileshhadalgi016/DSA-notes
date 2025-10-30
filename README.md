# DSA Notes - Static Website

A beautiful static website for hosting daily Data Structures and Algorithms notes with automatic README to HTML conversion.

## 🌟 Features

- 📚 Automatic conversion of README.md files to HTML
- 📥 PDF download buttons for each topic
- 🎨 Clean, responsive design
- 🚀 Automatic deployment to GitHub Pages
- 📱 Mobile-friendly layout

## 📁 Project Structure

```
DSA-notes/
├── index.html              # Landing page
├── config.json             # Topics configuration
├── template.html           # HTML template for pages
├── day-1/                  # Example day folder
│   ├── README.md          # Your notes in markdown
│   └── index.html         # Generated HTML (auto-created)
├── pdf-notes/             # Store your PDF files here
│   └── day-1-arrays.pdf
├── styles/
│   ├── main.css           # Main styles
│   └── markdown.css       # Markdown content styles
├── scripts/
│   ├── generate.js        # HTML generator script
│   └── load-topics.js     # Topics loader for landing page
└── .github/workflows/
    └── deploy.yml         # GitHub Actions deployment

```

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone <your-repo-url>
cd DSA-notes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your daily notes

For each day, create a new folder and add your notes:

```bash
mkdir day-2
```

Create `day-2/README.md` with your content.

### 4. Add the topic to config.json

```json
{
  "topics": [
    {
      "day": "Day 1",
      "title": "Introduction to Arrays",
      "description": "Learn about arrays, their properties, and basic operations",
      "folder": "day-1",
      "pdfFile": "day-1-arrays.pdf"
    },
    {
      "day": "Day 2",
      "title": "Your New Topic",
      "description": "Brief description",
      "folder": "day-2",
      "pdfFile": "day-2-topic.pdf"
    }
  ]
}
```

### 5. Add PDF files

Place your PDF files in the `pdf-notes/` folder with the names specified in `config.json`.

### 6. Generate HTML files

```bash
npm run generate
```

### 7. Test locally

```bash
npm run serve
```

Visit `http://localhost:8000` in your browser.

## 📤 Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. The site will automatically deploy on every push to main branch

Your site will be available at: `https://<username>.github.io/<repository-name>/`

## 📝 Writing Notes

Write your notes in Markdown format in each day's README.md file. The generator supports:

- Headers (h1-h6)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Tables
- Links and images
- Blockquotes
- **Bold** and *italic* text

Example:

```markdown
# Day X: Topic Title

## Introduction

Your content here...

### Code Example

\`\`\`python
def example():
    print("Hello, DSA!")
\`\`\`

## Key Points

- Point 1
- Point 2
```

## 🎨 Customization

### Change Colors

Edit `styles/main.css` and modify the CSS variables:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... other colors */
}
```

### Modify Layout

- Edit `template.html` for individual page layout
- Edit `index.html` for landing page layout
- Edit CSS files in `styles/` folder

## 🤝 Contributing

Feel free to customize this for your needs!

## 📄 License

MIT License - Feel free to use this for your own learning!

---

Happy Learning! 🚀
