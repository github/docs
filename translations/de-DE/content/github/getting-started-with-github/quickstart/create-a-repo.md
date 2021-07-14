---
title: Ein Repository erstellen
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
intro: 'Um Ihr Projekt auf {% data variables.product.product_location %} aufzubauen, benötigen Sie ein Repository, in dem Sie das Projekt speichern können.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

### Ein Repository erstellen

{% if currentVersion == "free-pro-team@latest" %}

Sie können die unterschiedlichsten Projekte in {% data variables.product.product_name %}-Repositorys speichern, darunter auch Open-Source-Projekte. Mit [Open-Source-Projekten](http://opensource.org/about) kannst Du Code leichter für andere zugänglich machen, um eine bessere, zuverlässigere Software zu entwickeln. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)."

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including innersource projects. With innersource, you can share code to make better, more reliable software. For more information on innersource, see {% data variables.product.company_short %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** Du kannst öffentliche Repositorys für ein Open-Source-Projekt erstellen. Wenn Du ein öffentliches Repository erstellst, musst du unbedingt eine [Lizenzdatei](https://choosealicense.com/) hinzufügen, die bestimmt, wie Dein Projekt für andere Personen freigegeben wird. {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% data reusables.repositories.create_new %}
2. Gib einen kurzen, leicht merkbaren Namen für Dein Repository ein. Beispiel: „hello world“. ![Feld zum Eingeben eines Repository-Namens](/assets/images/help/repository/create-repository-name.png)
3. Optional kannst Du auch eine Beschreibung des Repositorys hinzufügen. Beispiel: „Mein erstes Repository auf {% data variables.product.product_name %}“. ![Feld zum Eingeben einer Repository-Beschreibung](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Glückwünsch! Du hast erfolgreich Dein erstes Repository erstellt und mit einer *README*-Datei initialisiert.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: You can also create repositories using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Die erste Änderung freigeben

Ein *[Commit](/articles/github-glossary#commit)* ist mit einem Snapshot aller Dateien in Deinem Projekt zu einem bestimmten Zeitpunkt vergleichbar.

Wenn Du Dein neues Repository erstellt hast, initialisiere es mit einer *README*-Datei. *README*-Dateien bieten Platz, um das Projekt detaillierter zu beschreiben oder weitere Dokumentationen hinzuzufügen, z. B. Informationen zum Installieren oder Verwenden Deines Projekts. Der Inhalt der *README*-Datei wird automatisch auf der Startseite Deines Repositorys angezeigt.

Nun geben wir eine Änderung der *README*-Datei frei.

1. Klicke in der Dateiliste Deines Repositorys auf die Datei ***README.md***. ![README file in file list](/assets/images/help/repository/create-commit-open-readme.png)
2. Klicken Sie über dem Inhalt der Datei auf {% octicon "pencil" aria-label="The edit icon" %}.
3. Gib auf der Registerkarte **Edit file** (Datei ändern) einige Informationen zu Deiner Person ein. ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Überprüfe die Änderungen, die Du an der Datei vorgenommen hast. Der neue Inhalt wird in grüner Farbe angezeigt. ![Dateivorschau-Ansicht](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Geschafft!

Glückwünsch! Du hast jetzt ein Repository samt einer *README*-Datei und Deinem ersten Commit auf {% data variables.product.product_location %} erstellt. Was möchtest Du als Nächstes tun?

- „[Git einrichten](/articles/set-up-git)“
- **Ein Repository erstellen**
- "[Clone a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)"
- „[Ein Repository forken](/articles/fork-a-repo)“
- „[Soziale Interaktion](/articles/be-social)“
- {% data reusables.support.connect-in-the-forum-bootcamp %}
