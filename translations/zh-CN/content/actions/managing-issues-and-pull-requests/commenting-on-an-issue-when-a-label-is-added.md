---
title: 添加标签时评论议题
intro: '您可以使用 {% data variables.product.prodname_actions %} 在应用特定标签时自动评论议题。'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409035'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何在应用特定标签时使用 [`peter-evans/create-or-update-comment` 操作](https://github.com/marketplace/actions/create-or-update-comment) 对问题添加注释。 例如，当 `help-wanted` 标签添加到问题中后，可以添加注释来建议参与者处理该问题。

在本教程中，你将首先创建一个使用 [`peter-evans/create-or-update-comment` 操作](https://github.com/marketplace/actions/create-or-update-comment)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. 自定义工工作流程文件中的参数：
   - 将 `if: github.event.label.name == 'help-wanted'` 中的 `help-wanted` 替换为要处理的标签。 如果想要在多个标签上操作，请使用 `||` 分隔条件。 例如，`if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` 将在 `bug` 或 `fix me` 标签添加到问题时进行注释。
   - 将 `body` 的值更改为要添加的注释。 支持 GitHub Flavored Markdown。 有关 Markdown 的详细信息，请参阅“[基本编写和格式设置语法](/github/writing-on-github/basic-writing-and-formatting-syntax)”。
5. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每当仓库中的问题被标记时，此工作流就会运行。 如果添加的标签是工作流文件中指定的标签之一，`peter-evans/create-or-update-comment` 操作将添加你针对问题指定的注释。

通过将指定的标签应用于议题来测试工作流程。

1. 在仓库中打开一个议题。 有关详细信息，请参阅“[创建问题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 使用工作流程文件中的指定标签标记议题。 有关详细信息，请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
3. 要查看通过标记议题所触发的工作流程运行，请查看工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
4. 当工作流程完成时，您标记的议题应已添加评论。

## 后续步骤

- 如需详细了解 `peter-evans/create-or-update-comment` 操作的其他用途（例如添加反应），请访问 [`peter-evans/create-or-update-comment` 操作文档](https://github.com/marketplace/actions/create-or-update-comment)。
