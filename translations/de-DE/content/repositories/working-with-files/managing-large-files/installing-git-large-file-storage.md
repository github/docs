---
title: Git Large File Storage installieren
intro: 'Um {% data variables.large_files.product_name_short %} zu verwenden, musst du ein neues, von Git unabhängiges Programm herunterladen und installieren.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: b7078a3147ed610ff67bdc4b0bdce93158279a94
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131925'
---
{% mac %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke dann auf **Download**. Alternativ kannst du {% data variables.large_files.product_name_short %} auch mit einem Paketmanager installieren:
    - Führe `brew install git-lfs` aus, um [Homebrew](http://brew.sh/) zu verwenden.
    - Führe `port install git-lfs` aus, um [MacPorts](https://www.macports.org/) zu verwenden.

 Wenn du {% data variables.large_files.product_name_short %} mit Homebrew oder MacPorts installierst, fahre mit Schritt 6 fort.

2. Suche und entpacke auf deinem Computer die heruntergeladene Datei.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändere das aktuelle Arbeitsverzeichnis in den Ordner, in dem du die heruntergeladene Datei entpackt hast.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Hinweis:** der Dateipfad, den du hinter `cd` verwendest, hängt von deinem Betriebssystem, der heruntergeladenen Git LFS-Version und dem Speicherort des {% data variables.large_files.product_name_short %}-Downloads ab.

 {% endnote %}
4. Um die Datei zu installieren, führe den folgenden Befehl aus:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Hinweis:** Möglicherweise musst du `sudo ./install.sh` verwenden, um die Datei zu installieren.

 {% endnote %}
5. Überprüfe, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Meldung angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende dich an den {% data variables.contact.contact_support %}. Denke daran, den Namen deines Betriebssystems anzugeben.

{% endmac %}

{% windows %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke dann auf **Download**.

  {% tip %}

  **Tipp:** Weitere Informationen zu alternativen Möglichkeiten zum Installieren von {% data variables.large_files.product_name_short %} für Windows findest du im [Leitfaden zu den ersten Schritten](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Suche auf deinem Computer die heruntergeladene Datei.
3. Doppelklicke auf die Datei *git-lfs-windows-1.X.X.exe*, wobei 1.X.X durch die Version von Git LFS ersetzt wird, die du heruntergeladen hast. Wenn du diese Datei öffnest, führt Windows einen Einrichtungsassistenten für die Installation von {% data variables.large_files.product_name_short %} aus.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Überprüfe, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Meldung angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende dich an den {% data variables.contact.contact_support %}. Denke daran, den Namen deines Betriebssystems anzugeben.

{% endwindows %}

{% linux %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke dann auf **Download**.

  {% tip %}

  **Tipp:** Weitere Informationen zu alternativen Möglichkeiten zum Installieren von {% data variables.large_files.product_name_short %} für Windows findest du im [Leitfaden zu den ersten Schritten](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Suche und entpacke auf deinem Computer die heruntergeladene Datei.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändere das aktuelle Arbeitsverzeichnis in den Ordner, in dem du die heruntergeladene Datei entpackt hast.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Hinweis:** der Dateipfad, den du hinter `cd` verwendest, hängt von deinem Betriebssystem, der heruntergeladenen Git LFS-Version und dem Speicherort des {% data variables.large_files.product_name_short %}-Downloads ab.

 {% endnote %}
4. Um die Datei zu installieren, führe den folgenden Befehl aus:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Hinweis:** Möglicherweise musst du `sudo ./install.sh` verwenden, um die Datei zu installieren.

 {% endnote %}
5. Überprüfe, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Meldung angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende dich an den {% data variables.contact.contact_support %}. Denke daran, den Namen deines Betriebssystems anzugeben.

{% endlinux %}

## Weitere Informationsquellen

- [Konfigurieren von {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)
