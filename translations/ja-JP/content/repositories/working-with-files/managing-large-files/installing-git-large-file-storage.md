---
title: Git Large File Storage をインストールする
intro: '{% data variables.large_files.product_name_short %} を使用するには、Git とは別の新しいプログラムをダウンロードしてインストールする必要があります。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131923'
---
{% mac %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、 **[ダウンロード]** をクリックします。 または、パッケージ マネージャーを使用すれば {% data variables.large_files.product_name_short %} をインストールできます。
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

 **注:** `cd` の後ろに指定するファイル パスは、お使いのオペレーティング システム、ダウンロードした Git LFS のバージョン、{% data variables.large_files.product_name_short %} のダウンロードを保存した場所によって異なります。

 {% endnote %}
4. ファイルをインストールするには、次のコマンドを実行します:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **注:** ファイルのインストールに `sudo ./install.sh` を使用する必要がある場合があります。

 {% endnote %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} にお問い合わせください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endmac %}

{% windows %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、 **[ダウンロード]** をクリックします。

  {% tip %}

  **ヒント:** Windows 用に {% data variables.large_files.product_name_short %} をインストールする別の方法の詳細については、この [入門ガイド](https://github.com/github/git-lfs#getting-started)を参照してください。

  {% endtip %}
2. コンピュータで、ダウンロードしたファイルを見つけます。
3. *git-lfs-windows-1.X.X.exe* というファイルをダブルクリックします。"1.X.X" は、ダウンロードした Git LFS のバージョンに置き換わります。 このファイルを開くと、Windows は {% data variables.large_files.product_name_short %} をインストールするセットアップ ウィザードを実行します。
{% data reusables.command_line.open_the_multi_os_terminal %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} にお問い合わせください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endwindows %}

{% linux %}

1. [git-lfs.github.com](https://git-lfs.github.com) に移動し、 **[ダウンロード]** をクリックします。

  {% tip %}

  **ヒント:** Linux 用に {% data variables.large_files.product_name_short %} をインストールする別の方法の詳細については、この [入門ガイド](https://github.com/github/git-lfs#getting-started)を参照してください。

  {% endtip %}
2. コンピュータで、ダウンロードしたファイルを探して解凍します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 現在のワーキングディレクトリを、ダウンロードして解凍したフォルダに変更します。
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **注:** `cd` の後ろに指定するファイル パスは、お使いのオペレーティング システム、ダウンロードした Git LFS のバージョン、{% data variables.large_files.product_name_short %} のダウンロードを保存した場所によって異なります。

 {% endnote %}
4. ファイルをインストールするには、次のコマンドを実行します:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **注:** ファイルのインストールに `sudo ./install.sh` を使用する必要がある場合があります。

 {% endnote %}
5. インストールが成功したか検証します。
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install` が成功したことを示すメッセージが表示されない場合は、{% data variables.contact.contact_support %} にお問い合わせください。 お使いのオペレーティング システムの名前を必ずお伝えください。

{% endlinux %}

## 参考資料

- 「[{% data variables.large_files.product_name_long %} を設定する](/articles/configuring-git-large-file-storage)」
