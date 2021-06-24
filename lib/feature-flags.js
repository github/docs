const readJsonFile = require('./read-json-file')
const featureFlags = readJsonFile('./feature-flags.json')

// add feature flags as environment variables
Object.entries(featureFlags).forEach(([feature, value]) => {
  if (!Object.prototype.hasOwnProperty.call(process.env, feature) && value) {
    // process.env treats all values as strings so let's be explicit
    process.env[feature] = value.toString()
  }
})
