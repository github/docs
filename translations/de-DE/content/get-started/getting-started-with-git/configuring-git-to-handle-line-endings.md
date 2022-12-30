---
title: Git zur Verarbeitung von Zeilenenden konfigurieren
intro: 'Um Probleme bei deinen Diffs zu verhindern, kannst du Git zur korrekten Verarbeitung von Zeilenabschlüssen konfigurieren.'
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884205'
---
## Informationen zu Zeilenenden
Jedes Mal, wenn du auf der Tastatur die <kbd>EINGABETASTE</kbd> drückst, fügst du ein unsichtbares Zeichen ein, nämlich ein Zeilenende. Verschiedene Betriebssysteme handhaben Zeilenenden unterschiedlich.

Wenn du mit Git und {% data variables.product.product_name %} an Projekten zusammenarbeitest, kann Git unerwartete Ergebnisse liefern, wenn du beispielsweise an einem Windows-Computer arbeitest und dein*e Projektmitarbeiter*in eine Änderungen unter macOS vorgenommen hat.

Du kannst Git so konfigurieren, dass es Zeilenenden automatisch setzt, so dass Du effektiv mit Leuten zusammenarbeiten kannst, die verschiedene Betriebssysteme verwenden.

## Globale Einstellungen für Zeilenabschlüsse

Der Befehl `git config core.autocrlf` wird verwendet, um zu ändern, wie Git Zeilenenden verarbeitet. Dazu ist ein einziges Argument nötig.

{% mac %}

Übergebe unter macOS einfach `input` an die Konfiguration. Beispiel:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

Übergebe unter Windows einfach `true` an die Konfiguration. Beispiel:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

Übergebe unter Linux einfach `input` an die Konfiguration. Beispiel:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## Repository-abhängige Einstellungen

Optional kannst du eine *.gitattributes*-Datei konfigurieren, um zu verwalten, wie Git Zeilenenden in einem bestimmten Repository liest. Wenn du diese Datei in ein Repository committest, überschreibt sie die `core.autocrlf`-Einstellung für alle Mitwirkenden des Repositorys. Dadurch wird ein konsistentes Verhalten für alle Benutzer unabhängig von ihren Git-Einstellungen und ihrer Umgebung sichergestellt.

Die Datei *.gitattributes* muss im Stamm des Repositorys erstellt und wie jede andere Datei committet werden.

Eine *.gitattributes*-Datei sieht wie eine Tabelle mit zwei Spalten aus:

* Links ist der Dateiname, den Git abgleichen soll.
* Rechts befindet sich die Konfiguration für Zeilenabschlüsse, die Git für diese Dateien verwenden soll.

### Beispiel

Nachfolgend findest du ein Beispiel für eine *.gitattributes*-Datei. Du kannst sie als Vorlage für Deine Repositorys verwenden:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

Wie du siehst, werden Dateien abgeglichen (`*.c`, `*.sln`, `*.png`), durch ein Leerzeichen getrennt und dann mit einer Einstellung (`text`, `text eol=crlf` oder `binary`) versehen. Nachfolgend sehen wir uns einige mögliche Einstellungen an.

- `text=auto` Git verarbeitet die Dateien so, wie es für sinnvoll erachtet wird. Das ist eine gute Standardoption.

- `text eol=crlf` Git wandelt Zeilenenden beim Check-Out immer in `CRLF` um. Verwende diese Einstellung für Dateien, die die `CRLF`-Enden behalten sollen, auch unter OS X oder Linux.

- `text eol=lf` Git wandelt Zeilenenden beim Check-Out immer in `LF` um. Verwende diese Einstellung für Dateien, die die LF-Abschlüsse behalten sollen, auch unter Windows.

- `binary` Git erkennt, dass die angegebenen Dateien keine Textdateien sind, und versucht nicht, sie umzuwandeln. Die `binary`-Einstellung ist ein Alias für `-text -diff`.

## Ein Repository nach dem Ändern der Zeilenabschlüsse aktualisieren

Wenn du die Option `core.autocrlf` festlegst oder eine *.gitattributes*-Datei committest, meldet Git möglicherweise Änderungen an Dateien, die nicht geändert wurden. Git hat die Zeilenendungen an Deine neue Konfiguration angepasst.

Wenn du sicherstellen möchtest, dass alle Zeilenenden in deinem Repository mit deiner neuen Konfiguration übereinstimmen, sichere deine Dateien mit Git, lösche alle Dateien in deinem Repository (außer dem `.git`-Verzeichnis), und stelle dann alle Dateien auf einmal wieder her.

1. Speichere Deine aktuellen Dateien in Git, damit nichts von Deiner Arbeit verloren geht.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Füge alle geänderten Dateien wieder hinzu, und normalisiere die Zeilenabschlüsse.
  ```shell
  $ git add --renormalize .
  ```
3. Zeige die umgeschriebenen, normalisierten Dateien an.
  ```shell
  $ git status
  ```
4. Gib die Änderungen an Dein Repository frei.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## Weiterführende Themen

- [Anpassen von Git – Git-Attribute](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) im Pro Git-Buch
- [git-config](https://git-scm.com/docs/git-config) auf der Manpage für Git
- [Erste Schritte: Erstes Git-Setup](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) im Pro Git-Buch
- [Denke an das Ende deiner Zeile](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) von [Tim Clem](https://github.com/tclem)
