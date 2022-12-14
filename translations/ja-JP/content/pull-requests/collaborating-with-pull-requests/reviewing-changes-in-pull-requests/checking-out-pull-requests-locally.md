---
title: プルリクエストをローカルでチェック アウトする
intro: '誰かがリポジトリのフォークまたはブランチからプルリクエストを送信した場合、ローカルでマージして、マージコンフリクトを解決するか、{% data variables.product.product_name %} でマージする前に変更をテストおよび検証できます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139571'
---
{% note %}

  **注:** pull request の作成者だけが、上流のリポジトリ メンテナ、または上流のリポジトリへのプッシュ アクセスを持っているユーザーに対し、ユーザ所有のフォークで pull request の比較ブランチにコミットする権限を与えることができます。 詳細については、「[Allowing changes to a pull request branch created from a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」 (フォークから作成された pull request ブランチへの変更を許可する) を参照してください。

  {% endnote %}

## アクティブなプルリクエストをローカルで修正する

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. pull request の一覧で、変更する pull request をクリックします。{% ifversion fpt or ghec %}
3. pull request を開く場所を選択するには、 **[Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}]\({% octicon "triangle-down" aria-label="The down triangle icon" %} で開く)** ドロップ ダウンを選択して、いずれかのタブをクリックします。
  ![コマンド ラインの pull request にアクセスする手順へのリンク](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. マージ ボックスで、 **[Comand LIne Instructions]\(コマンド ラインの手順)** をクリックします。 手順に従い、提案されたプルリクエストをローカルにダウンロードしてください。
  ![コマンド ラインの pull request にアクセスする手順へのリンク](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. 必要に応じて、{% data variables.product.prodname_desktop %} で提案された変更を表示するには、 **[open this in {% data variables.product.prodname_desktop %}]\({% data variables.product.prodname_desktop %} でこれを開く)** をクリックします。
  ![pull request をデスクトップでローカルで開くリンク](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

pull request をローカルでチェックアウトするには、`gh pr checkout` サブコマンドを使用します。 `pull-request` を、pull request の番号、URL、またはヘッド ブランチで置き換えます。

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## アクティブではないプルリクエストをローカルで修正する

プルリクエストの作者がリクエストに応答しない場合や、フォークを削除した場合でも、プルリクエストをマージできます。 一方、プルリクエストを変更したくても作者が応答しないという場合、プルリクエストを更新するには追加的な手順を踏まなければなりません。

プルリクエストがオープンされると、{% data variables.product.product_name %} はすべての変更をリモートで保存します。 つまり、プルリクエストがマージされる前でも、プルリクエストのコミットはリポジトリで利用できます。 オープンなプルリクエストをフェッチして、自分のものとして再作成できます。

誰でも、以前にオープンされたプルリクエストを使って、さらに作業を進めたり、テストしたりできます。そこへ変更を追加して新しいプルリクエストをオープンすることもできます。 ただし、プルリクエストをマージできるのは、プッシュアクセスを持つコラボレータだけです。

{% data reusables.repositories.sidebar-issue-pr %}
2. [Pull Requests] リストで、マージしたいプルリクエストをクリックします。
3. アクティブではないプルリクエストの ID 番号を検索します。 ID 番号は、プルリクエストのタイトルの後に付いている数字です。
  ![ の ID 番号](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. ID 番号を元に、プルリクエストへの参照をフェッチします。この過程で、新しいブランチが作成されます。
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. このプルリクエストに基づく新しいブランチに切り替えます。
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. これで、このブランチに対して任意の操作を実行できます。 ローカルテストを実行するか、他のブランチをブランチにマージすることができます。
8. 準備ができたら、新しいブランチをプッシュできます。
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. 新しいブランチで[新しい pull request を作成](/articles/creating-a-pull-request)します。

## エラー: 一部の ref をプッシュできませんでした

リモートの `refs/pull/` 名前空間は "*読み取り専用*" です。 ここにコミットをプッシュしようとすると、以下のエラーが表示されます。
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**ヒント:** リモート参照の削除または名前変更を行う場合、ローカルの `refs/pull/origin/` 名前空間は、`git-remote` への呼び出しの影響を受けません。

{% endtip %}
