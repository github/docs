---
title: 将 Okta 组映射到团队
shortTitle: 将 Okta 组映射到团队
intro: '您可以将 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 上的团队，以自动添加和删除团队成员。'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

{% data reusables.saml.okta-ae-sso-beta %}

## 关于团队映射

如果您使用 Okta 作为您的 IdP，则可以将 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 中的团队。 Okta 组的成员将自动成为映射的 {% data variables.product.prodname_ghe_managed %} 组的成员。 要配置此映射，您可以配置 Okta "GitHub AE" 应用，以将组及其成员推送到 {% data variables.product.prodname_ghe_managed %}。 然后，您可以选择 {% data variables.product.prodname_ghe_managed %} 中的哪个团队将映射到 Okta 组。

## 基本要求

您或您的 Okta 管理员必须是 Okta 中的全局管理员或特权角色管理员。

您必须使用 Okta 启用 SAML 单点登录。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

您必须使用 SAML SSO 和 Okta 对企业帐户进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)”。

## 将 Okta 组分配给 "GitHub AE" 应用

1. 在 Okta 仪表板中，打开组的设置。
1. 单击 **Manage Apps（管理应用）**。 ![将组添加到应用](/assets/images/help/saml/okta-ae-group-add-app.png)

1. 在 "GitHub AE" 的右侧，单击 **Assign（分配）**。

  ![分配应用](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. 单击 **Done（完成）**。

## 将 Octa 组推送到 {% data variables.product.prodname_ghe_managed %}

当您推送 Okta 组并将该组映射到团队时，该组的所有成员都能够登录到 {% data variables.product.prodname_ghe_managed %}。

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. 单击 **Push Groups（推送组）**。

  ![Push Groups（推送组）选项卡](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. 选择 Push Groups（推送组）下拉菜单，然后单击 **Find groups by name（按名称查找组）**。

  ![添加组按钮](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. 键入要推送到 {% data variables.product.prodname_ghe_managed %} 的组的名称，然后单击 **Save（保存）**。

  ![添加组名称](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## 将团队映射到 Okta 组

您可以将企业中的团队映射到之前推送到 {% data variables.product.prodname_ghe_managed %} 的 Okta 组。 然后，Okta 组的成员将自动成为 {% data variables.product.prodname_ghe_managed %} 组的成员。 对 Okta 组成员身份的任何后续更改都将自动与 {% data variables.product.prodname_ghe_managed %} 团队同步。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. 在“Identity Provider Group（身份提供程序组）”下，选择下拉菜单，然后单击身份提供程序组。 ![用于选择身份提供程序组的下拉菜单](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. 单击 **Save changes（保存更改）**。

## 检查映射团队的状态

企业所有者可以使用站点管理仪表板来检查 Okta 组如何映射到 {% data variables.product.prodname_ghe_managed %} 上的团队。

1. 要访问仪表板，请在任意页面的右上角中单击 {% octicon "rocket" aria-label="The rocket ship" %}。 ![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. 在左窗格中，单击 **External groups（外部组）**。

  ![添加组名称](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. 要查看有关组的更多详细信息，请在外部组列表中，单击某个组。

  ![外部组列表](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. 组的详细信息包括 Okta 组的名称、作为该组成员的 Okta 用户的列表以及 {% data variables.product.prodname_ghe_managed %} 上相应的映射团队。

  ![外部组列表](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## 查看已映射组的审核日志事件

 要监控映射组的 SSO 活动，可以在 {% data variables.product.prodname_ghe_managed %} 审核日志中查看以下事件。

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

更多信息请参阅“[查看组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”。
