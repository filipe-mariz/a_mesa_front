FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY ./src ./src
COPY ./public ./public
COPY ./patches ./patches
COPY package.json .
COPY client.js .

RUN yarn

RUN yarn build

EXPOSE 6811

CMD [ "node", "client" ]
