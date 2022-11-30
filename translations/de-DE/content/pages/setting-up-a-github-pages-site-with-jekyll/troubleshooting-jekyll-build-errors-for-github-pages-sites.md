---
title: Fehlerbehebung bei Jekyll-Build-Fehlern für GitHub Pages-Websites
intro: 'Mithilfe der Jekyll-Build-Fehlermeldungen kannst du Probleme auf deiner {% data variables.product.prodname_pages %}-Website beheben.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
ms.openlocfilehash: 224f626df144ad249a799767984118778202e7b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883465'
---
## Fehlerbehebung bei Build-Fehlern

Wenn beim Erstellen deiner {% data variables.product.prodname_pages %}-Website (lokal oder auf {% data variables.product.product_name %}) mit Jekyll ein Fehler auftritt, kannst du die Fehlerbehebung mithilfe der Fehlermeldungen durchführen. Weitere Informationen zu Fehlermeldungen und deren Anzeige findest du unter [Informationen zu Jekyll-Buildfehlern für {% data variables.product.prodname_pages %}-Websites](/articles/about-jekyll-build-errors-for-github-pages-sites).

Wenn du eine generische Fehlermeldung erhalten hast, suche nach häufigen Fehlern.
- Du verwendest nicht unterstützte Plug-Ins. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll#plugins).{% ifversion fpt or ghec %}
- Dein Repository hat die Größenbeschränkung für Repositorys überschritten. Weitere Informationen findest du unter [Welches Datenträgerkontingent gilt für mich?](/articles/what-is-my-disk-quota).{% endif %}
- Du hast die `source`-Einstellung in deiner Datei *_config.yml* geändert. {% ifversion pages-custom-workflow %} Wenn du deine Website über einen Branch veröffentlichst, überschreibt {% endif %}{% data variables.product.prodname_pages %} diese Einstellung während des Buildvorgangs.
- Ein Dateiname in deinen veröffentlichten Dateien enthält einen Doppelpunkt (`:`). Dies wird nicht unterstützt.

Wenn du eine bestimmte Fehlermeldung erhalten hast, lies die nachfolgenden Informationen zur Fehlerbehebung für die jeweilige Fehlermeldung.

{% ifversion pages-custom-workflow %} Nachdem du Fehler behoben hast, löse einen anderen Build aus, indem du die Änderungen an den Quellbranch deiner Website pushst (wenn die Veröffentlichung über einen Branch erfolgt) oder deinen benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow auslöst (wenn du die Veröffentlichung mit {% data variables.product.prodname_actions %} vornimmst).{% else %}Nachdem du Fehler behoben hast, pushe die Änderungen an die Veröffentlichungsquelle deiner Website, um einen anderen Build auf {% data variables.product.product_name %}auszulösen.{% endif %}

## Fehler bei der Dateikonfiguration

Dieser Fehler bedeutet, dass deine Website nicht erstellt werden konnte, weil die Datei *_config.yml* Syntaxfehler enthält.

Stelle zur Problembehandlung sicher, dass deine *_config.yml*-Datei folgenden Regeln folgt:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## Datum besitzt ungültiges Datum/Uhrzeit

Dieser Fehler bedeutet, dass eine Seite der Website einen ungültigen Wert für Datum/Uhrzeit enthält.

