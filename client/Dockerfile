FROM node

WORKDIR /willebergh.io/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "server.js"]