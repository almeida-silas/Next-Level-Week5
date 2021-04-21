import { Joi, Segments, celebrate } from 'celebrate'

const settingsValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    chat: Joi.boolean().optional(),
    username: Joi.string().required()
  })
})

export { settingsValidator }
