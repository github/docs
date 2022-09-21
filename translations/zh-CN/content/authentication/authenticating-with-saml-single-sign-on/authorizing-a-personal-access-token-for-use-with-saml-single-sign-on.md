---
title: 授权用于 SAML 单点登录的个人访问令牌
intro: 要将个人访问令牌用于使用 SAML 单点登录 (SSO) 的组织，必须先授权该令牌。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT with SAML
ms.openlocfilehash: a6e1d4c2e1fa5cf1f4738e06127c5e7875a2ef5d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098940'
---
可以授权现有的个人访问令牌，也可以[创建新的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)然后对其进行授权。

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. 在要授权的令牌旁边，单击“配置 SSO”。
   ![用于为个人访问令牌配置 SSO 的下拉菜单的屏幕截图](/assets/images/help/settings/sso-allowlist-button.png)
4. 在要为其授权令牌的组织右侧，单击“授权”。
   ![令牌授权按钮](/assets/images/help/settings/token-authorize-button.png)

## 延伸阅读

- [创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)
- [关于使用 SAML 单一登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)
