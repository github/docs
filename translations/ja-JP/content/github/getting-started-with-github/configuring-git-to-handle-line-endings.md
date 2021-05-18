---
title: 行終端を処理するようGitを設定する
intro: diff における問題を回避するため、行終端を正しく処理できるよう Git を設定できます。
redirect_from:
  - /dealing-with-lineendings/
  - /line-endings/
  - /articles/dealing-with-line-endings/
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

キーボードで <kbd>return</kbd> を押すたびに、行終端と呼ばれる目に見えない文字が挿入されています。 行終端の処理は、オペレーティングシステムによって異なります。

When you're collaborating on projects with Git and {% data variables.product.product_name %}, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in macOS.

異なるオペレーティングシステムを使用しているユーザとも効果的にコラボレーションができるように、自動的に行終端を処理するよう Git を設定することができます。

### 行終端のグローバル設定

Git による行終端の扱い方を変更するには `git config core.autocrlf` コマンドを使用します。 必要な引数は 1 つです。

{% mac %}

On macOS, you simply pass `input` to the configuration. 例:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

Windows では、設定に `true` を渡すだけです。 例:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

Linux では、設定に `input` を渡すだけです。 例:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

### リポジトリ単位での設定

オプションで *.gitattributes* ファイルを設定すれば、特定のリポジトリで Git が行終端をどう読み込むかを管理することもできます。 このファイルをリポジトリにコミットすると、すべてのリポジトリコントリビューターの `core.autocrlf` 設定がオーバーライドされます。 そのため、Git 設定と環境にかかわらずすべてのユーザで一貫した動作を確保できます。

*.gitattributes* ファイルは、リポジトリのルートに作成し、他のファイルと同様にコミットする必要があります。

*.gitattributes* ファイルは 2 列で構成される表のようなものです:

* 左側は Git が一致させるファイル名です。
* 右側はそのようなファイルに対して Git が使用すべき行終端の設定です。

#### サンプル

以下は *.gitattributes* ファイルの例です。 リポジトリのテンプレートとして使用できます。

```
# core.autocrlf を設定していない人のために、デフォルトの動作を設定する。
* text=auto

# 常に正規化し、チェックアウトの際ネイティブの行終端に変換したい
# テキストファイルを明示的に宣言する。
*.c text
*.h text

# チェックアウトの際常に CRLF を行終端とするファイルを宣言する。
*.sln text eol=crlf

# 完全にバイナリで変更すべきでないファイルをすべて示す。
*.png binary
*.jpg binary
```

上のように、まずファイルの種類を示し (`*.c`、`*.sln`、`*.png` など)、そのあとに区切り文字として空白文字を続け、そのあとに、そのファイルの種類に適用すべき設定 (`text`、`text eol=crlf`、`binary` など) を指定します。 以下、利用可能な設定を見てみましょう。

- `text=auto` Git が最善と判断する方法でファイルを処理します。 これは便利なデフォルトのオプションです。

- `text eol=crlf` Git はチェックアウトの際常に行終端を `CRLF` に変換します。 OSX や Linux であったとしても、終端が `CRLF` でなければならないファイルにはこれを使用する必要があります。

- `text eol=lf` Git はチェックアウトの際常に行終端を `LF` に変換します。 Windows であったとしても、終端が LF でなければならないファイルにはこれを使用する必要があります。

- `binary` Git は指定されているファイルがテキストではなく、変更を試みるべきではないと判断します。 `binary` 設定は `-text -diff` のエイリアスでもあります。

### 行終端を変更した後でリポジトリを更新

`core.autocrlf` オプションを設定するか、または *.gitattributes* ファイルをコミットするとき、自分で更新したことがないファイルが変更されていることを Git が報告する場合があります。 これは、新しい設定に合致するように Git が行終端を変更したということです。

リポジトリのすべての行終端が新しい設定と一致するようにするには、Git でファイルをバックアップし、リポジトリ ( `git` は除いて) のすべてのファイルを削除してから、ファイルを一度にすべて復元します。

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

### 参考リンク

- Pro Git ブックの「[Git のカスタマイズ - Git の属性](https://git-scm.com/book/en/Customizing-Git-Git-Attributes)」
- Git の man ページの [git-config](https://git-scm.com/docs/git-config)
- Pro Git ブックの「[使い始める - 最初の Git の構成](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)」
- [Tim Clem](https://github.com/tclem) による「[Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)」
