FROM node:18.17.0-bullseye-slim
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
ENV PORT 3000
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
RUN npm run build
USER node
EXPOSE 3000
CMD ["npm", "run", "start"]
