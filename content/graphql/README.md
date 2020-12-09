# GraphQL

The `/content/graphql` directory is where the GitHub GraphQL API docs live!

* The `/content/graphql/guides` and `/content/graphql/overview` directories contain articles that are human-editable.
* The `/content/graphql/reference` directory contains an article for each GraphQL data type used in the GitHub API. Most of the content in this directory is rendered using the `include` tag. 

  The content rendered by the `include` tag is sourced from the `lib/graphql/static` directory, which is automatically generated and should not be edited by a human. For more information, see the [`lib/graphql/README.md`](lib/graphql/README.md).

  **As a result, we cannot accept contributions to GraphQL API reference content in this repository.**
