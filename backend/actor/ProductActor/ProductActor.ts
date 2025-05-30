import { Request, Response } from "express";
import { Responder } from "../middleware/Responder";
import { Pool } from "../middleware/Pool";

export class ProductActor {
    static async createProduct(req: Request, res: Response) {
        try {
            const { title, price, description } = req.body
            const product = await Pool.conn.product.create({
                data: {
                    title, price, description
                }
            })
            res.json(Responder.ok(product))
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createQuickOrder(req: Request, res: Response) {
        try {
            const { productId, phone, name, email } = req.body;

            // Проверка обязательных полей
            if (!productId || !phone) {
                return res.status(400).json(Responder.forbidden("Необходимо указать ID продукта и телефон"));
            }

            // Создаем заказ
            const order = await Pool.conn.order.create({
                data: {
                    phone,
                    name: name || null,
                    email: email || null,
                    total_price: 0, // или установите позже, если есть цена
                    status: 'NEW'
                }
            });

            // Создаем заказ-товар (OrderItem) с переданным productId
            await Pool.conn.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: Number(productId), // передайте как есть
                    price_at_order: 0,
                    quantity: 1
                }
            });

            return res.status(200).json(Responder.ok({
                orderId: order.id,
                message: "Заказ успешно создан"
            }));
        } catch (e) {
            console.log(e);
            return res.status(500).json(Responder.internal());
        }
    }
    static async createProductFeature(req: Request, res: Response) { }
    static async createProductFilter(req: Request, res: Response) { }
    static async createProductFilterItem(req: Request, res: Response) { }
    static async createProductImage(req: Request, res: Response) { }
    static async createProductType(req: Request, res: Response) { }
}