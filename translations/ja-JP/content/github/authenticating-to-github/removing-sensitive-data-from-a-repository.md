---
title: 機密データをリポジトリから削除する
intro: 'Git リポジトリへのパスワードや SSH キーといった機密データをコミットする場合、そのデータを履歴から削除することができます。 不要なファイルをリポジトリの履歴から完全に削除するには、「git filter-branch」コマンドか BFG Repo-Cleaner オープンソースツールのいずれかを使用します。'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - アイデンティティ
  - アクセス管理
---

`git filter-branch` コマンドと BFG Repo-Cleaner は、リポジトリの履歴を書き換えます。変更を加えた既存のコミットや依存関係にあるコミットの SHA を変更します。 コミットの SHA が変更されると、リポジトリでオープンされたプルリクエストに影響する可能性があります。 ファイルをリポジトリから削除する前に、オープンプルリクエストをすべてマージまたはクローズすることを推奨します。

`git rm` によって、最新のコミットからファイルを削除することができます。 最新のコミットに追加されたファイルの削除の詳しい情報については、「[リポジトリの履歴からファイルを削除する](/articles/removing-files-from-a-repository-s-history)」を参照してください。

{% warning %}

**警告: コミットを {% data variables.product.product_name %} にプッシュしたら、そこに含まれるデータが危険にさらされることを考慮する必要があります。**パスワードをコミットした場合は、変更してください。 キーをコミットした場合は、新たに生成してください。

この記事では、機密データを含むコミットに {% data variables.product.product_name %} リポジトリのブランチやタグから到達できないようにする方法を説明しています。 ただし、こうしたコミットも、リポジトリのクローンやフォークからは、{% data variables.product.product_name %} でキャッシュされているビューの SHA-1 ハッシュによって直接、また参照元のプルリクエストによって、到達できる可能性があることに注意することが重要です。 {% data variables.product.product_name %} では、リポジトリに既存のクローンやフォークについては何もできませんが、キャッシュされているビューや、プルリクエストでの機密データへの参照は、{% data variables.contact.contact_support %} へ連絡することにより恒久的に削除することができます。

{% endwarning %}

### ファイルをリポジトリの履歴からパージする

#### BFG を使用する

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) は、オープンソースコミュニティによって構築およびメンテナンスされているツールです。 これは、不要なデータを削除する手段として、`git filter-branch` より高速でシンプルです。 たとえば、機密データを含むファイルを削除して、最新のコミットをそのままにしておくには、次を実行します:

```shell
$ bfg --delete-files <em>機密データを含むファイル</em>
```

`passwords.txt` にリストされているすべてのテキストについて、リポジトリの履歴にあれば置き換えるには、次を実行します:

```shell
$ bfg --replace-text passwords.txt
```

機密データが削除されたら、変更を {% data variables.product.product_name %} に強制的にプッシュする必要があります。

```shell
$ git push --force
```

完全な使用方法とダウンロード手順については、[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) のドキュメントを参照してください。

#### filter-branch を使用する

{% warning %}

**警告:** 変更を stash した後に `git filter-branch` を実行した場合、他の stash コマンドで変更を取得することはできなくなります。 `git filter-branch` を実行する前に、加えた変更を unstash するようおすすめします。 stash した最後の一連の変更を unstash するには、`git stash show -p | git apply -R` を実行します。 詳しい情報については、[Git Tools Stashing](https://git-scm.com/book/en/v1/Git-Tools-Stashing) を参照してください。

{% endwarning %}

`git filter-branch` がどのように機能するかを図解するため、機密データを含むファイルをリポジトリの履歴から削除し、`.gitignore` に追加することで、誤って再コミットされないようにするための方法を示します。

1. 機密データを含むリポジトリのローカルコピーが履歴にまだない場合は、ローカルコンピュータに[リポジトリのクローンを作成](/articles/cloning-a-repository/)します。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>ユーザ名</em>/<em>リポジトリ</em>
  > Initialized empty Git repository in /Users/<em>ファイルパス</em>/<em>リポジトリ</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
2. リポジトリのワーキングディレクトリに移動します。
  ```shell
  $ cd <em>リポジトリ</em>
  ```
3. 次のコマンドを実行します。`機密データを含むファイルへのパス`は、**ファイル名だけではなく、削除するファイルへのパス**で置き換えます。 その引数により、次のことが行われます:
    - 各ブランチとタグの履歴全体を強制的に Git で処理するが、チェックアウトはしない
    - 指定のファイルを削除することにより、生成された空のコミットも削除される
    - **既存のタグを上書きする**
        ```shell
        $ git filter-branch --force --index-filter \
        "git rm --cached --ignore-unmatch <em>PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA</em>" \
        --prune-empty --tag-name-filter cat -- --all
        > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (266/266)
        > Ref 'refs/heads/main' was rewritten
        ```

  {% note %}

  **メモ:** 機密データを含む当該ファイルが (移動されたか名前が変更されたため) 他のパスに存在していた場合、このコマンドはそのパスでも実行する必要があります。

  {% endnote %}

4. 機密データを含むファイルを、誤って再度コミットしないようにするため、`.gitignore` に追加します。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
5. リポジトリの履歴から削除対象をすべて削除したこと、すべてのブランチがチェックアウトされたことをダブルチェックします。
6. リポジトリの状態が整ったら、ローカルでの変更をフォースプッシュして、{% data variables.product.product_name %} リポジトリと、プッシュしたすべてのブランチに上書きします。
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
7. 機密データを[タグ付きリリース](/articles/about-releases)から削除するため、Git タグに対しても次のようにフォースプッシュする必要があります。
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. {% data variables.contact.contact_support %} に連絡し、{% data variables.product.product_name %} 上で、キャッシュされているビューと、プルリクエストでの機密データへの参照を削除するよう依頼します。
9. コラボレータには、 作成したブランチを古い (汚染された) リポジトリ履歴から[リベース](https://git-scm.com/book/en/Git-Branching-Rebasing)する (マージ*しない*) よう伝えます。 マージコミットを 1 回でも行うと、パージで問題が発生したばかりの汚染された履歴の一部または全部が再導入されてしまいます。
10. 一定の時間が経過し、`git filter-branch` に意図しない副作用がないことが確信できるようになったら、次のコマンドによって、ローカルリポジトリのすべてのオブジェクトが強制的に参照から外されガベージコレクトされるようにします (Git 1.8.5 以降を使用)。
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **注釈:** フィルタした履歴を、新規または空のリポジトリにプッシュして、{% data variables.product.product_name %} から新しいクローンを作成することによっても、同じことができます。

  {% endnote %}

### 将来にわたって誤ったコミットを回避する

コミット対象でないものがコミットされるのを回避するためのシンプルな方法がいくつかあります。

- [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) や [gitk](https://git-scm.com/docs/gitk) のようなビジュアルプログラムを使用して、変更をコミットします。 ビジュアルプログラムは通常、各コミットでどのファイルが追加、削除、変更されるかを正確に把握しやすくするものです。
- コマンドラインでは catch-all コマンド、`git add .` および `git commit -a` は使用しないようにします。ファイルを個別にステージングするには、代わりに `git add filename` および `git rm filename` を使用します。
- 各ファイル内の変更を個別にレビューしステージングするには、`git add --interactive` を使用します。
- コミットのためにステージングされている変更をレビューするには、`git diff --cached` を使用します。 これはまさに、`git commit` で `-a` フラグを使用しない限りにおいて生成される diff です。

### 参考リンク

- [`git filter-branch` メインページ](https://git-scm.com/docs/git-filter-branch)
- [Pro Git：Git ツール - 履歴の書き換え](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
