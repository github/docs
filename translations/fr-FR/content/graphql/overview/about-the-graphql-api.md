---
title: About the GraphQL API
intro: 'The {% data variables.product.prodname_dotcom %} GraphQL API offers flexibility and the ability to define precisely the data you want to fetch.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## Overview

Here are some quick links to get you up and running with the GraphQL API:

* [Authentication](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Root endpoint](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Schema introspection](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Rate limits](/graphql/overview/resource-limitations)
* [Migrating from REST](/graphql/guides/migrating-from-rest-to-graphql)

For more information about {% data variables.product.company_short %}'s APIs, see "[About {% data variables.product.company_short %}'s APIs](/developers/overview/about-githubs-apis)."

## About GraphQL

The [GraphQL](https://graphql.github.io/) data query language is:

* **A [specification](https://graphql.github.io/graphql-spec/June2018/).** The spec determines the validity of the [schema](/graphql/guides/introduction-to-graphql#schema) on the API server. The schema determines the validity of client calls.

* **[Strongly typed](#about-the-graphql-schema-reference).** The schema defines an API's type system and all object relationships.

* **[Introspective](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** A client can query the schema for details about the schema.

* **[Hierarchical](/graphql/guides/forming-calls-with-graphql).** The shape of a GraphQL call mirrors the shape of the JSON data it returns. [Nested fields](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) let you query for and receive only the data you specify in a single round trip.

* **An application layer.** GraphQL is not a storage model or a database query language. The _graph_ refers to graph structures defined in the schema, where [nodes](/graphql/guides/introduction-to-graphql#node) define objects and [edges](/graphql/guides/introduction-to-graphql#edge) define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.

## Why GitHub is using GraphQL

GitHub chose GraphQL because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want&mdash;and _only_ the data you want&mdash;is a powerful advantage over traditional REST API endpoints. GraphQL lets you replace multiple REST requests with _a single call_ to fetch the data you specify.

For more details about why GitHub invested in GraphQL, see the original [announcement blog post](https://github.blog/2016-09-14-the-github-graphql-api/).

## About the GraphQL schema reference

The docs in the sidebar are generated from the {% data variables.product.prodname_dotcom %} GraphQL [schema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api). All calls are validated and executed against the schema. Use these docs to find out what data you can call:

* Allowed operations: [queries](/graphql/reference/queries) and [mutations](/graphql/reference/mutations).

* Schema-defined types: [scalars](/graphql/reference/scalars), [objects](/graphql/reference/objects), [enums](/graphql/reference/enums), [interfaces](/graphql/reference/interfaces), [unions](/graphql/reference/unions), and [input objects](/graphql/reference/input-objects).

You can access this same content via the [Explorer Docs sidebar](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Note that you may need to rely on both the docs and the schema validation to successfully call the GraphQL API.

For other information, such as authentication and rate limit details, check out the [guides](/graphql/guides).

## Requesting support

{% data reusables.support.help_resources %}
