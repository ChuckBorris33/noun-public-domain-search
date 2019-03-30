FROM node:8

WORKDIR /home/node/app

COPY . .

RUN yarn install

EXPOSE 8080

CMD [ "yarn", "serve" ]