import { validationResult } from "express-validator";
import db from "../db/queries.js";

async function createPostGET(req, res, next) {
  try {
    res.render("new-post", {title : "Members Only | New Post"} );
  } catch (err) {
    next(err);
  }
}

async function createPostPOST(req, res, next) {
  try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
          console.log(errors.array());
          return res.render("new-post", {
              errors: errors.array(),
              title: "Members Only | New Post",
              user: req.user
          });
      }

      const { title, content } = req.body;
      await db.createPost(title, content, req.user.id);
      res.redirect("/");
  } catch (err) {
      next(err);
  }
}

async function deletePost(req, res, next) {
  try {
    await db.deletePost(req.body.id);
      res.redirect("/");
  } catch (err) {
    next(err);
  }
}

export default { createPostGET, createPostPOST, deletePost };