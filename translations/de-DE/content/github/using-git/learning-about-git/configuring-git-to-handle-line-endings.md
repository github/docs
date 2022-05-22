---
title: Git zur Verarbeitung von Zeilenabschlüssen konfigurieren
intro: 'Um Probleme bei Deinen Diffs zu verhindern, kannst Du Git zur korrekten Verarbeitung von Zeilenabschlüssen konfigurieren.'
redirect_from:
  - /dealing-with-lineendings/
  - /line-endings/
  - /articles/dealing-with-line-endings/
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Jedes Mal, wenn Du auf der Tastatur die <kbd>Eingabetaste</kbd> drückst, fügst Du ein unsichtbares Zeichen ein, nämlich einen Zeilenabschluss. Verschiedene Betriebssysteme handhaben Zeilenenden unterschiedlich.

Wenn Du mit Git und {% data variables.product.product_name %} an Projekten zusammenarbeitest, könnte Git unerwartete Ergebnisse produzieren, wenn Du beispielsweise an einem Windows-PC arbeitest und Dein Mitarbeiter eine Änderungen unter OS X vorgenommen hat.

Du kannst Git so konfigurieren, dass es Zeilenenden automatisch setzt, so dass Du effektiv mit Leuten zusammenarbeiten kannst, die verschiedene Betriebssysteme verwenden.

### Globale Einstellungen für Zeilenabschlüsse

Mit dem Befehl `git config core.autocrlf` kannst Du anpassen, wie Git Zeilenabschlüsse verarbeitet. Dazu ist ein einziges Argument nötig.

{% mac %}

Unter OS X übergib einfach `input` an die Konfiguration. Ein Beispiel:

```shell
$ git config --global core.autocrlf input
# Konfiguriere Git, damit Zeilenenden in Dateien, die Du auscheckst, für OS X korrekt sind
```

{% endmac %}

{% windows %}

Unter Windows übergib einfach `true` an die Konfiguration. Ein Beispiel:

```shell
$ git config --global core.autocrlf true
# Konfiguriere Git, damit Zeilenenden in Dateien, die Du auscheckst, für Windows korrekt sind.
# Aus Kompatibilitätsgründen werden Zeilenenden beim Übertragen von Dateien in Unix-Stil konvertiert.
```

{% endwindows %}

{% linux %}

Unter Linux übergib einfach `input` an die Konfiguration. Ein Beispiel:

```shell
$ git config --global core.autocrlf input
# Konfiguriere Git, damit Zeilenenden in Dateien, die Du auscheckst, für Linux korrekt sind
```

{% endlinux %}

### Repository-abhängige Einstellungen

Optional kannst Du eine *.gitattributes*-Datei konfigurieren, um zu verwalten, wie Git Zeilenenden in einem bestimmten Repository liest. Wenn Du diese Datei in ein Repository freigibst, überschreibt sie die `core.autocrlf`-Einstellung für alle Repository-Mitwirkenden. Dadurch wird ein konsistentes Verhalten für alle Benutzer unabhängig von ihren Git-Einstellungen und ihrer Umgebung sichergestellt.

Die Datei *.gitattributes* muss im Root des Repositorys erstellt und wie jede andere Datei freigegeben werden.

Eine *.gitattributes*-Datei sieht wie eine Tabelle mit zwei Spalten aus:

* Links ist der Dateiname, den Git abgleichen soll.
* Rechts befindet sich die Konfiguration für Zeilenabschlüsse, die Git für diese Dateien verwenden soll.

#### Beispiel

Hier siehst ein Beispiel für eine *.gitattributes*-Datei. Du kannst sie als Vorlage für Deine Repositorys verwenden:

```
# Lege das Standardverhalten für den Fall fest, wenn jemand core.autocrlf nicht gesetzt hat.
* text=auto

# Gib explizit Textdateien an, die beim Auschecken immer normalisiert und in
# native Zeilenabschlüsse umgewandelt werden sollen.
*.c text
*.h text

# Gib Dateien an, die beim Auschecken immer CRLF-Zeilenabschlüsse haben werden.
*.sln text eol=crlf

# Führe alle Dateien auf, die wirklich binär sind und nicht geändert werden sollten.
*.png binary
*.jpg binary
```

Wie Du siehst, werden Dateien aufgeführt – `*.c`, `*.sln`, `*.png` –, durch ein Leerzeichen voneinander getrennt und mit einer Einstellung – `text`, `text eol=crlf`, `binary` – versehen. Nachfolgend sehen wir uns einige mögliche Einstellungen an.

- `text=auto`: Git wird die Dateien nach Bestem Wissen und Gewissen behandeln. Das ist eine gute Standardoption.

- `text eol=crlf`: Git wird die Zeilenenden beim Checkout immer in `CRLF` umwandeln. Verwende diese Einstellung für Dateien, die die `CRLF`-Abschlüsse behalten sollen, auch unter OS X oder Linux.

- `text eol=lf`: Git wird Zeilenenden beim Checkout immer in `LF` umwandeln. Verwende diese Einstellung für Dateien, die die LF-Abschlüsse behalten sollen, auch unter Windows.

- `binary`: zeigt Git, dass diese angegebenen Dateien kein Text sind und dass Git diese Dateien nicht verändern soll. Die Einstellung `binary` ist auch ein Alias für `-text -diff`.

### Ein Repository nach dem Ändern der Zeilenabschlüsse aktualisieren

Wenn Du die Option `core.autocrlf` setzt oder eine *.gitattributes*-Datei freigibst, wirst Du allenfalls feststellen, dass Git Änderungen an Dateien meldet, die Du nicht geändert hast. Git hat die Zeilenendungen an Deine neue Konfiguration angepasst.

Um sicherzustellen, dass alle Zeilenenden in Deinem Repository mit Deiner neuen Konfiguration übereinstimmen, sichere Deine Dateien mit Git, lösche alle Dateien in Deinem Repository (außer `.git` Verzeichnis), und stelle dann alle Dateien auf einmal wieder her.

1. Speichere Deine aktuellen Dateien in Git, damit nichts von Deiner Arbeit verloren geht.
  ```shell
  $ git add . -u
  $ git commit -m "Dateien vor dem Aktualisieren der Zeilenenden sichern"
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
  $ git commit -m "Normalisiere alle Zeilenenden"
  ```

### Weiterführende Informationen

- „[Git anpassen – Git-Attribute](https://git-scm.com/book/en/Customizing-Git-Git-Attributes)“ im Pro Git-Buch
- „[git-config](https://git-scm.com/docs/git-config)" in den Handbuch-Seiten von Git
- „[Erste Schritte – Git erstmalig einrichten](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)“ im Pro Git-Buch
- „[Denke an Deine Zeilenenden](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) von [Tim Clem](https://github.com/tclem)
