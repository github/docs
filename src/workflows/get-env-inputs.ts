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

// true and 1 are true; empty, 0, and false are false. Other values throw.
export function boolEnvVar(key: string) {
  const value = process.env[key] || ''
  if (value === '' || value === 'false' || value === '0') return false
  if (value === 'true' || value === '1') return true
  throw new Error(`Invalid value for set environment variable ${key}: '${value}'`)
}
