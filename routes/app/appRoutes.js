const express = require('express');

const router = express.Router();
const userController = require('../../controller/userController');
const productController = require('../../controller/productController');

router.get('/', productController.listView);
router.get('/login', userController.loginView);
router.post('/auth', userController.login);
router.post('/user', userController.create);


module.exports = router;