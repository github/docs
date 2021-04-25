---
title: Fehlerbehebung bei Jekyll-Build-Fehlern für GitHub Pages-Websites
intro: 'Mithilfe der Jekyll-Build-Fehlermeldungen können Sie Probleme auf Ihrer {% data variables.product.prodname_pages %}-Website beheben.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder/
  - /articles/page-build-failed-invalid-submodule/
  - /articles/page-build-failed-missing-submodule/
  - /articles/page-build-failed-markdown-errors/
  - /articles/page-build-failed-config-file-error/
  - /articles/page-build-failed-unknown-tag-error/
  - /articles/page-build-failed-tag-not-properly-terminated/
  - /articles/page-build-failed-tag-not-properly-closed/
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory/
  - /articles/page-build-failed-file-is-a-symlink/
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository/
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded/
  - /articles/page-build-failed-invalid-post-date/
  - /articles/page-build-failed-invalid-sass-or-scss/
  - /articles/page-build-failed-invalid-highlighter-language/
  - /articles/page-build-failed-relative-permalinks-configured/
  - /articles/page-build-failed-syntax-error-in-for-loop/
  - /articles/page-build-failed-invalid-yaml-in-data-file/
  - /articles/page-build-failed-date-is-not-a-valid-datetime/
  - /articles/troubleshooting-github-pages-builds/
  - /articles/troubleshooting-jekyll-builds/
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Seiten
---

### Fehlerbehebung bei Build-Fehlern

Wenn beim Erstellen Ihrer {% data variables.product.prodname_pages %}-Website (lokal oder auf {% data variables.product.product_name %}) mit Jekyll ein Fehler auftritt, können Sie die Fehlerbehebung mithilfe der Fehlermeldungen durchführen. Weitere Informationen zu Fehlermeldungen und zum Abrufen dieser Meldungen findest Du unter „[Behebung von Jekyll-Build-Fehlern bei {% data variables.product.prodname_pages %}-Websites](/articles/about-jekyll-build-errors-for-github-pages-sites).“

Wenn Du eine generische Fehlermeldung erhalten hast, suche nach häufigen Fehlern.
- Du verwendest nicht unterstützte Plug-Ins. For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll#plugins)."{% if currentVersion == "free-pro-team@latest" %}
- Dein Repository hat die Größenbeschränkung für Repositorys überschritten. Weitere Informationen findest Du unter „[Wie lautet mein Disk-Kontingent?](/articles/what-is-my-disk-quota)“.{% endif %}
- Du hast die `source`-Einstellung in der Datei *_config.yml* geändert. {% data variables.product.prodname_pages %} überschreibt diese Einstellung beim Build-Prozess.
- Ein Dateiname in Deiner Veröffentlichungsquelle enthält einen Doppelpunkt (`:`). Dies wird nicht unterstützt.

Wenn Du eine spezifische Fehlermeldung erhalten hast, lies die nachfolgenden Informationen zur Fehlerbehebung für die jeweilige Fehlermeldung.

Wenn Sie einen Fehler behoben haben, übertragen Sie die Änderungen mit einem Push-Vorgang an die Veröffentlichungsquelle der Website, sodass ein neuer Build auf {% data variables.product.product_name %} ausgelöst wird.

### Fehler bei der Dateikonfiguration

Dieser Fehler bedeutet, dass der Build Deiner Website fehlgeschlagen ist, da die Datei *_config.yml* Syntaxfehler enthält.

Zur Fehlerbehebung prüfe, ob die Datei *_config.yml* diesen Regeln entspricht:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

### Datum besitzt ungültiges Datum/Uhrzeit

Dieser Fehler bedeutet, dass eine Seite der Website einen ungültigen Wert für Datum/Uhrzeit enthält.

