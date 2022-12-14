---
title: Autorisation d’un jeton d’accès personnel à utiliser avec l’authentification unique SAML
intro: 'Pour utiliser un jeton d’accès personnel avec une organisation qui utilise l’authentification unique SAML, vous devez d’abord autoriser le jeton.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104690'
---
Vous pouvez autoriser un jeton d’accès personnel existant ou [créer un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token), puis l’autoriser.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. En regard du jeton que vous souhaitez autoriser, cliquez sur **Configurer l’authentification unique**.
   ![Capture d’écran du menu déroulant permettant de configurer l’authentification unique pour un jeton d’accès personnel](/assets/images/help/settings/sso-allowlist-button.png)
4. À droite de l’organisation pour laquelle vous souhaitez autoriser le jeton, cliquez sur **Autoriser**.
   ![Bouton d’autorisation de jeton](/assets/images/help/settings/token-authorize-button.png)

## Pour aller plus loin

- « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) »
- « [À propos de l’authentification à l’aide de l’authentification unique SAML](/articles/about-authentication-with-saml-single-sign-on) »
