import { Request, Response } from 'express'
import MessagesService from '../services/MessagesService'

class MessagesController {
  async listByUser (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const messages = await MessagesService.listByUser(id)

      return response.status(200).json(messages)
    } catch (error) {
      if (error.message && error.message === 'User not found') {
        return response.status(404).json(error)
      }
    }
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { adminId, text, userId } = request.body

    try {
      const message = await MessagesService.create({
        adminId,
        text,
        userId
      })

      return response.status(201).json(message)
    } catch (error) {
      if (error.message && error.message === 'User not found') {
        return response.status(404).json(error)
      }
    }
  }
}

export default new MessagesController()
