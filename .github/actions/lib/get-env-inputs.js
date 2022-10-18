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
    })
  )
}
