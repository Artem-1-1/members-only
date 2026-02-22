import pool from "./pool.js";

async function createUser(fullname, username, password) {
  await pool.query(`
    INSERT INTO users (fullname, username, password, member_status)
    VALUES ($1, $2, $3, 'registered');`,
    [fullname, username, password]);
  };

async function getUserFromId(id) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id],
  );
  return rows[0];
}

async function getUserByUsername(username) {
  const { rows } = await connection.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
  );
  return rows[0];
}

export default { createUser, getUserFromId, getUserByUsername };