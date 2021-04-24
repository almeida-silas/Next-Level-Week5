import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError'

import { UsersSchema } from '../../schemes/UsersSchema'

export const usersValidator = (request: Request, response: Response, next: NextFunction): void => {
  const { error, value } = UsersSchema.validate(request.body, { abortEarly: false, errors: { stack: false } })

  if (error) {
    const errors = error.details.map((error) => ({
      message: error.message,
      path: error.path
    }))

    throw new AppError('Request validation failed', 422, errors)
  }

  request.body = value

  next()
}
