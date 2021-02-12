---
title: Git Large File Storage installieren
intro: 'Um {% data variables.large_files.product_name_short %} zu verwenden, musst Du ein neues Programm separat von Git herunterladen und installieren.'
redirect_from:
  - /articles/installing-large-file-storage/
  - /articles/installing-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke auf **Download** (Herunterladen). Alternativ können Sie {% data variables.large_files.product_name_short %} auch mit einem Paketmanager installieren:
    - Um [Homebrew](http://brew.sh/) zu verwenden, führe `brew install git-lfs` aus.
    - Um [MacPorts](https://www.macports.org/) zu verwenden, führe `port install git-lfs` aus.

 Wenn Sie {% data variables.large_files.product_name_short %} mit Homebrew oder MacPorts installieren, fahren Sie mit Schritt 6 fort.

2. Suche und entpacke auf Deinem Computer die heruntergeladene Datei.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändern Sie das aktuelle Arbeitsverzeichnis in den Ordner, in dem Sie die heruntergeladene Datei entpackt haben.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Hinweis:** Welchen Dateipfad Du nach `cd` verwenden, ist abhängig von Deinem Betriebssystem, der heruntergeladenen Git LFS-Version und dem Speicherort des {% data variables.large_files.product_name_short %}-Downloads.

 {% endnote %}
4. Um die Datei zu installieren, führen Sie den folgenden Befehl aus:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Hinweis:** Du musst möglicherweise `sudo ./install.sh` verwenden, um die Datei zu installieren.

 {% endnote %}
5. Überprüfen Sie, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Nachricht angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende Dich an {% data variables.contact.contact_support %}. Denken Sie daran, den Namen Ihres Betriebssystems anzugeben.

{% endmac %}

{% windows %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke auf **Download** (Herunterladen).

  {% tip %}

  **Tipp:** Weitere Informationen zu anderen Möglichkeiten, {% data variables.large_files.product_name_short %} für Windows zu installieren, findest Du in diesem [Leitfaden zu den ersten Schritten](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Suche auf Deinem Computer die heruntergeladene Datei.
3. Doppelklicke auf die Datei namens *git-lfs-windows-1.X.X.exe*, wobei 1.X.X durch die Version von Git LFS ersetzt wird, die Du heruntergeladen hast. When you open this file Windows will run a setup wizard to install
{% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Überprüfen Sie, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Nachricht angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende Dich an {% data variables.contact.contact_support %}. Denken Sie daran, den Namen Ihres Betriebssystems anzugeben.

{% endwindows %}

{% linux %}

1. Navigiere zu [git-lfs.github.com](https://git-lfs.github.com), und klicke auf **Download** (Herunterladen).

  {% tip %}

  **Tipp:** Weitere Informationen zu anderen Möglichkeiten, {% data variables.large_files.product_name_short %} für Linux zu installieren, findest Du in diesem [Leitfaden zu den ersten Schritten](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Suche und entpacke auf Deinem Computer die heruntergeladene Datei.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändern Sie das aktuelle Arbeitsverzeichnis in den Ordner, in dem Sie die heruntergeladene Datei entpackt haben.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Hinweis:** Welchen Dateipfad Du nach `cd` verwenden, ist abhängig von Deinem Betriebssystem, der heruntergeladenen Git LFS-Version und dem Speicherort des {% data variables.large_files.product_name_short %}-Downloads.

 {% endnote %}
4. Um die Datei zu installieren, führen Sie den folgenden Befehl aus:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Hinweis:** Du musst möglicherweise `sudo ./install.sh` verwenden, um die Datei zu installieren.

 {% endnote %}
5. Überprüfen Sie, ob die Installation erfolgreich war:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Wenn keine Nachricht angezeigt wird, die angibt, dass `git {% data variables.large_files.command_name %} install` erfolgreich war, wende Dich an {% data variables.contact.contact_support %}. Denken Sie daran, den Namen Ihres Betriebssystems anzugeben.

{% endlinux %}

### Weiterführende Informationen

- „[{% data variables.large_files.product_name_long %} konfigurieren](/articles/configuring-git-large-file-storage)“
