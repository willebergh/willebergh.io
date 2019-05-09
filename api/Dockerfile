FROM node

WORKDIR /willebergh.io/api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]