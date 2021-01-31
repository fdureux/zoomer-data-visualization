FROM node:15.7.0

COPY package.json package-lock.json index.js /app/

COPY datasets/* /app/datasets/

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD npm start