---
title: Ein vorhandenes Projekt über die Befehlszeile zu GitHub hinzufügen
intro: 'Wenn Sie Ihr vorhandenes Projekt zu {% data variables.product.product_name %} hinzufügen, stehen Ihnen großartige Möglichkeiten zur Freigabe und Zusammenarbeit zur Verfügung.'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**Tipp:** Wenn Du am liebsten mit Point-and-Click-Benutzeroberflächen arbeitest, versuche Dein Projekt mit {% data variables.product.prodname_desktop %} hinzuzufügen. Weitere Informationen findest Du unter „[Ein Repository vom lokalen Computer zu GitHub Desktop hinzufügen](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)“ in der *{% data variables.product.prodname_desktop %}-Hilfe*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

{% mac %}

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

### Weiterführende Informationen

- „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“
