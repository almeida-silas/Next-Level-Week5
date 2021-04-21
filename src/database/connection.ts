import { createConnection } from 'typeorm'

export async function connect (): Promise<boolean> {
  try {
    await createConnection()

    console.log('Database connected!')

    return true
  } catch (error) {
    return false
  }
}

if (process.env.NODE_ENV !== 'test') {
  connect()
}
