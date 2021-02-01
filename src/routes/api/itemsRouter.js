// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiItemsController = require('../../controllers/api/itemsController');
const userMiddleware = require('../../middlewares/api/userMiddleware')
const quantityValidator = require('../../middlewares/api/quantityValidator');

router.get('/items', apiItemsController.create);
router.post('/items', userMiddleware, quantityValidator, apiItemsController.store);

router.delete('/items', apiItemsController.destroy);


module.exports = router;