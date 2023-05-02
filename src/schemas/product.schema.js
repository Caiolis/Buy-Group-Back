import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    size: Joi.string().required().valid("p", "m", "g"),
    ammount: Joi.integer().required()
})