---
title: Ein Repository erstellen
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Um Ihr Projekt auf {% data variables.product.product_location %} aufzubauen, benötigen Sie ein Repository, in dem Sie das Projekt speichern können.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Ein Repository erstellen

{% ifversion fpt %}

Sie können die unterschiedlichsten Projekte in {% data variables.product.product_name %}-Repositorys speichern, darunter auch Open-Source-Projekte. Mit [Open-Source-Projekten](http://opensource.org/about) kannst Du Code leichter für andere zugänglich machen, um eine bessere, zuverlässigere Software zu entwickeln. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)."

{% elsif ghes or ghae %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including innersource projects. With innersource, you can share code to make better, more reliable software. For more information on innersource, see {% data variables.product.company_short %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% endif %}

{% ifversion fpt %}

{% note %}

**Hinweis:** Du kannst öffentliche Repositorys für ein Open-Source-Projekt erstellen. Wenn Du ein öffentliches Repository erstellst, musst du unbedingt eine [Lizenzdatei](https://choosealicense.com/) hinzufügen, die bestimmt, wie Dein Projekt für andere Personen freigegeben wird. {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Gib einen kurzen, leicht merkbaren Namen für Dein Repository ein. Beispiel: „hello world“. ![Feld zum Eingeben eines Repository-Namens](/assets/images/help/repository/create-repository-name.png)
3. Optional kannst Du auch eine Beschreibung des Repositorys hinzufügen. Beispiel: „Mein erstes Repository auf {% data variables.product.product_name %}“. ![Feld zum Eingeben einer Repository-Beschreibung](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Glückwünsch! Du hast erfolgreich Dein erstes Repository erstellt und mit einer *README*-Datei initialisiert.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Die erste Änderung freigeben

{% include tool-switcher %}

{% webui %}

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

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

*README*-Dateien bieten Platz, um das Projekt detaillierter zu beschreiben oder weitere Dokumentationen hinzuzufügen, z. B. Informationen zum Installieren oder Verwenden Deines Projekts. Der Inhalt der *README*-Datei wird automatisch auf der Startseite Deines Repositorys angezeigt. Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Geschafft!

Glückwünsch! Du hast jetzt ein Repository samt einer *README*-Datei und Deinem ersten Commit auf {% data variables.product.product_location %} erstellt.

{% webui %}

You can now clone a {% data variables.product.product_name %} repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see "[Cloning a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" and "[Set up Git](/articles/set-up-git)."

{% endwebui %}

You can find interesting projects and repositories on {% data variables.product.product_name %} and make changes to them by creating a fork of the repository. For more information see, "[Fork a repository](/articles/fork-a-repo)."

Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. For more information see "[Be social](/articles/be-social)."

{% data reusables.support.connect-in-the-forum-bootcamp %}
