---
title: GitHub Pages-Website lokal mit Jekyll testen
intro: 'Sie können Ihre {% data variables.product.prodname_pages %}-Website lokal erstellen und damit eine Vorschau der Änderungen an Ihrer Website zu prüfen und diese Änderungen testen.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll/
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll/
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Seiten
---

Personen mit Schreibberechtigungen für ein Repository können eine {% data variables.product.prodname_pages %}-Website lokal testen.

### Vorrausetzungen

Bevor Du mit Jekyll eine Website testen kannst, müssen folgende Voraussetzungen erfüllt sein:
  - Installiere [Jekyll](https://jekyllrb.com/docs/installation/).
  - Erstelle eine Jekyll-Website. Weitere Informationen findest Du unter „[Eine {% data variables.product.prodname_pages %}-Website mit Jekyll erstellen](/articles/creating-a-github-pages-site-with-jekyll).“

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Website lokal erstellen

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
3. Run `bundle install`.
3. Führe Dein Jekyll-Website lokal aus.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
3. Öffne eine Vorschau der Website im Webbrowser. Navigiere hierzu zu `http://localhost:4000`.

### Das {% data variables.product.prodname_pages %}-Gem aktualisieren

Jekyll ist ein aktives Open-Source-Projekt, das regelmäßig aktualisiert wird. Wenn das `github-pages`-Gem auf dem Computer älter ist als das `github-pages`-Gem auf dem {% data variables.product.prodname_pages %}-Server, wird die lokal erstellte Website unter Umständen anders dargestellt als bei der tatsächlichen Veröffentlichung auf {% data variables.product.product_name %}. Damit dieser Fall nicht eintritt, aktualisiere das `github-pages`-Gem auf dem Computer in regelmäßigen Abständen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Aktualisiere das `github-pages`-Gem.
    - Wenn Bundler installiert ist, führe `bundle update github-pages` aus.
    - Wenn Du Bundler nicht installiert hast, führe `gem update github-pages` aus.

### Weiterführende Informationen

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) in der Jekyll-Dokumentation
