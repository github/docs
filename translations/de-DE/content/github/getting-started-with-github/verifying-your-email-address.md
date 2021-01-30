---
title: Deine E-Mail-Adresse verifizieren
intro: 'Das Verifizieren Ihrer primären E-Mail-Adresse gewährleistet eine bessere Sicherheit, ermöglicht dem {% data variables.product.prodname_dotcom %}-Personal, Sie besser zu unterstützen, falls Sie Ihr Passwort vergessen haben, und ermöglicht Ihnen den Zugriff auf weitere Features auf {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification/
  - /articles/setting-up-email-verification/
  - /articles/verifying-your-email-address
versions:
  free-pro-team: '*'
---

### Informationen zur E-Mail-Verifizierung

Du kannst Deine E-Mail-Adresse verifizieren, nachdem Du ein neues Konto registriert hast, oder wenn Du eine neue E-Mail-Adresse hinzufügst. Wenn es nicht möglich ist, E-Mails an eine E-Mail-Adresse zuzustellen, wird sie nicht bestätigt.

Wenn Du Deine E-Mail-Adresse nicht verifizierst, bist Du nicht in der Lage:
  - Repositorys zu erstellen oder zu forken,
  - Issues oder Pull Requests zu erstellen,
  - Kommentare auf Issues, Pull Requests oder Commits erstellen
  - {% data variables.product.prodname_oauth_app %}-Anwendungen zu autorisieren,
  - persönliche Zugriffstoken zu generieren,
  - E-Mail-Benachrichtigungen zu empfangen,
  - Repositorys mit Sternen zu bewerten,
  - Projektboards zu erstellen oder zu aktualisieren, einschließlich des Hinzufügens von Karten,
  - Gists zu erstellen oder zu aktualisieren,
  - {% data variables.product.prodname_actions %} zu erstellen oder zu verwenden.
  - Entwickler mit {% data variables.product.prodname_sponsors %} zu unterstützen

{% warning %}

**Warnings**:

- {% data reusables.user_settings.no-verification-disposable-emails %}
- {% data reusables.user_settings.verify-org-approved-email-domain %}

{% endwarning %}

### Deine E-Mail-Adresse verifizieren

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
1. Klicke unter Deiner E-Mail-Adresse auf **Bestätigungs-E-Mail erneut senden**. ![Verifikations-E-Mail-Link neu senden](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} sendet Dir eine E-Mail mit einem darin enthaltenen Link. Nach dem Klicken auf den Link gelangst Du zu Deinem {% data variables.product.prodname_dotcom %}-Dashboard und siehst ein Bestätigungsbanner. ![Banner mit der Bestätigung, dass Deine E-Mail-Adresse verifiziert wurde](/assets/images/help/settings/email-verification-confirmation-banner.png)

### Fehlerbehebung bei der E-Mail-Verifizierung

#### Fehler beim Senden der Verifizierungs-E-Mail

{% data reusables.user_settings.no-verification-disposable-emails %}

#### Fehlerseite nach dem Klicken auf den Verifizierungslink

Der Verifizierungslink läuft nach 24 Stunden ab. Wenn Du Deine E-Mail-Adresse nicht innerhalb von 24 Stunden verifizierst, kannst Du einen weiteren Link zur Verifizierung der E-Mail anfordern. Weitere Informationen findest Du unter „[Eigene E-Mail-Adresse verifizieren](/articles/verifying-your-email-address).“

Wenn Du innerhalb von 24 Stunden auf den Link in der Bestätigungs-E-Mail klickst und Du auf eine Fehlerseite umgeleitet wirst, solltest Du sicherstellen, dass Du Dich beim richtigen {% data variables.product.prodname_dotcom %}-Konto angemeldet hast.

1. {% data variables.product.signout_link %} von Ihrem persönliche {% data variables.product.prodname_dotcom %}-Konto.
2. Beende Deinen Browser, und starte ihn neu.
3. {% data variables.product.signin_link %} bei Ihrem persönlichen {% data variables.product.prodname_dotcom %}-Konto.
4. Klicke auf den Verifizierungslink in der E-Mail, die wir Dir gesendet haben.

### Weiterführende Informationen

- „[Deine primäre E-Mail-Adresse ändern](/articles/changing-your-primary-email-address)“
