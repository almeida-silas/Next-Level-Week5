import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '../repositories/UsersRepository'
import { MessagesRepository } from '../repositories/MessagesRepository'
import { Message } from '../entities/Message'

import AppError from '../errors/AppError'

interface IMessageCreate {
  adminId?: string
  text: string
  userId: string
}

class MessagesService {
  async create ({ adminId, text, userId }: IMessageCreate): Promise<Message> {
    const messagesRepository = getCustomRepository(MessagesRepository)
    const userRepository = getCustomRepository(UsersRepository)

    const userExists = await userRepository.findOne({ id: userId })

    if (!userExists) {
      throw new AppError('User not found', 404, [])
    }

    const message = messagesRepository.create({
      adminId,
      text,
      userId
    })

    await messagesRepository.save(message)

    return message
  }

  async listByUser (userId: string): Promise<Message[]> {
    const messagesRepository = getCustomRepository(MessagesRepository)
    const userRepository = getCustomRepository(UsersRepository)

    const userExists = await userRepository.findOne({ id: userId })

    if (!userExists) {
      throw new AppError('User not found', 404, [])
    }

    const messages = await messagesRepository.find({
      where: { userId },
      relations: ['user']
    })

    return messages
  }
}

export default new MessagesService()
