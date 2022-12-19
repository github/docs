---
title: Ignorieren von Dateien
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'Du kannst Git so konfigurieren, dass Dateien ignoriert werden, die Du nicht nach {% data variables.product.product_name %} einchecken willst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131289'
---
## Ignorierte Dateien für ein einzelnes Repository konfigurieren

Du kannst eine *.gitignore*-Datei im Stammverzeichnis Deines Repository erstellen, um Git mitzuteilen, welche Dateien und Verzeichnisse zu ignorieren sind, wenn Du einen Commit machst.
Um diese Ignorierregeln mit anderen Benutzern zu teilen, die das Repository klonen, musst Du die *.gitignore*-Datei für Dein Repository freigeben.

GitHub pflegt eine offizielle Liste an empfohlenen *.gitignore*-Dateien für viele gängige Betriebssysteme, Umgebungen und Sprachen im öffentlichen `github/gitignore`-Repository. Du kannst auch mit gitignore.io eine *.gitignore*-Datei für Dein Betriebssystem, Deine Programmiersprache oder Deine IDE erstellen. Weitere Informationen findest Du unter "[github/gitignore](https://github.com/github/gitignore)" und auf der Website "[gitignore.io](https://www.gitignore.io/)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zum Speicherort Deines Git-Repositorys.
3. Erstelle eine *Gitignore-Datei* für Dein Repository.
   ```shell
   $ touch .gitignore
  ```

   Wenn der Befehl erfolgreich ist, erfolgt keine Ausgabe.
   
Ein Beispiel für eine *gitignore*-Datei findest Du unter "[Einige gängige .gitignore-Konfigurationen](https://gist.github.com/octocat/9257657)" im Octocat-Repository.

Wenn Du eine bereits eingecheckte Datei ignorieren willst, musst Du die Datei vor dem Hinzufügen einer Ignorierregel entfernen. Entferne die Datei von Deinem Terminal.

```shell
$ git rm --cached <em>FILENAME</em>
```

## Ignorierte Dateien für alle Repositorys auf Deinem Computers konfigurieren

Du kannst auch eine globale *.gitignore*-Datei erstellen, um eine Liste der Regeln für das Ignorieren von Dateien in allen Git-Repositorys auf Deinem Computer zu definieren. Beispielsweise kannst Du eine Datei unter *~/.gitignore_global* erstellen und ihr dann einige Regeln hinzufügen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Konfiguriere Git so, dass die Ausschlussdatei *~/.gitignore_global* für alle Git-Repositorys verwendet wird.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## Ausschließen lokaler Dateien ohne Erstellen einer *Gitignore-Datei*

Wenn Du keine *.gitignore*-Datei erstellen und mit anderen teilen möchtest, kannst Du Regeln erstellen, die nicht mit dem Repository committet werden. Du kannst diese Methode für lokal erstellte Dateien anwenden, bei denen es unwahrscheinlich ist, dass andere sie erzeugen, z. B. Dateien, die von Deinem Editor erstellt wurden.

Öffne die Datei *.git/info/exclude* im Root Deines Git-Repositorys mit Deinem bevorzugten Texteditor. Alle Regeln, die Du hier hinzufügst, werden nicht eingecheckt und ignorieren nur Dateien für Dein lokales Repository.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigiere zum Speicherort Deines Git-Repositorys.
3. Öffne die Datei *.git/info/exclude* mit Deinem bevorzugten Texteditor.

## Weitere Informationen

* [Ignorieren von Dateien](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) im Pro Git-Buch
* [.gitignore](https://git-scm.com/docs/gitignore) in den Man-Seiten für Git
* [Eine Sammlung nützlicher *Gitignore*-Vorlagen](https://github.com/github/gitignore) im github/gitignore-Repository
* [gitignore.io](https://www.gitignore.io/)-Website
