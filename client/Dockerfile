FROM node:22-alpine

RUN npm install --global pm2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

USER node

# Запускаем через PM2 (вариант 1 - для Next.js)
CMD ["pm2-runtime", "start", "npm", "--", "start"]