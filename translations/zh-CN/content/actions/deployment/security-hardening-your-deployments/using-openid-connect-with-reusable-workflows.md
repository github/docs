---
title: 将 OpenID Connect 与可重用的工作流程结合使用
shortTitle: Using OpenID Connect with reusable workflows
intro: 您可以将可重用的工作流程与 OIDC 结合使用，以标准化您的部署步骤并加强其安全性。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
ms.openlocfilehash: c9b5daf88f6e2dc91aad8890a3a8833cfbd2b0f0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '146273048'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="about-reusable-workflows"></a>关于可重用工作流程

您可以创建一个可重用的工作流程来执行部署步骤，而不是将部署作业从一个工作流程复制并粘贴到另一个工作流程。 如果可重用工作流满足“[重用工作流](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows)”中所述的访问要求之一，则可以由另一个工作流使用。

与 OpenID Connect (OIDC) 结合使用时，可重用工作流程可让您在存储库、组织或企业中实施一致的部署。 为此，可以基于可重用工作流程在云角色上定义信任条件。

为了创建基于可重用工作流的信任条件，云提供商必须支持 `job_workflow_ref` 的自定义声明。 这允许您的云提供商确定作业最初来自哪个存储库。 如果你的云提供商仅支持标准声明（受众和主题），则无法确定作业是否源自可重用工作流存储库 。 支持 `job_workflow_ref` 的云提供商包括 Google Cloud Platform 和 HashiCorp Vault。

在继续操作之前，应熟悉[可重用工作流](/actions/learn-github-actions/reusing-workflows)和 [OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) 的概念。

## <a name="how-the-token-works-with-reusable-workflows"></a>令牌如何与可重用工作流程配合使用

在工作流程运行期间，{% data variables.product.prodname_dotcom %} 的 OIDC 提供商会向云提供商提供一个 OIDC 令牌，其中包含有关作业的信息。 如果该作业是可重用工作流的一部分，则令牌将包括包含有关调用工作流的信息的标准声明，并且还将包括一个名为 `job_workflow_ref` 的自定义声明，其中包含有关被调用工作流的信息。

例如，以下 OIDC 令牌适用于作为被调用工作流程一部分的作业。 `workflow`、`ref` 及其他属性描述调用方工作流，而 `job_workflow_ref` 指被调用的工作流：

```yaml{:copy}
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_id": "74",
  "repository_owner_id": "65",
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
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

如果可重用工作流程执行部署步骤，则它通常需要访问特定的云角色，并且您可能希望允许组织中的任何存储库调用该可重用工作流程。 若要允许这样做，您将创建允许任何存储库和任何调用方工作流程的信任条件，然后筛选组织和被调用的工作流程。 有关一些示例，请参阅下一节。

## <a name="examples"></a>示例

筛选特定存储库中的可重用工作流

您可以配置自定义声明，以筛选特定存储库中的任何可重用工作流程。 在此示例中，工作流运行必须源自在 `octo-org/octo-automation` 存储库的可重用工作流中定义的作业，以及由 `octo-org` 组织拥有的任何存储库中定义的作业。

- **主题**：
  - 语法： `repo:ORG_NAME/*`
  - 示例： `repo:octo-org/*`

- **自定义声明**：
  - 语法： `job_workflow_ref:ORG_NAME/REPO_NAME`
  - 示例： `job_workflow_ref:octo-org/octo-automation@*`

在特定引用处筛选特定的可重用工作流

您可以配置自定义声明，以筛选特定的可重用工作流程。 在此示例中，工作流运行必须源自在可重用工作流 `octo-org/octo-automation/.github/workflows/deployment.yml` 中定义的作业，以及由 `octo-org` 组织拥有的任何存储库中定义的作业。

- **主题**：
  - 语法： `repo:ORG_NAME/*` 
  - 示例： `repo:octo-org/*` 

- **自定义声明**：
  - 语法： `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - 示例：`job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
