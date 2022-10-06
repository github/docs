---
title: Acerca de la autenticación de dos factores y el inicio de sesión único de SAML
intro: Los administradores de las organizaciones pueden activar tanto el inicio de sesión único de SAML como la autenticación de dos factores para agregar medidas de autenticación adicionales para sus miembros de la organización.
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: 1dc8eff35906a5f2c59f097d3bf53482547bd1f5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135186'
---
La autenticación de dos factores (2FA) ofrece una autenticación básica para los miembros de la organización. Al habilitar la 2FA, los administradores de la organización limitan la probabilidad de que una cuenta de un miembro en {% data variables.product.product_location %} pudiera ponerse en riesgo. Para más información sobre la autenticación en dos fases, vea "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)".

Para agregar medidas de autenticación adicionales, los administradores de la organización también pueden [habilitar el inicio de sesión único (SSO) de SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), de modo que los miembros de la organización tengan que usar el inicio de sesión único para acceder a una organización. Para más información sobre el SSO de SAML, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)".

Si tanto la 2FA como SAML SSO están activados, los miembros de la organización deben hacer lo siguiente:
- Utilizar la 2FA para iniciar sesión en su cuenta en {% data variables.product.product_location %}
- Usar el inicio de sesión único para acceder a la organización.
- Usar un token autorizado para el acceso a Git o a la API y usar el inicio de sesión único para autorizar el token.

## Información adicional

- "[Aplicación del inicio de sesión único de SAML para la organización](/articles/enforcing-saml-single-sign-on-for-your-organization)"
