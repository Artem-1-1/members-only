import express from "express";
import index from "./routes/index.js";
import auth from './routes/auth.js'
import "dotenv/config";

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.json());

app.use('/', index);
app.use('/', auth);

app.listen(3000);

app.use((req, res) => {
  res.status(404).render("404", {title: "Page not Found"});
});


export default app;