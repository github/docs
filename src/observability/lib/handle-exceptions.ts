import FailBot from './failbot'

process.on('uncaughtException', async (err: Error) => {
  if ((err as NodeJS.ErrnoException).code === 'MODULE_NOT_FOUND') {
    console.error('\n\n🔥 Uh oh! It looks you are missing a required npm module.')
    console.error(
      'Please run `npm install` to make sure you have all the required dependencies.\n\n',
    )
  }

  console.error(err)
  try {
    FailBot.report(err)
  } catch (failBotError) {
    console.warn('Even sending the uncaughtException error to FailBot failed!')
    console.error(failBotError)
  }
})

process.on('unhandledRejection', async (err: Error | unknown) => {
  console.error(err)
  try {
    // Type guard to ensure we have an Error object for FailBot
    const error = err instanceof Error ? err : new Error(String(err))
    FailBot.report(error)
  } catch (failBotError) {
    console.warn('Even sending the unhandledRejection error to FailBot failed!')
    console.error(failBotError)
  }
})
