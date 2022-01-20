---
// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .graphqlOperation('GetMissions', ({ proxy, cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60,
        staleWhileRevalidateSeconds: 60 * 60 * 24, // this way stale items can still be prefetched
      },
      browser: {
        maxAgeSeconds: 0,
      },
    })
    proxy('graphql') // forward posts requests to apollo unaltered
  })
  .graphqlOperation('GetRockets', ({ proxy, cache }) => {
    cache({
      edge: false,
    })
    proxy('graphql') // forward posts requests to apollo unaltered
  })
  .use(nextRoutes) // automatically adds routes for all files under /pages

title: GitHub GraphQL API
intro: 'To create integrations, retrieve data, and automate your workflows, use the {% data variables.product.prodname_dotcom %} GraphQL API. The {% data variables.product.prodname_dotcom %} GraphQL API offers more precise and flexible queries than the {% data variables.product.prodname_dotcom %} REST API.'
shortTitle: GraphQL API
introLinks:
  overview: /graphql/overview/about-the-graphql-api
featuredLinks:
  guides:
  - /graphql/guides/forming-calls-with-graphql
  - /graphql/guides/introduction-to-graphql
  - /graphql/guides/using-the-explorer
  popular:
  - /graphql/overview/explorer
  - /graphql/overview/public-schema
  - /graphql/overview/schema-previews
  - /graphql/guides/using-the-graphql-api-for-discussions
  guideCards:
  - /graphql/guides/migrating-from-rest-to-graphql
  - /graphql/guides/managing-enterprise-accounts
  - /graphql/guides/using-global-node-ids
changelog:
  label: 'api, apis'
layout: product-landing
redirect_from:
  - /v4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
children:
  - /overview
  - /reference
  - /guides
---

