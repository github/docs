---
title: Using the Explorer
intro: 'You can run queries on real {% data variables.product.prodname_dotcom %} data using the GraphQL Explorer, an integrated development environment in your browser that includes docs, syntax highlighting, and validation errors.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

## About the GraphQL Explorer

{% if currentVersion == "free-pro-team@latest" %}

[GraphQL Explorer](/graphql/overview/explorer) is an instance of [GraphiQL](https://github.com/graphql/graphiql), which is a "graphical interactive in-browser GraphQL IDE."

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} has disabled [mutations](/graphql/reference/mutations) in the Explorer, but you can use them in your own GraphiQL instance.

{% endnote %}

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), also referred to in this documentation as the GraphQL Explorer, is a "graphical interactive in-browser GraphQL IDE."

{% endif %}

## Using GraphiQL

To use the GraphiQL app, download and install it from https://github.com/skevy/graphiql-app.

### Configuring GraphiQL

1. Get an [OAuth token](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Launch GraphiQL.
1. In the upper-right corner of GraphiQL, click **Edit HTTP Headers**.
1. In the **Key** field, enter `Authorization`. In the **Value** field, enter `Bearer <token>`, where `<token>` is your generated OAuth token.
![graphiql headers](/assets/images/developer/graphiql-headers.png)
1. Click the checkmark to the right of the token to save it.
1. To return to the editor, click outside of the **Edit HTTP Headers** modal.
1. In the **GraphQL Endpoint** field, enter `{% data variables.product.graphql_url_pre %}`.
1. In the **Method** dropdown menu, select **POST**.

{% note %}

**Note**: For more information about why `POST` is the method, see "[Communicating with GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)."

{% endnote %}

You can test your access by querying yourself:

```graphql
query {
  viewer {
    login
  }
}
```

If everything worked correctly, this will display your login. You're all set to start making queries.

## Accessing the sidebar docs

All types in a GraphQL schema include a `description` field compiled into documentation. The collapsible **Docs** pane on the right side of the Explorer page allows you to browse documentation about the type system. The docs are automatically updated and will drop deprecated fields.

{% note %}

The **Docs** sidebar contains the same content that is automatically generated from the schema under "[Reference](/graphql)," though it is formatted differently in places.

{% endnote %}

## Using the variable pane

Some example calls include [variables](/graphql/guides/forming-calls-with-graphql#working-with-variables) written like this:

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

This is the correct format to submit the call via a cURL `POST` (as long as you [escape newlines](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

If you want to run the call in the Explorer, enter the `query` segment in the main pane and the variables in the **Query Variables** pane below it. Omit the word `variables` from the Explorer:

```graphql
{
   "number_of_repos": 3
}
```

## Requesting support

{% data reusables.support.help_resources %}

## Troubleshooting errors

Because GraphQL is [introspective](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), the Explorer supports:

* Intelligent typeaheads aware of the current schema
* Validation error previews as you type

If you enter a query that is not well-formed or does not pass [schema validation](/graphql/guides/introduction-to-graphql#schema), a popup warns you of an error. If you run the query, the error returns in the response pane.

A GraphQL response contains several keys: a `data` hash and an `errors` array.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

It's possible you might run into an unexpected error that is not related to the schema. If this happens, the message will include a reference code you can use when reporting the issue:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} recommends checking for errors before using data in a production environment. In GraphQL, failure is not total: portions of GraphQL queries may succeed while others fail.

{% endnote %}
