---
title: 关于使用 OpenID Connect 进行安全强化
shortTitle: 关于使用 OpenID Connect 进行安全强化
intro: OpenID Connect 允许您的工作流程直接从云提供商交换短期令牌。
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## OpenID Connect 概述

{% data variables.product.prodname_actions %} 工作流程通常设计为访问云提供商（如 AWS、Azure、GCP 或 HashiCorp Vault），以便部署软件或使用云的服务。 在工作流程可以访问这些资源之前，它将向云提供商提供凭据（如密码或令牌）。 这些凭据通常作为机密存储在 {% data variables.product.prodname_dotcom %} 中，工作流程在每次运行时都会将此机密呈现给云提供商。

但是，使用硬编码的机密需要在云提供商中创建凭据，然后在 {% data variables.product.prodname_dotcom %} 中将其复制为机密。

借助 OpenID Connect (OIDC)，您可以采用不同的方法，将工作流程配置为直接从云提供商请求短期访问令牌。 您的云提供商还需要在其终端上支持 OIDC，并且您必须配置信任关系，以控制哪些工作流程能够请求访问令牌。 目前支持 OIDC 的提供商包括 Amazon Web Services、Azure、Google Cloud Platform 和 HashiCorp Vault 等。

### 使用 OIDC 的好处

通过更新工作流程以使用 OIDC 令牌，您可以采用以下良好的安全实践：

- **无云机密**：无需将云凭据复制为长期 {% data variables.product.prodname_dotcom %} 机密。 相反，您可以在云提供商上配置 OIDC 信任，然后更新您的工作流程，通过 OIDC 向云提供商请求短期访问令牌。
- **身份验证和授权管理**：您可以更细致地控制工作流程如何使用凭据，使用云提供商的身份验证 (authN) 和授权 (authZ) 工具来控制对云资源的访问。
- **轮换凭证**：借助 OIDC，您的云提供商会颁发仅对单个作业有效的短期访问令牌，然后自动过期。

### 开始使用 OIDC

下图概述了 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商如何与您的工作流程和云提供商集成：

![OIDC 图](/assets/images/help/images/oidc-architecture.png)

1. 在云提供商中，在您的云角色和需要访问云的 {% data variables.product.prodname_dotcom %} 工作流程之间创建 OIDC 信任。
2. 每次作业运行时，{% data variables.product.prodname_dotcom %}的 OIDC 提供商都会自动生成一个 OIDC 令牌。 此令牌包含多个声明，用于建立有关尝试进行身份验证的特定工作流程的经安全强化且可验证的身份。
3. 您可以在作业中包含一个步骤或操作，以从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求此令牌，并将其提供给云提供商。
4. 云提供商成功验证令牌中提供的声明后，将提供仅在作业期间可用的短期云访问令牌。

## 通过云配置 OIDC 信任

将云配置为信任 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商时，**必须**添加过滤传入请求的条件，使不受信任的存储库或工作流程无法为您的云资源请求访问令牌：

- 在授予访问令牌之前，云提供商会检查[`主题`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)以及用于在其信任设置中设置条件的其他声明是否与请求的 JSON Web 令牌 (JWT) 中的声明匹配。 因此，您必须注意正确定义云提供商中的_主题_和其他条件。
- OIDC 信任配置步骤和为云角色设置条件的语法（使用_主题_和其他声明）将因您使用的云提供商而异。 有关一些示例，请参阅“[示例主题声明](#example-subject-claims)”。

### 了解 OIDC 令牌

每个作业都从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求一个 OIDC 令牌，提供商使用自动生成的 JSON Web 令牌 (JWT) 进行响应，该令牌对于生成它的每个工作流程作业都是唯一的。 当作业运行时，OIDC 令牌将呈现给云提供商。 要验证令牌，云提供商会检查 OIDC 令牌的主题和其他声明是否与云角色的 OIDC 信任定义上预配置的条件匹配。

以下示例 OIDC 令牌使用引用 `octo-org/octo-repo` 存储库中名为 `prod` 的作业环境的主题 (`sub`)。

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "https://github.com/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "https://token.actions.githubusercontent.com",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

要查看 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商支持的所有声明，请查看 https://token.actions.githubusercontent.com/.well-known/openid-configuration 中的 `claims_supported` 条目。

令牌包括标准受众、颁发者和主题声明：

| 声明    | 描述                                                                                                                                                        |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aud` | _（受众）_ 默认情况下，这是存储库所有者（如拥有存储库的组织）的 URL。 这是唯一可以自定义的声明。 您可以使用工具包命令设置自定义受众：[`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0) |
| `iss` | _（发行人）_ OIDC 令牌的发行人：`https://token.actions.githubusercontent.com`                                                                                         |
| `sub` | _（主题）_ 定义要由云提供商验证的主题声明。 此设置对于确保仅以可预测的方式分配访问令牌至关重要。                                                                                                        |

