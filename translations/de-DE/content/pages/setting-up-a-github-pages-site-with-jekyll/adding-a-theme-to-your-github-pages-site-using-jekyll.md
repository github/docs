---
title: Ein Design zur GitHub Pages-Website mit Jekyll hinzufügen
intro: 'Du kannst Deine Jekyll-Website personalisieren, indem Du ein Design hinzufügst und anpasst.'
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site/
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

Personen mit Schreibberechtigungen für ein Repository können mit Jekyll ein Design zu einer {% data variables.product.prodname_pages %}-Website hinzufügen.

{% data reusables.pages.test-locally %}

### Ein Design hinzufügen

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
2. Navigiere zur Datei *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Füge in der Datei eine neue Zeile mit den Namen des Designs hinzu.
   - To use a supported theme, type `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the README of the theme's repository. Eine Liste der unterstützten Designs findest Du unter „[Unterstützte Designs](https://pages.github.com/themes/)“ auf der {% data variables.product.prodname_pages %}-Website. ![Supported theme in config file](/assets/images/help/pages/add-theme-to-config-file.png)
   - Um ein anderes Jekyll-Design zu verwenden, das auf {% data variables.product.prodname_dotcom %} gehostet wird, gib `remote_theme: THEME-NAME` ein und ersetze dabei „THEME-NAME“ durch den Namen des Designs, der in der README-Datei des Repositorys des Designs aufgeführt ist. ![Unsupported theme in config file](/assets/images/help/pages/add-remote-theme-to-config-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Das CSS Deines Designs anpassen

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Erstelle eine neue Datei mit den Namen _/assets/css/style.scss_.
2. Füge oben in der Datei den folgenden Inhalt hinzu:
  ```scss
  ---
  ---

  @import "{{ site.theme }}";
  ```
3. Füge direkt nach der Zeile `@import` das gewünschte benutzerdefinierte CSS oder Sass (einschließlich Importe) hinzu.

### Das HTML-Layout Deines Designs anpassen

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. Navigieren Sie auf {% data variables.product.prodname_dotcom %} zum Quell-Repository Ihres Designs. Das Quell-Repository für Minima ist beispielsweise https://github.com/jekyll/minima.
2. Navigiere im Ordner *_layouts* (Layouts) zur Datei _default.html_ Deines Designs.
3. Kopiere den Inhalt der Datei.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
6. Erstelle eine Datei mit dem Namen *_layouts/default.html*.
7. Füge den zuvor kopierten Inhalt des Standardlayouts ein.
8. Passe das Layout nach Deinen Vorstellungen an.

### Weiterführende Informationen

- „[Neue Dateien erstellen](/articles/creating-new-files)“
