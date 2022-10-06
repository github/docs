---
title: Inviting users to join your organization（邀请用户加入你的组织）
intro: '您可以使用任何人的 {% data variables.product.product_location %} 用户名或电子邮件地址邀请他们成为您组织的成员。'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: f0b5d1c41fc5f348077a77d29ac4be309c1cad0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145097336'
---
## 关于组织邀请

如果您的组织采用付费的每用户订阅，则必须有未使用的许可才可邀请新成员加入组织或恢复前组织成员。 有关详细信息，请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。 

{% data reusables.organizations.org-invite-scim %}

如果您的组织要求成员使用双重身份验证，则您邀请的用户在接受邀请之前必须启用双重身份验证。 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”和“[使用双因素身份验证 (2FA) 保护帐户](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”。

{% ifversion fpt %}使用 {% data variables.product.prodname_ghe_cloud %}{% else %}您{% endif %} 的组织可以实施 SCIM，以添加、管理和删除组织成员通过身份提供商 (IdP) 对 {% data variables.product.prodname_dotcom_the_website %} 的访问权限。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于组织的 SCIM](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %}”。{% else %}."{% endif %}

## 邀请用户加入您的组织

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## 延伸阅读
- “[将组织成员添加到团队](/articles/adding-organization-members-to-a-team)”
