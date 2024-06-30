export type Version = 'free-pro-team' | 'enterprise-server' | 'enterprise-cloud'

export type Records = {
  [key: string]: number
}

export type RetryConfig = {
  retries: number
  sleepTime: number
}
