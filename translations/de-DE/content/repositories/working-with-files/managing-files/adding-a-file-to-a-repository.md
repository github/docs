---
title: Eine Datei zu einem Repository hinzufügen
intro: 'You can upload and commit an existing file to a repository on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Add a file
---

## Adding a file to a repository on {% data variables.product.product_name %}

Für Dateien, die Sie über einen Browser zu einem Repository hinzufügen, gilt eine Beschränkung von {% data variables.large_files.max_github_browser_size %} pro Datei. Größere Dateien mit bis zu jeweils {% data variables.large_files.max_github_size %} können Sie über die Befehlszeile hinzufügen. Weitere Informationen findest Du unter „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](#adding-a-file-to-a-repository-using-the-command-line).“

{% tip %}

**Tipps:**
- Sie können mehrere Dateien gleichzeitig zu {% data variables.product.product_name %} hochladen.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Above the list of files, using the **Add file** drop-down, click **Upload files**. !["Upload files" in the "Add file" dropdown](/assets/images/help/repository/upload-files-button.png)
3. Ziehe die Datei respektive den Ordner, den/die Du in das Repository hochladen möchtest, per Drag-and-Drop in die Dateistruktur. ![Drag-und-Drop-Bereich](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Klicke auf **Commit changes** (Änderungen freigeben). ![Schaltfläche „Commit changes“ (Änderungen freigeben)](/assets/images/help/repository/commit-changes-button.png)

## Eine Datei über die Befehlszeile zu einem Repository hinzufügen

Sie können eine vorhandene Datei über die Befehlszeile in ein {% data variables.product.product_name %}-Repository hochladen.

{% tip %}

**Tipp:** Du kannst auch [eine vorhandene Datei über die {% data variables.product.product_name %}-Website zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. Verschiebe auf Deinem Computer die Datei, die Du zu {% data variables.product.product_name %} hochladen möchtest, in das lokale Verzeichnis, das beim Klonen des Repositorys erstellt wurde.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Fügt die Datei zu Deinem lokalen Repository hinzu und stellt sie für den Commit bereit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Gib die verfolgten Änderungen frei und bereitet diese für den Push ins Remote-Repository vor. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## Weiterführende Informationen

- „[Ein vorhandenes Projekt über die Befehlszeile zu GitHub hinzufügen](/articles/adding-an-existing-project-to-github-using-the-command-line)“
