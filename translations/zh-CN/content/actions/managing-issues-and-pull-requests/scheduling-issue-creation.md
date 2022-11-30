---
title: 计划议题的创建
intro: '您可以使用 {% data variables.product.prodname_actions %} 定期为日常会议或季度审查等事项创建议题。'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410057'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用 [`imjohnbo/issue-bot` 操作](https://github.com/marketplace/actions/issue-bot-action)定期创建议题。 例如，您可以每周创建一个议题，用作团队会议的议程。

在本教程中，你将首先创建一个使用 [`imjohnbo/issue-bot` 操作](https://github.com/marketplace/actions/issue-bot-action)的工作流文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. 自定义工工作流程文件中的参数：
   - 更改 `on.schedule` 的值以指示你希望何时运行此工作流。 在上面的示例中，工作流将于每周一 7:20 UTC 运行。 有关计划工作流的详细信息，请参阅“[计划事件](/actions/reference/events-that-trigger-workflows#scheduled-events)”。
   - 将 `assignees` 的值更改为你想要分配给此议题的 {% data variables.product.prodname_dotcom %} 用户名。
   - 将 `labels` 的值更改为你想要应用于此议题的标签列表。
   - 将 `title` 的值更改为你希望该议题拥有的标题。
   - 将 `body` 的值更改为你想要用于议题正文的文本。 使用 `|` 字符可以为此参数使用多行值。
   - 如果想要将这个议题固定在存储库中，请将 `pinned` 设置为 `true`。 有关固定议题的详细信息，请参阅“[将议题固定到存储库](/articles/pinning-an-issue-to-your-repository)”。
   - 如果你想在每次新建议题时关闭此工作流生成的上一个议题，请将 `close-previous` 设置为 `true`。 工作流将关闭具有 `labels` 字段中定义的标签的最新议题。 为避免关闭错误的议题，请使用独特的标签或标签组合。
5. {% data reusables.actions.commit-workflow %}

## 预期结果

根据 `schedule` 参数（例如，每周一 7:20 UTC），你的工作流将使用你指定的受理人、标签、标题和正文创建新议题。 如果将 `pinned` 设置为 `true`，工作流会将此议题固定到存储库。 如果将 `close-previous` 设置为 true，工作流将关闭具有匹配标签的最新议题。

{% data reusables.actions.schedule-delay %}

您可以查看工作流程运行的历史记录，以便定期查看此工作流程运行。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

## 后续步骤

- 若要详细了解可以使用 `imjohnbo/issue-bot` 操作执行的其他操作，例如轮换受理人或使用议题模板，请参阅 [`imjohnbo/issue-bot` 操作文档](https://github.com/marketplace/actions/issue-bot-action)。
- [搜索 GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) 以获取使用此操作的工作流示例。
