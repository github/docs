import {
  isInvalidVersionedPath,
  isJunkPath,
  isVersionedPath,
  shouldUseAppRouter,
  stripLocalePrefix,
} from '@/app/lib/routing-patterns'
import { defaultCacheControl } from './cache-control'
import type { ExtendedRequest } from '@/types'
import type { NextFunction, Response } from 'express'
import { nextApp } from './next'

export default function appRouterGateway(req: ExtendedRequest, res: Response, next: NextFunction) {
  const path = req.path || req.url
  const strippedPath = stripLocalePrefix(path)

  // Only intercept GET and HEAD requests
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next()
  }

  // Special case: Always intercept /empty-categories paths
  if (strippedPath.endsWith('/empty-categories')) {
    const pageFound = !!(req.context && req.context.page)

    if (shouldUseAppRouter(path, pageFound)) {
      req.url = '/404'
      res.status(404)
      defaultCacheControl(res)

      // Only pass the original pathname - no other headers needed
      res.setHeader('x-pathname', req.path)

      res.locals = res.locals || {}
      res.locals.handledByAppRouter = true
      return nextApp.getRequestHandler()(req, res)
    }
  }

  // Don't route static assets, API routes, valid versioned docs paths, or junk paths to App Router
  if (
    path.startsWith('/_next/') ||
    path.startsWith('/_build') ||
    path.startsWith('/assets/') ||
    path.startsWith('/public/') ||
    path.startsWith('/api/') ||
    path === '/api' ||
    isJunkPath(path) ||
    (isVersionedPath(path) &&
      !isInvalidVersionedPath(path) &&
      !strippedPath.endsWith('/empty-categories')) ||
    path.includes('.css') ||
    path.includes('.js') ||
    path.includes('.map') ||
    path.includes('.ico') ||
    path.includes('.png') ||
    path.includes('.svg') ||
    path.endsWith('/manifest.json') ||
    path.endsWith('/robots.txt') ||
    path.endsWith('/llms.txt') ||
    path.endsWith('/_500')
  ) {
    return next()
  }

  const pageFound = !!(req.context && req.context.page)

  if (shouldUseAppRouter(path, pageFound)) {
    console.log(`[INFO] Using App Router for path: ${path} (pageFound: ${!!pageFound})`)

    const innerStrippedPath = stripLocalePrefix(path)

    // For 404 routes, always route to our 404 page
    if (innerStrippedPath === '/404' || innerStrippedPath === '/_not-found' || !pageFound) {
      req.url = '/404'
      res.status(404)
      defaultCacheControl(res)
    } else {
      // For other App Router routes, use the stripped path
      const originalUrl = req.url
      req.url = strippedPath + originalUrl.substring(req.path.length)
    }

    // Only pass pathname for App Router context creation
    res.setHeader('x-pathname', req.path)

    // Mark response as handled to prevent further middleware processing
    res.locals = res.locals || {}
    res.locals.handledByAppRouter = true

    return nextApp.getRequestHandler()(req, res)
  }

  console.log(`[INFO] Using Pages Router for path: ${path}`)
  return next()
}
