---
title: 添加工作流程状态徽章
intro: 您可以在您的仓库中显示状态徽章，以指示您的工作流程状态。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

您使用工作流程文件的名称来引用工作流程。

```
https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```
### 使用工作流程文件名称

此 Markdown 示例为文件路径为 `.github/workflows/main.yml` 的工作流程添加状态徽章。 仓库的 `OWNER` 为 `github` 组织，`REPOSITORY` 名称为 `docs`。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

### 使用 `branch` 参数

此 Markdown 示例为名为 `feature-1` 的分支添加状态徽章。

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

### 使用 `event` 参数

此 Markdown 示例添加显示通过 `pull_request` 事件触发运行的工作流程状态的徽章。

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=pull_request)
```
