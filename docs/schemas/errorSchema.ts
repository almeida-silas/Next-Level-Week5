
export const errorSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          default: 'Internal server error'
        }
      }
    }
  }
}
