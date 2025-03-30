const fs = require('fs').promises;
const path = require('path');

// Default directories to ignore
const DEFAULT_IGNORE_DIRS = [
  'node_modules',
  '.git',
  'dist',
  'build'
];

// Extensions that are likely to be binary files
const BINARY_EXTENSIONS = [
  'png', 'jpg', 'jpeg', 'gif', 'bmp', 'ico', 'webp',
  'mp3', 'mp4', 'avi', 'mov', 'wmv', 'flv',
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
  'zip', 'tar', 'gz', 'rar', '7z',
  'exe', 'dll', 'so', 'dylib'
];

async function collectCodebase(directoryPath, outputPath, ignoreList = DEFAULT_IGNORE_DIRS) {
  try {
    // Create or overwrite the output file with a header
    const header = `// Codebase collection from ${directoryPath}\n// Generated: ${new Date().toISOString()}\n\n`;
    await fs.writeFile(outputPath, header);
    
    // Track statistics
    const stats = { fileCount: 0, skippedCount: 0 };
    
    // Walk through the directory recursively
    await processDirectory(directoryPath, outputPath, ignoreList, stats);
    
    // Add a footer with statistics
    const footer = `\n\n// Collection completed: Processed ${stats.fileCount} files, skipped ${stats.skippedCount} binary files`;
    await fs.appendFile(outputPath, footer);
    
    console.log(`Successfully collected codebase from ${directoryPath} to ${outputPath}`);
    console.log(`Processed ${stats.fileCount} files, skipped ${stats.skippedCount} binary files`);
  } catch (error) {
    console.error(`Error collecting codebase: ${error.message}`);
  }
}

async function processDirectory(directoryPath, outputPath, ignoreList, stats) {
  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const entryPath = path.join(directoryPath, entry.name);
      
      if (entry.isDirectory()) {
        // Skip directories in the ignore list
        if (ignoreList.includes(entry.name)) {
          continue;
        }
        
        // Recursively process subdirectories
        await processDirectory(entryPath, outputPath, ignoreList, stats);
      } else {
        // Process file
        await processFile(entryPath, outputPath, stats);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directoryPath}: ${error.message}`);
  }
}

function isBinaryFile(filePath) {
  const ext = path.extname(filePath).toLowerCase().substring(1);
  return BINARY_EXTENSIONS.includes(ext);
}

async function processFile(filePath, outputPath, stats) {
  try {
    // Check if this is likely a binary file
    if (isBinaryFile(filePath)) {
      // Add a note about skipping the binary file
      const output = `\n\n${'='.repeat(80)}\n// FILE: ${filePath}\n// [BINARY FILE - CONTENT SKIPPED]\n${'='.repeat(80)}`;
      await fs.appendFile(outputPath, output);
      stats.skippedCount++;
      return;
    }
    
    // Read file contents
    const content = await fs.readFile(filePath, 'utf8');
    
    // Prepare output with file path and separator
    const separator = '='.repeat(80);
    const output = `\n\n${separator}\n// FILE: ${filePath}\n${separator}\n\n${content}`;
    
    // Append to output file
    await fs.appendFile(outputPath, output);
    
    // Update statistics
    stats.fileCount++;
  } catch (error) {
    // If we can't read as utf8, it might be a binary file
    const output = `\n\n${'='.repeat(80)}\n// FILE: ${filePath}\n// [ERROR OR BINARY FILE - CONTENT SKIPPED: ${error.message}]\n${'='.repeat(80)}`;
    await fs.appendFile(outputPath, output);
    stats.skippedCount++;
  }
}

// Main function to run the script
async function main() {
  // Get command line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
Usage: node collect-codebase.js <directory-path> <output-path> [ignore-dirs]

Arguments:
  <directory-path>   The root directory to collect code from
  <output-path>      The path for the output file
  [ignore-dirs]      Optional comma-separated list of directories to ignore

Examples:
  node collect-codebase.js ./src ./codebase.txt
  node collect-codebase.js ./src ./codebase.txt node_modules,.git,dist
`);
    return;
  }
  
  const directoryPath = args[0];
  const outputPath = args[1];
  
  // Parse ignore list if provided
  let ignoreList = DEFAULT_IGNORE_DIRS;
  if (args.length > 2 && args[2].trim() !== '') {
    ignoreList = args[2].split(',').map(dir => dir.trim());
  }
  
  await collectCodebase(directoryPath, outputPath, ignoreList);
}

// Run the script
main();