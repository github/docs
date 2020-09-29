---
title: プルリクエストをローカルでチェック アウトする
intro: '誰かがリポジトリのフォークまたはブランチからプルリクエストを送信した場合、ローカルでマージして、マージコンフリクトを解決するか、{% data variables.product.product_name %} でマージする前に変更をテストおよび検証できます。'
redirect_from:
  - /articles/checking-out-pull-requests-locally
permissions: リポジトリへの書き込みアクセスを持つユーザは、リモートプルリクエストをローカルにプルダウンできます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

  {% note %}

  **注釈:** プルリクエストの作者は、上流のリポジトリメンテナ、あるいは上流のリポジトリへのプッシュアクセスを持っている人に対し、ユーザ所有のフォークでプルリクエストの比較ブランチにコミットする権限を与えることができます。 詳しい情報については、「[フォークから作成されたプルリクエストブランチへの変更を許可する](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

  {% endnote %}

### アクティブなプルリクエストをローカルで修正する

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、変更するプルリクエストをクリックします。{% if currentVersion == "free-pro-team@latest" %}
3. プルリクエストをオープンする場所を選択するには、[**Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}**] ドロップダウンを選択して、いずれかのタブをクリックします。 ![Link to access command line pull request instructions](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. マージボックスで、[**command line instructions**] をクリックします。 手順に従い、提案されたプルリクエストをローカルにダウンロードしてください。 ![コマンドラインのプルリクエスト手順へのリンク](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. オプションで、提案された変更を {% data variables.product.prodname_desktop %} で表示するには、[**open this in {% data variables.product.prodname_desktop %}**] をクリックします。 ![Link to open a pull request locally in Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

### アクティブではないプルリクエストをローカルで修正する

プルリクエストの作者がリクエストに応答しない場合や、フォークを削除した場合でも、プルリクエストをマージできます。 一方、プルリクエストを変更したくても作者が応答しないという場合、プルリクエストを更新するには追加的な手順を踏まなければなりません。

プルリクエストがオープンされると、{% data variables.product.product_name %} はすべての変更をリモートで保存します。 つまり、プルリクエストがマージされる前でも、プルリクエストのコミットはリポジトリで利用できます。 オープンなプルリクエストをフェッチして、自分のものとして再作成できます。

誰でも、以前にオープンされたプルリクエストを使って、さらに作業を進めたり、テストしたりできます。そこへ変更を追加して新しいプルリクエストをオープンすることもできます。 ただし、プルリクエストをマージできるのは、プッシュアクセスを持つコラボレータだけです。

{% data reusables.repositories.sidebar-issue-pr %}
2. [Pull Requests] リストで、マージしたいプルリクエストをクリックします。
3. アクティブではないプルリクエストの ID 番号を検索します。 ID 番号は、プルリクエストのタイトルの後に付いている数字です。 ![プルリクエストの ID 番号](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
5. ID 番号を元に、プルリクエストへの参照をフェッチします。この過程で、新しいブランチが作成されます。
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. このプルリクエストに基づく新しいブランチに切り替えます。
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. これで、このブランチに対して任意の操作を実行できます。 You can run some local tests, or merge other branches into the branch.
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
9. 新しいブランチで[新しいプルリクエストを作成](/articles/creating-a-pull-request)します。

### エラー: 一部の ref をプッシュできませんでした

リモートの `refs/pull/` 名前空間は *読み取り専用*です。 ここにコミットをプッシュしようとすると、以下のエラーが表示されます。
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**ヒント:** リモート参照の削除や名前変更を行った場合、ローカルの `refs/pull/origin/` 名前空間は `git-remote` への呼び出しに影響されません。

{% endtip %}
