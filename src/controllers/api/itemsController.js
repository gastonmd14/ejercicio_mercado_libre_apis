const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { Op } = require('sequelize')

// ******** Sequelize ***********

const { Item } = require('../../database/models');

module.exports = {
    create (req, res){

        Item.findAll({

        })
            .then((result) => {

                let respuesta = {
                    meta: {
                        status: 201,
                        total: result.length,
					    url: '/api/items'
    
                    },
                    data: result
                }

                res.json(respuesta)

            })

    },
    
    store (req, res){
        const errors = validationResult(req);
        console.log(errors);

		if(errors.isEmpty()){

            Item.create({

                    salePrice: 0,
                    quantity: req.body.quantity,
                    subTotal: 0,
                    state: 0,
                    productId: req.body.productId,
                    userId: 101,
                    sellerId: 0,
                    cardId: 0,   

            })
                .then((result) => {

                    let respuesta = {
                        meta: {
                            status: 201,
                            message: 'Product added to cart'
        
                        },
                        data: result
                    }

                    res.json(respuesta)

                })
                .catch((e) => {
                    console.log(e);
                })

        }
    },

    destroy (req, res){

        Item.destroy({
            where: {
                id: req.body.itemId
            }
        })
            .then((result) => {

                let respuesta = {
                    meta: {
                        status: 202,
                        total: result.length,
					    url: '/api/items'
    
                    },
                    data: result
                }

                res.json(respuesta)

            })

    }
}