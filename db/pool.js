import { Pool } from "pg";
import 'dotenv/config';

const connectionString = (process.env.NEON_URL || process.env.LOCAL_URL);

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;