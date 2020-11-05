---
title: Datei über die Befehlszeile umbenennen
intro: Du kannst jede Datei Deines Repositorys über die Befehlszeile umbenennen.
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Die meisten Dateien können [direkt auf {% data variables.product.product_name %} umbenannt werden](/articles/renaming-a-file), bei manchen Dateien, beispielsweise bei Bilddateien, ist dies jedoch nur über die Befehlszeile möglich.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Benenne die Datei um. Gib dazu zunächst den bisherigen Dateinamen und danach den gewünschten neuen Dateinamen ein. Deine Änderung wird dadurch für den Commit bereitgestellt.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Mit `git status` kannst Du den alten und den neuen Dateinamen überprüfen.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Gibt die verfolgten Änderungen frei und bereitet sie für den Push in das Remote-Repository vor.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Weiterführende Informationen
- „[Datei über die Befehlszeile an einen neuen Speicherort verschieben](/articles/moving-a-file-to-a-new-location-using-the-command-line)“
- „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“
