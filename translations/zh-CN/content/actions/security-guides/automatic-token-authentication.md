---
title: 自动令牌身份验证
intro: '{% data variables.product.prodname_dotcom %} 提供一个令牌，可用于代表 {% data variables.product.prodname_actions %} 进行身份验证。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107035'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 `GITHUB_TOKEN` 机密

在每个工作流程运行开始时，{% data variables.product.prodname_dotcom %} 会自动创建唯一的 `GITHUB_TOKEN` 机密以在工作流程中使用。 可以使用 `GITHUB_TOKEN` 在工作流程运行中进行身份验证。

当您启用 {% data variables.product.prodname_actions %} 时，{% data variables.product.prodname_dotcom %} 在您的仓库中安装 {% data variables.product.prodname_github_app %}。 `GITHUB_TOKEN` 机密是一种 {% data variables.product.prodname_github_app %} 安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 {% data variables.product.prodname_github_app %} 进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 有关详细信息，请参阅“[`GITHUB_TOKEN` 的权限](#permissions-for-the-github_token)”。

在每个作业开始之前， {% data variables.product.prodname_dotcom %} 将为作业提取安装访问令牌。 {% data reusables.actions.github-token-expiration %}

令牌在 `github.token` 上下文中也可用。 有关详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts#github-context)”。

## 在工作流程中使用 `GITHUB_TOKEN`

可以使用标准语法引用密钥以使用 `GITHUB_TOKEN`：{%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}。 `GITHUB_TOKEN` 的使用示例包括将令牌作为某个操作的输入来传递，或使用它来发出经验证的 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 请求。

{% note %}

重要：即使工作流程没有明确将 `GITHUB_TOKEN` 传递到操作，操作也可以通过 `github.token` 上下文访问 `GITHUB_TOKEN`。 作为一种良好的安全做法，应该始终通过限制授予 `GITHUB_TOKEN` 的权限，确保操作只有所需的最低访问权限。 有关详细信息，请参阅“[`GITHUB_TOKEN` 的权限](#permissions-for-the-github_token)”。

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### 示例 1：将 `GITHUB_TOKEN` 作为输入传递

{% data reusables.actions.github_token-input-example %}

### 例2：调用 REST API

可以使用 `GITHUB_TOKEN` 进行经过验证的 API 调用。 此示例工作流程使用 {% data variables.product.prodname_dotcom %} REST API 创建议题：

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## `GITHUB_TOKEN` 的权限

有关 {% data variables.product.prodname_github_apps %} 可通过各种权限访问的 API 端点的信息，请参阅“[{% data variables.product.prodname_github_app %} 权限](/rest/reference/permissions-required-for-github-apps)”。

下表显示了默认授予 `GITHUB_TOKEN` 的权限。 对{% ifversion not ghes %}企业、组织或仓库、{% else %}组织或仓库{% endif %}具有管理权限的人可以设置默认权限为允许或限制。 有关如何为企业、组织或存储库设置 `GITHUB_TOKEN` 的默认权限的信息，请参阅“[在企业强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)”、“[为组织禁用或限制 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)”或“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)。”

| 范围         | 默认访问权限<br>（允许） | 默认访问权限<br>（限制） | 最大访问权限<br>\- 分支存储库 |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | 读/写  | 无 | 读取 |
| 检查        | 读/写  | 无 | 读取 |
| 内容      | 读/写  | 读取 | 读取 |
| deployments   | 读/写  | 无 | 读取 |{% ifversion fpt or ghec %}
| id-token      | 无        | 无 | 读取 |{% endif %}
| issues        | 读/写  | 无 | 读取 |
| metadata      | 读取        | 读取 | 读取 |
| packages      | 读/写  | 无 | 读取 |
| 页         | 读/写  | 无 | 读取 |
| pull-requests | 读/写  | 无 | 读取 |
| repository-projects | 读/写 | 无 | 读取 |
| security-events     | 读/写 | 无 | 读取 |
| statuses      | 读/写  | 无 | 读取 |

{% data reusables.actions.workflow-runs-dependabot-note %}

### 修改 `GITHUB_TOKEN` 的权限

可在单个工作流文件中修改 `GITHUB_TOKEN` 的权限。 如果 `GITHUB_TOKEN` 的默认权限受限，可能需要提升权限以允许一些操作和命令成功运行。 如果默认权限是非限制性的，你可以编辑工作流文件以从 `GITHUB_TOKEN` 中删除部分权限。 作为一种不错的安全做法，应授予 `GITHUB_TOKEN` 最少的访问权限。

可以在工作流程运行日志的“设置作业”部分看到 `GITHUB_TOKEN` 对于特定作业的权限。 有关详细信息，请参阅“[使用工作流程运行日志](/actions/managing-workflow-runs/using-workflow-run-logs)”。

可以在工作流程文件中使用 `permissions` 键来修改 `GITHUB_TOKEN` 对于整个工作流程或单个作业的权限。 这允许您为工作流程或作业配置所需的最小权限。 使用 `permissions` 键时，所有未指定的权限都设置为没有访问权限，`metadata` 范围除外，该范围总是获得读取访问。

{% data reusables.actions.forked-write-permission %}

本文前面的两个工作流程示例显示了在工作流程级别和作业级别使用的 `permissions` 键。 在[例 1](#example-1-passing-the-github_token-as-an-input) 中，为整个工作流程指定了两个权限。 在[例 2](#example-2-calling-the-rest-api) 中，为单个作业的一个范围授予写入访问权限。

有关 `permissions` 密钥的完整详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#permissions)”。

#### 如何计算工作流程作业的权限

`GITHUB_TOKEN` 的权限最初设置为企业、组织或存储库的默认设置。 如果默认设置为这些级别中任何级别的限制权限，这将适用于相关的仓库。 例如，如果您在组织级别选择受限制的默认值，则该组织中的所有仓库将使用限制的权限作为默认值。 然后根据工作流程文件中的任何配置（首先在工作流程级别，然后在作业级别）对权限进行调整。 最后，如果工作流程是由分叉的存储库中的拉取请求触发，并且未选择“Send write tokens to workflows from pull requests（将写入令牌从拉取请求发送到工作流程）”设置，则权限调整为将任何写入权限更改为只读。

### 授予额外权限

如果你需要的令牌需要 `GITHUB_TOKEN` 中未提供的权限，可以创建{% data variables.product.pat_generic %}并将其设置为存储库中的机密：

1. 使用或创建具有该仓库适当权限的令牌。 有关详细信息，请参阅“[创建{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)”。
1. 添加令牌作为工作流程存储库中的机密，然后使用 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 语法进行引用。 有关详细信息，请参阅“[创建和使用已加密的机密](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

### 延伸阅读

- “[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limiting)”
