---
title: GitHub Pages-Website lokal mit Jekyll testen
intro: 'Du kannst deine {% data variables.product.prodname_pages %}-Website lokal erstellen, um Änderungen an deiner Website vorab anzuzeigen und zu testen.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111307'
---
Personen mit Schreibberechtigungen für ein Repository können eine {% data variables.product.prodname_pages %}-Website lokal testen.

## Voraussetzungen

Bevor du mit Jekyll eine Website testen kannst, müssen folgende Voraussetzungen erfüllt sein:
  - [Jekyll](https://jekyllrb.com/docs/installation/) installiert.
  - Erstelle eine Jekyll-Website. Weitere Informationen findest du unter [Erstellen einer {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/creating-a-github-pages-site-with-jekyll).

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Website lokal erstellen

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. Führen Sie aus `bundle install`.
3. Führe dein Jekyll-Website lokal aus.
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
  {% note %}

  **Hinweis:** Wenn du Ruby 3.0 oder höher installiert hast (möglicherweise hast du die Standardversion über Homebrew installiert), erhältst du möglicherweise in diesem Schritt eine Fehlermeldung. Das liegt daran, dass diese Versionen von Ruby nicht mehr mit `webrick` installiert werden.
  
  Um den Fehler zu beheben, versuche `bundle add webrick` auszuführen, und führe dann erneut `bundle exec jekyll serve` aus.
  {% endnote %}

3. Navigiere zum Anzeigen deiner Website in deinem Webbrowser zu `http://localhost:4000`.

## Das {% data variables.product.prodname_pages %}-Gem aktualisieren

Jekyll ist ein aktives Open-Source-Projekt, das regelmäßig aktualisiert wird. Wenn das Gem `github-pages` auf deinem Computer älter ist als das Gem `github-pages` auf dem {% data variables.product.prodname_pages %}-Server, sieht deine Website beim lokalen Build möglicherweise anders aus als bei Veröffentlichung in {% data variables.product.product_name %}. Um dies zu vermeiden, aktualisiere das Gem `github-pages` auf deinem Computer regelmäßig.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Aktualisiere das Gem `github-pages`.
    - Wenn du Bundler installiert hast, führe `bundle update github-pages` aus.
    - Wenn Bundler nicht installiert ist, führe `gem update github-pages` aus.

## Weitere Informationsquellen

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) in der Dokumentation zu Jekyll
