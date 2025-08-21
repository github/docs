import {
  isInvalidVersionedPath,
  isJunkPath,
  isVersionedPath,
  shouldUseAppRouter,
  stripLocalePrefix,
} from '@/app/lib/routing-patterns'
import type { ExtendedRequest } from '@/types'
import type { NextFunction, Response } from 'express'
import { setAppRouterContextHeaders } from '../lib/header-utils'
import { defaultCacheControl } from './cache-control'
import { nextApp } from './next'

export default function appRouterGateway(req: ExtendedRequest, res: Response, next: NextFunction) {
  const path = req.path || req.url
  const strippedPath = stripLocalePrefix(path)

  // Only intercept GET and HEAD requests, and prioritize /empty-categories paths
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next()
  }

  // Special case: Always intercept /empty-categories paths regardless of method
  if (strippedPath.endsWith('/empty-categories')) {
    // Skip the normal exclusion logic and go straight to App Router routing
    const pageFound = !!(req.context && req.context.page)

    if (shouldUseAppRouter(path, pageFound)) {
      // Set the URL to trigger App Router's not-found.tsx since /empty-categories should 404
      req.url = '/404'
      res.status(404)
      defaultCacheControl(res)

      // Set context headers for App Router (don't preserve Fastly since this is internal routing)
      setAppRouterContextHeaders(req, res, false)

      res.locals = res.locals || {}
      res.locals.handledByAppRouter = true
      return nextApp.getRequestHandler()(req, res)
    }
  }

  // Don't route static assets, API routes, valid versioned docs paths, or junk paths to App Router
  // Let them be handled by Pages Router middleware (shielding, API handlers, etc.)
  // However, invalid versioned paths (like paths with /ANY/ or bogus versions) should go to App Router for 404
  // EXCEPTION: /empty-categories paths should always go to App Router for proper 404 handling
  const strippedPathForExclusion = stripLocalePrefix(path)

  if (
    path.startsWith('/_next/') ||
    path.startsWith('/assets/') ||
    path.startsWith('/public/') ||
    path.startsWith('/api/') ||
    path === '/api' ||
    isJunkPath(path) ||
    (isVersionedPath(path) &&
      !isInvalidVersionedPath(path) &&
      !strippedPathForExclusion.endsWith('/empty-categories')) ||
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

  // Check if a page was found by the findPage middleware
  const pageFound = !!(req.context && req.context.page)

  if (shouldUseAppRouter(path, pageFound)) {
    console.log(`[INFO] Using App Router for path: ${path} (pageFound: ${!!pageFound})`)

    // Strip locale prefix for App Router routing
    const strippedPath = stripLocalePrefix(path)

    // For 404 routes (either explicit or missing pages), always route to our 404 page
    if (strippedPath === '/404' || strippedPath === '/_not-found' || !pageFound) {
      // Set the URL to trigger App Router's not-found.tsx
      req.url = '/404' // Use a real App Router page route
      res.status(404)

      // Set proper cache headers for 404 responses to match Pages Router behavior
      defaultCacheControl(res)
    } else {
      // For other App Router routes, use the stripped path
      const originalUrl = req.url
      req.url = strippedPath + originalUrl.substring(req.path.length)
    }

    // Set context headers for App Router (preserve Fastly headers)
    setAppRouterContextHeaders(req, res, true)

    // Use Next.js App Router to handle this request
    // The App Router will use the appropriate page.tsx or not-found.tsx
    // IMPORTANT: Don't call next() - this terminates the Express middleware chain

    // Mark response as handled to prevent further middleware processing
    res.locals = res.locals || {}
    res.locals.handledByAppRouter = true

    // Use the Next.js request handler and DO NOT call next()
    return nextApp.getRequestHandler()(req, res)
  }

  console.log(`[INFO] Using Pages Router for path: ${path}`)
  // Continue with Pages Router pipeline
  return next()
}
