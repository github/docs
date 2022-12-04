---
title: Exibir e gerenciar sessões SAML ativas
intro: É possível exibir e revogar sessões SAML ativas nas configurações.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
ms.openlocfilehash: e69ad366de7cdfb14b6a2a13ae3bdc134111616a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165578'
---
Você pode exibir uma lista de dispositivos que efetuaram logon na sua conta e revogar todas as sessões SAML que não reconhecer.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Nas "Sessões da Web", você pode ver suas sessões SAML ativas.

   ![Captura de tela da lista de sessões SAML ativas](/assets/images/help/settings/saml-active-sessions.png)

1. Para ver os detalhes da sessão, clique em **Ver mais**.
   ![Captura de tela das sessões SAML ativas com o botão para abrir os detalhes da sessão SAML enfatizado](/assets/images/help/settings/saml-expand-session-details.png)

1. Para revogar uma sessão, clique em **Revogar SAML**.

   ![Captura de tela da página Detalhes da sessão com o botão para revogar a sessão SAML enfatizado](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Observação:** quando você revoga uma sessão, remove a autenticação do SAML para essa organização. Para acessar a organização novamente, você precisa fazer logon único por meio do provedor de identidade. Para obter mais informações, confira "[Sobre a autenticação com o SSO do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

## Leitura adicional

- "[Sobre a autenticação com o SSO do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
