---
title: Filtern und Suchen von Problemen und Pull-Anforderungen
intro: 'Um detaillierte Informationen zu einem Repository auf {% data variables.product.product_name %} zu ermitteln, kannst du Issues und Pull Requests filtern, sortieren und durchsuchen, die für das Repository relevant sind.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107597'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Issues und Pull Requests filtern

Issues und Pull Requests umfassen standardmäßige Filter, mit denen du deine Listen organisieren kannst.

{% data reusables.search.requested_reviews_search %}

Du kannst Issues und Pull Requests filtern, um Folgendes zu finden:
- alle offenen Issues und Pull Requests
- Issues und Pull Requests, die du erstellt hast
- Issues und Pull Requests, die Dir zugewiesen sind
- Probleme und Pull-Anforderungen, bei denen du [**@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Klicke auf **Filter**, um den gewünschten Filtertyp auszuwählen.
  ![Dropdownmenü zum Anwenden der Filter](/assets/images/help/issues/issues_filter_dropdown.png)

## Issues und Pull Requests nach Bearbeitern filtern

Wenn du ein [Problem oder eine Pull-Anforderung jemandem zugewiesen hast,](/articles/assigning-issues-and-pull-requests-to-other-github-users) kannst du Elemente anhand der Personen finden, die daran arbeiten.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Wähle in der oberen rechten Ecke das Dropdownmenü „Assignee“ (Bearbeiter) aus.
4. In diesem Dropdownmenü sind alle Benutzer aufgeführt, die Schreibzugriff auf dein Repository haben. Klicke auf den Namen der Person, deren zugewiesene Elemente du sehen möchtest, oder klicke auf **Niemandem zugewiesen**, um zu sehen, welche Probleme nicht zugewiesen wurden.
![Verwenden der Dropdownregisterkarte Zugewiesene](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Klicke zum Zurücksetzen des ausgewählten Filters auf **Aktuelle Suchabfrage, Filter und Sortierung löschen**.

{% endtip %}

## Issues und Pull Requests nach Kennzeichnungen filtern

Sobald du einem Problem oder einer [Pull-Anforderung Kennzeichnungen zugewiesen hast](/articles/applying-labels-to-issues-and-pull-requests), kannst du Elemente anhand ihrer Kennzeichnungen finden.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. Klicke in der Liste der Kennzeichnungen auf eine Kennzeichnung, um die Issues und Pull Requests zu sehen, auf die sie angewendet wurde.
  ![Liste der Kennzeichnungen eines Repositorys](/assets/images/help/issues/labels-page.png)

{% tip %}

**Tipp:** Klicke zum Zurücksetzen des ausgewählten Filters auf **Aktuelle Suchabfrage, Filter und Sortierung löschen.**

{% endtip %}

## Pull Requests nach Review-Status filtern

Mit Filtern kannst du Pull Requests nach Review-Status auflisten und Pull Requests suchen, die du überprüft hast oder um deren Review du von anderen gebeten wurdest.

Du kannst die Pull-Request-Liste eines Repositorys filtern, um folgende Pull Requests zu finden:
- Pull-Anforderungen, die noch nicht [überprüft](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) wurden
- Pull-Anforderungen, die [eine Überprüfung erfordern](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging), bevor sie zusammengeführt werden können
- Pull Requests, die ein Reviewer genehmigt hat
- Pull Requests, bei denen ein Reviewer um Änderungen gebeten hat
- Pull Requests, die Du überprüft hast
- Pull Requests, zu deren Überprüfung dich jemand direkt aufgefordert hat
- Pull-Anforderungen, um die dich [jemand aufgefordert hat, oder ein Team, in dem du Mitglied bist, zu überprüfen](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Wähle in der oberen rechten Ecke das Dropdownmenü „Reviews“ (Reviews) aus.
  ![Dropdownmenü „Reviews“ (Reviews) im Filtermenü über der Liste der Pull-Anforderungen](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Wähle einen Filter aus, um alle Pull Requests mit dem Status dieses Filters zu finden.
  ![Liste der Filter im Dropdownmenü „Reviews“ (Reviews)](/assets/images/help/pull_requests/pr-review-filters.png)

## Issues und Pull Requests mit der Suchfunktion filtern

Du kannst erweiterte Filter verwenden, um nach Problemen und Pull-Anforderungen zu suchen, die bestimmten Kriterien entsprechen.

### Suche nach Problemen und Pull-Anforderungen

{% webui %}

Mit der Suchleiste für Issues und Pull Requests kannst du deine eigenen benutzerdefinierten Filter erstellen und nach einer Vielzahl an Kriterien Sortierungen vornehmen. Du findest die Suchleiste auf den Registerkarten **"Probleme** " und " **Pull-Anforderungen** " jedes Repositorys sowie auf deinen Dashboards für Probleme [und Pull-Anforderungen](/articles/viewing-all-of-your-issues-and-pull-requests).

![Die Suchleiste für Issues und Pull Requests](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Tipp:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Du kannst Problemen oder Pull-Anforderungen auch mithilfe der {% data variables.product.prodname_cli %} filtern. Verwende den Unterbefehl `gh issue list` oder `gh pr list` zusammen mit dem Argument `--search` und einer Suchabfrage.

Du kannst zum Beispiel alle Probleme in der Reihenfolge des Erstellungsdatums auflisten, für die es keine Zuweisung gibt und die die Kennzeichnung `help wanted` oder `bug` haben.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

Du kannst auch alle Pull-Anforderungen auflisten, die das `octo-org/octo-team` Team erwähnen.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Informationen zu Suchbegriffen

Mithilfe von Suchbegriffen zu Issues und Pull Requests kannst Du:

- Filtern von Problemen und Pull-Anforderungen nach Autor: `state:open type:issue author:octocat`
- Filtern von Problemen und Pull-Anforderungen, die sich - aber nicht unbedingt - auf bestimmte Personen beziehen [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`
- Filtern von Problemen und Pull-Anforderungen nach zugewiesener Person: `state:open type:issue assignee:octocat`
- Filtern von Problemen und Pull-Anforderungen nach Kennzeichnung: `state:open type:issue label:"bug"`
- Filtere Suchbegriffe heraus, indem du `-` vor dem Begriff verwendest: `state:open type:issue -author:octocat`

{% tip %}

**Tip:** Du kannst Issues und Pull Requests nach Bezeichnung filtern, indem du ein logisches ODER oder ein logisches UND verwendest.
- Verwende die Kommasyntax, um Probleme mit logischem ODER zu filtern: `label:"bug","wip"`.
- Verwende separate Bezeichnungsfilter, um Probleme mit logischem UND zu filtern: `label:"bug" label:"wip"`.

{% endtip %}

Für Issues kannst du die Suche auf für folgendes benutzen:

- Du kannst nach Issues filtern, die mit einem Pull Request verknüpft sind, indem du einen schließenden Verweis verwendest: `linked:pr`{% ifversion issue-close-reasons %}
- Du kannst Issues nach Schließungsgrund filtern: `is:closed reason:complete` oder `is:closed reason:"not planned"`{% endif %}

Bei Pull Requests kannst du die Suche auch verwenden, um:
- Filtern von Pull-Anforderungs-[Entwürfen](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtern von Pull-Anforderungen, die noch nicht [überprüft](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) wurden: `state:open type:pr review:none`
- Filtern von Pull-Anforderungen, die [eine Überprüfung erfordern](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging), bevor sie zusammengeführt werden können: `state:open type:pr review:required`
- Filtern von Pull-Anforderungen, die ein Prüfer genehmigt hat: `state:open type:pr review:approved`
- Filtern von Pull-Anforderungen, bei denen ein Prüfer um Änderungen gebeten hat: `state:open type:pr review:changes_requested`
- Filtern von Pull-Anforderungen nach [Prüfer](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtern von Pull Requests nach dem spezifischen Benutzer, [der zur Überprüfung aufgefordert wurde](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtern von Pull Requests, zu deren Überprüfung dich jemand direkt aufgefordert hat: `state:open type:pr user-review-requested:@me`
- Filtern von Pull-Anforderungen durch das Team, das zur Überprüfung angefordert wurde: `state:open type:pr team-review-requested:github/docs`
- Nach Pull-Anforderungen filtern, die mit einem Problem verknüpft sind, das durch die Pull-Anforderungen geschlossen werden kann: `linked:issue`

## Issues und Pull Requests sortieren

Zur besseren Darstellung der Informationen eines bestimmten Zeitraums können gefilterter Ansichten sortiert werden.

Du kannst jede gefilterte Ansicht nach folgenden Aspekten sortieren:

* Die neuesten Issues oder Pull Requests (nach Erstellungsdatum)
* Die ältesten Issues oder Pull Requests (nach Erstellungsdatum)
* Die Issues oder Pull Requests mit den meisten Kommentaren
* Die Issues oder Pull Requests mit den wenigsten Kommentaren
* Die neuesten Issues oder Pull Requests (nach Änderungsdatum)
* Die ältesten Issues oder Pull Requests (nach Änderungsdatum)
* Die am häufigsten hinzugefügte Reaktion auf Probleme oder Pull-Anforderungen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. Wähle oben rechts im Dropdownmenü „Sort“ (Sortieren) eine Option aus.
  ![Verwenden des Dropdownmenüs „Sort“ (Sortieren)](/assets/images/help/issues/issues_sort_dropdown.png)

Um die Sortierauswahl zu löschen, klicke auf **Sortieren** > **Neueste**.

## Filter austauschen

Wenn du Issues und Pull Requests filterst oder sortierst, wird die URL deines Browsers automatisch an die neue Ansicht angepasst.

Die hierbei generierte URL kannst du anderen Benutzern senden, damit diese die gleiche Filteransicht aufrufen können.

Würdest du beispielsweise nach Issues filtern, die Hubot zugeordnet sind, und nach den ältesten offenen Issues sortieren, würde deine URL in etwa wie folgt aussehen:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Weitere Informationsquellen

- "[Suchen von Problemen und Pull-Anforderungen](/articles/searching-issues)"
