# Use the official Node.js image
FROM node:23

# Set the working directory inside the container
WORKDIR /app

# Install dependencies for the frontend
COPY package.json package-lock.json ./
RUN npm install

# Copy the frontend code into the container
COPY . .

# Build the frontend (production build)
RUN npm run build

# Install json-server and http-server to serve the frontend
RUN npm install -g json-server serve

# Expose the ports
EXPOSE 8080
EXPOSE 3000

# Serve the static files and start json-server
CMD ["sh", "-c", "serve -s dist -p 8080 & json-server --watch db.json --port 3000"]
