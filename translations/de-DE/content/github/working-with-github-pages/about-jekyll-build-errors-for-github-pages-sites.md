---
title: Informationen zu Jekyll-Build-Fehler für GitHub Pages-Websites
intro: 'Wenn beim Erstellen Ihrer {% data variables.product.prodname_pages %}-Website (lokal oder auf {% data variables.product.product_name %}) mit Jekyll ein Fehler auftritt, erhalten Sie eine Fehlermeldung mit weiteren Informationen.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zu Jekyll-Build-Fehlern

Sometimes, {% data variables.product.prodname_pages %} will not attempt to build your site after you push changes to your site's publishing source.{% if currentVersion == "free-pro-team@latest" %}
- Der Benutzer, der die Änderungen gepusht hat, hat seine E-Mail-Adresse nicht verifiziert. Weitere Informationen findest Du unter „[Eigene E-Mail-Adresse verifizieren](/articles/verifying-your-email-address)“.{% endif %}
- Du führst den Push mit einem Deployment-Schlüssel durch. Wenn Du Übertragungen zum Repository Deiner Website automatisieren möchtest, kannst du stattdessen einen Maschinenbenutzer einrichten. For more information, see "[Managing deploy keys](/v3/guides/managing-deploy-keys/#machine-users)."
- Du verwendest einen Dienst für die fortlaufende Integration, der nicht zum Erstellen Deiner Veröffentlichungsquelle konfiguriert ist. Travis CI erstellt beispielsweise nicht den Branch `gh-pages`, es sei denn, Du fügst den Branch zu einer Liste mit sicheren Branches hinzu. Weitere Informationen findest Du unter „[Build anpassen](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)“ auf Travis CI oder in der Dokumentation Deines Dienstes für die fortlaufende Integration.

{% note %}

**Hinweis:** Es kann bis zu 20 Minuten dauern, bis die Änderungen auf Ihrer Website veröffentlicht werden, nachdem Sie die Änderungen zu {% data variables.product.product_name %} gepusht haben.

{% endnote %}

Wenn beim Versuch von Jekyll, Deine Website zu erstellen, ein Fehler auftritt, wird eine Build-Fehlermeldung angezeigt. Es gibt zwei Hauptarten an Jekyll-Build-Fehlermeldungen.
- Eine „Page build warning“ (Seiten-Build-Warnung) bedeutet, dass Deine Website erfolgreich erstellt wurde, Du aber Änderungen vornehmen musst, um künftige Probleme zu verhindern.
- Eine Fehlermeldung „Page build failed“ (Seiten-Build fehlgeschlagen) bedeutet, dass Dein Build nicht abgeschlossen werden konnte. Wenn Jekyll einen Grund dafür erkennt, enthält die Fehlermeldung eine Beschreibung der Ursache.

Weitere Informationen zur Behebung von Build-Fehlern findest Du unter „[Behebung von Jekyll-Build-Fehlern bei {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites).“

### Jekyll-Build-Fehlermeldungen anzeigen

Wir empfehlen Ihnen, Ihre Website lokal zu testen. Dadurch sehen Sie Build-Fehlermeldungen in der Befehlszeile und können Build-Fehler beheben, bevor Sie die Änderungen zu {% data variables.product.product_name %} pushen. Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_pages %}-Website lokal mit Jekyll testen](/articles/testing-your-github-pages-site-locally-with-jekyll).“

Wenn Sie einen Pull Request erstellen, um Ihre Veröffentlichungsquelle auf {% data variables.product.product_name %} zu aktualisieren, können Sie auf der Registerkarte **Checks** (Prüfungen) des Pull Requests die Build-Fehlermeldungen einsehen. Weitere Informationen findest Du unter „[Informationen zu Statuschecks](/articles/about-status-checks).“

Wenn Sie Änderungen zu Ihrer Veröffentlichungsquelle auf {% data variables.product.product_name %} pushen, versucht {% data variables.product.prodname_pages %}, Ihre Website zu erstellen. Wenn der Build fehlschlägt, wird eine E-Mail an Deine primäre E-Mail-Adresse gesendet. Du erhältst auch bei Build-Warnungen E-Mail-Benachrichtigungen. {% data reusables.pages.build-failure-email-server %}

Build-Fehler (aber keine Build-Warnungen) für Ihre Website können Sie auf {% data variables.product.product_name %} auf der Registerkarte **Settings** (Einstellungen) des Repositorys Ihrer Website sehen.

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
