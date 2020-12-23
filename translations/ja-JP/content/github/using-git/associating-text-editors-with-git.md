---
title: Git とのテキストエディタの関連付け
intro: テキストエディタを使って Git でファイルを開いたり編集したりしてください。
redirect_from:
  - /textmate/
  - /articles/using-textmate-as-your-default-editor/
  - /articles/using-sublime-text-2-as-your-default-editor/
  - /articles/associating-text-editors-with-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

### エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### エディタとして Visual Studio Code を使う

1. [Visual Studio Code](https://code.visualstudio.com/) (VS Code) をインストールします。 詳細は、VS Code のドキュメンテーションで「[Visual Studio Code の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

### エディタとして TextMate を使う

1. [TextMate](https://macromates.com/) をインストールします。
2. TextMate の `mate` のシェルユーティリティをインストールします。 詳細は、TextMate のドキュメンテーションで「[mate と rmate](https://macromates.com/blog/2011/mate-and-rmate/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

### エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### エディタとして Visual Studio Code を使う

1. [Visual Studio Code](https://code.visualstudio.com/) (VS Code) をインストールします。 詳細は、VS Code のドキュメンテーションで「[Visual Studio Code の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

### エディタとして Notepad++ を使う

1. https://notepad-plus-plus.org/ から Notepad++ をインストールします。 詳細は、Notepad++ のドキュメンテーションで「[Getting started](https://npp-user-manual.org/docs/getting-started/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

### エディタとして Atom を使う

1. [Atom](https://atom.io/)をインストールします。 詳しい情報については、Atomのドキュメンテーションの「[Atomのインストール](https://flight-manual.atom.io/getting-started/sections/installing-atom/)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### エディタとして Visual Studio Code を使う

1. [Visual Studio Code](https://code.visualstudio.com/) (VS Code) をインストールします。 詳細は、VS Code のドキュメンテーションで「[Visual Studio Code の設定](https://code.visualstudio.com/Docs/setup/setup-overview)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### エディタとして Sublime Text を使う

1. [Sublime Text](https://www.sublimetext.com/) をインストールします。 詳細は、Sublime Text のドキュメンテーションの「[インストール](https://docs.sublimetext.io/guide/getting-started/installation.html)」を参照してください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 以下のコマンドを入力してください:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
