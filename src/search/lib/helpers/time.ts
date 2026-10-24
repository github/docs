export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function formatTime(ms: number) {
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}

// Formats the current UTC time as YYYYMMDDHHmmss, such as 20220719012012.
export function utcTimestamp() {
  const d = new Date()

  return (
    [
      `${d.getUTCFullYear()}`,
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds(),
    ]
      // Numeric UTC parts need zero-padding before joining.
      .map((x) => (typeof x === 'number' ? `0${x}`.slice(-2) : x))
      .join('')
  )
}

// Formats seconds as HH:mm:ss. 5445 becomes 01:30:45. Wraps at 24 hours.
export function formatSecondsToHHMMSS(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

export function readableTimeMinAndSec(ms: number): string {
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}
