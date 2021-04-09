---
title: 批准组织的 OAuth Apps
intro: '当组织成员申请 {% data variables.product.prodname_oauth_app %} 访问组织资源时，组织所有者可以批准或拒绝该申请。'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---

当 {% data variables.product.prodname_oauth_app %} 访问限制启用后，组织成员必须向组织所有者[申请批准](/articles/requesting-organization-approval-for-oauth-apps)，然后才可授权对组织资源具有访问权限的 {% data variables.product.prodname_oauth_app %}。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. 在要批准的应用程序的旁边，单击 **Review（审查）**。 ![审查申请链接](/assets/images/help/settings/settings-third-party-approve-review.png)
6. 在审查申请的应用程序相关信息后，单击 **Grant access（授予访问）**。 ![授予访问按钮](/assets/images/help/settings/settings-third-party-approve-grant.png)

### 延伸阅读

- "[关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)"
