import { Router } from "express";
// import PostRouter from './post-router.js';
import QuestionRouter from './question-router.js';
import PackRouter from './pack-router.js';
import CategoryRouter from './category-router.js';

const router = new Router();

// router.use('/posts', PostRouter);
router.use('/questions', QuestionRouter);
router.use('/packs', PackRouter);
router.use('/categories', CategoryRouter);

export default router;