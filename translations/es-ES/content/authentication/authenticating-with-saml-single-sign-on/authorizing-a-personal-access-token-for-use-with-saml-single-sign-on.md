---
title: Autorizar un token de acceso personal para usar con un inicio de sesión único de SAML
intro: 'Para usar un token de acceso personal con una organización que usa el inicio de sesión único de SAML (SSO), primer debes autorizar el token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT with SAML
ms.openlocfilehash: a6e1d4c2e1fa5cf1f4738e06127c5e7875a2ef5d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116193'
---
Puede autorizar un token de acceso personal existente o [crear uno](/github/authenticating-to-github/creating-a-personal-access-token) y, después, darle autorización.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. Junto al token que quiere autorizar, haga clic en **Configure SSO** (Configurar inicio de sesión único).
   ![Captura de pantalla del menú desplegable para configurar el SSO para un token de acceso personal](/assets/images/help/settings/sso-allowlist-button.png)
4. A la derecha de la organización para la que le gustaría autorizar el token, haga clic en **Authorize** (Autorizar).
   ![Botón para autorizar el token](/assets/images/help/settings/token-authorize-button.png)

## Información adicional

- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
