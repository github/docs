---
title: Informationen zu Jekyll-Build-Fehler für GitHub Pages-Websites
intro: 'Wenn beim Erstellen deiner {% data variables.product.prodname_pages %}-Website (lokal oder auf {% data variables.product.product_name %}) mit Jekyll ein Fehler auftritt, erhältst du eine Fehlermeldung mit weiteren Informationen.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648239'
---
## Informationen zu Jekyll-Build-Fehlern

{% ifversion pages-custom-workflow %} Wenn die Veröffentlichung aus einem Branch erfolgt, wird manchmal von{% else %}Manchmal wird von{% endif %} {% data variables.product.prodname_pages %} versucht, deine Website zu erstellen, nachdem du Änderungen an die Veröffentlichungsquelle deiner Website gepusht hast.{% ifversion fpt or ghec %}
- Der Benutzer, der die Änderungen gepusht hat, hat seine E-Mail-Adresse nicht verifiziert. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address).{% endif %}
- Du führst den Push mit einem Deployment-Schlüssel durch. Wenn du das Pushen an das Repository deiner Website automatisieren möchtest, kannst du stattdessen eine*n Computerbenutzer*in einrichten. Weitere Informationen findest du unter [Verwalten von Bereitstellungsschlüsseln](/developers/overview/managing-deploy-keys#machine-users).
- Du verwendest einen CI-Dienst, der nicht zum Erstellen deiner Veröffentlichungsquelle konfiguriert ist. Beispielsweise erstellt Travis CI den `gh-pages`-Branch nicht, bis du den Branch zur Liste sicherer Branches hinzufügst. Weitere Informationen zu Travis CI findest du unter [Anpassen des Builds](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches) oder in der Dokumentation deines CI-Diensts.

{% note %}

**Hinweis**: Nach dem Pushen der Änderung an {% data variables.product.product_name %} kann es bis zu 10 Minuten dauern, bis die Änderungen an deiner Website veröffentlicht werden.

{% endnote %}

{% ifversion build-pages-with-actions %} Wenn bei dem Versuch von Jekyll, deine Website zu erstellen, ein Fehler auftritt, wird eine Buildfehlermeldung angezeigt.
{% else %} Wenn bei dem Versuch von Jekyll, deine Website zu erstellen, ein Fehler auftritt, wird eine Buildfehlermeldung angezeigt. Es gibt zwei Hauptarten an Jekyll-Build-Fehlermeldungen.
- Die Meldung „Page build warning“ (Seitenbuildwarnung) bedeutet, dass deine Website erfolgreich erstellt wurde, du aber Änderungen vornehmen musst, um künftige Probleme zu verhindern.
- Die Meldung „Page build failed“ (Seitenbuild fehlgeschlagen) bedeutet, dass dein Build nicht abgeschlossen werden konnte. Wenn Jekyll einen Grund dafür erkennt, enthält die Fehlermeldung eine Beschreibung der Ursache.
{% endif %}

Weitere Informationen zur Behandlung von Buildfehlern findest du unter [Behandelung von Jekyll-Buildfehlern für {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites).

{% ifversion build-pages-with-actions %}
## Anzeigen von Jekyll-Buildfehlermeldungen mit {% data variables.product.prodname_actions %}

Deine {% data variables.product.prodname_pages %}-Website wird standardmäßig mit einer {% data variables.product.prodname_actions %}-Workflowausführung erstellt und bereitgestellt, es sei denn, du hast deine {% data variables.product.prodname_pages %}-Website so konfiguriert, dass ein anderes CI-Tool verwendet wird. Du kannst die Workflowausführung deiner {% data variables.product.prodname_pages %}-Website überprüfen, um nach möglichen Buildfehler zu suchen, indem du die Workflowausführungen deines Repositorys überprüfst. Weitere Informationen findest du unter [Aufrufen des Workflow-Ausführungsverlaufs](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).  Weitere Informationen zum erneuten Ausführen des Workflows im Falle eines Fehlers findest du unter [Erneutes Ausführen von Workflows und Aufträgen](/actions/managing-workflow-runs/re-running-workflows-and-jobs).
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## Anzeigen der Buildfehler deines Repositorys auf {% data variables.product.product_name %}

Du kannst Buildfehler (aber keine Buildwarnungen) für deine Website auf {% data variables.product.product_name %} auf der Registerkarte **Einstellungen** im Repository deiner Website anzeigen.
{% endif %}

## Lokales Anzeigen von Jekyll-Buildfehlermeldungen

Wir empfehlen dir, deine Website lokal zu testen. Dadurch siehst du Build-Fehlermeldungen in der Befehlszeile und kannst Build-Fehler beheben, bevor du die Änderungen zu {% data variables.product.product_name %} pushst. Weitere Informationen findest du unter [Lokales Testen deiner {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll).

## Anzeigen von Jekyll-Buildfehlermeldungen in deinem Pull Request

{% ifversion pages-custom-workflow %} Wenn die Veröffentlichung aus einem Branch erfolgt und du{% else %}Wenn{% endif %} du einen Pull Request erstellst, um deine Veröffentlichungsquelle auf {% data variables.product.product_name %} zu aktualisieren, kannst du Fehlermeldungen auf der Registerkarte **Überprüfungen** des Pull Requests anzeigen. Weitere Informationen findest du unter [Informationen zu Statusüberprüfungen](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

{% ifversion pages-custom-workflow %} Wenn du für die Veröffentlichung einen benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow verwendest, musst du den Workflow so konfigurieren, dass er beim `pull_request`-Trigger ausgeführt wird, um Buildfehlermeldungen in deinem Pull Request anzeigen zu können. In diesem Fall wird empfohlen, alle Bereitstellungsschritte zu überspringen, wenn der Workflow vom `pull_request`-Ereignis ausgelöst wurde. Auf diese Weise kannst du Buildfehler anzeigen, ohne die Änderungen aus deinem Pull Request auf deiner Website bereitzustellen. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/using-workflows/events-that-trigger-workflows#pull_request) und [Ausdrücke](/actions/learn-github-actions/expressions).{% endif %}

## Anzeigen von Jekyll-Buildfehlern per E-Mail

{% ifversion pages-custom-workflow %} Wenn die Veröffentlichung aus einem Branch erfolgt und{% else %}Wenn{% endif %} du Änderungen an deine Veröffentlichungsquelle auf {% data variables.product.product_name %} pushst, versucht {% data variables.product.prodname_pages %}, deine Website zu erstellen. Wenn der Build fehlschlägt, wird eine E-Mail an deine primäre E-Mail-Adresse gesendet. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %} Wenn du für die Veröffentlichung einen benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow verwendest, musst du den Workflow so konfigurieren, dass er beim `pull_request`-Trigger ausgeführt wird, um E-Mails über Buildfehler in deinem Pull Request anzeigen zu können. In diesem Fall wird empfohlen, alle Bereitstellungsschritte zu überspringen, wenn der Workflow vom `pull_request`-Ereignis ausgelöst wurde. Auf diese Weise kannst du Buildfehler anzeigen, ohne die Änderungen aus deinem Pull Request auf deiner Website bereitzustellen. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/using-workflows/events-that-trigger-workflows#pull_request) und [Ausdrücke](/actions/learn-github-actions/expressions).{% endif %}

## Anzeigen von Jekyll-Buildfehlermeldungen in deinem Pull Request mit einem CI-Drittanbieterdienst

Du kannst einen Drittanbieterdienst wie [Travis CI](https://travis-ci.org/) so konfigurieren, dass nach jedem Commit Fehlermeldungen angezeigt werden.

1. Füge eine Datei namens _Gemfile_ zum Stamm deiner Veröffentlichungsquelle mit den folgenden Inhalten hinzu (falls diese noch nicht vorhanden ist):
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Konfiguriere das Repository deiner Website für den gewünschten Testdienst. Um beispielsweise [Travis CI](https://travis-ci.org/) zu verwenden, füge eine Datei namens _.travis.yml_ zum Stamm deiner Veröffentlichungsquelle mit den folgenden Inhalten hinzu:
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Du musst dein Repository eventuell mit dem Drittanbieter-Testdienst aktivieren. Weitere Informationen findest du in der Dokumentation deines Testdiensts.
