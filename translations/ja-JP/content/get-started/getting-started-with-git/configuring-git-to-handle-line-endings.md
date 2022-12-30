---
title: 行終端を処理するようGitを設定する
intro: diff における問題を回避するため、行終端を正しく処理できるよう Git を設定できます。
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884206'
---
## 行末について
キーボードで <kbd>return</kbd> を押すたびに、行末と呼ばれる目に見えない文字が挿入されています。 行終端の処理は、オペレーティングシステムによって異なります。

Git と {% data variables.product.product_name %} でコラボレートしているときに、あなたが Windows マシンで作業をしていて、コラボレーターが macOS で変更を加えた場合、Git により予想外の結果が生じることがあります。

異なるオペレーティングシステムを使用しているユーザとも効果的にコラボレーションができるように、自動的に行終端を処理するよう Git を設定することができます。

## 行終端のグローバル設定

`git config core.autocrlf` コマンドは、Git での行末の処理方法を変更するために使用されます。 必要な引数は 1 つです。

{% mac %}

macOS では、構成に `input` を渡すだけです。 次に例を示します。

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

Windows では、構成に `true` を渡すだけです。 次に例を示します。

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

Linux では、構成に `input` を渡すだけです。 次に例を示します。

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## リポジトリ単位での設定

オプションで *.gitattributes* ファイルを設定すれば、特定のリポジトリで Git が行末をどう読み込むかを構成することもできます。 このファイルをリポジトリにコミットすると、すべてのリポジトリ共同作成者の `core.autocrlf` 設定がオーバーライドされます。 そのため、Git 設定と環境にかかわらずすべてのユーザで一貫した動作を確保できます。

*.gitattributes* ファイルは、リポジトリのルートに作成し、他のファイルと同様にコミットする必要があります。

*.gitattributes* ファイルは 2 列で構成される表のようなものです:

* 左側は Git が一致させるファイル名です。
* 右側はそのようなファイルに対して Git が使用すべき行終端の設定です。

### 例

*.gitattributes* ファイルの例を次に示します。 リポジトリのテンプレートとして使用できます。

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

`*.c`、`*.sln`、`*.png` とファイルが一致していることがわかります。スペースで区切られた後、設定 (`text`、`text eol=crlf`、`binary`) が指定されています。 以下、利用可能な設定を見てみましょう。

- `text=auto` Git により、最適と判断された方法でファイルが処理されます。 これは便利なデフォルトのオプションです。

- `text eol=crlf` Git により、チェックアウト時に常に行末が `CRLF` に変換されます。 OS X または Linux であったとしても、`CRLF` の行末を維持しなければならないファイルにはこれを使用する必要があります。

- `text eol=lf` Git により、チェックアウト時に常に行末が `LF` に変換されます。 Windows であったとしても、終端が LF でなければならないファイルにはこれを使用する必要があります。

- `binary` 指定されているファイルがテキストではなく、変更を試みるべきではないことが Git で認識されます。 この `binary` 設定は、`-text -diff` の別名でもあります。

## 行終端を変更した後でリポジトリを更新

`core.autocrlf` オプションを設定するか、 *.gitattributes* ファイルをコミットすると、変更していないファイルに対する変更が Git によって報告される場合があります。 これは、新しい設定に合致するように Git が行終端を変更したということです。

リポジトリのすべての行末が新しい構成と一致するようにするには、Git でファイルをバックアップし、リポジトリ (`.git` ディレクトリを除く) のすべてのファイルを削除してから、ファイルをすべて一度に復元します。

1. 作業結果を失うことのないよう、Git で現在のファイルを保存します。
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. 変更したファイルをすべて再度追加し、行終端を正規化します。
  ```shell
  $ git add --renormalize .
  ```
3. 書き直し、正規化したファイルを表示します。
  ```shell
  $ git status
  ```
4. 変更をリポジトリにコミットします。
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## 参考資料

- Pro Git ブックの「[Git のカスタマイズ - Git の属性](https://git-scm.com/book/en/Customizing-Git-Git-Attributes)」
- Git の man ページ内の [git-config](https://git-scm.com/docs/git-config)
- Pro Git ブックの「[概要 - はじめての Git セットアップ](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)」
- 「[Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)」(行の終わりに注意する) [Tim Clem](https://github.com/tclem)
