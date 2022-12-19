---
title: Autorisation d’une clé SSH pour l’utiliser avec l’authentification unique SAML
intro: 'Pour utiliser une clé SSH avec une organisation qui utilise l’authentification unique SAML, vous devez d’abord autoriser la clé.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: f4b11c123c01d56263de883cbdd0f87c48eee04b
ms.sourcegitcommit: c0ac2ca826e2bb2e9355b57c2fd9b334d8f63b67
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/06/2022
ms.locfileid: '147854282'
---
Vous pouvez autoriser une clé SSH existante ou créer une clé SSH, puis l’autoriser. Pour plus d’informations sur la création d’une clé SSH, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Remarque :** Si l’autorisation de votre clé SSH est révoquée par une organisation, vous ne pouvez pas réautoriser la même clé. Vous devez créer une nouvelle clé SSH et l’autoriser. Pour plus d’informations sur la création d’une clé SSH, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. À droite de la clé SSH que vous souhaitez autoriser, cliquez sur **Configurer l’authentification unique**.

   ![Capture d’écran du bouton d’autorisation de jeton SSO](/assets/images/help/settings/ssh-sso-button.png)
1. À droite de l’organisation pour laquelle vous souhaitez autoriser la clé SSH, cliquez sur **Autoriser**.

   ![Capture d’écran du bouton d’autorisation de jeton](/assets/images/help/settings/ssh-sso-authorize.png)

## Pour aller plus loin

- « [Vérification des clés SSH existantes](/articles/checking-for-existing-ssh-keys) »
- « [À propos de l’authentification à l’aide de l’authentification unique SAML](/articles/about-authentication-with-saml-single-sign-on) »
