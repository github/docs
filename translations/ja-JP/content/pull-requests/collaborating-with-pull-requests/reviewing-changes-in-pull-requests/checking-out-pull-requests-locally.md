---
title: ローカル環境でプルリクエストにチェックアウトする
intro: 'レポジトリに作成されたプルリクエストに対して、コンフリクトの解消やテスト、コードの確認などを {% data variables.product.product_name %} 上でマージせずにローカル環境で確認できます。
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
---
{% note %}

  **注:** プルリクエストの作成者はアップストリームレポジトリのメンテナやアクセス権を持つ人に、フォークから作成されたプルリクエストのブランチへの変更を許可することができます。 詳細については、「[フォークから作成されたプルリクエストのブランチへの変更の許可](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

  {% endnote %}

## ローカル環境でアクティブなプルリクエストを編集する

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、編集したいプルリクエストをクリックします。{% ifversion fpt or ghec %}
3. **Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}** ドロップダウンを開き、プルリクエストを開く場所を選択します。
  ![コマンドラインからプルリクエストにアクセスするための手順へのリンク](/assets/images/help/pull_requests/open-with-button.png){% else %}
4. マージボックス内の **command line instructions** をクリックし、ローカル環境でプルリクエストにチェックアウトするための指示に従ってください。
  ![コマンドラインからプルリクエストにアクセスするための手順へのリンク](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
5. または {% data variables.product.prodname_desktop %} 上の提案された変更から **open this in {% data variables.product.prodname_desktop %}** をクリックします。
  ![Desktop からプルリクエストにアクセスするための手順へのリンク](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

`gh pr checkout` サブコマンドを使うことで、ローカル環境でプルリクエストにチェックアウトすることができます。 `pull-request` をプルリクエストの番号や URL 、 head branch に置き換えてください。

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## ローカル環境で非アクティブなプルリクエストを編集する

もしプルリクエストの作成者がリクエストに応答しない、またはフォーク先を削除していてもプルリクエストはマージされる可能性があります。 しかし、もしあなた自身がプルリクエストに変更を加えたい場合、追加の手順が必要になります。

一度プルリクエストが作成されると、 {% data variables.product.product_name %} は全ての変更をリモートに保管します。 つまり、プルリクエストに含まれるコミットはマージされる前でもリポジトリで利用可能なため、プルリクエストをフェッチして自分のものとして作り直すことができます。

過去に開かれたプルリクエストを作り直したりテストをしたり追加の変更を加えることは誰にでもできますが、マージをする権限はコラボレーターにのみ与えられます。

{% data reusables.repositories.sidebar-issue-pr %}
1. プルリクエストの一覧から、マージしたいプルリクエストを開きます。
2. 非アクティブなプルリクエストの ID 番号を探します。 プルリクエストのタイトルの後に記載されています。
  ![プルリクエスト ID 番号](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
1. プルリクエストの ID 番号を使ってプルリクエストへの参照を取得し、新しいブランチを作成してください。
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
2. 新しく作成したブランチに切り替えてください:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
3. この時点でこのブランチに対してやりたい操作をすることができるようになりました。ローカル環境でテストを実行したり、他のブランチをこのブランチにマージしたりすることができます。
4. 準備ができたら、この変更をプッシュします:
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
9. 新しいブランチから [新しいプルリクエストを作成してください](/articles/creating-a-pull-request) 。

## エラー: 参照のプッシュに失敗しました

リモートの `refs/pull/` ネームスペースは *読み取り専用* です。 もしここになんらかのコミットをプッシュしようとすると、以下のエラーが発生します:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**ヒント:** リモートのリファレンスを変更または削除した場合、ローカル環境の `refs/pull/origin/` ネームスペースは `git-remote` を呼び出しても影響を受けません。

{% endtip %}
