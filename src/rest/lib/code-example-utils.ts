/**
 * Interface for processed code examples as used by the RestCodeSamples component.
 * This represents the structure AFTER the component processes the original API data,
 * where sample.request.description is moved to the top level as description.
 *
 * Original API structure: { request: { description: string, contentType: string }, response: {...} }
 * Processed structure: { description: string, request: { contentType: string }, response: {...} }
 */
export interface CodeExample {
  request?: {
    contentType?: string
  }
  response: {
    contentType: string
  }
  description: string
}

export interface ExampleOption {
  text: string
  languageIndex: number
}

/**
 * Determines if request content types differ between examples
 */
export function shouldShowRequestContentType(examples: CodeExample[]): boolean {
  return (
    examples.length > 1 &&
    !examples.every((example) => example.request?.contentType === examples[0].request?.contentType)
  )
}

/**
 * Determines if response content types differ between examples
 */
export function shouldShowResponseContentType(examples: CodeExample[]): boolean {
  return (
    examples.length > 1 &&
    !examples.every((example) => example.response.contentType === examples[0].response.contentType)
  )
}

/**
 * Generates example option objects with appropriate content type labels
 * This matches the exact logic from RestCodeSamples.tsx
 */
export function generateExampleOptions(examples: CodeExample[]): ExampleOption[] {
  const responseContentTypesDiffer = shouldShowResponseContentType(examples)
  const requestContentTypesDiffer = shouldShowRequestContentType(examples)
  const showExampleOptionMediaType = responseContentTypesDiffer || requestContentTypesDiffer

  return examples.map((example, index) => {
    const requestContentType = example.request?.contentType
    const responseContentType = example.response.contentType

    let text = example.description

    if (showExampleOptionMediaType) {
      if (requestContentTypesDiffer && responseContentTypesDiffer) {
        // Show both request and response content types
        text = `${example.description} (${requestContentType} → ${responseContentType})`
      } else if (requestContentTypesDiffer) {
        // Show only request content type
        text = `${example.description} (${requestContentType})`
      } else if (responseContentTypesDiffer) {
        // Show only response content type
        text = `${example.description} (${responseContentType})`
      }
    }

    return {
      text,
      languageIndex: index,
    }
  })
}

/**
 * Generates just the text labels for example options (useful for testing)
 */
export function generateExampleOptionTexts(examples: CodeExample[]): string[] {
  return generateExampleOptions(examples).map((option) => option.text)
}
