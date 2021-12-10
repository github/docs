---
title: Codespaces Default Environment Variables
intro: 'GitHub sets default environment variables for each codespace.
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
  - 
product: '{% data reusables.gated-features.codespaces %}'
---

## About default environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables for every Codespace. Environment variables are case-sensitive. Commands run in codespaces can create, read, and modify environment variables.

## List of default environment variables

| Environment variable | Description |
| ---------------------|------------ |
| `CODESPACE_NAME` | Name of the codespace For example:`monalisa-github-hello-world-2f2fsdf2e` |
| `CODESPACES` | Always `true` while in a codespace |
| `GITHUB_TOKEN` | undefined |
| `GIT_COMMITTER_NAME` | undefined |
| `GIT_COMMITTER_EMAIL` | undefined |
| `GITHUB_SERVER_URL`| Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`. |
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `INTERNAL_VSCS_TARGET_URL` | undefined |
| `GITHUB_CODESPACE_TOKEN` | undefined |
| `GITHUB_USER` | The name of the user that initiated the codespace. For example, `octocat`. |