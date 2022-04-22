---
title: 将拉取请求与合并队列合并
intro: '如果分支的分支保护设置需要合并队列，则可以将拉取请求添加到合并队列，{% data variables.product.product_name %} 将在通过所有必需的检查后为您合并拉取请求。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 将 PR 与合并队列合并
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## 关于合并队列

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-references %}

## 将拉取请求添加到合并队列

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. 在“Pull Requests（拉取请求）”列表中，单击要添加到合并队列的拉取请求。

1. 单击 **Merge when ready（准备就绪时合并）**将拉取请求添加到合并队列中。 或者，如果您是管理员，则可以：
   -  如果分支保护设置允许，可直接合并请求，方法是选中 **Merge without waiting for requirements to be met (administrators only)（合并，而无需等待满足要求 [仅限管理员]）**，并遵循标准流程。 ![合并队列选项](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **提示：** 您可以单击 **Merge when ready（准备就绪时合并）**随时合并建议的更改。 {% data variables.product.product_name %} 会在满足所需的审批和状态检查条件后自动将拉取请求添加到合并队列中。

  {% endtip %}

1. 通过单击 **Confirm merge when ready（准备就绪时确认合并）**，确认要将拉取请求添加到合并队列。

## 从合并队列中删除拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. 在“Pull Requests（拉取请求）”列表中，单击要从合并队列删除的拉取请求。

1. 要从队列中删除拉取请求，请单击 **Remove from queue（从队列中删除）**。 ![从队列中删除拉取请求](/assets/images/help/pull_requests/remove-from-queue-button.png)

或者，可以导航到基本分支的合并队列页面，单击要删除的拉取请求旁边的 **...** ，然后选择 **Remove from queue（从队列中删除）**。 有关如何访问基本分支的合并队列页的信息，请参阅以下部分。

## 查看合并队列

您可以在 {% data variables.product.product_name %} 上的不同位置查看基础分支的合并队列。

- 在存储库的 **Branches（分支）**页面上。 如果您没有拉取请求或不知道队列中已有拉取请求，并且想要查看队列中的内容，我们建议您使用此路径。 更多信息请参阅“[查看仓库中的分支](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)”。

  ![在“分支”页面中查看合并队列](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- 在存储库的 **Pull requests（拉取请求）** 页面上，单击合并队列中任何拉取请求旁边的 {% octicon "clock" aria-label="The clock symbol" %}。

  ![在“拉取请求”页面中查看合并队列](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- 如果合并需要合并队列，在拉取请求页面上，滚动到时间线的底部，然后单击 **merge queue（合并队列）**链接。

  ![拉取请求上的合并队列链接](/assets/images/help/pull_requests/merge-queue-link.png)

- 合并队列视图显示当前在队列中的拉取请求，并清楚地标记了拉取请求。

  ![合并队列视图](/assets/images/help/pull_requests/merge-queue-view.png)

## 处理从合并队列中删除的拉取请求

{% data reusables.pull_requests.merge-queue-reject %}
