---
title: Using GraphQL Clients
intro: 'You can run queries on real {% data variables.product.prodname_dotcom %} data using various GraphQL clients and libraries.'
redirect_from:
  - /v4/guides/using-the-explorer
  - /graphql/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - API
---

## Using GraphQL client IDEs

There are many open-source GraphQL client IDEs you can use to access {% data variables.product.company_short %}'s GraphQL API.

See [AUTOTITLE](/graphql/guides/forming-calls-with-graphql) for extensive information on HTTP methods, authentication, and GraphQL call structure.

First, choose a client. Common options include GraphiQL, Insomnia, and Altair (desktop/web/extension). You can see the full list of clients in the [GraphQL organization's tool directory](https://graphql.org/community/tools-and-libraries/?tags=services).

The following generic instructions will work with most GraphQL clients:
1. Point the client at the GraphQL endpoint: `{% data variables.product.graphql_url %}`.
1. Add an `Authorization` header: `Authorization: Bearer TOKEN` (replace `TOKEN` with your {% data variables.product.company_short %} {% data variables.product.pat_generic %}. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)).
1. Set the request method to `POST` or if it's available, use the client-provided GraphQL mode.
1. Enter your query or mutation in the editor and, if needed, provide variables in the "Variables" panel.

   Example:

   ```graphql
   query {
     viewer {
       login
     }
   }
   ```

1. If your client needs a schema for documentation rendering or autocomplete, fetch it via a GraphQL introspection query. Many clients can do this automatically from the "Docs" panel.

   Minimal introspection query:

   ```graphql
   query IntrospectionQuery {
     __schema {
       types {
         name
       }
     }
   }
   ```

1. Run the request and inspect the JSON response. Query from example should return the login associated with the {% data variables.product.company_short %} {% data variables.product.pat_generic %} you authenticated with.

Use the client UI to explore docs, run queries, and save requests as needed.

## {% data variables.product.prodname_cli %}

You can also use the command line with {% data variables.product.prodname_cli %} to run GraphQL queries.

1. Install and [authenticate with {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).
1. Run a query against `{% data variables.product.graphql_url %}` using the GraphQL endpoint with the [`gh api` subcommand](https://cli.github.com/manual/gh_api).

Example:

```shell
gh api graphql -f query='query { viewer { login } }'
```

This should return the login associated with the {% data variables.product.company_short %} {% data variables.product.pat_generic %} you authenticated with.

## Requesting support

{% data reusables.support.help_resources %}
