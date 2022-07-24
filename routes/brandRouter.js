const Router = require('express');
const router = new Router();
const BrandController = require('./../controllers/brandController.js')
const checkRole = require('./../middleware/CheckRoleMiddleware.js')

router.post('/', checkRole('ADMIN'), BrandController.create);
router.get('/', BrandController.get);

module.exports = router;