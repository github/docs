const featureFlags = require('../feature-flags')

// add feature flags as environment variables
Object.entries(featureFlags).forEach(([feature, value]) => {
  if (!Object.prototype.hasOwnProperty.call(process.env, feature) && value) {
    // process.env treats all values as strings so let's be explicit
    process.env[feature] = value.toString()
  }
})
