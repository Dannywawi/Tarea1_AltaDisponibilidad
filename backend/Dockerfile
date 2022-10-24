FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

ENV port=4000

EXPOSE 4000

CMD [ "node", "src/index.js" ]