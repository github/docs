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
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Dormancy threshold”，使用下拉菜单，然后单击所需的休眠阈值。 ![Dormancy threshold 下拉菜单](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.dormant-user-release-phase %}

## 从企业帐户下载休眠用户报告

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. 要将休眠用户（测试版）报告下载为 CSV 文件，请在“Other（其他）”下点击 {% octicon "download" aria-label="The Download icon" %} **Download（下载）**。 ![Compliance（合规）页面上"Other（其他）"下的 Download（下载）按钮](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**提示：** 为了评估用户休眠，用户活动的范围仅限于与与企业关联的组织、存储库或登录事件关联的用户活动。 例如，如果用户最近在与企业无关的公共存储库中对某个议题进行了评论，则可能会将其视为休眠状态。 但是，如果他们最近在与企业中的组织关联的公共存储库中对某个议题进行了评论，则不会将其视为休眠状态，也不会出现在“休眠用户”报告中。

对于 Web 登录事件，只有通过与企业关联的 SSO 域进行的登录事件才被视为与企业关联的用户活动。

{% endtip %}

{% endif %}
