---
title: 查看安全概述
intro: 导航到安全概述中提供的不同视图
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  ghae: issue-5503
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: a0b6371155e7b7780ea216373b42481aa403e6db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525687'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## 查看组织的安全概述

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 要查看有关警报类型的汇总信息，请单击“显示更多”。
  ![显示更多按钮](/assets/images/help/organizations/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![代码扫描特定页面的屏幕截图](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## 查看整个组织的警报

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 在安全性边栏中，选择要查看的警报子集。
![查看警报子集](/assets/images/help/organizations/view-alert-subset.png)
2. （可选）过滤警报列表。 每个视图都有自己的可用筛选器选择。 您可以单击下拉过滤菜单中的多个过滤器以缩小搜索范围。 还可在搜索字段中键入搜索限定符。 有关可用限定符的详细信息，请参阅“[在安全概述中筛选警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。
  ![扫描视图中的下拉筛选器菜单和“搜索存储库”字段](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## 查看企业的安全概述

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 在左侧边栏中，单击 {% octicon "shield" aria-label="The shield icon" %}“代码安全”。
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %} {% endif %}

## 查看存储库的警报

{% data reusables.repositories.navigate-to-repo %}
1. 在存储库名称下，单击“安全性”。
  ![存储库安全选项卡](/assets/images/help/repository/security-tab.png)
2. 在安全性边栏中，选择要打开的视图。
  ![存储库视图警报子集](/assets/images/help/repository/repo-security-side-panel.png)
3. （可选）过滤警报列表。 每个视图都有自己的可用筛选器选择。 您可以单击下拉过滤菜单中的多个过滤器以缩小搜索范围。 还可在搜索字段中键入搜索限定符。 有关可用限定符的详细信息，请参阅“[在安全概述中筛选警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。
  ![存储库机密扫描警报视图中的下拉筛选器菜单](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## 查看团队的安全概述

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %}
