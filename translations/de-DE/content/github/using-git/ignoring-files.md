---
title: Dateien ignorieren
redirect_from:
  - /git-ignore/
  - /ignore-files/
  - /articles/ignoring-files
intro: 'Du kannst Git so konfigurieren, dass Dateien ignoriert werden, die Du nicht nach {% data variables.product.product_name %} einchecken willst.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Ignorierte Dateien für ein einzelnes Repository konfigurieren

Du kannst eine *.gitignore*-Datei im Stammverzeichnis Deines Repository erstellen, um Git mitzuteilen, welche Dateien und Verzeichnisse zu ignorieren sind, wenn Du einen Commit machst. Um diese Ignorierregeln mit anderen Benutzern zu teilen, die das Repository klonen, musst Du die *.gitignore*-Datei in Dein Repository freigeben.

GitHub pflegt eine offizielle Liste an empfohlenen *.gitignore*-Dateien für viele gängige Betriebssysteme, Umgebungen und Sprachen im öffentlichen Repository `github/gitignore`. Du kannst auch mit gitignore.io eine *.gitignore*-Datei für Dein Betriebssystem, Deine Programmiersprache oder Deine integrierte Entwicklungsumgebung (IDE) erstellen. Weitere Informationen findest Du unter „[github/gitignore](https://github.com/github/gitignore)" und auf der „[gitignore.io](https://www.gitignore.io/)"-Website.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zum Speicherort Deines Git-Repositorys.
3. Erstelle eine *.gitignore*-Datei für Dein Repository.
   ```shell
   $ touch .gitignore
  ```

Ein Beispiel einer *.gitignore*-Datei findest Du unter „[Einige gängige .gitignore-Konfigurationen](https://gist.github.com/octocat/9257657)" im Octocat-Repository.

Wenn Du eine bereits eingecheckte Datei ignorieren willst, musst Du die Datei vor dem Hinzufügen einer Ignorierregel entfernen. Entferne die Datei von Deinem Terminal.

```shell
$ git rm --cached <em>FILENAME</em>
```

### Ignorierte Dateien für alle Repositorys auf Deinem Computers konfigurieren

Du kannst auch eine globale *.gitignore*-Datei erstellen, um eine Liste der Regeln für das ignorieren von Dateien in allen Git-Repositorys auf Deinem Computer zu definieren. Du kannst beispielsweise eine Datei unter *~/.gitignore_global* erstellen und ihr dann einige Regeln hinzufügen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Konfiguriere Git so, dass die Ausschlussdatei *~/.gitignore_global* für alle Git-Repositories verwendet wird.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

### Lokale Dateien ausschließen, ohne eine *.gitignore*-Datei zu erstellen

Wenn Du keine *.gitignore*-Datei erstellen und mit anderen teilen möchtest, kannst Du Regeln erstellen, die nicht in das Repository freigegeben werden. Du kannst diese Methode für lokal erstellte Dateien anwenden, bei denen es unwahrscheinlich ist, dass andere sie erzeugen, z. B. Dateien, die von Deinem Editor erstellt wurden.

Öffne die Datei *.git/info/exclude* im Root Deines Git-Repositorys mit Deinem bevorzugten Texteditor. Alle Regeln, die Du hier hinzufügst, werden nicht eingecheckt und ignorieren nur Dateien für Dein lokales Repository.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zum Speicherort Deines Git-Repositorys.
3. Öffne die Datei *.git/info/exclude* mit Deinem bevorzugten Texteditor.

### Weiterführende Informationen

* „[Dateien ignorieren](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)" im Pro Git Buch
* „[.gitignore](https://git-scm.com/docs/gitignore) in den Handbuchseiten für Git
* „[Eine Sammlung von nützlichen *.gitignore*-Vorlagen](https://github.com/github/gitignore)" im github/gitignore-Repository
* „[gitignore.io](https://www.gitignore.io/)"-Website