OIDC 令牌还包括其他标准声明：

| 声明    | 描述                                    |
| ----- | ------------------------------------- |
| `alg` | _（算法）_OIDC 提供商使用的算法。                  |
| `exp` | _（到期时间）_ 标识 JWT 的到期时间。                |
| `iat` | _（发行时间）_ JWT 的发行时间。                   |
| `jti` | _（JWT 令牌标识符）_ OIDC 令牌的唯一标识符。          |
| `kid` | _（密钥标识符）_ OIDC 令牌的唯一密钥。               |
| `nbf` | _（在此之前无效）_ JWT 在此时间之前无效。              |
| `typ` | _（类型）_ 描述令牌的类型。 这是 JSON Web 令牌 (JWT)。 |

令牌还包括 {% data variables.product.prodname_dotcom %} 提供的自定义声明：

| 声明                 | 描述                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actor`            | 发起工作流程运行的用户帐户。                                                                                                                                               |
| `base_ref`         | 工作流程运行中拉取请求的目标分支。                                                                                                                                            |
| `environment`      | 作业使用的环境的名称。                                                                                                                                                  |
| `event_name`       | 触发工作流程运行的事件的名称。                                                                                                                                              |
| `head_ref`         | 工作流程运行中拉取请求的来源分支。                                                                                                                                            |
| `job_workflow_ref` | 这是此作业使用的可重用工作流程的引用路径。 更多信息请参阅“[使用 OpenID 连接和可重用工作流程](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)”。 |
| `ref`              | _（引用）_ 触发工作流程运行的 git 引用。                                                                                                                                     |
| `ref_type`         | `ref` 的类型，例如："branch"。                                                                                                                                       |
| `仓库`               | 运行工作流程的存储库。                                                                                                                                                  |
| `repository_owner` | 存储 `repository` 的组织的名称。                                                                                                                                      |
| `run_id`           | 触发工作流程的工作流程运行的 ID。                                                                                                                                           |
| `run_number`       | 此工作流程已运行的次数。                                                                                                                                                 |
| `run_attempt`      | 此工作流程运行的重试次数。                                                                                                                                                |
| `工作流程`             | 工作流程的名称。                                                                                                                                                     |

### 使用 OIDC 声明定义云角色的信任条件

借助 OIDC，{% data variables.product.prodname_actions %} 工作流程需要令牌才能访问云提供商中的资源。 工作流程从云提供商请求访问令牌，以检查 JWT 提供的详细信息。 如果 JWT 中的信任配置匹配，则云提供商将通过向工作流程颁发临时令牌来做出响应，然后可以使用该令牌访问云提供商中的资源。 您可以将云提供商配置为仅响应来自特定组织的存储库的请求；您还可以指定其他条件，如下所述。

在云角色/资源上设置条件以限定其对 GitHub 工作流程的访问范围时，受众和主题声明通常结合使用。
- **受众**：默认情况下，此值使用组织或存储库所有者的 URL。 这可用于设置只有特定组织中的工作流程才能访问云角色的条件。
- **主题**：具有预定义的格式，并且是有关工作流程的某些关键元数据的串联，如 {% data variables.product.prodname_dotcom %} 组织、存储库、分支或关联的[`作业`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment)环境。 请参阅“[示例主题声明](#example-subject-claims)”，了解如何从串联的元数据汇编主题声明。

OIDC 令牌中还支持许多其他声明，这些声明也可用于设置这些条件。

此外，云提供商可以允许你为访问令牌分配角色，从而允许你指定更精细的权限。

{% note %}

**注意**：要控制云提供商颁发访问令牌的方式，**必须**至少定义一个条件，使不受信任的存储库无法为云资源请求访问令牌。

{% endnote %}

### 示例主题声明

以下示例演示如何使用“主题”作为条件，并说明如何从串联的元数据汇编“主题”。 [主题](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)使用 [`作业`上下文](/actions/learn-github-actions/contexts#job-context)中的信息，并指示云提供商只能为来自特定分支、环境中运行的工作流程的请求授予访问令牌请求。 以下各节介绍了您可以使用的一些常见主题。

#### 筛选特定环境

当作业引用环境时，主题声明包括环境名称。

您可以配置针对特定[环境](/actions/deployment/using-environments-for-deployment)进行筛选的主题名称。 在此示例中，工作流程运行必须源自具有环境 `Production`、位于 `octo-org` 组织拥有的存储库 `octo-repo` 中的作业：

|     |                                                                     |
| --- | ------------------------------------------------------------------- |
| 语法: | `repo:<orgName/repoName>:environment:<environmentName>` |
| 示例： | `repo:octo-org/octo-repo:environment:Production`                    |

#### 筛选 `pull_request` 事件

当工作流程由拉取请求事件触发时，主题声明包括 `pull_request` 字符串，但前提是作业未引用环境。

您可以配置筛选 [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) 事件的主题。 在此示例中，工作流程运行必须由 `octo-org` 组织拥有的存储库 `octo-repo` 中的 `pull_request` 事件触发：

|     |                                              |
| --- | -------------------------------------------- |
| 语法: | `repo:<orgName/repoName>:pull_request` |
| 示例： | `repo:octo-org/octo-repo:pull_request`       |

#### 筛选特定分支

主题声明包括工作流程的分支名称，但前提是作业未引用环境，并且工作流程不是由拉取请求事件触发的。

您可以配置筛选特定分支名称的主题。 在此示例中，工作流程运行必须源自 `octo-org` 组织拥有的存储库 `octo-repo` 中的 `demo-branch` 分支：

|     |                                                           |
| --- | --------------------------------------------------------- |
| 语法: | `repo:<orgName/repoName>:ref:refs/heads/branchName` |
| 示例： | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### 筛选特定标记

主题声明包括工作流程的标记名称，但前提是作业未引用环境，并且工作流程不是由拉取请求事件触发的。

您可以创建筛选特定标记的主题。 在此示例中，工作流程运行必须源自 `octo-org` 组织拥有的存储库 `octo-repo` 中的 `demo-tag` 标记：

|     |                                                               |
| --- | ------------------------------------------------------------- |
| 语法: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>` |
| 示例： | `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`              |

