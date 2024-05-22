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
// Note that, by default, the sleep time is "exponential" by a factor of
// 1.5. So the first sleep will, in the above example,
// be 800ms. Then 1,200ms, Then 1,800ms. etc.
//
// [end-readme]

import { sleep } from './utils'

export async function retryOnErrorTest(
  errorTest: (error: any) => boolean,
  callback: Function,
  {
    attempts = 4,
    sleepTime = 1000,
    exponential = 1.5,
    jitterPercent = 25,
    onError = () => {},
  }: {
    attempts?: number
    sleepTime?: number
    exponential?: number
    jitterPercent?: number
    onError?: (error: Error, attempts: number, sleepTime: number) => void
  } = {},
) {
  while (true) {
    try {
      return await callback()
    } catch (error) {
      if (error instanceof Error && attempts > 0 && errorTest(error)) {
        if (onError) onError(error, attempts, sleepTime)
        attempts--
        // The reason for the jitter is to avoid a thundering herd problem.
        // Suppose two independent processes/threads start at the same time.
        // They both fail, perhaps due to rate limiting. Now, if they both
        // sleep for 30 seconds in the first retry attempt, it'll just
        // clash again 30 seconds later. But if you add a bit of jitter, at
        // the next attempt these independent processes/threads will now
        // start at slightly different times.

        // According to the Oxford English dictionary, they define "jitter" as:
        //
        //    slight irregular movement, variation, or unsteadiness,
        //    especially in an electrical signal or electronic device.
        //
        await sleep(addJitter(sleepTime, jitterPercent))
        if (exponential) {
          sleepTime *= 2
        }
      } else {
        throw error
      }
    }
  }
}

function addJitter(num: number, percent: number) {
  // Return the number plus between 0 and $percent of that number.
  // For example, for 1,000 with a 20% jitter you might get 1133.4
  // because you start with 1,000 and 13.4% is a random number between
  // 0 and 20%.
  return num + Math.random() * percent * 0.01 * num
}
