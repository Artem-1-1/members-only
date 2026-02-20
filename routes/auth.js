import { Router } from "express";

const router = Router();

router.route("/register").get((req, res) => {
  res.render("register", {title : "Register"})
});

router.route("/login").get((req, res) => {
  res.render("login", {title : "Log in"})
});

export default router;