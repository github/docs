---
title: 更改拉取请求的阶段
intro: 可以将草稿拉取请求标记为已准备好审阅或将拉取请求转换为草稿。
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130098'
---
## 将拉取请求草稿标记为可供审查

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

提示：你也可以使用 {% data variables.product.prodname_cli %} 将拉取请求标记为可供审查。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)”。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要标记为可供审查的拉取请求。
3. 在合并框中，单击“可供审查”。
  ![可供审查按钮](/assets/images/help/pull_requests/ready-for-review-button.png)

## 将拉取请求转换为草稿

您可以随时将拉取请求转换为草稿。 例如，如果您意外打开了拉取请求而不是草稿，或者收到了需要解决的关于拉取请求的反馈，则可将拉取请求转换为草稿，以表示需要进一步更改。 再次将拉取请求标记为可供审查之前，任何人都不能合并拉取请求。 将拉取请求转换为草稿时，已订阅拉取请求通知的用户将不会取消订阅。

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要转换为草稿的拉取请求。
3. 在右侧边栏中的“审查者”下单击“转换为草稿”。
  ![转换为草稿链接](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. 单击“转换为草稿”。
  ![转换为草稿确认](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## 延伸阅读

- “[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”
