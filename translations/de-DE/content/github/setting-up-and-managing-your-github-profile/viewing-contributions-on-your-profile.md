---
title: Beiträge auf Deinem Profil anzeigen
intro: 'Your {% data variables.product.product_name %} profile shows off {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Your contribution graph shows activity from public repositories. {% endif %}You can choose to show activity from {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}both public and {% endif %}private repositories, with specific details of your activity in private repositories anonymized. Weitere Informationen finden Sie unter „[Private Beiträge in Ihrem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)“.

{% note %}

**Note:** Commits will only appear on your contributions graph if the email address you used to author the commits is connected to your account on {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)“

{% endnote %}

### Was zählt als ein Beitrag?

Bestimmte Aktionen zählen auf Deiner Profilseite als Beiträge:

- Commits zum Standardbranch eines Repositorys oder zum Branch `gh-pages`
- das Öffnen eines Issues
- das Vorschlagen eines Pull Requests
- Submitting a pull request review{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- Commits mit Co-Autor im Standardbranch eines Repositorys oder im Branch `gh-pages`{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Beliebte Repositorys

Dieser Abschnitt zeigt Deine Repositorys mit den meisten Beobachtern (Watcher) an. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Once you [pin repositories to your profile](/articles/pinning-repositories-to-your-profile), this section will change to "Pinned repositories."{% endif %}

![Beliebte Repositorys](/assets/images/help/profile/profile_popular_repositories.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Angeheftete Repositorys

Dieser Abschnitt zeigt bis zu sechs öffentliche Repositorys an und kann sowohl Deine Repositorys als auch die Repositorys enthalten, an denen Du Dich beteiligt hast. Damit Du ohne Weiteres wichtige Details zu den ausgewählten Repositorys anzeigen kannst, enthält jedes Repository in diesem Abschnitt eine Zusammenfassung der zu erledigenden Arbeit, die Anzahl der [Sterne](/articles/saving-repositories-with-stars/) des Repositorys und die im Repository verwendete Hauptprogrammiersprache. Weitere Informationen findest Du unter „[Repositorys an Dein Profil anheften](/articles/pinning-repositories-to-your-profile).“

![Angeheftete Repositorys](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

### Beitragskalender

Dein Beitragskalender zeigt Deine Beitragsaktivität an.

#### Beiträge aus bestimmten Zeiten anzeigen

- Klicke auf das Quadrat eines Tages, um die während diesem 24-Stunden-Zeitraum vorgenommenen Beiträge anzuzeigen.
- Drücke die *Umschalttaste*, und klicke auf das Quadrat eines anderen Tages, um die in diesem Zeitraum vorgenommenen Beiträge anzuzeigen.

{% note %}

**Hinweis:** In Deinem Beitragskalender kannst Du einen Zeitraum von bis zu einem Monat auswählen. Bei Auswahl eines größeren Zeitraums werden nur die Beiträge aus einem Monat angezeigt.

{% endnote %}

![Dein Beteiligungsdiagramm](/assets/images/help/profile/contributions_graph.png)

#### Funktionsweise der Berechnung von Ereigniszeiten für Beiträge

Zeitstempel werden für Commits und Pull Requests unterschiedlich berechnet:
- **Commits** verwenden die Zeitzoneninformationen im Commit-Zeitstempel. Weitere Informationen findest Du unter „[Fehlerbehebung bei Commits auf Deiner Zeitleiste](/articles/troubleshooting-commits-on-your-timeline).“
- Die auf {% data variables.product.product_name %} geöffneten **Pull Requests** und **Issues** verwenden die Zeitzone Deines Browsers. Die über die API geöffneten verwenden den Zeitstempel oder die Zeitzone, [der bzw. die im API-Aufruf angegeben wurde](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

### Aktivitätsübersicht

{% data reusables.profile.activity-overview-summary %} Weitere Informationen findest Du unter „[Übersicht über Deine Aktivitäten in Deinem Profil anzeigen](/articles/showing-an-overview-of-your-activity-on-your-profile).“

![Aktivitätsübersicht im Profil](/assets/images/help/profile/activity-overview-section.png)

Die in der Aktivitätsübersicht angezeigten Organisationen werden dementsprechend priorisiert, wie aktiv Sie in der Organisation sind. Wenn Sie in Ihrer Profil-Bio eine Organisation @erwähnen und Sie ein Organisationsmitglied sind, wird diese Organisation in der Aktivitätsübersicht priorisiert. Weitere Informationen finden Sie unter „[Personen und Teams erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)“ oder „[Eine Biografie zu Ihrem Profil hinzufügen](/articles/adding-a-bio-to-your-profile/)“.

### Beitragsaktivität

Der Abschnitt für die Beitragsaktivität enthält eine detaillierte Zeitleiste zu Ihrer Arbeit. Dazu zählen die von Ihnen erstellten oder mitverfassten Commits, die von Ihnen vorgeschlagenen Pull Requests und die von Ihnen geöffneten Issues. Du kannst Deine über einen gewissen Zeitraum erstellten Beiträge anzeigen. Klicke dazu im unteren Bereich Deiner Beitragsaktivität auf **Show more activity** (Mehr Aktivität anzeigen) oder im rechten Bereich der Seite auf das gewünschte Jahr. Wichtige Momente werden in Ihrer Beitragsaktivität hervorgehoben. Dazu zählen Ihr Beitrittsdatum zu einer Organisation, Ihr erster vorgeschlagener Pull Request oder das Öffnen eines hochrangigen Issues. Wenn Sie bestimmte Ereignisse auf Ihrer Zeitleiste nicht anzeigen können, sollten Sie sicherstellen, dass Sie weiterhin auf die Organisation oder das Repository zugreifen können, in der bzw. in dem das Ereignis auftrat.

![Zeitfilter für Beitragsaktivität](/assets/images/help/profile/contributions_activity_time_filter.png)

{% if currentVersion != "github-ae@latest" %}
### Beiträge von {% data variables.product.product_location_enterprise %} auf {% data variables.product.prodname_dotcom_the_website %} anzeigen
If your site administrator has enabled

{% data variables.product.prodname_unified_contributions %}, you can send {% data variables.product.prodname_enterprise %} contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile. Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_ghe_server %}-Beiträge an Deine {% data variables.product.prodname_dotcom_the_website %} senden](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile).“
{% endif %}

### Weiterführende Informationen

- „[Beiträge auf Ihrer Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“
- „[Private Beiträge in Deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)“
- „[Übersicht über Deine Aktivitäten in Deinem Profil anzeigen](/articles/showing-an-overview-of-your-activity-on-your-profile)“
