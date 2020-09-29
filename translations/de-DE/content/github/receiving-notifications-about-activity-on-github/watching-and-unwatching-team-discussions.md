---
title: Beobachtung von Teamdiskussionen aktivieren und deaktivieren
intro: 'Du kannst ein Team beobachten, um Benachrichtigungen zu Teamdiskussionen zu erhalten. Du kannst die Beobachtung eines Teams beenden, wenn Du keine weiteren Benachrichtigungen zu den Diskussionen dieses Teams erhalten möchtest.'
versions:
  enterprise-server: <2.21
---

Standardmäßig erhältst Du Benachrichtigungen für die Teamdiskussionen, in denen Du ein Mitglied bist. Wenn Du bestimmten Benachrichtigungen für eine bestehende Teamdiskussion nicht erhalten möchtest, musst Du die Beobachtung dieses Teams beenden. Darüber hinaus kannst Du bestimmte Beiträge in Teamdiskussionen kündigen oder abonnieren. Weiter Informationen findest Du unter „[Über Teamdiskussionen](/articles/about-team-discussions)" und „[Abonnieren und Kündigen von Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)."

Falls Du Teamdiskussionen nicht automatisch beobachten möchtest, wenn Du ein Mitglied eines neuen Teams wirst, kannst Du Deine Einstellungen für die automatische Beobachtung entsprechend aktualisieren.

### Alle Teamdiskussionen für neue Teams beobachten, denen Du beitrittst

Lege Deine Benachrichtigungseinstellungen für die automatische Beobachtung fest, um alle Teamdiskussionen für neue Teams, denen Du beitrittst, automatisch zu beobachten.

{% note %}

**Hinweis:** Diese Einstellung ist standardmäßig auf **Automatically watching teams** (Teams automatisch beobachten) festgelegt.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} Aktiviere das Kontrollkästchen **Automatically watch teams** (Teams automatisch beobachten). ![Kontrollkästchen zum automatischen Beobachten von Teams](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Diskussionen eines einzelnen Teams beobachten

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} Klicke auf **Watch** (Beobachten), um die Benachrichtigungsoptionen zu öffnen. Klicke dann auf **Watching** (Beobachten). ![Beobachtungsoptionen in einem Dropdownmenü für ein spezifisches Team](/assets/images/help/notifications/specific-team-watch-options.png)

### Beobachtung von Teamdiskussionen für alle neuen Teams beenden, denen Du beitrittst

Wenn Du nicht möchtest, dass Du beim Beitritt zu einem Team automatisch Benachrichtigungen zu Teamdiskussionen erhältst, kannst Du Deine Benachrichtigungseinstellungen so ändern, dass die Beobachtung sämtlicher neuer Teams, denen Du beitrittst, beendet wird.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} Deaktiviere das Kontrollkästchen **Automatically watch teams** (Teams automatisch beobachten). ![Standardmäßig ausgewählte Einstellung zum automatischen Beobachten von Teams](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Beobachtung der Diskussionen eines einzelnen Teams beenden

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} Klicke auf **Unwatch** (Beobachtung beenden), um die Benachrichtigungsoptionen zu öffnen. Klicke anschließend auf **Not watching** (Nicht beobachten). ![Beobachtungsoptionen in einem Dropdownmenü für ein spezifisches Team](/assets/images/help/notifications/specific-team-unwatch.png)

{% note %}

**Hinweis:** Du kannst auch auswählen, dass die Benachrichtigungen eines Teams ignoriert werden sollen. Wenn Du ein Team ignorierst, erhältst Du keine Benachrichtigungen. Es wird nicht empfohlen, Teams zu ignorieren, da Du in diesem Fall auch keine Benachrichtigung erhältst, wenn Du @erwähnt wirst.

{% endnote %}

### Weiterführende Informationen

- „[Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- „[Informationen zu Teamdiskussionen](/articles/about-team-discussions)“
- „[Informationen zu Teams](/articles/about-teams)“
