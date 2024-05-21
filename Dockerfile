# Use an official Node.js runtime as a parent image
FROM node:16.9.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 13308

# Define the command to run the app
CMD ["node", "server.js"]
