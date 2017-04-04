import express from 'express';

const router = express.Router();

/* GET home page functions */
function root(req, res) {
  res.render('index', { title: 'Servo' });
}

/* GET home page. */
router.get('/', root);

export default router;
