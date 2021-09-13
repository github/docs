---
title: Informationen zum persönlichen Dashboard
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
intro: 'Über Dein persönliches Dashboard kannst Du über Issues und Pull Requests, die Du bearbeitest oder verfolgst, auf dem Laufenden bleiben, zu Deinen wichtigsten Repositorys und Teamseiten navigieren, Dich über die neuesten Aktivitäten in Organisationen und Repositorys informieren, die Du abonniert hast, und empfohlene Repositorys erkunden.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### Auf Dein persönliches Dashboard zugreifen

Ihr persönliches Dashboard ist die erste Seite, die Sie sehen, wenn Sie sich bei {% data variables.product.product_name %} anmelden.

Um nach der Anmeldung auf Ihr persönliches Dashboard zuzugreifen, klicken Sie auf das {% octicon "mark-github" aria-label="The github octocat logo" %} in der oberen linken Ecke einer beliebigen Seite auf {% data variables.product.product_name %}.

### Neueste Aktivitäten finden

Im Abschnitt „Recent activity" (Neueste Aktivitäten) Deines Newsfeed kannst Du schnell die zuletzt aktualisierten Issues und Pull Requests finden und weiterverfolgen, an denen Du arbeitest. Im Abschnitt „Recent activity" (Neueste Aktivitäten) kannst Du bis zu 12 der letzten Aktualisierungen anzeigen, die in den vergangenen 2 Wochen gemacht wurden.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Deine wichtigsten Repositorys und Teams finden

Über die linke Seitenleiste Deines Dashboards kannst Du auf die wichtigsten Repositorys und Teams zugreifen, die Du verwendest.

![Liste mit Repositorys und Teams verschiedener Organisationen](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

The list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include making commits and opening or commenting on issues and pull requests. The list of top repositories cannot be edited, but repositories will drop off the list 4 months after you last interacted with them.

Wenn Du oben auf einer beliebigen Seite auf {% data variables.product.product_name %} in die Suchleiste klickst, findest Du außerdem eine Liste Deiner zuletzt aufgerufenen Repositorys, Teams und Projektboards.

### Über Aktivitäten in der Community auf dem Laufenden bleiben

Im Abschnitt „All activity" (Alle Aktivitäten) in Deinem Newsfeed kannst Du Aktualisierungen von Repositorys sehen, die Du abonniert hast und von Personen, denen Du folgst. Der Abschnitt „All activity" (Alle Aktivitäten) zeigt Aktualisierungen von Repositorys, die Du beobachtest oder mit Stern versehen hast und von Benutzern, denen Du folgst.

In Ihrem News-Feed werden Aktualisierungen angezeigt, wenn ein Benutzer, dem Sie folgen,
- Ein Repository mit einem Stern versieht.
- Follows another user.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- Creates a public repository.{% endif %}
- Einen Issue oder Pull Request mit der Kennzeichnung „help wanted“ oder „good first issue“ in einem von Dir beobachteten Repository öffnet.
- Pushes commits to a repository you watch.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- Forks a public repository.{% endif %}

Weitere Informationen zu Sternen für Repositorys und zum Folgen von Personen finden Sie unter „[Repositorys mit Sternen speichern ](/articles/saving-repositories-with-stars/)“ und „[Jemandem folgen](/articles/following-people)“.

### Empfohlene Repositorys erkunden

Im Abschnitt "Explore repositories" (Repositories erkunden) auf der rechten Seite Deines Dashboards kannst Du empfohlene Repositorys in Deinen Communities erkunden. Empfehlungen basieren auf den von Dir markierten oder besuchten Repositorys, auf den Personen, denen Du folgst und auf den Aktivitäten innerhalb der Repositorys, auf die Du Zugriff hast.{% if currentVersion == "free-pro-team@latest" %} Weitere Informationen findest Du unter „[Möglichkeiten zum Beitragen an Open Source auf {% data variables.product.prodname_dotcom %} finden](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

### Weiterführende Informationen

- „[Informationen zum Dashboard Deiner Organisation](/articles/about-your-organization-dashboard)“
