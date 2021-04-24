export const settingsResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      default: 'af499d30-0101-4fd1-a741-5b4bd5343801'
    },
    username: {
      type: 'string',
      default: 'youCan'
    },
    chat: {
      type: 'boolean'
    },
    created_at: {
      type: 'string',
      format: 'date-time'
    },
    updated_at: {
      type: 'string',
      format: 'date-time'
    }
  }
}
