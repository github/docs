---
title: 审查拉取请求中的建议更改
intro: 在拉取请求中，您可以审查和讨论提交、更改的文件以及基本和比较分支中文件之间的区别（或“差异”）。
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于审查拉取请求

您可以在拉取请求中每次审查一个文件的更改。 在审查拉取请求中的文件时，可对特定更改进行个别评论。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} 在完成审查每个文件后，您可以将该文件标记为已查看。 这会折叠文件，帮助您识别还需要审查的文件。 拉取请求标头中的进度条显示您查看过的文件数。{% endif %} 在按需要审查多个文件后，您可以在摘要评论中提交审查，以批准拉取请求或申请其他更改。

{% data reusables.search.requested_reviews_search_tip %}

### 开始审查

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. 完成后，单击 **Start a review（开始审查）**。 如果已开始审查，您可以单击 **Add review comment（添加审查注释）**。 ![开始审查按钮](/assets/images/help/pull_requests/start-a-review-button.png)

提交审查之前，您的行注释为_待处理_状态并且仅对您可见。 您可以在提交审查之前随时编辑待处理的注释。 要取消待处理的审查（包括所有其待处理的注释），请在 Conversation（对话）选项卡中向下滚动到时间表的末尾，然后单击 **Cancel review（取消审查）**。

![取消审查按钮](/assets/images/help/pull_requests/cancel-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
### 将文件标记为已查看

在完成审查文件后，您可以将文件标记为已查看，该文件将会收起。 如果查看过的文件有更改，将会取消已查看的标记。

{% data reusables.repositories.changed-files %}
2. 在完成审查的文件的标头右侧，选择**已查看**。 ![已查看复选框](/assets/images/help/pull_requests/viewed-checkbox.png)
{% endif %}

### 提交审查

完成审查拉取请求中需要查看的所有文件后，提交您的审查。

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. 选择您想要留下的审查类型： ![具有审查选项的单选按钮](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - 选择 **Comment（注释）**留下一般反馈而不明确批准更改或请求其他更改。
    - 选择 **Approve（批准）**提交反馈并批准合并拉取请求中提议的更改。
    - 选择 **Request changes（请求更改）**提交在拉取请求合并之前必须解决的反馈。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### 延伸阅读

- “[关于拉取请求审查](/articles/about-pull-request-reviews)”
- "[关于拉取请求的必要审查](/articles/about-required-reviews-for-pull-requests)"
- “[批准需要审查的拉取请求](/articles/approving-a-pull-request-with-required-reviews)”
- "[评论拉取请求](/articles/commenting-on-a-pull-request)"
- "[按审查状态过滤拉取请求](/articles/filtering-pull-requests-by-review-status)"
