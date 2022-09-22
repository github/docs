---
title: 管理休眠用户
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680923'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## 所有休眠用户

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## 查看休眠用户

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在左侧栏中，单击“休眠用户”。
![休眠用户选项卡](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. 要暂停此列表中的所有休眠用户，请在页面顶部单击“全部暂停”。
![全部暂停按钮](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## 确定用户帐户是否休眠

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. 在“用户信息”部分中，带有“休眠”一词的红点表示该用户帐户为休眠状态，带有“活跃”一词的绿点表示该用户帐户处于活跃状态。
![休眠用户帐户](/assets/images/enterprise/stafftools/dormant-user.png)
![活跃用户帐户](/assets/images/enterprise/stafftools/active-user.png)

## 配置休眠阈值

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. 在“Dormancy threshold”，使用下拉菜单，然后单击所需的休眠阈值。
![休眠阈值下拉菜单](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## 从企业帐户下载休眠用户报告

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. 要将休眠用户（测试版）报告下载为 CSV 文件，请在“其他”下点击 {% octicon "download" aria-label="The Download icon" %}“下载”。
  ![“合规”页面上“其他”下的“下载”按钮](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

提示：为了评估用户休眠，用户活动的范围仅限于与组织、存储库或与企业关联的登录事件相关的用户活动。 例如，如果用户最近评论了与企业无关的公共存储库中的某个问题，则他们可能被视为处于休眠状态。 但是，如果他们最近评论了与企业中某个组织关联的公共存储库中的问题，则他们不会被视为处于休眠状态，也不会显示在休眠用户报告中。

对于 Web 登录事件，仅通过与企业关联的 SSO 域进行的登录事件被视为与企业关联的用户活动。

{% endtip %}

{% endif %}
