import { PrismaClient } from "@prisma/client";

export class Pool {
    static conn = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL?.replace('localhost', 'postgres') || ''
      }
    }
  })
}