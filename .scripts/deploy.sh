#!/bin/bash


set -e
echo "Deployment started of ecom-suites website ...."#!/bin/bash

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload ecomsuites

echo "Deployment Finished!"