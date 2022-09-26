---
title: Alterar os métodos de entrega da autenticação de dois fatores em dispositivos móveis
intro: Você pode alternar entre receber códigos de notificação por meio de uma mensagem de texto ou um aplicativo móvel.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083585'
---
{% note %}

**Observação:** se você alterar o método principal da autenticação de dois fatores, isso invalidará a configuração atual da autenticação de dois fatores, incluindo os códigos de recuperação. Mantenha o seu novo conjunto de códigos de recuperação seguros. Mudar o seu método principal para autenticação de dois fatores não afeta sua configuração de SMS padrão, caso esteja configurado. Para obter mais informações, confira "[Como configurar métodos de recuperação da autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)".

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Ao lado de "Método de dois fatores primário", clique em **Alterar**.
  ![Editar opções de entrega primárias](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. Em "Opções de entrega", clique em **Reconfigurar a autenticação de dois fatores**.
    ![Opções de alternância da entrega de 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decida se deseja configurar a autenticação de dois fatores usando um app móvel TOTP ou uma mensagem de texto. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".
    - Para configurar a autenticação de dois fatores usando um aplicativo móvel TOTP, clique em **Configuração por meio de um aplicativo**.
    - Para configurar a autenticação de dois fatores usando um SMS (mensagem de texto), clique em **Configuração por meio de um SMS**.

## Leitura adicional

- "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Como configurar métodos de recuperação da autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
