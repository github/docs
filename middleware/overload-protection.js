import overloadProtection from 'overload-protection'

// Default is 42. We're being more conservative.
const DEFAULT_MAX_DELAY_DEFAULT = 500

const OVERLOAD_PROTECTION_MAX_DELAY = parseInt(
  process.env.OVERLOAD_PROTECTION_MAX_DELAY || DEFAULT_MAX_DELAY_DEFAULT,
  10
)

const config = {
  production: process.env.NODE_ENV !== 'development',
  errorPropagationMode: false, // dictate behavior: take over the response or propagate an error to the framework [default false]
  logging: false,
  logStatsOnReq: false,
  maxEventLoopDelay: OVERLOAD_PROTECTION_MAX_DELAY,
}

export default overloadProtection('express', config)
