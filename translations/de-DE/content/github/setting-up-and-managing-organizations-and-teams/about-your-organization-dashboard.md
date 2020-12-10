---
title: Informationen zum Dashboard Deiner Organisation
intro: 'Als Organisationsmitglied kannst Du jederzeit das Dashboard Deiner Organisation aufrufen, um über die neuesten Aktivitäten auf dem Laufenden zu bleiben und Issues und Pull Requests zu beobachten, die Du in der Organisation bearbeitest oder verfolgst.'
redirect_from:
  - /articles/about-your-organization-dashboard
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Auf das Dashboard Deiner Organisation zugreifen

{% data reusables.dashboard.access-org-dashboard %}

### Neueste Aktivitäten finden

Im Abschnitt „Recent activity" (Neueste Aktivitäten) Deines Newsfeed kannst Du schnell die zuletzt aktualisierten Issues und Pull Requests in Deiner Organisation finden und weiterverfolgen.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Repositorys in Deiner Organisation finden

Über die linke Seitenleiste Deines Dashboards kannst Du auf die wichtigsten Repositorys Deines Unternehmens zugreifen, in denen Du aktiv bist.

![Liste der Repositorys, in denen Du in Deiner Organisation am aktivsten bist](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

### Über Aktivitäten in der Organisation auf dem Laufenden bleiben

Im Bereich "Alle Aktivitäten" Deines Newsfeed kannst Du Aktualisierungen von anderen Teams und Repositorys in Deiner Organisation ansehen.

Der Abschnitt "Alle Aktivitäten" zeigt alle aktuellen Aktivitäten in der Organisation, einschließlich Aktivitäten in Repositorys, die Du nicht abonniert hast, und von Personen, denen Du nicht folgst. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Watching and unwatching repositories](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}" and "[Following people](/articles/following-people)."

Beispielsweise werden im Newsfeed der Organisation Aktualisierungen angezeigt, wenn jemand in der Organisation:
 - einen neuen Branch erstellt,
 - einen Issue oder Pull Request kommentiert,
 - einen Pull-Request-Review-Kommentar absendet,
 - ein Repository forkt,
 - eine Wiki-Seite erstellt,
 - Pushes commits.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
 - Creates a public repository.{% endif %}

### Weiterführende Informationen

- „[Informationen zum persönlichen Dashboard](/articles/about-your-personal-dashboard)“
