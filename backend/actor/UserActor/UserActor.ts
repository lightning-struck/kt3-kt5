import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import path from "path";
import { Responder } from "../middleware/Responder";
import { PrismaClient } from "@prisma/client";
import { Pool } from "../middleware/Pool";

export class UserActor {
  static async signin(req: Request, res: Response) {
    try {
      const { login, password } = req.body;

      const user = await Pool.conn.user.findFirst({ where: { login } });

      if (!user) {
        return res.status(404).json(Responder.forbidden("Пользователь не найден"));
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res.status(403).json(Responder.forbidden("Неверный пароль"));
      }

      const token = jwt.sign(
        { userId: user.id }, // ✅ Теперь передаём userId
        process.env.SECRET_KEY!,
        { expiresIn: '7d' }
      );

      return res.json(Responder.ok({
        token,
        user: {
          id: user.id,
          login: user.login,
          email: user.email
        }
      }));

    } catch (e) {
      console.error(e);
      return res.status(500).json(Responder.forbidden("Ошибка сервера"));
    }
  }
  static async getCurrentUser(req: Request, res: Response) {
    console.log('userId из middleware:', req.userId); // Добавьте эту строку
    try {

      if (!req.userId) {
        return res.status(401).json({ error: 'Требуется авторизация' });
      }

      const user = await Pool.conn.user.findUnique({
        where: { id: req.userId },
        select: {
          id: true,
          login: true,
          email: true,
          phone: true
        }
      });

      if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }

      return res.json(user);
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
      return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  }
  static async signup(req: Request, res: Response) {
    try {
      const { login, password, email, phone } = req.body;

      if (!login || !password || !email || !phone) {
        return res.status(400).json(Responder.forbidden("Некорректные данные"));
      }

      const candidate = await Pool.conn.user.findFirst({
        where: { OR: [{ login }, { email }, { phone }] }
      });

      if (candidate) {
        return res.status(409).json(Responder.forbidden("Пользователь уже существует"));
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const user = await Pool.conn.user.create({
        data: { login, phone, email, password: hashPassword }
      });

      const token = jwt.sign(
        { login: user.login },
        process.env.SECRET_KEY || "DEFAULT_SECRET_KEY",
        { expiresIn: "24h" }
      );

      return res.status(201).json(Responder.ok({ token, user }));

    } catch (e) {
      console.error(e);
      return res.status(500).json(Responder.forbidden("Ошибка сервера"));
    }
  }
}

/*

{
    {
        user: {id: 1...},
        basket: [
            {id: 1, productId: 1},
            {id: 2, productId: 2},
            {id: 3, productId: 3}
        ]
    },
    {
        user: {id: 2...},
        basket: [
            {id: 1, productId: 1},
            {id: 2, productId: 2},
            {id: 3, productId: 3}
        ]
    }
}

*/

// curl --header "Content-Type: application/json" --request POST  --data '{"login":"xyz","password":"xyz"}' http://localhost:5000/user/signup
