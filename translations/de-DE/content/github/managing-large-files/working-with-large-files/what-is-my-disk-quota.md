---
title: Wie lautet mein Disk-Kontingent?
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
intro: '{% data variables.product.product_name %} versucht genügend Speicher für alle Git-Repositories bereitzustellen, obwohl es harte Grenzen für Datei- und Repository-Größen gibt.'
versions:
  free-pro-team: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### Größenbeschränkungen für Dateien und Repositorys

Um die Leistungsfähigkeit und Zuverlässigkeit für unsere Benutzer zu gewährleisten, überwachen wir aktiv die Signale des gesamtheitlichen Repository-Zustands. Der Repository-Zustand ist eine Funktion verschiedener zusammenhängender Faktoren wie Größe, Commit-Frequenz, Inhalte und Strukturen.

Wir empfehlen, dass Repositories klein bleiben, idealerweise weniger als 1 GB, und weniger als 5 GB wird dringend empfohlen. Kleinere Repositorys sind schneller zu klonen und einfacher zu bearbeiten und zu pflegen. Einzelne Dateien in einem Repository sind streng auf eine maximale Größe von {% data variables.large_files.max_github_size %} beschränkt. Weitere Informationen findest Du unter „[Mit großen Dateien arbeiten](/github/managing-large-files/working-with-large-files).“

Wenn Dein Repository unsere Infrastruktur übermäßig belastet, wirst Du allenfalls eine E-Mail von {% data variables.contact.github_support %} erhalten, in der Du um Korrekturmaßnahmen gebeten wirst. Wir versuchen flexibel zu sein, speziell mit großen Projekten mit vielen Mitarbeitern, und wir werden wenn immer möglich gemeinsam einen Lösung finden. Du kannst verhindern, dass Dein Repository unsere Infrastruktur beeinträchtigt, indem Du die Größe und den Zustand Deines Repository effektiv verwaltest. Ratschläge und ein Werkzeug für die Analyse Deiner Repositorys findest du im [`github/git-sizer`](https://github.com/github/git-sizer)-Repository.

{% note %}

**Hinweis:** Falls Du über einen Browser einem Repository eine Datei hinzufügst, darf die Datei nicht größer als {% data variables.large_files.max_github_browser_size %} sein. Weitere Informationen findest Du unter „[Eine Datei zu einem Repository hinzufügen](/github/managing-files-in-a-repository/adding-a-file-to-a-repository).“

{% endnote %}

### Backups

Git ist nicht als Backup-Werkzeug konzipiert. Es gibt jedoch viele Lösungen, die speziell zum Durchführen von Backups konzipiert wurden, wie zum Beispiel [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) und [CrashPlan](https://www.crashplan.com/en-us/).

### Datenbankabbilder

Versionskontrollsysteme wie Git sind nicht für den Umgang mit großen SQL-Dateien konzipiert. Um große Datenbanken mit anderen Entwicklern zu teilen, empfehlen wir [Dropbox](https://www.dropbox.com/).

Git sollte nicht verwendet werden, um Deine Produktionsserver zu sichern. Weitere Informationen findest Du unter „[Backups](/github/managing-large-files/what-is-my-disk-quota#backups)."

### Externe Abhängigkeiten

Externe Abhängigkeiten können dazu führen, dass Git-Repositories sehr groß werden. Um ein Repository nicht mit externen Abhängigkeiten zu füllen, empfehlen wir Dir, einen Paketmanager zu verwenden. Beliebte Paketmanager für gebräuchliche Sprachen sind: [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/) und [Maven](http://maven.apache.org/). Diese Paketmanager unterstützen die Verwendung von Git-Repositorys direkt, so dass Du keine vorpaketierten Quellen benötigst.

### Paketierte Releaseversionen

Es wird nicht empfohlen, kompilierten Code und vorpaketierte Releases in Deinem Repository zu verteilen. Weitere Informationen findest Du unter "[Große Binärdateien verteilen](/github/managing-large-files/distributing-large-binaries)."

### Verlauf eines vorhandenen Repositorys ändern

Wenn Du bereits ein relativ großes Repository hast, kannst Du die Größe des Repositorys reduzieren, indem Du große Dateien aus dem Repository-Verlauf entfernst. Weitere Informationen findest Du unter „[Dateien aus dem Verlauf eines Repositorys entfernen](/github/managing-large-files/removing-files-from-a-repositorys-history).“
