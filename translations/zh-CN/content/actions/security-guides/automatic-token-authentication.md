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
shortTitle: 自动令牌身份验证
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 `GITHUB_TOKEN` 密码

在每个工作流程运行开始时，{% data variables.product.prodname_dotcom %} 会自动创建唯一的 `GITHUB_TOKEN` 密码以在工作流程中使用。 您可以使用 `GITHUB_TOKEN` 在工作流程运行中进行身份验证。

当您启用 {% data variables.product.prodname_actions %} 时，{% data variables.product.prodname_dotcom %} 在您的仓库中安装 {% data variables.product.prodname_github_app %}。 `GITHUB_TOKEN` 密码是一种 {% data variables.product.prodname_github_app %} 安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 {% data variables.product.prodname_github_app %} 进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 更多信息请参阅“[`GITHUB_TOKEN`](#permissions-for-the-github_token) 的权限”。

在每个作业开始之前， {% data variables.product.prodname_dotcom %} 将为作业提取安装访问令牌。 令牌在作业完成后过期。

令牌在 `github.token` 上下文中也可用。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts#github-context)”。

## 在工作流程中使用 `GITHUB_TOKEN`

您可以使用标准语法引用密钥以使用 `GITHUB_TOKEN`：{%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}。 使用 `GITHUB_TOKEN` 的示例包括将令牌作为操作的输入，或使用它来建立验证的 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 请求。

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
{% note %}

**重要：**即使工作流程没有明确将 `GITHUB_TOKEN` 传递到操作，操作也可以通过 `github.token` 上下文访问 `GITHUB_TOKEN` 。 作为一种良好的安全做法，您应该始终通过限制授予 `GITHUB_TOKEN` 的权限，确保操作只有所需的最低访问权限。 更多信息请参阅“[`GITHUB_TOKEN`](#permissions-for-the-github_token) 的权限”。

{% endnote %}
{% endif %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### 示例 1：将 `GITHUB_TOKEN` 作为输入传递

{% data reusables.actions.github_token-input-example %}

### 例2：调用 REST API

您可以使用 `GITHUB_TOKEN` 进行经过验证的 API 调用。 此示例工作流程使用 {% data variables.product.prodname_dotcom %} REST API 创建议题：

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n 提交的散列为：_${% raw %}{{ github.sha }}{% endraw %}_.”
            }' \
          --fail
```

## `GITHUB_TOKEN` 的权限

有关 {% data variables.product.prodname_github_apps %} 可通过各种权限访问的 API 端点的信息，请参阅“[{% data variables.product.prodname_github_app %} 权限](/rest/reference/permissions-required-for-github-apps)”。

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
下表显示默认情况下授予 `GITHUB_TOKEN` 的权限。 对{% ifversion not ghes %}企业、组织或仓库、{% else %}组织或仓库{% endif %}具有管理权限的人可以设置默认权限为允许或限制。 有关如何为企业、组织或存储库设置 `GITHUB_TOKEN` 默认权限的信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)”、“[对组织禁用或限制 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)”或“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)”。

| 作用域      | 默认访问<br>（允许） | 默认访问<br>（限制） | 复刻的仓库的最大访问权限<br>            |
| -------- | ------------------ | ------------------ | --------------------------------- |
| 操作       | 读/写                | 无                  | 读取                                |
| 检查       | 读/写                | 无                  | 读取                                |
| 内容       | 读/写                | 读取                 | 读取                                |
| 部署       | 读/写                | 无                  | read |{% ifversion fpt or ghec %}
| id-token | 无                  | 无                  | read 
{% endif %}
| 议题       | 读/写                | 无                  | 读取                                |
| 元数据      | 读取                 | 读取                 | 读取                                |
| 包        | 读/写                | 无                  | 读取                                |
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6187 %}
| pages         | read/write  | none | read |
{%- endif %}
| pull-requests | read/write  | none | read | | repository-projects | read/write | none | read | | security-events     | read/write | none | read | | statuses      | read/write  | none | read |
{% else %}
| 作用域                 | 访问类型 | 通过复刻的仓库访问 |
| ------------------- | ---- | --------- |
| 操作                  | 读/写  | 读取        |
| 检查                  | 读/写  | 读取        |
| 内容                  | 读/写  | 读取        |
| 部署                  | 读/写  | 读取        |
| 议题                  | 读/写  | 读取        |
| 元数据                 | 读取   | 读取        |
| 包                   | 读/写  | 读取        |
| pull-requests       | 读/写  | 读取        |
| repository-projects | 读/写  | 读取        |
| 状态                  | 读/写  | 读取        |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### 修改 `GITHUB_TOKEN` 的权限

您可以在个别工作流程文件中修改 `GITHUB_TOKENN` 的权限。 如果 `GITHUB_TOKEN` 的默认权限是限制的，您可能需要提高权限以允许一些操作和命令成功运行。 如果默认权限是允许的，您可以编辑工作流程文件以从 `GITHUB_TOKEN` 中删除某些权限。 作为一种良好的安全做法，您应该授予 `GITHUB_TOKEN` 所需的最小访问权限。

您可以在工作流程运行日志的“设置作业”部分看到 `GITHUB_TOKEN` 对于特定作业的权限。 更多信息请参阅“[使用工作流程运行日志](/actions/managing-workflow-runs/using-workflow-run-logs)”。

您可以在工作流文件中使用 `permissions` 键来修改 `GITHUB_TOKEN` 对于整个工作流或单个作业的权限。 这允许您为工作流程或作业配置所需的最小权限。 使用 `permissions` 键时，所有未指定的权限都设置为没有访问权限，`metadata`范围除外，该范围总是获得读取访问。

{% data reusables.actions.forked-write-permission %}

本文前面的两个工作流程示例显示了在工作流程级别和作业级别使用的 `permissions` 键。 在[例 1](#example-1-passing-the-github_token-as-an-input) 中，为整个工作流程指定了两个权限。 在[示例 2](#example-2-calling-the-rest-api) 中，为单个作业的单一范围授予写入访问权限。

有关 `permissions` 键的完整详情，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#permissions)”。

#### 如何计算工作流程作业的权限

`GITHUB_TOKEN` 的权限最初设置为企业、组织或仓库的默认设置。 如果默认设置为这些级别中任何级别的限制权限，这将适用于相关的仓库。 例如，如果您在组织级别选择受限制的默认值，则该组织中的所有仓库将使用限制的权限作为默认值。 然后根据工作流程文件中的任何配置（首先在工作流程级别，然后在作业级别）对权限进行调整。 最后，如果工作流程是由复刻的仓库中的拉取请求触发，并且未选择**从拉取请求发送写入令牌到工作流程**设置，则权限调整为将任何写入权限更改为只读。

### 授予额外权限
{% endif %}

如果您需要的令牌需要 `GITHUB_TOKEN` 中未提供的权限，您可以创建个人访问令牌并将其设置为仓库中的密码：

1. 使用或创建具有该仓库适当权限的令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
1. 添加令牌作为工作流程仓库中的密码，然后使用 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 语法进行引用。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

### 延伸阅读

- "[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limiting)"
