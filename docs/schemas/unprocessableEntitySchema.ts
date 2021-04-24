
export const unprocessableEntitySchema = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      default: 'error'
    },
    statusCode: {
      type: 'number',
      format: 'integer',
      default: 400
    },
    message: {
      type: 'string',
      default: 'Request Validation Failed'
    },
    errors: {
      type: 'array',
      items: {
        properties: {
          message: {
            type: 'string',
            default: '"username" is required'
          },
          path: {
            type: 'array',
            items: {
              type: 'string',
              default: 'username'
            }
          }
        }
      }
    }
  }
}
