---
title: Getting started with the Sponsors GraphQL API
intro: 'Using the GraphQL API, you can build custom integrations to manage or review your sponsorships.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - GraphQL
  - API
shortTitle: Sponsors GraphQL API
---

To get started with the GraphQL API, see "[AUTOTITLE](/graphql/guides/introduction-to-graphql)."

You can find the details about the Sponsors GraphQL API in the reference docs. For more information, see "[AUTOTITLE](/graphql/reference)." We recommend using the GraphQL explorer to build your GraphQL calls. For more information, see "[AUTOTITLE](/graphql/guides/using-the-explorer)."

## Known Issues

The `createSponsorship` mutation currently does not work for one-time payments. [Reproduction steps and discussion here](https://github.com/orgs/community/discussions/138161)
