import bcrypt from "bcryptjs";
import db from '../db/queries.js';
import passport from "passport";

export async function registerPOST(req, res, next) {
  const { fullname, username, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    await db.createUser(fullname, username, hashedPass);
    res.redirect("/auth/login");
  } catch(err) {
    console.log(err);
    next(err);
  }
}

export const loginPOST = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
});

export default { registerPOST, loginPOST };