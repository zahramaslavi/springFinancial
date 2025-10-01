import { Router } from "express";
import { 
    searchProduct
} from "../controllers/search";

const routes = Router();

routes.get("/products/search/:searchKeyword", searchProduct);


export default routes;
