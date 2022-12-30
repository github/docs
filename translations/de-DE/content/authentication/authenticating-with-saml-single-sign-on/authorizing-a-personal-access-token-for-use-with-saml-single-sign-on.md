---
title: Ein persönliches Zugriffstoken für die Verwendung mit SAML Single Sign-On autorisieren
intro: 'Um ein persönliches Zugriffstoken in einer Organisation zu verwenden, die SAML Single Sign-On (SSO) nutzt, musst Du zunächst das Token autorisieren.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104691'
---
Du kannst ein vorhandenes persönliches Zugriffstoken autorisieren oder [ein neues persönliches Zugriffstoken erstellen](/github/authenticating-to-github/creating-a-personal-access-token) und dann autorisieren.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. Klicke neben dem Token, das Du autorisieren möchtest, auf **SSO konfigurieren**.
   ![Screenshot des Dropdownmenüs zum Konfigurieren von SSO für ein persönliches Zugriffstoken](/assets/images/help/settings/sso-allowlist-button.png)
4. Klicke rechts neben der Organisation, für die Du das Token autorisieren möchtest, auf **Autorisieren**.
   ![Schaltfläche „Token autorisieren“](/assets/images/help/settings/token-authorize-button.png)

## Weiterführende Themen

- [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)
- [Informationen zur Authentifizierung mit SAML Single Sign-On](/articles/about-authentication-with-saml-single-sign-on)