### 在云提供商中配置主题

要在云提供商的信任关系中配置主题，必须将主题字符串添加到其信任配置中。 以下示例演示了各种云提供商如何以不同的方式接受相同的 `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` 主题：

|                     |                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| Amazon Web Services | `"token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |
| Azure               | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`                                              |
| Google Cloud 平台     | `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`                           |
| HashiCorp Vault     | `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`                              |

更多信息请参阅“[为云提供商启用 OpenID Connect](#enabling-openid-connect-for-your-cloud-provider)”中列出的指南。

## 更新用于 OIDC 的操作

要更新您的自定义操作以使用 OIDC 进行身份验证，您可以使用 Actions 工具包中的 `getIDToken()` 从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求 JWT。 更多信息请参阅 [npm 包文档](https://www.npmjs.com/package/@actions/core/v/1.6.0)中的“OIDC 令牌”。

您还可以使用 `curl` 命令来请求 JWT，方法是使用以下环境变量：

|                                  |                                                               |
| -------------------------------- | ------------------------------------------------------------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL`   | {% data variables.product.prodname_dotcom %} 的 OIDC 提供商的 URL。 |
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | 向 OIDC 提供商发出请求的持有者令牌。                                         |


例如：

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### 添加权限设置

{% data reusables.actions.oidc-permissions-token %}

## 更新 OIDC 的工作流程

现在，您可以更新 YAML 工作流程，以使用 OIDC 访问令牌而不是机密。 常用的云提供商已发布其官方登录操作，使您可以轻松开始使用 OIDC。 有关更新工作流程的详细信息，请参阅下面“[为云提供商启用 OpenID Connect ](#enabling-openid-connect-for-your-cloud-provider)”中列出的云特定指南。


## 为云提供商启用 OpenID Connect

要为您的特定云提供商启用和配置 OIDC，请参阅以下指南：

- ["在 Amazon Web Services 中配置 OpenID Connect"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["在 Azure 中配置 OpenID Connect"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["在 Google Cloud Platform 中配置 OpenID Connect"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["在 Hashicorp Vault 中配置 OpenID Connect"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

要为其他云提供商启用和配置 OIDC，请参阅以下指南：

- ["在云提供商中配置 OpenID Connect"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
