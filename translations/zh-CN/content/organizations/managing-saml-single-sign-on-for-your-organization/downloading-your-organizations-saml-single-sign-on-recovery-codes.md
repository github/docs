---
title: 下载组织的 SAML 单点登录恢复代码
intro: '组织管理员应下载组织的 SAML 单点登录恢复代码，以确保即使组织的身份提供程序不可用，也可以访问 {% data variables.product.product_name %}。'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109428'
---
恢复代码不应共享或分发。 建议使用密码管理器（例如 [LastPass](https://lastpass.com/) 或 [1Password](https://1password.com/)）保存它们。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. 在“SAML 单一登录”下，在有关恢复代码的注释中，单击“保存恢复代码”。
![查看和保存恢复代码的链接](/assets/images/help/saml/saml_recovery_codes.png)
6. 单击“下载”、“打印”或“复制”，保存你的恢复代码  。
![下载、打印或复制恢复代码的按钮](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  注意：如果你的 IdP 不可用，恢复代码将帮助你返回 {% data variables.product.product_name %}。 如果生成新的恢复代码，“单点登录恢复代码”页面上显示的恢复代码会自动更新。

  {% endnote %}

7. 使用恢复代码重新获得 {% data variables.product.product_name %} 的访问权限后，无法重复使用该恢复代码。 对 {% data variables.product.product_name %} 的访问权限将仅在 24 小时内可用，之后系统会要求您使用单点登录进行登录。

## 延伸阅读

- [关于使用 SAML 单一登录进行的标识和访问管理](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [标识提供者不可用时访问组织](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)
