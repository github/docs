---
title: Default environment variables for your codespace
shortTitle: デフォルトの環境変数
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

| 環境変数                  | 説明                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODESPACE_NAME`      | The name of the codespace For example, `monalisa-github-hello-world-2f2fsdf2e`                                                                                                                                                                    |
| `CODESPACES`          | Always `true` while in a codespace                                                                                                                                                                                                                |
| `GIT_COMMITTER_EMAIL` | The email for the "author" field of future `git` commits.                                                                                                                                                                                         |
| `GIT_COMMITTER_NAME`  | The name for the "committer" field of future `git` commits.                                                                                                                                                                                       |
| `GITHUB_API_URL`      | API URL を返します。 For example, `{% data variables.product.api_url_code %}`.                                                                                                                                                                          |
| `GITHUB_GRAPHQL_URL`  | グラフ QL API の URL を返します。 For example, `{% data variables.product.graphql_url_code %}`.                                                                                                                                                             |
| `GITHUB_REPOSITORY`   | 所有者およびリポジトリの名前。 `octocat/Hello-World`などです。                                                                                                                                                                                                        |
| `GITHUB_SERVER_URL`   | {% data variables.product.product_name %} サーバーの URL を返します。 For example, `https://{% data variables.product.product_url %}`.                                                                                                                       |
| `GITHUB_TOKEN`        | A signed auth token representing the user in the codespace. You can use this to make authenticated calls to the GitHub API. For more information, see "[Authentication](/codespaces/codespaces-reference/security-in-codespaces#authentication)." |
| `GITHUB_USER`         | The name of the user that initiated the codespace. `octocat`などです。                                                                                                                                                                                 |
