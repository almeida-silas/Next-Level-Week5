import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import app from './app'

export const server = createServer(app)
export const Ws = new Server(server)

Ws.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id)
})
