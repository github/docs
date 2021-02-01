---
title: リモートリポジトリから変更を取得する
intro: 一般的な Git コマンドを使用して、リモートリポジトリにアクセスできます。
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

これらのコマンドは[リモートリポジトリ](/articles/about-remote-repositories)の操作時に非常に便利です。 `clone` および `fetch` は、リポジトリのリモート URL からお使いのローカルのコンピュータにリモートコードをダウンロードします。`merge` は、他のユーザの作業を自分のものとマージするために使用します。`pull` は、`fetch` と `merge` の組み合わせです。

### リポジトリをクローンする

他のユーザのリポジトリの完全なコピーを取得するには、以下のように `git clone` を使用します:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>ユーザ名</em>/<em>REPOSITORY</em>.git
# リポジトリを自分のコンピュータにクローン
```

リポジトリのクローン時は、[複数の異なる URL](/articles/which-remote-url-should-i-use) から選択できます。 {% data variables.product.prodname_dotcom %}にログインした状態である間は、これらの URL はリポジトリの詳細の下に表示されます:

![リモート URL リスト](/assets/images/help/repository/remotes-url.png)

`git clone` を実行すると、以下のアクションが発生します:
- `repo` と呼ばれる新たなフォルダが作成される
- Git リポジトリとして初期化される
- クローン元の URL を指す `origin` という名前のリモートが作成される
- リポジトリのファイルとコミットすべてがそこにダウンロードされる
- デフォルトブランチがチェックアウトされる

リモートリポジトリ内の各ブランチの `foo` と、対応するリモート追跡ブランチである `refs/remotes/origin/foo` がローカルのリポジトリに作成されます。 このようなリモート追跡ブランチの名前は、通常 `origin/foo` と省略できます。

### リモートリポジトリから変更をフェッチする

`git fetch` を使用して、他のユーザによる新たな作業成果を取得できます。 リポジトリからフェッチすると、すべての新しいリモート追跡ブランチとタグが取得され、かつ、それらの変更は自分のブランチへマージ*されません*。

特定のプロジェクト用に[リモート URL 付き](/articles/adding-a-remote)のローカルリポジトリをすでに設定している場合は、ターミナルで `git fetch *remotename*` を使用して新しい情報すべてを取得できます。

```shell
$ git fetch <em>remotename</em>
# リモートリポジトリへの更新をフェッチする
```

または、いつでも[新しいリモートを追加](/articles/adding-a-remote)してその後フェッチすることもできます。

### ローカルブランチに変更をマージする

マージとは、あなたのローカルでの変更を他のユーザによる変更と結合させる処理です。

通常、リモート追跡ブランチ (リモートリポジトリからフェッチされたブランチ) をローカルのブランチとマージします。

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# オンラインで行われた更新をローカル作業にマージする
```

### リモートリポジトリから変更をプルする

`git pull` は、`git fetch` と `git merge` を 1 つのコマンドで実行できる便利なショートカットです:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# オンライン更新をローカル作業にマージ
```

`pull` は、取得された変更のマージを実行するため、`pull` コマンドの実行前にローカルの作業がコミットされていることを確認する必要があります。 解決できない[マージコンフリクト](/articles/resolving-a-merge-conflict-using-the-command-line)が発生した場合、あるいはマージを中止したい場合は、`git merge --abort` を使用して、プルを行う前の状態にブランチを戻すことができます。

### 参考リンク

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% if currentVersion == "free-pro-team@latest" %}
- 「[接続の問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)」{% endif %}
