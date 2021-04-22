---
title: GitHub Pages-Website mit Jekyll erstellen
intro: 'Sie können mit Jekyll eine {% data variables.product.prodname_pages %}-Website in einem neuen oder vorhandenen Repository erstellen.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'Personen mit Administratorberechtigungen für ein Repository können mit Jekyll eine {% data variables.product.prodname_pages %}-Website erstellen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Seiten
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### Vorrausetzungen

Bevor Sie mit Jekyll eine {% data variables.product.prodname_pages %}-Website erstellen können, müssen Sie Jekyll und Git installieren. Weitere Informationen findest Du unter „[Installation](https://jekyllrb.com/docs/installation/)“ in der Jekyll-Dokumentation und unter „[Git einrichten](/articles/set-up-git).“

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Ein Repository für eine Website erstellen

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

### Eine Website erstellen

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wenn Du noch keine lokale Kopie Deines Repositorys besitzt, navigiere zu dem Speicherort, an dem Du die Quelldateien Deiner Website speichern möchtest, und ersetze dabei _PARENT-FOLDER_ durch den Ordner, der den Ordner für Dein Repository enthalten soll.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. Wenn Du dies noch nicht getan hast, initialisiere ein lokales Git-Repository, und ersetzen dabei _REPOSITORY-NAME_ durch den Namen Deines Repositorys.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Erstellt einen neuen Ordner auf Deinem Computer, der als Git-Repository initialisiert wird
  ```
  4. Wechsle in das Verzeichnis des Repositorys.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Ändert das Arbeitsverzeichnis
  ```
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.
 ```shell
 $ mkdir docs
 # Erstellt einen neuen Ordner mit dem Namen docs
 $ cd docs
 ```
 Wenn Sie Ihre Website aus dem `gh-pages`-Branch veröffentlichen möchten, erstellen Sie den `gh-pages`-Branch und checken ihn aus.
 ```shell
 $ git checkout --orphan gh-pages
 # Erstellt einen neuen Branch, ohne Verlauf und Inhalte, mit dem namen gh-pages und wechselt zum gh-pages-Branch
 ```
7. To create a new Jekyll site, use the `jekyll new` command:
   ```shell
   $ jekyll new .
   # Erstellt eine Jekyll-Website im aktuellen Verzeichnis
   ```
8. Open the Gemfile that Jekyll created.
1. Add "#" to the beginning of the line that starts with `gem "jekyll"` to comment out this line.
1. Add the `github-pages` gem by editing the line starting with `# gem "github-pages"`. Change this line to:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Replace _GITHUB-PAGES-VERSION_ with the latest supported version of the `github-pages` gem. You can find this version here: "[Dependency versions](https://pages.github.com/versions/)."

   The correct version Jekyll will be installed as a dependency of the `github-pages` gem.
10. Speichere und schließe das Gemfile.
11. From the command line, run `bundle update`.
11. Teste Deine Website optional lokal. Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_pages %}-Website lokal mit Jekyll testen](/articles/testing-your-github-pages-site-locally-with-jekyll).“
12. Add your {% data variables.product.product_name %} repository as a remote, replacing {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}_HOSTNAME_ with your enterprise's hostname,{% endif %} _USER_ with the account that owns the repository{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %},{% endif %} and _REPOSITORY_ with the name of the repository.
```shell
{% if currentVersion == "free-pro-team@latest" %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. Übertrage das Repository zu {% data variables.product.product_name %}, und ersetze dabei _BRANCH_ durch den Namen des Branches, auf dem Du gerade arbeitest.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### Nächste Schritte:

Informationen dazu, wie Sie eine neue Seite oder einen neuen Beitrag zu Ihrer Website hinzufügen, finden Sie unter „[Inhalte zur {% data variables.product.prodname_pages %}-Website mit Jekyll hinzufügen](/articles/adding-content-to-your-github-pages-site-using-jekyll)“.

{% data reusables.pages.add-jekyll-theme %} Weitere Informationen findest Du unter „[Ein Design zu Deiner {% data variables.product.prodname_pages %}-Website mit Jekyll hinzufügen](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).“
