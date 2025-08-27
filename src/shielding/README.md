# Shielding

## Overview

Essentially code in our server that controls the prevention of "junk requests" is scripted HTTP requests to endpoints that are _not_ made by regular browser users.

For example, there's middleware code that sees if a `GET` request
comes in with a bunch of random looking query strings keys. This would cause a PASS on the CDN but would not actually matter to the rendering. In this
case, we spot this early and return a redirect response to the same URL
without the unrecognized query string keys so that if the request follows
redirects, the eventual 200 would be normalized by a common URL so the CDN
can serve a HIT.

Here's an in-time discussion post that summaries the _need_ and much of the
recent things we've done to fortify our backend servers to avoid unnecessary
work loads:

**[How we have fortified Docs for better resiliency and availability (June 2023)](https://github.com/github/docs-engineering/discussions/3262)**

## How it works

At its root, the `src/shielding/frame/middleware/index.ts` is injected into our
Express server. From there, it loads all its individual middleware handlers.

Each middleware is one file that focuses on a single use-case. The
use-cases are borne from studying log files to
spot patterns of request abuse.

> [!NOTE]
> Some shielding "tricks" appear in other places throughout the code
> base such as controlling the 404 response for `/assets/*` URLs.

## Rate limiting

We rate limit at multiple levels:

1. CDN (Fastly)
2. All routes via [src/shielding/frame/index.ts](./middleware/index.ts) and the `createRateLimiter()` middleware.
   - These routes are _only_ rate limited if they are deemed suspicious based on parameters we check.
3. API routes via their declaration in [src/frame/middleware/api.ts](../frame/middleware/api.ts) using the `createRateLimiter()` middleware.
   - These routes are limited to a certain # of requests per minute, regardless of what the request looks like.
