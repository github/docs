---
title: 环境变量
intro: '{% data variables.product.prodname_dotcom %} 为每个 {% data variables.product.prodname_actions %} 工作流程运行设置默认环境变量。 您也可以在工作流程文件中设置自定义环境变量。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于环境变量

{% data variables.product.prodname_dotcom %} 设置适用于工作流程运行中每个步骤的默认环境变量。 环境变量区分大小写。 在操作或步骤中运行的命令可以创建、读取和修改环境变量。

要设置自定义环境变量，您需要在工作流程文件中指定变量。 您可以使用 [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)、[`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv) 和 [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) 关键字定义步骤、作业或整个工作流程的环境变量。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)”。

{% raw %}
```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Mon' }}
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```
{% endraw %}

要在工作流程文件中使用环境变量的值，您应该使用 [`env` 上下文](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)。 如果要在运行器中使用环境变量的值，您可以使用运行器操作系统的正常方法来读取环境变量。

如果使用工作流程文件的 `run` 键从运行器操作系统中读取环境变量（如上例所示），则在作业发送到运行器后，该变量将在运行器操作系统中被替换。 对于工作流程文件的其他部分，必须使用 `env` 上下文来读取环境变量；这是因为工作流程键（例如 `if`）需要在发送到运行器之前，在工作流程处理过程中替换变量。

您也可以使用 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`GITHUB_ENV` 环境文件{% else %} `set-env` 工作流程命令{% endif %} 设置工作流程中的以下步骤可以使用的环境变量。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}环境文件{% else %} `set-env` 命令{% endif %}可直接由操作使用，或使用 `run` 关键字作为工作流程文件中的 shell 命令。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)”。

### 默认环境变量

强烈建议操作使用环境变量访问文件系统，而非使用硬编码的文件路径。 {% data variables.product.prodname_dotcom %} 设置供操作用于所有运行器环境中的环境变量。

| 环境变量                 | 描述                                                                                                                                                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | 始终设置为 `true`。                                                                                                                                                                                                                     |
| `GITHUB_WORKFLOW`    | 工作流程的名称。                                                                                                                                                                                                                          |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_JOB`         | 当前作业的 [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                                 |
| `GITHUB_ACTION`      | 操作唯一的标识符 (`id`)。                                                                                                                                                                                                                  |
| `GITHUB_ACTIONS`     | 当 {% data variables.product.prodname_actions %} 运行工作流程时，始终设置为 `true`。 您可以使用此变量来区分测试是在本地运行还是通过 {% data variables.product.prodname_actions %} 运行。                                                                                   |
| `GITHUB_ACTOR`       | 发起工作流程的个人或应用程序的名称。 例如 `octocat`。                                                                                                                                                                                                  |
| `GITHUB_REPOSITORY`  | 所有者和仓库名称。 例如 `octocat/Hello-World`。                                                                                                                                                                                               |
| `GITHUB_EVENT_NAME`  | 触发工作流程的 web 挂钩事件的名称。                                                                                                                                                                                                              |
| `GITHUB_EVENT_PATH`  | 具有完整 web 挂钩事件有效负载的文件路径。 例如 `/github/workflow/event.json`。                                                                                                                                                                         |
| `GITHUB_WORKSPACE`   | {% data variables.product.prodname_dotcom %} 工作空间目录路径。 如果您的工作流程使用 [actions/checkout](https://github.com/actions/checkout) 操作，则工作空间目录是仓库的副本。 如果不使用 `actions/checkout` 操作，该目录将为空。 例如 `/home/runner/work/my-repo-name/my-repo-name`。 |
| `GITHUB_SHA`         | 触发工作流程的提交 SHA。 例如 `ffac537e6cbbf934b08745a378932722df287a53`。                                                                                                                                                                     |
| `GITHUB_REF`         | 触发工作流程的分支或标记参考。 例如 `refs/heads/feature-branch-1`。 如果分支或标记都不适用于事件类型，则变量不会存在。                                                                                                                                                       |
| `GITHUB_HEAD_REF`    | 仅为拉取请求事件设置。 头部分支的名称。                                                                                                                                                                                                              |
| `GITHUB_BASE_REF`    | 仅为拉取请求事件设置。 基础分支的名称。                                                                                                                                                                                                              |
| `GITHUB_SERVER_URL`  | 返回 {% data variables.product.product_name %} 服务器的 URL。 当 {% data variables.product.prodname_actions %} 运行工作流程时，始终设置为 `true`。                                                                                                    |
| `GITHUB_API_URL`     | 返回 API URL。 返回 {% data variables.product.product_name %} 服务器的 URL。 例如：`https://github.com`。                                                                                                                                       |
| `GITHUB_GRAPHQL_URL` | 返回 GraphQL API URL。 例如：`https://api.github.com/graphql`。                                                                                                                                                                          |

{% tip %}

**注：**如果需要在作业中使用工作流程运行的 URL，您可以组合这些环境变量：`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

#### 确定何时使用默认环境变量或上下文

{% data reusables.github-actions.using-context-or-environment-variables %}

### 环境变量命名约定

{% note %}

**注：** {% data variables.product.prodname_dotcom %} 会保留 `GITHUB_` 环境变量前缀供 {% data variables.product.prodname_dotcom %} 内部使用。 设置有 `GITHUB_` 前缀的环境变量或密码将导致错误。

{% endnote %}

您设置的指向文件系统上某个位置的任何新环境变量都应该有 `_PATH` 后缀。 `HOME` 和 `GITHUB_WORKSPACE` 默认变量例外于此约定，因为 "home" 和 "workspace" 一词已经暗示位置。
