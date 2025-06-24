# 1. Build Stage
FROM node:23 AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project files and build
COPY . .
RUN npm run build


# 8. Expose port and run Nginx
EXPOSE 4173:4173
CMD ["npm", "run", "preview", "--", "--host"]
