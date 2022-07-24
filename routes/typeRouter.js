const Router = require('express');
const router = new Router();
const TypeController = require('./../controllers/typeController.js')
const checkRole = require('./../middleware/CheckRoleMiddleware.js')

router.post('/', checkRole('ADMIN'), TypeController.create);
router.get('/', TypeController.get);

module.exports = router;