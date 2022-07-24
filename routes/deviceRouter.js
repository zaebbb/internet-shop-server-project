const Router = require('express');
const router = new Router();
const DeviceController = require('./../controllers/deviceController.js')
const checkRole = require('./../middleware/CheckRoleMiddleware.js')

router.post('/', checkRole('ADMIN'), DeviceController.create);
router.get('/', DeviceController.get);
router.get('/:id', DeviceController.getId);

module.exports = router;