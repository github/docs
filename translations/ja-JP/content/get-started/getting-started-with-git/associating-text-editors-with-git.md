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
---

{% mac %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Using {% data variables.product.prodname_vscode %} as your editor

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## エディタとして TextMate を使う

1. [TextMate](https://macromates.com/) をインストールします。
2. TextMate の `mate` のシェルユーティリティをインストールします。 For more information, see "[`mate` and `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)" in the TextMate documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Using {% data variables.product.prodname_vscode %} as your editor

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## エディタとして Notepad++ を使う

1. https://notepad-plus-plus.org/ から Notepad++ をインストールします。 詳細は、Notepad++ のドキュメンテーションで「[Getting started](https://npp-user-manual.org/docs/getting-started/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Using {% data variables.product.prodname_vscode %} as your editor

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
