import { getFrontmatter } from './utils'

// AJV validation error object structure
interface AjvValidationError {
  instancePath: string
  keyword: string
  message: string
  params: {
    additionalProperty?: string
    missingProperty?: string
    [key: string]: unknown
  }
}

// Processed error object for markdown linting
interface ProcessedValidationError {
  instancePath: string
  detail: string
  context: string
  errorProperty: string
  searchProperty: string
}

export function formatAjvErrors(errors: AjvValidationError[] = []): ProcessedValidationError[] {
  const processedErrors: ProcessedValidationError[] = []

  errors.forEach((errorObj: AjvValidationError) => {
    const error: Partial<ProcessedValidationError> = {}

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
    }

    // required rule
    if (errorObj.keyword === 'required') {
      error.detail = 'The frontmatter has a missing required property'
      const pathContext = error.instancePath ? ` from \`${error.instancePath}\`` : ''
      error.context = `Add the missing property \`${errorObj.params.missingProperty}\`${pathContext}`
      error.errorProperty = errorObj.params.missingProperty
      error.searchProperty = error.instancePath.split('.').pop()
    }

    // all other rules
    if (!error.detail) {
      error.detail = `Frontmatter ${errorObj.message}.`
      error.context = Object.values(errorObj.params).join('')
      error.errorProperty = error.context
      error.searchProperty = error.errorProperty
    }

    processedErrors.push(error as ProcessedValidationError)
  })

  return processedErrors
}

// Alias for backward compatibility
export const processSchemaValidationErrors = formatAjvErrors

// Schema validator interface - generic due to different schema types (AJV, JSON Schema, etc.)
interface SchemaValidator {
  validate(data: unknown): boolean
}

export function getSchemaValidator(
  frontmatterLines: string[],
): (schema: SchemaValidator) => boolean {
  const frontmatter = getFrontmatter(frontmatterLines)
  return (schema: SchemaValidator) => schema.validate(frontmatter)
}
