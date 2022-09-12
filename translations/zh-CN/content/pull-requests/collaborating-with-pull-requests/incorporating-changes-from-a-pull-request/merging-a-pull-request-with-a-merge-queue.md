---
title: 将拉取请求与合并队列合并
intro: '如果分支的分支保护设置需要合并队列，可以将拉取请求添加到合并队列中，一旦所有必需的检查通过，{% data variables.product.product_name %} 将合并拉取请求。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614269'
---
{% data reusables.pull_requests.merge-queue-beta %}

## 关于合并队列

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## 将拉取请求添加到合并队列

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. 在“拉取请求”列表中，单击要添加到合并队列的拉取请求。

1. 单击“准备就绪后合并”，将拉取请求添加到合并队列。 或者，如果你是管理员，可以执行以下操作：
   -  如果分支保护设置允许，可通过选中“合并而不等待满足要求({% ifversion bypass-branch-protections %}绕过分支保护{% else %}仅限管理员{% endif %})”直接合并拉取请求，并遵循标准流程。
   ![合并队列选项](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **提示：** 只要准备好合并建议的更改，就可以单击“准备就绪后合并”。 一旦满足所需的审批和状态检查条件，{% data variables.product.product_name %} 会自动将拉取请求添加到合并队列中。

  {% endtip %}

1. 单击“准备就绪后确认合并”，确认你要将拉取请求添加到合并队列。

## 从合并队列中删除拉取请求

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. 在“拉取请求”列表中，单击要从合并队列中删除的拉取请求。

1. 若要从队列中删除拉取请求，请单击“从队列中删除”。
  ![从队列中删除拉取请求](/assets/images/help/pull_requests/remove-from-queue-button.png)

或者，可以导航到基础分支的合并队列页，单击要删除的拉取请求旁边的“...”，然后选择“从队列中删除” 。 有关如何访问基本分支的合并队列页的信息，请参阅下面的部分。

## 查看合并队列

可以在 {% data variables.product.product_name %} 上的不同位置查看基础分支的合并队列。

- 在存储库的“分支”页上。 如果你没有拉取请求或不知道队列中已有拉取请求，并且想要查看队列中的内容，我们建议你使用此路径。 有关详细信息，请参阅“[查看存储库中的分支](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)”。

  ![在“分支”页面中查看合并队列](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- 在存储库的“拉取请求”页上，单击合并队列中任何拉取请求旁边的 {% octicon "clock" aria-label="The clock symbol" %}。

  ![在“拉取请求”页面中查看合并队列](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- 在需要合并队列进行合并时，在拉取请求页上，滚动到时间线底部并单击“合并队列”链接。

  ![在拉取请求上合并队列链接](/assets/images/help/pull_requests/merge-queue-link.png)

- 合并队列视图显示当前在队列中的拉取请求，并清楚地标记了拉取请求。

  ![合并队列视图](/assets/images/help/pull_requests/merge-queue-view.png)

## 处理从合并队列中删除的拉取请求

{% data reusables.pull_requests.merge-queue-reject %}
