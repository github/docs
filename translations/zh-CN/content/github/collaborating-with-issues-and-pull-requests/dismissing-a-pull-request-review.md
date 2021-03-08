---
title: 忽略拉取请求审查
intro: '如果仓库要求审查，可以忽略不再有效或无法被审查者批准的拉取请求审查。'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.dismiss_review %}
这会将审查的状态更改为审查评论。 忽略审查后，必须添加注释，解释忽略原因。 注释将被添加到拉取请求对话。

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
3. 在 "Conversation"（转换）选项卡中，滚动到要忽略的审查，然后单击 {% octicon "chevron-down" aria-label="The down button" %}。 ![合并框中的 V 形图标](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. 单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Dismiss review（忽略审查）**。 ![合并框中的烤肉串图标](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. 输入忽略审查的原因，然后单击 **Dismiss review（忽略审查）**。 ![忽略审查按钮](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

### 延伸阅读

- “[关于拉取请求审查](/articles/about-pull-request-reviews)”
- "[审查拉取请求中提议的更改](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"