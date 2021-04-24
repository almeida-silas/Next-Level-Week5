import { Request, Response, NextFunction } from 'express'

import AppError from './AppError'

export function globalHandler (error: Error, request: Request, response: Response, _: NextFunction): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message,
      errors: error.errors
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    error: error.message
  })
}

export function otherHandler (): void {}
