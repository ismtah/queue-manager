FROM node:10-alpine
#WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g node-pre-gyp
RUN npm install -g node-gyp
RUN npm install --no-bin-links

COPY . /usr/src/app

CMD [ "node", "app.js" ]