import type { ExtendedRequest, Page, ResolvedArticle } from '@/types'
import type { Response, NextFunction } from 'express'
import findPage from '@/frame/lib/find-page'
import { renderContent } from '@/content-render/index'
import Permalink from '@/frame/lib/permalink'

import { createLogger } from '@/observability/logger/index'

// Page adds rawCarousels and carousels at runtime, but the Page type omits them.
interface PageCarouselProps {
  rawCarousels?: Record<string, string[]>
  carousels?: Record<string, ResolvedArticle[]>
}

const logger = createLogger('middleware:resolve-carousels')

function buildArticlePath(currentLanguage: string, articlePath: string, basePath?: string): string {
  const pathPrefix = basePath ? `/${currentLanguage}/${basePath}` : `/${currentLanguage}`
  const separator = articlePath.startsWith('/') ? '' : '/'
  return `${pathPrefix}${separator}${articlePath}`
}

// Resolve carousel paths as content-relative, then page-relative, then retry both with .md.
function tryResolveArticlePath(
  rawPath: string,
  pageRelativePath: string | undefined,
  req: ExtendedRequest,
): Page | undefined {
  const { pages, redirects } = req.context!
  const currentLanguage = req.context!.currentLanguage || 'en'

  if (!pages || !redirects) {
    return undefined
  }

  const contentRelativePath = buildArticlePath(currentLanguage, rawPath)
  let foundPage = findPage(contentRelativePath, pages, redirects)

  if (foundPage) {
    return foundPage
  }

  if (pageRelativePath) {
    const pageDirPath = pageRelativePath.split('/').slice(0, -1).join('/')
    const pageRelativeFullPath = buildArticlePath(currentLanguage, rawPath, pageDirPath)
    foundPage = findPage(pageRelativeFullPath, pages, redirects)

    if (foundPage) {
      return foundPage
    }
  }

  if (!rawPath.endsWith('.md')) {
    const pathWithExtension = `${rawPath}.md`

    const contentRelativePathWithExt = buildArticlePath(currentLanguage, pathWithExtension)
    foundPage = findPage(contentRelativePathWithExt, pages, redirects)

    if (foundPage) {
      return foundPage
    }

    if (pageRelativePath) {
      const pageDirPath = pageRelativePath.split('/').slice(0, -1).join('/')
      const pageRelativeFullPathWithExt = buildArticlePath(
        currentLanguage,
        pathWithExtension,
        pageDirPath,
      )
      foundPage = findPage(pageRelativeFullPathWithExt, pages, redirects)

      if (foundPage) {
        return foundPage
      }
    }
  }

  return foundPage
}

function getPageHref(page: Page): string {
  if (page.relativePath) {
    return Permalink.relativePathToSuffix(page.relativePath)
  }
  return ''
}

async function resolveCarousels(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = req.context?.page
    const rawCarousels = (page as unknown as PageCarouselProps)?.rawCarousels

    if (rawCarousels && typeof rawCarousels === 'object') {
      const resolvedCarousels: Record<string, ResolvedArticle[]> = {}

      for (const [carouselKey, articlePaths] of Object.entries(rawCarousels)) {
        if (!Array.isArray(articlePaths) || articlePaths.length === 0) {
          continue
        }

        const uniquePaths = [...new Set(articlePaths)]
        const resolved: ResolvedArticle[] = []

        for (const rawPath of uniquePaths) {
          try {
            const foundPage = tryResolveArticlePath(rawPath, page?.relativePath, req)

            if (
              foundPage &&
              (!req.context?.currentVersion ||
                foundPage.applicableVersions.includes(req.context.currentVersion))
            ) {
              const href = getPageHref(foundPage)
              const category = foundPage.relativePath
                ? foundPage.relativePath.split('/').slice(0, -1).filter(Boolean)
                : []

              resolved.push({
                title: await renderContent(foundPage.title, req.context, { textOnly: true }),
                intro: await renderContent(foundPage.intro, req.context, { textOnly: true }),
                href,
                category,
              })
            }
          } catch (error) {
            logger.warn(`Failed to resolve carousel article: ${rawPath}`, { error })
          }
        }

        if (resolved.length > 0) {
          // Reject unsafe object keys to prevent prototype pollution.
          if (
            carouselKey !== '__proto__' &&
            carouselKey !== 'constructor' &&
            carouselKey !== 'prototype'
          ) {
            resolvedCarousels[carouselKey] = resolved
          }
        }
      }

      if (page && Object.keys(resolvedCarousels).length > 0) {
        ;(page as unknown as PageCarouselProps).carousels = resolvedCarousels
      }
    }
  } catch (error) {
    logger.error('Error in resolveCarousels middleware:', { error })
  }

  next()
}

export default resolveCarousels
