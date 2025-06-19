#!/bin/bash
set -e

# Set CI to false to prevent treating warnings as errors
export CI=false

# Ensure react-scripts has proper permissions
chmod +x node_modules/.bin/react-scripts 2>/dev/null || true

# Run the build
npx react-scripts build

echo "Build completed successfully!" 