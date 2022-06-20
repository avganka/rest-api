import { Router } from "express";
import PostRouter from './post-router.js';
import QuestionRouter from './question-router.js';

const router = new Router();

router.use('/posts', PostRouter);
router.use('/questions', QuestionRouter);

export default router;