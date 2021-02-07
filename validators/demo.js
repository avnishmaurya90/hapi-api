const joi = require('joi');

module.exports = {
    validate:{
        params: {
            name: joi.string().min(3).max(10)
        }
    }
}