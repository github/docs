---
title: 禁用 OAuth 应用程序对您的组织的访问权限限制
intro: '组织所有者可禁用对拥有组织资源访问权限的 {% data variables.product.prodname_oauth_app %} 的限制。'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% danger %}

**警告**：禁用 {% data variables.product.prodname_oauth_app %} 对组织的访问权限限制后，任何组织成员批准某一应用程序使用其私有帐户设置时，将自动授予 {% data variables.product.prodname_oauth_app %} 对组织私有资源的访问权限。

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. 单击 **Remove restrictions（删除限制）**。 ![删除限制按钮](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. 审查有关禁用第三方应用程序限制的信息后，请单击 **Yes, remove application restrictions（是，删除应用程序限制）**。 ![删除确认按钮](/assets/images/help/settings/settings-third-party-confirm-disable.png)
