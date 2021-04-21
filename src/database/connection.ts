import { createConnection } from 'typeorm'

export async function connect (): Promise<boolean> {
  try {
    await createConnection()

    return true
  } catch (error) {
    return false
  }
}

if (process.env.NODE_ENV !== 'test') {
  connect()
}
