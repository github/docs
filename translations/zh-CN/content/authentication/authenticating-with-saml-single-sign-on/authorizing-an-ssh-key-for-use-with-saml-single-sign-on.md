---
title: 授权用于 SAML 单点登录的 SSH 密钥
intro: 要将 SSH 密钥用于使用 SAML 单点登录 (SSO) 的组织，必须先授权该密钥。
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: 11df62f1a4adc5a0de1f54efbccafe71ad0feb83
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099902'
---
您可以授权现有 SSH 密钥，或者创建新 SSH 密钥后再授权。 有关创建新的 SSH 密钥的详细信息，请参阅“[生成新 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

注意：如果你的 SSH 密钥授权被组织撤销，你将无法再授权该密钥。 此时您需要创建新 SSH 密钥并授权。 有关创建新的 SSH 密钥的详细信息，请参阅“[生成新 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. 在要授权的 SSH 密钥旁边，单击“启用 SSO”或“禁用 SSO” 。
![SSO 令牌授权按钮](/assets/images/help/settings/ssh-sso-button.png)
4. 找到要为其授权访 SSH 密钥的组织。
5. 单击“授权”。
![令牌授权按钮](/assets/images/help/settings/ssh-sso-authorize.png)

## 延伸阅读

- “[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)”
- “[关于使用 SAML 单一登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)”
