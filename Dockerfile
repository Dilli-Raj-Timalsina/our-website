FROM node:20-alpine

WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]



# command to execute 
# docker build -t our-website .
# docker run -p 3000:3000 -v ./app:/app/app -v ./components:/app/components our-website