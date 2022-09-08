---
title: 将 Okta 组映射到团队
shortTitle: Map Okta groups to teams
intro: '可以将 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 上的团队，以自动添加和删除团队成员。'
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
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099027'
---
{% data reusables.saml.okta-ae-sso-beta %}

## 关于团队映射

如果使用 Okta 作为 IdP，则可以将 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 中的团队。 然后，Okta 组的成员将自动成为映射的 {% data variables.product.prodname_ghe_managed %} 团队的成员。 要配置此映射，可以将 Okta“GitHub AE”应用设置为将组及其成员推送到 {% data variables.product.prodname_ghe_managed %}。 然后，可以选择 {% data variables.product.prodname_ghe_managed %} 中的哪个团队将被映射到 Okta 组。

## 先决条件

你或你的 Okta 管理员必须是 Okta 中的全局管理员或特权角色管理员。
 
必须使用 Okta 启用 SAML 单一登录。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

你需要使用 SAML SSO 和 Okta 向企业帐户进行身份验证。 有关详细信息，请参阅“[通过 SAML 单一登录进行身份验证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)”。

## 将 Okta 组分配到“GitHub AE”应用

1. 在 Okta 仪表板中，打开组的设置。
1. 单击“管理应用”。
  ![将应用添加到组](/assets/images/help/saml/okta-ae-group-add-app.png)

1. 在“GitHub AE”右侧，单击“分配”。

  ![分配应用](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. 单击“Done”（完成） 。

## 将 Okta 组推送到 {% data variables.product.prodname_ghe_managed %}

将 Okta 组推送并映射到团队时，该组所有成员都将能够登录到 {% data variables.product.prodname_ghe_managed %}。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. 单击“推送组”。

  ![Push Groups（推送组）选项卡](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. 选择“推送组”下拉菜单，并单击“按名称查找组”。

  ![“添加组”按钮](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. 键入要推送到 {% data variables.product.prodname_ghe_managed %} 的组的名称，然后单击“保存”。

  ![添加组名称](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## 将团队映射到 Okta 组

可以将企业中的团队映射到以前推送到 {% data variables.product.prodname_ghe_managed %} 的 Okta 组。 然后，Okta 组的成员将自动成为 {% data variables.product.prodname_ghe_managed %} 团队的成员。 对 Okta 组成员身份的任何后续更改都会自动与 {% data variables.product.prodname_ghe_managed %} 团队同步。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. 在“标识提供者组”下，选择下拉菜单并单击标识提供者组。
    ![用于选择标识提供者组的下拉菜单](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. 单击“保存更改”。 

## 检查映射团队的状态

企业所有者可以使用站点管理员仪表板检查 Okta 组如何映射到 {% data variables.product.prodname_ghe_managed %} 上的团队。

1. 要访问仪表板，请在任意页面右上角单击 {% octicon "rocket" aria-label="The rocket ship" %}。
  ![显示访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. 在左窗格中，单击“外部组”。

  ![添加组名称](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. 要查看有关组的更多详细信息，请在外部组列表中单击一个组。

  ![外部组列表](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. 组的详细信息包括 Okta 组的名称、属于组成员的 Okta 用户列表以及 {% data variables.product.prodname_ghe_managed %} 上的相应映射团队。 

  ![外部组列表](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## 查看映射组的审核日志事件

 要监视映射组的 SSO 活动，可以在 {% data variables.product.prodname_ghe_managed %} 审核日志中查看以下事件。

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

有关详细信息，请参阅“[审查组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”。
