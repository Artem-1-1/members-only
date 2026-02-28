import { Router } from "express";
import users from "../controllers/users.js";
import {  signupValidation } from "../middlewares/validation.js"

const router = Router();

router.route("/register").get((req, res) => {
  res.render("register", {title : "Members Only | Register"})
});

router.route("/login").get((req, res) => {
  res.render("login", {title :"Members Only | Log in"})
});

router.post("/register", signupValidation, users.registerPOST);
router.post("/login", users.loginPOST);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.clearCookie('connect.sid');
    res.redirect("/");
  });
});

export default router;