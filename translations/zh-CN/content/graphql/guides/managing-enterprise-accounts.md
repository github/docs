---
title: 管理企业帐户
intro: 您可以使用 GraphQL API 管理企业帐户及其拥有的组织。
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 关于使用 GraphQL 管理企业帐户

为帮助您监测和更改组织并保持合规性，可以使用只能作为 GraphQL API 的企业帐户 API 和审核日志 API。

企业帐户端点适用于 GitHub Enterprise Cloud 和 GitHub Enterprise Server。

GraphQL 可用于仅请求和返回您指定的数据。 例如，您可以创建 GraphQL 查询或请求信息，以查看添加至您组织的所有新组织成员。 或者，也可以执行突变或更改操作，以邀请管理员加入您的企业帐户。

通过审核日志 API，可以监测何时有人：
- 访问组织或仓库设置。
- 更改权限。
- 在组织、仓库或团队中添加或删除用户。
- 将用户提升为管理员。
- 更改 GitHub 应用程序的权限。

审核日志 API 可帮助您保存审核日志数据的副本。 对于使用审核日志 API 执行的查询，GraphQL 响应最多可包含 90 至 120 天的数据。 有关通过审核日志 API 获得的字段列表，请参阅“[AuditEntry 接口](/graphql/reference/interfaces#auditentry/)。”

通过企业帐户 API，可以：
- 列出并审查属于企业帐户的所有组织和仓库。
- 更改企业帐户设置。
- 配置企业帐户及其组织的设置策略。
- 邀请管理员加入您的企业帐户。
- 在企业帐户中创建新组织。

有关通过企业帐户 API 获得的字段列表，请参阅“[企业帐户 API 的 GraphQL 字段和类型](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)。”

### 开始将 GraphQL 用于企业帐户

按照以下步骤开始利用 GraphQL 管理企业帐户：
 - 使用个人访问令牌进行身份验证
 - 选择 GraphQL 客户端或使用 GraphQL Explorer
 - 设置 Insomnia 以使用 GraphQL API

有关查询示例，请参阅“[使用企业帐户 API 的查询示例](#an-example-query-using-the-enterprise-accounts-api)。”

#### 1. 使用个人访问令牌进行身份验证

1. 要使用 GraphQL 进行身份验证，需要通过开发者设置生成个人访问令牌 (PAT)。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

2. 向要访问的 GHES 区域的个人访问令牌授予管理员和完全控制权限。 要获得对私有仓库、组织、团队、用户数据及企业帐单和个人资料数据访问的完全权限，建议您为个人访问令牌选择以下作用域：
    - `repo`
    - `admin:org`
    - `用户`
    - `admin:enterprise`

  企业帐户特定作用域包括：
    - `admin:enterprise`：全面控制企业（包括 `manage_billing:enterprise` 和 `read:enterprise`）
    - `manage_billing:enterprise`：读取和写入企业帐单数据。
    - `read:enterprise`：读取企业简介数据。

4. 复制个人访问令牌并保存在安全的位置，直到将其添加至您的 GraphQL 客户端。

#### 2. 选择 GraphQL 客户端

建议您使用 GraphiQL 或可用于配置基准 URL 的其他独立 GraphQL 客户端。

也可以考虑使用以下 GraphQL 客户端：
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

接下来将使用 Insomnia。

#### 3. 设置 Insomnia，以使用 GitHub GraphQL API 处理企业账户

1. 将基准 url 和 `POST` 方法添加至您的 GraphQL 客户端。 使用 GraphQL 请求信息（查询）、更该信息（突变）或使用 GitHub API 传输数据时，默认 HTTP 方法为 `POST`，基准 url 遵循的语法为：
    - 对于企业实例：`https://<HOST>/api/graphql`
    - 对于 GitHub Enterprise Cloud：`https://api.github.com/graphql`

2. 要进行身份验证，请打开身份验证选项菜单，并选择 **Bearer token（不记名令牌）**。 接下来，添加您之前复制的个人访问令牌。

 ![个人访问令牌的权限选项](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![个人访问令牌的权限选项](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. 加入标头信息。
   - 添加 `Content-Type` 作为标头，`application/json` 作为值。 ![标准标头](/assets/images/developer/graphql/json-content-type-header.png) ![含审核日志 API 预览值的标头](/assets/images/developer/graphql/preview-header-for-2.18.png)

现在可以开始执行查询了。

### 使用企业账户 API 的查询示例

此 GraphQL 查询使用 Enterprise Accounts API 请求每个设备的组织中 {% if currentVersion != "github-ae@latest" %}`公共`{% else %}`私有`{% endif %} 仓库的总数。 要自定义此查询，请用企业实例 slug 的 slug 替换 `<enterprise-account-name>`。

{% if currentVersion != "github-ae@latest" %}

```graphql
query publicRepositoriesByOrganization($slug: String!) query publicRepositoriesByOrganization($slug: String!) {
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

新 GraphQL 查询示例显示了不使用 Enterprise Account API 时检索每个组织中的{% if currentVersion != "github-ae@latest" %}`公共`{% else %}`私有`{% endif %} 仓库数的难度。  请注意，GraphQL 企业账户 API 已使企业执行此任务变得更简单，因为您只需要自定义单个变量。 要自定义此查询，请将 `<name-of-organization-one>` 和 `<name-of-organization-two>` 等参数替换为 实例中的组织名称。

{% if currentVersion != "github-ae@latest" %}
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

### 分别查询每个组织

{% if currentVersion != "github-ae@latest" %}

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

有关开始使用 GraphQL 的更多信息，请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql)”和“[使用 GraphQL 建立调用](/graphql/guides/forming-calls-with-graphql)。”

### 企业账户 API 的 GraphQL 字段和类型

下面是关于可与企业账户 API 结合使用的新查询、突变和架构定义类型的概述。

有关可与企业账户 API 结合使用的新查询、突变和架构定义类型的详细信息，请参阅任何 [GraphQL 参考页面](/graphql)含有详细 GraphQL 定义的边栏。

您可以从 GitHub 的 GraphQL explorer 访问参考文档。 更多信息请参阅“[使用 explorer](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)。” 有关其他信息，如身份验证和速率限制详细信息，请查看[指南](/v4/guides)。 有关其他信息，如身份验证和速率限制详细信息，请查看[指南](/graphql/guides)。
