FROM node:16.9.1
WORKDIR /Users/moham/OneDrive/Desktop/NEWBITCHES/NodeAPI/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 13306
CMD ["node", "server.js"]

