import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sessionConfig from "./config/sessionConfig.js";
import index from "./routes/index.js";
import auth from './routes/auth.js'
import "dotenv/config";
import passport from "passport";
import "./config/passportConfig.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(sessionConfig());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use('/', index);
app.use('/auth', auth);

app.use((req, res) => {
  res.status(404).render("404", {title: "Page not Found"});
});

app.listen(PORT);

export default app;