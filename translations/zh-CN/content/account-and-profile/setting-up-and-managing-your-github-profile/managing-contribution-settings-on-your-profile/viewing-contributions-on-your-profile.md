---
title: 在个人资料中查看贡献
intro: '你的 {% data variables.product.product_name %} 个人资料显示{% ifversion fpt or ghes or ghec %}你的固定存储库、成就和{% endif %}过去一年中存储库贡献的图。'
redirect_from:
  - /articles/viewing-contributions
  - /articles/viewing-contributions-on-your-profile-page
  - /articles/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: View contributions
ms.openlocfilehash: 81b2242e0c7a07d8941375d044cacc65ca8dd56d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079523'
---
{% ifversion fpt or ghes or ghec %}你的贡献图和“成就”显示公共存储库的活动。 {% endif %}可以选择显示 {% ifversion fpt or ghes or ghec %} 公共和 {% endif %} 私有存储库的活动，并将私有存储库中活动的具体详细信息匿名化。 有关详细信息，请参阅“[在配置文件中公开或隐藏私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”。

{% note %}

注意：仅当用于创作提交的电子邮件地址与在 {% data variables.product.product_name %} 上的帐户相连时，提交才会显示在你的贡献图中。 有关详细信息，请参阅“[为什么我的贡献没有在我的配置文件中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”

{% endnote %}

## 计为贡献的内容

在您的个人资料页面上，某些操作计为贡献：

- 提交到存储库的默认分支或 `gh-pages` 分支
- 创建问题
- 打开讨论
- 回答讨论
- 提议拉取请求
- 提交拉取请求审查 {% ifversion ghes or ghae %}
- 合作创作存储库默认分支或 `gh-pages` 分支中的提交{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## 受欢迎的仓库

此部分显示具有最多查看者的仓库。 {% ifversion fpt or ghes or ghec %}[将存储库固定到配置文件](/articles/pinning-repositories-to-your-profile)后，此部分将更改为“固定的存储库”。{% endif %}

![受欢迎的仓库](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## 固定的仓库

此部分显示最多六个公共仓库，并可包括您的仓库以及您对其做出贡献的仓库。 为便于查看关于你选择提供的存储库的重要详细信息，此部分中的每个存储库均包括所做工作的摘要、存储库已收到的[星号](/articles/saving-repositories-with-stars/)数量以及存储库中使用的主要编程语言。 有关详细信息，请参阅“[将存储库固定到配置文件](/articles/pinning-repositories-to-your-profile)”。

![固定的仓库](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## 贡献日历

您的贡献日历会显示贡献活动。

### 查看特定时间的贡献

- 单击某个日期的方块可显示该 24 小时期间内所做的贡献。
- 按“Shift”并单击任意日期的方块可显示该时间范围内所做的贡献。

{% note %}

注意：可以在贡献日历中选择最多一个月的范围。 如果您选择更大的时间范围，我们将仅显示一个月的贡献。

{% endnote %}

![您的贡献图](/assets/images/help/profile/contributions_graph.png)

### 如何计算贡献事件时间

对于提交和拉取请求，时间戳的计算方式不同：
- “提交”使用提交时间戳中的时区信息。 有关详细信息，请参阅“[排查日程表上的提交问题](/articles/troubleshooting-commits-on-your-timeline)”。
- {% data variables.product.product_name %} 上打开的“拉取请求”和“议题”使用浏览器的时区 。 通过 API 打开的内容使用 [API 调用中指定的](https://developer.github.com/changes/2014-03-04-timezone-handling-changes)时间戳或时区。

## 活动概述

{% data reusables.profile.activity-overview-summary %} 有关详细信息，请参阅“[在配置文件中显示活动概览](/articles/showing-an-overview-of-your-activity-on-your-profile)”。

![个人资料中的活动概览部分](/assets/images/help/profile/activity-overview-section.png)

活动概览中提供的组织根据您在组织中的活跃程度确定优先级。 如果在配置文件简历中 @mention 某个组织，并且你是组织成员，则该组织首先在活动概览中确定优先级。 有关详细信息，请参阅“[提及人员和团队](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)”或“[将个人简介添加到配置文件](/articles/adding-a-bio-to-your-profile/)”。

## 贡献活动

贡献活动部分包括工作的详细时间表，包括您进行或合作的提交、您提议的拉取请求以及您打开的议题。 可通过单击贡献活动底部的“Show more activity（显示更多活动）”或通过在查看页面右侧时单击你感兴趣的年份来查看一段时间内你的贡献。 重要时刻（如您加入组织、提议第一个拉取请求或打开一个备受瞩目议题的日期）将在贡献活动中突出显示。 如果您在时间表中无法看到某些事件，请检查以确保您仍具有事件发生位置组织或仓库的访问权限。

![贡献活动时间过滤器](/assets/images/help/profile/contributions_activity_time_filter.png)

## 在 {% data variables.product.prodname_dotcom_the_website %} 上查看 {% data variables.product.prodname_enterprise %} 中的贡献

如果使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} 或 {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} 并且你的企业所有者启用 {% data variables.product.prodname_unified_contributions %}，可以向 {% data variables.product.prodname_dotcom_the_website %} 配置文件发送企业贡献计数。 有关详细信息，请参阅“[将企业贡献发送到自己的 {% data variables.product.prodname_dotcom_the_website %} 配置文件](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”。

