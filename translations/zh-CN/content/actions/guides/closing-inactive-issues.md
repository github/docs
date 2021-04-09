---
title: 关闭不活跃的议题
intro: '您可以使用 {% data variables.product.prodname_actions %} 评论或关闭在一定时间内未活动的议题。'
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

本教程演示了如何使用 [`actions/stale` 操作](https://github.com/marketplace/actions/close-stale-issues)来评论和关闭已经停用一段时间的议题。 例如，如果某个议题 30 天内未活动，您可以添加评论以促使参与者采取行动。 然后，如果 14 天后没有其他活动发生，您可以关闭此议题。

在教程中，您将先创建一个使用 [`actions/stale` 操作](https://github.com/marketplace/actions/close-stale-issues)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

### 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    {% raw %}
    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/stale@v3
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
4. 自定义工工作流程文件中的参数：
   - 更改 `on.schedule` 的值以指示您希望此工作流程何时运行。 在上面的示例中，工作流将于每天 1:30 UTC 运行。 有关计划工作流程的更多信息，请参阅“[计划的活动](/actions/reference/events-that-trigger-workflows#scheduled-events)”。
   - 将 `days-before-issue-stale` 的值更改为在 `actions/stale` 操作标记议题之前无活动的天数。 如果您不希望此操作标记议题，将此值设置为 `-1`。
   - 将 `days-before-issue-close` 的值更改为在 `actions/stale` 操作关闭议题之前无活动的天数。 如果您不希望此操作关闭议题，将此值设置为 `-1`。
   - 将 `stale-issue-label` 的值更改为您想要应用到 `days-before-issue-stale` 指定的时间内未活动的议题的标签。
   - 将 `stale-issue-message` 的值更改为您想要添加到 `actions/stale` 操作标记的议题的评论。
   - 将 `close-issue-message` 的值更改为您想要添加到 `actions/stale` 操作关闭的议题的评论。
5. {% data reusables.actions.commit-workflow %}

### 预期结果

根据 `schedule` 参数（例如，每天 1:30 UTC），您的工作流程将发现在指定时间段内处于非活动状态的议题，并将添加指定的评论和标签。 此外，如果在指定时间段内未发生其他活动，您的工作流程将关闭任何以前标记的议题。

{% data reusables.actions.schedule-delay %}

您可以查看工作流程运行的历史记录，以便定期查看此工作流程运行。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

为了避免速率限制滥用，此工作流程将一次只标记和/或关闭 30 个议题。 您可以使用 `operations-per-run` 设置配置此项。 更多信息请参阅 [`actions/stale` 操作文档](https://github.com/marketplace/actions/close-stale-issues)。

### 后续步骤

- 要详细了解可以使用 `actions/stale` 操作执行的其他事务，如关闭非活动的拉取请求、忽略包含某些标签或里程碑的议题，或只检查包含特定标签的议题，请参阅 [`actions/stale` 操作文档](https://github.com/marketplace/actions/close-stale-issues)。
- [搜索 GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) 以查看使用此操作的工作流程示例。
