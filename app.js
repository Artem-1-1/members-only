import express from "express";
import indexRoute from "./routes/indexRouter.js";
import "dotenv/config"

const app = express();

app.use(express.json());

app.use('/', indexRoute)

app.listen(3000);

export default app;