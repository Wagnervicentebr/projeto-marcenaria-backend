import { Router } from "express";

import ProductController from "./controllers/productController"

const routes = Router();

routes.get('/products', ProductController.index)
routes.post('/createProduct', ProductController.create)
routes.put('/updateProduct', ProductController.update)
routes.delete('/deleteProduct', ProductController.delete)

export default routes;