Zur Fehlerbehebung prüfe die in der Fehlermeldung genannte Datei und deren Layouts auf Aufrufe datumsbezogener Liquid-Filter. Prüfe, ob alle Variablen, die an datumsabhängige Liquid-Filter übergeben werden, Werte enthalten und nicht `nil` oder `""` übergeben. Weitere Informationen findest Du unter „[Liquid filters](https://help.shopify.com/en/themes/liquid/filters)“ (Liquid-Filter) in der Liquid-Dokumentation.

### Datei ist im Verzeichnis „includes“ nicht vorhanden

Dieser Fehler bedeutet, dass Dein Code auf eine Datei verweist, die sich nicht im Verzeichnis *_includes* befindet.

{% data reusables.pages.search-for-includes %} Wenn sich referenzierte Dateien nicht im Verzeichnis *_includes* befinden, kopiere oder verschiebe die betreffenden Dateien in das Verzeichnis *_includes*.

### Datei ist ein Symlink

Dieser Fehler bedeutet, dass der Code auf eine per Symlink verknüpfte Datei verweist, die sich nicht in der Veröffentlichungsquelle für Deine Website befindet.

{% data reusables.pages.search-for-includes %} Wenn per Symlink verlinkte Dateien referenziert werden, kopieren oder verschieben Sie die betreffenden Dateien in das Verzeichnis *_includes*.

### Datei ist nicht ordnungsgemäß UTF-8-codiert

Dieser Fehler bedeutet, dass Du nicht lateinische Buchstaben wie `日本語` verwendet hast, ohne dem Computer mitzuteilen, dass er diese Symbole erwarten soll.

Zur Fehlerbehebung erzwinge die UTF-8-Codierung. Trage hierzu die folgende Zeile in die Datei *_config.yml* ein:
```yaml
encoding: UTF-8
```

### Textmarkersprache ungültig

Dieser Fehler bedeutet, dass Du nicht die Syntaxmarkierer [Rouge](https://github.com/jneen/rouge) oder [Pygments](http://pygments.org/) in der Konfigurationsdatei angegeben hast, sondern einen anderen Markierer.

Zur Fehlerbehebung aktualisiere die Datei *_config.yml*, und gib [Rouge](https://github.com/jneen/rouge) oder [Pygments](http://pygments.org/) an. Weitere Informationen findest Du unter „[Informationen zu {% data variables.product.product_name %} und Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting).“

### Ungültiges Beitragsdatum

Dieser Fehler bedeutet, dass ein Beitrag auf Deiner Website ein ungültiges Datum im Dateinamen oder in der YAML-Frontmatter enthält.

Zur Fehlerbehebung formatiere alle Datumsangaben als YYYY-MM-DD HH:MM:SS für UTC, und prüfe, ob gültige Kalenderdaten angegeben sind. Soll eine Zeitzone außerhalb der UTC angegeben werden, verwende das Format YYYY-MM-DD HH:MM:SS +/-TTTT, beispielsweise `2014-04-18 11:30:00 +0800`.

Wenn Du ein Datumsformat in der Datei *_config.yml* festlegst, achte auf das richtige Format.

### Sass oder SCSS ungültig

Dieser Fehler bedeutet, dass Dein Repository eine Sass- oder SCSS-Datei mit ungültigem Inhalt enthält.

Zur Fehlerbehebung prüfe die in der Fehlermeldung genannte Zeilennummer auf ungültige Sass oder SCSS. Damit solche Fehler in Zukunft vermieden werden, installiere einen Sass- oder SCSS-Linter für Deinen meistgenutzten Texteditor.

### Ungültiges Submodul

Dieser Fehler bedeutet, dass Dein Repository ein nicht ordnungsgemäß initialisiertes Submodul enthält.

{% data reusables.pages.remove-submodule %}

Soll das Submodul dennoch verwendet werden, referenziere das Submodul mit `https://` (nicht mit `http://`), und stelle sicher, dass sich das Submodul in einem öffentlichen Repository befindet.

### Ungültige YAML in der Datendatei

Dieser Fehler bedeutet, dass mindestens eine Datei im Ordner *_data* ungültige YAML enthält.

Zur Fehlerbehebung prüfe, ob die YAML-Dateien im Ordner *_data* diesen Regeln entsprechen:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Weitere Informationen zu Jekyll-Datendateien findest Du unter „[Data Files](https://jekyllrb.com/docs/datafiles/)“ (Datendateien) in der Jekyll-Dokumentation.

### Markdown-Fehler

Dieser Fehler bedeutet, dass Dein Repository Markdown-Fehler enthält.

Zur Fehlerbehebung verwende einen unterstützten Markdown-Prozessor. Weitere Informationen findest Du unter „[Markdown-Prozessor für Deine {% data variables.product.prodname_pages %}-Website mit Jekyll festlegen](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll).“

Prüfe außerdem, ob die in der Fehlermeldung genannte Datei eine gültige Markdown-Syntax umfasst. Weitere Informationen findest Du unter „[Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax)“ bei Daring Fireball.

### Dokumentordner fehlt

This error means that you have chosen the `docs` folder on a branch as your publishing source, but there is no `docs` folder in the root of your repository on that branch.

To troubleshoot, if your `docs` folder was accidentally moved, try moving the `docs` folder back to the root of your repository on the branch you chose for your publishing source. Wenn der Ordner `docs` versehentlich gelöscht wurde, kannst Du wie folgt vorgehen:
- Mache den Löschvorgang mit Git rückgängig. Weitere Informationen findest Du unter „[git-revert](https://git-scm.com/docs/git-revert.html) in der Git-Dokumentation.
- Create a new `docs` folder in the root of your repository on the branch you chose for your publishing source and add your site's source files to the folder. Weitere Informationen finden Sie unter „[Neue Dateien erstellen](/articles/creating-new-files)“.
- Ändere die Veröffentlichungsquelle. Weitere Informationen findest Du unter „[Eine Veröffentlichungsquelle für {% data variables.product.prodname_pages %} konfigurieren](/articles/configuring-a-publishing-source-for-github-pages).“

### Submodul fehlt

Dieser Fehler bedeutet, dass Dein Repository ein nicht vorhandenes oder ein nicht ordnungsgemäß initialisiertes Submodul enthält.

{% data reusables.pages.remove-submodule %}

Soll ein Submodul verwendet werden, initialisiere das Submodul. Weitere Informationen findest Du unter „[Git-Tools – Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)“ im _Pro Git_-Buch.

### Relative Permalinks konfiguriert

Dieser Fehler bedeutet, dass Sie relative Permalinks in der Datei *_config.yml* nutzen, die nicht von {% data variables.product.prodname_pages %} unterstützt werden.

Permalinks sind permanente URLs, die auf einen bestimmten Beitrag oder eine bestimmte Seite Deiner Website verweisen. Absolute Permalinks beginnen mit dem Root der Website, relative Permalinks dagegen mit dem Ordner, in dem sich die referenzierte Seite befindet. {% data variables.product.prodname_pages %} und Jekyll unterstützen relative Permalinks nicht mehr. Weitere Informationen zu Permalinks findest Du unter „[Permalinks](https://jekyllrb.com/docs/permalinks/)“ in der Jekyll-Dokumentation.

Zur Fehlerbehebung entferne die Konfigurationsoption `relative_permalinks` aus der Datei *_config.yml* der Website, und ändere alle relativen Permalinks auf der Website in absolute Permalinks. Weitere Informationen findest Du unter „[Dateien in Deinem Repository bearbeiten](/articles/editing-files-in-your-repository).“

### Symlink ist im Repository Deiner Website nicht vorhanden

Dieser Fehler bedeutet, dass die Website einen symbolischen Link (Symlink) enthält, der sich nicht in der Veröffentlichungsquelle für die Website befindet. Weitere Informationen zu Symlinks findest Du unter „[Symbolic Link](https://en.wikipedia.org/wiki/Symbolic_link)“ (Symbolische Verknüpfung) auf Wikipedia.

Zur Fehlerbehebung prüfe, ob die in der Fehlermeldung genannte Datei für den Build der Website erforderlich ist. Falls nicht (oder falls die Datei kein Symlink sein soll), lösche die Datei. Wenn die Datei, auf die der Symlink verweist, für den Build der Website erforderlich ist, stelle sicher, dass die Datei oder das Verzeichnis, auf das der Symlink verweist, in der Veröffentlichungsquelle der Website vorhanden ist. To include external assets, consider using {% if currentVersion == "free-pro-team@latest" %}`git submodule` or {% endif %}a third-party package manager such as [Bower](https://bower.io/).{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Using submodules with {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)."{% endif %}

### Syntaxfehler in der „for“-Schleife

Dieser Fehler bedeutet, dass Dein Code ungültige Syntax in einer Liquid-`for`-Schleifen-Deklaration enthält.

Zur Fehlerbehebung prüfe die Syntax in allen `for`-Schleifen in der Datei, die in der Fehlermeldung genannt ist. Weitere Informationen zur korrekten Syntax für `for`-Schleifen findest Du unter „[Iteration tags](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)“ (Iterations-Tags) in der Liquid-Dokumentation.

### Tag nicht ordnungsgemäß geschlossen

Diese Fehlermeldung bedeutet, dass Dein Code ein logisches Tag enthält, das nicht korrekt geschlossen ist. {% raw %}`{% capture example_variable %}` muss beispielsweise mit `{% endcapture %}`{% endraw %} geschlossen werden.

Zur Fehlerbehebung prüfe, ob alle logischen Tags in der Datei, die in der Fehlermeldung genannt ist, ordnungsgemäß geschlossen sind. Weitere Informationen findest Du unter „[Liquid tags](https://help.shopify.com/en/themes/liquid/tags)“ (Liquid-Tags) in der Liquid-Dokumentation.

### Tag nicht ordnungsgemäß beendet

Diese Fehlermeldung bedeutet, dass Dein Code ein Ausgabe-Tag enthält, das nicht korrekt beendet wurde. Beispiel: {% raw %}`{{ page.title }` statt `{{ page.title }}`{% endraw %}.

Zur Fehlerbehebung prüfe, ob alle Ausgabe-Tags in der Datei, die in der Fehlermeldung genannt ist, mit `}}` beendet wurden. Weitere Informationen findest Du unter „[Liquid objects](https://help.shopify.com/en/themes/liquid/objects)“ (Liquid-Objekte) in der Liquid-Dokumentation.

### Unbekannter Tag-Fehler

Dieser Fehler bedeutet, dass Dein Code ein nicht erkanntes Liquid-Tag enthält.

Zur Fehlerbehebung prüfe, ob alle Liquid-Tags in der Datei, die in der Fehlermeldung genannt ist, den Jekyll-Standardvariablen entsprechen und ob die Tag-Namen korrekt geschrieben sind. For a list of default variables, see "[Variables](https://jekyllrb.com/docs/variables/)" in the Jekyll documentation.

Nicht unterstützte Plug-ins sind häufig die Quelle für unbekannte Tags. Wenn Sie ein nicht unterstütztes Plug-in auf der Website verwenden, also die Website lokal erstellen und die statischen Dateien per Push-Verfahren an {% data variables.product.product_name %} übertragen, darf das Plug-in keine Tags umfassen, die nicht in den Jekyll-Standardvariablen aufgeführt sind. Eine Liste der unterstützten Plug-ins findest Du unter „[Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll#plugins).“
