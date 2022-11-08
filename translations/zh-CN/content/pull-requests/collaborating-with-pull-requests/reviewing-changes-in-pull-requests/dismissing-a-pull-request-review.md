---
title: 忽略拉取请求审查
intro: 如果仓库要求审查，可以忽略不再有效或无法被审查者批准的拉取请求审查。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876068'
---
{% data reusables.pull_requests.dismiss_review %} 这会将审查状态更改为审查注释。 忽略审查后，必须添加注释，解释忽略原因。 注释将被添加到拉取请求对话。

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. 在“对话”选项卡中，滚动到要忽略的审查，然后单击“{% octicon "chevron-down" aria-label="The down button" %}”。 ![合并框中的 V 形图标](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. 单击“{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}”，然后单击“忽略审查”。
![合并框中的烤肉串式图标](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. 输入忽略审查的原因，然后单击“忽略审查”。
  ![忽略审查按钮](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## 延伸阅读

- [关于拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- “[审查拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”
