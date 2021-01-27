// ************ Require's ************
const express = require('express');
const router = express.Router();
const productMiddleware = require('../../middlewares/api/product');

// ************ Controller Require ************
const apiItemsController = require('../../controllers/api/itemsController');

router.get('/items', apiItemsController.create);
router.post('/items', productMiddleware, apiItemsController.store);

router.delete('/items', apiItemsController.destroy);


module.exports = router;