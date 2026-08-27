import { describe, expect, test, vi, beforeEach, afterEach, type MockedFunction } from 'vitest'
import {
  createTranslationFallbackComment,
  EmptyTitleError,
  renderContentWithFallback,
  executeWithFallback,
  LiquidError,
} from '../lib/render-with-fallback'
import { TitleFromAutotitleError } from '@/content-render/unified/rewrite-local-links'
import Page from '@/frame/lib/page'

describe('Translation Error Comments', () => {
  // Mock renderContent for integration tests
  let mockRenderContent: MockedFunction<
    (template: string, context: Record<string, unknown>) => string
  >

  beforeEach(() => {
    mockRenderContent = vi.fn()
    vi.stubGlobal('renderContent', mockRenderContent)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('createTranslationFallbackComment', () => {
    describe('Liquid ParseError', () => {
      test('includes all fields when token information is available', () => {
        const error = new LiquidError("Unknown tag 'badtag', line:1, col:3", 'ParseError')
        error.token = {
          file: '/content/test/article.md',
          getPosition: () => [1, 3],
        }

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('<!-- TRANSLATION_FALLBACK')
        expect(result).toContain('prop=rawTitle')
        expect(result).toContain('type=ParseError')
        expect(result).toContain('file=/content/test/article.md')
        expect(result).toContain('line=1')
        expect(result).toContain('col=3')
        expect(result).toContain("msg=\"Unknown tag 'badtag'")
        expect(result.endsWith('-->')).toBe(true)
      })
    })

    describe('Liquid RenderError', () => {
      test('includes original error message when available', () => {
        const error = new LiquidError(
          "Unknown variable 'variables.nonexistent.value'",
          'RenderError',
        )
        error.token = {
          file: '/content/test/intro.md',
          getPosition: () => [3, 15],
        }
        error.originalError = new Error('Variable not found: variables.nonexistent.value')

        const result = createTranslationFallbackComment(error, 'rawIntro')

        expect(result).toContain('prop=rawIntro')
        expect(result).toContain('type=RenderError')
        expect(result).toContain('file=/content/test/intro.md')
        expect(result).toContain('line=3')
        expect(result).toContain('col=15')
        expect(result).toContain('msg="Variable not found: variables.nonexistent.value"')
      })

      test('falls back to main error message when no originalError', () => {
        const error = new LiquidError('Main error message', 'RenderError')
        error.token = {
          file: '/content/test.md',
          getPosition: () => [1, 1],
        }

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('msg="Main error message"')
      })
    })

    describe('Liquid TokenizationError', () => {
      test('includes tokenization error details', () => {
        const error = new LiquidError('Unexpected token, line:1, col:10', 'TokenizationError')
        error.token = {
          file: '/content/test/page.md',
          getPosition: () => [1, 10],
        }

        const result = createTranslationFallbackComment(error, 'markdown')

        expect(result).toContain('prop=markdown')
        expect(result).toContain('type=TokenizationError')
        expect(result).toContain('file=/content/test/page.md')
        expect(result).toContain('line=1')
        expect(result).toContain('col=10')
        expect(result).toContain('msg="Unexpected token, line:1, col:10"')
      })
    })

    describe('TitleFromAutotitleError', () => {
      test('includes AUTOTITLE error message', () => {
        const error = new TitleFromAutotitleError(
          'Could not find target page for [AUTOTITLE] link to invalid-link',
        )
        error.name = 'TitleFromAutotitleError'

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('prop=rawTitle')
        expect(result).toContain('type=TitleFromAutotitleError')
        expect(result).toContain(
          'msg="Could not find target page for [AUTOTITLE] link to invalid-link"',
        )
        // Should not contain file/line/col since AUTOTITLE errors don't have tokens
        expect(result).not.toContain('file=')
        expect(result).not.toContain('line=')
        expect(result).not.toContain('col=')
      })
    })

    describe('EmptyTitleError', () => {
      test('includes empty content message', () => {
        const error = new EmptyTitleError("output for property 'rawTitle' became empty")
        error.name = 'EmptyTitleError'

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('prop=rawTitle')
        expect(result).toContain('type=EmptyTitleError')
        expect(result).toContain('msg="Content became empty after rendering"')
      })
    })

    describe('Error handling edge cases', () => {
      test('handles error with no token information gracefully', () => {
        const error = new LiquidError('Generic liquid error without token info', 'RenderError')
        // No token property set

        const result = createTranslationFallbackComment(error, 'rawIntro')

        expect(result).toContain('prop=rawIntro')
        expect(result).toContain('type=RenderError')
        expect(result).toContain('msg="Generic liquid error without token info"')
        // Should not contain file/line/col since no token
        expect(result).not.toContain('file=')
        expect(result).not.toContain('line=')
        expect(result).not.toContain('col=')
      })

      test('handles error with token but no file', () => {
        const error = new LiquidError('Error message', 'ParseError')
        error.token = {
          // No file property
          getPosition: () => [5, 10],
        }

        const result = createTranslationFallbackComment(error, 'markdown')

        expect(result).toContain('line=5')
        expect(result).toContain('col=10')
        expect(result).not.toContain('file=')
      })

      test('handles error with token but no getPosition method', () => {
        const error = new LiquidError('Error message', 'ParseError')
        error.token = {
          file: '/content/test.md',
          // No getPosition method
        }

        const result = createTranslationFallbackComment(error, 'title')

        expect(result).toContain('file=/content/test.md')
        expect(result).not.toContain('line=')
        expect(result).not.toContain('col=')
      })

      test('truncates very long error messages', () => {
        const longMessage = 'A'.repeat(300) // Very long error message
        const error = new LiquidError(longMessage, 'ParseError')

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('msg="')
        expect(result).toContain('...')

        // Extract the message part to verify truncation
        const msgMatch = result.match(/msg="([^"]*)"/)
        expect(msgMatch).toBeTruthy()
        if (msgMatch?.[1]) {
          expect(msgMatch[1].length).toBeLessThanOrEqual(203) // 200 + '...'
        }
      })

      test('properly escapes quotes in error messages', () => {
        const error = new LiquidError('Error with "double quotes" and more', 'RenderError')

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('msg="Error with \'double quotes\' and more"')
        expect(result).not.toContain('msg="Error with "double quotes"')
      })

      test('handles error with unknown type', () => {
        const error = new Error('Some error')
        // No name property (will default to 'Error')

        const result = createTranslationFallbackComment(error, 'content')

        expect(result).toContain('type=Error')
        expect(result).toContain('prop=content')
        // Non-liquid errors without specific handling don't get messages
        expect(result).not.toContain('msg=')
      })

      test('handles error with no message', () => {
        const error = new LiquidError('', 'ParseError')

        const result = createTranslationFallbackComment(error, 'title')

        expect(result).toContain('type=ParseError')
        expect(result).toContain('prop=title')
        // Should handle gracefully, might not have msg or have empty msg
      })

      test('cleans up multiline messages', () => {
        const error = new LiquidError('Line 1\nLine 2\n  Line 3  \n\nLine 5', 'RenderError')

        const result = createTranslationFallbackComment(error, 'content')

        expect(result).toContain('msg="Line 1 Line 2 Line 3 Line 5"')
        expect(result).not.toContain('\n')
      })
    })

    describe('Comment format validation', () => {
      test('comment format is valid HTML', () => {
        const error = new LiquidError('Test error', 'ParseError')
        error.token = {
          file: '/content/test.md',
          getPosition: () => [1, 1],
        }

        const result = createTranslationFallbackComment(error, 'rawTitle')

        // Should be a proper HTML comment
        expect(result.startsWith('<!-- TRANSLATION_FALLBACK')).toBe(true)
        expect(result.endsWith('-->')).toBe(true)

        // Should be on a single line
        expect(result).not.toContain('\n')
      })

      test('contains all required fields when available', () => {
        const error = new LiquidError('Detailed error message', 'RenderError')
        error.token = {
          file: '/content/detailed-test.md',
          getPosition: () => [42, 15],
        }

        const result = createTranslationFallbackComment(error, 'rawIntro')

        expect(result).toContain('TRANSLATION_FALLBACK')
        expect(result).toContain('prop=rawIntro')
        expect(result).toContain('type=RenderError')
        expect(result).toContain('file=/content/detailed-test.md')
        expect(result).toContain('line=42')
        expect(result).toContain('col=15')
        expect(result).toContain('msg="Detailed error message"')
      })

      test('maintains consistent field order', () => {
        const error = new LiquidError('Test message', 'ParseError')
        error.token = {
          file: '/content/test.md',
          getPosition: () => [1, 1],
        }

        const result = createTranslationFallbackComment(error, 'title')

        // Should follow the expected structure with all required fields
        expect(result.startsWith('<!-- TRANSLATION_FALLBACK')).toBe(true)
        expect(result).toContain('prop=title')
        expect(result).toContain('type=ParseError')
        expect(result).toContain('file=/content/test.md')
        expect(result).toContain('line=1')
        expect(result).toContain('col=1')
        expect(result).toContain('msg="Test message"')
        expect(result.endsWith('-->')).toBe(true)
      })
    })
  })

  describe('Integration Tests', () => {
    describe('renderContentWithFallback', () => {
      test('adds HTML comment when translation fails and fallback succeeds', async () => {
        // Mock a simple page object that satisfies instanceof Page check
        const mockPage = Object.create(Page.prototype)
        mockPage.rawTitle = '{% badtag %}'

        const context = {
          currentLanguage: 'ja',
          getEnglishPage: () => {
            const enPage = Object.create(Page.prototype)
            enPage.rawTitle = 'English Title'
            return enPage
          },
        }

        // Mock renderContent to simulate error for Japanese, success for English
        mockRenderContent.mockImplementation(
          (template: string, innerContext: Record<string, unknown>) => {
            if (innerContext.currentLanguage !== 'en' && template.includes('badtag')) {
              const error = new LiquidError("Unknown tag 'badtag'", 'ParseError')
              error.token = {
                file: '/content/test.md',
                getPosition: () => [1, 5],
              }
              throw error
            }
            return innerContext.currentLanguage === 'en' ? 'English Title' : template
          },
        )

        const result = await renderContentWithFallback(mockPage, 'rawTitle', context)

        expect(result).toContain('<!-- TRANSLATION_FALLBACK')
        expect(result).toContain('prop=rawTitle')
        expect(result).toContain('type=ParseError')
        expect(result).toContain('line=1')
        expect(result).toContain('col=1')
        expect(result).toContain('msg="tag \'badtag\' not found"')
        expect(result).toContain('English Title')
      })

      test('does not add comment for textOnly rendering', async () => {
        const mockPage = Object.create(Page.prototype)
        mockPage.rawTitle = '{% badtag %}'

        const context = {
          currentLanguage: 'ja',
          getEnglishPage: () => {
            const enPage = Object.create(Page.prototype)
            enPage.rawTitle = 'English Title'
            return enPage
          },
        }

        mockRenderContent.mockImplementation(
          (template: string, innerContext: Record<string, unknown>) => {
            if (innerContext.currentLanguage !== 'en' && template.includes('badtag')) {
              const error = new LiquidError("Unknown tag 'badtag'", 'ParseError')
              throw error
            }
            return 'English Title'
          },
        )

        const result = await renderContentWithFallback(mockPage, 'rawTitle', context, {
          textOnly: true,
        })

        expect(result).not.toContain('<!-- TRANSLATION_FALLBACK')
        expect(result).toBe('English Title')
      })
    })

    describe('executeWithFallback', () => {
      test('adds HTML comment for HTML content when callable fails', async () => {
        const context = {
          currentLanguage: 'es',
        }

        const failingCallable = async () => {
          const error = new LiquidError("Unknown variable 'variables.bad'", 'RenderError')
          error.token = {
            file: '/content/article.md',
            getPosition: () => [10, 20],
          }
          throw error
        }

        const fallbackCallable = async () => '<div>English fallback content</div>'

        const result = await executeWithFallback(context, failingCallable, fallbackCallable)

        expect(result).toContain('<!-- TRANSLATION_FALLBACK')
        expect(result).toContain('prop=content')
        expect(result).toContain('type=RenderError')
        expect(result).toContain('file=/content/article.md')
        expect(result).toContain('line=10')
        expect(result).toContain('col=20')
        expect(result).toContain('<div>English fallback content</div>')
      })

      test('does not add comment for non-HTML content', async () => {
        const context = {
          currentLanguage: 'fr',
        }

        const failingCallable = async () => {
          const error = new LiquidError('Test error', 'RenderError')
          throw error
        }

        const fallbackCallable = async () => 'Plain text fallback'

        const result = await executeWithFallback(context, failingCallable, fallbackCallable)

        expect(result).not.toContain('<!-- TRANSLATION_FALLBACK')
        expect(result).toBe('Plain text fallback')
      })
    })
  })
})
