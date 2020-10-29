---
title: Dateien aus dem Verlauf eines Repositorys entfernen
intro: 'Um eine große Datei aus Ihrem Repository zu löschen, müssen Sie sie vollständig aus Ihrem lokalen Repository und von {% data variables.product.product_location %} löschen.'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Warnung**: Mit den hier beschriebenen Verfahren löschst Du Dateien dauerhaft aus dem Repository auf Deinem Computer und von {% data variables.product.product_location %}. Wichtige Dateien solltest Du vor dem Entfernen unbedingt lokal in einem Verzeichnis außerhalb des Repositorys sichern.

{% endwarning %}

### Entfernen einer Datei, die in einem früheren Commit hinzugefügt wurde

Wenn Du eine Datei in einem früheren Commit hinzugefügt hast, musst Du sie aus Deinem Repository-Verlauf entfernen. Um Dateien aus dem Verlauf Deines Repository zu entfernen, kannst Du den BFG Repo-Cleaner oder den Befehl `git filter-branch` verwenden. Weitere Informationen findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).“

### Datei entfernen, die beim letzten noch nicht übertragenen Commit hinzugefügt wurde

Wenn eine Datei bei Ihrem letzten Commit hinzugefügt wurde und dieses noch nicht per Push auf {% data variables.product.product_location %} übertragen wurde, können Sie die Datei löschen und den Commit ändern:

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Gib zum Entfernen der Datei `git rm --cached` ein:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Bereite die große Datei zur Entfernung vor, aber belasse sie auf dem Disk
  ```
4. Schreibe diese Änderung mit `--amend -CHEAD` fest:
  ```shell
  $ git commit --amend -CHEAD
  # passe den frueheren Commit mit Deiner Aenderung an
  # nur einen neuen Commit zu machen, wird nicht funktionieren,
  # weil Du die Datei auch aus dem nicht uebertragenen Verlauf entfernen musst
  ```
5. Übertrage Deine Commits per Push auf {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Uebertrage unseren neu geschriebenen, kleineren Commit
  ```
