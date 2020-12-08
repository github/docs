# GraphQL

The `/content/graphql` directory is where the GitHub GraphQL API docs live!

* The `/content/graphql/guides` and `/content/graphql/overview` directories contain regular articles. These are human-editable.
* The `/content/graphql/reference` directory contains a skeleton structure for the GraphQL API reference. However, most GraphQL API content inserted using `include`s.

  The content for the `include`s are generated from the API source code internally in GitHub, and is processed using the scripts and static `json` files in the `/lib/graphql` directory.

  **As a result, we cannot accept contributions to GraphQL API reference content in this repository.**
