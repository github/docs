---
title: Bots und Dienstkonten mit SAML Single Sign-On verwalten
intro: 'Organisationen, für die SAML Single-Sign-On aktiviert ist, können den Zugriff von Bots und Dienstkonten beibehalten.'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130845'
---
Um Zugriff auf Bots und Dienstkonten zu behalten, können Organisationsadministratoren das SAML Single Sign-On für ihre Organisation [aktivieren](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), aber **nicht** [erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization). Wenn Du SAML Single Sign-On für Deine Organisation erzwingen musst, kannst Du eine externe Identität für den Bot oder das Dienstkonto bei Deinem Identitätsanbieter (IdP) erstellen.

{% warning %}

**Hinweis:** Wenn Du SAML Single Sign-On für Deine Organisation erzwingst und **keine** externe Identitäten für Bots und Dienstkonten bei Deine IdP eingerichtet hast, werden die Bots und Dienstkonten aus Deiner Organisation entfernt.

{% endwarning %}

## Weitere Informationsquellen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
