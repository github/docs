---
title: 触发工作流程
shortTitle: 触发工作流程
intro: '如何自动触发 {% data variables.product.prodname_actions %} 工作流程'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于工作流程触发器

{% data reusables.actions.about-triggers %}

工作流程触发器使用 `on` 键定义。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#on)”。

以下步骤将触发工作流程运行：

1. 存储库上发生事件。 该事件具有关联的提交 SHA 和 Git 引用。
1. {% data variables.product.product_name %} 在存储库的 `.github/workflows` 目录中搜索事件的关联提交 SHA 或 Git 引用中存在的工作流程文件。
1. 对于具有与与触发事件匹配的 `on:` 值的任何工作流程，触发工作流程运行。 某些事件还要求工作流程文件位于存储库的默认分支上才能运行。

  每个工作流程运行都将使用事件的关联提交 SHA 或 Git ref 中存在的工作流程版本。 当工作流程运行时，{% data variables.product.product_name %} 会在运行器环境中设置 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF`（Git 引用）环境变量。 更多信息请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

### 从工作流程触发工作流程

{% data reusables.actions.actions-do-not-trigger-workflows %} 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

如果确实要从工作流程运行中触发工作流程，则可以使用个人访问令牌而不是 `GITHUB_TOKEN` 来触发需要令牌的事件。 您需要创建个人访问令牌并将其存储为密码。 为了最大限度地降低 {% data variables.product.prodname_actions %} 使用成本，请确保不要创建递归或意外的工作流程。 For more information about creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)." 有关存储个人访问令牌的更多信息，请参阅“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

例如，以下工作流程使用个人访问令牌（存储为称为 `MY_TOKEN` 的机密）通过 {% data variables.product.prodname_cli %} 向议题添加标签。 添加标签时运行的任何工作流程都将在执行此步骤后运行。

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

相反，以下工作流程使用 `GITHUB_TOKEN` 向议题添加标签。 它不会触发在添加标签时运行的任何工作流程。

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## 使用事件触发工作流程

使用 `on` 键指定触发工作流程的事件。 有关您可以使用的事件的更多信息，请参阅“[触发工作流程的事件](/actions/using-workflows/events-that-trigger-workflows)”。

### 使用单个事件

{% data reusables.actions.on-single-example %}

### 使用多个事件

{% data reusables.actions.on-multiple-example %}

### 将活动类型和筛选器用于多个事件

您可以使用活动类型和筛选器进一步控制工作流程的运行时间。 更多信息请参阅[使用事件活动类型](#using-event-activity-types)和[使用筛选器](#using-filters)。 {% data reusables.actions.actions-multiple-types %}

## 使用事件活动类型

{% data reusables.actions.actions-activity-types %}

## 使用筛选器

{% data reusables.actions.actions-filters %}

### 使用筛选器定位拉取请求事件的特定分支

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### 使用筛选器定位推送事件的特定分支或标记

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### 使用筛选器定位拉取请求或推送事件的特定路径

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### 使用筛选器定位工作流程运行事件的特定分支

{% data reusables.actions.workflows.section-specifying-branches %}

## 定义手动触发的工作流程的输入

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## 定义可重复使用的工作流程的输入、输出和机密

{% data reusables.actions.reusable-workflows-ghes-beta %}

您可以定义可重用工作流程应从调用工作流程接收的输入和机密。 您还可以指定可重用工作流程将提供给调用工作流程的输出。 更多信息请参阅“[重用工作流程](/actions/using-workflows/reusing-workflows)”。

{% endif %}

## 使用事件信息

有关触发工作流程运行的事件的信息可在 `github.event` 上下文中找到。 `github.event` 上下文中的属性取决于触发工作流程的事件类型。 例如，在标记议题时触发的工作流程将包含有关议题和标签的信息。

### 查看事件的所有属性

有关常见属性和示例负载，请参阅 web 挂钩事件文档。 更多信息请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)”。

您还可以将整个 `github.event` 上下文中打印出来，以查看哪些属性可用于触发工作流程的事件：

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### 访问和使用事件属性

您可以在工作流程中使用 `github.event` 上下文。 例如，当打开更改 `package*.json`、`.github/CODEOWNERS` 或 `.github/workflows/**` 的拉取请求时，将运行以下工作流程。 如果拉取请求作者 (`github.event.pull_request.user.login`) 不是 `octobot` 或 `dependabot[bot]`，则工作流程使用 {% data variables.product.prodname_cli %} 来标记和注释拉取请求 (`github.event.pull_request.number`)。

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

有关上下文的更多信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。 有关事件有效负载的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)”。

## 进一步控制工作流程的运行方式

如果需要比事件、事件活动类型或事件筛选器更精细的控制，则可以使用条件{% ifversion fpt or ghae or ghes > 3.1 or ghec %} 和环境{% endif %} 来控制工作流程中的单个作业或步骤是否运行。

### 使用条件

您可以使用条件进一步控制工作流程中的作业或步骤是否运行。

#### 在事件负载中使用值的示例

例如，如果希望在将特定标签添加到议题时运行工作流程，则可以在 `issues labeled` 事件活动类型上触发，并使用条件来检查触发工作流程的标签。 将任何标签添加到工作流程的存储库中的议题时，将运行以下工作流程，但仅当标签命名为 `bug` 时，才会执行 `run_if_label_matches` 作业。

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### 使用事件类型的示例

例如，如果要根据触发工作流程的事件运行不同的作业或步骤，则可以使用条件来检查事件上下文中是否存在特定的事件类型。 每当议题或拉取请求关闭时，将运行以下工作流程。 如果工作流程因议题已关闭而运行，则 `github.event` 上下文将包含 `issue` 的值，但不包含 `pull_request` 的值。 因此，`if_issue` 步骤将运行，但 `if_pr` 步骤不会运行。 相反，如果工作流程因拉取请求关闭而运行，则 `if_pr` 步骤将运行，但 `if_issue` 步骤不会运行。

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

有关事件上下文中可用信息的详细信息，请参阅“[使用事件信息](#using-event-information)”。 有关如何使用条件语句的详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}

### 使用环境手动触发工作流程作业

如果要手动触发工作流程中的特定作业，可以使用需要特定团队或用户批准的环境。 首先，使用所需的审阅者配置环境。 更多信息请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”。 然后，使用 `environment:` 键在工作流程的作业中引用环境名称。 在至少有一个审阅者批准该作业之前，引用环境的任何作业都不会运行。

例如，只要有推送到 main 分支，以下工作流程就会运行。 `build` 作业将始终运行。 只有在 `publish` 作业成功完成（由于 `needs: [build]`）并且称为 `production` 的环境的所有规则（包括必需的审阅者）通过（由于 `environment: production`）之后，`publish` 作业才会运行。

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}
{% endif %}

## 可用事件

有关可用事件的完整列表，请参阅“[触发工作流程的事件](/actions/using-workflows/events-that-trigger-workflows)”。
