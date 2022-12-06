---
title: 将卡片添加到项目板列时删除标签
intro: '可以使用 {% data variables.product.prodname_actions %} 在议题或拉取请求添加到{% data variables.projects.projects_v1_board %}上的特定列时自动删除标签。'
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
shortTitle: Remove label when adding card
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185627'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用 [`actions/github-script` 操作](https://github.com/marketplace/actions/github-script)和条件，从已添加到{% data variables.projects.projects_v1_board %}上指定列的议题和拉取请求中删除标签。 例如，可以在项目卡移至 `Done` 列后删除 `needs review` 标签。

在本教程中，你将首先创建一个使用 [`actions/github-script` 操作](https://github.com/marketplace/actions/github-script)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. 选择属于存储库的{% data variables.projects.projects_v1_board %}。 此工作流程不能用于属于用户或组织的项目。 可以使用现有{% data variables.projects.projects_v1_board %}，也可以创建新的{% data variables.projects.projects_v1_board %}。 有关创建项目的详细信息，请参阅“[创建{% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board)”。
3. {% data reusables.actions.make-workflow-file %}
4. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. 自定义工工作流程文件中的参数：
   - 在 `github.event.project_card.column_id == '12345678'` 中，将 `12345678` 替换为要取消标记移至其中的议题和拉取请求的列 ID。

     若要查找列 ID，请导航到{% data variables.projects.projects_v1_board %}。 在列标题旁边，请单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“复制列链接”。 列 ID 是复制的链接末尾的数字。 例如，`24687531` 是 `https://github.com/octocat/octo-repo/projects/1#column-24687531` 的列 ID。

     如果想要在多个列上操作，请使用 `||` 分隔条件。 例如，只要项目卡添加到了列 `12345678` 或列 `87654321`，就会使用 `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'`。 这些列可能在不同的项目板上。
   - 将 `github.rest.issues.removeLabel()` 函数中的 `name` 更改为要从移至指定列的议题或拉取请求中删除的标签列表。 有关标签的详细信息，请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
6. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每当存储库中{% data variables.projects.projects_v1_board %}上的项目卡移动时，该工作流都会运行。 如果移动的项目卡是议题或拉取请求，并移入指定的列，则该工作流将从议题或拉取请求中删除指定的标签。 记事卡不会受到影响。

通过将{% data variables.projects.projects_v1_board %}上的议题移到目标列中来测试自己的工作流。

1. 在仓库中打开一个议题。 有关详细信息，请参阅“[创建问题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 标记带有需要工作流删除的标签的议题。 有关详细信息，请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
3. 将议题添加到在工作流文件中指定的 {% data variables.projects.projects_v1_board %} 列。 有关详细信息，请参阅“[向 {% data variables.product.prodname_project_v1 %} 添加问题和拉取请求](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)”。
4. 要查看通过将议题添加到项目所触发的工作流程运行，请查看工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
5. 当工作流完成时，添加到项目列的议题中指定的标签应已被删除。

## 后续步骤

- 如需详细了解 `actions/github-script` 操作的其他用途，请参阅 [`actions/github-script` 操作文档](https://github.com/marketplace/actions/github-script)。
- [搜索 GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) 以获取使用此操作的工作流示例。
