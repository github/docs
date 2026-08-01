---
title: Stacked pull requests in the REST and GraphQL APIs
shortTitle: Stacked PRs APIs
intro: Read and manage stacked pull requests programmatically with the {% data variables.product.github %} REST and GraphQL APIs.
allowTitleToDifferFromFilename: true
versions:
  feature: pr-stacks
contentType: reference
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

The {% data variables.product.github %} REST and GraphQL APIs both expose stacked pull requests. The REST API supports reading and managing stacks, while the GraphQL API supports read-only queries.

Use the API to read a pull request's stack membership or to build your own automation and integrations for stacked pull requests.

## REST API

The REST API exposes stacked pull requests in two ways:

* **The `stack` object on pull request resources.** When a pull request belongs to a stack, its REST resource includes a `stack` object. This lets you read the pull request's stack membership, including the stack's number and size and the pull request's position and base, directly from the pull request.
* **The Stacks API.** A dedicated set of endpoints to list, read, create, extend, and dissolve stacks. This is the surface for creating and modifying stacks.

> [!NOTE]
> If you merge via the API and want to use stacked pull requests, you'll need to update your code to use the new merge API for stacks. See [AUTOTITLE](/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).

For endpoints, parameters, and schemas, see [AUTOTITLE](/rest/pulls/pulls).

## GraphQL API

The GraphQL API exposes a pull request's stack membership through read-only `stack` and `stackEntry` fields on the `PullRequest` type. Use these fields to query the stack a pull request belongs to and its position within it.

The GraphQL API is read-only for stacks; there are no stack mutations. To create or modify stacks, use the REST API.

For fields, objects, and schemas, see [AUTOTITLE](/graphql/reference/pulls#object-pullrequeststack).

## Further reading

* [AUTOTITLE](/pull-requests/reference/stacked-prs-cli-commands)
* [AUTOTITLE](/pull-requests/get-started/about-stacked-prs)
