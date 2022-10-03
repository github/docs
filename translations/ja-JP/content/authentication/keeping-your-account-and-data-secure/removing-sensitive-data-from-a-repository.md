---
title: リポジトリからの機微なデータの削除
intro: Git リポジトリへのパスワードや SSH キーといった機密データをコミットする場合、そのデータを履歴から削除することができます。 不要なファイルをリポジトリの履歴から完全に削除するには、`git filter-repo` ツールか BFG Repo-Cleaner オープンソース ツールのいずれかを使用します。
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
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088433'
---
`git filter-repo` ツールと BFG Repo-Cleaner によって、リポジトリの履歴が書き換えられます。これにより、変更した既存のコミットと依存するコミットの SHA が変更されます。 コミットの SHA を変更すると、リポジトリ内の開いている pull request に影響する場合があります。 リポジトリからファイルを削除する前に、開いているすべての pull request を結合または閉じることをお勧めします。

`git rm` を使用して、最新のコミットからファイルを削除することができます。 最新のコミットで追加されたファイルを削除する方法については、「[{% data variables.product.prodname_dotcom %} の大きなファイルについて](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)」を参照してください。

{% warning %}

**警告**: この記事では、機密データを含むコミットに、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のリポジトリ内のブランチまたはタグから到達できないようにする方法について説明しています。 ただし、こうしたコミットも、リポジトリのクローンやフォークからは、{% data variables.product.product_name %} でキャッシュされているビューの SHA-1 ハッシュによって直接、また参照元の pull request によって、到達できる可能性があります。 {% data variables.product.product_name %} では、リポジトリにある他のユーザーのクローンやフォークから機密データを削除することはできませんが、キャッシュされているビューや、pull request での機密データへの参照は、{% data variables.contact.contact_support %} へ連絡することにより恒久的に削除することができます。 

**コミットを {% data variables.product.product_name %} にプッシュしたら、コミット内の機密データは侵害されたと見なすべきです。** パスワードをコミットした場合は変更してください。 キーをコミットした場合は、新たに生成してください。 侵害されたデータを削除しても、特にリポジトリの既存のクローンやフォークでの初期漏えいは解決されません。 リポジトリの履歴を書き換える場合は、これらの制限事項を考慮して決めてください。

{% endwarning %}

## ファイルをリポジトリの履歴からパージする

`git filter-repo` ツールまたは BFG Repo-Cleaner オープンソース ツールを使用し、リポジトリの履歴からファイルを消去します。

### BFG を使用する

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) は、オープンソース コミュニティによって構築および管理されているツールです。 不要なデータを削除するための、`git filter-branch` より高速で簡単な代替手段が提供されます。 

たとえば、機密データを含むファイルを削除して、最新のコミットをそのままにしておくには、次を実行します:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

リポジトリの履歴内の場所に関係なく、`passwords.txt` に一覧表示されているすべてのテキストを置き換えるには、以下を実行します。

```shell
$ bfg --replace-text passwords.txt
```

機密データが削除されたら、変更を {% data variables.product.product_name %} に強制的にプッシュする必要があります。 強制的にプッシュすると、リポジトリの履歴が書き換えられます。これにより、コミットの履歴から機密データが削除されます。 プッシュを強制すると、他のユーザーが作業のベースにしているコミットが上書きされる可能性があります。

```shell
$ git push --force
```

完全な使用方法とダウンロード手順については、[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) のドキュメントを参照してください。

### git filter-repo を使用する

{% warning %}

**警告:** 変更の一時退避後に `git filter-repo` を実行すると、その他の stash コマンドを使用して変更を取得できなくなります。 `git filter-repo` を実行する前に、行ったすべての変更の一時退避を解除することをお勧めします。 最後に一時退避した一連の変更の一時退避を解除するには、`git stash show -p | git apply -R` を実行します。 詳細については、「[Git ツール - 一時退避とクリーニング](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)」を参照してください。

{% endwarning %}

`git filter-repo` の動作を説明するために、リポジトリの履歴から機密データを含むファイルを削除し、それを `.gitignore` に追加して確実に、誤って再コミットされないようにする方法を示します。

