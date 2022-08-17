---
title: 添加工作流程状态徽章
intro: 您可以在您的仓库中显示状态徽章，以指示您的工作流程状态。
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 添加状态徽章
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Note**: Workflow badges in a private repository are not accessible externally, so you won't be able to embed them or link to them from an external site.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


To add a workflow status badge to your `README.md` file, first find the URL for the status badge you would like to display. Then you can use Markdown to display the badge as an image in your `README.md` file. For more information about image markup in Markdown, see "[Basic writing and formatting syntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

## 使用工作流程文件名称

You can build the URL for a workflow status badge using the name of the workflow file:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

To display the workflow status badge in your `README.md` file, use the Markdown markup for embedding images. For more information about image markup in Markdown, see "[Basic writing and formatting syntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

For example, add the following Markdown to your `README.md` file to add a status badge for a workflow with the file path `.github/workflows/main.yml`. 仓库的 `OWNER` 为 `github` 组织，`REPOSITORY` 名称为 `docs`。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## 使用 `branch` 参数

To display the status of a workflow run for a specific branch, add `?branch=<BRANCH_NAME>` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a status badge for a branch with the name `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## 使用 `event` 参数

To display the status of workflow runs triggered by the `push` event, add `?event=push` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a badge with the status of workflow runs triggered by the `push` event, which will show the status of the build for the current state of that branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
