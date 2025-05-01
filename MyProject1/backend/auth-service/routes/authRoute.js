const express = require('express');
const router = express.Router();
const {CreateAccount, LoginAccount, SayHello} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup',CreateAccount);
router.post('/signin', LoginAccount);
router.get('/sayhello',SayHello);

module.exports = router;