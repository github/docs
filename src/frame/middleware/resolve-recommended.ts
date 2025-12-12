import type { ExtendedRequest, ResolvedArticle } from '@/types'
import type { Response, NextFunction } from 'express'
import findPage from '@/frame/lib/find-page'
import { renderContent } from '@/content-render/index'
import Permalink from '@/frame/lib/permalink'

import { createLogger } from '@/observability/logger/index'

const logger = createLogger('middleware:resolve-recommended')

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
 * Middleware to resolve recommended articles from rawRecommended paths and legacy spotlight field
 */
async function resolveRecommended(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = req.context?.page
    const rawRecommended = (page as any)?.rawRecommended
    const spotlight = (page as any)?.spotlight
    // Collect article paths from rawRecommended or spotlight if there are no
    // recommended articles
    let articlePaths: string[] = []

    // Add paths from rawRecommended
    if (rawRecommended && Array.isArray(rawRecommended)) {
      articlePaths.push(...rawRecommended)
    }

    // Add paths from spotlight (legacy field) if no recommended articles
    if (articlePaths.length === 0 && spotlight && Array.isArray(spotlight)) {
      const spotlightPaths = spotlight
        .filter((item: any) => item && typeof item.article === 'string')
        .map((item: any) => item.article)
      articlePaths.push(...spotlightPaths)
    }

    if (articlePaths.length === 0) {
      return next()
    }

    // remove duplicate articles
    articlePaths = [...new Set(articlePaths)]
    const resolved: ResolvedArticle[] = []

    for (const rawPath of articlePaths) {
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
            title: foundPage.title,
            intro: await renderContent(foundPage.intro, req.context),
            href,
            category,
          })
        }
      } catch (error) {
        logger.warn(`Failed to resolve recommended article: ${rawPath}`, { error })
      }
    }

    // Replace the rawRecommended with resolved articles
    if (page) {
      ;(page as any).recommended = resolved
    }
  } catch (error) {
    logger.error('Error in resolveRecommended middleware:', { error })
  }

  next()
}

export default resolveRecommended
