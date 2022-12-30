---
title: Autorizar o uso de uma chave SSH para uso com logon único SAML
intro: 'Para usar uma chave SSH com uma organização que usa logon único SAML (SSO), primeiramente, você deve autorizar a chave.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095808'
---
Você pode autorizar uma chave SSH existente ou criar uma e autorizá-la. Para obter mais informações sobre como criar uma chave SSH, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Observação:** se a autorização de chave SSH for revogada por uma organização, você não poderá autorizar a mesma chave novamente. Será preciso criar outra chave SSH e autorizá-la. Para obter mais informações sobre como criar uma chave SSH, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Ao lado da chave SSH que você deseja autorizar, clique em **Habilitar SSO** ou **Desabilitar SSO**.
![Botão de autorização do token SSO](/assets/images/help/settings/ssh-sso-button.png)
4. Encontre a organização para a qual deseja autorizar a chave SSH.
5. Clique em **Autorizar**.
![Botão de autorização do token](/assets/images/help/settings/ssh-sso-authorize.png)

## Leitura adicional

- "[Como verificar se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Sobre a autenticação com o logon único do SAML](/articles/about-authentication-with-saml-single-sign-on)"
