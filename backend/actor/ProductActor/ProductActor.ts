import { Request, Response } from "express";
import { Responder } from "../middleware/Responder";
import { Pool } from "../middleware/Pool";

export class ProductActor {
    static async createProduct(req: Request, res: Response) {
        try {
            const {title, price, description} = req.body
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
    static async createProductFeature(req: Request, res: Response) {}
    static async createProductFilter(req: Request, res: Response) {}
    static async createProductFilterItem(req: Request, res: Response) {}
    static async createProductImage(req: Request, res: Response) {}
    static async createProductType(req: Request, res: Response) {}
}