import FailBot from './failbot'

process.on('uncaughtException', async (err: Error | unknown) => {
  console.error(err)
  try {
    // Type guard to ensure we have an Error object for FailBot
    const error = err instanceof Error ? err : new Error(JSON.stringify(err))
    FailBot.report(error)
  } catch (failBotError) {
    console.warn('Even sending the uncaughtException error to FailBot failed!')
    console.error(failBotError)
  }
})

process.on('unhandledRejection', async (err: Error | unknown) => {
  console.error(err)
  try {
    // Type guard to ensure we have an Error object for FailBot
    const error = err instanceof Error ? err : new Error(JSON.stringify(err))
    FailBot.report(error)
  } catch (failBotError) {
    console.warn('Even sending the unhandledRejection error to FailBot failed!')
    console.error(failBotError)
  }
})
