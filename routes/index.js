import { Router } from "express";
import index from "../controllers/index.js";
import posts from "../controllers/posts.js";
import { signupValidation, postValidation } from "../middlewares/validation.js";

const router = Router();

router.get("/", index.homepage)

router.get("/new-post", posts.createPostGET)

router.post("/new-post", postValidation,  posts.createPostPOST) 

export default router;