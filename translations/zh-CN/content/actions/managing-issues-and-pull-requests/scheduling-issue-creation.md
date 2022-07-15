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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本教程演示如何使用 [`imjohnbo/issue-bot` 操作](https://github.com/marketplace/actions/issue-bot-action)定期创建议题。 例如，您可以每周创建一个议题，用作团队会议的议程。

在教程中，您将先创建一个使用 [`imjohnbo/issue-bot` 操作](https://github.com/marketplace/actions/issue-bot-action)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

## 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

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
   - 更改 `on.schedule` 的值以指示您希望此工作流程何时运行。 在上面的示例中，工作流将于每周一 7:20 UTC 运行。 有关计划工作流程的更多信息，请参阅“[计划的活动](/actions/reference/events-that-trigger-workflows#scheduled-events)”。
   - 将 `assignees` 的值更改为您想要分配给此议题的 {% data variables.product.prodname_dotcom %} 用户名。
   - 将 `labels` 的值更改为您想要应用于此议题的标签列表。
   - 将 `title` 的值更改为您希望该议题拥有的标题。
   - 将 `body` 的值更改为您想要用于议题正文的文本。 `|` 字符允许您为此参数使用多行值。
   - 如果您想要将这个议题固定在您的仓库中，请将 `pinned` 设置为 `true`。 有关置顶议题的更多信息，请参阅“[将议题固定到仓库](/articles/pinning-an-issue-to-your-repository)”。
   - 如果您想在每次新建议题时关闭此工作流程生成的上一个议题，请将 `close-previous` 设置为 `true`。 工作流程将关闭具有 `labels` 字段中定义的标签的最新议题。 为避免关闭错误的议题，请使用独特的标签或标签组合。
5. {% data reusables.actions.commit-workflow %}

## 预期结果

根据 `schedule` 参数（例如，每周一 7:20 UTC），您的工作流程将使用您指定的受理人、标签、标题和正文创建新议题。 如果您将 `pinned` 设置为 `true`，工作流程会将此议题固定到您的仓库。 如果将 `close-previous` 设置为 true，工作流程将会关闭具有匹配标签的最新议题。

{% data reusables.actions.schedule-delay %}

您可以查看工作流程运行的历史记录，以便定期查看此工作流程运行。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

## 后续步骤

- 要详细了解可以使用 `imjohnbo/issue-bot` 操作完成的其他事项，如轮换受理人或使用议题模板，请参阅 [`imjohnbo/issue-bot` 操作文档](https://github.com/marketplace/actions/issue-bot-action)。
- [搜索 GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) 以查看使用此操作的工作流程示例。
