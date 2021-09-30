---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
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
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Issues und Pull Requests filtern

Issues und Pull Requests umfassen standardmäßige Filter, mit denen Du Deine Listen organisieren kannst.

{% data reusables.search.requested_reviews_search %}

Du kannst Issues und Pull Requests filtern, um Folgendes zu finden:
- alle offenen Issues und Pull Requests
- Issues und Pull Requests, die Du erstellt hast
- Issues und Pull Requests, die Dir zugewiesen sind
- Issues und Pull Requests, in denen Du [**@erwähnt**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) wurdest

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Klicke auf **Filters** (Filter), um den gewünschten Filtertyp auszuwählen. ![Dropdownmenü zum Anwenden der Filter](/assets/images/help/issues/issues_filter_dropdown.png)

## Issues und Pull Requests nach Bearbeitern filtern

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Wähle in der oberen rechten Ecke das Dropdownmenü „Assignee“ (Bearbeiter) aus.
4. In diesem Dropdownmenü sind alle Benutzer aufgeführt, die Schreibzugriff auf Dein Repository haben. Klicke auf den Namen des Benutzers, dessen zugewiesene Elemente Du ansehen möchtest, oder klicke auf **Assigned to nobody** (Niemandem zugewiesen), um zu sehen, welche Issues niemandem zugewiesen wurden. ![Dropdownmenü „Assignees“ (Bearbeiter) verwenden](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Um Deine Filterauswahl zurückzusetzen, klicke auf **Clear current search query, filters, and sorts** (Aktuelle Suchabfrage, Filter und Sortierung löschen).

{% endtip %}

## Issues und Pull Requests nach Kennzeichnungen filtern

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. Klicke in der Liste der Kennzeichnungen auf eine Kennzeichnung, um die Issues und Pull Requests zu sehen, auf die sie angewendet wurde. ![Liste der Kennzeichnungen eines Repositorys](/assets/images/help/issues/labels-page.png)

{% tip %}

**Tipp:** Um Deine Filterauswahl zu löschen, klicke auf **Clear current search query, filters, and sorts** (Aktuelle Suchabfrage, Filter und Sortierung löschen).

{% endtip %}

## Pull Requests nach Review-Status filtern

Mit Filtern kannst Du Pull Requests nach Review-Status auflisten und Pull Requests suchen, die Du überprüft hast oder um deren Review Du von anderen gebeten wurdest.

Du kannst die Pull-Request-Liste eines Repositorys filtern, um folgende Pull Requests zu finden:
- Pull Requests, deren [Review](/articles/about-pull-request-reviews) noch aussteht
- Pull Requests, für die vor dem Merge [ein Review erforderlich ist](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
- Pull Requests, die ein Reviewer genehmigt hat
- Pull Requests, bei denen ein Reviewer um Änderungen gebeten hat
- Pull Requests, die Du überprüft hast
- Pull Requests, um denen [Du oder ein Team, bei dem Du Mitglied bist, um einen Review gebeten wurde](/articles/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. Wähle in der oberen rechten Ecke das Dropdownmenü „Reviews“ (Reviews) aus. ![Dropdownmenü „Reviews“ (Reviews) im Filtermenü über der Liste der Pull Requests](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Wähle einen Filter aus, um alle Pull Requests mit dem Status dieses Filters zu finden. ![Liste der Filter im Dropdownmenü „Reviews“ (Reviews)](/assets/images/help/pull_requests/pr-review-filters.png)

## Issues und Pull Requests mit der Suchfunktion filtern

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

{% include tool-switcher %}

{% webui %}

Mit der Suchleiste für Issues und Pull Requests kannst Du Deine eigenen benutzerdefinierten Filter erstellen und nach einer Vielzahl an Kriterien Sortierungen vornehmen. Die Suchleiste befindet sich auf den Registerkarten **Issues** und **Pull requests** jedes Repositorys und in Deinem [Dashboards für Issues und Pull Requests](/articles/viewing-all-of-your-issues-and-pull-requests).

![Die Suchleiste für Issues und Pull Requests](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Tipp:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

Mithilfe von Suchbegriffen zu Issues und Pull Requests kannst Du:

- Issues und Pull Requests nach Autor filtern: `state:open type:issue author:octocat`,
- Issues und Pull Requests filtern, die bestimmte Personen umfassen, sie jedoch nicht zwangsläufig [**@erwähnen**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`,
- Issues und Pull Requests nach Bearbeiter filtern: `state:open type:issue assignee:octocat`,
- Issues und Pull Requests nach Kennzeichnung filtern: `state:open type:issue label:"bug"`.
- Filter out search terms by using `-` before the term: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
Für Issues kannst Du die Suche auf für folgendes benutzen:

- Filtere für Issues, die zu einem Pull Request über eine schließende Referenz verknüpft sind:`linked:pr`
{% endif %}

Bei Pull Requests kannst Du die Suche auch verwenden, um:
- Pull Requests mit dem Status [Entwurf](/articles/about-pull-requests#draft-pull-requests) zu filtern: `is:draft`
- Pull Requests zu filtern, die noch keinem [Review](/articles/about-pull-request-reviews) unterzogen wurden: `state:open type:pr review:none`
- Pull Requests zu filtern, für die ein [Review erforderlich ist](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging), bevor sie gemergt werden können: `state:open type:pr review:required`,
- Von einem Reviewer genehmigte Pull Requests zu filtern: `state:open type:pr review:approved`
- Pull Requests zu filtern, in denen ein Reviewer um Änderungen gebeten hat: `state:open type:pr review:changes_requested`
- Pull Requests nach [Reviewer](/articles/about-pull-request-reviews/) zu filtern: `state:open type:pr reviewed-by:octocat`
- Pull Requests nach dem bestimmten Benutzer zu filtern, der für den [Review angefordert](/articles/requesting-a-pull-request-review) wurde: `state:open type:pr review-requested:octocat`
- Pull Requests nach einem Team filtern, das für dein Review angefordert wurde: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
- Nach Pull Requests filtern, die zu einem Issue verknüpft sind, die der Pull Request schließen könnte: `linked:issue`{% endif %}

## Issues und Pull Requests sortieren

Zur besseren Darstellung der Informationen eines bestimmten Zeitraums können gefilterter Ansichten sortiert werden.

Du kannst jede gefilterte Ansicht nach folgenden Aspekten sortieren:

* Die neuesten Issues oder Pull Requests (nach Erstellungsdatum)
* Die ältesten Issues oder Pull Requests (nach Erstellungsdatum)
* Die Issues oder Pull Requests mit den meisten Kommentaren
* Die Issues oder Pull Requests mit den wenigsten Kommentaren
* Die neuesten Issues oder Pull Requests (nach Änderungsdatum)
* Die ältesten Issues oder Pull Requests (nach Änderungsdatum)
* The most added reaction on issues or pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. Wähle oben rechts im Dropdownmenü „Sort“ (Sortieren) eine Option aus. ![Verwenden des Dropdownmenüs „Sort“ (Sortieren)](/assets/images/help/issues/issues_sort_dropdown.png)

Zum Aufheben der Sortierung klicke auf **Sort** > **Newest** (Sortieren > Neueste).


## Filter freigeben

Wenn Du Issues und Pull Requests filterst oder sortierst, wird die URL Deines Browsers automatisch an die neue Ansicht angepasst.

Die hierbei generierte URL kannst Du anderen Benutzern senden, damit diese die gleiche Filteransicht aufrufen können.

Würdest Du beispielsweise nach Issues filtern, die Hubot zugeordnet sind, und nach den ältesten offenen Issues sortieren, würde Deine URL in etwa wie folgt aussehen:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Weiterführende Informationen

- "[Searching issues and pull requests](/articles/searching-issues)""
