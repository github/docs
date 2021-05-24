---
title: Eine Datei über die Befehlszeile zu einem Repository hinzufügen
intro: 'Sie können eine vorhandene Datei über die Befehlszeile in ein {% data variables.product.product_name %}-Repository hochladen.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Tipp:** Du kannst auch [eine vorhandene Datei über die {% data variables.product.product_name %}-Website zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. On your computer, move the file you'd like to upload to

{% data variables.product.product_name %} into the local directory that was created when you cloned the repository.
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

### Weiterführende Informationen

- „[Neue Dateien erstellen](/articles/creating-new-files)“
- „[Ein vorhandenes Projekt über die Befehlszeile zu GitHub hinzufügen](/articles/adding-an-existing-project-to-github-using-the-command-line)“
