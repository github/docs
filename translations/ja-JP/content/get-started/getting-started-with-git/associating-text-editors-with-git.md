---
title: Git とのテキストエディタの関連付け
intro: テキストエディタを使って Git でファイルを開いたり編集したりしてください。
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148757'
---
{% mac %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/) をインストールしてください。 詳しい情報については、Atom の「[Atom のインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## {% data variables.product.prodname_vscode %} をエディターに使う

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}) をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[{% data variables.product.prodname_vscode_shortname %} の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」をご覧ください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳しい情報については、Sublime Text の「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## エディタとして TextMate を使う

1. [TextMate](https://macromates.com/) をインストールします。
2. TextMate の `mate` シェル ユーティリティをインストールします。 詳しい情報については、TextMate のドキュメントで「[`mate` と `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/) をインストールしてください。 詳しい情報については、Atom の「[Atom のインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## {% data variables.product.prodname_vscode %} をエディターに使う

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}) をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[{% data variables.product.prodname_vscode_shortname %} の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」をご覧ください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳しい情報については、Sublime Text の「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## エディタとして Notepad++ を使う

1. https://notepad-plus-plus.org/ Notepad++ をインストールしてください。 詳しい情報については、Notepad++ の「[概要](https://npp-user-manual.org/docs/getting-started/)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/) をインストールしてください。 詳しい情報については、Atom の「[Atom のインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## {% data variables.product.prodname_vscode %} をエディターに使う

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}) をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[{% data variables.product.prodname_vscode_shortname %} の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」をご覧ください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳しい情報については、Sublime Text の「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」のドキュメントを参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のコマンドを入力します。
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
