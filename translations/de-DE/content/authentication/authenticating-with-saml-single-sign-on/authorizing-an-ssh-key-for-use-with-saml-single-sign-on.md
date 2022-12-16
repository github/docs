---
title: Einen SSH-Schlüssel für die Verwendung mit SAML Single Sign-On autorisieren
intro: 'Um einen SSH-Schlüssel in einer Organisation zu verwenden, die SAML Single Sign-On (SSO) nutzt, musst Du den Schlüssel zunächst autorisieren.'
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
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147854283'
---
Du kannst einen vorhandenen SSH-Schlüssel autorisieren oder einen neuen SSH-Schlüssel erstellen und ihn anschließend autorisieren. Weitere Informationen zum Erstellen eines neuen SSH-Schlüssels findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Hinweis:** Wenn deine Autorisierung des SSH-Schlüssels von einer Organisation aufgehoben wird, kannst du denselben Schlüssel nicht erneut autorisieren. Du musst stattdessen einen neuen SSH-Schlüssel erstellen und ihn autorisieren. Weitere Informationen zum Erstellen eines neuen SSH-Schlüssels findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. Klicke rechts neben dem SSH-Schlüssel, den du autorisieren möchtest, auf **SSO konfigurieren**.

   ![Screenshot der Schaltfläche zum Autorisieren des SSO-Tokens](/assets/images/help/settings/ssh-sso-button.png)
1. Klicke rechts neben der Organisation, für die du den SSH-Schlüssel autorisieren möchtest, auf **Autorisieren**.

   ![Screenshot der Schaltfläche zum Autorisieren des Tokens](/assets/images/help/settings/ssh-sso-authorize.png)

## Weiterführende Themen

- [Auf vorhandene SSH-Schlüssel prüfen](/articles/checking-for-existing-ssh-keys)
- [Informationen zur Authentifizierung mit SAML Single Sign-On](/articles/about-authentication-with-saml-single-sign-on)
