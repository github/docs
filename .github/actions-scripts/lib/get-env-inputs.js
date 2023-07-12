/*
 * Validates and returns an object of expected environment variables
 *
 * @param {Array<string>} options - Array of environment variables expected
 *
 * @returns {Object} - key value of expected env variables and their values
 */
export function getEnvInputs(options) {
  return Object.fromEntries(
    options.map((envVarName) => {
      const envVarValue = process.env[envVarName]
      if (!envVarValue) {
        throw new Error(`You must supply a ${envVarName} environment variable`)
      }
      return [envVarName, envVarValue]
    }),
  )
}

/*
 * Given an environment variable key, return `true` or `false` if the
 * value is recognizable.
 * Turn 'true' or '1' into `true`. And '', '0', or 'false' into `false`.
 * All other values are invalid.
 * Now you can't accidentally set `export FOO=falsee` which as string `'falsee'`
 * could have been interpreted as a truthy value.
 *
 * @param {string} key - name of the environment variable
 *
 * @returns {boolean}
 */
export function boolEnvVar(key) {
  const value = process.env[key] || ''
  if (value === '' || value === 'false' || value === '0') return false
  if (value === 'true' || value === '1') return true
  throw new Error(`Invalid value for set environment variable ${key}: '${value}'`)
}
