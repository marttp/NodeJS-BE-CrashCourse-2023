FROM node:18.16-alpine3.16
LABEL MAINTAINER="Thanaphoom Babparn"
WORKDIR /app

COPY package.json ./package.json

RUN npm install --production

COPY . .

RUN mkdir logs

EXPOSE 8080

CMD ["npm", "start"]