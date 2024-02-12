import FailBot from './failbot.js'

process.on('uncaughtException', async (err) => {
  if (err.code === 'MODULE_NOT_FOUND') {
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

process.on('unhandledRejection', async (err) => {
  console.error(err)
  try {
    FailBot.report(err)
  } catch (failBotError) {
    console.warn('Even sending the unhandledRejection error to FailBot failed!')
    console.error(failBotError)
  }
})
