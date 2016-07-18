FROM nodesource/node:4.0

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 8888
CMD [ "npm", "start" ]  
