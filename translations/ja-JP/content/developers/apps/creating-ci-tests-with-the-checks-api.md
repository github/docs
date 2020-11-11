---
title: Checks API で CI テストを作成する
intro: '{% data variables.product.prodname_github_app %} と Checks API を使用して、テストを実行するための継続的インテグレーションサーバーを構築します。'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### はじめに

このガイドでは、[Github App](/apps/) と [Checks API](/v3/checks/) について紹介します。Checks API は、テストを実行する継続的インテグレーション (CI) サーバーを構築するために使用します。

CI とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの発生が早くなり、開発者がエラーの原因を見つけようとしてデバッグする必要性も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 開発者がコードの記述にばかり時間をとられ、エラーのデバッグやマージコンフリクトの解決にかける時間が少ないときに威力を発揮します。 🙌

CI サーバーは、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コード網羅率、その他のチェックといった CI テストをリポジトリの新しいコードコミットに対して実行するコードをホストします。 CI サーバーは、ステージングサーバーや本番サーバーにコードを構築しデプロイすることも可能です。 GitHub App で作成できる CI テストのタイプの例については、GitHub Marketplace で入手できる[継続的インテグレーションアプリケーション](https://github.com/marketplace/category/continuous-integration)を確認してください。

{% data reusables.apps.app-ruby-guides %}

#### Checks API の概要

[Checks API](/v3/checks/) を使用すると、リポジトリでコミットされている各コードに対して自動的に実行される CI テストを設定できます。 Checks API は、プルリクエストの [**Checks**] タブにおいて、各チェックについての詳細情報をレポートします。 Checks API を使用すると、コードの特定の行に対して追加的な情報を含むアノテーションを作成できます。 アノテーションは [**Checks**] タブに表示されます。 プルリクエストの一部であるファイルに対してアノテーションを作成すると、そのアノテーションは [**Files changed**] タブにも表示されます。

_チェックスイート_とは、 _チェック実行_ (個々の CI テスト) をグループ化したものです。 チェックスイートにもチェック実行にも_ステータス_が含まれており、GitHub のプルリクエストで表示できます。 ステータスを使用して、コードコミットがエラーを発生させるタイミングを決定できます。 これらのステータスを[保護されたブランチ](/v3/repos/branches/)で使用すると、プルリクエストを早まってマージすることを防げます。 詳細は「[ステータスチェック必須の有効化](/articles/enabling-required-status-checks/)」を参照してください。

Checks API は、新しいコードがリポジトリにプッシュされるたびに、リポジトリにインストールされている全ての GitHub App に [`check_suite` webhook イベント](/webhooks/event-payloads/#check_suite)を送信します。 Checks API イベントの全てのアクションを受信するには、アプリケーションに `checks:write` 権限が必要です。 GitHub はデフォルトのフローを使ってリポジトリの新しいコードのコミットに `check_suite` イベントを自動的に作成しますが、[チェックスイートのためのリポジトリプリファレンスの更新](/v3/checks/suites/#update-repository-preferences-for-check-suites)を行っても構いません。 デフォルトのフローは以下の通りです。

1. 誰かがリポジトリにコードをプッシュすると、GitHubは、`checks:write` 権限を持つ、リポジトリにインストールされている全ての GitHub Apps に `requested` のアクションと共に `check_suite` イベントを送信します。 このイベントにより、コードがプッシュされたことと、GitHub が新しいチェックスイートを自動的に作成したことがアプリケーションに通知されます。
1. アプリケーションがこのイベントを受信すると、アプリケーションはスイートに[チェック実行を追加](/v3/checks/runs/#create-a-check-run)できます。
1. チェック実行には、コードの特定の行で表示される[アノテーション](/v3/checks/runs/#annotations-object)を含めることができます。

**In this guide, you’ll learn how to:**

* パート 1: Checks API を使用して CI サーバー用のフレームワークをセットアップする。
  * Checks API イベントを受信するサーバーとして GitHub App を構成します。
  * Create new check runs for CI tests when a repository receives newly pushed commits.
  * Re-run check runs when a user requests that action on GitHub.
* Part 2: Build on the CI server framework you created by adding a linter CI test.
  * Update a check run with a `status`, `conclusion`, and `output` details.
  * Create annotations on lines of code that GitHub displays in the **Checks** and **Files Changed** tab of a pull request.
  * Automatically fix linter recommendations by exposing a "Fix this" button in the **Checks** tab of the pull request.

このクイックスタートを完了したときに Checks API CI サーバーがどのように動作するかを理解するには、以下のデモをご覧ください。

![Demo of Checks API CI sever quickstart](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

### 必要な環境

以下の作業に取りかかる前に、[Github Apps](/apps/)、[webhook](/webhooks)、[Checks API](/v3/checks/) を使い慣れていない場合は、ある程度慣れておくとよいでしょう。 [REST API ドキュメント](/v3/)には、さらに API が掲載されています。 Checks API は [GraphQL](/v4/) でも使用できますが、このクイックスタートでは REST に焦点を当てます。 詳細については、GraphQL [Checks Suite](/v4/object/checksuite/) および [Check Run](/v4/object/checkrun/) オブジェクトを参照してください。

You'll use the [Ruby programming language](https://www.ruby-lang.org/en/), the [Smee](https://smee.io/) webhook payload delivery service, the [Octokit.rb Ruby library](http://octokit.github.io/octokit.rb/) for the GitHub REST API, and the [Sinatra web framework](http://sinatrarb.com/) to create your Checks API CI server app.

このプロジェクトを完了するために、これらのツールや概念のエキスパートである必要はありません。 このガイドでは、必要なステップを順番に説明していきます。 Checks API で CI テストを作成する前に、以下を行う必要があります。

1. [Checks API で CI テストを作成する](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) リポジトリをクローンします。
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  ディレクトリの中には、このクイックスタートで使用する `template_server.rb` ファイルと、完成したプロジェクトコードである `server.rb` ファイルがあります。

1. 「[開発環境をセットアップする](/apps/quickstart-guides/setting-up-your-development-environment/)」クイックスタートに記載されたステップに従い、アプリケーションサーバーを構成して実行します。 **注釈:** [GitHub App のテンプレートリポジトリをクローンする](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites)のではなく、このクイックスタートの直前のステップでクローンしたリポジトリにある `template_server.rb` ファイルを使用します。

  GitHub App クイックスタートガイドを以前に完了している場合、このクイックスタートでは必ず_新たな_ GitHub App を登録し、このクイックスタートで使用する Smee チャンネルを新しく開始するようにしてください。

  テンプレート GitHub App の設定で問題にぶつかった場合は、[トラブルシューティング](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting)のセクションを参照してください。

### パート1. Checks API インターフェースを作成する

このパートでは、`check_suite` webhook イベントを受信するために必要なコードを追加し、チェック実行を作成して更新します。 また、GitHub でチェックが再リクエストされた場合にチェック実行を作成する方法についても学びます。 At the end of this section, you'll be able to view the check run you created in a GitHub pull request.

このセクションでは、作成したチェック実行はコードでチェックを実行しません。 この機能については、[パート 2: Octo RuboCop CI テストを作成する](#part-2-creating-the-octo-rubocop-ci-test)で追加します。

ローカルサーバーにwebhook ペイロードを転送するよう Smee チャンネルが構成されているでしょうか。 サーバーは実行中で、登録済みかつテストリポジトリにインストールした GitHub App に接続している必要があります。 「[開発環境をセットアップする](/apps/quickstart-guides/setting-up-your-development-environment/)」のステップを完了していない場合は、次に進む前にこれを実行する必要があります。

さあ、始めましょう！ パート 1 では、以下のステップを完了させます。

1. [アプリケーションの権限を更新する](#step-11-updating-app-permissions)
1. [イベントの処理を追加する](#step-12-adding-event-handling)
1. [チェック実行を作成する](#step-13-creating-a-check-run)
1. [チェック実行を更新する](#step-14-updating-a-check-run)

### ステップ 1.1. アプリケーションの権限を更新する

[最初にアプリケーションを登録](#prerequisites)した際は、デフォルトの権限を受け入れています。これは、アプリケーションがほとんどのリソースにアクセスできないことを意味します。 この例においては、アプリケーションにはチェックを読み取りおよび書き込みする権限が必要となります。

アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリケーションの設定ページ](https://github.com/settings/apps)からアプリケーションを選択肢、サイドバーの [**Permissions & Webhooks**] をクリックします。
1. [Permissions] セクションで [Checks] を見つけて、隣にある [Access] ドロップダウンで [**Read & write**] を選択します。
1. [Subscribe to events] セクションで [**Check suite**] と [**Check run**] を選択してこれらのイベントをサブスクライブします。
{% data reusables.apps.accept_new_permissions_steps %}

これでうまくいきました。 アプリケーションは必要なタスクを実行する権限を所有しています。 これでイベントを処理するコードを追加できるようになりました。

### ステップ 1.2. イベントの処理を追加する

ここまでで、アプリケーションが **Check suite** および **Check run** イベントにサブスクライブされ、[`check_suite`](/webhooks/event-payloads/#check_suite) および [`check_run`](/webhooks/event-payloads/#check_run) webhook を受信し始めます。 GitHub は webhook ペイロードを `POST` リクエストとして送信します。 Smee webhook ペイロードを `http://localhost/event_handler:3000` に転送したため、サーバーは `POST` リクエストのペイロードを `post '/event_handler'` ルートで受信します。

空の `post '/event_handler'` ルートは、[必要な環境](#prerequisites)セクションでダウンロードした `template_server.rb` ファイルに既に含まれています。 空のルートは次のようになっています。

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

次のコードを追加し、このルートを使用して `check_suite` イベントを処理します。

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

GitHub が送信する全てのイベントには、`HTTP_X_GITHUB_EVENT` というリクエストヘッダが含まれており、これは `POST` リクエストのイベントの型を示します。 ここでは `check_suite` 型のイベントにのみ注目しましょう。これは新しいチェックスイートが作成された時に発生します。 各イベントには、アクションをトリガーしたイベントのタイプを示す `action` フィールドが付いています。 `check_suite` では、`action` フィールドは `requested`、`rerequested`、`completed` のいずれかとなります。

`requested` アクションはリポジトリにコードがプッシュされるたびにチェック実行をリクエストし、`rerequested` アクションはリポジトリに既存のコードにチェックを再実行するようリクエストします。 `requested` と `rerequested` の両方のアクションでチェック実行の作成が必要なため、`create_check_run` というヘルパーを呼び出します。 では、このメソッドを書いてみましょう。

### ステップ 1.3. チェック実行を作成する

他のルートでも使用する場合のために、新しいメソッドを [Sinatra ヘルパー](https://github.com/sinatra/sinatra#helpers) として追加します。 `helpers do` の下に、以下の `create_check_run` メソッドを追加します。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Create a new check run with the status queued
def create_check_run
  # # At the time of writing, Octokit does not support the Checks API yet, but
  # it does provide generic HTTP methods you can use:
  # /v3/checks/runs/#create-a-check-run
  check_run = @installation_client.post(
    "repos/#{@payload['repository']['full_name']}/check-runs",
    {
      accept: 'application/vnd.github.v3+json',
      # The name of your check run.
      name: 'Octo RuboCop',
      # The payload structure differs depending on whether a check run or a check suite event occurred.
      head_sha: @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha']
    }
  )
end
```
{% else %}
``` ruby
# Create a new check run with the status queued
def create_check_run
  # # At the time of writing, Octokit does not support the Checks API yet, but
  # it does provide generic HTTP methods you can use:
  # /v3/checks/runs/#create-a-check-run
  check_run = @installation_client.post(
    "repos/#{@payload['repository']['full_name']}/check-runs",
    {
      # This header allows for beta access to Checks API
      accept: 'application/vnd.github.antiope-preview+json',
      # The name of your check run.
      name: 'Octo RuboCop',
      # The payload structure differs depending on whether a check run or a check suite event occurred.
      head_sha: @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha']
    }
  )
end
```
{% endif %}

このコードは [HTTP `POST` メソッド](http://octokit.github.io/octokit.rb/Octokit/Connection.html#post-instance_method)を使用して、「[チェック実行の作成](/v3/checks/runs/#create-a-check-run)」エンドポイントを呼び出します。 このメソッドは、エンドポイントの URL とメソッドの入力パラメータという 2 つのパラメータを取ります。

チェック実行を作成するために必要なのは、`name` と `head_sha` の 2 つの入力パラメータのみです。 このクイックスタートでは、後で [Rubocop](https://rubocop.readthedocs.io/en/latest/) を使用して CI テストを実装します。そのため、ここでは「Octo Rubocop」という名前を使っていますが、チェック実行には任意の名前を選ぶことができます。

ここでは基本的な機能を実行するため必要なパラメータのみを指定していますが、チェック実行について必要な情報を収集するため、後でチェック実行を更新することになります。 デフォルトでは、GitHub は `status` を `queued` に設定します。

GitHub は特定のコミット SHA に対するチェック実行を作成します。これが `head_sha` が必須パラメータである理由です。 コミット SHA は、webhook ペイロードで確認できます。 現時点では `check_suite` イベントにチェック実行を作成しているだけですが、`head_sha` がイベントペイロードの `check_suite` と `check_run` の両方のオブジェクトに含まれていることは知っておくとよいでしょう。

上記のコードでは、`if/else` 文のように機能する[三項演算子](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if)を使用して、ペイロードが `check_run` オブジェクトを含んでいるか確認しています。 含んでいる場合、`check_run` オブジェクトから `head_sha` を読み取り、含んでいない場合は `check_suite` オブジェクトから読み取ります。

このコードをテストするには、サーバーをターミナルから再起動します。

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

さて、それではアプリケーションをインストールしたリポジトリにあるプルリクエストを開いてください。 アプリケーションは応答し、プルリクエストのチェック実行を作成するはずです。 [**Checks**] タブをクリックすると、画面が以下のようになっているはずです。

![Queued check run](/assets/images/github-apps/github_apps_queued_check_run.png)

[Checks] タブに他のアプリケーションが表示されている場合は、チェックに対して**読み取りおよび書き込み**アクセス権を持ち、**Check suite** および **Check run** イベントにサブスクライブしている他のアプリケーションをリポジトリにインストールしているものと思われます。

これでうまくいきました。 ここまでで、GitHub にチェック実行を作成するよう指示しました。 チェック実行のステータスが `queued` に設定されていることが、黄色のアイコンの右側で確認できます。 次は、GitHub がチェック実行を作成し、ステータスを更新するのを待てばよいでしょう。

### ステップ 1.4. チェック実行を更新する

`create_check_run` メソッドが実行されると、メソッドは GitHub に新しいチェック実行を作成するよう依頼します。 Github がチェック実行の作成を完了すると、`created` アクションの `check_run` webhook イベントを受信します。 このイベントは、チェックの実行が始まる合図です。

イベントハンドラーを更新し、`created` アクションを待ち受けるようにしましょう。 イベントハンドラーを更新する際、`rerequested` アクションに条件を追加できます。 誰かが [Re-run] ボタンをクリックして GitHub 上で単一のテストを再実行すると、GitHub はアプリケーションに `rerequested` チェック実行イベントを送信します。 チェック実行が `rerequested` の場合、すべてのプロセスを開始し、新しいチェック実行を作成します。

To include a condition for the event in the `post '/event_handler'` ルートに `check_run` イベントの条件を含めるには、`case request.env['HTTP_X_GITHUB_EVENT']` の下に次のコードを追加します。

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

GitHub は `created` チェック実行のすべてのイベントを、必要なチェック権限を持つリポジトリにインストールされたあらゆるアプリケーションに送信します。 これはつまり、あなたのアプリケーションが他のアプリケーションにより作成されたチェック実行を受信するということです。 `created` チェック実行は、チェックを要求されているアプリケーションのみに GitHub が送信する `requested` や `rerequested` チェックスイートとは少し違います。 上記のコードは、チェック実行のアプリケーション ID を待ち受けます。 リポジトリの他のアプリケーションに対するチェック実行はすべて遮断されます。

次に `initiate_check_run` メソッドを書きます。これは、チェック実行のステータスを更新し、CI テストの開始を準備するものです。

このセクションでは、まだ CI テストは開始しません。その代わり、チェック実行のステータスを `queued` から `pending` に、そしてその後 `pending` から `completed` に更新する手順を確認し、チェック実行のフロー全体を確認します。 「[パート2: Octo RuboCop CI テストを作成する](#part-2-creating-the-octo-rubocop-ci-test)」では、CI テストを実際に実行するコードを追加します。

`initiate_check_run` メソッドを作成し、チェック実行のステータスを更新しましょう。 以下のコードを helpers セクションに追加します。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  # Octokit doesn't yet support the Checks API, but it does provide generic
  # HTTP methods you can use:
  # /v3/checks/runs/#update-a-check-run
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.v3+json',
      name: 'Octo RuboCop',
      status: 'in_progress',
      started_at: Time.now.utc.iso8601
    }
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.v3+json',
      name: 'Octo RuboCop',
      status: 'completed',
      conclusion: 'success',
      completed_at: Time.now.utc.iso8601
    }
  )
end
```
{% else %}
``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  # Octokit doesn't yet support the Checks API, but it does provide generic
  # HTTP methods you can use:
  # /v3/checks/runs/#update-a-check-run
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
      name: 'Octo RuboCop',
      status: 'in_progress',
      started_at: Time.now.utc.iso8601
    }
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      # This header is necessary for beta access to Checks API
      accept: 'application/vnd.github.antiope-preview+json',
      name: 'Octo RuboCop',
      status: 'completed',
      conclusion: 'success',
      completed_at: Time.now.utc.iso8601
    }
  )
end
```
{% endif %}

上記のコードは、ジェネリックな [`patch` HTTP method](http://octokit.github.io/octokit.rb/Octokit/Connection.html#patch-instance_method)メソッドを使用して「[チェック実行を更新する](/v3/checks/runs/#update-a-check-run)」API エンドポイントを呼び出し、既に作成したチェック実行を更新します。

このコードがしていることを説明しましょう。 まず、チェック実行のステータスを `in_progress` に更新し、`started_at` の時刻を現在の時刻に設定します。 このクイックスタートの[パート 2](#part-2-creating-the-octo-rubocop-ci-test)では、実際の CI テストを開始するコードを `***** RUN A CI TEST *****` の下に追加します。 今はこのセクションをプレースホルダーとして残しておきましょう。そうすると、続くコードが CI のプロセスを成功させ、すべてのテストに合格したことをシミュレートすることになります。 最後に、コードはチェック実行のステータスを再び `completed` に更新します。

「[チェック実行を更新する](/v3/checks/runs/#update-a-check-run)」 ドキュメントに、`completed` のステータスを指定すると、`conclusion` と `completed_at` のパラメータが必須となることが書かれています。 `conclusion` はチェック実行の結果を要約するもので、`success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` のいずれかになります。 この結果 (conclusion) は `success` に、`completed_at` の時刻は現在の時刻に、ステータスは `completed` に設定します。

チェックが行っていることについてより詳しく指定することもできますが、それは次のセクションで行うことにします。 では、`template_server.rb` を実行して、このコードを再びテストしましょう。

```shell
$ ruby template_server.rb
```

開いたプルリクエストに移動し、[**Checks**] タブをクリックします。 左上隅にある [Re-run all] ボタンをクリックしてください。 チェック実行が `pending` から `in_progress` に移動し、`success` で終わることが確認できるはずです。

![Completed check run](/assets/images/github-apps/github_apps_complete_check_run.png)

### パート2. Octo RuboCop CI テストを作成する

[RuboCop](https://rubocop.readthedocs.io/en/latest/) は Ruby のコード文法チェッカーおよびフォーマッタです。 Ruby のコードが「[Ruby スタイルガイド](https://github.com/rubocop-hq/ruby-style-guide)」に準拠するようチェックします。 RuboCop の主な機能は、以下の 3 つです。

* コードのスタイルを確認する文法チェック
* コードの整形
* Replaces the native Ruby linting capabilities using `ruby -w`

さて、Checks API を受信し、チェック実行を作成するために作ったインターフェースができあがったところで、今度は CI テストを実装するチェック実行を作成しましょう。

あなたのアプリケーションは CI サーバー上の RuboCop で実行され、結果を RuboCop が GitHub に報告するチェック実行 (ここでは CI テスト) を作成します。

Checks API を使用すると、ステータス、画像、要約、アノテーション、リクエストされたアクションなどの、各チェック実行の詳細情報を報告できます。

アノテーションとは、リポジトリのコードの特定の行についての情報です。 アノテーションを使用すると、追加情報を表示したいコードの部分を細かく指定して、それを視覚化できます。 この情報は、たとえばコメント、エラー、警告など何でも構いません。 このクイックスタートでは、RuboCop のエラーを視覚化するためにアノテーションを使用します。

リクエストされたアクションを利用るため、アプリケーション開発者はプルリクエストの [**Checks**] タブにボタンを作成できます。 このボタンがクリックされると、そのクリックにより GitHub App に `requested_action` `check_run` イベントが送信されます。 アプリケーションが行うアクションは、アプリケーション開発者が自由に設定できます。 このクイックスタートでは、RuboCop が見つけたエラーを修正するようユーザがリクエストするためのボタンを追加する方法について説明します。 RuboCop はコマンドラインオプションによるエラーの自動的な修正をサポートしており、ここでは `requested_action` を設定して、このオプションを使用できるようにします。

さあ、始めましょう！ このセクションでは、以下のステップを完了させます。

1. [Ruby ファイルを追加する](#step-21-adding-a-ruby-file)
1. [リポジトリをクローンする](#step-22-cloning-the-repository)
1. [RuboCop を実行する](#step-23-running-rubocop)
1. [RuboCop のエラーを収集する](#step-24-collecting-rubocop-errors)
1. [CI テスト結果でチェック実行を更新する](#step-25-updating-the-check-run-with-ci-test-results)
1. [RuboCop のエラーを自動的に修正する](#step-26-automatically-fixing-rubocop-errors)
1. [セキュリティのヒント](#step-27-security-tips)

### ステップ 2.1. Ruby ファイルを追加する

RuboCop がチェックするため、特定のファイルまたはディレクトリ全体を渡すことができます。 このクイックスタートでは、ディレクトリ全体で RuboCop を実行します。 RuboCop がチェックするのは Ruby のコードのみなので、エラーが含まれる Ruby ファイルをリポジトリ内に最低 1 つ置くとよいでしょう。 以下に示すサンプルのファイルには、いくつかのエラーが含まれています。 Add this example Ruby file to the repository where your app is installed (make sure to name the file with an `.rb` extension, as in `myfile.rb`):

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

### ステップ 2.2. リポジトリをクローンする

RuboCop is available as a command-line utility. That means your GitHub App will need to clone a local copy of the repository on the CI server so RuboCop can parse the files. To run Git operations in your Ruby app, you can use the [ruby-git](https://github.com/ruby-git/ruby-git) gem.

The `Gemfile` in the `building-a-checks-api-ci-server` repository already includes the ruby-git gem, and you installed it when you ran `bundle install` in the [prerequisite steps](#prerequisites). To use the gem, add this code to the top of your `template_server.rb` file:

``` ruby
require 'git'
```

Your app needs read permission for "Repository contents" to clone a repository. Later in this quickstart, you'll need to push contents to GitHub, which requires write permission. Go ahead and set your app's "Repository contents" permission to **Read & write** now so you don't need to update it again later. アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリケーションの設定ページ](https://github.com/settings/apps)からアプリケーションを選択肢、サイドバーの [**Permissions & Webhooks**] をクリックします。
1. In the "Permissions" section, find "Repository contents", and select **Read & write** in the "Access" dropdown next to it.
{% data reusables.apps.accept_new_permissions_steps %}

To clone a repository using your GitHub App's permissions, you can use the app's installation token (`x-access-token:<token>`) shown in the example below:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

The code above clones a repository over HTTP. It requires the full repository name, which includes the repository owner (user or organization) and the repository name. For example, the [octocat Hello-World](https://github.com/octocat/Hello-World) repository has a full name of `octocat/hello-world`.

After your app clones the repository, it needs to pull the latest code changes and check out a specific Git ref. The code to do all of this will fit nicely into its own method. To perform these operations, the method needs the name and full name of the repository and the ref to checkout. The ref can be a commit SHA, branch, or tag. Add the following new method to the helper method section in `template_server.rb`:

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

The code above uses the `ruby-git` gem to clone the repository using the app's installation token. This code clones the code in the same directory as `template_server.rb`. To run Git commands in the repository, the code needs to change into the repository directory. Before changing directories, the code stores the current working directory in a variable (`pwd`) to remember where to return before exiting the `clone_repository` method.

From the repository directory, this code fetches and merges the latest changes (`@git.pull`), checks out the ref (`@git.checkout(ref)`), then changes the directory back to the original working directory (`pwd`).

Now you've got a method that clones a repository and checks out a ref. Next, you need to add code to get the required input parameters and call the new `clone_repository` method. Add the following code under the `***** RUN A CI TEST *****` comment in your `initiate_check_run` helper method:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

The code above gets the full repository name and the head SHA of the commit from the `check_run` webhook payload.

### ステップ 2.3. RuboCop を実行する

これでうまくいきました。 You're cloning the repository and creating check runs using your CI server. Now you'll get into the nitty gritty details of the [RuboCop linter](https://rubocop.readthedocs.io/en/latest/basic_usage/#rubocop-as-a-code-style-checker) and [Checks API annotations](/v3/checks/runs/#create-a-check-run).

The following code runs RuboCop and saves the style code errors in JSON format. Add this code below the call to `clone_repository` you added in the [previous step](#step-22-cloning-the-repository) and above the code that updates the check run to complete.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

The code above runs RuboCop on all files in the repository's directory. The option `--format json` is a handy way to save a copy of the linting results in a machine-parsable format. See the [RuboCop docs](https://rubocop.readthedocs.io/en/latest/formatters/#json-formatter) for details and an example of the JSON format.

Because this code stores the RuboCop results in a `@report` variable, it can safely remove the checkout of the repository. This code also parses the JSON so you can easily access the keys and values in your GitHub App using the `@output` variable.

{% note %}

**Note:** The command used to remove the repository (`rm -rf`) cannot be undone. See [Step 2.7. Security tips](#step-27-security-tips) to learn how to check webhooks for injected malicious commands that could be used to remove a different directory than intended by your app. For example, if a bad actor sent a webhook with the repository name `./`, your app would remove the root directory. 😱 If for some reason you're _not_ using the method `verify_webhook_signature` (which is included in `template_server.rb`) to validate the sender of the webhook, make sure you check that the repository name is valid.

{% endnote %}

You can test that this code works and see the errors reported by RuboCop in your server's debug output. Start up the `template_server.rb` server again and create a new pull request in the repository where you're testing your app:

```shell
$ ruby template_server.rb
```

You should see the linting errors in the debug output, although they aren't printed with formatting. You can use a web tool like [JSON formatter](https://jsonformatter.org/) to format your JSON output like this formatted linting error output:

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

### ステップ 2.4. RuboCop のエラーを収集する

The `@output` variable contains the parsed JSON results of the RuboCop report. As shown above, the results contain a `summary` section that your code can use to quickly determine if there are any errors. The following code will set the check run conclusion to `success` when there are no reported errors. RuboCop reports errors for each file in the `files` array, so if there are errors, you'll need to extract some data from the file object.

The Checks API allows you to create annotations for specific lines of code. When you create or update a check run, you can add annotations. In this quickstart you are [updating the check run](/v3/checks/runs/#update-a-check-run) with annotations.

The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](/v3/checks/runs/#update-a-check-run) endpoint. For example, to create 105 annotations you'd need to call the [Update a check run](/v3/checks/runs/#update-a-check-run) endpoint three times. The first two requests would each have 50 annotations, and the third request would include the five remaining annotations. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run.

A check run expects annotations as an array of objects. Each annotation object must include the `path`, `start_line`, `end_line`, `annotation_level`, and `message`. RuboCop provides the `start_column` and `end_column` too, so you can include those optional parameters in the annotation. Annotations only support `start_column` and `end_column` on the same line. See the [`annotations` object](/v3/checks/runs/#annotations-object-1) reference documentation for details.

You'll extract the required information from RuboCop needed to create each annotation. Append the following code to the code you added in the [previous section](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /v3/checks/runs/#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

This code limits the total number of annotations to 50. But you can modify this code to update the check run for each batch of 50 annotations. The code above includes the variable `max_annotations` that sets the limit to 50, which is used in the loop that iterates through the offenses.

When the `offense_count` is zero, the CI test is a `success`. If there are errors, this code sets the conclusion to `neutral` in order to prevent strictly enforcing errors from code linters. But you can change the conclusion to `failure` if you would like to ensure that the check suite fails when there are linting errors.

When errors are reported, the code above iterates through the `files` array in the RuboCop report. For each file, it extracts the file path and sets the annotation level to `notice`. You could go even further and set specific warning levels for each type of [RuboCop Cop](https://rubocop.readthedocs.io/en/latest/cops/), but to keep things simpler in this quickstart, all errors are set to a level of `notice`.

This code also iterates through each error in the `offenses` array and collects the location of the offense and error message. After extracting the information needed, the code creates an annotation for each error and stores it in the `annotations` array. Because annotations only support start and end columns on the same line, `start_column` and `end_column` are only added to the `annotation` object if the start and end line values are the same.

This code doesn't yet create an annotation for the check run. You'll add that code in the next section.

### ステップ 2.5. CI テスト結果でチェック実行を更新する

Each check run from GitHub contains an `output` object that includes a `title`, `summary`, `text`, `annotations`, and `images`. The `summary` and `title` are the only required parameters for the `output`, but those alone don't offer much detail, so this quickstart adds `text` and `annotations` too. The code here doesn't add an image, but feel free to add one if you'd like!

For the `summary`, this example uses the summary information from RuboCop and adds some newlines (`\n`) to format the output. You can customize what you add to the `text` parameter, but this example sets the `text` parameter to the RuboCop version. To set the `summary` and `text`, append this code to the code you added in the [previous section](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Now you've got all the information you need to update your check run. In the [first half of this quickstart](#step-14-updating-a-check-run), you added this code to set the status of the check run to `success`:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Mark the check run as complete!
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.v3+json',
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: 'success',
    completed_at: Time.now.utc.iso8601
  }
)
```
{% else %}
``` ruby
# Mark the check run as complete!
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: 'success',
    completed_at: Time.now.utc.iso8601
  }
)
```
{% endif %}

You'll need to update that code to use the `conclusion` variable you set based on the RuboCop results (to `success` or `neutral`). You can update the code with the following:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Mark the check run as complete! And if there are warnings, share them.
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.v3+json',
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: conclusion,
    completed_at: Time.now.utc.iso8601,
    output: {
      title: 'Octo RuboCop',
      summary: summary,
      text: text,
      annotations: annotations
    },
    actions: [{
      label: 'Fix this',
      description: 'Automatically fix all linter notices.',
      identifier: 'fix_rubocop_notices'
    }]
  }
)
```
{% else %}
``` ruby
# Mark the check run as complete! And if there are warnings, share them.
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.antiope-preview+json',
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: conclusion,
    completed_at: Time.now.utc.iso8601,
    output: {
      title: 'Octo RuboCop',
      summary: summary,
      text: text,
      annotations: annotations
    },
    actions: [{
      label: 'Fix this',
      description: 'Automatically fix all linter notices.',
      identifier: 'fix_rubocop_notices'
    }]
  }
)
```
{% endif %}

Now that you're setting a conclusion based on the status of the CI test and you've added the output from the RuboCop results, you've created a CI test! Congratulations. 🙌

The code above also adds a feature to your CI server called [requested actions](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) via the `actions` object. {% if currentVersion == "free-pro-team@latest" %}(Note this is not related to [GitHub Actions](/actions).) {% endif %}Requested actions add a button in the **Checks** tab on GitHub that allows someone to request the check run to take additional action. The additional action is completely configurable by your app. For example, because RuboCop has a feature to automatically fix the errors it finds in Ruby code, your CI server can use a requested actions button to allow people to request automatic error fixes. When someone clicks the button, the app receives the `check_run` event with a `requested_action` action. Each requested action has an `identifier` that the app uses to determine which button was clicked.

The code above doesn't have RuboCop automatically fix errors yet. You'll add that in the next section. But first, take a look at the CI test that you just created by starting up the `template_server.rb` server again and creating a new pull request:

```shell
$ ruby template_server.rb
```

The annotations will show up in the **Checks** tab.

![Check run annotations in the checks tab](/assets/images/github-apps/github_apps_checks_annotations.png)

Notice the "Fix this" button that you created by adding a requested action.

![チェック実行のリクエストされたアクションのボタン](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

If the annotations are related to a file already included in the PR, the annotations will also show up in the **Files changed** tab.

![Check run annotations in the files changed tab](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

### ステップ 2.6. RuboCop のエラーを自動的に修正する

If you've made it this far, kudos! 👏 You've already created a CI test. In this section, you'll add one more feature that uses RuboCop to automatically fix the errors it finds. You already added the "Fix this" button in the [previous section](#step-25-updating-the-check-run-with-ci-test-results). Now you'll add the code to handle the `requested_action` check run event triggered when someone clicks the "Fix this" button.

The RuboCop tool [offers](https://rubocop.readthedocs.io/en/latest/basic_usage/#auto-correcting-offenses) the `--auto-correct` command-line option to automatically fix errors it finds. When you use the `--auto-correct` feature, the updates are applied to the local files on the server. You'll need to push the changes to GitHub after RuboCop does its magic.

To push to a repository, your app must have write permissions for "Repository contents." You set that permission back in [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) to **Read & write**, so you're all set.

In order to commit files, Git must know which [username](/articles/setting-your-username-in-git/) and [email](/articles/setting-your-commit-email-address-in-git/) to associate with the commit. Add two more environment variables in your `.env` file to store the name (`GITHUB_APP_USER_NAME`) and email (`GITHUB_APP_USER_EMAIL`) settings. Your name can be the name of your app and the email can be any email you'd like for this example. 例:

```
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Once you've updated your `.env` file with the name and email of the author and committer, you'll be ready to add code to read the environment variables and set the Git configuration. You'll add that code soon.

When someone clicks the "Fix this" button, your app receives the [check run webhook](/webhooks/event-payloads/#check_run) with the `requested_action` action type.

In [Step 1.4. Updating a check run](#step-14-updating-a-check-run) you updated the your `event_handler` to handle look for actions in the `check_run` event. You already have a case statement to handle the `created` and `rerequested` action types:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Add another `when` statement after the `rerequested` case to handle the `rerequested_action` event:

``` ruby
when 'requested_action'
  take_requested_action
```

This code calls a new method that will handle all `requested_action` events for your app. Add the following method to the helper methods section of your code:

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

The code above clones a repository just like the code you added in [Step 2.2. Cloning the repository](#step-22-cloning-the-repository). An `if` statement checks that the requested action's identifier matches the RuboCop button identifier (`fix_rubocop_notices`). When they match, the code clones the repository, sets the Git username and email, and runs RuboCop with the option `--auto-correct`. The `--auto-correct` option applies the changes to the local CI server files automatically.

The files are changed locally, but you'll still need to push them to GitHub. You'll use the handy `ruby-git` gem again to commit all of the files. Git has a single command that stages all modified or deleted files and commits them: `git commit -a`. To do the same thing using `ruby-git`, the code above uses the `commit_all` method. Then the code pushes the committed files to GitHub using the installation token, using the same authentication method as the Git `clone` command. Finally, it removes the repository directory to ensure the working directory is prepared for the next event.

これで完了です。 The code you have written now completes your Checks API CI server. 💪 Restart your `template_server.rb` server again and create a new pull request:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

This time, click the "Fix this" button to automatically fix the errors RuboCop found from the **Checks** tab.

In the **Commits** tab, you'll see a brand new commit by the username you set in your Git configuration. You may need to refresh your browser to see the update.

![A new commit to automatically fix Octo RuboCop notices](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Because a new commit was pushed to the repo, you'll see a new check suite for Octo RuboCop in the **Checks** tab. But this time there are no errors because RuboCop fixed them all. 🎉

![No check suite or check run errors](/assets/images/github-apps/github_apps_checks_api_success.png)

You can find the completed code for the app you just built in the `server.rb` file in the [Creating CI tests with the Checks API](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) repository.

### ステップ 2.7. セキュリティのヒント

The template GitHub App code already has a method to verify incoming webhook payloads to ensure they are from a trusted source. If you are not validating webhook payloads, you'll need to ensure that when repository names are included in the webhook payload, the webhook does not contain arbitrary commands that could be used maliciously. The code below validates that the repository name only contains Latin alphabetic characters, hyphens, and underscores. To provide you with a complete example, the complete `server.rb` code available in the [companion repository](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) for this quickstart includes both the method of validating incoming webhook payloads and this check to verify the repository name.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

### トラブルシューティング

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the {% data variables.product.prodname_support_forum_with_url %}.

* **Q:** My app isn't pushing code to GitHub. I don't see the fixes that RuboCop automatically makes!

    **A:** Make sure you have **Read & write** permissions for "Repository contents," and that you are cloning the repository with your installation token. See [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) for details.

* **Q:** I see an error in the `template_server.rb` debug output related to cloning my repository.

    **A:** If you see the following error, you haven't deleted the checkout of the repository in one or both of the `initiate_check_run` or `take_requested_action` methods:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:v1.9b2080277016f797074c4debd350745f4257f8dd@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compare your code to the `server.rb` file to ensure you have the same code in your `initiate_check_run` and `take_requested_action` methods.

* **Q:** New check runs are not showing up in the "Checks" tab on GitHub.

    **A:** Restart Smee and re-run your `template_server.rb` server.

* **Q:** I do not see the "Re-run all" button in the "Checks" tab on GitHub.

    **A:** Restart Smee and re-run your `template_server.rb` server.

### おわりに

After walking through this guide, you've learned the basics of using the Checks API to create a CI server! To review, you:

* Configured your server to receive Checks API events and create check runs.
* Used RuboCop to check code in repositories and create annotations for the errors.
* Implemented a requested action that automatically fixes linter errors.

### 次のステップ

Here are some ideas for what you can do next:

* Currently, the "Fix this" button is always displayed. Update the code you wrote to display the "Fix this" button only when RuboCop finds errors.
* If you'd prefer that RuboCop doesn't commit files directly to the head branch, you can update the code to [create a pull request](/v3/pulls/#create-a-pull-request) with a new branch based on the head branch.
