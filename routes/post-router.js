import { Router } from "express";
import PostController from "../controllers/post-controller.js";

const PostRouter = new Router();

PostRouter.post('/', PostController.create);
PostRouter.get('/', PostController.getAll);
PostRouter.get('/:id', PostController.getOne);
PostRouter.put('/', PostController.update);
PostRouter.delete('/:id', PostController.delete);

export default PostRouter;