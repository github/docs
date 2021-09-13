---
title: 工作流程中的身份验证
intro: '{% data variables.product.prodname_dotcom %} 提供一个令牌，可用于代表 {% data variables.product.prodname_actions %} 进行身份验证。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于 `GITHUB_TOKEN` 密码

{% data variables.product.prodname_dotcom %} 会自动创建 `GITHUB_TOKEN` 密码以在工作流程中使用。 您可以使用 `GITHUB_TOKEN` 在工作流程运行中进行身份验证。

当您启用 {% data variables.product.prodname_actions %} 时，{% data variables.product.prodname_dotcom %} 在您的仓库中安装 {% data variables.product.prodname_github_app %}。 `GITHUB_TOKEN` 密码是一种 {% data variables.product.prodname_github_app %} 安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 {% data variables.product.prodname_github_app %} 进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 更多信息请参阅“[`GITHUB_TOKEN`](#permissions-for-the-github_token) 的权限”。

在每个作业开始之前， {% data variables.product.prodname_dotcom %} 将为作业提取安装访问令牌。 令牌在作业完成后过期。

令牌在 `github.token` 上下文中也可用。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

### 在工作流程中使用 `GITHUB_TOKEN`

您可以使用标准语法引用密钥以使用 `GITHUB_TOKEN`：{%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}。 使用 `GITHUB_TOKEN` 的示例包括将令牌作为操作的输入，或使用它来建立验证的 {% data variables.product.prodname_dotcom %} API 请求。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**重要：**即使工作流程没有明确将 `GITHUB_TOKEN` 传递到操作，操作也可以通过 `github.token` 上下文访问 `GITHUB_TOKEN` 。 作为一种良好的安全做法，您应该始终通过限制授予 `GITHUB_TOKEN` 的权限，确保操作只有所需的最低访问权限。 更多信息请参阅“[`GITHUB_TOKEN`](#permissions-for-the-github_token) 的权限”。

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### 示例 1：将 `GITHUB_TOKEN` 作为输入传递

此示例工作流程使用[贴标器操作](https://github.com/actions/labeler)，需要 `GITHUB_TOKEN` 作为 `repo-token` 输入参数的值：

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

#### 例2：调用 REST API

您可以使用 `GITHUB_TOKEN` 进行经过验证的 API 调用。 此示例工作流程使用 {% data variables.product.prodname_dotcom %} REST API 创建议题：

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: {% raw %}
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n 提交哈希是： _${{ github.sha }}_"
            }' \
          --fail{% endraw %}
```

### `GITHUB_TOKEN` 的权限

有关 {% data variables.product.prodname_github_apps %} 可通过各种权限访问的 API 端点的信息，请参阅“[{% data variables.product.prodname_github_app %} 权限](/rest/reference/permissions-required-for-github-apps)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
下表显示默认情况下授予 `GITHUB_TOKEN` 的权限。 拥有企业、组织或仓库管理员权限的人员可以将默认权限设置为允许或限制。 有关如何为您的企业、组织或仓库设置 `GITHUB_TOKEN` 的默认权限的信息，请参阅“[在企业帐户中执行 {% data variables.product.prodname_actions %} 策略](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)”、“[禁用或限制组织的 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)”或“[禁用或限制仓库的 {% data variables.product.prodname_actions %}](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)”。

| 作用域  | 默认访问<br>（允许） | 默认访问<br>（限制） | 复刻的仓库的最大访问权限<br> |
| ---- | ------------------ | ------------------ | ---------------------- |
| 操作   | 读/写                | 无                  | 读取                     |
| 检查   | 读/写                | 无                  | 读取                     |
| 内容   | 读/写                | 读取                 | 读取                     |
| 部署   | 读/写                | 无                  | 读取                     |
| 议题   | 读/写                | 无                  | 读取                     |
| 元数据  | 读取                 | 读取                 | 读取                     |
| 包    | 读/写                | 无                  | 读取                     |
| 拉取请求 | 读/写                | 无                  | 读取                     |
| 仓库项目 | 读/写                | 无                  | 读取                     |
| 安全事件 | 读/写                | 无                  | 读取                     |
| 状态   | 读/写                | 无                  | 读取                     |
{% else %}
| 作用域  | 访问类型 | 通过复刻的仓库访问 |
| ---- | ---- | --------- |
| 操作   | 读/写  | 读取        |
| 检查   | 读/写  | 读取        |
| 内容   | 读/写  | 读取        |
| 部署   | 读/写  | 读取        |
| 议题   | 读/写  | 读取        |
| 元数据  | 读取   | 读取        |
| 包    | 读/写  | 读取        |
| 拉取请求 | 读/写  | 读取        |
| 仓库项目 | 读/写  | 读取        |
| 状态   | 读/写  | 读取        |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
#### 修改 `GITHUB_TOKEN` 的权限

您可以在个别工作流程文件中修改 `GITHUB_TOKENN` 的权限。 如果 `GITHUB_TOKEN` 的默认权限是限制的，您可能需要提高权限以允许一些操作和命令成功运行。 如果默认权限是允许的，您可以编辑工作流程文件以从 `GITHUB_TOKEN` 中删除某些权限。 作为一种良好的安全做法，您应该授予 `GITHUB_TOKEN` 所需的最小访问权限。

您可以在工作流程运行日志的“设置作业”部分看到 `GITHUB_TOKEN` 对于特定作业的权限。 更多信息请参阅“[使用工作流程运行日志](/actions/managing-workflow-runs/using-workflow-run-logs)”。

您可以在工作流文件中使用 `permissions` 键来修改 `GITHUB_TOKEN` 对于整个工作流或单个作业的权限。 这允许您为工作流程或作业配置所需的最小权限。 使用 `permissions` 键时，所有未指定的权限都设置为没有访问权限，`metadata`范围除外，该范围总是获得读取访问。

{% data reusables.github-actions.forked-write-permission %}

本文前面的两个工作流程示例显示了在工作流程级别和作业级别使用的 `permissions` 键。 在[例 1](#example-1-passing-the-github_token-as-an-input) 中，为整个工作流程指定了两个权限。 在[示例 2](#example-2-calling-the-rest-api) 中，为单个作业的单一范围授予写入访问权限。

有关 `permissions` 键的完整详情，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#permissions)”。

##### 如何计算工作流程作业的权限

`GITHUB_TOKEN` 的权限最初设置为企业、组织或仓库的默认设置。 如果默认设置为这些级别中任何级别的限制权限，这将适用于相关的仓库。 例如，如果您在组织级别选择受限制的默认值，则该组织中的所有仓库将使用限制的权限作为默认值。 然后根据工作流程文件中的任何配置（首先在工作流程级别，然后在作业级别）对权限进行调整。 最后，如果工作流程是由复刻的仓库中的拉取请求触发，并且未选择**从拉取请求发送写入令牌到工作流程**设置，则权限调整为将任何写入权限更改为只读。

#### 授予额外权限
{% endif %}

如果您需要的令牌需要 `GITHUB_TOKEN` 中未提供的权限，您可以创建个人访问令牌并将其设置为仓库中的密码：

1. 使用或创建具有该仓库适当权限的令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
1. 添加令牌作为工作流程仓库中的密码，然后使用 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 语法进行引用。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
