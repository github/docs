---
title: Inhalte zur GitHub Pages-Website mit Jekyll hinzufügen
intro: 'Du kannst deiner Jekyll-Website auf {% data variables.product.prodname_pages %} eine neue Seite oder einen neuen Beitrag hinzufügen.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add content to Pages site
ms.openlocfilehash: 90bd0d067837364eb2767739da286da7906399c0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134213'
---
Personen mit Schreibberechtigungen für ein Repository können mit Jekyll Inhalte zu einer {% data variables.product.prodname_pages %}-Website hinzufügen.

## Informationen zu Inhalten von Jekyll-Websites

Bevor du Inhalte zu einer Jekyll-Website auf {% data variables.product.prodname_pages %} hinzufügen kannst, musst du eine Jekyll-Website erstellen. Weitere Informationen findest du unter [Erstellen einer {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/creating-a-github-pages-site-with-jekyll).

Die hauptsächlichen Arten von Inhalten für Jekyll-Websites sind Seiten und Beiträge. Eine Seite wird für eigenständige Inhalte genutzt, die nicht mit einem bestimmten Datum verknüpft sind, z. B. eine Seite mit Informationen zu deiner Person oder Organisation. Die Jekyll-Standardwebsite enthält eine Datei mit dem Namen `about.md`, die als Seite auf deiner Website unter `YOUR-SITE-URL/about` gerendert wird. Du kannst den Inhalt dieser Datei bearbeiten, um deine Informationsseite zu personalisieren. Die Informationsseite kannst du außerdem als Vorlage für neue Seiten verwenden. Weitere Informationen findest du in der Jekyll-Dokumentation unter [Seiten](https://jekyllrb.com/docs/pages/).

Bei einem Beitrag handelt es sich um einen Blog-Beitrag. Die Jekyll-Standardwebsite enthält ein Verzeichnis namens `_posts`, das eine Datei mit einem Standardposting enthält. Du kannst den Inhalt dieses Beitrags bearbeiten und den Standardbeitrag als Vorlage für neue Beiträge verwenden. Weitere Informationen findest du in der Jekyll-Dokumentation unter [Postings](https://jekyllrb.com/docs/posts/).

Dein Design umfasst Standardlayouts, -includes und -stylesheets, die automatisch auf neue Seiten und Beiträge auf deiner Website angewendet werden. Du kannst diese Standardeinstellungen jedoch außer Kraft setzen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll#themes).

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## Eine neue Seite zu deiner Website hinzufügen

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. Erstelle im Stammverzeichnis deiner Veröffentlichungsquelle eine neue Datei namens _PAGE-NAME.md_ für deine Seite, und ersetze _PAGE-NAME_ durch einen aussagekräftigen Dateinamen für die Seite.
4. Füge am Anfang der Datei den folgenden YAML-Frontmatter ein, indem du _PAGE TITLE_ durch den Titel der Seite und _URL-PATH_ durch den gewünschten Pfad für die URL der Seite ersetzt. Wenn die Basis-URL deiner Website zum Beispiel `https://octocat.github.io` und dein _URL-PATH_ `/about/contact/` lautet, befindet sich deine Seite unter `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. Füge unterhalb des Frontmatter den Inhalt für deine Seite hinzu.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

## Einen neuen Beitrag zu deiner Website hinzufügen

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. Navigiere zum Verzeichnis `_posts`.
4. Erstelle eine neue Datei _YYYY-MM-DD-NAME-OF-POST.md_, bei der du _YYYY-MM-DD_ durch das Datum deines Beitrags und _NAME-OF-POST_ durch den Namen deines Beitrags ersetzt.
4. Füge den folgenden YAML-Frontmatter am Anfang der Datei hinzu, und ersetze _POST TITLE_ durch den Titel des Beitrags, _YYYY-MM-DD hh:mm:ss -0000_ durch das Datum und die Uhrzeit des Beitrags und _CATEGORY-1_ und _CATEGORY-2_ durch die gewünschte Anzahl von Kategorien für deinen Beitrag.
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. Füge unterhalb des Frontmatters den Inhalt für deinen Beitrag hinzu.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

Der Beitrag sollte jetzt auf deiner Website angezeigt werden! Wenn die Basis-URL deiner Website `https://octocat.github.io` lautet, dann befindet sich dein neuer Beitrag unter `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

## Nächste Schritte

{% data reusables.pages.add-jekyll-theme %} Weitere Informationen findest du unter [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mithilfe von Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).
