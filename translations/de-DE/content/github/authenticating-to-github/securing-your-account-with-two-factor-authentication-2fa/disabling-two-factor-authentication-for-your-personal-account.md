---
title: Zwei-Faktor-Authentifizierung für Dein persönliches Konto deaktivieren
intro: 'Wenn Du die Zwei-Faktor-Authentifizierung (2FA) für Dein persönliches Konto deaktivierst, verlierst Du möglicherweise den Zugriff auf Organisationen, denen Du angehörst.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

Wir empfehlen dringend, Dein Konto mit der Zwei-Faktor-Authentifizierung zu schützen. Wenn Du die 2FA deaktivieren musst, empfehlen wir, sie so bald wie möglich wieder zu aktivieren.

{% warning %}

**Warning:** If you're a member{% if currentVersion == "free-pro-team@latest" %}, billing manager,{% endif %} or outside collaborator to a public repository of an organization that requires two-factor authentication and you disable 2FA, you'll be automatically removed from the organization, and you'll lose your access to their repositories. Um wieder auf die Organisation zugreifen zu können, aktiviere die Zwei-Faktor-Authentifizierung erneut und wende Dich an einen Organisationsinhaber.

{% endwarning %}

Wenn Deine Organisation die Zwei-Faktor-Authentifizierung voraussetzt und Du ein Mitglied, Inhaber oder externer Mitarbeiter bei einem privaten Repository Deiner Organisation bist, musst Du die Organisation zunächst verlassen, bevor Du die Zwei-Faktor-Authentifizierung deaktivieren kannst.

So entfernst Du Dich selbst aus Deiner Organisation:
 - Wenn Du Mitglied oder Inhaber der Organisation bist, findest Du weitere Informationen unter „[Sich selbst aus einer Organisation entfernen](/articles/removing-yourself-from-an-organization/).“
 - Als externer Mitarbeiter bitte einen Organisationsinhaber oder Repository-Administrator, Dich aus den Repositorys der Organisation zu entfernen. Weitere Informationen findest Du unter „[Rollen von Personen in einer Organisation anzeigen](/articles/viewing-people-s-roles-in-an-organization)“ und „[Externen Mitarbeiter von einem Organisationsrepository entfernen](/articles/removing-an-outside-collaborator-from-an-organization-repository/).“

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Klicke auf **Disable** (Deaktivieren). ![Schaltfläche „Disable two-factor authentication" (Deaktivieren der Zwei-Faktor-Authentifizierung)](/assets/images/help/2fa/disable-two-factor-authentication.png)

### Weiterführende Informationen

- „[Informationen zur Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication)“
- „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication)“
- „[Wiederherstellungsmethoden für die Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication-recovery-methods)“
