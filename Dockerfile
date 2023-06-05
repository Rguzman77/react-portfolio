# Stage 1: Build the React app
FROM node:14.17.0 AS builder

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app
FROM node:14.17.0-alpine

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Install serve to run the app
RUN npm install -g serve

# Expose the port where the app will run
EXPOSE 3000

# Set the command to start the app
CMD ["serve", "-s", "dist"]

