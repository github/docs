---
title: 实施组织的 SAML 单点登录
intro: 组织所有者和管理员可以实施 SAML SSO，以便所有组织成员都必须通过身份提供程序 (IdP) 进行身份验证。
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145101338'
---
## 关于对组织实施 SAML SSO

启用 SAML SSO 时，{% data variables.product.prodname_dotcom %} 将提示访问 {% data variables.product.prodname_dotcom_the_website %} 上组织资源的成员使用 IdP 进行身份验证，IdP 会将成员的个人帐户链接到 IdP 上的身份。 成员在使用 IdP 进行身份验证之前仍然可以访问组织的资源。

![提示通过 SAML SSO 进行身份验证以访问组织的横幅](/assets/images/help/saml/sso-has-been-enabled.png)

您也可以对组织实施 SAML SSO。 {% data reusables.saml.when-you-enforce %} 实施会从组织中删除尚未通过 IdP 进行身份验证的任何成员和管理员。 {% data variables.product.company_short %} 将向每个被删除的用户发送电子邮件通知。 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} 如果用户在三个月内重新加入组织，则该用户的访问权限和设置将恢复。 有关详细信息，请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。

未在组织的 IdP 中设置外部身份的自动程序和服务帐户在执行 SAML SSO 时也将被删除。 有关机器人和服务帐户的详细信息，请参阅“[使用 SAML 单一登录管理机器人和服务帐户](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)”。

如果您的组织是企业帐户所拥有的， 要求企业帐户的 SAML 将会覆盖您的组织级 SAML 配置，并对企业中的每个组织强制执行 SAML SSO。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% tip %}

**提示：** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## 对组织实施 SAML SSO

1. 为您的组织启用并测试 SAML SSO，然后至少用您的 IdP 进行一次身份验证。 有关详细信息，请参阅“[为组织启用和测试 SAML 单一登录](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)”。
1. 准备对组织实施 SAML SSO。 有关详细信息，请参阅“[准备在组织中强制实施 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)”。
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“SAML 单一登录”下，选择“要求对 _ORGANIZATION_ 组织的所有成员进行 SAML SSO 身份验证”。
    ![“需要 SAML SSO 身份验证”复选框](/assets/images/help/saml/require-saml-sso-authentication.png)
1. 如有任何组织成员尚未通过您的 IdP 进行身份验证，则 {% data variables.product.company_short %} 会显示这些成员。 如果您强制执行 SAML SSO，{% data variables.product.company_short %} 将从组织中删除成员。 查看警告，单击“删除成员并要求 SAML 单一登录”。
    ![“确认 SAML SSO 实施”对话框，其中包含要从组织中删除的成员列表](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. 在“Single sign-on recovery codes（单点登录恢复代码）”下，查看您的恢复代码。 将恢复代码存储在安全位置，如密码管理器。

## 延伸阅读

- “[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”
