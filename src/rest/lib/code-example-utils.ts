// The part of a code example these label helpers need. RestCodeSamples copies
// `sample.request.description` up to a top-level `description` and keeps the
// original `request` object as-is.
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

export function shouldShowRequestContentType(examples: CodeExample[]): boolean {
  return (
    examples.length > 1 &&
    !examples.every((example) => example.request?.contentType === examples[0].request?.contentType)
  )
}

export function shouldShowResponseContentType(examples: CodeExample[]): boolean {
  return (
    examples.length > 1 &&
    !examples.every((example) => example.response.contentType === examples[0].response.contentType)
  )
}

// Labels each example option with whichever content types vary across the set.
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
        text = `${example.description} (${requestContentType} → ${responseContentType})`
      } else if (requestContentTypesDiffer) {
        text = `${example.description} (${requestContentType})`
      } else if (responseContentTypesDiffer) {
        text = `${example.description} (${responseContentType})`
      }
    }

    return {
      text,
      languageIndex: index,
    }
  })
}

export function generateExampleOptionTexts(examples: CodeExample[]): string[] {
  return generateExampleOptions(examples).map((option) => option.text)
}
