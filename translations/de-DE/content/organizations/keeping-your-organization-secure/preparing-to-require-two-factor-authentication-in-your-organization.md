---
title: Auf Erzwingung der Zwei-Faktor-Authentifizierung in Deiner Organisation vorbereiten
intro: 'Bevor Du die Zwei-Faktor-Authentifizierung (2FA) vorschreibst, kannst Du die Benutzer über die anstehende Änderungen informieren und überprüfen, wer die 2FA bereits nutzt.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organisationen
  - teams
---

We recommend that you notify {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} at least one week before you require 2FA in your organization.

Wenn Du für Deine Organisation die Zwei-Faktor-Authentifizierung vorschreibst, werden Mitglieder, externe Mitarbeiter und Abrechnungsmanager (einschließlich Bot-Konten), die keine 2FA verwenden, aus der Organisation entfernt und verlieren den Zugriff auf die Repositorys der Organisation. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation.

Bevor Du die 2FA in Ihrer Organisation vorschreiben, empfehlen wir Dir, Folgendes zu tun:
  - [Aktivieren 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/) für Dein persönliches Konto
  - Bitte Benutzer in Deiner Organisation darum, 2FA für ihre Konten einzurichten
  - Überprüfe, ob [Benutzer in Deiner Organisation 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Warne die Benutzer, dass nach der Aktivierung von 2FA diejenigen ohne 2FA automatisch aus der Organisation entfernt werden
