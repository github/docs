import { Request, Response } from 'express'

// Prefix used for mocking. This can be any value
export const CSE_COPILOT_PREFIX = 'cse-copilot'

export function cseCopilotPostAnswersMock(req: Request, res: Response) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')

  const sourcesChunk = {
    chunkType: 'SOURCES',
    sources: [
      {
        title: 'Creating a new repository',
        url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
        index: '/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
      },
      {
        title: 'Creating and managing repositories',
        url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories',
        index: '/en/repositories/creating-and-managing-repositories',
      },
      {
        title: 'GitHub Terms of Service',
        url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service',
        index: '/en/site-policy/github-terms/github-terms-of-service',
      },
    ],
  }

  const sendEncodedChunk = (data: string, isLast = false) => {
    const prefix = isLast ? '' : '\n'
    const buffer = Buffer.from(prefix + data, 'utf-8')
    res.write(buffer)
  }

  sendEncodedChunk(`Chunk: ${JSON.stringify(sourcesChunk)}\n\n`)

  const message =
    'Creating a repository on GitHub is something you should already know how to do :shrug:'

  const words = message.split(' ')

  let index = 0

  const sendChunk = () => {
    if (index < words.length) {
      const word = words[index]
      const isLastWord = index === words.length - 1
      const chunk = {
        chunkType: 'MESSAGE_CHUNK',
        text: word + (isLastWord ? '' : ' '),
      }
      sendEncodedChunk(`${JSON.stringify(chunk)}\n`)
      index++
      sendChunk()
    } else {
      res.end()
    }
  }

  sendChunk()
}
