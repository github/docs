---
title: GitHub Task Runner の使用
intro: 'クローズした Early Access Program の一環として、{% data variables.product.prodname_dotcom %} Task Runner を CI/CD が統合されたシステムとして使用することができます。 {% data variables.product.product_name %} Task Runner を使用すると、リポジトリ内の設定ファイルを基づいて、{% data variables.product.prodname_github_app %} からのコードを自動的にビルド、テスト、およびデプロイすることができます。'
hidden: true
redirect_from:
  - /enterprise/admin/articles/using-github-task-runner
versions:
  enterprise-server: '*'
---


{% note %}

**メモ:** {% data variables.product.prodname_dotcom %}Task Runner へのアクセスをリクエストする前に、{% data variables.product.product_location_enterprise %}の `EARLY ACCESS LINK` で、Early Access Program の免責事項と責任制限を読んで同意する必要があります。 この書類は、これらの規約を含んでいます。

{% endnote %}

### このガイドの内容
- [{% data variables.product.prodname_dotcom %}Task Runner について](#about-github-task-runner)
- [{% data variables.product.prodname_dotcom %}Task Runner バイナリをダウンロードする](#downloading-the-github-task-runner-binary)
- [アプライアンスに {% data variables.product.prodname_dotcom %} Task Runner {% data variables.product.prodname_github_app %}を作成する](#creating-the-github-task-runner-github-app-on-your-appliance)
- [{% data variables.product.prodname_dotcom %}Task Runner アプリケーションをインストールする](#installing-the-github-task-runner-app)
- [プロジェクトのタスクを実行する](#running-tasks-for-a-project)

### {% data variables.product.prodname_dotcom %}Task Runner について

{% data variables.product.product_name %} Task Runnerは、ディスパッチャ (Webhook プッシュイベントを処理し、タスクをキューに入れる別のサービス) によってキューに入れられたタスクを実行します。

ディスパッチャには {% data variables.product.product_location_enterprise %} が付属していますが、{% data variables.product.product_name %} Task Runner をアプライアンスに手動でインストールする必要があります。 {% data variables.product.product_name %}Task Runner をセットアップするには、Runnerバイナリをダウンロードし、アプライアンスに {% data variables.product.prodname_github_app %}を作成し、ディスパッチャーと連携するようサーバーをセットアップする必要があります。

### {% data variables.product.prodname_dotcom %}Task Runner バイナリをダウンロードする

{% data variables.product.product_location_enterprise %}に {% data variables.product.product_name %}Task Runner アプリケーションバイナリファイルが必要です。 ご希望のプラットフォーム用のバイナリをダウンロードするには、`hostname` を {% data variables.product.product_location_enterprise %} ホスト名または IP アドレスで置き換えて、`https://HOSTNAME/_dispatcher/downloads/` にアクセスします。

`chmod` コマンドを使用して、コマンドラインの {% data variables.product.product_name %} Task Runner の使用権限を変更します。

{% mac %}

```shell
$ chmod +x task-runner_darwin_amd64
```

{% endmac %}

{% windows %}

```shell
$ move task-runner_windows_amd64 task-runner_windows_amd64.exe
```

{% endwindows %}

{% linux %}

```shell
$ chmod +x task-runner_linux_amd64
```

{% endlinux %}

### アプライアンスに {% data variables.product.prodname_dotcom %} Task Runner {% data variables.product.prodname_github_app %}を作成する

1. 現在のディレクトリに、`.task-runner.yaml` 設定ファイルを作成します。 `--config` フラグを使用して、別のディレクトリにファイルを移動することができます。

```shell
task-runner セットアップ
```

2. {% data variables.product.product_location_enterprise %} のホスト名を入力します。
3. 特別な権限で設定された個人アクセストークンを入力します。 詳細は「[コマンドライン用の個人アクセストークンを作成する](/articles/creating-a-personal-access-token-for-the-command-line/)」を参照してください。 アカウントに {% data variables.product.prodname_github_app %} を作成している場合、`user` 権限を使用できます。または、Organization に {% data variables.product.prodname_github_app %} を作成している場合、`admin:org` を使用できます。
4. {% data variables.product.prodname_github_app %}に名前 (`Octocat Task Runner` など) を入力します。
5. Organization に {% data variables.product.prodname_github_app %}を作成している場合、Organization の名前を入力します。
6. Task Runner を起動します。

```shell
task-runner 起動
```

### {% data variables.product.prodname_dotcom %}Task Runner アプリケーションをインストールする

1. ページの右上隅にあるプロフィール画像をクリックしてから、[Settings] をクリックします。 ![ユーザバーの [Settings（設定）] アイコン](/assets/images/help/images/userbar-account-settings.png)
2. 左サイドバーで [**Developer settings**] をクリックします。 ![Developer settings（開発者設定）セクション](/assets/images/help/images/developer_settings.png)
3. 左サイドバーで [**{% data variables.product.prodname_dotcom %}Apps**] をクリックします。 ![GitHub Apps セクション](/assets/images/help/images/github_apps.png)
4. インストールするアプリケーションをクリックします。
5. 左サイドバーで [**Public page**] をクリックします。 ![[Public page] セクション](/assets/images/help/images/public-page-tab.png)
6. [**Install**] をクリックします。 ![GitHub App 公開ページのインストールボタン](/assets/images/help/images/install-runner-public-page.png)
7. [**[Only select repositories（リポジトリの選択のみを行う）]**] を選択し、{% data variables.product.prodname_dotcom %} Task Runner をインストールするリポジトリ名を入力します。 ![インストール先のリポジトリを選択する](/assets/images/help/images/repositories-install-task-runner.png)
8. [**Install**] をクリックします。 ![GitHub App インストールページのインストールボタン](/assets/images/help/images/install-runner-installation-page.png)
9. アプリケーションをインストールしたリポジトリへ移動します。
10. 次に類似した `github/tasks.gf` ファイルを作成します:

  ```
task "my task" {
command = "command-to-run"
runnerType = "Shell"
env =  {
  FOO="bar",
  BAR="baz"
}
}
  ```
12. プルリクエストを開き、リポジトリにファイルを追加します。
13. 変更をプッシュして、CI タスクが実行されることを確認します。

### プロジェクトのタスクを実行する

プルリクエストを作成したら、{% data variables.product.prodname_github_app %} はイベントをディスパッチャ (タスクがキューに入れられて {% data variables.product.prodname_dotcom %} Task Runner に送信されるところ) にプッシュします。 {% data variables.product.prodname_dotcom %} Task Runner がタスクを受信して実行した後、ディスパッチャにレポートすると、プルリクエストが結果で更新されます。

![プルリクエストの CI テスト結果](/assets/images/help/images/task-results.png)
