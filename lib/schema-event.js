const helpfulness = {
  additionalProperties: false,
  required: [
    'type',
    'url',
    'vote'
  ],
  properties: {
    type: {
      type: 'string',
      description: 'The type of event.',
      pattern: '^HELPFULNESS$'
    },
    token: {
      type: 'string',
      description: 'A honeypot.',
      maxLength: 0
    },
    url: {
      type: 'string',
      description: 'The page the user triggered the event on.',
      format: 'uri'
    },
    vote: {
      type: 'string',
      description: 'Did the user find the page helpful?',
      enum: ['Yes', 'No']
    },
    email: {
      type: 'string',
      description: 'The user\'s email address.',
      format: 'email'
    },
    comment: {
      type: 'string',
      description: 'Any additional comments the user wanted to provide.',
      maxLength: 65535
    },
    category: {
      type: 'string',
      description: 'The category of the comment',
      enum: ['Unclear', 'Confusing', 'Unhelpful', 'Other']
    }
  }
}

const experiment = {
  additionalProperties: false,
  required: [
    'type',
    'user',
    'test',
    'group'
  ],
  properties: {
    type: {
      type: 'string',
      description: 'The type of event.',
      pattern: '^EXPERIMENT$'
    },
    user: {
      type: 'string',
      minLength: 16,
      format: 'uuid'
    },
    test: {
      type: 'string',
      minLength: 4
    },
    group: {
      type: 'string',
      enum: ['control', 'treatment']
    },
    success: {
      type: 'string',
      enum: ['yes', 'no'],
      default: 'yes'
    }
  }
}

module.exports = {
  oneOf: [helpfulness, experiment]
}
