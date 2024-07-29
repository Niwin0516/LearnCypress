# Use the official Cypress image as the base
FROM cypress/included:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies, excluding optional ones to avoid platform-specific issues


# Copy the rest of your project files into the container
COPY . .

# The default command to run when the container starts
# Adjust this command based on how you want to run your tests
CMD ["npm", "run", "test"]