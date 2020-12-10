---
title: Issues und Pull Requests mit der Suchfunktion filtern
intro: Die Ansichten für Issues und Pull Requests enthalten standardmäßig eine Suchleiste für die erweiterte Filterverwaltung.
redirect_from:
  - /articles/using-search-to-filter-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Mit der Suchleiste für Issues und Pull Requests kannst Du Deine eigenen benutzerdefinierten Filter erstellen und nach einer Vielzahl an Kriterien Sortierungen vornehmen. Die Suchleiste befindet sich auf den Registerkarten **Issues** und **Pull requests** jedes Repositorys und in Deinem [Dashboards für Issues und Pull Requests](/articles/viewing-all-of-your-issues-and-pull-requests).

![Die Suchleiste für Issues und Pull Requests](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Tipp:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

Mithilfe von Suchbegriffen zu Issues und Pull Requests kannst Du:

- Issues und Pull Requests nach Autor filtern: `state:open type:issue author:octocat`,
- Issues und Pull Requests filtern, die bestimmte Personen umfassen, sie jedoch nicht zwangsläufig [**@erwähnen**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams): `state:open type:issue involves:octocat`,
- Issues und Pull Requests nach Bearbeiter filtern: `state:open type:issue assignee:octocat`,
- Issues und Pull Requests nach Kennzeichnung filtern: `state:open type:issue label:"bug"`.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
Für Issues kannst Du die Suche auf für folgendes benutzen:

- Filtere für Issues, die zu einem Pull Request über eine schließende Referenz verknüpft sind:`linked:pr`
{% endif %}

Bei Pull Requests kannst Du die Suche auch verwenden, um:
- Pull Requests mit dem Status [Entwurf](/articles/about-pull-requests#draft-pull-requests) zu filtern: `is:draft`
- Pull Requests zu filtern, die noch keinem [Review](/articles/about-pull-request-reviews) unterzogen wurden: `state:open type:pr review:none`
- Pull Requests zu filtern, für die ein [Review erforderlich ist](/articles/about-required-reviews-for-pull-requests), bevor sie zusammengeführt werden können: `state:open type:pr review:required`
- Von einem Reviewer genehmigte Pull Requests zu filtern: `state:open type:pr review:approved`
- Pull Requests zu filtern, in denen ein Reviewer um Änderungen gebeten hat: `state:open type:pr review:changes_requested`
- Pull Requests nach [Reviewer](/articles/about-pull-request-reviews/) zu filtern: `state:open type:pr reviewed-by:octocat`
- Pull Requests nach dem bestimmten Benutzer zu filtern, der für den [Review angefordert](/articles/requesting-a-pull-request-review) wurde: `state:open type:pr review-requested:octocat`
- Filter pull requests by the team requested for review: `state:open type:pr team-review-requested:github/atom`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- Nach Pull Requests filtern, die zu einem Issue verknüpft sind, die der Pull Request schließen könnte: `linked:issue`{% endif %}

### Weiterführende Informationen

- „[Issues durchsuchen](/articles/searching-issues)“
- „[Issues und Pull Requests filtern](/articles/filtering-issues-and-pull-requests)“
- „[Issues und Pull Requests sortieren](/articles/sorting-issues-and-pull-requests)“
- „[Filter freigeben](/articles/sharing-filters)“
