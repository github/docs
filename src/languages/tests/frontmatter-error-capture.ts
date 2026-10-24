import { describe, expect, test } from 'vitest'

import { createLogger } from '@/observability/logger'
import { toLogfmt } from '@/observability/logger/lib/to-logfmt'
import { captureConsole, parseFrontmatterErrors } from '@/languages/lib/frontmatter-error-capture'

const devLine =
  '17:15:35.802 WARN  (src/frame/lib/page-data.ts) Unable to parse YAML frontmatter in /abs/translations/ja-jp/content/get-started/index.md, falling back to English. Details: bad indentation  path=get-started/index.md'
const prodLine =
  'timestamp=2026-10-16T00:00:00.000Z level=warn file=src/frame/lib/page-data.ts message="Unable to parse YAML frontmatter in translations/es-es/content/actions/index.md, falling back to English. Details: bad indentation" included.path=actions/index.md'
const unrelatedLine =
  '17:15:35.900 INFO  (src/frame/lib/warm-server.ts) Loaded pages from translations/ja-jp/content/index.md'

describe('parseFrontmatterErrors', () => {
  test('reports each YAML fallback file once with a clean path', () => {
    expect(parseFrontmatterErrors([devLine, prodLine, devLine])).toEqual([
      { file: 'translations/ja-jp/content/get-started/index.md', message: 'YML parsing error' },
      { file: 'translations/es-es/content/actions/index.md', message: 'YML parsing error' },
    ])
  })

  test('handles roots with spaces, Windows separators, and logfmt escaping', () => {
    const fallback = (fullPath: string) =>
      `Unable to parse YAML frontmatter in ${fullPath}, falling back to English. Details: bad indentation`
    const spacedLine = `WARN ${fallback('/tmp/docs checkout/translations/ja-jp/content/index.md')}`
    const windowsLine = `WARN ${fallback('C:\\docs\\translations\\ko-kr\\content\\index.md')}`
    const logfmtLine = toLogfmt({
      level: 'warn',
      message: fallback('C:\\docs\\translations\\ko-kr\\content\\index.md'),
    })
    expect(logfmtLine).toContain('\\\\translations\\\\')
    expect(parseFrontmatterErrors([spacedLine, windowsLine, logfmtLine])).toEqual([
      { file: 'translations/ja-jp/content/index.md', message: 'YML parsing error' },
      { file: 'translations/ko-kr/content/index.md', message: 'YML parsing error' },
    ])
  })

  test('ignores other log lines that mention a translations path', () => {
    expect(parseFrontmatterErrors([unrelatedLine])).toEqual([])
  })
})

describe('captureConsole', () => {
  test('collects YAML fallback warnings from the structured logger', () => {
    const logger = createLogger('file:///repo/src/frame/lib/page-data.ts')
    const capture = captureConsole()
    try {
      logger.warn(
        'Unable to parse YAML frontmatter in translations/ja-jp/content/get-started/index.md, falling back to English. Details: bad indentation',
        { path: 'get-started/index.md' },
      )
    } finally {
      capture.restore()
    }
    expect(parseFrontmatterErrors(capture.output)).toEqual([
      { file: 'translations/ja-jp/content/get-started/index.md', message: 'YML parsing error' },
    ])
  })
})
