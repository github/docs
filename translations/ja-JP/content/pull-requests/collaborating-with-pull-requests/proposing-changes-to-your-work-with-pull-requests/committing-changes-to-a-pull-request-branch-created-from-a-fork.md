---
title: フォークから作成されたプルリクエストのブランチへの変更をコミットする
intro: プルリクエストの作者から権限を付与されていれば、リポジトリのフォークから作成されたプルリクエストのブランチにおける変更をコミットできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 123775ecbcc199382fe2082f22ad04db21fb9661
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137747'
---
プルリクエストのブランチが以下の条件を満たす場合にのみ、コミットを実行できます:
- あなたがプッシュアクセス権限を持つリポジトリでオープンされ、かつそのリポジトリのフォークから作成されている
- ユーザ所有のフォーク上にある
- プルリクエストの作者から権限を付与されている
- コミットを妨げる[ブランチ制限](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches)がない

プルリクエストを作成したユーザのみが、ユーザー所有のフォークにコミットをプッシュする権限を与えることができます。 詳細については、「[フォークから作成されたプルリクエスト ブランチへの変更を許可する](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

{% note %}

**メモ:** リポジトリのフォークの、コピー (またはフォーク) を作成して、プルリクエストの変更元と同じ head ブランチに変更をコミットすることにより、{% data variables.product.product_location %} を通じて、リポジトリのフォークからプルリクエストのブランチへコミットすることも可能です。 一般的なガイドラインについては、「[フォークからのプルリクエストの作成](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。

{% endnote %}

1. {% data variables.product.product_name %}で、プルリクエストのブランチを作成したフォーク (またはリポジトリのコピー) のメインページに移動します。
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **ヒント:** {% data variables.product.prodname_desktop %} を使用してフォークを複製する場合は、「[Cloning a repository to {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)」 ({% data variables.product.prodname_desktop %} へのリポジトリの複製) を参照してください。

 {% endtip %}
4. カレントワーキングディレクトリを、クローンしたディレクトリをダウンロードしたい場所に変更します。
  ```shell
  $ cd open-source-projects
  ```
5. 「`git clone`」と入力し、手順 3 でコピーした URL を貼り付けます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. **Enter** キーを押します。 これで、ローカルにクローンが作成されます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **ヒント:** エラー メッセージ "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" は、現在の作業ディレクトリに、同じ名前のリポジトリが既にあることを意味します。 このエラーを解決するには、別のディレクトリにフォークをクローンする必要があります。

 {% endtip %}
7. 新しくクローンしたリポジトリに移動します。
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. 元の変更が行われた、プルリクエストの比較ブランチに切り替えます。 元のプルリクエストに移動すると、比較ブランチがプルリクエストの上部に表示されます。
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) この例では、比較ブランチは `test-branch` です。
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **ヒント:** プルリクエスト ブランチの詳細と例については、「[Creating a Pull Request](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)」 (プルリクエストの作成) を参照してください。

 {% endtip %}
8. これで、このブランチに対して任意の操作を実行できます。 新しいコミットのプッシュ、ローカルでのテスト、他のブランチからのマージを行うことができます。 自由に修正しましょう。
9. プルリクエストの head ブランチに変更をコミットした後、元のプルリクエストに直接、変更をプッシュできます。 この例で、head ブランチは `test-branch` です。
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

新しいコミットが、{% data variables.product.product_location %} の元のプルリクエストに反映されます。

## もっと読む

- 「[About forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」 (フォークの概要)
