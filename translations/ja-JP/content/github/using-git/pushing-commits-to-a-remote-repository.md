---
title: コミットをリモートリポジトリにプッシュする
intro: ローカルブランチで実行されたコミットをリモートリポジトリにプッシュするには、`git push` を使用します。
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`git push` コマンドは、2 つの引数を取ります:

* リモート名。たとえば `origin`
* ブランチ名。 たとえば `master`

例:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

たとえば、通常は `git push origin master` を実行してローカルの変更をオンラインリポジトリプッシュします。

### ブランチの名前を変更する

ブランチの名前を変更する場合も、同じ `git push` コマンドを使用しますが、引数が 1 つ増えます。新しいブランチの名前です。 例:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

こうすると、`LOCALBRANCHNAME` が `REMOTENAME` にプッシュされますが、名前が `REMOTEBRANCHNAME` に変更されます。

### "non-fast-forward" エラーに対処する

リポジトリのローカルコピーが同期されていない、つまりプッシュ先である上流リポジトリより古くなっている場合は、`non-fast-forward updates were rejected` というメッセージが表示されます。 これは、ローカルの変更をプッシュする前に上流の変更を取得、つまり「フェッチ」する必要があるという意味です。

このエラーに関する詳細は、「[non-fast-forward エラーに対処する](/articles/dealing-with-non-fast-forward-errors)」を参照してください。

### タグをプッシュする

デフォルトで、追加のパラメータを使用しない場合、`git push` はリモートブランチと名前が一致するすべてのブランチを送信します。

1 つのタグをプッシュする場合は、ブランチをプッシュするときと同じコマンドを発行できます。

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

すべてのタグをプッシュする場合は、次のコマンドを使用できます:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### リモートブランチまたはタグを削除する

ブランチを削除する構文は、1 回見ただけでは少し難解です:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

コロンの前にスペースがあることに注意してください。 このコマンドは、ブランチの名前を変更するときと似ています。 ただしこちらでは、`REMOTENAME` の `BRANCHNAME` に_何もプッシュしない_よう Git に指示しています。 そのため、`git push` によってリモートリポジトリのブランチが削除されます。

### リモートとフォーク

GitHub では、[リポジトリを「フォーク」できる](https://guides.github.com/overviews/forking/)ことをご存じでしょう。

自分が所有しているリポジトリをクローンするとき、リモート URL を指定すると、更新をフェッチおよびプッシュする対象を Git に指示することができます。 元のリポジトリとのコラボレーションが必要な場合は、ローカルの Git クローンに新しいリモート URL を追加するといいでしょう。その名前は通例、`upstream` です。

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

これで、更新とブランチを*その*フォークからフェッチできるようになります。

```shell
git fetch upstream
# 上流のリモートブランチを取得
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      master     -> upstream/master
```

ローカルの変更が終わったら、ローカルブランチを GitHub にプッシュし、[プルリクエストを開始する](/articles/about-pull-requests)ことができます。

フォークの扱いに関する詳細は、「[フォークを同期する](/articles/syncing-a-fork)」を参照してください。

### 参考リンク

- [「Pro Git」ブックの「リモート」の章](https://git-scm.com/book/ch5-2.html)
- [`git remote` の man ページ](https://git-scm.com/docs/git-remote.html)
- [Git チートシート](/articles/git-cheatsheet)
- [Git のワークフロー](/articles/git-workflows)
