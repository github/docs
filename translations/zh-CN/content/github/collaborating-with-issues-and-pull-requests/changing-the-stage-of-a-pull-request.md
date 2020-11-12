---
title: 更改拉取请求的阶段
intro: 'You can mark a draft pull request as ready for review{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} or convert a pull request to a draft{% endif %}.'
permissions: 具有仓库写入权限的人员和拉取请求作者可以更改拉取请求的阶段。
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 将拉取请求草稿标记为可供审查

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要标记为可供审查的拉取请求。
3. 在合并框中，单击 **Ready for review（可供审查）**。 ![可供审查按钮](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### 将拉取请求转换为草稿

您可以随时将拉取请求转换为草稿。 例如，如果您意外打开了拉取请求而不是草稿，或者收到了需要解决的关于拉取请求的反馈，则可将拉取请求转换为草稿，以表示需要进一步更改。 再次将拉取请求标记为可供审查之前，任何人都不能合并拉取请求。 将拉取请求转换为草稿时，已订阅拉取请求通知的用户将不会取消订阅。

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要转换为草稿的拉取请求。
3. 在右侧边栏中的“Reviewers（审查者）”下下单击 **Convert to draft（转换为草稿）**。 ![转换为草稿链接](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. 单击 **Convert to draft（转换为草稿）**。 ![转换为草稿确认](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### 延伸阅读

- "[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
