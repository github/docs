---
title: Gitのサブツリーのマージについて
redirect_from:
  - /articles/working-with-subtree-merge
  - /subtree-merge
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
  - /github/getting-started-with-github/using-git/about-git-subtree-merges
intro: 複数のプロジェクトを単一のリポジトリで管理する必要がある場合、 *"サブツリー マージ"* を使ってすべての参照を扱うことができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: cd553d4193f3e4ad5de54abc218df623b1d53276
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880029'
---
## サブツリーのマージについて

通常、サブツリーのマージはリポジトリ内にリポジトリを格納するために使われます。 「サブリポジトリ」はメインのリポジトリのフォルダー内に格納されます。

サブツリーマージは、例で説明するのが最も分かりやすいでしょう。 以下のように進めます:

- プロジェクトを表す `test` という空のリポジトリを作成します
- 別のリポジトリを `Spoon-Knife` というサブツリーとして、そこにマージします。
- `test` プロジェクトでは、そのサブプロジェクトを同じリポジトリの一部であるかのように使います。
- `Spoon-Knife` から `test` プロジェクトに更新プログラムを取り込みます。

## サブツリーマージのための空のリポジトリのセットアップ

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 新しいディレクトリを作成し、そこに移動します。
  ```shell
  $ mkdir test
  $ cd test
  ```
3. 新しい Git リポジトリを初期化します。
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. 新しいファイルを作成してコミットします。
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

## 新しいリポジトリをサブツリーとして追加

1. 関心のある別個のプロジェクトを指す新しいリモート URL を追加します。
  ```shell
  $ git remote add -f spoon-knife https://github.com/octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From https://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. `Spoon-Knife` プロジェクトをローカルの Git プロジェクトにマージします。 こうしてもローカルではファイルはまったく変更されませんが、Git は次のステップに備えることになります。

  Git 2.9 以降を使用している場合:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Git 2.8 以前を使用している場合:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. **spoon-knife** というディレクトリを新たに作成し、`Spoon-Knife` プロジェクトの Git 履歴をそこへコピーします。
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. 変更をコミットして安全にします。
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

ここでは 1 つのサブプロジェクトを追加しただけですが、Git リポジトリには任意の数のサブプロジェクトを取り込むことができます。

{% tip %}

**参考**: 将来このリポジトリのクローンを新しく作成した場合、追加したリモートは作成されません。 [`git remote add` コマンド](/github/getting-started-with-github/managing-remote-repositories)を使用して、もう一度追加する必要があります。

{% endtip %}

## 更新および変更の同期

サブプロジェクトが追加された場合、そのサブプロジェクトは上流の変更と自動的には同期されません。 以下のコマンドで、サブプロジェクトを更新する必要があります。

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

上の例では、以下のようになるでしょう:

```shell
$ git pull -s subtree spoon-knife main
```

## 参考資料

- [_Pro Git_ ブックの「高度なマージ」チャプター](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- [サブツリー マージ戦略の使用方法](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)
