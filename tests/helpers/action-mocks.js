import { jest } from '@jest/globals'

export function coreMock() {
  return {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(console.error),
    setOutput: jest.fn(),
  }
}

export function octokitMock({ requestMock, listForRepoMock } = {}) {
  return {
    request: jest.fn(requestMock),
    rest: {
      issues: {
        listForRepo: jest.fn(listForRepoMock),
        createComment: jest.fn(),
        update: jest.fn(),
      },
    },
  }
}

export function cheerioMock(argToValueMap) {
  return {
    load: jest.fn(async () => {
      return (arg) => {
        return argToValueMap[arg]
      }
    }),
  }
}

export function gotMock({ status } = {}) {
  return jest.fn(async () => {
    if (status < 200 || status >= 400) {
      throw new Error({
        status,
      })
    }
    return new Error({
      status,
    })
  })
}

export function uploadArtifactMock() {
  return jest.fn()
}
