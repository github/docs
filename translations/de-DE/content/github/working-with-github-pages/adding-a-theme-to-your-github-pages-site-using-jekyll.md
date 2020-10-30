---
title: Ein Design zur GitHub Pages-Website mit Jekyll hinzufügen
intro: 'Du kannst Deine Jekyll-Website personalisieren, indem Du ein Design hinzufügst und anpasst.'
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site/
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Personen mit Schreibberechtigungen für ein Repository können mit Jekyll ein Design zu einer {% data variables.product.prodname_pages %}-Website hinzufügen.

{% data reusables.pages.test-locally %}

### Ein Design hinzufügen

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
2. Navigiere zur Datei *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Füge in der Datei eine neue Zeile mit den Namen des Designs hinzu. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
   - Um ein unterstütztes Design zu verwenden, g{% else %}G{% endif %}ib `theme: THEME-NAME` ein und ersetze dabei _THEME-NAME_ durch den Namen des Designs, der in der README-Datei des Repositorys des Designs aufgeführt ist. Eine Liste der unterstützten Designs findest Du unter „[Unterstützte Designs](https://pages.github.com/themes/)“ auf der {% data variables.product.prodname_pages %}-Website. ![Unterstütztes Design in der Konfigurationsdatei](/assets/images/help/pages/add-theme-to-config-file.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
   - Um ein anderes Jekyll-Design zu verwenden, das auf {% data variables.product.prodname_dotcom %} gehostet wird, gib `remote_theme: THEME-NAME` ein und ersetze dabei „THEME-NAME“ durch den Namen des Designs, der in der README-Datei des Repositorys des Designs aufgeführt ist. ![Nicht unterstütztes Design in der Konfigurationsdatei](/assets/images/help/pages/add-remote-theme-to-config-file.png){% endif %}
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
  ```
  ---
  ---

  @import "{{ site.theme }}";
  ```
3. Füge direkt nach der Zeile `@import` das gewünschte benutzerdefinierte CSS oder Sass (einschließlich Importe) hinzu.

### Das HTML-Layout Deines Designs anpassen

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. Navigiere auf {% data variables.product.prodname_dotcom %} zum Quell-Repository Deines Designs. Das Quell-Repository für Minima ist beispielsweise https://github.com/jekyll/minima.
2. Navigiere im Ordner *_layouts* (Layouts) zur Datei _default.html_ Deines Designs.
3. Kopiere den Inhalt der Datei.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
6. Erstelle eine Datei mit dem Namen *_layouts/default.html*.
7. Füge den zuvor kopierten Inhalt des Standardlayouts ein.
8. Passe das Layout nach Deinen Vorstellungen an.

### Weiterführende Informationen

- „[Neue Dateien erstellen](/articles/creating-new-files)“
