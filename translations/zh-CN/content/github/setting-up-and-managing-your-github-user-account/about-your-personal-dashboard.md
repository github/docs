---
title: 关于个人仪表板
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
intro: '您可以访问个人仪表板，以跟踪您参与或关注的议题和拉取请求，浏览常用仓库和团队页面，了解您订阅的组织和仓库中近期活动的最新信息，以及探索推荐的仓库。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 访问个人仪表板

个人仪表板是登录 {% data variables.product.product_name %} 时显示的第一页。

登录后要访问个人仪表板，请单击 {% data variables.product.product_url %} 上任何页面左上角的 {% octicon "mark-github" aria-label="The github octocat logo" %}。

### 查找近期活动

在消息馈送的“Recent activity（最近活动）”部分，您可以快速找到并跟进最近更新的议题和您正在处理的拉取请求。 在“Recent activity（最近活动）”下，您可以预览过去两周内的最多 12 次最近更新。

{% data reusables.dashboard.recent-activity-qualifying-events %}

### 查找常用仓库和团队

在仪表板的左侧栏中，可以访问常用仓库和团队。

![不同组织中的仓库和团队列表](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

The list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include making commits and opening or commenting on issues and pull requests. The list of top repositories cannot be edited, but repositories will drop off the list 4 months after you last interacted with them.

您也可以点击 {% data variables.product.product_name %} 上任何页面顶部的搜索栏，查找近期访问过的仓库、团队及项目板列表。

### 了解社区中活动的最新信息

在消息馈送的“All activity（所有活动）”部分，您可以查看订阅的仓库的更新以及您关注的人员。 “All activity（所有活动）”部分显示您关注或标星的仓库以及您关注的用户的更新。

当您关注的用户执行以下操作时，您会在消息馈送中看到更新：
- 对仓库标星。
- 关注另一用户。
- 创建公共仓库。
- 在您关注的仓库上打开具有“需要帮助”或“良好的第一个议题”标签的议题或拉取请求。
- 推送提交到您关注的仓库。
- 对公共仓库复刻。

有关对仓库标星和关注人员的更多信息，请参阅“[使用星标保存仓库](/articles/saving-repositories-with-stars/)" and "[关注人员](/articles/following-people)”。

### 探索推荐的仓库

在仪表板右侧的“Explore repositories（浏览仓库）”部分，您可以浏览社区中推荐的仓库。 Recommendations are based on repositories you've starred or visited, the people you follow, and activity within repositories that you have access to.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

### 延伸阅读

- "[关于组织仪表板](/articles/about-your-organization-dashboard)"
