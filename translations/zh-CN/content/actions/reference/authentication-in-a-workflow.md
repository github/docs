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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 `GITHUB_TOKEN` 密码

{% data variables.product.prodname_dotcom %} 会自动创建 `GITHUB_TOKEN` 密码以在工作流程中使用。 您可以使用 `GITHUB_TOKEN` 在工作流程运行中进行身份验证。

当您启用 {% data variables.product.prodname_actions %} 时，{% data variables.product.prodname_dotcom %} 在您的仓库中安装 {% data variables.product.prodname_github_app %}。 `GITHUB_TOKEN` 密码是一种 {% data variables.product.prodname_github_app %} 安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 {% data variables.product.prodname_github_app %} 进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 更多信息请参阅“[`GITHUB_TOKEN`](#permissions-for-the-github_token) 的权限”。

在每个作业开始之前， {% data variables.product.prodname_dotcom %} 将为作业提取安装访问令牌。 令牌在作业完成后过期。

令牌在 `github.token` 上下文中也可用。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

### 在工作流程中使用 `GITHUB_TOKEN`

要使用 `GITHUB_TOKEN` 密码，必须在工作流程文件中引用它。 使用令牌可能包括将令牌作为输入传递给需要该令牌的操作，或进行经过身份验证的 {% data variables.product.prodname_dotcom %} API 调用。

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### 将 `GITHUB_TOKEN` 作为输入传递的示例

此示例工作流程使用[贴标器操作](https://github.com/actions/labeler)，需要 `GITHUB_TOKEN` 作为 `repo-token` 输入参数的值：

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### 调用 REST API 的示例

您可以使用 `GITHUB_TOKEN` 进行经过验证的 API 调用。 此示例工作流程使用 {% data variables.product.prodname_dotcom %} REST API 创建议题：

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n 提交哈希是： _${{ github.sha }}_"
            }'
  ```
  {% endraw %}

### `GITHUB_TOKEN` 的权限

有关 {% data variables.product.prodname_github_apps %} 可通过各种权限访问的 API 端点的信息，请参阅“[{% data variables.product.prodname_github_app %} 权限](/rest/reference/permissions-required-for-github-apps)”。

| 权限       | 访问类型 | 通过复刻的仓库访问 |
| -------- | ---- | --------- |
| 操作       | 读/写  | 读取        |
| 检查       | 读/写  | 读取        |
| 内容       | 读/写  | 读取        |
| 部署       | 读/写  | 读取        |
| issues   | 读/写  | 读取        |
| 元数据      | 读取   | 读取        |
| 包        | 读/写  | 读取        |
| 拉取请求     | 读/写  | 读取        |
| 仓库项目     | 读/写  | 读取        |
| statuses | 读/写  | 读取        |

如果您需要的令牌需要 `GITHUB_TOKEN` 中未提供的权限，您可以创建个人访问令牌并将其设置为仓库中的密码：

1. 使用或创建具有该仓库适当权限的令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
1. 添加令牌作为工作流程仓库中的密码，然后使用 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 语法进行引用。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