Zur Fehlerbehebung prüfe die in der Fehlermeldung genannte Datei und deren Layouts auf Aufrufe datumsbezogener Liquid-Filter. Prüfe, ob alle Variablen, die an datumsabhängige Liquid-Filter übergeben werden, Werte enthalten und nicht `nil` oder `""` übergeben. Weitere Informationen findest du in der Liquid-Dokumentation unter [Liquid-Filter](https://help.shopify.com/en/themes/liquid/filters).

## Datei ist im Verzeichnis „includes“ nicht vorhanden

Dieser Fehler bedeutet, dass dein Code auf eine Datei verweist, die sich nicht im Verzeichnis *_includes* befindet.

{% data reusables.pages.search-for-includes %} Wenn sich eine der Dateien, auf die du verwiesen hast, nicht im Verzeichnis *_includes* befindet, kopiere oder verschiebe die Dateien in das Verzeichnis *_includes*.

## Datei ist ein Symlink

Dieser Fehler bedeutet, dass der Code auf eine per Symlink verknüpfte Datei verweist, die sich nicht in den veröffentlichten Dateien für deine Website befindet.

{% data reusables.pages.search-for-includes %} Wenn eine der Dateien, auf die du verwiesen hast, per Symlink verknüpft ist, kopiere oder verschiebe die Datei in das Verzeichnis *_includes*.

## Datei ist nicht ordnungsgemäß UTF-8-codiert

Dieser Fehler bedeutet, dass du nicht lateinische Buchstaben wie `日本語` verwendet hast, ohne dem Computer mitzuteilen, dass er diese Symbole erwarten soll.

Zur Problembehandlung erzwingst du die UTF-8-Kodierung, indem du die folgende Zeile deiner *_config.yml*-Datei hinzufügst:
```yaml
encoding: UTF-8
```

## Textmarkersprache ungültig

Dieser Fehler bedeutet, dass du andere Syntaxmarker als [Rouge](https://github.com/jneen/rouge) oder [Pygments](http://pygments.org/) in deiner Konfigurationsdatei angegeben hast.

Zur Problembehandlung aktualisierst du deine *_config.yml-Datei*, um [Rouge](https://github.com/jneen/rouge) oder [Pygments](http://pygments.org/) anzugeben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.product_name %} und Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting).

## Ungültiges Beitragsdatum

Dieser Fehler bedeutet, dass ein Beitrag auf deiner Website ein ungültiges Datum im Dateinamen oder im YAML-Frontmatter enthält.

Zur Fehlerbehebung formatiere alle Datumsangaben als YYYY-MM-DD HH:MM:SS für UTC, und prüfe, ob gültige Kalenderdaten angegeben sind. Um eine Zeitzone mit einer Abweichung von UTC festzulegen, verwende das Format JJJJ-MM-TT hh:mm:ss +/- tttt, z. B. `2014-04-18 11:30:00 +0800`.

Wenn du ein Datumsformat in deiner Datei *_config.yml* angibst, stelle sicher, dass das Format richtig ist.

## Sass oder SCSS ungültig

Dieser Fehler bedeutet, dass dein Repository eine Sass- oder SCSS-Datei mit ungültigem Inhalt enthält.

Zur Fehlerbehebung prüfe die in der Fehlermeldung genannte Zeilennummer auf ungültige Sass oder SCSS. Damit solche Fehler in Zukunft vermieden werden, installiere einen Sass- oder SCSS-Linter für deinen meistgenutzten Text-Editor.

## Ungültiges Submodul

Dieser Fehler bedeutet, dass dein Repository ein nicht ordnungsgemäß initialisiertes Submodul enthält.

{% data reusables.pages.remove-submodule %}

Wenn du das Untermodul verwenden möchtest, stelle sicher, dass du beim Verweisen auf das Untermodul `https://` (nicht `http://`) verwendest, und dass sich das Untermodul in einem öffentlichen Repository befindet.

## Ungültige YAML in der Datendatei

Dieser Fehler bedeutet, dass eine der weiteren Dateien im *_data*-Ordner ungültige YAML enthält.

Stelle zur Problembehandlung sicher, dass die YAML-Dateien in deinem *_data*-Ordner folgende Regeln erfüllen:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Weitere Informationen zu Jekyll-Datendateien findest du in der Jekyll-Dokumentation unter [Datendateien](https://jekyllrb.com/docs/datafiles/).

## Markdown-Fehler

Dieser Fehler bedeutet, dass dein Repository Markdownfehler enthält.

Zur Fehlerbehebung verwende einen unterstützten Markdown-Prozessor. Weitere Informationen findest du unter [Festlegen eines Markdown-Prozessors für deine {% data variables.product.prodname_pages %}-Website mithilfe von Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll).

Prüfe außerdem, ob die in der Fehlermeldung genannte Datei eine gültige Markdown-Syntax umfasst. Weitere Informationen findest du unter [Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax) auf Daring Fireball.

## Dokumentordner fehlt

Dieser Fehler bedeutet, dass du den `docs`-Ordner in einem Branch als Veröffentlichungsquelle ausgewählt hast, aber es gibt in diesem Branch keinen `docs`-Ordner im Stamm deines Repositorys.

Wenn dein `docs`-Ordner versehentlich verschoben wurde, versuche zur Problembehandlung, den `docs`-Ordner zurück in den Stamm deines Repositorys auf dem Branch zu verschieben, den du für deine Veröffentlichungsquelle gewählt hast. Wenn der `docs`-Ordner versehentlich gelöscht wurde, kannst du entweder:
- Mache den Löschvorgang mit Git rückgängig. Weitere Informationen findest du in der Git-Dokumentation unter [git-revert](https://git-scm.com/docs/git-revert.html).
- Erstelle einen neuen `docs`-Ordner im Stamm deines Repositorys auf dem Branch, den du für die Veröffentlichungsquelle ausgewählt hast, und füge die Quelldateien deiner Website dem Ordner hinzu. Weitere Informationen findest du unter [Erstellen neuer Dateien](/articles/creating-new-files).
- Ändere die Veröffentlichungsquelle. Weitere Informationen findest du unter [Konfigurieren einer Veröffentlichungsquelle für {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages).

## Submodul fehlt

Dieser Fehler bedeutet, dass dein Repository ein nicht vorhandenes oder ein nicht ordnungsgemäß initialisiertes Submodul enthält.

{% data reusables.pages.remove-submodule %}

Soll ein Submodul verwendet werden, initialisiere das Submodul. Weitere Informationen findest du unter [Git-Tools – Untermodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) im _Pro Git_-Buch.

## Relative Permalinks konfiguriert

Dieser Fehler bedeutet, dass du relative Permalinks in der Datei *_config.yml* nutzt, die nicht von {% data variables.product.prodname_pages %} unterstützt werden.

Permalinks sind permanente URLs, die auf einen bestimmten Beitrag oder eine bestimmte Seite deiner Website verweisen. Absolute Permalinks beginnen mit dem Root der Website, relative Permalinks dagegen mit dem Ordner, in dem sich die referenzierte Seite befindet. {% data variables.product.prodname_pages %} und Jekyll unterstützen relative Permalinks nicht mehr. Weitere Informationen zu Permalinks findest du in der Jekyll-Dokumentation unter [Permalinks](https://jekyllrb.com/docs/permalinks/).

Entferne zur Problembehandlung die `relative_permalinks`-Zeile aus der Datei *_config.yml*, und formatiere alle relativen Permalinks auf deiner Website in absolute Permalinks um. Weitere Informationen findest du unter [Bearbeiten von Dateien](/repositories/working-with-files/managing-files/editing-files).

## Symlink ist im Repository deiner Website nicht vorhanden

Dieser Fehler bedeutet, dass die Website einen symbolischen Link (Symlink) enthält, der sich nicht in den veröffentlichten Dateien für die Website befindet. Weitere Informationen zu Symlinks findest du unter [Symbolische Verknüpfung](https://en.wikipedia.org/wiki/Symbolic_link) in Wikipedia.

Zur Fehlerbehebung prüfe, ob die in der Fehlermeldung genannte Datei für den Build der Website erforderlich ist. Falls nicht (oder falls die Datei kein Symlink sein soll), lösche die Datei. Wenn die Datei, auf die der Symlink verweist, für den Build der Website erforderlich ist, stelle sicher, dass die Datei oder das Verzeichnis, auf die bzw. das der Symlink verweist, in den veröffentlichten Dateien für deine Website vorhanden ist. Um externe Ressourcen einzubinden, solltest du {% ifversion fpt or ghec %}`git submodule` oder {% endif %}einen Paketmanager eines Drittanbieters wie [Bower](https://bower.io/) verwenden.{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Verwendung von Submodulen mit {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages).{% endif %}

## Syntaxfehler in der „for“-Schleife

Dieser Fehler bedeutet, dass dein Code ungültige Syntax in einer Liquid-`for`-Schleifen-Deklaration enthält.

Vergewissere dich zur Problembehandlung, dass alle `for`-Schleifen in der in der Fehlermeldung erwähnten der Datei die richtige Syntax haben. Weitere Informationen zur richtigen Syntax für `for`-Schleifen findest du in der Liquid-Dokumentation unter [Iterations-Tags](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for).

## Tag nicht ordnungsgemäß geschlossen

Diese Fehlermeldung bedeutet, dass dein Code ein logisches Tag enthält, das nicht korrekt geschlossen ist. {% raw %}`{% capture example_variable %}` muss z. B. von `{% endcapture %}`{% endraw %} geschlossen werden.

Zur Fehlerbehebung prüfe, ob alle logischen Tags in der Datei, die in der Fehlermeldung genannt ist, ordnungsgemäß geschlossen sind. Weitere Informationen findest du in der Liquid-Dokumentation unter [Liquid-Tags](https://help.shopify.com/en/themes/liquid/tags).

## Tag nicht ordnungsgemäß beendet

Diese Fehlermeldung bedeutet, dass dein Code ein output-Tag enthält, das nicht korrekt beendet wurde. Beispiel: {% raw %}`{{ page.title }` anstelle von `{{ page.title }}`{% endraw %}.

Vergewissere dich zur Problembehandlung, dass alle Ausgabe-Tags in der in der Fehlermeldung erwähnten Datei mit `}}` beendet werden. Weitere Informationen findest du in der Liquid-Dokumentation unter [Liquid-Objekte](https://help.shopify.com/en/themes/liquid/objects).

## Unbekannter Tag-Fehler

Dieser Fehler bedeutet, dass dein Code ein nicht erkanntes Liquid-Tag enthält.

Zur Fehlerbehebung prüfe, ob alle Liquid-Tags in der Datei, die in der Fehlermeldung genannt ist, den Jekyll-Standardvariablen entsprechen und ob die Tag-Namen korrekt geschrieben sind. Eine Liste der Standardvariablen findest du in der Jekyll-Dokumentation unter [Variablen](https://jekyllrb.com/docs/variables/).

Nicht unterstützte Plug-ins sind häufig die Quelle für unbekannte Tags. Wenn du ein nicht unterstütztes Plug-in auf der Website verwendest, also die Website lokal erstellen und die statischen Dateien per Push-Verfahren an {% data variables.product.product_name %} übertragen, darf das Plug-in keine Tags umfassen, die nicht in den Jekyll-Standardvariablen aufgeführt sind. Eine Liste der unterstützten Plugins findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll#plugins).
