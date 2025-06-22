#!/bin/bash

# Personal Portfolio - Automated Setup Script

echo "🚀 Setting up Personal Portfolio project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "📦 Please install Node.js first:"
    echo "   Option 1: brew install node"
    echo "   Option 2: Download from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    echo "📦 npm should come with Node.js. Please reinstall Node.js."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Navigate to project directory
PROJECT_DIR="/Users/brady/Code/personal/Personal-Portfolio"
if [ -d "$PROJECT_DIR" ]; then
    cd "$PROJECT_DIR"
else
    echo "❌ Project directory not found: $PROJECT_DIR"
    exit 1
fi

echo "📂 Working in: $(pwd)"

# Clean install (remove existing node_modules if any)
if [ -d "node_modules" ]; then
    echo "🧹 Cleaning existing node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "🧹 Removing package-lock.json..."
    rm package-lock.json
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev     - Start development server"
    echo "   npm run build   - Build for production"
    echo "   npm run start   - Start production server"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
