FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

ENV port=3000

EXPOSE 3000

CMD [ "node", "src/index.js" ]