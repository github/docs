---
title: Sperre eines Benutzers für Deine Organisation aufheben
intro: 'Organisationsinhaber können die Sperre eines zuvor blockierten Benutzers aufheben. Damit wird dessen Zugriff auf die Repositorys der Organisation wiederhergestellt.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - community
---

Nach der Aufhebung der Sperre kann der Benutzer wieder zu den Repositorys der Organisation beitragen.

Wenn Du beim blockieren des Benutzers einen bestimmten Zeitraum für die Sperre ausgewählt hast, wird die Sperre nach diesem Zeitraum automatisch aufgehoben. Weitere Informationen findest Du unter „[Benutzer für Deine Organisation blockieren](/articles/blocking-a-user-from-your-organization).“

{% tip %}

**Tipp**: Einstellungen, die bei der Sperre eines Benutzers in Deiner Organisation entfernt wurden, beispielsweise sein Mitarbeiterstatus, Sterne und Beobachtungen, werden bei der Aufhebung der Sperre nicht wiederhergestellt.

{% endtip %}

### Sperre eines Benutzers für einen Kommentar aufheben

1. Navigiere zu dem Kommentar, dessen Verfassers Du entsperren möchtest.
2. Klicke rechts oben im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Unblock user** (Benutzer entsperren). ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit der Option zum Entsperren eines Benutzers](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Klicke zur Bestätigung der Aufhebung der Sperre auf **Okay**.

### Sperre eines Benutzers in den Organisationseinstellungen aufheben

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
5. Klicke unter „Blocked users“ (Blockierte Benutzer) neben dem Benutzer, dessen Sperre Du aufheben möchtest, auf **Unblock** (Entsperren). ![Schaltfläche „Unblock User" (Sperre des Benutzers aufheben)](/assets/images/help/organizations/org-unblock-user-button.png)

### Weiterführende Informationen

- „[Einen Benutzer für Deine Organisation blockieren](/articles/blocking-a-user-from-your-organization)“
- „[Benutzer für Dein persönliches Konto blockieren](/articles/blocking-a-user-from-your-personal-account)“
- „[Sperre eines Benutzers für Dein persönliches Konto aufheben](/articles/unblocking-a-user-from-your-personal-account)“
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
