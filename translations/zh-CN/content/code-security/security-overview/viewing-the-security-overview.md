---
title: 查看安全性概述
intro: 导航到安全概述中可用的不同视图
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  ghae: issue-5503
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: 查看安全性概述
---

{% ifversion ghes < 3.5 or ghae-issue-4554 %}
{% data reusables.security-center.beta %}
{% endif %}

## 查看组织的安全概述

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. 要查看有关警报类型的汇总信息，请单击 **Show more（显示更多）**。 ![显示更多按钮](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% if security-overview-views %}
1. 或者，也可以使用左侧边栏按安全功能筛选信息。 在每个页面上，您可以使用特定于每个功能的筛选器来微调搜索。 ![代码扫描特定页面的截图](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## 查看整个组织中的警报

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. 在安全性边栏中，选择要查看的警报子集。 ![查看警报子集](/assets/images/help/organizations/view-alert-subset.png)
2. （可选）过滤警报列表。 每个视图都有自己选择的可用筛选器。 您可以单击下拉过滤菜单中的多个过滤器以缩小搜索范围。 您还可以在搜索字段中键入搜索限定符。 有关可用限定符的更多信息，请参阅“[筛选安全性概述中的警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。 ![机密扫描视图中的下拉筛选器菜单和搜索存储库字段](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## 查看企业的安全性概述

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 在左侧边栏中，单击 {% octicon "shield" aria-label="The shield icon" %} **代码安全性**。
{% endif %}

## 查看仓库的警报

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Security（安全性）**。 ![存储库安全性选项卡](/assets/images/help/repository/security-tab.png)
2. 在安全性边栏中，选择要打开的视图。 ![存储库视图警报子集](/assets/images/help/repository/repo-security-side-panel.png)
3. （可选）过滤警报列表。 每个视图都有自己选择的可用筛选器。 您可以单击下拉过滤菜单中的多个过滤器以缩小搜索范围。 您还可以在搜索字段中键入搜索限定符。 有关可用限定符的更多信息，请参阅“[筛选安全性概述中的警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。 ![存储库机密扫描警报视图中的下拉筛选器菜单](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## 查看团队的安全概述

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
