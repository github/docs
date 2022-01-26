---
title: Default environment variables for your codespace
shortTitle: 默认环境变量
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## About default environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables for every codespace. Commands run in codespaces can create, read, and modify environment variables.

{% note %}

**Note**: Environment variables are case-sensitive.

{% endnote %}

## List of default environment variables

| 环境变量                  | 描述                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODESPACE_NAME`      | The name of the codespace For example, `monalisa-github-hello-world-2f2fsdf2e`                                                                                                                                                                    |
| `CODESPACES`          | Always `true` while in a codespace                                                                                                                                                                                                                |
| `GIT_COMMITTER_EMAIL` | The email for the "author" field of future `git` commits.                                                                                                                                                                                         |
| `GIT_COMMITTER_NAME`  | The name for the "committer" field of future `git` commits.                                                                                                                                                                                       |
| `GITHUB_API_URL`      | 返回 API URL。 For example, `{% data variables.product.api_url_code %}`.                                                                                                                                                                             |
| `GITHUB_GRAPHQL_URL`  | 返回 GraphQL API URL。 For example, `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                 |
| `GITHUB_REPOSITORY`   | 所有者和仓库名称。 例如 `octocat/Hello-World`。                                                                                                                                                                                                               |
| `GITHUB_SERVER_URL`   | 返回 {% data variables.product.product_name %} 服务器的 URL。 For example, `https://{% data variables.product.product_url %}`.                                                                                                                           |
| `GITHUB_TOKEN`        | A signed auth token representing the user in the codespace. You can use this to make authenticated calls to the GitHub API. For more information, see "[Authentication](/codespaces/codespaces-reference/security-in-codespaces#authentication)." |
| `GITHUB_USER`         | The name of the user that initiated the codespace. 例如 `octocat`。                                                                                                                                                                                  |
