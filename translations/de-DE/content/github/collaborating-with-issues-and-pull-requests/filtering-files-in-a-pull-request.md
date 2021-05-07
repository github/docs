---
title: Dateien in einem Pull Request filtern
intro: 'Damit Du Änderungen in einem großen Pull Request schnell überprüfen kannst, können geänderte Dateien gefiltert werden.'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.

{% tip %}

**Tip:** To simplify your pull request diff view, you can also temporarily hide deleted files or files you have already viewed in the pull request diff from the file filter drop-down menu.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, nach dem Du filtern möchtest.
{% data reusables.repositories.changed-files %}
4. Im Dropdownmenü „File filter“ (Dateifilter) kannst Du die gewünschten Filter auswählen, deaktivieren oder anklicken. ![Dateifilter-Option oberhalb des Pull-Request-Diff](/assets/images/help/pull_requests/file-filter-option.png)
5. Um die Filterauswahl zu löschen, kannst Du optional auch auf der Registerkarte **Files changed** (Geänderte Dateien) auf **Clear** (Löschen) klicken. ![Dateifilter-Auswahl löschen](/assets/images/help/pull_requests/clear-file-filter.png)

### Weiterführende Informationen

- „[Informationen zum Vergleich von Branches in einem Pull Request](/articles/about-comparing-branches-in-pull-requests)“
- „[Geänderte Methoden und Funktionen in einem Pull Request suchen](/articles/finding-changed-methods-and-functions-in-a-pull-request)“
