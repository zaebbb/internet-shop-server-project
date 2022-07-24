const Router = require('express');
const router = new Router();
const UserController = require('./../controllers/userController.js')
const AuthMiddleware = require('./../middleware/AuthMiddleware.js')

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', AuthMiddleware, UserController.check);

module.exports = router;