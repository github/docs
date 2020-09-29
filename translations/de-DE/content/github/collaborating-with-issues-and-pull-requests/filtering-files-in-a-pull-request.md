---
title: Dateien in einem Pull Request filtern
intro: 'Damit Du Änderungen in einem großen Pull Request schnell überprüfen kannst, können geänderte Dateien gefiltert werden.'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst Dateien in einem Pull-Request nach Dateierweiterungstyp filtern, wie zum Beispiel  `.html` oder `.js`, keine Erweiterung,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} Code Inhaberschaft, {% endif %} oder Punktdateien.

{% tip %}

**Tipp:** Um die Ansicht Deines Pull-Requests-Diffs zu vereinfachen, kannst Du temporär auch gelöschte Dateien{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} oder Dateien, die Du bereits angezeigt hast, {% endif %}in dem Pull-Request-Diff über das Dateifilter-Dropdownmenü ausblenden.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, nach dem Du filtern möchtest.
{% data reusables.repositories.changed-files %}
4. Im Dropdownmenü „File filter“ (Dateifilter) kannst Du die gewünschten Filter auswählen, deaktivieren oder anklicken. ![Dateifilter-Option oberhalb des Pull-Request-Diff](/assets/images/help/pull_requests/file-filter-option.png)
5. Um die Filterauswahl zu löschen, kannst Du optional auch auf der Registerkarte **Files changed** (Geänderte Dateien) auf **Clear** (Löschen) klicken. ![Dateifilter-Auswahl löschen](/assets/images/help/pull_requests/clear-file-filter.png)

### Weiterführende Informationen

- „[Informationen zum Vergleich von Branches in einem Pull Request](/articles/about-comparing-branches-in-pull-requests)“
- „[Geänderte Methoden und Funktionen in einem Pull Request suchen](/articles/finding-changed-methods-and-functions-in-a-pull-request)“
