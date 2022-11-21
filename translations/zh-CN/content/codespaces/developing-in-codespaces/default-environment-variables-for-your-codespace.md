---
title: 代码空间的默认环境变量
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %} 为每个代码空间设置默认环境变量。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 1a57445bbffb3e1112299414e29796b716f2d801
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158923'
---
## 关于默认环境变量

{% data variables.product.prodname_dotcom %} 为每个代码空间设置默认环境变量。 在代码空间中运行的命令可以创建、读取和修改环境变量。

{% note %}

**注意**：环境变量区分大小写。

{% endnote %}

## 默认环境变量列表

| 环境变量 | 说明 |
| ---------------------|------------ |
| `CODESPACE_NAME` | 代码空间的名称 例如，`octocat-literate-space-parakeet-mld5` |
| `CODESPACES` | 在代码空间中始终为 `true` |
| `GIT_COMMITTER_EMAIL` | 未来 `git` 提交的“作者”字段的电子邮件。 |
| `GIT_COMMITTER_NAME` | 未来 `git` 提交的“提交者”字段的名称。 |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| 返回 {% data variables.product.prodname_github_codespaces %} 转发端口的域。 例如 `preview.app.github.dev`。 |
| `GITHUB_API_URL` | 返回 API URL。 例如，`{% data variables.product.api_url_code %}`。 |
| `GITHUB_GRAPHQL_URL` | 返回 GraphQL API URL。 例如，`{% data variables.product.graphql_url_code %}`。 |
| `GITHUB_REPOSITORY` | 所有者和仓库名称。 例如，`octocat/Hello-World`。 |
| `GITHUB_SERVER_URL`| 返回 {% data variables.product.product_name %} 服务器的 URL。 例如，`https://{% data variables.product.product_url %}`。 |
| `GITHUB_TOKEN` | 代表代码空间中用户的签名身份验证令牌。 您可以使用它对 GitHub API 进行经过身份验证的调用。 有关详细信息，请参阅“[身份验证](/codespaces/codespaces-reference/security-in-codespaces#authentication)”。  |
| `GITHUB_USER` | 启动代码空间的用户的名称。 例如，`octocat`。 |
