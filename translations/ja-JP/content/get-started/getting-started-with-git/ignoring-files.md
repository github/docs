---
title: ファイルを無視する
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: '{% data variables.product.product_name %} にチェックインしたくないファイルを無視するように Git を設定することができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131288'
---
## 単一リポジトリについて無視するファイルを設定する

リポジトリのルート ディレクトリで *.gitignore* ファイルを作成すると、コミットの際にどのファイルとディレクトリを無視するか Git に指示できます。
リポジトリのクローンを作成する他のユーザーとこの無視ルールを共有するには、 *.gitignore* ファイルをリポジトリにコミットします。

GitHub では、一般的なオペレーティング システム、環境、言語で推奨される *.gitignore* ファイルの公式なリストが `github/gitignore` パブリック リポジトリに保持されます。 gitignore.io ファイルを使用して、お使いのオペレーティング システム、プログラミング言語、または IDE に応じた *.gitignore* ファイルを作成することもできます。 詳細については、「[github/gitignore](https://github.com/github/gitignore)」および「[gitignore.io](https://www.gitignore.io/)」のサイトを参照してください。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Git リポジトリの場所まで移動します。
3. リポジトリの *.gitignore* ファイルを作成します。
   ```shell
   $ touch .gitignore
  ```

   コマンドが成功した場合、出力はありません。
   
*.gitignore* ファイルの例については、Octocat リポジトリの「[一般的な .gitignore 構成](https://gist.github.com/octocat/9257657)」を参照してください。

すでにチェックインしたファイルを無視したい場合は、追跡を解除してから、それを無視するルールを追加します。 ターミナルから、ファイルの追跡を解除してください。

```shell
$ git rm --cached <em>FILENAME</em>
```

## コンピューター上のすべてのリポジトリについて無視するファイルを設定する

グローバルな *.gitignore* ファイルを作成して、お使いのコンピューター上の各 Git リポジトリでファイルを無視するルールを定義することもできます。 たとえば、 *~/.gitignore_global* にファイルを作成し、そこにルールを追加することができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. すべての Git リポジトリについて除外ファイル *~/.gitignore_global* を使用するよう Git を設定します。
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## *.gitignore* ファイルを作成せずにローカル ファイルを除外する

他のユーザと共有される *.gitignore* ファイルを作成したくない場合は、リポジトリにコミットされないルールを作成することもできます。 ローカルで生成され、他のユーザが生成することは想定されないファイル、たとえば自分のエディターで作成されるファイルなどを無視するときに使える方法です。

使い慣れたテキスト エディターを使って、Git リポジトリのルートにある *.git/info/exclude* というファイルを開きます。 ここで追加するルールはチェックインされないので、ローカル リポジトリにあるファイルだけが無視されます。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Git リポジトリの場所まで移動します。
3. 使い慣れたテキストエディターを使って、 *.git/info/exclude* ファイルを開きます。

## もっと読む

* Pro Git ブックの「[ファイルを無視する](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)」
* Git の man ページの「[git-config](https://git-scm.com/docs/gitignore)」
* github/gitignore リポジトリ内の [便利な *.gitignore* テンプレートのコレクション](https://github.com/github/gitignore)
* [gitignore.io](https://www.gitignore.io/) のサイト
