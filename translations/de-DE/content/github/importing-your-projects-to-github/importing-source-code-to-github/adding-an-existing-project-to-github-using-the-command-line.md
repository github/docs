---
title: Ein vorhandenes Projekt über die Befehlszeile zu GitHub hinzufügen
intro: 'Wenn Sie Ihr vorhandenes Projekt zu {% data variables.product.product_name %} hinzufügen, stehen Ihnen großartige Möglichkeiten zur Freigabe und Zusammenarbeit zur Verfügung.'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Add a project locally
---

## About adding existing projects to {% data variables.product.product_name %}

{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**Tipp:** Wenn Du am liebsten mit Point-and-Click-Benutzeroberflächen arbeitest, versuche Dein Projekt mit {% data variables.product.prodname_desktop %} hinzuzufügen. Weitere Informationen findest Du unter „[Ein Repository vom lokalen Computer zu GitHub Desktop hinzufügen](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)“ in der *{% data variables.product.prodname_desktop %}-Hilfe*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a project to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} is an open source tool for using {% data variables.product.product_name %} from your computer's command line. {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

1. In the command line, navigate to the root directory of your project.
1. Initialisiere das lokale Verzeichnis als Git-Repository.

    ```shell
    git init -b main
    ```

1. To create a repository for your project on {% data variables.product.product_name %}, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

1. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).
1. Pull changes from the new repository that you created. (If you created a `.gitignore` or `LICENSE` file in the previous step, this will pull those changes to your local directory.)

    ```shell
    git pull --set-upstream origin main
    ```

1. Stage, commit, and push all of the files in your project.

    ```shell
    git add . && git commit -m "initial commit" && git push
    ```

## Adding a project to {% data variables.product.product_name %} without {% data variables.product.prodname_cli %}

{% mac %}

1. [Erstellen Sie ein neues Repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*-, Lizenz- oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem Dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. ![Dropdownmenü „Create New Repository" (Erstelle neues Repository)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
4. Initialisiere das lokale Verzeichnis als Git-Repository.
  ```shell
  $ git init -b main
  ```
5. Fügen Sie die Daten zum neuen lokalen Repository hinzu. Das bereitet sie für den ersten Commit vor.
  ```shell
  $ git add .
  # Fuegt die Dateien zum lokalen Repository hinzu und stellt sie für den Commit bereit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die Du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Gibt die verfolgten Aenderungen frei und bereitet sie fuer den Push in ein Remote-Repository vor. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicken Sie oben auf der Seite zur Schnelleinrichtung Ihres {% data variables.product.product_name %}-Repositorys auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remote-Repositorys zu kopieren. ![Feld zum Kopieren der Remote-Repository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. [Fügen Sie im Terminal die URL für das Remote-Repository hinzu](/github/getting-started-with-github/managing-remote-repositories), an das Ihr lokales Repository per Push übergeben werden soll.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Übergib die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in Deinem lokalen Repository per Push an {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin master
  # Pusht die Aenderungen Deines lokalen Repositorys hinauf zum Remote-Repository, das Du als Ursprung festgelegt hast
  ```

{% endmac %}

{% windows %}

1. [Erstelle ein neues Repository](/articles/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*-, Lizenz- oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem Dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. ![Dropdownmenü „Create New Repository" (Erstelle neues Repository)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
4. Initialisiere das lokale Verzeichnis als Git-Repository.
  ```shell
  $ git init -b main
  ```
5. Fügen Sie die Daten zum neuen lokalen Repository hinzu. Das bereitet sie für den ersten Commit vor.
  ```shell
  $ git add .
  # Fuegt die Dateien zum lokalen Repository hinzu und stellt sie für den Commit bereit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die Du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Gibt die verfolgten Aenderungen frei und bereitet sie fuer den Push in ein Remote-Repository vor. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicken Sie oben auf der Seite zur Schnelleinrichtung Ihres {% data variables.product.product_name %}-Repositorys auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remote-Repositorys zu kopieren. ![Feld zum Kopieren der Remote-Repository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. Geben Sie in der Eingabeaufforderung [die URL für das Remote-Repository](/github/getting-started-with-github/managing-remote-repositories) ein, an das Ihr lokales Repository per Push übergeben werden soll.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Übergib die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in Deinem lokalen Repository per Push an {% data variables.product.product_location %}.
  ```shell
  $ git push origin master
  # Pusht die Aenderungen Deines lokalen Repositorys hinauf zum Remote-Repository, das Du als Ursprung festgelegt hast
  ```

{% endwindows %}

{% linux %}

1. [Erstelle ein neues Repository](/articles/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*-, Lizenz- oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem Dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. ![Dropdownmenü „Create New Repository" (Erstelle neues Repository)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
4. Initialisiere das lokale Verzeichnis als Git-Repository.
  ```shell
  $ git init -b main
  ```
5. Fügen Sie die Daten zum neuen lokalen Repository hinzu. Das bereitet sie für den ersten Commit vor.
  ```shell
  $ git add .
  # Fuegt die Dateien zum lokalen Repository hinzu und stellt sie für den Commit bereit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die Du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Gibt die verfolgten Aenderungen frei und bereitet sie fuer den Push in ein Remote-Repository vor. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicken Sie oben auf der Seite zur Schnelleinrichtung Ihres {% data variables.product.product_name %}-Repositorys auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remote-Repositorys zu kopieren. ![Feld zum Kopieren der Remote-Repository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. [Fügen Sie im Terminal die URL für das Remote-Repository hinzu](/github/getting-started-with-github/managing-remote-repositories), an das Ihr lokales Repository per Push übergeben werden soll.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Übergib die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in Deinem lokalen Repository per Push an {% data variables.product.product_location %}.
  ```shell
  $ git push origin master
  # Pusht die Aenderungen Deines lokalen Repositorys hinauf zum Remote-Repository, das Du als Ursprung festgelegt hast
  ```

{% endlinux %}

## Weiterführende Informationen

- „[Eine Datei zu einem Repository hinzufügen](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)“
