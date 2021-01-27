const path = require("path");
const { body, check } = require("express-validator");

module.exports = [
    body('quantity')
        .custom((value, {req}) => {
            if(req.body.quantity >= 1) {
                return true
            } else {                
                throw new Error("La cantidad debe ser mayo o igual a 1");
            } 
        })
            
  
  ];