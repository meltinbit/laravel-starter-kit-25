#!/bin/bash

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    php artisan key:generate
fi

# Install/Update PHP dependencies
echo "Installing/Updating PHP dependencies..."
composer install

# Install/Update Node.js dependencies
echo "Installing/Updating Node.js dependencies..."
npm install

# Run database migrations
echo "Running database migrations..."
php artisan migrate

# Start development servers
echo "Starting development servers..."
composer run dev
