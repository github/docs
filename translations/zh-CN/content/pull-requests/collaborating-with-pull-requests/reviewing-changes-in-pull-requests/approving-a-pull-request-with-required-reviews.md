---
title: 批准需要审查的拉取请求
intro: 如果您的仓库需要审查，拉取请求必须由对仓库具有写入或管理员权限的人员进行特定数量的批准审查，然后才可合并。
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
shortTitle: 必要的审查
---

有关必需审查的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”。

您可以评论拉取请求、批准更改或在批准前申请改进。 更多信息请参阅“[审查拉取请求中提议的更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

{% data reusables.search.requested_reviews_search %}

{% tip %}

**提示**：如果您批准的拉取请求发生了重要更改，您可以忽略审查。 拉取请求在合并前需要新的审查。 更多信息请参阅“[忽略拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. 审查拉取请求中的更改，并且选择[评论特定行](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review)。
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. 选择 **Approve（批准）**以评估合并拉取请求中提议的更改。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 延伸阅读

- "[审查拉取请求中提议的更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
