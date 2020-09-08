# Create image based on the official Node 10 image from dockerhub
FROM node:10-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/web

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/web

# Copy dependency definitions
COPY package*.json /usr/src/web/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/web/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]