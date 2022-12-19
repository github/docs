---
title: Desabilitar autenticação de dois fatores da sua conta pessoal
intro: 'Se você desabilitar a autenticação de dois fatores da sua conta pessoal, poderá perder o acesso às organizações a que pertence.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083574'
---
É altamente recomendável usar a autenticação de dois fatores para proteger sua conta. Caso você precise desabilitar a 2FA, torne a habilitá-la o mais rápido possível.

{% warning %}

**Aviso:** se você for membro{% ifversion fpt or ghec %}, gerente de cobrança,{% endif %} ou colaborador externo em um repositório público de uma organização que exija a autenticação de dois fatores e desabilitar a 2FA, será removido automaticamente da organização e perderá o acesso aos repositórios. Para recuperar o acesso à organização, torne a habilitar a autenticação de dois fatores e entre em contato com um proprietário da organização.

{% endwarning %}

Caso a sua organização requeira autenticação de dois fatores e você seja integrante, proprietário ou colaborador externo em um repositório público da organização, primeiro saia dela para poder desabilitar a autenticação de dois fatores.

Para remover a si mesmo da organização:
 - Como membro ou proprietário da organização, confira "[Como remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)".
 - Como colaborador externo, peça ao administrador de repositório ou proprietário da organização para remover você dos repositórios dela. Para obter mais informações, confira "[Como ver as funções das pessoas em uma organização](/articles/viewing-people-s-roles-in-an-organization)" e "[Como remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository/)".

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Clique em **Desabilitar**.
  ![Botão Desabilitar a autenticação de dois fatores](/assets/images/help/2fa/disable-two-factor-authentication.png)

## Leitura adicional

- "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)"
- "[Como configurar métodos de recuperação da autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
