---
title: 機密データをリポジトリから削除する
intro: Git リポジトリへのパスワードや SSH キーといった機密データをコミットする場合、そのデータを履歴から削除することができます。 To entirely remove unwanted files from a repository's history you can use either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
---

The `git filter-repo` tool and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. コミットの SHA が変更されると、リポジトリでオープンされたプルリクエストに影響する可能性があります。 ファイルをリポジトリから削除する前に、オープンプルリクエストをすべてマージまたはクローズすることを推奨します。

`git rm` によって、最新のコミットからファイルを削除することができます。 For information on removing a file that was added with the latest commit, see "[About large files on {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)."

{% warning %}

This article tells you how to make commits with sensitive data unreachable from any branches or tags in your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. ただし、こうしたコミットも、リポジトリのクローンやフォークからは、{% data variables.product.product_name %} でキャッシュされているビューの SHA-1 ハッシュによって直接、また参照元のプルリクエストによって、到達できる可能性があることに注意することが重要です。 You cannot remove sensitive data from other users' clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on {% data variables.product.product_name %} by contacting {% data variables.contact.contact_support %}.

**Warning: Once you have pushed a commit to {% data variables.product.product_name %}, you should consider any sensitive data in the commit compromised.** If you committed a password, change it! キーをコミットした場合は、新たに生成してください。 Removing the compromised data doesn't resolve its initial exposure, especially in existing clones or forks of your repository. Consider these limitations in your decision to rewrite your repository's history.

{% endwarning %}

## ファイルをリポジトリの履歴からパージする

You can purge a file from your repository's history using either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

### BFG を使用する

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) は、オープンソースコミュニティによって構築およびメンテナンスされているツールです。 これは、不要なデータを削除する手段として、`git filter-branch` より高速でシンプルです。

たとえば、機密データを含むファイルを削除して、最新のコミットをそのままにしておくには、次を実行します:

```shell
$ bfg --delete-files <em>機密データを含むファイル</em>
```

`passwords.txt` にリストされているすべてのテキストについて、リポジトリの履歴にあれば置き換えるには、次を実行します:

```shell
$ bfg --replace-text passwords.txt
```

機密データが削除されたら、変更を {% data variables.product.product_name %} に強制的にプッシュする必要があります。 Force pushing rewrites the repository history, which removes sensitive data from the commit history. If you force push, it may overwrite commits that other people have based their work on.

```shell
$ git push --force
```

完全な使用方法とダウンロード手順については、[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) のドキュメントを参照してください。

### Using git filter-repo

{% warning %}

**Warning:** If you run `git filter-repo` after stashing changes, you won't be able to retrieve your changes with other stash commands. Before running `git filter-repo`, we recommend unstashing any changes you've made. stash した最後の一連の変更を unstash するには、`git stash show -p | git apply -R` を実行します。 For more information, see [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

To illustrate how `git filter-repo` works, we'll show you how to remove your file with sensitive data from the history of your repository and add it to `.gitignore` to ensure that it is not accidentally re-committed.

1. Install the latest release of the [git filter-repo](https://github.com/newren/git-filter-repo) tool. You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.
  ```
  brew install git-filter-repo
  ```
  For more information, see [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

2. 機密データを含むリポジトリのローカルコピーが履歴にまだない場合は、ローカルコンピュータに[リポジトリのクローンを作成](/articles/cloning-a-repository/)します。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>ユーザ名</em>/<em>リポジトリ</em>
  > Initialized empty Git repository in /Users/<em>ファイルパス</em>/<em>リポジトリ</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. リポジトリのワーキングディレクトリに移動します。
  ```shell
  $ cd <em>リポジトリ</em>
  ```
4. 次のコマンドを実行します。`機密データを含むファイルへのパス`は、**ファイル名だけではなく、削除するファイルへのパス**で置き換えます。 その引数により、次のことが行われます:
    - 各ブランチとタグの履歴全体を強制的に Git で処理するが、チェックアウトはしない
    - 指定のファイルを削除することにより、生成された空のコミットも削除される
    - Remove some configurations, such as the remote URL, stored in the *.git/config* file. You may want to back up this file in advance for restoration later.
    - **既存のタグを上書きする**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **メモ:** 機密データを含む当該ファイルが (移動されたか名前が変更されたため) 他のパスに存在していた場合、このコマンドはそのパスでも実行する必要があります。

  {% endnote %}

5. 機密データを含むファイルを、誤って再度コミットしないようにするため、`.gitignore` に追加します。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. リポジトリの履歴から削除対象をすべて削除したこと、すべてのブランチがチェックアウトされたことをダブルチェックします。
7. Once you're happy with the state of your repository, force-push your local changes to overwrite your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, as well as all the branches you've pushed up. A force push is required to remove sensitive data from your commit history.
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
8. 機密データを[タグ付きリリース](/articles/about-releases)から削除するため、Git タグに対しても次のようにフォースプッシュする必要があります。
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

## Fully removing the data from {% data variables.product.prodname_dotcom %}

After using either the BFG tool or `git filter-repo` to remove the sensitive data and pushing your changes to {% data variables.product.product_name %}, you must take a few more steps to fully remove the data from {% data variables.product.product_name %}.

1. {% data variables.contact.contact_support %} に連絡し、{% data variables.product.product_name %} 上で、キャッシュされているビューと、プルリクエストでの機密データへの参照を削除するよう依頼します。 Please provide the name of the repository and/or a link to the commit you need removed.

2. コラボレータには、 作成したブランチを古い (汚染された) リポジトリ履歴から[リベース](https://git-scm.com/book/en/Git-Branching-Rebasing)する (マージ*しない*) よう伝えます。 マージコミットを 1 回でも行うと、パージで問題が発生したばかりの汚染された履歴の一部または全部が再導入されてしまいます。

3. After some time has passed and you're confident that the BFG tool / `git filter-repo` had no unintended side effects, you can force all objects in your local repository to be dereferenced and garbage collected with the following commands (using Git 1.8.5 or newer):
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

## 将来にわたって誤ったコミットを回避する

コミット対象でないものがコミットされるのを回避するためのシンプルな方法がいくつかあります。

- [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) や [gitk](https://git-scm.com/docs/gitk) のようなビジュアルプログラムを使用して、変更をコミットします。 ビジュアルプログラムは通常、各コミットでどのファイルが追加、削除、変更されるかを正確に把握しやすくするものです。
- コマンドラインでは catch-all コマンド、`git add .` および `git commit -a` は使用しないようにします。ファイルを個別にステージングするには、代わりに `git add filename` および `git rm filename` を使用します。
- 各ファイル内の変更を個別にレビューしステージングするには、`git add --interactive` を使用します。
- コミットのためにステージングされている変更をレビューするには、`git diff --cached` を使用します。 これはまさに、`git commit` で `-a` フラグを使用しない限りにおいて生成される diff です。

## 参考リンク

- [`git filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git：Git ツール - 履歴の書き換え](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[About Secret scanning](/code-security/secret-security/about-secret-scanning)"
