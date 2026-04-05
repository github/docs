import FailBot from './failbot'
import { toError } from '@/observability/lib/to-error'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

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
