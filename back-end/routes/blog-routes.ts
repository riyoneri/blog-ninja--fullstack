import { Router } from "express";
import * as blogController from "../controllers/blog-controller";

const router = Router();

router.post("/blogs", blogController.createBlog);

export default router;
