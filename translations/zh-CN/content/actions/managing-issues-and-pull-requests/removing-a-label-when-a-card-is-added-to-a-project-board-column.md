---
title: 将卡片添加到项目板列时删除标签
intro: '您可以使用 {% data variables.product.prodname_actions %} 在议题或拉取请求添加到项目板上的特定列时自动删除标签。'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: 添加卡片时删除标签
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler)以及条件从议题中删除添加到项目板上特定列中的标签和拉取请求。 例如，您可以在项目卡移到 `Done` 列时删除 `needs review` 标签。

在教程中，您将先创建一个使用 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. 选择属于仓库的项目。 此工作流程不能用于属于用户或组织的项目。 您可以使用现有项目，也可以创建新项目。 有关创建项目的更多信息，请参阅“[创建项目板](/github/managing-your-work-on-github/creating-a-project-board)”。
3. {% data reusables.actions.make-workflow-file %}
4. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
        permissions:
          issues: write
          pull-requests: write{% endif %}
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. 自定义工工作流程文件中的参数：
   - 在 `github.event.project_card.column_id = "12345678"`中，将 `12345678` 替换为要取消标记移至其中的议题和拉取请求的列 ID。

    要查找列 ID，请导航到您的项目板。 在列标题旁边，请单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Copy column link（复制列链接）**。 列 ID 是复制的链接末尾的数字。 例如，`24687531` 是 `https://github.com/octocat/octo-repo/projects/1#column-24687531` 的列 ID。

     如果您想要在多个列上操作，请用 `||` 分隔条件。 例如，只要项目卡添加到列 `12345678` 或列 `87654321`，就会使用 `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'`。 这些列可能在不同的项目板上。
   - 将 `remove-labels` 的值更改为您想要从移至指定列的议题或拉请求中删除的标签列表。 使用逗号分隔多个标签。 例如 `"help wanted, good first issue"`。 有关标签的更多信息，请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
6. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每次仓库中项目上的项目卡移动时，此工作流程都会运行。 如果卡是议题或拉取请求，并移入您指定的列，则工作流程将从问题或拉取请求中删除指定的标签。 记事卡不会受到影响。

通过将项目上的议题移到目标列中来测试工作流程。

1. 在仓库中打开一个议题。 更多信息请参阅“[创建议题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 用标签标记您想要工作流程删除的议题。 更多信息请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
3. 将议题添加到您在工作流程文件中指定的项目列。 更多信息请参阅“[添加议题和拉取请求到项目板](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)”。
4. 要查看通过将议题添加到项目所触发的工作流程运行，请查看工作流程运行的历史记录。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
5. 当工作流程完成时，您添加到项目列的议题应已删除指定的标签。

## 后续步骤

- 要详细了解可以使用 `andymckay/labeler` 操作执行的其他事务，如添加标签或者在议题分配或具有特定标签时跳过此操作，请访问 [`andymckay/labeler` 操作文档](https://github.com/marketplace/actions/simple-issue-labeler)。
- [搜索 GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) 以查看使用此操作的工作流程示例。
