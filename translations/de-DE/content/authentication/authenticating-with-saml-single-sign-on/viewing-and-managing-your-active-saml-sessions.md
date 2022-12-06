---
title: Deine aktiven SAML-Sitzungen anzeigen und verwalten
intro: Du kannst deine aktiven SAML-Sitzungen in deinen Sicherheitseinstellungen anzeigen und widerrufen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165586'
---
Du kannst eine Liste der Geräte anzeigen, die sich bei deinem Konto angemeldet haben, und alle SAML-Sitzungen widerrufen, die du nicht erkennst.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Unter „Websitzungen“ kannst du deine aktiven SAML-Sitzungen anzeigen.

   ![Screenshot der Liste der aktiven SAML-Sitzungen](/assets/images/help/settings/saml-active-sessions.png)

1. Klicke auf **Weitere Informationen**, um die Sitzungsdetails anzuzeigen.
   ![Screenshot der aktiven SAML-Sitzungen mit hervorgehobener Schaltfläche zum Öffnen von SAML-Sitzungsdetails](/assets/images/help/settings/saml-expand-session-details.png)

1. Um eine Sitzung zu widerrufen, klicke auf **SAML widerrufen**.

   ![Screenshot der Seite „Sitzungsdetails“ mit hervorgehobener Schaltfläche zum Widerrufen einer SAML-Sitzung](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Hinweis:** Beim Widerrufen einer Sitzung entferne Deine SAML-Authentifizierung für diese Organisation. Zum erneuten Zugriff auf die Organisation musst Du Dich über Deinen Identitätsanbieter via Single Sign-On anmelden. Weitere Informationen findest Du unter „[Informationen zur Authentifizierung mit SAML- SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)“.

  {% endnote %}

## Weiterführende Themen

- „[Informationen zur Authentifizierung mit SAML-SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)“
