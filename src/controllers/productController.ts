import { Request, Response } from "express";

import Product from "../schemas/Product";

class ProductController {
    public async index (req: Request, res: Response): Promise<Response> {
        const product = await Product.find();

        return res.json(product);
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const product = await Product.create(req.body);

        return res.json(product);
    }

    public async update (req: Request, res: Response): Promise<Response> {
        
        const {_id, update} = req.body;
        
        const product = await Product.findOneAndUpdate({_id: _id}, update);

        return res.json(product);
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        
        const id = req.body.id;
        
        const product = await Product.findOneAndDelete({_id: id});

        return res.json(product);
    }
} 

export default new ProductController()