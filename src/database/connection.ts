import { createConnection } from 'typeorm'

export async function connect (): Promise<boolean> {
  try {
    await createConnection()

    console.log('Database is connected!')

    return true
  } catch (error) {
    console.log('Database connection failed!')

    return false
  }
}

if (process.env.NODE_ENV !== 'test') {
  connect()
}
