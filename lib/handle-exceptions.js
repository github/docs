const FailBot = require('./failbot')

process.on('uncaughtException', async err => {
  if (err.code === 'MODULE_NOT_FOUND') {
    console.error('\n\n🔥 Uh oh! It looks you are missing a required npm module.')
    console.error('Please run `npm install` to make sure you have all the required dependencies.\n\n')
  }

  console.error(err)
  await FailBot.report(err)
})

process.on('unhandledRejection', async err => {
  console.error(err)
  await FailBot.report(err)
})
