import type { ExtendedRequest, ResolvedArticle } from '@/types'
import type { Response, NextFunction } from 'express'
import findPage from '@/frame/lib/find-page'
import { renderContent } from '@/content-render/index'
import Permalink from '@/frame/lib/permalink'

import { createLogger } from '@/observability/logger/index'

const logger = createLogger('middleware:resolve-carousels')

/**
 * Build an article path by combining language, optional base path, and article path
 */
function buildArticlePath(currentLanguage: string, articlePath: string, basePath?: string): string {
  const pathPrefix = basePath ? `/${currentLanguage}/${basePath}` : `/${currentLanguage}`
  const separator = articlePath.startsWith('/') ? '' : '/'
  return `${pathPrefix}${separator}${articlePath}`
}

/**
 * Try to resolve an article path using multiple resolution strategies
 */
function tryResolveArticlePath(
  rawPath: string,
  pageRelativePath: string | undefined,
  req: ExtendedRequest,
): any {
  const { pages, redirects } = req.context!
  const currentLanguage = req.context!.currentLanguage || 'en'

  // Check if we have the required dependencies
  if (!pages || !redirects) {
    return undefined
  }

  // Strategy 1: Try content-relative path (add language prefix to raw path)
  const contentRelativePath = buildArticlePath(currentLanguage, rawPath)
  let foundPage = findPage(contentRelativePath, pages, redirects)

  if (foundPage) {
    return foundPage
  }

  // Strategy 2: Try page-relative path if page context is available
  if (pageRelativePath) {
    const pageDirPath = pageRelativePath.split('/').slice(0, -1).join('/')
    const pageRelativeFullPath = buildArticlePath(currentLanguage, rawPath, pageDirPath)
    foundPage = findPage(pageRelativeFullPath, pages, redirects)

    if (foundPage) {
      return foundPage
    }
  }

  // Strategy 3: Try with .md extension if not already present
  if (!rawPath.endsWith('.md')) {
    const pathWithExtension = `${rawPath}.md`

    // Try Strategy 1 with .md extension
    const contentRelativePathWithExt = buildArticlePath(currentLanguage, pathWithExtension)
    foundPage = findPage(contentRelativePathWithExt, pages, redirects)

    if (foundPage) {
      return foundPage
    }

    // Try Strategy 2 with .md extension
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

/**
 * Get the path for a page (without language/version)
 */
function getPageHref(page: any): string {
  if (page.relativePath) {
    return Permalink.relativePathToSuffix(page.relativePath)
  }
  return '' // fallback
}

/**
 * Middleware to resolve carousel articles from rawCarousels object
 */
async function resolveCarousels(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = req.context?.page
    const rawCarousels = (page as any)?.rawCarousels

    // Handle carousels format
    if (rawCarousels && typeof rawCarousels === 'object') {
      const resolvedCarousels: Record<string, ResolvedArticle[]> = {}

      for (const [carouselKey, articlePaths] of Object.entries(rawCarousels)) {
        if (!Array.isArray(articlePaths) || articlePaths.length === 0) {
          continue
        }

        // Remove duplicate articles
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
          // Prevent prototype pollution by rejecting __proto__ keys
          if (
            carouselKey !== '__proto__' &&
            carouselKey !== 'constructor' &&
            carouselKey !== 'prototype'
          ) {
            resolvedCarousels[carouselKey] = resolved
          }
        }
      }

      // Store resolved carousels on the page
      if (page && Object.keys(resolvedCarousels).length > 0) {
        ;(page as any).carousels = resolvedCarousels
      }
    }
  } catch (error) {
    logger.error('Error in resolveCarousels middleware:', { error })
  }

  next()
}

export default resolveCarousels
