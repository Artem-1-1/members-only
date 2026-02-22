import { Router } from "express";
import users from "../controllers/users.js";

const router = Router();

router.route("/register").get((req, res) => {
  res.render("register", {title : "Register"})
});

router.route("/login").get((req, res) => {
  res.render("login", {title : "Log in"})
});

router.post("/register", users.registerPOST);

export default router;