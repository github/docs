---
title: 将 OAuth 应用程序迁移到 GitHub 应用程序
intro: '了解将 {% data variables.product.prodname_oauth_app %} 迁移到 {% data variables.product.prodname_github_app %} 的好处，以及如何迁移未在 {% data variables.product.prodname_marketplace %} 中上架的 {% data variables.product.prodname_oauth_app %}。 '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081030'
---
本文为考虑从 OAuth 应用程序迁移到 GitHub 应用程序的现有集成者提供指南。

## 切换到 GitHub 应用程序的原因

[GitHub 应用](/apps/) 是官方推荐的与 GitHub 集成的方式，因为与纯基于 OAuth 的集成相比，它们提供了许多优势：

- [细化权限](/apps/differences-between-apps/#requesting-permission-levels-for-resources)针对 GitHub 应用可以访问的特定信息，与不受权限限制的 OAuth 应用相比，允许具有安全策略的个人和组织更广泛地使用应用。
- [短期令牌](/apps/differences-between-apps/#token-based-identification)提供比 OAuth 令牌更安全的身份验证方法。 在授权 OAuth 应用程序的人撤销令牌之前，OAuth 令牌不会过期。 GitHub 应用程序使用快速过期的令牌，将受损令牌的使用限制到更小的时限。
- [内置集中式 Webhook](/apps/differences-between-apps/#webhooks) 接收应用可以访问的所有存储库和组织的事件。 相反，OAuth 应用程序需要为用户可访问的每个仓库和组织配置一个 web 挂钩。
- [机器人帐户](/apps/differences-between-apps/#machine-vs-bot-accounts)不会占用 {% data variables.product.product_name %} 席位，即使最初安装应用的人离开组织时也会保持安装状态。
- 使用[用户到服务器终结点](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)的 GitHub 应用仍然可以使用对 OAuth 的内置支持。
- 机器人帐户的专用 [API 速率限制](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)随集成缩放。
- 存储库所有者可以在组织存储库上[安装 GitHub 应用](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps)。 如果 GitHub 应用程序的配置具有请求组织资源的权限，则组织所有者必须批准安装。
- 可通过 [Octokit 库](/rest/overview/libraries) 和其他框架（如 [Probot](https://probot.github.io/)）获得开源社区支持。
- 构建 GitHub 应用程序的集成者有机会采用较早的 API 访问方式。

## 将 OAuth 应用程序转换为 GitHub 应用程序

这些指南假定你有一个注册的 OAuth 应用 {% ifversion fpt or ghec %}，它可能在 GitHub Marketplace 中上架，也可能没有上架{% endif %}。 在较高级别，您需要执行以下步骤：

1. [查看 GitHub 应用可用的 API 终结点](#review-the-available-api-endpoints-for-github-apps)
1. [设计保持在 API 速率限制内](#design-to-stay-within-api-rate-limits)
1. [注册新的 GitHub 应用](#register-a-new-github-app)
1. [确定应用所需的权限](#determine-the-permissions-your-app-requires)
1. [订阅 Webhook](#subscribe-to-webhooks)
1. [了解不同的身份验证方法](#understand-the-different-methods-of-authentication)
1. [指导用户在存储库中安装你的 GitHub 应用](#direct-users-to-install-your-github-app-on-repositories)
1. [删除任何不必要的存储库挂钩](#remove-any-unnecessary-repository-hooks)
1. [鼓励用户撤销对 OAuth 应用的访问权限](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [删除 OAuth 应用](#delete-the-oauth-app)

### 查看 GitHub 应用程序可用的 API 端点

虽然目前大部分 [REST API](/rest) 终结点和 [GraphQL](/graphql) 查询都可用于 GitHub 应用，但我们仍在启用更多终结点。 查看[可用的 REST 终结点](/rest/overview/endpoints-available-for-github-apps)，以确保所需的终结点与 GitHub 应用兼容。 请注意，为 GitHub 应用程序启用的某些 API 端点允许应用程序代表用户执行操作。 有关允许 GitHub 应用以用户身份进行身份验证的终结点列表，请参阅“[用户到服务器请求](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)”。

我们建议您尽早查看所需的 API 端点列表。 如果尚未为 {% data variables.product.prodname_github_apps %} 启用您需要的端点，请告知支持人员。

### 设计保持在 API 速率限制内

GitHub 应用使用[滑动速率限制规则](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)，可以根据组织中的存储库和用户数增加速率上限。 GitHub 应用还可以利用[条件请求](/rest/overview/resources-in-the-rest-api#conditional-requests)或通过使用 [GraphQL API](/graphql) 合并请求。

### 注册新的 GitHub 应用程序

决定切换到 GitHub 应用后，需要[创建新的 GitHub 应用](/apps/building-github-apps/)。

### 确定应用程序所需的权限

注册 GitHub 应用程序时，您需要选择应用程序代码中使用的每个端点所需的权限。 有关 GitHub 应用可用的每个终结点所需的权限列表，请参阅“[GitHub 应用权限](/rest/reference/permissions-required-for-github-apps)”。

在 GitHub 应用的设置中，可以针对每种权限类型指定应用是否需要 `No Access`、`Read-only` 或 `Read & Write` 访问权限。 精细权限允许您的应用程序获得有针对性的权限以访问您需要的数据子集。 我们建议指定能够提供所需功能的最小权限集。

### 订阅 web 挂钩

创建新的 GitHub 应用程序并选择其权限后，您可以选择要它订阅的 web 挂钩事件。 请参阅“[编辑 GitHub 应用的权限](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”，了解如何订阅 Webhook。

### 了解不同的身份验证方法

GitHub 应用程序主要使用在短时间后过期的基于令牌的身份验证，比不会过期的 OAuth 令牌更安全。 了解您可以使用的不同身份验证方法以及您何时需要使用它们，这非常重要：

* JSON Web 令牌 (JWT) [作为 GitHub 应用进行身份验证](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)。 例如，可以使用 JWT 进行身份验证以提取应用程序安装详细信息，或交换 JWT 以获取安装访问令牌  。
* 安装访问令牌[验证为 GitHub 应用的特定安装](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)（也称为服务器到服务器请求）。 例如，你可以使用安装访问令牌进行身份验证，以打开问题或提供有关拉取请求的反馈。
* OAuth 访问令牌可以[验证为 GitHub 应用的用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)（也称为用户到服务器请求）。 例如， 当 GitHub 应用程序需要验证用户身份或代表用户执行操作时，您可以使用 OAuth 访问令牌验证为用户。

最常见的情况是使用安装访问令牌验证为特定安装。

### 指导用户在仓库中安装您的 GitHub 应用程序

从 OAuth 应用程序过渡到 GitHub 应用程序后，您需要让用户知道 GitHub 应用程序可供安装。 例如，您可以在应用程序内的呼吁横幅中添加 GitHub 应用程序的安装链接。 为了简化过渡，您可以使用查询参数来识别将要完成 GitHub 应用程序安装流程的用户或组织帐户，并预先选择 OAuth 应用程序可以访问的任何仓库。 这使用户可以轻松地在您有权访问的仓库上安装 GitHub 应用程序。

#### 查询参数

| 名称 | 说明 |
|------|-------------|
| `suggested_target_id` | 必需：安装 GitHub 应用的用户或组织的 ID。 |
| `repository_ids[]` | 仓库 ID 的数组。 如果省略，我们将选择所有仓库。 可以预先选择的仓库最大数量为 100。 |

#### 示例 URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

你需要将 `YOUR_APP_NAME` 替换为 GitHub 应用的名称，将 `ID_OF_USER_OR_ORG` 替换为目标用户或组织的 ID，并包含最多 100 个存储库 ID（`REPO_A_ID` 和 `REPO_B_ID`）。 要获取 OAuth 应用有权访问的存储库列表，请使用[列出已验证用户的存储库](/rest/reference/repos#list-repositories-for-the-authenticated-user)和[列出组织存储库](/rest/reference/repos#list-organization-repositories)终结点。

### 删除任何不必要的仓库挂钩

在仓库中安装 GitHub 应用程序后，应删除由原有 OAuth 应用程序创建的任何不必要的 web 挂钩。 如果两个应用程序都安装在仓库中，它们可能会为用户重复执行功能。 要删除 Webhook，可以使用 `repositories_added` 操作侦听 [`installation_repositories` Webhook](/webhooks/event-payloads/#installation_repositories)，并在 OAuth 应用创建的那些存储库上[删除存储库 Webhook](/rest/reference/webhooks#delete-a-repository-webhook)。

### 鼓励用户撤销 OAuth 应用程序的访问权限

随着 GitHub 应用程序安装基础的增长，请考虑鼓励用户撤销原有 OAuth 集成的访问权限。 有关详细信息，请参阅“[授权 OAuth 应用](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)”。

### 删除 OAuth 应用程序

为了避免滥用 OAuth 应用程序的凭据，请考虑删除 OAuth 应用程序。 此操作还将撤销 OAuth 应用程序的所有剩余授权。 有关详细信息，请参阅“[删除 OAuth 应用](/developers/apps/managing-oauth-apps/deleting-an-oauth-app)”。
