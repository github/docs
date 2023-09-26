# Shielding

## Overview

Essentially code in our server that controls the prevention of "junk requests" is scripted HTTP requests to endpoints that are *not* made by regular browser users.

For example, there's middleware code that sees if a `GET` request
comes in with a bunch of random looking query strings keys. This would cause a PASS on the CDN but would not actually matter to the rendering. In this
case, we spot this early and return a redirect response to the same URL
without the unrecognized query string keys so that if the request follows
redirects, the eventual 200 would be normalized by a common URL so the CDN
can serve a HIT.

Here's an in-time discussion post that summaries the *need* and much of the
recent things we've done to fortify our backend servers to avoid unnecessary
work loads:

**[How we have fortified Docs for better resiliency and availability (June 2023)](https://github.com/github/docs-engineering/discussions/3262)**

## How it works

At its root, the `src/shielding/middleware/index.js` is injected into our
Express server. From there, it loads all its individual middleware handlers.

Each middleware is one file that focuses on a single use-case. The
use-cases are borne from studying log files (CDN and Azure App Service) to
spot patterns of request abuse.

## Notes

- The best place to do shielding is as close to the client(s) as possible,
i.e. in the CDN or in Azure Frontdoor. Having the code in our own backend
has the advantage that it's easier to write custom business logic
along with end-to-end tests.
- Some shielding "tricks" appear in other places throughout the code
base such as controlling the 404 response for `/assets/*` URLs.
