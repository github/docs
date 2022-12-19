---
title: 关于个人仪表板
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085069"
---
## <a name="accessing-your-personal-dashboard"></a>访问个人仪表板

个人仪表板是登录 {% data variables.product.product_name %} 时显示的第一页。

登录后若要访问个人仪表板，请单击 {% data variables.product.product_name %} 上任何页面左上角的 {% octicon "mark-github" aria-label="The github octocat logo" %}。

## <a name="finding-your-recent-activity"></a>查找近期活动

在消息馈送的“Recent activity（最近活动）”部分，您可以快速找到并跟进最近更新的议题和您正在处理的拉取请求。 在“最近活动”下，最多可以预览过去两周内的 4 次最近更新。

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>查找常用仓库和团队

在仪表板的左侧栏中，可以访问常用仓库和团队。

![不同组织中的仓库和团队列表](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

常用仓库列表自动生成，可以包括您与之交互的任何仓库，无论它是否由您的帐户直接拥有。 交互包括提交和打开或评论议题和拉取请求。 常用仓库列表无法编辑，但其中的仓库将在您最后一次与之交互 4 个月后从列表中删除。

您也可以点击 {% data variables.product.product_name %} 上任何页面顶部的搜索栏，查找近期访问过的仓库、团队及项目板列表。

## <a name="staying-updated-with-activity-from-the-community"></a>了解社区中活动的最新信息

{% if for-you-feed %} 仪表板的主要部分有两个活动源：

- 关注：您关注的人员和您关注的存储库的活动。
- 为您推荐：根据您的 {% data variables.product.product_name %} 网络开展的活动和推荐。

### <a name="following-feed"></a>关注订阅源

此订阅源通过关注用户或存储库，显示来自您表现出直接兴趣的存储库和用户的活动。 例如，当您关注的用户执行以下操作时，您会看到更新：

{% else %} 在新闻源的“所有活动”部分，可查看所监视的存储库和关注的用户的更新。

当你关注的用户执行以下操作时，会在新闻源中看到更新：{% endif %}


- 对仓库标星。
- 关注其他用户。{% ifversion fpt or ghes or ghec %}
- 创建公共仓库。{% endif %}
- 在您关注的仓库上打开具有“需要帮助”或“良好的第一个议题”标签的议题或拉取请求。
- 将提交内容推送到你关注的存储库。{% ifversion fpt or ghes or ghec %}
- 复刻公共仓库。{% endif %}
- 发布新版本。

若要详细了解如何关注人员和监视存储库，请参阅“[关注他人](/get-started/exploring-projects-on-github/following-people)”和“[社交化](/get-started/quickstart/be-social)”。

{% if for-you-feed %}
### <a name="for-you-feed"></a>供您订阅

{% note %}

注意：这个新选项卡目前为公共 beta 版本，可能会发生更改。 

{% endnote %}

此订阅源根据您在 {% data variables.product.product_name %} 上的网络显示活动和建议。 它旨在提供更新，以激励您，让您保持最新状态，并帮助您找到想要参与的新社区。 您的网络包括：

- 您已加星标的存储库
- 您参与的存储库
- 您关注或赞助的用户
- 与您协作的用户
- 您关注的组织

{% endif %}

## <a name="exploring-recommended-repositories"></a>探索推荐的仓库

在仪表板右侧的“Explore repositories（浏览仓库）”部分，您可以浏览社区中推荐的仓库。 推荐内容基于你已加注星标或访问过的存储库、所关注的人员以及有权访问的存储库中的活动。{% ifversion fpt or ghec %}有关详细信息，请参阅“[查找在 {% data variables.product.prodname_dotcom %} 上参与开放源代码的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。{% endif %}

## <a name="further-reading"></a>延伸阅读

- [关于组织仪表板](/articles/about-your-organization-dashboard)
