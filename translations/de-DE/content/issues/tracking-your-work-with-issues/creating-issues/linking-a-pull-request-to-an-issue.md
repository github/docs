---
title: Einen Pull Request zu einem Issue verknüpfen
intro: You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when the pull request is merged.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

### Über verknüpfte Issues und Pull Requests

Du kannst einen Issue mit einem Pull-Request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}manuell oder {% endif %}mit einem unterstützten Schlüsselwort in der Pull-Request Beschreibung verknüpfen.

Wenn Du einen Pull Request mit dem Issue verknüpfst, der vom Pull Request adressiert wird, dann können Mitarbeiter sehen, dass jemand am Issue arbeitet. {% if currentVersion ver_lt "enterprise-server@2.21" %}Wenn der Pull Request und der Issue in unterschiedlichen Repositorys sind, wird {% data variables.product.product_name %} nach dem Zusammenführen des Pull Request den Link anzeigen, wenn die Person, die den Pull Request zusammenführt, auch die Berechtigung zum Schließen des Issue hat.{% endif %}

Wenn Du einen verknüpften Pull Request in den Standard-Branch eines Repository zusammenführst, werden seine verknüpften Issues automatisch geschlossen. For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Einen Pull Request manuell mit einem Issue verknüpfen

Jeder, der Schreibberechtigung auf ein Repository hat, kann einen Pull Request manuell mit einem Issue verknüpfen.

Du kannst bis zu 10 Issues manuell mit jedem Pull Request verknüpfen. Der Issue und der Pull Request müssen im gleichen Repository sein.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. Klicke in der Liste der Pull Requests auf den Pull Request, den Du mit einem Issue verknüpfen möchtest.
4. Klicke in der rechten Seitenleiste auf **Linked issues** (Verknüpfte Issues). ![Verknüpfte Issues in der rechten Seitenleiste](/assets/images/help/pull_requests/linked-issues.png)
5. Klicke auf den Issue, den Du mit dem Pull Request verknüpfen willst. ![Dropdownmenü, um Issues zu verknüpfen](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### Einen Pull Request über ein Stichwort mit einem Issue verknüpfen

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch).

* close (schließen)
* closes (wird geschlossen)
* closed (geschlossen)
* fix (korrigieren)
* fixes (korrigiert)
* fixed (ist korrigiert)
* beheben
* resolves (löst)
* resolved (gelöst)

Die Syntax für schließende Schlüsselwörter hängt davon ab, ob der Issue im gleichen Repository ist wie der Pull Request.

| Verknüpfter Issue                               | Syntax                                                | Beispiel                                                       |
| ----------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| Issue ist im gleichen Repository                | *SCHLÜSSELWORT* #*ISSUE-NUMMER*                       | `Closes #10`                                                   |
| Issue ist in einem unterschiedlichen Repository | *SCHLÜSSELWORT* *INHABER*/*REPOSITORY*#*ISSUE-NUMMER* | `Fixes octo-org/octo-repo#100`                                 |
| Mehrfache Issues                                | Verwende für jeden Issue die vollständige Syntax      | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}Only manually linked pull requests can be manually unlinked. Um die Verknüpfung eines Issues zu lösen, den Du über ein Schlüsselwort verknüpft hast, musst Du die Pull-Request-Beschreibung bearbeiten, um das Schlüsselwort zu entfernen.{% endif %}

Du kannst schließende Schlüsselwörter auch in einer Commit-Mitteilung verwenden. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

### Weiterführende Informationen

- „[Automatisch verknüpfte Referenzen und URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
