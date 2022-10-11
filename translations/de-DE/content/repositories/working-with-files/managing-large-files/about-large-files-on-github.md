---
title: About large files on GitHub
intro: '{% data variables.product.product_name %} limits the size of files you can track in regular Git repositories. Learn how to track or remove files that are beyond the limit.'
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
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Large files
---

## About size limits on {% data variables.product.product_name %}

{% ifversion fpt %}
{% data variables.product.product_name %} versucht genügend Speicher für alle Git-Repositories bereitzustellen, obwohl es harte Grenzen für Datei- und Repository-Größen gibt. Um die Leistungsfähigkeit und Zuverlässigkeit für unsere Benutzer zu gewährleisten, überwachen wir aktiv die Signale des gesamtheitlichen Repository-Zustands. Der Repository-Zustand ist eine Funktion verschiedener zusammenhängender Faktoren wie Größe, Commit-Frequenz, Inhalte und Strukturen.

### File size limits
{% endif %}

{% data variables.product.product_name %} limits the size of files allowed in repositories. Wenn Du versuchst, eine Datei größer als {% data variables.large_files.warning_size %} hinzuzufügen oder zu aktualisieren, wirst Du von Git eine Warnung erhalten. Die Änderungen werden immer noch erfolgreich in Dein Repository übertragen, aber kannst erwägen, den Commit zu entfernen, um die Performance-Auswirkungen zu minimieren. Weitere Informationen finden Sie unter „[Dateien aus dem Verlauf eines Repositorys entfernen](#removing-files-from-a-repositorys-history)“.

{% note %}

**Hinweis:** Falls Du über einen Browser einem Repository eine Datei hinzufügst, darf die Datei nicht größer als {% data variables.large_files.max_github_browser_size %} sein. Weitere Informationen findest Du unter „[Eine Datei zu einem Repository hinzufügen](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).“

{% endnote %}

{% data variables.product.product_name %} blockiert {% ifversion ghes %}standardmäßig {% endif %}Übertragungen, welche {% data variables.large_files.max_github_size %} übersteigen. {% ifversion ghes %}However, a site administrator can configure a different limit for {% data variables.product.product_location %}.  For more information, see "[Setting Git push limits](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits)."{% endif %}

To track files beyond this limit, you must use {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Weitere Informationen findest Du unter „[Informationen zu {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)“.

If you need to distribute large files within your repository, you can create releases on {% data variables.product.product_location %} instead of tracking the files. Weitere Informationen findest Du unter "[Große Binärdateien verteilen](#distributing-large-binaries)."

Git is not designed to handle large SQL files. Um große Datenbanken mit anderen Entwicklern zu teilen, empfehlen wir [Dropbox](https://www.dropbox.com/).

{% ifversion fpt %}
### Repository size limits

Wir empfehlen, dass Repositories klein bleiben, idealerweise weniger als 1 GB, und weniger als 5 GB wird dringend empfohlen. Kleinere Repositorys sind schneller zu klonen und einfacher zu bearbeiten und zu pflegen. Wenn Dein Repository unsere Infrastruktur übermäßig belastet, wirst Du allenfalls eine E-Mail von {% data variables.contact.github_support %} erhalten, in der Du um Korrekturmaßnahmen gebeten wirst. Wir versuchen flexibel zu sein, speziell mit großen Projekten mit vielen Mitarbeitern, und wir werden wenn immer möglich gemeinsam einen Lösung finden. Du kannst verhindern, dass Dein Repository unsere Infrastruktur beeinträchtigt, indem Du die Größe und den Zustand Deines Repository effektiv verwaltest. Ratschläge und ein Werkzeug für die Analyse Deiner Repositorys findest du im [`github/git-sizer`](https://github.com/github/git-sizer)-Repository.

Externe Abhängigkeiten können dazu führen, dass Git-Repositories sehr groß werden. Um ein Repository nicht mit externen Abhängigkeiten zu füllen, empfehlen wir Dir, einen Paketmanager zu verwenden. Beliebte Paketmanager für gebräuchliche Sprachen sind: [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/) und [Maven](http://maven.apache.org/). Diese Paketmanager unterstützen die Verwendung von Git-Repositorys direkt, so dass Du keine vorpaketierten Quellen benötigst.

Git ist nicht als Backup-Werkzeug konzipiert. Es gibt jedoch viele Lösungen, die speziell zum Durchführen von Backups konzipiert wurden, wie zum Beispiel [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) und [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Dateien aus dem Verlauf eines Repositorys entfernen

{% warning %}

**Warnung**: Mit den hier beschriebenen Verfahren löschst Du Dateien dauerhaft aus dem Repository auf Deinem Computer und von {% data variables.product.product_location %}. Wichtige Dateien solltest Du vor dem Entfernen unbedingt lokal in einem Verzeichnis außerhalb des Repositorys sichern.

{% endwarning %}

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

### Entfernen einer Datei, die in einem früheren Commit hinzugefügt wurde

Wenn Du eine Datei in einem früheren Commit hinzugefügt hast, musst Du sie aus Deinem Repository-Verlauf entfernen. Um Dateien aus dem Verlauf Deines Repository zu entfernen, kannst Du den BFG Repo-Cleaner oder den Befehl `git filter-branch` verwenden. Weitere Informationen findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).“

## Große Binärdateien verteilen

Wenn Du große Dateien innerhalb Deines Repositorys verteilen musst, kannst Du Releases auf {% data variables.product.product_location %} erstellen. Releases erlauben Dir, Software, Release-Hinweise und Links zu Binärdateien zu paketieren, damit andere Personen diese nutzen können. Weitere Informationen findest Du unter „[Informationen zu Releases](/github/administering-a-repository/about-releases).“

{% ifversion fpt %}

Wir begrenzen weder die Gesamtgröße der binären Release-Dateien noch die Bandbreite, die für deren Bereitstellung verwendet wird. Allerdings muss jede einzelne Datei kleiner sein als {% data variables.large_files.max_lfs_size %}.

{% endif %}

