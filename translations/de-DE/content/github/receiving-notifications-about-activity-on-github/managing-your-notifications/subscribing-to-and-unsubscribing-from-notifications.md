---
title: Benachrichtigungen abonnieren und kündigen
intro: 'Du kannst einzelne Unterhaltungen zu Issues, Pull Requests und Teamdiskussionen abonnieren, selbst wenn Du weder das Repository noch ein Mitglied des Teams beobachtest, in dem die Unterhaltung stattfindet. Wenn Du kein Interesse mehr an der Unterhaltung hast, kannst Du das Abonnement kündigen oder die von Dir abonnierten Benachrichtigungsarten anpassen.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications
---
### Benachrichtigungseinstellungen für ein Issue oder einen Pull Request verwalten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Wählen Sie einen Issue oder Pull Request, den Sie abonnieren möchten.
4. Klicke in der rechten Seitenleiste auf **Subscribe** (Abonnieren) oder **Unsubscribe** (Kündigen). ![Schaltfläche „Conversation Subscribe" (Abonnieren einer Unterhaltung)](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. Klicken Sie zum Anpassen Ihrer Benachrichtigungen auf {% octicon "gear" aria-label="The gear icon" %}. ![Einstellungsschaltfläche neben „Subscribe“ (Abonnieren einer Unterhaltung)](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. Wähle die Art von Benachrichtigungen aus, die Du zu dieser Unterhaltung erhalten möchtest, und klicke auf **Save** (Speichern). ![Conversation Subscribe options list](/assets/images/help/notifications/subscribe_options.png) You can see a list of all the issues and pull requests you're subscribed to. Weitere Informationen findest Du unter „[Liste Deiner abonnierten Issues und Pull Requests abrufen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)."

### Teamdiskussionen abonnieren

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Suche auf der Teamseite die Diskussion, die Du abonnieren möchtest.
6. Klicke rechts oben in der Diskussion auf {% octicon "unmute" aria-label="The subscribe symbol" %}, um die Diskussion zu abonnieren. ![Schaltfläche „Team discussion Subscribe" (Abonnieren einer Teamdiskussion)](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### Teamdiskussionen kündigen

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Suche auf der Teamseite die Diskussion, deren Abonnement Du kündigen möchtest.
6. Klicke rechts oben in der Diskussion auf {% octicon "mute" aria-label="The unsubscribe symbol" %}, um die Diskussion zu kündigen. ![Schaltfläche „Team discussion Subscribe" (Abonnieren einer Teamdiskussion)](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### Weiterführende Informationen

- „[Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- „[Informationen zu Unterhaltungen auf {% data variables.product.product_name %}](/articles/about-conversations-on-github)“
- „[Beobachten von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"

- „[Repositorys auflisten, die Du beobachtest](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
