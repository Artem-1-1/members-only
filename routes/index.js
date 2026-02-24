import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.render("index", { title: "Members Only" });
});

router.route("/new-post").get((req, res) => {
  res.render("new-post", { title: "Members Only | New Post" });
});

export default router;