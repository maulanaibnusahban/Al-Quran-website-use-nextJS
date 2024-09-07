# Node Install
FROM node:20.11.1

# Set directory to /app
WORKDIR /app

COPY package.js

# Install packages
RUN npm install

# copy files to /app
COPY . .

# Build This Project
RUN npm run build

# create port 80 
EXPOSE 80

# Define environment variable
ENV API_QURAN="https://equran.id/api/v2/surat/"

# Run app.py when the container launches
CMD ["npm", "start"]
