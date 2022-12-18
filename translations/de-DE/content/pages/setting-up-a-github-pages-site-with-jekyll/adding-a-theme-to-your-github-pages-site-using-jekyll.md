---
title: Ein Design zur GitHub Pages-Website mit Jekyll hinzufügen
intro: 'Du kannst deine Jekyll-Website personalisieren, indem du ein Design hinzufügst und anpasst.'
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add theme to Pages site
ms.openlocfilehash: 33969695e96aa0629b2811e2742ca3093e58139a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147644795'
---
Personen mit Schreibberechtigungen für ein Repository können mit Jekyll ein Design zu einer {% data variables.product.prodname_pages %}-Website hinzufügen.

{% data reusables.pages.test-locally %}

## Ein Design hinzufügen

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
2. Navigiere zu *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Füge in der Datei eine neue Zeile mit den Namen des Designs hinzu.
   - Um ein unterstütztes Design zu verwenden, gib `theme: THEME-NAME` ein und ersetze _THEME-NAME_ durch den Namen des Designs, der im README-Abschnitt des Repositorys des Designs angezeigt wird. Eine Liste der unterstützten Designs findest du unter [Unterstützte Designs](https://pages.github.com/themes/) auf der {% data variables.product.prodname_pages %}-Website.
   ![Unterstütztes Design in der Konfigurationsdatei](/assets/images/help/pages/add-theme-to-config-file.png)
   - Um ein anderes Jekyll-Design zu verwenden, das auf {% data variables.product.prodname_dotcom %} gehostet wird, gib `remote_theme: THEME-NAME` ein und ersetze dabei „THEME-NAME“ durch den Namen des Designs, der im README-Abschnitt des Repositorys des Designs angezeigt wird.
   ![Nicht unterstütztes Design in der Konfigurationsdatei](/assets/images/help/pages/add-remote-theme-to-config-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Das CSS Deines Designs anpassen

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
1. Erstelle eine neue Datei namens _/assets/css/style.scss_.
2. Füge oben in der Datei den folgenden Inhalt hinzu:
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. Füge direkt nach der Zeile `@import` das gewünschte benutzerdefinierte CSS- oder Sass-Stylesheet (einschließlich Importen) hinzu.

## Das HTML-Layout Deines Designs anpassen

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. Navigiere auf {% data variables.product.prodname_dotcom %} zum Quell-Repository deines Designs. Beispielsweise ist https://github.com/jekyll/minima das Quell-Repository für Minima.
2. Navigiere im Ordner *_layouts* zur _default.html_-Datei deines Designs.
3. Kopieren Sie den Inhalt der Datei.
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
6. Erstelle eine Datei namens *_layouts/default.html*.
7. Füge den zuvor kopierten Inhalt des Standardlayouts ein.
8. Passe das Layout nach Deinen Vorstellungen an.

## Weiterführende Themen

- [Erstellen neuer Dateien](/articles/creating-new-files)
