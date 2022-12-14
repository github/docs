---
title: Deine E-Mail-Adresse verifizieren
intro: 'Das Verifizieren deiner primären E-Mail-Adresse gewährleistet eine bessere Sicherheit, ermöglicht dem {% data variables.product.prodname_dotcom %}-Personal, dich besser zu unterstützen, falls du dein Passwort vergessen hast, und ermöglicht Ihnen den Zugriff auf weitere Features auf {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 75c455907ab0cc89f1ba8b30d6fa1d37f2d9798f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125802'
---
## Informationen zur E-Mail-Verifizierung

Du kannst Deine E-Mail-Adresse verifizieren, nachdem Du ein neues Konto registriert hast, oder wenn Du eine neue E-Mail-Adresse hinzufügst. Wenn es nicht möglich ist, E-Mails an eine E-Mail-Adresse zuzustellen, wird sie nicht bestätigt.

Wenn Du Deine E-Mail-Adresse nicht verifizierst, bist Du nicht in der Lage:
  - Repositorys zu erstellen oder zu forken,
  - Issues oder Pull Requests zu erstellen,
  - Issues, Pull Requests oder Commits zu kommentieren,
  - {% data variables.product.prodname_oauth_app %}-Anwendungen zu autorisieren,
  - persönliche Zugriffstoken zu generieren,
  - Empfangen von E-Mail-Benachrichtigungen
  - Repositorys mit Sternen zu bewerten,
  - Projektboards zu erstellen oder zu aktualisieren, einschließlich des Hinzufügens von Karten,
  - Gists zu erstellen oder zu aktualisieren,
  - {% data variables.product.prodname_actions %} zu erstellen oder zu verwenden.
  - Entwickler mit {% data variables.product.prodname_sponsors %} zu unterstützen

{% warning %}

**Warnungen**:

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## Deine E-Mail-Adresse verifizieren

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. Klicke unter deiner E-Mail-Adresse auf **Resend verification email**.
  ![Resend verification email](/assets/images/help/settings/email-verify-button.png)-Link
4. {% data variables.product.prodname_dotcom %} sendet Dir eine E-Mail mit einem darin enthaltenen Link. Nach dem Klicken auf den Link gelangst du zu deinem {% data variables.product.prodname_dotcom %}-Dashboard und siehst ein Bestätigungsbanner.
  ![Banner mit der Bestätigung, dass deine E-Mail-Adresse verifiziert wurde](/assets/images/help/settings/email-verification-confirmation-banner.png)

## Fehlerbehebung bei der E-Mail-Verifizierung

### Fehler beim Senden der Verifizierungs-E-Mail

{% data reusables.user-settings.no-verification-disposable-emails %}

### Fehlerseite nach dem Klicken auf den Verifizierungslink

Der Verifizierungslink läuft nach 24 Stunden ab. Wenn Du Deine E-Mail-Adresse nicht innerhalb von 24 Stunden verifizierst, kannst Du einen weiteren Link zur Verifizierung der E-Mail anfordern. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address).

Wenn du innerhalb von 24 Stunden auf den Link in der Bestätigungs-E-Mail klickst und auf eine Fehlerseite weitergeleitet wirst, solltest du sicherstellen, dass du dich beim richtigen Konto auf {% data variables.product.product_location %} angemeldet hast.

1. {% data variables.product.signout_link %} deines persönlichen Kontos auf {% data variables.product.product_location %}.
2. Beende Deinen Browser, und starte ihn neu.
3. {% data variables.product.signin_link %} deines persönlichen Kontos auf {% data variables.product.product_location %}.
4. Klicke auf den Verifizierungslink in der E-Mail, die wir Dir gesendet haben.

## Weiterführende Themen

- [Deine primäre E-Mail-Adresse ändern](/articles/changing-your-primary-email-address)
