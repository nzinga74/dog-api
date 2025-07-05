FROM node:20-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
FROM node:20-slim

# Instala dependências de sistema incluindo o OpenSSL 1.1
RUN apt-get update && \
    apt-get install -y openssl libssl1.1 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["yarn", "dev"]

RUN npx prisma generate

EXPOSE 3333

CMD ["yarn", "dev"]
