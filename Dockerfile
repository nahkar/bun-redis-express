FROM oven/bun:1.1.8-alpine

WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "dist/index.js"]
