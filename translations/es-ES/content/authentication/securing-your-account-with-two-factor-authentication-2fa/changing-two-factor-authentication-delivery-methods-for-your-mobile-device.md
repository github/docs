---
title: Cambiar los métodos de entrega de autenticación de dos factores para tu dispositivo móvil
intro: Puedes alternar entre la recepción de código de autenticación a través de un mensaje de texto o una aplicación móvil.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091775'
---
{% note %}

**Nota**: Cambiar su método principal para una autenticación en dos fases invalida su configuración actual de autenticación en dos fases, incluidos sus códigos de recuperación. Mantén seguro tu conjunto de códigos de recuperación nuevo. El cambiar tu método principal de autenticación bifactorial no afecta tu configuración de recuperación por SMS, en caso de que la hayas configurado. Para obtener más información, vea "[Métodos de recuperación de la configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)".

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Junto a "Método principal en dos fases", haz clic en **Cambiar**.
  ![Editar opciones de entrega principal](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. En "Delivery options" (Opciones de entrega), haga clic en **Reconfigure two-factor authentication** (Volver a configurar la autenticación en dos fases).
    ![Cambiar las opciones de entrega de autenticación en dos fases](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decide si deseas configurar la autenticación de dos factores mediante una app móvil TOTP o un mensaje de texto. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)".
    - Para configurar la autenticación de dos factores mediante una aplicación móvil TOTP, haga clic en **Set up using an app** (Configurar mediante una aplicación).
    - Para configurar la autenticación de dos factores mediante un mensaje de texto (SMS), haga clic en **Set up using SMS** (Configurar mediante SMS).

## Información adicional

- "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)"
- "[Configuración de los métodos de recuperación de la autenticación en dos fases](/articles/configuring-two-factor-authentication-recovery-methods)"
