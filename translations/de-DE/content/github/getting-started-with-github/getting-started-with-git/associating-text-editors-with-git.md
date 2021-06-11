---
title: Texteditoren mit Git verknüpfen
intro: 'Verwende einen Texteditor, um Dateien mit Git zu öffnen und zu bearbeiten.'
redirect_from:
  - /textmate/
  - /articles/using-textmate-as-your-default-editor/
  - /articles/using-sublime-text-2-as-your-default-editor/
  - /articles/associating-text-editors-with-git
  - /github/using-git/associating-text-editors-with-git
  - /github/getting-started-with-github/associating-text-editors-with-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

### Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest Du unter „[Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in der Atom-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Visual Studio Code als Editor verwenden

1. Installiere [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Weitere Informationen findest Du unter „[Visual Studio Code aufsetzen](https://code.visualstudio.com/Docs/setup/setup-overview)" in der Dokumentation von VS Codes.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest Du unter „[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in der Sublime Text-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

### TextMate als Editor verwenden

1. Installiere [TextMate](https://macromates.com/).
2. Installiere TextMate's `mate` Shell Werkzeug. Weitere Informationen findest Du unter „[mate und rmate](https://macromates.com/blog/2011/mate-and-rmate/)" in der TextMate-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

### Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest Du unter „[Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in der Atom-Dokumentation.
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Visual Studio Code als Editor verwenden

1. Installiere [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Weitere Informationen findest Du unter „[Visual Studio Code aufsetzen](https://code.visualstudio.com/Docs/setup/setup-overview)" in der Dokumentation von VS Codes.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest Du unter „[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in der Sublime Text-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

### Notepad++ als Editor verwenden

1. Installiere Notepad++ von https://notepad-plus-plus.org/. Weitere Informationen findest Du unter „[Erste Schritte](https://npp-user-manual.org/docs/getting-started/)" in der Notepad++-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

### Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest Du unter „[Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in der Atom-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Visual Studio Code als Editor verwenden

1. Installiere [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Weitere Informationen findest Du unter „[Visual Studio Code aufsetzen](https://code.visualstudio.com/Docs/setup/setup-overview)" in der Dokumentation von VS Codes.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest Du unter „[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in der Sublime Text-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Geben Sie den folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
