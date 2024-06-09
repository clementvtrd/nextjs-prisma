FROM node:22.2.0-alpine3.19 AS base

WORKDIR /opt/app

FROM base AS npm

COPY package.json package-lock.json ./

RUN corepack enable npm && corepack install

RUN npm ci

FROM npm AS development

ENV NODE_ENV=development

VOLUME [ "/opt/app/.next" ]

CMD ["npm", "run", "dev"]

FROM npm AS builder

ENV NODE_ENV=production

COPY . .

COPY --from=npm /opt/app/node_modules /opt/app/node_modules

RUN npx prisma generate

RUN npm run build \
  # Move the static files to a standalone directory
  # Ideally those files should be served by a CDN
  && cp -r .next/static .next/standalone/.next/ \
  && cp -r public .next/standalone/

FROM builder AS test

ENV NODE_ENV=test

COPY . .

FROM base AS release

ENV NODE_ENV=production

COPY --from=builder /opt/app/.next/standalone /opt/app/

CMD [ "server.js" ]
