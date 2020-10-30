---
title: Informationen zu Jekyll-Build-Fehler für GitHub Pages-Websites
intro: 'Wenn beim Erstellen Deiner {% data variables.product.prodname_pages %}-Website (lokal oder auf {% data variables.product.product_name %}) mit Jekyll ein Fehler auftritt, erhältst Du eine Fehlermeldung mit weiteren Informationen.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Jekyll-Build-Fehlern

Manchmal kann es vorkommen, dass {% data variables.product.prodname_pages %} nicht versucht, Deine Website zu erstellen, nachdem Du Änderungen zur Veröffentlichungsquelle Deiner Website übertragen hast.{% if currentVersion == "free-pro-team@latest" %}
- Der Benutzer, der die Änderungen gepusht hat, hat seine E-Mail-Adresse nicht verifiziert. Weitere Informationen findest Du unter „[Eigene E-Mail-Adresse verifizieren](/articles/verifying-your-email-address)“.{% endif %}
- Du führst den Push mit einem Deployment-Schlüssel durch. Wenn Du Übertragungen zum Repository Deiner Website automatisieren möchtest, kannst du stattdessen einen Maschinenbenutzer einrichten. For more information, see "[Managing deploy keys](/v3/guides/managing-deploy-keys/#machine-users)."
- Du verwendest einen Dienst für die fortlaufende Integration, der nicht zum Erstellen Deiner Veröffentlichungsquelle konfiguriert ist. Travis CI erstellt beispielsweise nicht den Branch `gh-pages`, es sei denn, Du fügst den Branch zu einer Liste mit sicheren Branches hinzu. Weitere Informationen findest Du unter „[Build anpassen](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)“ auf Travis CI oder in der Dokumentation Deines Dienstes für die fortlaufende Integration.

{% note %}

**Hinweis:** Es kann bis zu 20 Minuten dauern, bis die Änderungen auf Deiner Website veröffentlicht werden, nachdem Du die Änderungen zu {% data variables.product.product_name %} hinzugefügt hast.

{% endnote %}

Wenn beim Versuch von Jekyll, Deine Website zu erstellen, ein Fehler auftritt, wird eine Build-Fehlermeldung angezeigt. Es gibt zwei Hauptarten an Jekyll-Build-Fehlermeldungen.
- Eine „Page build warning“ (Seiten-Build-Warnung) bedeutet, dass Deine Website erfolgreich erstellt wurde, Du aber Änderungen vornehmen musst, um künftige Probleme zu verhindern.
- Eine Fehlermeldung „Page build failed“ (Seiten-Build fehlgeschlagen) bedeutet, dass Dein Build nicht abgeschlossen werden konnte. Wenn Jekyll einen Grund dafür erkennt, enthält die Fehlermeldung eine Beschreibung der Ursache.

Weitere Informationen zur Behebung von Build-Fehlern findest Du unter „[Behebung von Jekyll-Build-Fehlern bei {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites).“

### Jekyll-Build-Fehlermeldungen anzeigen

Wir empfehlen Dir, Deine Website lokal zu testen. Dadurch siehst Du Build-Fehlermeldungen in der Befehlszeile und kannst Build-Fehler beheben, bevor Du die Änderungen zu {% data variables.product.product_name %} überträgst. Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_pages %}-Website lokal mit Jekyll testen](/articles/testing-your-github-pages-site-locally-with-jekyll).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Wenn Du einen Pull Request erstellst, um Deine Veröffentlichungsquelle auf {% data variables.product.product_name %} zu aktualisieren, kannst Du auf der Registerkarte **Checks** (Prüfungen) des Pull Requests die Build-Fehlermeldungen einsehen. Weitere Informationen findest Du unter „[Informationen zu Statuschecks](/articles/about-status-checks).“
{% endif %}

Wenn Du Änderungen zu Deiner Veröffentlichungsquelle auf {% data variables.product.product_name %} überträgst, versucht {% data variables.product.prodname_pages %}, Deine Website zu erstellen. Wenn der Build fehlschlägt, wird eine E-Mail an Deine primäre E-Mail-Adresse gesendet. Du erhältst auch bei Build-Warnungen E-Mail-Benachrichtigungen. {% data reusables.pages.build-failure-email-server %}

Build-Fehler (aber keine Build-Warnungen) für Deine Website kannst Du auf {% data variables.product.product_name %} auf der Registerkarte **Settings** (Einstellungen) des Repositorys Deiner Website sehen.

Du kannst einen Drittanbieterdienst, beispielsweise [Travis CI](https://travis-ci.org/), so konfigurieren, dass nach jedem Commit Fehlermeldungen angezeigt werden.

1. Wenn Du dies noch nicht getan hast, füge eine Datei namens _Gemfile_ in das Root-Verzeichnis Deiner Veröffentlichungsquelle ein. Die Gemfile-Datei sollte den folgenden Inhalt aufweisen:
  ```
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Konfiguriere das Repository Deiner Website für die gewünschte Test-Dienstleistung. Wenn Du beispielsweise [Travis CI](https://travis-ci.org/) verwenden möchtest, füge eine Datei namens _.travis.yml_ in das Root-Verzeichnis Deiner Veröffentlichungsquelle ein, und zwar mit folgendem Inhalt:
  ```
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Du musst Dein Repository allenfalls mit dem Drittanbieter-Testdienst aktivieren. Weitere Informationen findest Du in der Dokumentation Deines Test-Dienstleisters.
