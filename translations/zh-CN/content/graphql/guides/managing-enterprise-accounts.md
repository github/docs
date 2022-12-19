---
title: 管理企业帐户
intro: 您可以使用 GraphQL API 管理企业帐户及其拥有的组织。
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106779'
---
## 关于使用 GraphQL 管理企业帐户

为帮助您监测和更改组织并保持合规性，可以使用只能作为 GraphQL API 的企业帐户 API 和审核日志 API。

企业帐户端点适用于 GitHub Enterprise Cloud 和 GitHub Enterprise Server。

使用 GraphQL 可以请求并仅返回指定的数据。 例如，可以创建 GraphQL 查询或请求信息，以查看添加到组织的所有新组织成员。 或者，可以做出更改，以邀请管理员加入企业帐户。

使用审核日志 API，可以监视下列行为：
- 访问组织或存储库设置。
- 更改权限。
- 在组织、存储库或团队中添加或删除用户。
- 将用户提升为管理员。
- 更改 GitHub 应用权限。

使用审核日志 API 可以保留审核日志数据的副本。 对于使用审核日志 API 执行的查询，GraphQL 响应最多可包含 90 至 120 天的数据。 有关审核日志 API 提供的字段列表，请参阅“[AuditEntry 接口](/graphql/reference/interfaces#auditentry/)”。

通过企业帐户 API，可以：
- 列出并审查属于企业帐户的所有组织和仓库。
- 更改企业帐户设置。
- 配置企业帐户及其组织的设置策略。
- 邀请管理员加入您的企业帐户。
- 在企业帐户中创建新组织。

有关企业帐户 API 提供的字段列表，请参阅“[企业帐户 API 的 GraphQL 字段和类型](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)”。

## 开始将 GraphQL 用于企业帐户

按照以下步骤开始利用 GraphQL 管理企业帐户：
 - 使用 {% data variables.product.pat_generic %} 进行身份验证
 - 选择 GraphQL 客户端或使用 GraphQL Explorer
 - 设置 Insomnia 以使用 GraphQL API

如需一些示例查询，请参阅“[使用企业帐户 API 的示例查询](#an-example-query-using-the-enterprise-accounts-api)”。

### 1. 使用 {% data variables.product.pat_generic %} 进行身份验证

{% data reusables.user-settings.graphql-classic-pat-only %}

1. 要使用 GraphQL 进行身份验证，需要通过开发者设置生成 {% data variables.product.pat_generic %}。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)。”

2. 向要访问的 GHES 区域的 {% data variables.product.pat_generic %} 授予管理员和完全控制权限。 要获得对私有仓库、组织、团队、用户数据及企业帐单和个人资料数据访问的完全权限，建议你为 {% data variables.product.pat_generic %} 选择以下范围：
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  企业帐户特定作用域包括：
    - `admin:enterprise`：全面控制企业（包括 `manage_runners:enterprise`、`manage_billing:enterprise` 和 `read:enterprise`）
    - `manage_billing:enterprise`：读取和写入企业账单数据。{% ifversion ghes or ghae %}
    - `manage_runners:enterprise`：获得管理 GitHub Actions 企业运行器和运行器组的权限。{% endif %}
    - `read:enterprise`：读取企业资料数据。

3. 复制 {% data variables.product.pat_generic %} 并保存在安全的位置，直到将其添加至你的 GraphQL 客户端。

### 2. 选择 GraphQL 客户端

建议您使用 GraphiQL 或可用于配置基准 URL 的其他独立 GraphQL 客户端。

也可以考虑使用以下 GraphQL 客户端：
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

接下来将使用 Insomnia。

### 3. 设置 Insomnia，将 GitHub GraphQL API 用于企业帐户

1. 将基 url 和 `POST` 方法添加至 GraphQL 客户端。 使用 GraphQL 请求信息（查询）、更改信息（突变）或使用 GitHub API 传输数据时，默认 HTTP 方法为 `POST`，基 url 遵循此语法：
    - 对于企业实例：`https://<HOST>/api/graphql`
    - 对于 GitHub Enterprise 云：`https://api.github.com/graphql`

2. 要进行身份验证，请打开身份验证选项菜单，并选择“持有者令牌”。 接下来，添加之前复制的 {% data variables.product.pat_generic %}。

 ![{% data variables.product.pat_generic %} 的权限选项](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![{% data variables.product.pat_generic %} 的权限选项](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. 加入标头信息。
   - 添加 `Content-Type` 和 `application/json` 分别作为标头和值。
   ![标准标头](/assets/images/developer/graphql/json-content-type-header.png)
   ![包含审核日志 API 预览值的标头](/assets/images/developer/graphql/preview-header-for-2.18.png)

现在可以开始执行查询了。

## 使用企业账户 API 的查询示例

此 GraphQL 查询使用 Enterprise Accounts API 请求每个设备的组织中 {% ifversion not ghae %}`public`{% else %}`private`{% endif %} 存储库的总数。 要自定义此查询，请用企业帐户的句柄替换 `<enterprise-account-name>`。 例如，如果企业帐户位于 `https://github.com/enterprises/octo-enterprise`，请用 `octo-enterprise` 替换 `<enterprise-account-name>`。

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

下一个 GraphQL 查询示例显示了在不使用企业帐户 API 的情况下检索每个组织中的 {% ifversion not ghae %}`public`{% else %}`private`{% endif %} 存储库总数的难度。  请注意，GraphQL 企业账户 API 已使企业执行此任务变得更简单，因为您只需要自定义单个变量。 要自定义此查询，请将 `<name-of-organization-one>` 和 `<name-of-organization-two>` 等项替换为实例中的组织名称。

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## 分别查询每个组织

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

此 GraphQL 查询用于请求企业组织的最后 5 个日志条目。 要自定义此查询，请替换 `<org-name>` 和 `<user-name>`。

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

有关开始使用 GraphQL 的更多信息，请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql)”和“[使用 GraphQL 形成调用](/graphql/guides/forming-calls-with-graphql)”。

## 企业账户 API 的 GraphQL 字段和类型

下面是关于可与企业账户 API 结合使用的新查询、突变和架构定义类型的概述。

有关可与企业帐户 API 结合使用的新查询、突变和架构定义类型的详细信息，请参阅任何 [GraphQL 参考页面](/graphql)含有详细 GraphQL 定义的边栏。

您可以从 GitHub 的 GraphQL explorer 访问参考文档。 有关详细信息，请参阅“[使用资源管理器](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)”。
有关其他信息，如身份验证和速率限制详细信息，请查看[指南](/graphql/guides)。
