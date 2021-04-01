---
title: 对组织启用 OAuth App 访问限制
intro: '组织所有者可启用 {% data variables.product.prodname_oauth_app %} 访问限制，以便在组织成员在其个人账户上使用允许 {% data variables.product.prodname_oauth_app %} 的同时，防止不受信任的应用程序访问组织的资源。'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**警告**：
- 启用 {% data variables.product.prodname_oauth_app %} 访问限制将撤销对所有之前已授权 {% data variables.product.prodname_oauth_app %} 和 SSH 密钥的组织访问权限。 更多信息请参阅“[关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)”。
- 在设置 {% data variables.product.prodname_oauth_app %} 访问限制后，确保重新授权任何需要持续访问组织私有数据的 {% data variables.product.prodname_oauth_app %}。 所有组织成员将需要创建新的 SSH 密钥，并且组织将需要根据需要创建新的部署密钥。
- 启用 {% data variables.product.prodname_oauth_app %} 访问限制后，应用程序可以使用 OAuth 令牌访问有关 {% data variables.product.prodname_marketplace %} 事务的信息。

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. 在“Third-party application access policy”（第三方应用程序访问策略）下，单击 **Setup application access restrictions（设置应用程序访问限制）**。 ![设置限制按钮](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. 审查有关第三方访问限制的信息后，单击 **Restrict third-party application access（限制第三方应用程序访问）**。 ![限制确认按钮](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
