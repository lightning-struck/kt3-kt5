FROM oven/bun:1

# Установка зависимостей
RUN apt-get update && apt-get install -y openssl

WORKDIR /app

# Копируем зависимости отдельно для кэширования
COPY package.json .
COPY prisma/schema.prisma ./prisma/

# Установка зависимостей и генерация Prisma клиента
RUN bun install
RUN bunx prisma generate

# Копируем остальные файлы
COPY . .

EXPOSE 5000

# Исправленная команда (убраны квадратные скобки)
CMD bun run dev