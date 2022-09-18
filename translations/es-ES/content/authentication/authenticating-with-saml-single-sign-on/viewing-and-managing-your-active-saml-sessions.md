---
title: Ver y administrar tus sesiones de SAML activas
intro: Puedes ver y revocar tus sesiones de SAML activas en tus parámetros de seguridad.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120033'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Debajo de "Sesiones" puedes ver tus sesiones activas de SAML.
   ![Lista de sesiones de SAML activas](/assets/images/help/settings/saml-active-sessions.png)
4. Para ver los detalles de la sesión, haga clic en **See more** (Ver más).
   ![Botón para ver los detalles de una sesión de SAML](/assets/images/help/settings/saml-expand-session-details.png)
5. Para revocar una sesión, haga clic en **Revoke SAML** (Revocar SAML).
   ![Botón para revocar una sesión de SAML](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Nota:** Cuando revoca una sesión, quita su autenticación de SAML para esa organización. Para volver a acceder a la organización, tendrás que hacer un inicio de sesión único a través de tu proveedor de identidad. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

## Información adicional

- "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
