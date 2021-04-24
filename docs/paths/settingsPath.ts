export const settingsPath = {
  post: {
    tags: ['Settings'],
    summary: 'Settings Route Path',
    description: 'Everything about the settings',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/settings'
          }
        }
      }
    },

    responses: {
      201: {
        $ref: '#/components/settingsResult'
      },
      422: {
        $ref: '#/components/unprocessableEntity'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
