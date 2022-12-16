---
title: Anmeldeinformationen für den Zugriff auf GitHub aktualisieren
intro: 'Die Anmeldeinformationen von {% data variables.product.product_name %} umfassen{% ifversion not ghae %} nicht nur dein Kennwort, sondern auch{% endif %} deine Zugriffstoken, SSH-Schlüssel und Anwendungs-API-Token für die Kommunikation mit {% data variables.product.product_name %}. Bei Bedarf kannst du alle diese Anmeldeinformationen selbst zurücksetzen.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 650c0027b679690def6d1c77d727a87b8688b889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508416'
---
{% ifversion not ghae %}
## Neues Passwort anfordern

1. Um ein neues Kennwort anzufordern, besuche {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Gib auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} die E-Mail-Adresse ein, die deinem Konto zugeordnet ist, und klicke dann auf **E-Mail zur Kennwortzurücksetzung senden**. Die E-Mail wird an die Sicherungs-E-Mail-Adresse gesendet, wenn du eine konfiguriert hast.
  ![Dialogfeld zum Anfordern einer E-Mail für die Kennwortzurücksetzung](/assets/images/help/settings/password-recovery-email-request.png)
3. Die E-Mail enthält einen Link, über den du dein Kennwort zurücksetzen kannst. Auf diesen Link musst du innerhalb von drei Stunden nach Erhalt der E-Mail klicken. Falls du keine E-Mail von uns erhalten hast, siehe in deinem Spam-Ordner nach.
4. Wenn du die zweistufige Authentifizierung (Two-Factor Authentication, TFA) aktiviert hast, wirst du zur Eingabe deiner TFA-Anmeldeinformationen aufgefordert: {% ifversion fpt or ghec %}
   * Wenn du {% data variables.product.prodname_mobile %} hast, wird dir eine Pushbenachrichtigung gesendet, um deine Identität zu überprüfen. Öffne die Pushbenachrichtigung oder die {% data variables.product.prodname_mobile %}-App, und gib den zweistelligen Code ein, der dir auf der Seite zur Kennwortzurücksetzung im Browser angezeigt wird.
   ![Aufforderung zur zweistufigen Authentifizierung bei {% data variables.product.prodname_mobile %}](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Um die Verwendung von GitHub Mobile zu überprüfen, musst du auf **Code für die zweistufige Authentifizierung oder Wiederherstellungscode eingeben** klicken.
      ![Aufforderung zur zweistufigen GitHub Mobile-Authentifizierung für {% data variables.product.product_name %} mit hervorgehobener Option „Code für die zweistufige Authentifizierung oder Wiederherstellungscode eingeben“](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * Gib deinen Authentifizierungscode oder einen deiner Wiederherstellungscodes ein, und klicke auf **Überprüfen**.
      ![Eingabeaufforderung zur zweistufigen Authentifizierung](/assets/images/help/2fa/2fa-password-reset.png)
     * Wenn du deinem Konto einen Sicherheitsschlüssel hinzugefügt hast, kannst auf **Sicherheitsschlüssel verwenden** klicken, anstatt einen Authentifizierungscode einzugeben.
     {% ifversion fpt or ghec %}
     * Wenn du [{% data variables.product.prodname_mobile %}](https://github.com/mobile) eingerichtet hast, klicke stattdessen auf **Mit GitHub Mobile authentifizieren**.
     {% endif %}
5. Gib ein neues Kennwort ein, bestätige dein neues Kennwort, und klicke auf **Kennwort ändern**. Hilfe zum Erstellen eines starken Kennworts findest du unter [Erstellen eines starken Kennworts](/articles/creating-a-strong-password).
  {% ifversion fpt or ghec %}![ Kennwortwiederherstellungsfeld](/assets/images/help/settings/password-recovery-page.png){% else %} ![Kennwortwiederherstellungsfeld](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Um zu vermeiden, dass du dein Kennwort in Zukunft verlierst, empfehlen wir die Verwendung eines sicheren Kennwort-Managers wie [LastPass](https://lastpass.com/) oder [1Password](https://1password.com/).

{% endtip %}

## Vorhandenes Passwort ändern

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} für {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. Gib unter „Kennwort ändern“ dein altes Kennwort und ein sicheres neues Kennwort ein, und bestätige das neue Kennwort. Hilfe zum Erstellen eines starken Kennworts findest du unter [Erstellen eines starken Kennworts](/articles/creating-a-strong-password).
5. Klicke auf **Kennwort aktualisieren**.

{% tip %}

Für noch mehr Sicherheit empfehlen wir dir zusätzlich zur Änderung deines Kennworts die Aktivierung der zweistufigen Authentifizierung. Weitere Informationen findest du unter [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication).

{% endtip %} {% endif %}
## Zugriffstoken aktualisieren

Anweisungen zum Überprüfen und Löschen von Zugriffstoken findest du unter [Überprüfen deuiner autorisierten Integrationen](/articles/reviewing-your-authorized-integrations). Informationen zum Generieren neuer Zugriffstoken findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

{% ifversion not ghae %}

Wenn du dein Kontokennwort zurücksetzen und auch eine Abmeldung aus der {% data variables.product.prodname_mobile %}-App auslösen möchtest, kannst du die Autorisierung der OAuth-App „GitHub iOS“ oder „GitHub Android“ widerrufen. Dadurch werden alle Instanzen der {% data variables.product.prodname_mobile %}-App abgemeldet, die deinem Konto zugeordnet sind. Weitere Informationen findest du unter [Überprüfen deiner autorisierten Integrationen](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations).

{% endif %}

## SSH-Schlüssel aktualisieren

Anweisungen zum Überprüfen und Löschen von SSH-Schlüsseln findest du unter [Überprüfen deiner SSH-Schlüssel](/articles/reviewing-your-ssh-keys). Informationen zum Generieren und Hinzufügen neuer SSH-Schlüssel findest du unter [Generieren eines SSH-Schlüssels](/articles/generating-an-ssh-key).

## API-Token zurücksetzen

Wenn du bei {% data variables.product.product_name %} Anwendungen registriert hast, musst du eventuell OAuth-Token zurücksetzen. Weitere Informationen findest du unter [Zurücksetzen eines Autorisierungsendpunkts](/rest/reference/apps#reset-an-authorization).

{% ifversion not ghae %}
## Nicht autorisierten Zugriff verhindern

Weitere Tipps zum Sichern deines Kontos und zum Verhindern eines nicht autorisierten Zugriffs findest du unter [Verhindern des nicht autorisierten Zugriffs](/articles/preventing-unauthorized-access).
{% endif %}
