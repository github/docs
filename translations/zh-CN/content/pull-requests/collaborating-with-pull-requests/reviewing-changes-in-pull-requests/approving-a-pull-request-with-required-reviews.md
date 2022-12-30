---
title: 批准需要审查的拉取请求
intro: 如果存储库需要审查，则拉取请求必须获得特定数量的来自存储库中具有 _写入_ 或 _管理_ 权限的人员的批准审查，然后才能合并。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130085'
---
有关所需审查的详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”。

您可以评论拉取请求、批准更改或在批准前申请改进。 有关详细信息，请参阅“[审查拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

{% data reusables.search.requested_reviews_search %}

{% tip %}

提示：如果你批准的拉取请求发生了重要更改，你可以消除审查。 拉取请求在合并前需要新的审查。 有关详细信息，请参阅“[消除拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. 审查拉取请求中的更改，并[对特定行添加注释](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review)（可选）。
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. 选择“批准”以批准合并拉取请求中建议的更改。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 延伸阅读

- “[审查拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[对拉取请求添加注释](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”
