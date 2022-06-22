import { Router } from "express";
import QuestionController from "../controllers/question-controller.js";

const QuestionRouter = new Router();

QuestionRouter.post('/', QuestionController.create);
QuestionRouter.get('/', QuestionController.getAll);
QuestionRouter.get('/:id', QuestionController.getOne);
QuestionRouter.put('/', QuestionController.update);
QuestionRouter.delete('/:id', QuestionController.delete);

export default QuestionRouter;