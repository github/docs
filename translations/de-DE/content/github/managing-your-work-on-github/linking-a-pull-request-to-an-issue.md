---
title: Einen Pull Request zu einem Issue verknüpfen
intro: 'Du kannst einen Pull Request mit einem Issue verknüpfen, um{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} zu zeigen, dass eine Korrektur im Gang ist und{% endif %} den Issue automatisch zu schließen, wenn der Pull Request zusammenführt wird.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Über verknüpfte Issues und Pull Requests

Du kannst einen Issue mit einem Pull-Request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}manuell oder {% endif %}mit einem unterstützten Schlüsselwort in der Pull-Request Beschreibung verknüpfen.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Wenn Du einen Pull Request mit dem Issue verknüpfst, der vom Pull Request adressiert wird, dann können Mitarbeiter sehen, dass jemand am Issue arbeitet.
{% if currentVersion ver_lt "enterprise-server@2.21" %}Wenn der Pull Request und der Issue in unterschiedlichen Repositorys sind, wird {% data variables.product.product_name %} nach dem Zusammenführen des Pull Request den Link anzeigen, wenn die Person, die den Pull Request zusammenführt, auch die Berechtigung zum Schließen des Issue hat.{% endif %}{% endif %}

Wenn Du einen verknüpften Pull Request in den Standard-Branch eines Repository zusammenführst, werden seine verknüpften Issues automatisch geschlossen. Weitere Informationen über den Standard-Branch findest Du auf „[Einstellungen des Standard-Branch](/github/administering-a-repository/setting-the-default-branch)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
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

Du kannst einen Pull Request mit einem Issue über unterstützte Schlüsselwörter in der Pull-Request-Beschreibung verknüpfen.

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Nur manuell verknüpfte Pull Requests können manuell getrennt werden. Um die Verknüpfung eines Issues zu lösen, den Du über ein Schlüsselwort verknüpft hast, musst Du die Pull-Request-Beschreibung bearbeiten, um das Schlüsselwort zu entfernen.{% endif %}

Du kannst schließende Schlüsselwörter auch in einer Commit-Mitteilung verwenden. Der Issue wird geschlossen, wenn Du den Commit in den Standard-Branch zusammenführst{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, aber der Pull Request, der den Commit enthält, wird nicht als verknüpfter Pull Request aufgeführt werden{% endif %}.

### Weiterführende Informationen

- „[Automatisch verknüpfte Referenzen und URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
