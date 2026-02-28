import bcrypt from "bcryptjs";
import db from '../db/queries.js';
import passport from "passport";

async function registerPOST(req, res, next) {
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

const loginPOST = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
});

async function join(req, res, next) {
  try {
    await db.giveUserMembership(req.user.id);
    res.redirect("/")
  } catch(err) {
    next(err)
  }
}

export default { registerPOST, loginPOST, join };