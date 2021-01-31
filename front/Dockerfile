FROM node:15.7.0

COPY package.json package-lock.json /app/

COPY src/* /app/src/

COPY public/* /app/public/

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD npm start
