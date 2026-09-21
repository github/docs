// Validates the named environment variables and returns them as an object.
export function getEnvInputs(options: string[]) {
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

// Reads an environment variable as a boolean. 'true' and '1' are true; '', '0'
// and 'false' are false. Anything else throws, so a typo like
// `export FOO=falsee` can't be read as truthy.
export function boolEnvVar(key: string) {
  const value = process.env[key] || ''
  if (value === '' || value === 'false' || value === '0') return false
  if (value === 'true' || value === '1') return true
  throw new Error(`Invalid value for set environment variable ${key}: '${value}'`)
}
