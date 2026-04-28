FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY src/ ./src/

ENTRYPOINT ["node", "src/index.js"]