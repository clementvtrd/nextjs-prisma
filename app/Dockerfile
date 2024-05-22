FROM node:22.2.0-alpine3.19 AS base

WORKDIR /opt/app

COPY . .

FROM base AS development

CMD ["npm", "run", "dev"]

