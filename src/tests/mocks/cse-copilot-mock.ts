import { Request, Response } from 'express'

// Prefix used for mocking. This can be any value
export const CSE_COPILOT_PREFIX = 'cse-copilot'

export function cseCopilotPostAnswersMock(req: Request, res: Response) {
  // Set headers for chunked transfer and encoding
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')

  // Define the SOURCES chunk
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

  // Function to send a chunk with proper encoding
  const sendEncodedChunk = (data: any, isLast = false) => {
    const prefix = isLast ? '' : '\n' // Optionally, add delimiters if needed
    const buffer = Buffer.from(prefix + data, 'utf-8')
    res.write(buffer)
  }

  // Send the SOURCES chunk
  sendEncodedChunk(`Chunk: ${JSON.stringify(sourcesChunk)}\n\n`)

  // Define the message to be sent in chunks
  const message =
    'Creating a repository on GitHub is something you should already know how to do :shrug:'

  // Split the message into words (or adjust the splitting logic as needed)
  const words = message.split(' ')

  let index = 0

  const sendChunk = () => {
    if (index < words.length) {
      const word = words[index]
      const isLastWord = index === words.length - 1
      const chunk = {
        chunkType: 'MESSAGE_CHUNK',
        text: word + (isLastWord ? '' : ' '), // Add space if not the last word
      }
      sendEncodedChunk(`${JSON.stringify(chunk)}\n`)
      index++
      sendChunk() // Adjust the delay as needed
    } else {
      // End the response after all chunks are sent
      res.end()
    }
  }

  // Start sending MESSAGE_CHUNKs
  sendChunk()
}
