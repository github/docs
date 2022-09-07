---
title: 关于双重身份验证和 SAML 单点登录
intro: 组织管理员可启用 SAML 单点登录及双重身份验证，为其组织成员增加额外的身份验证措施。
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: 1dc8eff35906a5f2c59f097d3bf53482547bd1f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127540'
---
双重身份验证 (2FA) 为组织成员提供基本验证。 通过启用 2FA，组织管理员可降低 {% data variables.product.product_location %} 上成员的帐户被盗的可能性。 有关 2FA 的详细信息，请参阅“[关于双重身份验证](/articles/about-two-factor-authentication)”。

若要添加其他身份验证措施，组织管理员也可以[启用 SAML 单一登录 (SSO)](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)，组织成员必须使用单一登录才能访问组织。 有关 SAML SSO 的详细信息，请参阅“[关于使用 SAML 单一登录进行标识和访问管理](/articles/about-identity-and-access-management-with-saml-single-sign-on)”。

如果同时启用了 2FA 和 SAML SSO，组织成员必须执行以下操作：
- 使用 2FA 登录其在 {% data variables.product.product_location %} 上的帐户
- 使用单点登录访问组织
- 使用授权用于 API 或 Git 访问的令牌，并使用单点登录授权令牌

## 延伸阅读

- [为组织强制执行 SAML 单一登录](/articles/enforcing-saml-single-sign-on-for-your-organization)
