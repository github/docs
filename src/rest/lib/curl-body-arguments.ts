export const CURL_CONTENT_TYPE_BODY_FLAGS: Record<string, string> = {
  'application/x-www-form-urlencoded': '--data-urlencode',
  'multipart/form-data': '--form',
  'application/octet-stream': '--data-binary',
}

type CurlBodyParameters = Record<string, unknown> | unknown[] | string

export function needsExplicitContentTypeHeader(contentType?: string): boolean {
  return (
    contentType === 'application/octet-stream' ||
    contentType === 'multipart/form-data' ||
    isTextContentType(contentType)
  )
}

function isTextContentType(contentType?: string): boolean {
  return Boolean(contentType?.startsWith('text/'))
}

// The OpenAPI examples wrap raw text bodies as { text: '...' }, but the API
// expects the bare text as the request body.
function getRawTextBody(bodyParameters: CurlBodyParameters): string {
  if (typeof bodyParameters === 'string') return bodyParameters
  if (!Array.isArray(bodyParameters)) {
    const values = Object.values(bodyParameters)
    if (values.length === 1 && typeof values[0] === 'string') return values[0]
  }
  return JSON.stringify(bodyParameters)
}

export function getCurlBodyArguments(
  bodyParameters: CurlBodyParameters | null | undefined,
  contentType?: string,
  { jsonIndent }: { jsonIndent?: number } = {},
): string[] {
  if (!bodyParameters) return []

  if (isTextContentType(contentType)) {
    const rawTextBody = getRawTextBody(bodyParameters)
    // --data-binary reads a file when the value starts with @, even inside quotes.
    const rawTextFlag = rawTextBody.startsWith('@') ? '--data-raw' : '--data-binary'
    return [`${rawTextFlag} '${escapeShellValue(rawTextBody)}'`]
  }

  const bodyFlag = contentType ? CURL_CONTENT_TYPE_BODY_FLAGS[contentType] : undefined
  if (!bodyFlag) {
    return [`-d '${JSON.stringify(bodyParameters, null, jsonIndent).replace(/'/g, "'\\''")}'`]
  }

  if (typeof bodyParameters === 'object' && !Array.isArray(bodyParameters)) {
    return Object.entries(bodyParameters).map(([name, value]) => {
      const escapedValue = escapeShellValue(String(value))
      return `${bodyFlag} '${name}=${escapedValue}'`
    })
  }

  const escapedValue = escapeShellValue(String(bodyParameters))
  return [`${bodyFlag} "${escapedValue}"`]
}

// Escapes single quotes so a contraction like "there's" can't break out of the
// surrounding shell quoting.
export function escapeShellValue(value: string): string {
  return value.replace(/'/g, "'\\''")
}
