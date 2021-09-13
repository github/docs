---
title: Git Large File Storage をインストールする
intro: '{% data variables.large_files.product_name_short %} を使用するには、Git とは別の新しいプログラムをダウンロードしてインストールする必要があります。'
redirect_from:
  - /articles/installing-large-file-storage/
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、[**Download**] をクリックします。 または、パッケージ マネージャーを使用すれば {% data variables.large_files.product_name_short %} をインストールできます。
    - [Homebrew](http://brew.sh/) を使用するには、`brew install git-lfs` を実行します。
    - [MacPorts](https://www.macports.org/) を使用するには、`port install git-lfs` を実行します。

 Homebrew または MacPorts を使用して {% data variables.large_files.product_name_short %} をインストールする場合は、スキップしてステップ 6 まで進んでください。

2. コンピュータで、ダウンロードしたファイルを探して解凍します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 現在のワーキングディレクトリを、ダウンロードして解凍したフォルダに変更します。
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **メモ:** `cd` の後ろに指定するファイル パスは、お使いのオペレーティング システム、ダウンロードした Git LFS のバージョン、{% data variables.large_files.product_name_short %} のダウンロードを保存した場所によって異なります。

 {% endnote %}
4. ファイルをインストールするには、次のコマンドを実行します:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **メモ:** ファイルをインストールするには、 `sudo ./install.sh` を使用しなければならない場合があります。

 {% endnote %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} に連絡してください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endmac %}

{% windows %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、[**Download**] をクリックします。

  {% tip %}

  **ヒント:** Windows で {% data variables.large_files.product_name_short %} をインストールする別の方法については、[スタートガイド](https://github.com/github/git-lfs#getting-started)を参照してください。

  {% endtip %}
2. コンピュータで、ダウンロードしたファイルを見つけます。
3. *git-lfs-windows-1.X.X.exe* というファイルをダブルクリックします。1.X.X は、ダウンロードした Git LFS のバージョンに置き換えてください。 このファイルを開くと、Windows は {% data variables.large_files.product_name_short %} をインストールするセットアップ ウィザードを実行します。
{% data reusables.command_line.open_the_multi_os_terminal %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} に連絡してください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endwindows %}

{% linux %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、[**Download**] をクリックします。

  {% tip %}

  **ヒント:** Linux で {% data variables.large_files.product_name_short %} をインストールする別の方法については、[スタートガイド](https://github.com/github/git-lfs#getting-started)を参照してください。

  {% endtip %}
2. コンピュータで、ダウンロードしたファイルを探して解凍します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 現在のワーキングディレクトリを、ダウンロードして解凍したフォルダに変更します。
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **メモ:** `cd` の後ろに指定するファイル パスは、お使いのオペレーティング システム、ダウンロードした Git LFS のバージョン、{% data variables.large_files.product_name_short %} のダウンロードを保存した場所によって異なります。

 {% endnote %}
4. ファイルをインストールするには、次のコマンドを実行します:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **メモ:** ファイルをインストールするには、 `sudo ./install.sh` を使用しなければならない場合があります。

 {% endnote %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} に連絡してください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endlinux %}

### 参考リンク

- 「[{% data variables.large_files.product_name_long %} を構成する](/articles/configuring-git-large-file-storage)」
