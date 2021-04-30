---
title: 向议题添加标签
intro: '您可以使用 {% data variables.product.prodname_actions %} 自动标记议题。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - 工作流程
  - 项目管理
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### 简介

本教程演示如何在工作流程中使用 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler)来标记新打开或重新打开的议题。 例如，每次打开或重新打开议题时，您都可以添加 `triage` 标签。 然后，您可以通过筛选具有 `triage` 标签的议题来查看需要分类的所有议题。

在教程中，您将先创建一个使用 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

### 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    {% raw %}
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        steps:
          - name: Label issues
            uses: andymckay/labeler@1.0.2
            with:
              add-labels: "triage"
    ```
    {% endraw %}
4. 自定义工工作流程文件中的参数：
   - 将 `add-labels` 的值更改为您想要添加到此议题的标签列表。 使用逗号分隔多个标签。 例如 `"help wanted, good first issue"`。 有关标签的更多信息，请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
5. {% data reusables.actions.commit-workflow %}

### 测试工作流程

每次打开或重新打开仓库中的议题时，此工作流程将添加您指定给此议题的标签。

通过在仓库中创建议题来测试工作流程。

1. 在仓库中创建议题。 更多信息请参阅“[创建议题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 要查看通过创建议题所触发的工作流程运行，请查看工作流程运行的历史记录。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
3. 当工作流程完成时，您创建的议题应已添加指定的标签。

### 后续步骤

- 要详细了解可以使用 `andymckay/labeler` 操作执行的其他事务，如删除标签或者在议题分配或具有特定标签时跳过此操作，请访问 [`andymckay/labeler` 操作文档](https://github.com/marketplace/actions/simple-issue-labeler)。
- 要详细了解可触发您工作流程的不同事件的信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#issues)”。 `andymckay/labeler` 操作只适用于 `issues`、`pull_request` 或 `project_card` 事件。
- [搜索 GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) 以查看使用此操作的工作流程示例。
