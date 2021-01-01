---
title: Informationen zu GitHub Pages und Jekyll
intro: 'Jekyll ist ein Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages/
  - /articles/search-engine-optimization-for-github-pages/
  - /articles/repository-metadata-on-github-pages/
  - /articles/atom-rss-feeds-for-github-pages/
  - /articles/redirects-on-github-pages/
  - /articles/emoji-on-github-pages/
  - /articles/mentions-on-github-pages/
  - /articles/using-jekyll-plugins-with-github-pages/
  - /articles/adding-jekyll-plugins-to-a-github-pages-site/
  - /articles/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zu Jekyll

Jekyll ist ein Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %} und einem vereinfachten Build-Prozess. Jekyll erstellt aus Markdown- und HTML-Dateien eine statische Website und nutzt dabei die von Dir ausgewählten Layouts. Jekyll unterstützt Markdown und Liquid, eine Vorlagensprache, die dynamische Inhalte auf Deiner Website lädt. Weitere Informationen findest Du auf der Website zu [Jekyll](https://jekyllrb.com/).

Jekyll wird von Windows nicht offiziell unterstützt. For more information, see "[Jekyll on Windows](http://jekyllrb.com/docs/windows/#installation)" in the Jekyll documentation.

Wir empfehlen, Jekyll mit {% data variables.product.prodname_pages %} zu verwenden. Wenn Du möchtest, kannst Du aber auch andere Generatoren für statische Websites verwenden oder Deinen eigenen Build-Prozess lokal oder auf einem anderen Server anpassen. Weitere Informationen findest Du unter „[Informationen zu {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators).“

### Jekyll in der {% data variables.product.prodname_pages %}-Website konfigurieren

Du kannst die meisten Jekyll-Einstellungen konfigurieren, beispielsweise das Design und die Plug-ins Deiner Website, indem Du die Datei *_config.yml* bearbeitest. Weitere Informationen findest Du unter „[Konfiguration](https://jekyllrb.com/docs/configuration/)“ in der Jekyll-Dokumentation.

Einige Konfigurationseinstellungen können für {% data variables.product.prodname_pages %}-Websites nicht geändert werden.

```
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

Standardmäßig erstellt Jekyll keine Dateien und Ordner, auf die Folgendes zutrifft:
- sie befinden sich in einem Ordner mit dem Namen `/node_modules` oder `/vendor`
- sie beginnen mit `_`, `.` oder `#`
- sie enden mit `~`
- sie werden von der `exclude`-Einstellung in der Konfigurationsdatei ausgeschlossen

Wenn Du möchtest, dass Jekyll solche Dateien verarbeitet, kannst Du dies mit der `includes`-Einstellung in der Konfigurationsdatei festlegen.

### Frontmatter

{% data reusables.pages.about-front-matter %}

Du kannst `site.github` zu einem Beitrag oder einer Seite hinzufügen, um Repository-Referenz-Metadaten zu Deiner Website hinzuzufügen. Weitere Informationen findest Du unter „[`site.github` verwenden](https://jekyll.github.io/github-metadata/site.github/)“ in der Jekyll-Metadaten-Dokumentation.

### Designs

{% data reusables.pages.add-jekyll-theme %} Weitere Informationen findest Du unter „[Themes](https://jekyllrb.com/docs/themes/)“ (Designs) in der Jekyll-Dokumentation.

{% if currentVersion == "free-pro-team@latest" %}
You can add a supported theme to your site on
{% data variables.product.prodname_dotcom %}. Weitere Informationen findest Du unter „[Unterstützte Designs](https://pages.github.com/themes/)“ auf der {% data variables.product.prodname_pages %}-Website und unter „[Ein Design mit dem Theme-Chooser zur {% data variables.product.prodname_pages %}-Website hinzufügen](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser).“

To use any other open source Jekyll theme hosted on {% data variables.product.prodname_dotcom %}, you can add the theme manually.{% else %} You can add a theme to your site manually.{% endif %} For more information, see{% if currentVersion == "free-pro-team@latest" %} [themes hosted on {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) and{% else %} "[Supported themes](https://pages.github.com/themes/)" on the {% data variables.product.prodname_pages %} site and{% endif %} "[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."

Du kannst alle Standardeinstellungen Deines Designs überschreiben, indem Du die Dateien des Designs bearbeitest. Weitere Informationen findest Du in der Dokumentation zu Deinem Design und unter „[Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)“ (Standardeinstellungen Deines Designs überschreiben) in der Jekyll-Dokumentation.

### Plug-ins

Du kannst Jekyll-Plug-ins herunterladen oder erstellen, um die Funktionalität von Jekyll für Deine Website zu erweitern. Mit dem Plugin [jemoji](https://github.com/jekyll/jemoji) können Sie beispielsweise {% data variables.product.prodname_dotcom %}-Emojis auf allen Seiten Ihrer Website genauso verwenden wie auf {% data variables.product.prodname_dotcom %}. Weitere Informationen findest Du unter „[Plugins](https://jekyllrb.com/docs/plugins/)“ (Plug-ins) in der Jekyll-Dokumentation.

{% data variables.product.prodname_pages %} verwendet Plug-ins, die standardmäßig aktiviert sind und nicht deaktiviert werden können:
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

Du kannst zusätzliche Plug-ins aktivieren, indem Du die Gem des Plug-ins zur `plugins`-Einstellung in der Datei *_config.yml* hinzufügst. Weitere Informationen findest Du unter „[Konfiguration](https://jekyllrb.com/docs/configuration/)“ in der Jekyll-Dokumentation. Eine Liste der unterstützten Plug-ins findest Du unter „[Abhängigkeitsversionen](https://pages.github.com/versions/) auf der {% data variables.product.prodname_pages %}-Website.

Informationen zur Verwendung eines bestimmten Plug-ins findest Du in der dazugehörigen Dokumentation.

{% tip %}

**Tipp:** Um sicherzustellen, dass Sie die aktuellen Versionen aller Plug-ins verwenden, sollten Sie die {% data variables.product.prodname_pages %}-Gem regelmäßig aktualisieren. Weitere Informationen findest Du unter „[GitHub Pages-Website lokal mit Jekyll testen](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)“ und „[Abhängigkeitsversionen](https://pages.github.com/versions/)“ auf der {% data variables.product.prodname_pages %}-Website.

{% endtip %}

{% data variables.product.prodname_pages %} kann keine Websites mit nicht unterstützten Plug-ins erstellen. Wenn Sie nicht unterstützte Plug-ins verwenden möchten, müssen Sie Ihre Website lokal erstellen und die statischen Dateien der Website anschließend zu {% data variables.product.product_name %} pushen.

### Syntaxmarkierung

Damit Ihre Website leichter lesbar ist, werden Code-Ausschnitte auf {% data variables.product.prodname_pages %}-Websites ebenso markiert wie auf {% data variables.product.product_name %}. Weitere Informationen zur Syntaxmarkierung auf {% data variables.product.product_name %} findest Du unter „[Codeblöcke erstellen und markieren](/articles/creating-and-highlighting-code-blocks).“

Standardmäßig werden Codeblöcke auf Deiner Website von Jekyll markiert. Jekyll verwendet den Markierer [Rouge](https://github.com/jneen/rouge), der mit [Pygments](http://pygments.org/) kompatibel ist. Wenn Du in Deiner *_config.yml*-Datei Pygments spezifizierst, wird stattdessen Rouge verwendet. Jekyll kann keinen anderen Syntaxmarkierer verwenden. Wenn Du einen anderen Syntaxmarkierer in der *_config.yml*-Datei angibst, wird eine Build-Warnung für die Website angezeigt. Weitere Informationen findest Du unter „[Informationen zu Jekyll-Build-Fehler für {% data variables.product.prodname_pages %}-Websites](/articles/about-jekyll-build-errors-for-github-pages-sites).“

Wenn Du einen anderen Markierer verwenden möchtest, z. B. `highlight.js`, musst Du die Jekyll-Syntaxmarkierung deaktivieren, indem Du die *_config.yml*-Datei Deines Projekts änderst.

```
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Wenn Ihr Design kein CSS für die Syntaxmarkierung enthält, können Sie das CSS von {% data variables.product.prodname_dotcom %} zur Syntaxmarkierung erzeugen und zur Datei `style.css` des Projekts hinzufügen.

```shell
$ rougify style github > style.css
```

### Website lokal erstellen

{% data reusables.pages.test-locally %}
