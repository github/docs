---
title: GitHub Pages-Website mit Jekyll erstellen
intro: 'Mit Jekyll kannst du eine {% data variables.product.prodname_pages %}-Website in einem neuen oder bestehenden Repository erstellen.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133057'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Voraussetzungen

Bevor du mit Jekyll eine {% data variables.product.prodname_pages %}-Website erstellen kannst, musst du Jekyll und Git installieren. Weitere Informationen findest du unter [Installation](https://jekyllrb.com/docs/installation/) in der Jekyll-Dokumentation und in [Einrichten von Git](/articles/set-up-git).

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Ein Repository für eine Website erstellen

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## Eine Website erstellen

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Wenn du noch keine lokale Kopie deines Repositorys besitzt, navigiere zu dem Speicherort, an dem du die Quelldateien deiner Website speichern möchtest, und ersetze dabei _PARENT-ORDNER_ durch den Ordner, der den Ordner für dein Repository enthalten soll.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. Wenn du dies noch nicht getan hast, initialisiere ein lokales Git-Repository und ersetzen dabei _REPOSITORY-NAME_ durch den Namen deines Repositorys.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Wechsle in das Verzeichnis des Repositorys.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} Wenn du dich beispielsweise entschieden hast, deine Website aus dem `docs`-Ordner in der Standardverzweigung zu veröffentlichen, erstellen und verschiebe Verzeichnisse in den `docs`-Ordner.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Wenn du deine Website aus der `gh-pages`-Verzweigung veröffentlichen möchtest, erstelle die Verzweigung und prüfe die `gh-pages`-Verzweigung.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. Um eine neue Jekyll-Website zu erstellen, verwendest du den `jekyll new`-Befehl:
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Öffne die Gemfile, die Jekyll erstellt hat.
1. Füge „#“ am Anfang der Zeile hinzu, die mit `gem "jekyll"` beginnt, um diese Zeile auszukommentieren.
1. Füge das `github-pages`-Gem hinzu, indem du die Zeile mit `# gem "github-pages"` startest. Ändere diese Zeile zu:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Ersetze _GITHUB-PAGES-VERSION_ durch die neueste unterstützte Version des `github-pages`-Gems. Diese Version findest du hier: „[Abhängigkeitsversionen](https://pages.github.com/versions/)".

   Die richtige Jekyll-Version wird als Abhängigkeit des `github-pages`-Gems installiert.
1. Speichere und schließe das Gemfile.
1. Führe `bundle install` über die Befehlszeile aus.
1. Nimm optional alle erforderlichen Änderungen an der `_config.yml`-Datei vor. Dies ist für relative Pfade erforderlich, wenn das Repository in einem Unterverzeichnis gehostet wird.  Weitere Informationen findest du unter [Aufteilen eines Unterordners in ein neues Repository](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository).
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. Teste deine Website optional lokal. Weitere Informationen findest du unter [Lokales Testen deiner {% data variables.product.prodname_pages %}-Website mit Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll).
1. Füge deine Arbeit hinzu und übernimm sie.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Füge dein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} als Remote hinzu, ersetze {% ifversion ghes or ghae %}_HOSTNAME_ mit ihrem Unternehmens-Hostnamen{% endif %} _USER_ mit dem Konto, dem das Respository gehört{% ifversion ghes or ghae %},{% endif %} und _REPOSITORY_ mit dem Namen des Repositorys.
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. Übertrage das Repository zu {% data variables.product.product_name %} und ersetze dabei _BRANCH_ durch den Namen des Branches, auf dem du gerade arbeitest.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Nächste Schritte

Informationen zum Hinzufügen einer neuen Seite oder eines Beitrags zu deiner Website findest du unter [Hinzufügen von Inhalten zu deiner {% data variables.product.prodname_pages %}-Website mithilfe von Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll).

{% data reusables.pages.add-jekyll-theme %} Weitere Informationen findest du unter [Hinzufügen eines Designs zu deiner {% data variables.product.prodname_pages %}-Website mithilfe von Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).
