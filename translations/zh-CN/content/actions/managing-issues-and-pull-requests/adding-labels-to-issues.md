---
title: 向议题添加标签
shortTitle: Add labels to issues
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
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185559'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用工作流中的 [`actions/github-script` 操作](https://github.com/marketplace/actions/github-script) 来标记新打开或重新打开的问题。 例如，每次打开或重新打开问题时，都可以添加 `triage` 标签。 然后，可通过筛选具有 `triage` 标签的问题来查看需要会审的问题。

`actions/github-script` 操作允许你在工作流中轻松使用 {% data variables.product.prodname_dotcom %} API。

在本教程中，你将首先创建一个使用 [`actions/github-script` 操作](https://github.com/marketplace/actions/github-script)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。
  
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
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. 自定义工作流文件中的 `script` 参数：
   - `issue_number`、`owner`和 `repo` 值是使用 `context` 对象自动设置的。 不需要更改这些值。
   - 将 `labels` 的值更改为你想要添加到此问题的标签列表。 使用逗号分隔多个标签。 例如 `["help wanted", "good first issue"]`。 有关标签的详细信息，请参阅[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)。
5. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每次打开或重新打开仓库中的议题时，此工作流程将添加您指定给此议题的标签。

通过在仓库中创建议题来测试工作流程。

1. 在仓库中创建议题。 有关详细信息，请参阅[创建问题](/github/managing-your-work-on-github/creating-an-issue)。
2. 要查看通过创建议题所触发的工作流程运行，请查看工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
3. 当工作流程完成时，您创建的议题应已添加指定的标签。

## 后续步骤

- 如需详细了解 `actions/github-script` 操作的其他用途，请参阅 [`actions/github-script` 操作文档](https://github.com/marketplace/actions/github-script)。
- 若要详细了解可以触发工作流的不同事件，请参阅[可触发工作流的事件](/actions/reference/events-that-trigger-workflows#issues)。
- [搜索 GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) 以获取使用此操作的工作流示例。
