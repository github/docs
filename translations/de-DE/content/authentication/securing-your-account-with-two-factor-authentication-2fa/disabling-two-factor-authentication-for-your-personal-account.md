---
title: Zwei-Faktor-Authentifizierung für Ihr persönliches Konto deaktivieren
intro: 'Wenn Du die Zwei-Faktor-Authentifizierung (2FA) für Dein persönliches Konto deaktivierst, verlierst Du möglicherweise den Zugriff auf Organisationen, denen Du angehörst.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085923'
---
Wir empfehlen dringend, Dein Konto mit der Zwei-Faktor-Authentifizierung zu schützen. Wenn Du die 2FA deaktivieren musst, empfehlen wir, sie so bald wie möglich wieder zu aktivieren.

{% warning %}

**Warnung:** Wenn du ein Mitglied{% ifversion fpt or ghec %}, Abrechnungsmanager{% endif %} oder externer Mitarbeiter eines öffentlichen Repositorys einer Organisation bist, die die zweistufige Authentifizierung voraussetzt, und du die zweistufige Authentifizierung deaktivierst, wirst du automatisch aus der Organisation entfernt und verlierst den Zugriff auf deren Repositorys. Um wieder auf die Organisation zugreifen zu können, aktiviere die Zwei-Faktor-Authentifizierung erneut und wende Dich an einen Organisationsinhaber.

{% endwarning %}

Wenn Deine Organisation die Zwei-Faktor-Authentifizierung voraussetzt und Du ein Mitglied, Inhaber oder externer Mitarbeiter bei einem privaten Repository Deiner Organisation bist, musst Du die Organisation zunächst verlassen, bevor Du die Zwei-Faktor-Authentifizierung deaktivieren kannst.

So entfernst Du Dich selbst aus Deiner Organisation:
 - Als Organisationsmitglied oder -besitzer findest du entsprechende Informationen unter [Sich selbst aus einer Organisation entfernen](/articles/removing-yourself-from-an-organization/).
 - Als externer Mitarbeiter bitte einen Organisationsinhaber oder Repository-Administrator, Dich aus den Repositorys der Organisation zu entfernen. Weitere Informationen findest du unter [Anzeigen der Rollen von Personen in einer Organisation](/articles/viewing-people-s-roles-in-an-organization) und [Entfernen eines externen Mitarbeiters aus einem Organisationsrepository](/articles/removing-an-outside-collaborator-from-an-organization-repository/).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Klicke auf **Deaktivieren**.
  ![Schaltfläche „Deaktivieren der zweistufigen Authentifizierung“](/assets/images/help/2fa/disable-two-factor-authentication.png)

## Weiterführende Themen

- [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication)
- [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication)
- [Konfigurieren der Wiederherstellungsmethoden bei der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication-recovery-methods)
