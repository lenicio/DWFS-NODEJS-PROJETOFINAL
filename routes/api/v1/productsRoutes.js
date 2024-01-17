const express = require('express');
const router = express.Router();
const ProductController = require('../../../controller/productController');
const authenticateToken = require('../../../middleware/authenticateToken');

router.get('/', authenticateToken ,ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;