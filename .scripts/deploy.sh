#!/bin/bash


set -e
echo "Deployment started of ecom-suites website ...."#!/bin/bash

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

current_dir=$(pwd)
echo "Current Directory: $current_dir"

echo "Installing Dependencies..."
npm install 

echo "Creating Production Build..."
echo "running build command ..."
npm run build

echo "PM2 Reload"
pm2 reload ecomsuites

echo "Deployment Finished!"