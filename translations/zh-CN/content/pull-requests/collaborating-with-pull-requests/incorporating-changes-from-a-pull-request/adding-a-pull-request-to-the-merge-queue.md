---
title: 将拉取请求添加到合并队列
intro: '如果为存储库启用了合并队列，则可以在通过所有必需的检查后将请求添加到合并队列。 {% data variables.product.product_name %} 将为您合并拉取请求。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 将 PR 添加到合并队列
redirect_from:
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## 关于拉取请求合并队列

{% data reusables.pull_requests.merge-queue-overview-short %}
{% data reusables.pull_requests.merge-queue-references %}

## 将拉取请求添加到合并队列

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击要添加到合并队列的拉取请求。
1. 单击 **Add to merge queue（添加到合并队列）**将拉取请求添加到合并队列。 这将启用默认的 **Queue and merge in a group（组中的队列和合并）**选项。 或者，你也可以：
   - 通过选择 **Add to merge queue（添加到合并队列）** 下拉菜单并单击 **Jump the queue（跳转队列）**（仅适用于存储库维护员和管理员），将拉取请求添加到队列的前面。
   - 通过选择 **Add to merge queue（添加到合并队列）** 下拉菜单并单击 **Directly merge（直接合并）**（仅适用于存储库管理员），直接合并拉取请求。 ![合并队列选项](/assets/images/help/pull_requests/merge-queue-options.png)

   {% tip %}

   **提示：**仅当拉取请求满足所有审阅/批准和状态检查要求时，才会启用 **Add to merge queue（添加到合并队列）**按钮。

   {% endtip %}
2. 通过单击 **Confirm add to merge queue（确认添加到合并队列）**，确认要将拉取请求添加到合并队列。
   {% data variables.product.product_name %} 可将拉取请求添加到合并队列并为您合并它。

## 查看合并队列

您可以在 {% data variables.product.product_name %} 上的各个位置查看合并队列。

   - 在存储库的 **Branches（分支）**页面上。 如果您没有拉取请求或不知道队列中已有拉取请求，并且想要查看队列中的内容，我们建议您使用此路径。 更多信息请参阅“[查看仓库中的分支](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)”。

  ![在“分支”页面中查看合并队列](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- 在存储库的 **Pull requests（拉取请求）**页面上，单击 {% octicon "clock" aria-label="The clock symbol" %}。

  ![在“拉取请求”页面中查看合并队列](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- 在拉取请求中，向下滚动到包含检查的部分，然后单击 **View merge queue（查看合并队列）**。

  ![在拉取请求上查看合并队列按钮](/assets/images/help/pull_requests/view-merge-queue-button.png)

合并队列视图显示当前在队列中的拉取请求，并清楚地标记了拉取请求。

![合并队列视图](/assets/images/help/pull_requests/merge-queue-view.png)

## 处理从合并队列中删除的拉取请求

{% data reusables.pull_requests.merge-queue-reject %}
