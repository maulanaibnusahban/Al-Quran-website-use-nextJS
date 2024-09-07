# Use official Node.js image from Docker Hub
FROM node:20.11.1

# Set working directory to /app
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Build the project
RUN npm run build

# Expose the port that the app will run on
EXPOSE 80

# Define environment variable
ENV API_QURAN="https://equran.id/api/v2/surat/"

# Start the app
CMD ["npm", "start"]
