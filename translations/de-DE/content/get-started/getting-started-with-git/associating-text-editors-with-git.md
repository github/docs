---
title: Texteditoren mit Git verknüpfen
intro: 'Verwende einen Texteditor, um Dateien mit Git zu öffnen und zu bearbeiten.'
redirect_from:
  - /textmate
  - /articles/using-textmate-as-your-default-editor
  - /articles/using-sublime-text-2-as-your-default-editor
  - /articles/associating-text-editors-with-git
  - /github/using-git/associating-text-editors-with-git
  - /github/getting-started-with-github/associating-text-editors-with-git
  - /github/getting-started-with-github/getting-started-with-git/associating-text-editors-with-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Associate text editors
ms.openlocfilehash: 0d02c32ff04d4a5a2a1003464175e866630603f4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145148755'
---
{% mac %}

## Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest du unter [Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) in der Atom-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Verwenden von {% data variables.product.prodname_vscode %} als Editor

1. Installiere [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest du in der Sublime Text-Dokumentation unter [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## TextMate als Editor verwenden

1. Installiere [TextMate](https://macromates.com/).
2. Installiere das Shellhilfsprogramm `mate` von TextMate. Weitere Informationen findest du in der TextMate-Dokumentation unter [`mate` und `rmate`](https://macromates.com/blog/2011/mate-and-rmate/).
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest du unter [Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) in der Atom-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Verwenden von {% data variables.product.prodname_vscode %} als Editor

1. Installiere [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest du in der Sublime Text-Dokumentation unter [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Notepad++ als Editor verwenden

1. Installiere Notepad++ über https://notepad-plus-plus.org/. Weitere Informationen findest du in der Notepad++-Dokumentation unter [Getting started](https://npp-user-manual.org/docs/getting-started/).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Atom als Editor verwenden

1. Installiere [Atom](https://atom.io/). Weitere Informationen findest du unter [Installieren von Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) in der Atom-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Verwenden von {% data variables.product.prodname_vscode %} als Editor

1. Installiere [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text als Editor verwenden

1. Installiere [Sublime Text](https://www.sublimetext.com/). Weitere Informationen findest du in der Sublime Text-Dokumentation unter [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gib folgenden Befehl ein:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
