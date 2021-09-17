---
title: Einen Benutzer für Dein persönliches Konto blockieren
intro: 'Du kannst einen Benutzer blockieren, damit er nicht auf Deine Aktivitäten und Repositorys zugreifen und Dir keine Benachrichtigungen senden kann.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
topics:
  - community
---
### Informationen zum Blockieren von Benutzern

Du kannst einen Benutzer in Deinen Kontoeinstellungen oder über das Profil des Benutzers blockieren. {% data variables.product.prodname_dotcom %} wird dem Benutzer nicht mitteilen, wenn Du ihn blockierst. If you want to avoid contributing to the same project as someone you've blocked, you can choose to display a warning on any repositories with prior contributions from a blocked user. For more information, see "[Blocking a user in your account settings](#blocking-a-user-in-your-account-settings)." You may still see the activity of blocked users in shared spaces and blocked users can delete their existing content.

{% tip %}

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. (siehe „[Unterhaltungen sperren](/github/building-a-strong-community/locking-conversations)“)

{% endtip %}

Wenn Du einen Benutzer blockierst:
- Folgt er Dir nicht mehr
- The user stops watching and unpins your repositories
- The user is not able to join any organizations you are an owner of
- werden die Sternmarkierungen und Issue-Zuweisungen des Benutzers von Deinen Repositorys entfernt
- The user's votes on discussions or comments in your repositories are deleted
- Wird er als Mitarbeiter von Deinen Repositorys entfernt
- The user's contributions to your repositories are no longer counted as contributions for them
- Your contributions to the blocked user's repositories are no longer counted as contributions for you
- You are removed as a collaborator on their repositories
- Wird sein Sponsoring für Dich beendet
- Any pending repository or account successor invitations to or from the blocked user are cancelled

Ein blockierter Benutzer kann Folgendes nicht mehr tun:
- Dir Benachrichtigungen senden und Deinen Benutzernamen auch nicht mehr [@erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- Comment on or edit issues or pull requests that you've created
- Auf Deine Kommentare zu Issues, Pull Requests und Commits reagieren
- Dir folgen oder Deine Inhalte in seinem Aktivitätsfeed sehen
- Assign you to issues or pull requests
- Sie als Mitarbeiter für seine Repositorys einladen
- Dich als Mitarbeiter zu einem Sicherheitshinweis einladen
- Querverweise auf Ihre Repositorys in Kommentaren vornehmen
- Fork, watch, pin, or star your repositories
- Sie sponsern

In Deine Repositorys können blockierte Benutzer außerdem Folgendes nicht tun:
- Eröffnen von Issues
- Send, close, or merge pull requests
- Kommentare auf Issues, Pull Requests oder Commits erstellen
- Wiki-Seiten hinzufügen oder bearbeiten

### Einen Benutzer in Deinen Kontoeinstellungen blockieren

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. Gib unter „Block a user“ (Einen Benutzer blockieren) den Benutzernamen der Person ein, die Du blockieren möchtest. Klicke dann auf **Block user** (Benutzer blockieren). ![Feld „Username" (Benutzernamen) und Schaltfläche „Block" (Blockieren)](/assets/images/help/settings/user-settings-block-user.png)
4. Um eine Warnung zu sehen, wenn Du ein Repository aufrufst, bei dem ein blockierter Benutzer Mitarbeiter ist, kannst Du optional **Warn me when a blocked user is a prior contributor to a repository** (Mich warnen, wenn ein blockierter Benutzer bereits an einem Repository mitgearbeitet hat) auswählen. ![Option zum Warnen bei blockierten Benutzern](/assets/images/help/settings/warn-block-user.png)

### Einen Benutzer über seine Profilseite blockieren

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. Klicke auf **Block user** (Benutzer blockieren). ![Modales Feld mit Optionen zum Blockieren von Benutzern oder Melden von Missbrauch](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Benutze {% data variables.contact.report_abuse %}, um uns zu kontaktieren, wenn Du belästigt wirst. {% data reusables.policies.abuse %}

{% endnote %}

### Weiterführende Informationen

- „[Benutzer anzeigen, die Du für Dein persönliches Konto blockiert hast](/articles/viewing-users-you-ve-blocked-from-your-personal-account)“
- „[Sperre eines Benutzers für Dein persönliches Konto aufheben](/articles/unblocking-a-user-from-your-personal-account)“
- „[Einen Benutzer für Deine Organisation blockieren](/articles/blocking-a-user-from-your-organization)“
- „[Sperre eines Benutzers für Deine Organisation aufheben](/articles/unblocking-a-user-from-your-organization)“
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
- „[Interaktionen mit Deinem Repository einschränken](/articles/limiting-interactions-with-your-repository)“
