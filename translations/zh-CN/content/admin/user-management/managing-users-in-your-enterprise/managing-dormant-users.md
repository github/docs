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
---

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## 查看休眠用户

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在左侧边栏中，单击 **Dormant users**。 ![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. 要挂起此列表中的所有休眠用户，请在页面顶部单击 **Suspend all**。 ![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## 确定用户帐户是否休眠

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. 在 **User info** 部分中，后面为“Dormant”的红点表示该用户帐户为休眠状态，后面为“Active”的绿点表示该用户帐户处于活跃状态。 ![Dormant 用户帐户](/assets/images/enterprise/stafftools/dormant-user.png) ![Active 用户帐户](/assets/images/enterprise/stafftools/active-user.png)

## 配置休眠阈值

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Dormancy threshold”，使用下拉菜单，然后单击所需的休眠阈值。 ![Dormancy threshold 下拉菜单](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.dormant-user-release-phase %}

{% warning %}

**Note:** During the private beta, ongoing improvements to the report download feature may limit its availability.

{% endwarning %}

## Downloading the dormant users report from your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. To download your Dormant Users (beta) report as a CSV file, under "Other", click {% octicon "download" aria-label="The Download icon" %} **Download**. ![Download button under "Other" on the Compliance page](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% endif %}
