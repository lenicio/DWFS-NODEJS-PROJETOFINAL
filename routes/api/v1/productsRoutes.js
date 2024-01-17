const express = require('express');
const router = express.Router();
const ProductController = require('../../../controller/productController');
const authenticateToken = require('../../../middleware/authenticateToken');

router.get('/', authenticateToken ,ProductController.getAll);
router.get('/:id', authenticateToken, ProductController.getById);
router.post('/', authenticateToken, ProductController.create);
router.put('/:id', authenticateToken, ProductController.update);
router.delete('/:id', authenticateToken, ProductController.delete);

module.exports = router;