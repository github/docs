---
title: 在项目板上移动分配的议题
intro: '您可以使用 {% data variables.product.prodname_actions %} 在议题被分配时自动将议题移到项目板上的特定列。'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 88cec7ca6f2e7774fb29407b0b3ee14dc7041067
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410457'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何在分配问题时使用 [`alex-page/github-project-automation-plus` 操作](https://github.com/marketplace/actions/github-project-automation)自动将问题移至项目板上的特定列。 例如，分配问题后，可以将其移动到项目板的 `In Progress` 列中。

在本教程中，你将首先创建一个使用 [`alex-page/github-project-automation-plus` 操作](https://github.com/marketplace/actions/github-project-automation)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. 在仓库中，选择项目板。 您可以使用现有项目，也可以创建新项目。 有关如何创建项目的详细信息，请参阅“[创建项目板](/github/managing-your-work-on-github/creating-a-project-board)”。
3. {% data reusables.actions.make-workflow-file %}
4. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. 自定义工工作流程文件中的参数：
   - 将 `project` 的值更改为项目板的名称。 如果有多个同名项目板，则 `alex-page/github-project-automation-plus` 操作将对具有指定名称的所有项目执行操作。
   - 将 `column` 的值更改为要在分配问题时将其移动到的列的名称。
   - 更改 `repo-token` 的值：
     1. 创建具有 `repo` 作用域的个人访问令牌。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
     1. 将此个人访问令牌作为机密存储在仓库中。 有关如何存储机密的详细信息，请参阅“[已加密的机密](/actions/reference/encrypted-secrets)”。
     1. 在工作流文件中，将 `PERSONAL_ACCESS_TOKEN` 替换为机密的名称。
6. {% data reusables.actions.commit-workflow %}

## 测试工作流程

每当分配仓库中的议题时，议题将移到指定的项目板列。 如果议题尚未在项目板上，则将添加到项目板中。

如果存储库是用户拥有的存储库，则 `alex-page/github-project-automation-plus` 操作将对存储库或个人帐户中具有指定项目名称和列的所有项目执行操作。 同样，如果您的仓库归组织所有，则该操作将对仓库或组织中具有指定项目名称和列的所有项目执行。

通过在仓库中分配议题来测试工作流程。

1. 在仓库中打开一个议题。 有关详细信息，请参阅“[创建问题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 分配议题。 有关详细信息，请参阅“[向其他 GitHub 用户分配问题并拉取请求](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)”。
3. 要查看分配议题所触发的工作流程运行，请查看工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
4. 工作流程完成后，分配的议题应会添加到指定的项目板列中。

## 后续步骤

- 若要详细了解可使用 `alex-page/github-project-automation-plus` 操作执行的其他操作，例如删除或存档项目卡，请访问[`alex-page/github-project-automation-plus`操作文档](https://github.com/marketplace/actions/github-project-automation)。
