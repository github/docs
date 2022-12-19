---
title: 查看安全概述
intro: 导航到安全概述中提供的不同视图
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
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
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163217'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## 查看组织的安全概述

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 从边栏中的选项中选择要显示的概述。
1. 使用下拉筛选器和搜索框专注于最感兴趣的信息。 “安全风险”和“安全覆盖范围”视图还具有可用于筛选结果的交互式标头。

  ![“安全风险”视图的屏幕截图，其中突出显示了交互式标头](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 要查看有关警报类型的汇总信息，请单击“显示更多”。
  ![显示更多按钮](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![代码扫描特定页面的屏幕截图](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 查看企业的安全概述

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 在左侧边栏中，单击 {% octicon "shield" aria-label="The shield icon" %}“代码安全”。
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## 查看团队的安全概述

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
