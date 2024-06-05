FROM node:22.2.0-alpine3.19 AS base

WORKDIR /opt/app

FROM base AS npm

COPY package.json package-lock.json ./

RUN corepack enable npm && corepack install

FROM npm AS deps

ENV NODE_ENV=production

RUN npm ci

FROM npm AS dev-deps

ENV NODE_ENV=development

RUN npm ci

FROM dev-deps AS test

ENV NODE_ENV=test

COPY . .

RUN npx prisma generate

FROM npm AS development

VOLUME [ "/opt/app/.next" ]

CMD ["npm", "run", "dev"]

FROM npm AS builder

COPY . .

COPY --from=dev-deps /opt/app/node_modules /opt/app/node_modules

RUN npx prisma generate

RUN npm run build \
  # Move the static files to a standalone directory
  # Ideally those files should be served by a CDN
  && cp -r .next/static .next/standalone/.next/ \
  && cp -r public .next/standalone/

FROM base AS release

ENV NODE_ENV=production

COPY --from=builder /opt/app/.next/standalone /opt/app/

CMD [ "server.js" ]
