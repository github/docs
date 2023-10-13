// This function takes an array of AJV errors and formats them
// in a way that is more compatible with Markdownlint errors.
export function formatAjvErrors(errors = []) {
  return errors.map((errorObj) => {
    const error = {}

    // An instancePath is either blank or starts with a slash
    // and separates object properties with slashes. A more
    // common way to read object nesting is using dot notation.
    error.instancePath =
      errorObj.instancePath === ''
        ? errorObj.instancePath
        : errorObj.instancePath.slice(1).replace('/', '.')

    if (errorObj.keyword === 'additionalProperties') {
      error.detail = 'The frontmatter includes an unsupported property.'
      const pathContext = error.instancePath ? ` from \`${error.instancePath}\`` : ''
      error.context = `Remove the property \`${errorObj.params.additionalProperty}\`${pathContext}.`
      error.errorProperty = errorObj.params.additionalProperty
      error.searchProperty = error.errorProperty
      return error
    }

    if (errorObj.keyword === 'required') {
      error.detail = 'The frontmatter has a missing required property'
      const pathContext = error.instancePath ? ` from \`${error.instancePath}\`` : ''
      error.context = `Add the missing property \`${errorObj.params.missingProperty}\`${pathContext}`
      error.errorProperty = errorObj.params.missingProperty
      error.searchProperty = error.instancePath.split('.').pop()
      return error
    }

    // The two most common errors are required and additionalProperties.
    // This catches any other with a generic detail that uses the AJV wording.
    error.detail = `Frontmatter ${errorObj.message}.`
    error.context = Object.values(errorObj.params.join(''))
    error.errorProperty = error.context
    error.searchProperty = error.errorProperty
    return error
  })
}
