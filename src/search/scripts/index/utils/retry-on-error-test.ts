// Runs callback until it succeeds, retries run out, or errorTest returns false.
// Matching errors wait sleepTime before each retry. When exponential is set, each wait doubles.
// exponential acts as a boolean switch, not a multiplier.
// Usage: retryOnErrorTest(errorTest, callback, { attempts, sleepTime, onError })

import { sleep } from '@/search/lib/helpers/time'

export async function retryOnErrorTest<T>(
  errorTest: (error: unknown) => boolean,
  callback: () => Promise<T>,
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
): Promise<T> {
  while (true) {
    try {
      return await callback()
    } catch (error) {
      if (error instanceof Error && attempts > 0 && errorTest(error)) {
        if (onError) onError(error, attempts, sleepTime)
        attempts--
        // Jitter reduces synchronized retries when independent callers fail together.

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
  // For 1,000 with 20% jitter, return at least 1,000 and less than 1,200.
  return num + Math.random() * percent * 0.01 * num
}
