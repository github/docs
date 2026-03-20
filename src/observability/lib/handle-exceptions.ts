import FailBot from './failbot'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Safely convert an unknown thrown value to an Error, avoiding JSON.stringify
// which can throw on circular references.
function toError(value: Error | unknown): Error {
  if (value instanceof Error) return value
  try {
    return new Error(JSON.stringify(value))
  } catch {
    return new Error(String(value))
  }
}

process.on('uncaughtException', async (err: Error | unknown) => {
  const error = toError(err)
  logger.error('uncaughtException', { error })
  try {
    FailBot.report(error)
  } catch (failBotError) {
    logger.warn('Even sending the uncaughtException error to FailBot failed!')
    logger.error('Failed to report uncaughtException to FailBot', { error: toError(failBotError) })
  }
})

process.on('unhandledRejection', async (err: Error | unknown) => {
  const error = toError(err)
  logger.error('unhandledRejection', { error })
  try {
    FailBot.report(error)
  } catch (failBotError) {
    logger.warn('Even sending the unhandledRejection error to FailBot failed!')
    logger.error('Failed to report unhandledRejection to FailBot', { error: toError(failBotError) })
  }
})
