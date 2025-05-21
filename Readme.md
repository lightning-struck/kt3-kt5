# Проект: Аутентификация с JWT и Docker

Полноценная система аутентификации с фронтендом, бэкендом и PostgreSQL, разворачиваемая через Docker.

## 🚀 Быстрый старт

```bash
# Сборка и запуск контейнеров
docker-compose up --build -d

# Применение миграций БД
docker-compose exec backend bunx prisma migrate dev --name init

🔍 Проверка данных в БД
docker-compose exec postgres psql -U postgres -d mydb -c "SELECT * FROM \"User\";"

🔧 Если возникли проблемы с правами
sudo chmod -R 777 ./
sudo chmod -R 777 ./client/
sudo chmod -R 777 ./backend/


🛠️ Функционал системы

🔐 Авторизация
Регистрация (Sign Up)
Валидация полей (логин, email, телефон, пароль)

Хеширование пароля с помощью bcrypt

Создание пользователя в PostgreSQL через Prisma

Генерация JWT-токена (содержит userId в payload)

Вход (Sign In)
Проверка логина/пароля

Выдача JWT-токена (срок действия - 7 дней)

🔑 Работа с токеном
Frontend
Сохранение токена в localStorage

Автоматическая передача в заголовке Authorization: Bearer <token>

Проверка валидности через /user/me при загрузке страницы

Backend
Middleware authenticate для проверки токена

Ошибки:

401 - Неверный токен

404 - Пользователь не найден

👥 Сессия пользователя
При обновлении страницы:

Токен из localStorage → Запрос /user/me → Обновление состояния

Автоматический выход при ошибке 401

Выход (Logout):

Удаление токена из localStorage

Сброс заголовка в axios

🐳 Docker-развертывание
Сеть:

Настройки CORS:

Разрешены домены: http://localhost:3000, http://frontend:3000

Разрешены заголовки: Authorization, Content-Type

Готовые Dockerfile для всех компонентов системы