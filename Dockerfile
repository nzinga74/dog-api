FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["yarn", "dev"]
