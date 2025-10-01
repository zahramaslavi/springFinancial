import { Router } from "express";
import { getProducts, productsGenerage} from "../controllers";

const routes = Router();

routes.post("/products/generate", productsGenerage);
routes.post("/products", getProducts);

export default routes;
