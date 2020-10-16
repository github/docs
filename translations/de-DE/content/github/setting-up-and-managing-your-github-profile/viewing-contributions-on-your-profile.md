---
title: Beiträge auf Deinem Profil anzeigen
intro: 'Ihr {% data variables.product.product_name %}-Profil zeigt Ihre angehefteten Repositorys und ein Diagramm mit Ihren Repository-Beiträgen des letzten Jahres an.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Dein Beteiligungsdiagramm zeigt die Aktivitäten in öffentlichen Repositorys. Du kannst die Aktivitäten in öffentlichen und privaten Repositorys anzeigen, wobei spezifische Details Deiner Aktivität in privaten Repositorys anonymisiert werden. Weitere Informationen finden Sie unter „[Private Beiträge in Ihrem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)“.

{% note %}

**Hinweis:** Commits werden nur dann in Deinem Beteiligungsdiagramm angezeigt, wenn Du Deinen [E-Mail-Einstellungen für {% data variables.product.product_name %} die E-Mail-Adresse hinzugefügt hast, die Du für Deine lokale Git-Konfiguration verwendet hast](/articles/adding-an-email-address-to-your-github-account). Weitere Informationen findest Du unter „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#you-havent-added-your-local-git-commit-email-to-your-profile)“

{% endnote %}

### Was zählt als ein Beitrag?

Bestimmte Aktionen zählen auf Deiner Profilseite als Beiträge:

- Commits zum Standardbranch eines Repositorys oder zum Branch `gh-pages`
- das Öffnen eines Issues
- das Vorschlagen eines Pull Requests
- Submitting a pull request review{% if currentVersion != "free-pro-team@latest" %}
- Commits mit Co-Autor im Standardbranch eines Repositorys oder im Branch `gh-pages`{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Beliebte Repositorys

Dieser Abschnitt zeigt Deine Repositorys mit den meisten Beobachtern (Watcher) an. Wenn Du [Repositorys an Dein Profil anheftest](/articles/pinning-repositories-to-your-profile), wird dieser Abschnitt in „Pinned repositories“ (Angeheftete Repositorys) geändert.

![Beliebte Repositorys](/assets/images/help/profile/profile_popular_repositories.png)

### Angeheftete Repositorys

Dieser Abschnitt zeigt bis zu sechs öffentliche Repositorys an und kann sowohl Deine Repositorys als auch die Repositorys enthalten, an denen Du Dich beteiligt hast. Damit Du ohne Weiteres wichtige Details zu den ausgewählten Repositorys anzeigen kannst, enthält jedes Repository in diesem Abschnitt eine Zusammenfassung der zu erledigenden Arbeit, die Anzahl der [Sterne](/articles/saving-repositories-with-stars/) des Repositorys und die im Repository verwendete Hauptprogrammiersprache. Weitere Informationen findest Du unter „[Repositorys an Dein Profil anheften](/articles/pinning-repositories-to-your-profile).“

![Angeheftete Repositorys](/assets/images/help/profile/profile_pinned_repositories.png)

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

Die in der Aktivitätsübersicht angezeigten Organisationen werden dementsprechend priorisiert, wie aktiv Du in der Organisation bist. Wenn Du in Deiner Profil-Bio eine Organisation @erwähnst und Du ein Organisationsmitglied bist, wird diese Organisation in der Aktivitätsübersicht priorisiert. Weitere Informationen findest Du unter „[Personen und Teams erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)“ oder „[Eine Biografie zu Deinem Profil hinzufügen](/articles/adding-a-bio-to-your-profile/).“

### Beitragsaktivität

Der Abschnitt für die Beitragsaktivität enthält eine detaillierte Zeitleiste zu Deiner Arbeit. Dazu zählen die von Dir erstellten oder mitverfassten Commits, die von Dir vorgeschlagenen Pull Requests und die von Dir geöffneten Issues. Du kannst Deine über einen gewissen Zeitraum erstellten Beiträge anzeigen. Klicke dazu im unteren Bereich Deiner Beitragsaktivität auf **Show more activity** (Mehr Aktivität anzeigen) oder im rechten Bereich der Seite auf das gewünschte Jahr. Wichtige Momente werden in Deiner Beitragsaktivität hervorgehoben. Dazu zählen Dein Beitrittsdatum zu einer Organisation, Dein erster vorgeschlagener Pull Request oder das Öffnen eines hochrangigen Issues. Wenn Du bestimmte Ereignisse auf Deiner Zeitleiste nicht siehst, solltest Du sicherstellen, dass Du weiterhin auf die Organisation oder das Repository zugreifen kannst, in der respektive in dem das Ereignis auftrat.

![Zeitfilter für Beitragsaktivität](/assets/images/help/profile/contributions_activity_time_filter.png)

### Beiträge von {% data variables.product.product_location_enterprise %} auf {% data variables.product.prodname_dotcom_the_website %} anzeigen

Wenn Dein Websiteadministrator {% data variables.product.prodname_unified_contributions %} aktiviert hat, kannst Du die {% data variables.product.prodname_enterprise %}-Beitragszähler an Dein {% data variables.product.prodname_dotcom_the_website %}-Profil senden. Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_ghe_server %}-Beiträge an Deine {% data variables.product.prodname_dotcom_the_website %} senden](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile).“

### Weiterführende Informationen

- „[Beiträge auf Ihrer Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“
- „[Private Beiträge in Deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)“
- „[Übersicht über Deine Aktivitäten in Deinem Profil anzeigen](/articles/showing-an-overview-of-your-activity-on-your-profile)“
