---
title: Ver y administrar tus sesiones de SAML activas
intro: Puedes ver y revocar tus sesiones de SAML activas en configuración.
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165595'
---
Puedes ver una lista de dispositivos que han iniciado sesión en tu cuenta y revocar las sesiones de SAML que no reconozcas.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Debajo de "Sesiones web" puedes ver tus sesiones de SAML activas.

   ![Captura de pantalla de la lista de sesiones de SAML activas](/assets/images/help/settings/saml-active-sessions.png)

1. Para ver los detalles de la sesión, haga clic en **See more** (Ver más).
   ![Captura de pantalla de las sesiones de SAML activas con el botón para abrir los detalles de la sesión de SAML resaltado](/assets/images/help/settings/saml-expand-session-details.png)

1. Para revocar una sesión, haga clic en **Revoke SAML** (Revocar SAML).

   ![Captura de pantalla de la página Detalles de la sesión con el botón para revocar una sesión de SAML resaltado](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Nota:** Cuando revoca una sesión, quita su autenticación de SAML para esa organización. Para volver a acceder a la organización, tendrás que hacer un inicio de sesión único a través de tu proveedor de identidad. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

## Información adicional

- "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
