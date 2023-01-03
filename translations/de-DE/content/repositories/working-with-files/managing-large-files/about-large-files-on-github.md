---
title: Informationen zu großen Dateien auf GitHub
intro: '{% data variables.product.product_name %} schränkt die Größe der Dateien ein, die du in herkömmlichen Git-Repositorys nachverfolgen kannst. Hier wird erläutert, wie du Dateien nachverfolgen oder entfernen kannst, die über dem Grenzwert liegen.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: c9910f669b13c0c2bc4a8517ac6b33476b23b475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331648'
---
## Informationen zu Größenbeschränkungen für {% data variables.product.product_name %}

{% ifversion fpt or ghec %} {% data variables.product.product_name %} versucht, reichlich Speicher für alle Git-Repositorys bereitzustellen, obwohl feste Limits für Datei- und Repositorygrößen bestehen. Um die Leistungsfähigkeit und Zuverlässigkeit für unsere Benutzer zu gewährleisten, überwachen wir aktiv die Signale des gesamtheitlichen Repository-Zustands. Der Repository-Zustand ist eine Funktion verschiedener zusammenhängender Faktoren wie Größe, Commit-Frequenz, Inhalte und Strukturen.

### Dateigrößenbeschränkungen
{% endif %}

{% data variables.product.product_name %} schränkt die Größe der in Repositorys erlaubten Dateien ein. Wenn du versuchst, eine Datei größer als {% data variables.large_files.warning_size %} hinzuzufügen oder zu aktualisieren, wirst du von Git eine Warnung erhalten. Die Änderungen werden immer noch erfolgreich in dein Repository übertragen, aber kannst erwägen, den Commit zu entfernen, um die Performance-Auswirkungen zu minimieren. Weitere Informationen findest du unter [Entfernen von Dateien aus einem Repositoryverlauf](#removing-files-from-a-repositorys-history).

{% note %}

**Hinweis:** Falls du über einen Browser eine Datei zu einem Repository hinzufügst, darf die Datei nicht größer als {% data variables.large_files.max_github_browser_size %} sein. Weitere Informationen findest du unter [Hinzufügen einer Datei zu einem Repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

{% endnote %}

{% ifversion ghes %}Standardmäßig blockiert {% endif %}{% data variables.product.product_name %} Pushes, die {% data variables.large_files.max_github_size %} überschreiten. {% ifversion ghes %} Websiteadministrator*innen können jedoch einen anderen Grenzwert für {% data variables.product.product_location %} konfigurieren.  Weitere Informationen findest du unter [Festlegen von Git-Pushlimits](/enterprise/admin/guides/installation/setting-git-push-limits). {% endif %}

Um Dateien über diesen Grenzwert hinaus nachzuverfolgen, musst du {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) verwenden. Weitere Informationen findest du unter [Informationen zu {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

Wenn du große Dateien innerhalb deines Repositorys verteilen musst, kannst du Releases auf {% data variables.product.product_location %} erstellen, anstatt die Dateien nachzuverfolgen. Weitere Informationen findest du unter [Verteilen großer Binärdateien](#distributing-large-binaries).

Git ist nicht für die Verarbeitung großer SQL-Dateien konzipiert. Zum Freigeben großer Datenbanken für andere Entwickler*innen wird die Verwendung von [Dropbox](https://www.dropbox.com/) empfohlen.

{% ifversion fpt or ghec %}
### Größenbeschränkungen für Repositorys

Wir empfehlen, dass Repositories klein bleiben, idealerweise weniger als 1 GB, und weniger als 5 GB wird dringend empfohlen. Kleinere Repositorys sind schneller zu klonen und einfacher zu bearbeiten und zu pflegen. Wenn dein Repository unsere Infrastruktur übermäßig belastet, wirst du allenfalls eine E-Mail von {% data variables.contact.github_support %} erhalten, in der du um Korrekturmaßnahmen gebeten wirst. Wir versuchen flexibel zu sein, speziell mit großen Projekten mit vielen Mitarbeitern, und wir werden wenn immer möglich gemeinsam einen Lösung finden. Du kannst verhindern, dass dein Repository unsere Infrastruktur beeinträchtigt, indem du die Größe und den Zustand deines Repository effektiv verwaltest. Du findest Ratschläge und ein Tool zur Repositoryanalyse im Repository [`github/git-sizer`](https://github.com/github/git-sizer).

Externe Abhängigkeiten können dazu führen, dass Git-Repositories sehr groß werden. Um ein Repository nicht mit externen Abhängigkeiten zu füllen, empfehlen wir Dir, einen Paketmanager zu verwenden. [Bundler](http://bundler.io/), [der Paket-Manager von Node](http://npmjs.org/) und [Maven](http://maven.apache.org/) gehören zu den beliebten Paket-Managern für häufige Sprachen. Diese Paketmanager unterstützen die Verwendung von Git-Repositorys direkt, so dass du keine vorpaketierten Quellen benötigst.

Git ist nicht als Backup-Werkzeug konzipiert. Es stehen jedoch viele Lösungen zur Verfügung, die speziell zum Erstellen von Sicherungen entwickelt wurden, z. B. [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) und [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Dateien aus dem Verlauf eines Repositorys entfernen

{% warning %}

**Warnung**: Mit den hier beschriebenen Verfahren löschst du Dateien dauerhaft aus dem Repository auf deinem Computer und von {% data variables.product.product_location %}. Wichtige Dateien solltest du vor dem Entfernen unbedingt lokal in einem Verzeichnis außerhalb des Repositorys sichern.

{% endwarning %}

### Datei entfernen, die beim letzten noch nicht übertragenen Commit hinzugefügt wurde

Wenn eine Datei bei deinem letzten Commit hinzugefügt wurde und dieses noch nicht per Push auf {% data variables.product.product_location %} übertragen wurde, kannst du die Datei löschen und den Commit ändern:

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Um die Datei zu entfernen, gib `git rm --cached` ein:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Committe diese Änderung mithilfe von `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Übertrage deine Commits per Push auf {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Entfernen einer Datei, die in einem früheren Commit hinzugefügt wurde

Wenn du eine Datei in einem früheren Commit hinzugefügt hast, musst du sie aus deinem Repository-Verlauf entfernen. Um Dateien aus dem Repositoryverlauf zu entfernen, kannst du den BFG Repo-Cleaner oder den `git filter-branch`-Befehl verwenden. Weitere Informationen findest du unter [Entfernen sensibler Daten aus einem Repository](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).

## Große Binärdateien verteilen

Wenn du große Dateien innerhalb deines Repositorys verteilen musst, kannst du Releases auf {% data variables.product.product_location %} erstellen. Releases erlauben Dir, Software, Release-Hinweise und Links zu Binärdateien zu paketieren, damit andere Personen diese nutzen können. Weitere Informationen findest du unter [Informationen zu Releases](/github/administering-a-repository/about-releases).

{% ifversion fpt or ghec %}

Wir begrenzen weder die Gesamtgröße der binären Release-Dateien noch die Bandbreite, die für deren Bereitstellung verwendet wird. Allerdings muss jede einzelne Datei kleiner sein als {% data variables.large_files.max_lfs_size %}.

{% endif %}

