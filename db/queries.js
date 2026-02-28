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
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
  );
  return rows[0];
}

async function getAllPosts() {
  const { rows } = await pool.query(`
    SELECT posts.id,
    COALESCE(users.fullname, 'Anonymous') AS full_name,
    users.username,
    posts.title,
    posts.content,
    posts.date
  FROM posts
  LEFT JOIN users ON users.id = posts.user_id
  ORDER BY posts.date DESC;`)
  return rows;
}

async function createPost(title, content, userId) {
  await pool.query(`
    INSERT INTO posts (title, content, user_id)
    VALUES ($1, $2, $3);
    `, [title, content, userId])
}

async function deletePost(id) {
  await pool.query(`
    DELETE FROM posts WHERE id = $1;
    `, [id]);
}

async function giveUserMembership(id) {
  await pool.query(`
    UPDATE users
    SET member_status = 'member'
    WHERE id = $1;`
  , [id]);
}

export default { createUser, getUserFromId, getUserByUsername, getAllPosts, createPost, deletePost, giveUserMembership };