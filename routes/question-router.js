import { Router } from "express";
import QuestionController from "../controllers/question-controller.js";

const router = new Router();

router.post('/', QuestionController.create);
router.get('/', QuestionController.getAll);
router.get('/:id', QuestionController.getOne);
router.put('/', QuestionController.update);
router.delete('/:id', QuestionController.delete);

export default router;