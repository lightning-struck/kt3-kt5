import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import "dotenv/config";
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Требуется авторизация' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { userId?: number };
    
    console.log('Декодированный токен:', decoded);
    
    if (!decoded.userId) {
      return res.status(401).json({ error: 'Неверный формат токена: отсутствует userId' });
    }
    
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('Ошибка верификации токена:', error);
    return res.status(401).json({ error: 'Неверный токен' });
  }
}