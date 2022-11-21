---
title: Informationen zu GitHub Pages und Jekyll
intro: 'Jekyll ist ein Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: b0f97750f7fb4999e3b33c768ad2495f4c0b6719
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648207'
---
## Informationen zu Jekyll

Jekyll ist ein Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %} und einem vereinfachten Build-Prozess. Jekyll erstellt aus Markdown- und HTML-Dateien eine statische Website und nutzt dabei die von Dir ausgewählten Layouts. Jekyll unterstützt Markdown und Liquid, eine Vorlagensprache, die dynamische Inhalte auf deiner Website lädt. Weitere Informationen findest du unter [Jekyll](https://jekyllrb.com/).

Jekyll wird von Windows nicht offiziell unterstützt. Weitere Informationen findest du in der Jekyll-Dokumentation unter „[Jekyll on Windows](http://jekyllrb.com/docs/windows/#installation)“.

Wir empfehlen, Jekyll mit {% data variables.product.prodname_pages %} zu verwenden. Wenn du möchtest, kannst du aber auch andere Generatoren für statische Websites verwenden oder deinen eigenen Build-Prozess lokal oder auf einem anderen Server anpassen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators).

## Jekyll in der {% data variables.product.prodname_pages %}-Website konfigurieren

Du kannst die meisten Jekyll-Einstellungen konfigurieren, z. B. das Design und die Plug-Ins deiner Website, indem du die Datei *_config.yml* bearbeitest. Weitere Informationen findest du in der Jekyll-Dokumentation unter „[Configuration](https://jekyllrb.com/docs/configuration/)“.

Einige Konfigurationseinstellungen können für {% data variables.product.prodname_pages %}-Websites nicht geändert werden.

```yaml
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
- befinden sich in einem Ordner namens `/node_modules` oder `/vendor`.
- beginnen mit `_`, `.` oder `#`.
- enden mit `~`.
- werden von der `exclude`-Einstellung in der Konfigurationsdatei ausgeschlossen.

Wenn du möchtest, dass Jekyll solche Dateien verarbeitet, kannst du dies mit der `include`-Einstellung in der Konfigurationsdatei festlegen.

## Frontmatter

{% data reusables.pages.about-front-matter %}

Du kannst `site.github` einem Beitrag oder einer Seite hinzufügen, um deiner Website Metadaten für Repositoryreferenzen hinzuzufügen. Weitere Informationen findest du in der Dokumentation zu Jekyll-Metadaten unter „[Using `site.github`](https://jekyll.github.io/github-metadata/site.github/)“.

## Designs

{% data reusables.pages.add-jekyll-theme %} Weitere Informationen findest du in der Jekyll-Dokumentation unter „[Themes](https://jekyllrb.com/docs/themes/)“.

{% ifversion fpt or ghec %} Du kannst deiner Website auf {% data variables.product.prodname_dotcom %} ein unterstütztes Design hinzufügen. Weitere Informationen findest du unter [Unterstützte Designs](https://pages.github.com/themes/) auf der {% data variables.product.prodname_pages %}-Website und unter [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mit von Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

Zur Verwendung eines beliebigen anderen auf {% data variables.product.prodname_dotcom %} gehosteten Open-Source-Designs von Jekyll kannst du dieses manuell hinzufügen.{% else %} Du kannst deiner Website ein Design manuell hinzufügen.{% endif %} Weitere Informationen findest du unter{% ifversion fpt or ghec %} [Auf {% data variables.product.prodname_dotcom %} gehostete Designs](https://github.com/topics/jekyll-theme) und{% else %} [Unterstützte Designs](https://pages.github.com/themes/) auf der {% data variables.product.prodname_pages %}-Website und{% endif %} [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

Du kannst alle Standardeinstellungen deines Designs überschreiben, indem du die Dateien des Designs bearbeitest. Weitere Informationen findest du in der Dokumentation zu deinem Design und in der Jekyll-Dokumentation unter „[Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)“.

## Plug-Ins

Du kannst Jekyll-Plug-ins herunterladen oder erstellen, um die Funktionalität von Jekyll für deine Website zu erweitern. Mit dem Plugin [jemoji](https://github.com/jekyll/jemoji) kannst du beispielsweise {% data variables.product.prodname_dotcom %}-Emojis auf allen Seiten deiner Website genauso verwenden wie auf {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du in der Jekyll-Dokumentation unter „[Plugins](https://jekyllrb.com/docs/plugins/)“.

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

Du kannst zusätzliche Plug-Ins aktivieren, indem du das Gem des Plug-Ins der `plugins`-Einstellung in der *_config.yml*-Datei hinzufügst. Weitere Informationen findest du in der Jekyll-Dokumentation unter „[Configuration](https://jekyllrb.com/docs/configuration/)“.

Eine Liste der unterstützten Plug-Ins findest du auf der {% data variables.product.prodname_pages %}-Website unter „[Abhängigkeitsversionen](https://pages.github.com/versions/)“.  Informationen zur Verwendung eines bestimmten Plug-ins findest du in der dazugehörigen Dokumentation.

{% tip %}

**Tipp:** Um sicherzustellen, dass du die aktuellen Versionen aller Plug-Ins verwendest, solltest du das {% data variables.product.prodname_pages %}-Gem regelmäßig aktualisieren. Weitere Informationen findest du auf der {% data variables.product.prodname_pages %}-Website unter „[Lokales Testen der GitHub Pages-Website mit Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)“ und „[Abhängigkeitsversionen](https://pages.github.com/versions/)“.

{% endtip %}

{% data variables.product.prodname_pages %} kann keine Websites mit nicht unterstützten Plug-ins erstellen. Wenn du nicht unterstützte Plug-ins verwenden möchtest, musst du deine Website lokal erstellen und die statischen Dateien der Website anschließend zu {% data variables.product.product_name %} pushen.

## Syntaxhervorhebung

Damit deine Website leichter lesbar ist, werden Codeausschnitte auf {% data variables.product.prodname_pages %}-Websites ebenso markiert wie auf {% data variables.product.product_name %}. Weitere Informationen zur Syntaxhervorhebung auf {% data variables.product.product_name %} findest du unter „[Erstellen und Hervorheben von Codeblöcken](/articles/creating-and-highlighting-code-blocks)“.

Standardmäßig werden Codeblöcke auf deiner Website von Jekyll markiert. Jekyll verwendet den [Rouge](https://github.com/jneen/rouge)-Marker, der mit [Pygments](http://pygments.org/) kompatibel ist. Pygments ist veraltet und wird in Jekyll 4 nicht unterstützt. Wenn du Pygments in deiner *_config.yml*-Datei angibst, wird Rouge stattdessen als Fallback verwendet. Jekyll kann keinen anderen Syntaxmarker verwenden. Wenn du einen anderen Syntaxmarker in der *_config.yml*-Datei angibst, wird eine Buildwarnung für die Website angezeigt. Weitere Informationen findest du unter „[Informationen zu Jekyll-Buildfehlern für {% data variables.product.prodname_pages %}-Websites](/articles/about-jekyll-build-errors-for-github-pages-sites)“.

Wenn du einen anderen Marker (z. B. `highlight.js`) verwenden möchtest, musst du die Jekyll-Syntaxhervorhebung deaktivieren, indem du die *_config.yml*-Datei deines Projekts aktualisierst.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Wenn dein Design kein CSS für Syntaxhervorhebung enthält, kannst du {% data variables.product.prodname_dotcom %}-Syntaxhervorhebungs-CSS generieren und der `style.css`-Datei des Projekts hinzufügen.

```shell
$ rougify style github > style.css
```

## Website lokal erstellen

{% data reusables.pages.test-locally %}
