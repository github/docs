/*
This file adds a custom error message if a package is missing
to prompt the contributor to run `npm ci`.
This handler must be separate from handle-exceptions.ts in order to function.
It's imported in package.json in nodemonConfig,
whereas that is imported in start-server.ts.
This file should not import any packages.
We are suggesting `npm ci` to contributors
to avoid unexpected changes to the package-lock.json file.
All other errors should fall through to the error handler in handle-exceptions.ts.
*/

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
