---
title: Exibir e gerenciar sessões SAML ativas
intro: É possível exibir e revogar sessões SAML ativas nas configurações de segurança.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: Active SAML sessions
ms.openlocfilehash: ee30f76143ec28a810cd23150d115a3b1cd213c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095806'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Em "Sessões", você pode ver suas sessões ativas do SAML.
   ![Lista de sessões ativas do SAML](/assets/images/help/settings/saml-active-sessions.png)
4. Para ver os detalhes da sessão, clique em **Ver mais**.
   ![Botão usado para abrir os detalhes da sessão do SAML](/assets/images/help/settings/saml-expand-session-details.png)
5. Para revogar uma sessão, clique em **Revogar SAML**.
   ![Botão usado para revogar uma sessão do SAML](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Observação:** quando você revoga uma sessão, remove a autenticação do SAML para essa organização. Para acessar a organização novamente, você precisa fazer logon único por meio do provedor de identidade. Para obter mais informações, confira "[Sobre a autenticação com o SSO do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

## Leitura adicional

- "[Sobre a autenticação com o SSO do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
