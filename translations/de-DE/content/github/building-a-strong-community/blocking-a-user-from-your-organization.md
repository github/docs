---
title: Einen Benutzer für Deine Organisation blockieren
intro: Organisationsinhaber können einen Benutzer blockieren, damit dieser nicht mehr an den Repositorys der Organisation mitarbeiten kann.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - community
---

Du kannst einen Benutzer über die Einstellungen Deiner Organisation oder über einen bestimmten Kommentar dieses Benutzers blockieren. Wenn Du einen Benutzer in einem Kommentar blockierst, kannst Du auswählen, dem Benutzer eine Benachrichtigung über die Sperre und den Grund dazu zu senden. Andernfalls wird er nicht direkt über die Sperre informiert. Blocked users can still delete their existing content.

Wenn Du einen Benutzer blockierst, kannst Du auswählen, ob er dauerhaft oder für einen bestimmten Zeitraum blockiert werden soll. Wenn Du jemanden für einen bestimmten Zeitraum blockieren möchtest, wird die Sperre nach Ablauf dieser Zeit automatisch aufgehoben. Wenn Du jemanden dauerhaft blockierst, kannst Du die Sperre jederzeit manuell aufheben. Weitere Informationen findest Du unter „[Sperre eines Benutzers für Deine Organisation aufheben](/articles/unblocking-a-user-from-your-organization).“

{% tip %}

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. (siehe „[Unterhaltungen sperren](/github/building-a-strong-community/locking-conversations)“)

{% endtip %}

Wenn Du einen Benutzer für Deine Organisation blockieren:
- beobachtet der Benutzer die Repositorys Deiner Organisation nicht mehr
- werden die Sternmarkierungen und Issue-Zuweisungen des Benutzers von Deinen Repositorys entfernt
- The user's votes on discussions or comments in your organization's repositories are deleted
- wird der Benutzer als Mitarbeiter aus den Repositorys Deiner Organisation entfernt
- The user's contributions to your organization's repositories are no longer counted as contributions for them
- Any pending repository or organization invitations to the blocked user are cancelled

Wenn Du einen Benutzer für Deine Organisation blockiert hast, kann er nicht mehr:
- in Kommentaren Querverweise auf die Repositorys Deiner Organisation machen
- Fork, watch, pin, or star your organization's repositories

Außerdem können blockierte Benutzer in den Repositorys Deiner Organisation nicht:
- Eröffnen von Issues
- Send, close, or merge pull requests
- Kommentare auf Issues, Pull Requests oder Commits erstellen
- Wiki-Seiten hinzufügen oder bearbeiten

### Benutzer in einem Kommentar blockieren

1. Navigiere zum Kommentar, dessen Verfasser Du blockieren möchtest.
2. Klicke oben rechts im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Block user** (Benutzer blockieren). ![Das horizontale 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung, das die Option zur Sperre eines Benutzers zeigt](/assets/images/help/repository/comment-menu-block-user.png)
3. Wenn Du die Sperre zeitlich beschränken möchtest, wähle aus dem Dropdownmenü „Block user“ (Benutzer blockieren) den Zeitraum aus, für den Du den Benutzer blockieren möchtest. ![Zeitbeschränkung für Sperren im Dropdownmenü „Block user“ (Benutzer blockieren)](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Wenn Du alle Kommentare ausblenden möchtest, die der Benutzer in der Organisation verfasst hat, wähle **Hide this user's comments** (Kommentare dieses Benutzers ausblenden) und gib einen Grund dafür an. ![Option zum Versenden einer Benachrichtigung im Dropdownmenü „Block user“ (Benutzer blockieren)](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Wenn Du den Benutzer darüber informieren möchtest, warum er blockiert wird, wähle **Send a notification to this user** (Benachrichtigung an diesen Benutzer senden). ![Option zum Versenden einer Benachrichtigung im Dropdownmenü „Block user“ (Benutzer blockieren)](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Um den Benutzer zu blockieren, wähle **Block user from organization** (Benutzer für die Organisation blockieren) oder **Block user from organization and send message** (Benutzer für die Organisation blockieren und Nachricht senden). ![Schaltfläche „Block user“ (Benutzer blockieren)](/assets/images/help/organizations/org-block-user-button-in-comment.png)

### Benutzer in den Einstellungen der Organisation blockieren

1. Um ein Mitglied einer Organisation zu blockieren, [entferne den Benutzer](/articles/removing-a-member-from-your-organization) zunächst aus der Organisation.
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
6. Gib unter „Block a user“ (Einen Benutzer blockieren) den Benutzernamen der Person ein, die Du blockieren möchtest. ![Feld für Benutzernamen](/assets/images/help/organizations/org-block-username-field.png)
7. Wenn Du die Sperre zeitlich beschränken möchtest, wähle aus dem Dropdownmenü mit den Sperr-Optionen den Zeitraum aus, für den Du den Benutzer blockieren möchtest. ![Dropdownmenü „Block options“ (Optionen für das Blockieren)](/assets/images/help/organizations/org-block-options-menu.png)
8. Klicke auf **Block user** (Benutzer blockieren). ![Schaltfläche „Block" (blockieren)](/assets/images/help/organizations/org-block-user-button.png)

### Weiterführende Informationen

- „[Für Deine Organisation blockierte Benutzer anzeigen](/articles/viewing-users-who-are-blocked-from-your-organization)“
- „[Sperre eines Benutzers für Deine Organisation aufheben](/articles/unblocking-a-user-from-your-organization)“
- „[Benutzer für Dein persönliches Konto blockieren](/articles/blocking-a-user-from-your-personal-account)“
- „[Sperre eines Benutzers für Dein persönliches Konto aufheben](/articles/unblocking-a-user-from-your-personal-account)“
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
