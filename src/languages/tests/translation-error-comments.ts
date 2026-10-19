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
        // AUTOTITLE errors do not expose token file, line, or col data.
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
        // Errors without tokens do not expose file, line, or col data.
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
        const longMessage = 'A'.repeat(300)
        const error = new LiquidError(longMessage, 'ParseError')

        const result = createTranslationFallbackComment(error, 'rawTitle')

        expect(result).toContain('msg="')
        expect(result).toContain('...')

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
        // Plain Error uses its inherited name as the fallback comment type.

        const result = createTranslationFallbackComment(error, 'content')

        expect(result).toContain('type=Error')
        expect(result).toContain('prop=content')
        // Non-liquid errors without specific handling omit messages.
        expect(result).not.toContain('msg=')
      })

      test('handles error with no message', () => {
        const error = new LiquidError('', 'ParseError')

        const result = createTranslationFallbackComment(error, 'title')

        expect(result).toContain('type=ParseError')
        expect(result).toContain('prop=title')
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

        expect(result.startsWith('<!-- TRANSLATION_FALLBACK')).toBe(true)
        expect(result.endsWith('-->')).toBe(true)

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
        // Page.prototype makes the mock satisfy instanceof Page.
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

        // Japanese rendering fails and English rendering succeeds, so fallback runs.
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

      describe('when rendering a page other than the request page', () => {
        const makePage = (languageCode: string, href: string, props: Record<string, string>) => {
          const page = Object.create(Page.prototype)
          Object.assign(page, props, { languageCode, permalinks: [{ href }] })
          return page
        }

        const setup = () => {
          const enA = makePage('en', '/en/a', { rawTitle: 'A en', rawIntro: 'Intro A en' })
          const enB = makePage('en', '/en/b', { rawTitle: 'B en', rawIntro: 'Intro B en' })
          const jaA = makePage('ja', '/ja/a', { rawTitle: '{% badtag %}', rawIntro: 'Intro A ja' })
          const jaB = makePage('ja', '/ja/b', {
            rawTitle: '{% badtag %}',
            rawIntro: '{% badtag %}',
          })
          const jaC = makePage('ja', '/ja/c', { rawTitle: '{% badtag %}' })
          const context = {
            currentLanguage: 'ja',
            page: jaA,
            pages: { '/en/a': enA, '/en/b': enB, '/ja/a': jaA, '/ja/b': jaB, '/ja/c': jaC },
            getEnglishPage: vi.fn(() => enA),
          }
          return { jaA, jaB, jaC, context }
        }

        test('falls back to the English title of the rendered page', async () => {
          const { jaB, context } = setup()

          const result = await renderContentWithFallback(jaB, 'rawTitle', context, {
            textOnly: true,
          })

          expect(result).toBe('B en')
        })

        test('falls back to the English intro of the rendered page', async () => {
          const { jaB, context } = setup()

          const result = await renderContentWithFallback(jaB, 'rawIntro', context)

          expect(result).toContain('<!-- TRANSLATION_FALLBACK')
          expect(result).toContain('Intro B en')
          expect(result).not.toContain('Intro A en')
        })

        test('uses getEnglishPage for the request page', async () => {
          const { jaA, context } = setup()

          const result = await renderContentWithFallback(jaA, 'rawTitle', context, {
            textOnly: true,
          })

          expect(context.getEnglishPage).toHaveBeenCalledWith(context)
          expect(result).toBe('A en')
        })

        test('rethrows when the rendered page has no English counterpart', async () => {
          const { jaC, context } = setup()

          await expect(
            renderContentWithFallback(jaC, 'rawTitle', context, { textOnly: true }),
          ).rejects.toMatchObject({ name: 'ParseError' })
        })
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
