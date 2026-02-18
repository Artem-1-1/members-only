import Router from "express";

const router = Router();

router.get('/register', (req, res) => {
  res.json({message : "This register page"})
});

router.get('/login', (req, res) => {
  res.json({message : "This login page"})
});

export default router;