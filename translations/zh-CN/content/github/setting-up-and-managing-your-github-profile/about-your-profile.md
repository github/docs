---
title: 关于您的个人资料
intro: 您的个人资料向人们讲述您操作感兴趣的仓库的故事、您所做的贡献以及您进行过的对话。
redirect_from:
  - /articles/viewing-your-feeds/
  - /articles/profile-pages/
  - /articles/about-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

您可以在传记中加入您的个人信息，比如您以前工作的地方、您参与过的项目，或者其他人可能想知道的个人兴趣。 更多信息请参阅“[添加传记到个人资料](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![个人资料上显示的个人资料自述文件](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

人们在访问您的个人资料时会看到您的贡献活动时间表，如您打开的议题和拉取请求、您进行的提交，以及您审查的拉取请求。 您可以选择只显示公共贡献或同时包含私人的匿名化贡献。 更多信息请参阅“[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)”或“[在您的个人资料中公开或隐藏私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”。

访问您的个人资料的人也可以看到以下信息。

- 你拥有或参与的仓库和 gists。 {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}您可以通过在个人资料中置顶仓库和 Gist 来展示您的得意之作。 更多信息请参阅“[将项目嵌入到个人资料](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)”。{% endif %}
- 您标星的仓库。 更多信息请参阅“[使用星标保存仓库](/articles/saving-repositories-with-stars/)”。
- 您在经常参与的组织、仓库和团队中的活动概述。 更多信息请参阅“[在您的个人资料中显示活动概述](/articles/showing-an-overview-of-your-activity-on-your-profile)”。{% if currentVersion == "free-pro-team@latest" %}
- 徽章，显示您是否使用 {% data variables.product.prodname_pro %} 或参与计划，例如 {% data variables.product.prodname_arctic_vault %}、{% data variables.product.prodname_sponsors %} 或 {% data variables.product.company_short %} 开发者计划。 更多信息请参阅“[个性化您的个人资料](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)”。{% endif %}

您还可以在个人资料上设置状态，以提供有关您的可用性的信息。 更多信息请参阅“[设置状态](/articles/personalizing-your-profile/#setting-a-status)”。

### 延伸阅读

- "[如何设置我的头像？](/articles/how-do-i-set-up-my-profile-picture)“
- "[在个人资料中公开或隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[在个人资料中查看贡献](/articles/viewing-contributions-on-your-profile)"
