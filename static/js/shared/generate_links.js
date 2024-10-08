const fs = require('fs');
const path = require('path');

// Get the root folder from command-line arguments
const args = process.argv.slice(2);
const rootFolder = args[0] || './'; // Default to current directory if not provided

// Function to extract the title from a markdown file
const getTitleFromMarkdown = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/# (.+)/); // Matches the first level 1 header
    return titleMatch ? titleMatch[1] : path.basename(filePath, '.md'); // Fallback to file name if no title found
};

// Function to recursively search for main.md files
const findMarkdownFiles = (dir) => {
    let markdownFiles = [];

    // Read the directory contents
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively search in subdirectories
            markdownFiles = markdownFiles.concat(findMarkdownFiles(filePath));
        } else if (file === 'main.md') {
            markdownFiles.push(filePath);
        }
    });

    return markdownFiles;
};

// Main function to generate URLs
const generateUrls = () => {
    const markdownFiles = findMarkdownFiles(rootFolder);
    const urlList = markdownFiles.map((filePath) => {
        const title = getTitleFromMarkdown(filePath);
        const url = path.relative(rootFolder, filePath).replace(/\\/g, '/'); // Normalize URL for web
        return `- [${title}](${url})`;
    });

    // Output the list of URLs
    console.log(urlList.join('\n'));
};

// Check if folder parameter is provided
if (!rootFolder) {
    console.error('Please provide a folder path.');
    process.exit(1);
}

// Run the script
generateUrls();
