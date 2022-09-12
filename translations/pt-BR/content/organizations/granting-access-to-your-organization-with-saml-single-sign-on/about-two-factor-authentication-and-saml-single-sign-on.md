---
title: Sobre a autenticação de dois fatores e o SAML de logon único
intro: Os administradores da organização podem habilitar o SAML de logon único e a autenticação de dois fatores para adicionar medidas extras de autenticação para os integrantes da organização.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126518'
---
A autenticação de dois fatores (2FA, Two-Factor Authentication) fornece autenticação básica para integrantes da organização. Ao habilitar a 2FA, os administradores da organização limitam a probabilidade de que a conta de um integrante em {% data variables.product.product_location %} possa ser comprometida. Para obter mais informações sobre a 2FA, confira "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)".

Para adicionar outras medidas de autenticação, os administradores da organização também podem [habilitar o SSO (logon único) do SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) para que os membros da organização precisem usar o logon único para acessar uma organização. Para obter mais informações sobre o SSO do SAML, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)".

Se a 2FA e o SAML SSO forem habilitados, os integrantes da organização deverão fazer o seguinte:
- Use a 2FA para efetuar o login na sua conta em {% data variables.product.product_location %}
- Usar o logon único para acessar a organização
- Usar um token autorizado para acesso por API ou Git e usar logon único para autorizar o token

## Leitura adicional

- "[Como impor o logon único do SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)"
