// Shows a custom npm ci prompt for missing-package errors.
// Recommend npm ci instead of npm install to avoid unexpected package-lock.json changes.
// package.json loads this file through nodemonConfig before start-server.ts loads handle-exceptions.ts.
// Keep it dependency-free so missing packages can reach this handler.
// Other uncaught exceptions fall through to handle-exceptions.ts.

type ErrorWithCode = {
  code: string
  message: string
}

const ERROR_TYPES = [
  'MODULE_NOT_FOUND',
  'ERR_MODULE_NOT_FOUND',
  'ERR_PACKAGE_PATH_NOT_EXPORTED',
  'ERR_PACKAGE_IMPORT_NOT_DEFINED',
]

function isErrorWithCode(err: unknown): err is ErrorWithCode {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    'message' in err &&
    typeof err.code === 'string' &&
    typeof err.message === 'string'
  )
}

process.on('uncaughtException', async (err: Error | unknown) => {
  const isMissingModuleError = isErrorWithCode(err) && ERROR_TYPES.includes(err.code)

  if (isMissingModuleError) {
    console.error(`${err.code}:`, err.message)
    console.error('\n==========================================')
    console.error('Some dependencies are missing. Please run:')
    console.error('   npm ci')
    console.error('==========================================\n')
    process.exit(1)
  }
})
