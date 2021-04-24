import Joi from 'joi'

const UsersSchema = Joi.object().keys({
  email: Joi.string().email().required()
})

export { UsersSchema }
