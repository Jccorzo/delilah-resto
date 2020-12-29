FROM mhart/alpine-node:12
WORKDIR /app
COPY . .
ENV HOST="host.docker.internal"
RUN npm install
EXPOSE 3000
ENTRYPOINT node index.js
