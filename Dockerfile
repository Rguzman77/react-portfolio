# Utilizamos una imagen base de Node.js con la versión deseada
FROM node:14-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --production
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
