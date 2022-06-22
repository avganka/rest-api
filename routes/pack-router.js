import { Router } from "express";
import PackController from "../controllers/pack-controller.js";

const PackRouter = new Router();

PackRouter.get('/', PackController.getAll);
PackRouter.get('/:id', PackController.getOne);

export default PackRouter;