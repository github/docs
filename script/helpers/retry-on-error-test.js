// [start-readme]
//
// Return a function that you can use to run any code within and if it
// throws you get a chance to say whether to sleep + retry.
// Example:
//
//   async function mainFunction() {
//     if (Math.random() > 0.9) throw new Error('too large')
//     return 'OK'
//   }
//
//   const errorTest = (err) => err instanceof Error && err.message.includes('too large')
//   const config = {  // all optional
//     attempts: 3,
//     sleepTime: 800,
//     onError: (err, attempts) => console.warn(`Failed ${attempts} attempts`)
//   }
//   const ok = await retry(errorTest, mainFunction, config)
//
//
// [end-readme]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function retryOnErrorTest(
  errorTest,
  callback,
  { attempts = 10, sleepTime = 1000, onError = () => {} } = {},
) {
  while (--attempts) {
    try {
      return await callback()
    } catch (error) {
      if (errorTest(error)) {
        // console.warn('Sleeping on', error.message, { attempts })
        if (onError) onError(error, attempts)
        await sleep(sleepTime)
      } else {
        throw error
      }
    }
  }
}
