FROM nodesource/node:4.0

ADD package.json package.json
RUN npm install
ADD . .
RUN chmod +x run.sh

EXPOSE 8888
CMD ./run.sh
