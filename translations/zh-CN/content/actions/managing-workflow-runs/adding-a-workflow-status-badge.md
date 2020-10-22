---
title: Adding a workflow status badge
intro: You can display a status badge in your repository to indicate the status of your workflows.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

如果您的工作流程使用 `name` 关键词，则必须按名称引用工作流程。 如果工作流程名称包含空格，您需要将空格替换为 URL 编码字符串 `%20`。 有关 `name` 关键词的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#name)”。

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

或者，如果工作流程没有 `name`，则必须使用相对于仓库根目录的文件路径引用工作流程文件。

{% note %}

**注意：**如果工作流程具有 `名字`，则无法使用文件路径引用工作流程文件。

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

### Using a workflow name

此 Markdown 示例为名为 "Greet Everyone" 的工作流程添加状态徽章。 仓库的 `OWNER` 为 `actions` 组织，`REPOSITORY` 名称为 `hello-world`。

```
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### Using a workflow file path

此 Markdown 示例为文件路径为 `.github/workflows/main.yml` 的工作流程添加状态徽章。 仓库的 `OWNER` 为 `actions` 组织，`REPOSITORY` 名称为 `hello-world`。

```
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### Using the `branch` parameter

此 Markdown 示例为名为 `feature-1` 的分支添加状态徽章。

```
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### Using the `event` parameter

此 Markdown 示例添加显示通过 `pull_request` 事件触发运行的工作流程状态的徽章。

```
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
