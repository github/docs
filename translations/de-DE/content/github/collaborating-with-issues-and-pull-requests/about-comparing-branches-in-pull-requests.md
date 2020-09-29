---
title: Informationen zum Vergleich von Branches in Pull Requests
intro: 'In Pull Requests werden Diffs angezeigt, um die Änderungen, die Du in Deinem Themen-Branch vorgenommen hast, mit dem Basis-Branch zu vergleichen, in den du Deine Änderungen zusammenführen möchtest.'
redirect_from:
  - /articles/about-comparing-branches-in-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Hinweis:** Beim Erstellen Deines Pull Requests kannst Du den Basis-Branch ändern, gegen den Du Deine Änderungen vergleichst. Weitere Informationen findest Du unter „[Einen Pull Request erstellen](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository).“

{% endnote %}

Du kannst die vorgeschlagenen Änderungen in einem Pull Request auf der Registerkarte „Files changed“ (Geänderte Dateien) anzeigen.

![Registerkarte „Pull Request Files changed" (geänderte Pull-Request-Dateien)](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Anstatt die Commits selbst anzuzeigen, kannst Du die vorgeschlagenen Änderungen so anzeigen, wie sie in den Dateien erscheinen werden, sobald der Pull Request übertragen wurde. Die Dateien werden in alphabetischer Reihenfolge auf der Registerkarte „Files changed“ (Geänderte Dateien) angezeigt. Ergänzungen zu den Dateien erscheinen grün und sind durch ein „`+`“-Zeichen gekennzeichnet , wohingegen entfernte Inhalte rot erscheinen und durch ein „`-`“-Zeichen gekennzeichnet sind.

### Anzeigeoptionen für Diffs

{% tip %}

**Tipp:** Wenn Du den Kontext einer Änderung nicht nachvollziehen kannst, kannst Du auf der Registerkarte „Files changed“ (Geänderte Dateien) auf **View** (Anzeigen) klicken, um die gesamte Datei mit den vorgeschlagenen Änderungen anzuzeigen.

{% endtip %}

Du hast mehrere Möglichkeiten für die Anzeige eines Diff:
- Die einheitliche Ansicht zeigt aktualisierte und vorhandene Inhalte gemeinsam in einer linearen Ansicht.
- Die geteilte Ansicht zeigt alte Inhalte auf der einen Seite und neue Inhalte auf der anderen Seite.
- Die Rich-Diff-Ansicht zeigt eine Vorschau, wie die Änderungen nach dem Merge des Pull Requests aussehen werden.
- Die Quellansicht zeigt die Änderungen in der Quelle ohne die Formatierung der Rich-Diff-Ansicht.

Du kannst außerdem Leerzeichenänderungen ignorieren, um eine genauere Ansicht der wesentlichen Änderungen in einem Pull Request zu erhalten.

![Menü „Diff viewing options" (Diff-Anzeigeoptionen)](/assets/images/help/pull_requests/diff-settings-menu.png)

Um das Überprüfen von Änderungen in einem großen Pull-Request zu vereinfachen, kannst du den Diff so filtern, dass gelöschte Dateien ausgeblendet oder nur ausgewählte Dateitypen angezeigt werden{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}, sowie Dateien angezeigt werden, bei denen Du ein CODEOWNER bist, und Dateien verstecken werden, die Du bereits angesehen hast{% endif %}. Weitere Informationen findest Du unter „[Dateien in einem Pull Request nach Dateityp filtern](/articles/filtering-files-in-a-pull-request).“

  ![Dropdownmenü „File filter" (Dateifilter)](/assets/images/help/pull_requests/file-filter-menu.png)

### Vergleiche von Three-Dot- (Dreipunkte-) und Two-Dot- (Zweipunkte-) Diffs von Git

Standardmäßig zeigen Pull-Requests auf {% data variables.product.prodname_dotcom %} einen three-dot-Diff (Dreipunkte-Diff) an, oder einen Vergleich zwischen der aktuellsten Version des Themenzweiges und dem Commit, in dem der Themenzweig letztmals mit dem Basis-Zweig synchronisiert wurde.

Um zwei Committish-Referenzen in einem Two-Dot-Diff-Vergleich auf {% data variables.product.prodname_dotcom %} zu sehen, kannst Du die URL der Seite „Comparing changes“ (Änderungen vergleichen) Deines Repositorys bearbeiten. Weitere Informationen findest Du im  [Git-Glossareintrag zu „Committish“](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) auf der Buchseite _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Ein Two-Dot-Diff (Zweipunkte-Diff) vergleicht zwei Git-Committish-Referenzen, wie SHAs oder OIDs (Objekt-IDs), direkt miteinander. Auf {% data variables.product.prodname_dotcom %} müssen die Git-Committish-Referenzen in einem Two-Dot-Diff-Vergleich an das gleiche Repository oder seine Forks gepusht werden.

Wenn Du einen Two-Dot-Diff in einem Pull Request simulieren und einen Vergleich zwischen den neuesten Versionen jedes Branch sehen möchtest, kannst Du den Basis-Branch in Deinen Themen-Branch zusammenführen, wodurch der letzte gemeinsame Vorgänger Deiner Branches aktualisiert wird.

Weitere Informationen zu Git-Befehlen zum Vergleich von Änderungen findest Du unter „[Git-Diff-Optionen](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)“ auf der Buchseite _Pro Git_.

### Gründe für Anzeigefehler bei Diffs
- Du hast die maximale Anzahl von Dateien oder bestimmten Dateitypen überschritten. Weitere Informationen findest Du unter „[Begrenzungen für die Anzeige von Inhalten und Diffs in einem Repository](/articles/limits-for-viewing-content-and-diffs-in-a-repository/#diff-limits).“
- Deine Datei entspricht einer Regel in der *.gitattributes*-Datei des Repositorys, welche verhindert, dass diese Datei standardmäßig angezeigt wird. Weitere Informationen findest Du unter „[Darstellung geänderter Dateien auf GitHub anpassen](/articles/customizing-how-changed-files-appear-on-github).“

### Weiterführende Informationen

- „[Informationen zu Pull Requests](/articles/about-pull-requests)“
- „[Informationen zu Forks](/articles/about-forks)“
