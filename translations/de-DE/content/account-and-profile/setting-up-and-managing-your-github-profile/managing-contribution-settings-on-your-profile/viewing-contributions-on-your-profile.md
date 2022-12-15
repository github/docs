---
title: Anzeigen von Beiträge auf deinem Profil
intro: 'Dein {% data variables.product.product_name %}-Profil zeigt {% ifversion fpt or ghes or ghec %}deine angehefteten Repositorys, Erfolge und{% endif %} ein Diagramm deiner Repositorybeiträge im vergangenen Jahr.'
redirect_from:
  - /articles/viewing-contributions
  - /articles/viewing-contributions-on-your-profile-page
  - /articles/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: View contributions
ms.openlocfilehash: 81b2242e0c7a07d8941375d044cacc65ca8dd56d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079919'
---
{% ifversion fpt or ghes or ghec %}Dein Beitragsdiagramm und deine Erfolge bilden die Aktivität in öffentlichen Repositorys ab. {% endif %}Du kannst die Aktivität sowohl über {% ifversion fpt or ghes or ghec %}öffentliche als auch {% endif %}private Repositorys mit bestimmten Details deiner Aktivität in anonymisierten privaten Repositorys anzeigen. Weitere Informationen findest du unter [Veröffentlichen oder Ausblenden deiner privaten Beiträge in deinem Profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).

{% note %}

**Hinweis:** Commits werden nur in deinem Beitragsdiagramm angezeigt, wenn die E-Mail-Adresse, die du zum Erstellen der Commits verwendet hast, mit deinem Konto auf {% data variables.product.product_name %} verbunden ist. Weitere Informationen findest du unter [Warum werden meine Beiträge nicht auf meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)

{% endnote %}

## Was zählt als ein Beitrag?

Bestimmte Aktionen zählen auf deiner Profilseite als Beiträge:

- Durchführen von Commits für den Standardbranch oder den `gh-pages`-Branch eines Repositorys
- Öffnen eines Issues
- Öffnen einer Diskussion
- Beantworten einer Diskussion
- das Vorschlagen eines Pull Requests
- Übermitteln einer Pull Request-Überprüfung{% ifversion ghes or ghae %}
- Gemeinsame Dokumenterstellung im Standardbranch oder dem `gh-pages`-Branch des Repositorys{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## Beliebte Repositorys

Dieser Abschnitt zeigt deine Repositorys mit den meisten Beobachtern (Watcher) an. {% ifversion fpt or ghes or ghec %}Sobald du [Repositorys an dein Profil anheftest](/articles/pinning-repositories-to-your-profile), ändert sich dieser Abschnitt in „Angeheftete Repositorys“.{% endif %}

![Beliebte Repositorys](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## Angeheftete Repositorys

Dieser Abschnitt zeigt bis zu sechs öffentliche Repositorys an und kann sowohl deine Repositorys als auch die Repositorys enthalten, an denen du Dich beteiligt hast. Damit du ohne Weiteres Details zu den ausgewählten Repositorys anzeigen kannst, enthält jedes Repository in diesem Abschnitt eine Zusammenfassung der zu erledigenden Arbeit, die Anzahl der [Sterne](/articles/saving-repositories-with-stars/), die das Repository erhalten hat, sowie die Hauptprogrammiersprache, die im Repository verwendet wird. Weitere Informationen findest du unter [Anheften von Repositorys an dein Profil](/articles/pinning-repositories-to-your-profile).

![Angeheftete Repositorys](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## Beitragskalender

Dein Beitragskalender zeigt deine Beitragsaktivität an.

### Beiträge aus bestimmten Zeiten anzeigen

- Klicke auf das Quadrat eines Tages, um die während diesem 24-Stunden-Zeitraum vorgenommenen Beiträge anzuzeigen.
- Drücke die *UMSCHALTTASTE*, und klicke auf das Quadrat eines anderen Tages, um die Beiträge anzuzeigen, die während dieses Zeitraums vorgenommen wurden.

{% note %}

**Hinweis:** Du kannst einen Bereich von bis zu einem Monat in deinem Beitragskalender auswählen. Bei Auswahl eines größeren Zeitraums werden nur die Beiträge aus einem Monat angezeigt.

{% endnote %}

![Dein Beteiligungsdiagramm](/assets/images/help/profile/contributions_graph.png)

### Funktionsweise der Berechnung von Ereigniszeiten für Beiträge

Zeitstempel werden für Commits und Pull Requests unterschiedlich berechnet:
- **Commits** verwenden die Zeitzoneninformationen im Commitzeitstempel. Weitere Informationen findest du unter [Problembehandlung bei Commits auf deiner Zeitachse](/articles/troubleshooting-commits-on-your-timeline).
- **Pull Requests** und **Issues**, die auf {% data variables.product.product_name %} geöffnet wurden, verwenden die Zeitzone deines Browsers. Die Pull Requests und Issues, die über die API geöffnet wurden, verwenden den Zeitstempel oder die Zeitzone, der bzw. die [im API-Aufruf angegeben wurde](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## Überblick über Aktivitäten

{% data reusables.profile.activity-overview-summary %} Weitere Informationen findest du unter [Anzeigen einer Übersicht über deine Aktivitäten auf deinem Profil](/articles/showing-an-overview-of-your-activity-on-your-profile).

![Aktivitätsübersicht im Profil](/assets/images/help/profile/activity-overview-section.png)

Die in der Aktivitätsübersicht angezeigten Organisationen werden dementsprechend priorisiert, wie aktiv du in der Organisation bist. Wenn du eine Organisation mit @mention in deiner Profilbio erwähnst und Organisationsmitglied bist, wird diese Organisation zunächst in der Aktivitätsübersicht priorisiert. Weitere Informationen findest du unter [Erwähnen von Personen und Teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) oder [Hinzufügen einer Bio zu deinem Profil](/articles/adding-a-bio-to-your-profile/).

## Beitragsaktivität

Der Abschnitt für die Beitragsaktivität enthält eine detaillierte Zeitleiste zu deiner Arbeit. Dazu zählen die von Dir erstellten oder mitverfassten Commits, die von Dir vorgeschlagenen Pull Requests und die von Dir geöffneten Issues. Du kannst die Beiträge anzeigen, die über einen Zeitraum erstellt wurden, indem du entweder ganz unten auf **Weitere Aktivitäten anzeigen** oder ganz rechts auf der Seite auf das Jahr klickst, das du anzeigen möchtest. Wichtige Momente werden in deiner Beitragsaktivität hervorgehoben. Dazu zählen dein Beitrittsdatum zu einer Organisation, dein erster vorgeschlagener Pull Request oder das Öffnen eines anspruchsvollen Issues. Wenn du bestimmte Ereignisse auf deiner Zeitleiste nicht siehst, solltest du sicherstellen, dass du weiterhin auf die Organisation oder das Repository zugreifen kannst, in der respektive in dem das Ereignis auftrat.

![Zeitfilter für Beitragsaktivität](/assets/images/help/profile/contributions_activity_time_filter.png)

## Anzeigen von Beiträgen aus {% data variables.product.prodname_enterprise %} auf {% data variables.product.prodname_dotcom_the_website %}

Wenn du {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} oder {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} verwendest und dein Unternehmensinhaber {% data variables.product.prodname_unified_contributions %} ermöglicht, kannst du Unternehmensbeitragsanzahlen über dein {% data variables.product.prodname_dotcom_the_website %}-Profil anzeigen. Weitere Informationen findest du unter [Senden von Unternehmensbeiträgen an dein {% data variables.product.prodname_dotcom_the_website %}-Profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

