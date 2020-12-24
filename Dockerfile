FROM mhart/alpine-node:12
COPY . /app
RUN npm install
EXPOSE 3000
ENTRYPOINT node index.js
