import { Router } from "express";
import CategoryController from "../controllers/category-controller.js";

const CategoryRouter = new Router();

CategoryRouter.get('/', CategoryController.getAll);
CategoryRouter.get('/:id', CategoryController.getOne);

export default CategoryRouter;