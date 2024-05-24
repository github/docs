---
title: Default environment variables for your codespace
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/default-environment-variables-for-your-codespace
---

## About default environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables for every codespace. Commands run in codespaces can create, read, and modify environment variables.

{% note %}

**Note**: Environment variables are case-sensitive.

{% endnote %}

## List of default environment variables

| Environment variable | Description |
| ---------------------|------------ |
| `CODESPACE_NAME` | The name of the codespace For example, `octocat-literate-space-parakeet-mld5` |
| `CODESPACES` | Always `true` while in a codespace |
| `GIT_COMMITTER_EMAIL` | The email for the "author" field of future `git` commits. |
| `GIT_COMMITTER_NAME` | The name for the "committer" field of future `git` commits. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Returns the domain of the {% data variables.product.prodname_github_codespaces %} forwarded port. For example, `app.github.dev`. |
| `GITHUB_API_URL` | Returns the API URL. For example, `{% data variables.product.rest_url %}`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example, `{% data variables.product.graphql_url %}`. |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Returns the URL of the {% data variables.product.product_name %} server. For example, `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | A signed auth token representing the user in the codespace. You can use this to make authenticated calls to the GitHub API. For more information, see "[AUTOTITLE](/codespaces/reference/security-in-github-codespaces#authentication)."  |
| `GITHUB_USER` | The name of the user that initiated the codespace. For example, `octocat`. |
