FROM node:22.2.0-alpine3.19 AS base

RUN npm install -g npm@10.8.0

WORKDIR /opt/app

COPY . .

FROM base AS development

CMD ["npm", "run", "dev"]

