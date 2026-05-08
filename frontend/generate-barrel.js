import fs from 'fs';
import path from 'path';

// Get the exact directory where the user typed the terminal command
const targetDir = process.env.INIT_CWD || process.cwd();

// ==========================================
// 1. CONFIGURATION
// ==========================================
const CONFIG = {
  // Folders that should use NAMED exports (export *) instead of default exports.
  // Add your specific folder names here in lowercase.
  useNamedExports: ['context', 'hooks', 'utils', 'constants'],
  
  // Folders to completely ignore so they don't get barreled
  ignoreDirs: ['node_modules', '.git', 'assets', 'public', 'styles'],
  
  // Files to skip when reading inside the folders
  ignoreFiles: ['index.js', 'index.jsx', 'index.ts', 'index.tsx', '.DS_Store'],
  
  // Output file destination
  outputFile: path.join(targetDir, 'index.js')
};

// ==========================================
// 2. GENERATION LOGIC
// ==========================================
let barrelContent = '// AUTO-GENERATED BARREL FILE\n\n';

// Read all items in the current terminal directory
const items = fs.readdirSync(targetDir);

// Filter out only the valid directories
const directories = items.filter(item => {
  const itemPath = path.join(targetDir, item);
  return fs.statSync(itemPath).isDirectory() && !CONFIG.ignoreDirs.includes(item);
});

if (directories.length === 0) {
  console.log(`⚠️ No subdirectories found in ${targetDir} to barrel.`);
  process.exit(0);
}

// Loop through each valid directory
directories.forEach(dir => {
  const dirPath = path.join(targetDir, dir);
  const files = fs.readdirSync(dirPath).filter(file => {
    // Only grab JS/TS files and skip ignored ones
    return file.match(/\.(js|jsx|ts|tsx)$/) && !CONFIG.ignoreFiles.includes(file);
  });

  if (files.length === 0) return; // Skip if the folder is empty

  // Use the folder name as the comment header (e.g., "components" -> "// COMPONENTS")
  barrelContent += `// ${dir.toUpperCase()}\n`;
  
  files.forEach(file => {
    const name = file.replace(/\.(js|jsx|ts|tsx)$/, '');
    const importPath = `./${dir}/${file}`;
    
    // Check if this specific folder is configured to use named exports
    if (CONFIG.useNamedExports.includes(dir.toLowerCase())) {
        barrelContent += `export * from '${importPath}';\n`; 
    } else {
        barrelContent += `export { default as ${name} } from '${importPath}';\n`;
    }
  });
  
  barrelContent += '\n';
});

// Write the file to the active directory
fs.writeFileSync(CONFIG.outputFile, barrelContent.trim() + '\n');
console.log(`✅ Standardized barrel file generated at: \n${CONFIG.outputFile}`);