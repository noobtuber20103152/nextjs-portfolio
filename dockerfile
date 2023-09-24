FROM node:latest

WORKDIR /frotnend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev