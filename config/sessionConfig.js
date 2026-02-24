import session from "express-session";
import pool from "../db/pool.js"
import pgConnect  from "connect-pg-simple";
import 'dotenv/config';

const PgStore = pgConnect(session);

export default () =>
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PgStore({ pool: pool, createTableIfMissing: true }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}); 