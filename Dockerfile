FROM node:14-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --production
COPY . /app
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
