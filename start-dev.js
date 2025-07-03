// Direct Node.js script to start Next.js dev server
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js development server...');

// Set environment variables to prefer SWC over Babel
process.env.NODE_OPTIONS = '--prefer-swc';

// Start the Next.js dev server using the node executable directly
const nextBin = path.join(__dirname, 'node_modules', '.bin', 'next');
const dev = spawn('node', [nextBin, 'dev'], { stdio: 'inherit' });

// Handle process exit
dev.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
});

// Handle errors
dev.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
}); 