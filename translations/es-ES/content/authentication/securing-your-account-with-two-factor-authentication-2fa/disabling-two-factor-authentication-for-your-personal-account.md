---
title: Inhabilitar la autenticación de dos factores para tu cuenta personal
intro: 'Si inhabilitas la autenticación de dos factores para tu cuenta personal, puedes perder acceso a las organizaciones a las que perteneces.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091764'
---
Te recomendamos encarecidamente que uses la autenticación de dos factores para proteger tu cuenta. Si necesitas inhabilitar la autenticación de dos factores, te recomendamos habilitarla nuevamente lo antes posible.

{% warning %}

**Advertencia:** Si es miembro{% ifversion fpt or ghec %}, administrador de facturación{% endif %} o colaborador externo de un repositorio público de una organización que requiere la autenticación en dos fases y la deshabilita, se le quitará automáticamente de la organización y perderá el acceso a sus repositorios. Para volver a obtener acceso a la organización, habilita nuevamente la autenticación de dos factores y comunícate con un propietario de la organización.

{% endwarning %}

Si tu organización requiere autenticación de dos factores y eres un miembro, propietario o colaborador externo de un repositorio privado de tu organización, primero debes abandonar la organización para poder inhabilitar la autenticación de dos factores.

Para eliminarte a ti mismo de la organización:
 - Como miembro o propietario de la organización, consulte "[Eliminación de uno mismo de una organización](/articles/removing-yourself-from-an-organization/)".
 - Como colaborador externo, solicita a un propietario de la organización o administrador de un repositorio que te elimine de los repositorios de la organización. Para obtener más información, vea "[Visualización de los roles de las personas en una organización](/articles/viewing-people-s-roles-in-an-organization)" y "[Eliminación de un colaborador externo de un repositorio de la organización](/articles/removing-an-outside-collaborator-from-an-organization-repository/)".

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Haga clic en **Deshabilitar**.
  ![Botón para deshabilitar la autenticación en dos fases](/assets/images/help/2fa/disable-two-factor-authentication.png)

## Información adicional

- "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)"
- "[Configuración de la autenticación en dos fases](/articles/configuring-two-factor-authentication)"
- "[Configuración de los métodos de recuperación de la autenticación en dos fases](/articles/configuring-two-factor-authentication-recovery-methods)"