1. [git filter-repo](https://github.com/newren/git-filter-repo) ツールの最新リリースをインストールします。 `git-filter-repo` は手動で、またはパッケージ マネージャーを使用してインストールすることができます。 たとえば、HomeBrew でツールをインストールするには、`brew install` コマンドを使用します。
  ```
  brew install git-filter-repo
  ```
  詳細については、`newren/git-filter-repo` リポジトリ内の [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) ファイルを参照してください。

2. 履歴に機密データを含むリポジトリのローカル コピーがまだない場合は、ローカル コンピューターに[リポジトリをクローン](/articles/cloning-a-repository/)します。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. リポジトリの作業ディレクトリに移動します。
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. 次のコマンドを実行します。`PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` は、**ファイル名だけでなく、削除するファイルへのパス** に置き換えてください。 これらの引数では、次のことが行われます。
    - すべてのブランチとタグの履歴全体を Git に強制的に処理させるが、チェックアウトはしない
    - 指定されたファイルと、結果として生成された空のコミットをすべて削除する
    - リモート URL など、 *.git/config* ファイルに格納されている一部の構成を削除する。 後で復元するために、このファイルを事前にバックアップすることができます。
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

  **注:** (移動または名前が変更されたため) 他のパスに機密データが使用されたファイルが存在する場合は、これらのパスでもこのコマンドを実行する必要があります。

  {% endnote %}

5. 機密データを含むファイルを `.gitignore` に追加して確実に、誤って再度コミットしないようにします。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. リポジトリの履歴から必要なすべてを削除し、すべてのブランチがチェックアウトされていることを再確認します。
7. リポジトリの状態に問題がなければ、ローカルの変更を強制的にプッシュして、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} リポジトリと、プッシュしたブランチをすべて上書きします。 コミットの履歴から機密データを削除するには、強制プッシュが必要です。
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
8. [タグ付けされたリリース](/articles/about-releases)から機密ファイルを削除するには、Git タグに対して強制的にプッシュする必要もあります。
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

## {% data variables.product.prodname_dotcom %} からデータを完全に削除する

BFG ツールまたは `git filter-repo` を使用して機密データを削除し、変更を {% data variables.product.product_name %} にプッシュした後、{% data variables.product.product_name %} からデータを完全に削除するには、さらにいくつかの手順を実行する必要があります。

1. {% data variables.contact.contact_support %} に連絡し、{% data variables.product.product_name %} 上で、キャッシュされているビューと、プルリクエストでの機密データへの参照を削除するよう依頼します。 リポジトリの名前と削除する必要があるコミットへのリンクの両方またはいずれかを指定してください。{% ifversion ghes %}サイト管理者が到達できない Git オブジェクトを削除する方法の詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)」を参照してください。{% endif %}

2. 以前の (汚染された) リポジトリの履歴から、作成したブランチをマージ *ではなく*、[リベース](https://git-scm.com/book/en/Git-Branching-Rebasing)するようにコラボレーターに指示します。 マージコミットを 1 回でも行うと、パージで問題が発生したばかりの汚染された履歴の一部または全部が再導入されてしまいます。

3. 一定の時間が経過し、BFG ツール/`git filter-repo` に意図しない副作用がないことを確信したら、次のコマンドを使用して、ローカル リポジトリ内のすべてのオブジェクトが強制的に逆参照され、ガベージ コレクトされるようにします (Git 1.8.5 以降を使用)。
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

   **注:** フィルター処理した履歴を、新規または空のリポジトリにプッシュして、{% data variables.product.product_name %} から新しいクローンを作成しても、同じことができます。

  {% endnote %}

## 将来にわたって誤ったコミットを回避する

コミット対象でないものがコミットされるのを回避するためのシンプルな方法がいくつかあります。

- [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) や [gitk](https://git-scm.com/docs/gitk) などのビジュアル プログラムを使用して変更をコミットします。 ビジュアルプログラムは通常、各コミットでどのファイルが追加、削除、変更されるかを正確に把握しやすくするものです。
- コマンド ラインでの catch-all コマンド `git add .` と `git commit -a` を回避するには、代わりに `git add filename` と `git rm filename` を使用してファイルを個別にステージします。
- `git add --interactive` を使用して、各ファイル内の変更を個別に確認およびステージします。
- `git diff --cached` を使用して、コミットのステージした変更を確認します。 これは、`git commit` フラグを使用しない限り `-a` で生成される正確な差分です。

## 参考資料

- [`git filter-repo` man ページ](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git ツール - 履歴の書き換え](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- 「[シークレット スキャンについて](/code-security/secret-security/about-secret-scanning)」
