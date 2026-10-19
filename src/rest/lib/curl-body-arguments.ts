export const CURL_CONTENT_TYPE_BODY_FLAGS: Record<string, string> = {
  'application/x-www-form-urlencoded': '--data-urlencode',
  'multipart/form-data': '--form',
  'application/octet-stream': '--data-binary',
}

type CurlBodyParameters = Record<string, unknown> | unknown[] | string

export function needsExplicitContentTypeHeader(contentType?: string): boolean {
  return contentType === 'application/octet-stream' || contentType === 'multipart/form-data'
}

export function getCurlBodyArguments(
  bodyParameters: CurlBodyParameters | null | undefined,
  contentType?: string,
  { jsonIndent }: { jsonIndent?: number } = {},
): string[] {
  if (!bodyParameters) return []

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
