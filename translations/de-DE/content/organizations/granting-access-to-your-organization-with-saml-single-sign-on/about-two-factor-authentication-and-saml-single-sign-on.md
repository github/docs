---
title: Informationen zur Zwei-Faktor-Authentifizierung und zu SAML Single-Sign-On
intro: 'Administratoren von Organisationen können sowohl SAML Single-Sign-On als auch die Zwei-Faktor-Authentifizierung aktivieren, um zusätzliche Authentifizierungsmaßnahmen für ihre Organisationsmitglieder hinzuzufügen.'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130850'
---
Die Zwei-Faktor-Authentifizierung (2FA) bietet die grundlegende Authentifizierung für Organisationsmitglieder. Durch die Aktivierung der zweistufigen Authentifizierung begrenzen Organisationsadministratoren die Wahrscheinlichkeit, dass das {% data variables.product.product_location %}-Konto eines Mitglieds kompromittiert werden könnte. Weitere Informationen zur zweistufigen Authentifizierung findest du unter [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication).

Um zusätzliche Authentifizierungsmaßnahmen hinzuzufügen, können Organisationsadministratoren auch [SAML Single Sign-On (SSO) aktivieren](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), sodass Organisationsmitglieder einmaliges Anmelden für den Zugriff auf eine Organisation verwenden müssen. Weitere Informationen zu SAML SSO findest du unter [Informationen zum Identitäts- und Zugriffsmanagement mit SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on).

Wenn sowohl die Zwei-Faktor-Authentifizierung als auch SAML SSO aktiviert sind, müssen Organisationsmitglieder wie folgt vorgehen:
- Verwenden der zweistufigen Authentifizierung zum Anmelden bei ihrem {% data variables.product.product_location %}-Konto
- Mit Single Sign-On auf die Organisation zugreifen
- Ein autorisiertes Token für den API- oder Git-Zugriff verwenden und Single-Sign-On zur Autorisierung des Tokens verwenden

## Weiterführende Themen

- [Erzwingen der einmaligen SAML-Anmeldens für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization)
