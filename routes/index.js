import { Router } from "express";
import index from "../controllers/index.js";
import posts from "../controllers/posts.js";
import { postValidation } from "../middlewares/validation.js";
import auth from "../middlewares/auth.js";
import users from "../controllers/users.js";

const router = Router();

router.get("/", index.homepage)

router.get("/new-post", posts.createPostGET)

router.post("/new-post", postValidation,  posts.createPostPOST);

router.post("/join", auth.isAuth, users.join);

router.post("/delete-post/:postId", auth.isAdmin, posts.deletePost);

export default router;