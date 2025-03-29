# --- stage 1 --- build Stage

FROM node:22-alpine As builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# --- stage 2 --- Production Stage

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE  8000

CMD ["node", "index.js"]