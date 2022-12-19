---
title: Mitwirkende eines Projekts anzeigen
intro: 'Du kannst anzeigen, wer Commits zu einem Repository{% ifversion fpt or ghec %} und den zugehörigen Abhängigkeiten beigetragen hat{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369161'
---
## Informationen zu Mitarbeitern

Im Mitwirkendendiagramm kannst du die Top 100 der Mitwirkenden an einem Repository anzeigen{% ifversion ghes or ghae %}, darunter auch die Commit-Co-Autoren{% endif %}. Merge- und leere Commits werden für dieses Diagramm nicht als Beiträge gezählt.

{% ifversion fpt or ghec %} Darüber hinaus kannst du eine Liste der Personen anzeigen, die Beiträge zu den Python-Abhängigkeiten des Projekts geliefert haben. Um auf diese Liste der Mitwirkenden an der Community zuzugreifen, besuche `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Auf das Mitarbeiterdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Klicke auf der linken Randleiste auf **Mitwirkende**.
  ![Registerkarte „Mitwirkende“](/assets/images/help/graphs/contributors_tab.png)
4. Wenn du optional Mitarbeiter während eines bestimmten Zeitraums anzeigen möchtest, klicke und ziehe solange, bis der gewünschte Zeitraum ausgewählt ist. Im Mitwirkendendiagramm wird wöchentlich jeden Sonntag die Anzahl der Commits summiert, weshalb der Zeitraum einen Sonntag enthalten muss.
  ![Ausgewählter Zeitraum im Mitwirkendendiagramm](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Fehlerbehebung bei Mitarbeitern

Aus den folgenden Gründen wirst du möglicherweise im Mitarbeiterdiagramm eines Repositorys nicht angezeigt:
- Du zählst nicht zu den Top-100-Mitarbeitern.
- Deine Commits wurden nicht in den Standardbranch zusammengeführt.
- Die E-Mail-Adresse, die du zum Erstellen der Commits verwendet hast, ist nicht mit deinem Konto in {% data variables.product.product_name %} verbunden.

{% tip %}

**Tipp:** Informationen zum Auflisten aller Personen, die mit Commits zu einem Repository beigetragen haben, findest du unter [Auflisten von Mitwirkenden an einem Repository](/rest/repos/repos#list-repository-contributors).

{% endtip %}

Wenn alle deine Commits in Nicht-Standardbranches des Repository sind, wirst du im Mitarbeiterdiagramm nicht aufgeführt. Beispielsweise sind Commits für den `gh-pages`-Branch nicht im Diagramm enthalten, sofern `gh-pages` nicht der Standardbranch des Repositorys ist. Damit deine Commits in den Standardbranch zusammengeführt werden, kannst du einen Pull Request erstellen. Weitere Informationen findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Wenn die E-Mail-Adresse, die du zum Erstellen der Commits verwendet hast, nicht mit deinem Konto in {% data variables.product.product_name %} verbunden ist, werden deine Commits nicht mit deinem Konto verknüpft, und du wirst im Mitwirkendendiagramm nicht angezeigt. Weitere Informationen findest du unter [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address){% ifversion not ghae %} und [Hinzufügen einer E-Mail-Adresse zu deinem {% data variables.product.prodname_dotcom %}-Konto](/articles/adding-an-email-address-to-your-github-account){% endif %}.
