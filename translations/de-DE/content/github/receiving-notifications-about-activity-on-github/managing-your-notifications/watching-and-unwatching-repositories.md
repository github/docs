---
title: Beobachtungen für Repositorys aktivieren und deaktivieren
intro: 'Du kannst ein Repository beobachten, um Benachrichtigungen für neu erstellte Pull Requests und Issues zu erhalten. Darüber hinaus kannst Du die Beobachtung eines Repositorys beenden, wenn Du keine weiteren Benachrichtigungen für dieses bestimmte Repository erhalten möchtest.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories
---
{% data reusables.notifications.auto-watch %} Weitere Informationen findest Du unter „[Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)."

Zudem kannst Du Releases in einem Repository beobachten und deren Beobachtung beenden. Weitere Informationen findest Du unter „[Beobachtung von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)."

### Alle Repositorys beobachten, auf die Du Push-Zugriff hast

{% data reusables.notifications.access_watching %}
2. Klicke auf **Watching** (Beobachten). ![Auflistung der beobachteten Repositorys](/assets/images/help/notifications/notifications-watching-tab.png)
3. Aktiviere rechts auf der Seite **Automatically watch** (Automatisch beobachten). ![Ein Kontrollkästchen zum Konfigurieren der automatischen Beobachtung von Repositorys](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Einzelnes Repository beobachten

{% data reusables.repositories.navigate-to-repo %}
2. Klicke in der oberen rechten Ecke im Dropdownmenü „Watch“ (Beobachten) auf **Watching** (Beobachten). ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications/watch-repository.png)

### Beobachtung sämtlicher Repositorys beenden, auf die Du Push-Zugriff hast

{% data reusables.notifications.access_watching %}
2. Klicke auf **Watching** (Beobachten). ![Auflistung der beobachteten Repositorys](/assets/images/help/notifications/notifications-watching-tab.png)
3. Deaktiviere rechts auf der Seite **Automatically watch** (Automatisch beobachten). ![Ein Kontrollkästchen zum Konfigurieren der automatischen Beobachtung von Repositorys](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Beobachtung eines einzelnen Repositorys beenden

{% data reusables.repositories.navigate-to-repo %}
2. Klicke in der oberen rechten Ecke im Dropdownmenü „Watch“ (Beobachten) auf **Unwatch** (Beobachtung beenden). ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**Hinweis:**Du kannst auch auswählen, dass ein Repository ignoriert werden soll. Wenn Du ein Repository ignorierst, erhältst du keine Benachrichtigungen. Es wird nicht empfohlen, Repositorys zu ignorieren, da Du in diesem Fall auch keine Benachrichtigung erhältst, wenn Du @erwähnt wirst. {% if currentVersion == "free-pro-team@latest" %}If you experiencing abuse and want to ignore a repository, please contact {% data variables.contact.contact_support %} so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Weiterführende Informationen

- „[Abonnieren oder Kündigen von Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- „[Repositorys auflisten, die Du beobachtest](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
