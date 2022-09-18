---
title: 向议题添加标签
intro: '您可以使用 {% data variables.product.prodname_actions %} 自动标记议题。'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 8e80990a1a533ed303f47cbad8dafb95c890893d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884307'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用工作流中的 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler) 来标记新打开或重新打开的问题。 例如，每次打开或重新打开问题时，都可以添加 `triage` 标签。 然后，可通过筛选具有 `triage` 标签的问题来查看需要会审的问题。

在本教程中，你将首先创建一个使用 [`andymckay/labeler` 操作](https://github.com/marketplace/actions/simple-issue-labeler)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. 自定义工工作流程文件中的参数：
   - 将 `add-labels` 的值更改为你想要添加到此问题的标签列表。 使用逗号分隔多个标签。 例如 `"help wanted, good first issue"`。 有关标签的详细信息，请参阅[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)。
5. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每次打开或重新打开仓库中的议题时，此工作流程将添加您指定给此议题的标签。

通过在仓库中创建议题来测试工作流程。

1. 在仓库中创建议题。 有关详细信息，请参阅[创建问题](/github/managing-your-work-on-github/creating-an-issue)。
2. 要查看通过创建议题所触发的工作流程运行，请查看工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
3. 当工作流程完成时，您创建的议题应已添加指定的标签。

## 后续步骤

- 若要详细了解可以使用 `andymckay/labeler` 操作执行的其他操作，例如删除标签或者在问题分配或具有特定标签时跳过此操作，请参阅 [`andymckay/labeler` 操作文档](https://github.com/marketplace/actions/simple-issue-labeler)。
- 若要详细了解可以触发工作流的不同事件，请参阅[可触发工作流的事件](/actions/reference/events-that-trigger-workflows#issues)。 `andymckay/labeler` 操作仅适用于 `issues`、`pull_request` 或 `project_card` 事件。
- [搜索 GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) 以获取使用此操作的工作流示例。
