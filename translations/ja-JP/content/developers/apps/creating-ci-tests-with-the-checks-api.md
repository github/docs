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

このガイドでは、[Github App](/apps/) と [Checks API](/rest/reference/checks) について紹介します。Checks API は、テストを実行する継続的インテグレーション (CI) サーバーを構築するために使用します。

CI とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの発生が早くなり、開発者がエラーの原因を見つけようとしてデバッグする必要性も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 開発者がコードの記述にばかり時間をとられ、エラーのデバッグやマージコンフリクトの解決にかける時間が少ないときに威力を発揮します。 🙌

CI サーバーは、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コード網羅率、その他のチェックといった CI テストをリポジトリの新しいコードコミットに対して実行するコードをホストします。 CI サーバーは、ステージングサーバーや本番サーバーにコードを構築しデプロイすることも可能です。 GitHub App で作成できる CI テストのタイプの例については、GitHub Marketplace で入手できる[継続的インテグレーションアプリケーション](https://github.com/marketplace/category/continuous-integration)を確認してください。

{% data reusables.apps.app-ruby-guides %}

#### Checks API の概要

[Checks API](/rest/reference/checks) を使用すると、リポジトリでコミットされている各コードに対して自動的に実行される CI テストを設定できます。 Checks API は、プルリクエストの [**Checks**] タブにおいて、各チェックについての詳細情報をレポートします。 Checks API を使用すると、コードの特定の行に対して追加的な情報を含むアノテーションを作成できます。 アノテーションは [**Checks**] タブに表示されます。 プルリクエストの一部であるファイルに対してアノテーションを作成すると、そのアノテーションは [**Files changed**] タブにも表示されます。

_チェックスイート_とは、 _チェック実行_ (個々の CI テスト) をグループ化したものです。 チェックスイートにもチェック実行にも_ステータス_が含まれており、GitHub のプルリクエストで表示できます。 ステータスを使用して、コードコミットがエラーを発生させるタイミングを決定できます。 これらのステータスを[保護されたブランチ](/rest/reference/repos#branches)で使用すると、プルリクエストを早まってマージすることを防げます。 詳細は「[ステータスチェック必須の有効化](/articles/enabling-required-status-checks/)」を参照してください。

Checks API は、新しいコードがリポジトリにプッシュされるたびに、リポジトリにインストールされている全ての GitHub App に [`check_suite` webhook イベント](/webhooks/event-payloads/#check_suite)を送信します。 Checks API イベントの全てのアクションを受信するには、アプリケーションに `checks:write` 権限が必要です。 GitHub はデフォルトのフローを使ってリポジトリの新しいコードのコミットに `check_suite` イベントを自動的に作成しますが、[チェックスイートのためのリポジトリプリファレンスの更新](/rest/reference/checks#update-repository-preferences-for-check-suites)を行っても構いません。 デフォルトのフローは以下の通りです。

1. 誰かがリポジトリにコードをプッシュすると、GitHubは、`checks:write` 権限を持つ、リポジトリにインストールされている全ての GitHub Apps に `requested` のアクションと共に `check_suite` イベントを送信します。 このイベントにより、コードがプッシュされたことと、GitHub が新しいチェックスイートを自動的に作成したことがアプリケーションに通知されます。
1. アプリケーションがこのイベントを受信すると、アプリケーションはスイートに[チェック実行を追加](/rest/reference/checks#create-a-check-run)できます。
1. チェック実行には、コードの特定の行で表示される[アノテーション](/rest/reference/checks#annotations-object)を含めることができます。

**このガイドでは、次のこと行う方法について学びます。**

* パート 1: Checks API を使用して CI サーバー用のフレームワークをセットアップする。
  * Checks API イベントを受信するサーバーとして GitHub App を構成します。
  * 新たにプッシュされたコミットをリポジトリが受信した時に、CI テスト用の新しいチェック実行を作成します。
  * Re-run check runs when a user requests that action on GitHub.
* パート 2: 文法チェッカー CI テストを追加して、作成した CI サーバーフレームワークを基に構築する。
  * Update a check run with a `status`, `conclusion`, and `output` details.
  * Create annotations on lines of code that GitHub displays in the **Checks** and **Files Changed** tab of a pull request.
  * Automatically fix linter recommendations by exposing a "Fix this" button in the **Checks** tab of the pull request.

このクイックスタートを完了したときに Checks API CI サーバーがどのように動作するかを理解するには、以下のデモをご覧ください。

![Demo of Checks API CI sever quickstart](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

### 必要な環境

以下の作業に取りかかる前に、[Github Apps](/apps/)、[webhook](/webhooks)、[Checks API](/rest/reference/checks) を使い慣れていない場合は、ある程度慣れておくとよいでしょう。 [REST API ドキュメント](/rest)には、さらに多くの API が掲載されています。 Checks API は [GraphQL](/graphql) でも使用できますが、このクイックスタートでは REST に焦点を当てます。 詳細については、GraphQL [Checks Suite](/graphql/reference/objects#checksuite) および [Check Run](/graphql/reference/objects#checkrun) オブジェクトを参照してください。

[Ruby プログラミング言語](https://www.ruby-lang.org/en/)、[Smee](https://smee.io/) webhook ペイロード配信サービス、GitHub REST API 用の [Octokit.rb Ruby ライブラリ](http://octokit.github.io/octokit.rb/)、および [Sinatra ウェブフレームワーク](http://sinatrarb.com/) を使用して、Checks API CI サーバーアプリケーションを作成します。

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

このパートでは、`check_suite` webhook イベントを受信するために必要なコードを追加し、チェック実行を作成して更新します。 また、GitHub でチェックが再リクエストされた場合にチェック実行を作成する方法についても学びます。 このセクションの最後では、GitHub プルリクエストで作成したチェック実行を表示できるようになります。

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
  # /rest/reference/checks#create-a-check-run
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
  # /rest/reference/checks#create-a-check-run
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

このコードは [HTTP `POST` メソッド](http://octokit.github.io/octokit.rb/Octokit/Connection.html#post-instance_method)を使用して、「[チェック実行の作成](/rest/reference/checks#create-a-check-run)」エンドポイントを呼び出します。 このメソッドは、エンドポイントの URL とメソッドの入力パラメータという 2 つのパラメータを取ります。

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
  # /rest/reference/checks#update-a-check-run
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
  # /rest/reference/checks#update-a-check-run
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

上記のコードは、ジェネリックな [`patch` HTTP method](http://octokit.github.io/octokit.rb/Octokit/Connection.html#patch-instance_method)メソッドを使用して「[チェック実行を更新する](/rest/reference/checks#update-a-check-run)」API エンドポイントを呼び出し、既に作成したチェック実行を更新します。

このコードがしていることを説明しましょう。 まず、チェック実行のステータスを `in_progress` に更新し、`started_at` の時刻を現在の時刻に設定します。 このクイックスタートの[パート 2](#part-2-creating-the-octo-rubocop-ci-test)では、実際の CI テストを開始するコードを `***** RUN A CI TEST *****` の下に追加します。 今はこのセクションをプレースホルダーとして残しておきましょう。そうすると、続くコードが CI のプロセスを成功させ、すべてのテストに合格したことをシミュレートすることになります。 最後に、コードはチェック実行のステータスを再び `completed` に更新します。

You'll notice in the "[Update a check run](/rest/reference/checks#update-a-check-run)" docs that when you provide a status of `completed`, the `conclusion` and `completed_at` parameters are required. `conclusion` はチェック実行の結果を要約するもので、`success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` のいずれかになります。 この結果 (conclusion) は `success` に、`completed_at` の時刻は現在の時刻に、ステータスは `completed` に設定します。

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

RuboCop がチェックするため、特定のファイルまたはディレクトリ全体を渡すことができます。 このクイックスタートでは、ディレクトリ全体で RuboCop を実行します。 RuboCop がチェックするのは Ruby のコードのみなので、エラーが含まれる Ruby ファイルをリポジトリ内に最低 1 つ置くとよいでしょう。 以下に示すサンプルのファイルには、いくつかのエラーが含まれています。 このサンプルの Ruby ファイルを、アプリケーションがインストールされているリポジトリに追加します (`myfile.rb` などのように、ファイル名には `.rb` の拡張子を必ず付けてください)。

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

RuboCop はコマンドラインユーティリティとして使用できます。 これはつまり、RuboCop がファイルを解析するためには、GitHub App が CI サーバー上のリポジトリのローカルコピーをクローンする必要があるということです。 Ruby アプリケーションで Git の操作を実行するには、[ruby-git](https://github.com/ruby-git/ruby-git) gem を使用できます。

`building-a-checks-api-ci-server` リポジトリの `Gemfile` には既に ruby-git gem が含まれており、[必要な環境のステップ](#prerequisites)で `bundle install` を実行した時にインストール済みです。 gem を使用するには、`template_server.rb` ファイルの先頭に次のコードを追加します。

``` ruby
require 'git'
```

リポジトリをクローンするには、アプリケーションに「リポジトリコンテンツ」の読み取り権限が必要です。 このクイックスタートでは、後ほどコンテンツを GitHub にプッシュする必要がありますが、そのためには書き込み権限が必要です。 先に進んでアプリケーションの [Repository contents] の権限を [**Read & write**] に今すぐ変更してください。そうすれば、後で再び変更する必要がなくなります。 アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリケーションの設定ページ](https://github.com/settings/apps)からアプリケーションを選択肢、サイドバーの [**Permissions & Webhooks**] をクリックします。
1. [Permissions] セクションで [Repository contents] を見つけて、隣にある [Access] ドロップダウンで [**Read & write**] を選択します。
{% data reusables.apps.accept_new_permissions_steps %}

GitHub App の権限を用いてリポジトリをクローンするには、以下の例で示すアプリケーションのインストールトークン (`x-access-token:<token>`) を使用できます。

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

上記のコードは、HTTP 経由でリポジトリをクローンします。 コードには、リポジトリの所有者 (ユーザまたは Organization) およびリポジトリ名を含む、リポジトリのフルネームを入力する必要があります。 たとえば、[octocat Hello-World](https://github.com/octocat/Hello-World) リポジトリのフルネームは `octocat/hello-world` です。

アプリケーションがリポジトリをクローンした後は、直近のコード変更をプルし、特定の Git ref をチェックアウトする必要があります。 これら全てを行うコードは、独自のメソッドにするとよいでしょう。 メソッドがこれらの操作を実行するには、リポジトリの名前とフルネーム、チェックアウトする ref が必要です。 ref にはコミット SHA、ブランチ、タグ名を指定できます。 以下の新たなメソッドを `template_server.rb` のヘルパー メソッド セクションに追加します。

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

上記のコードでは、`ruby-git` gem を使用して、アプリケーションのインストールトークンを使用するリポジトリをクローンします。 このコードは、`template_server.rb` と同じディレクトリ内のコードをクローンします。 リポジトリで Git コマンドを実行するには、コードをリポジトリのディレクトリに変更する必要があります。 ディレクトリを変更する前に、コードはカレントワーキングディレクトリを変数 (`pwd`) に保存して、戻るべき場所を記憶してから、`clone_repository` メソッドを終了します。

このコードは、リポジトリのディレクトリから直近の変更をフェッチしてマージし (`@git.pull`)、ref をチェックアウトし (`@git.checkout(ref)`)、それから元のワーキングディレクトリに戻ります (`pwd`)。

さて、これでリポジトリをクローンし、ref をチェックアウトするメソッドができました。 次に、必要な入力パラメータを取得するコードを追加し、新しい `clone_repository` メソッドを呼び出す必要があります。 `initiate_check_run` ヘルパー メソッドの、`***** RUN A CI TEST *****` というコメントの下に、以下のコードを追加します。

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

上記のコードは、リポジトリのフルネームとコミットのヘッド SHA を `check_run` webhook ペイロードから取得します。

### ステップ 2.3. RuboCop を実行する

これでうまくいきました。 You're cloning the repository and creating check runs using your CI server. それではいよいよ [RuboCop 文法チェッカー](https://rubocop.readthedocs.io/en/latest/basic_usage/#rubocop-as-a-code-style-checker) と [Checks API アノテーション](/rest/reference/checks#create-a-check-run)の核心に迫ります。

次のコードは、RuboCop を実行し、スタイル コード エラーを JSON フォーマットで保存します。 Add this code below the call to `clone_repository` you added in the [previous step](#step-22-cloning-the-repository) and above the code that updates the check run to complete.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

上記のコードは、リポジトリのディレクトリにある全てのファイルで RuboCop を実行します。 `--format json` のオプションは、文法チェックの結果のコピーをコンピューターで読みとることができるフォーマットで保存する便利な方法です。 JSON フォーマットの詳細および例については、[RuboCop ドキュメント](https://rubocop.readthedocs.io/en/latest/formatters/#json-formatter)を参照してください。

このコードは RuboCop の結果を `@report` 変数に格納するため、リポジトリのチェックアウトを安全に削除できます。 また、このコードは JSON も解析するため、`@output` 変数を使用して GitHub App のキーと変数に簡単にアクセスできます。

{% note %}

**注釈:** リポジトリを削除するコマンド (`rm -rf`) を使用すると、元に戻すことはできません。 [ステップ 2.7. セキュリティのヒント](#step-27-security-tips)で、webhook を調べて、意図したものとは別のディレクトリを削除するためアプリケーションが使用する可能性のある、インジェクションされた悪意あるコマンドがないかを確認する方法について学びます。 例えば、悪意のある人が `./` というリポジトリ名の webhook を送信した場合、アプリケーションはルートディレクトリを削除するかもしれません。 😱 もし、何らかの理由で webhook の送信者を検証するメソッド `verify_webhook_signature` (`template_server.rb` に含まれています) を使用_しない_場合、リポジトリ名が有効であることを必ず確認するようにしてください。

{% endnote %}

このコードが動作することをテストし、サーバーのデバッグ出力で RuboCop により報告されたエラーを確認できます。 `template_server.rb` サーバーを再起動し、以下のコマンドで、アプリケーションをテストする場所のリポジトリに新しいプルリクエストを作成します。

```shell
$ ruby template_server.rb
```

デバッグ出力に文法エラーが表示されているはずです。ただし、出力は整形されていません。 [JSON フォーマッター](https://jsonformatter.org/)のような Web ツールを使用すると、JSON 出力の文法エラーの出力を以下のように整形できます。

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

`@output` 変数には、RuboCop レポートの解析済み JSON の結果が含まれています。 上記で示す通り、結果には `summary` セクションが含まれており、コードでエラーがあるかどうかを迅速に判断するために使用できます。 以下のコードは、報告されたエラーがない場合に、チェック実行の結果を `success` に設定します。 RuboCop は、`files` 配列内にある各ファイルについてエラーを報告します。エラーがある場合、ファイル オブジェクトからデータを抽出する必要があります。

Checks API により、コードの特定の行に対してアノテーションを作成することができます。 チェック実行を作成または更新する際に、アノテーションを追加できます。 このクイックスタートでは、アノテーションを付けて[チェック実行を更新](/rest/reference/checks#update-a-check-run)します。

Checks API では、アノテーションの数は API の 1 リクエストあたり最大 50 に制限されています。 51 以上のアノテーションを作成するには、[チェック実行を更新する](/rest/reference/checks#update-a-check-run)エンドポイントに複数回のリクエストを行う必要があります。 たとえば、105 のアノテーションを作成するには、[チェック実行を更新する](/rest/reference/checks#update-a-check-run)エンドポイントを 3 回呼び出す必要があります。 始めの 2 回のリクエストでそれぞれ 50 個のアノテーションが作成され、3 回目のリクエストで残り 5 つのアノテーションが作成されます。 チェック実行を更新するたびに、アノテーションは既存のチェック実行にあるアノテーションのリストに追加されます。

チェック実行は、アノテーションをオブジェクトの配列として受け取ります。 アノテーションの各オブジェクトには、`path`、`start_line`、 `end_line`、`annotation_level`、`message` を含める必要があります。 RuboCop では `start_column` および `end_column` も提供しており、これらのオプションのパラメータをアノテーションに含めることもできます。 アノテーションは、`start_column` と `end_column` を同一の行においてのみサポートしています。 詳細については [`annotations` オブジェクト](/rest/reference/checks#annotations-object-1)のリファレンスドキュメントを参照してください。

各アノテーションを作成するために必要な RuboCop から、必須の情報を抽出します。 [前のセクション](#step-23-running-rubocop)で追加したコードに、次のコードを追加します。

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
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

このコードでは、アノテーションの合計数を 50 に制限しています。 このコードを、50 のアノテーションごとにチェック実行を更新するよう変更することも可能です。 上記のコードには、制限 を 50 に設定している変数 `max_annotations` が含まれ、これは違反の部分を反復処理するループで使用されています。

`offense_count` が 0 の場合、CI テストは `success` となります。 エラーがある場合、このコードは結果を `neutral` に設定します。これは、コードの文法チェッカーによるエラーを厳格に強制することを防ぐためです。 ただし、文法エラーがある場合にチェックスイートが失敗になるようにしたい場合は、結果を `failure` に変更できます。

エラーが報告されると、上記のコードは ReboCop レポートの `files` 配列を反復処理します。 コードは各ファイルにおいてファイルパスを抽出し、アノテーションレベルを `notice` に設定します。 さらに細かく、[RuboCop Cop](https://rubocop.readthedocs.io/en/latest/cops/) の各タイプに特定の警告レベルを設定することもできますが、このクイックスタートでは簡単さを優先し、すべてのエラーを `notice` のレベルに設定します。

このコードはまた、`offenses` 配列の各エラーを反復処理し、違反の場所とエラー メッセージを収集します。 必要な情報を抽出後、コードは各エラーに対してアノテーションを作成し、それを `annotations` 配列に格納します。 アノテーションは同一行の開始列と終了列のみをサポートしているため、開始行と終了行の値が同じである場合にのみ `annotation` オブジェクトに `start_column` と `end_column` が追加されます。

このコードはまだチェック実行のアノテーションを作成しません。 それを作成するコードは、次のセクションで追加します。

### ステップ 2.5. CI テスト結果でチェック実行を更新する

GitHub から実行される各チェックには、`output` オブジェクトが含まれ、そのオブジェクトには `title`、`summary`、`text`、`annotations`、`images` が含まれます。 `output` に必須のパラメータは `summary` と `title` のみですが、これだけでは詳細情報が得られないので、このクイックスタートでは `text` と `annotations` も追加します。 ここに挙げるコードでは画像は追加しませんが、追加したければぜひどうぞ。

この例では、`summary` は RuboCop からのサマリー情報を利用し、出力を整形するためいくつかの改行 (`\n`) を追加します。 `text` パラメータに何を追加するかはカスタマイズできますが、この例では `text` パラメータを RuboCop のバージョンに設定しています。 `summary` と `text` を設定するには、[前のセクション](#step-24-collecting-rubocop-errors)で追加したコードに、以下のコードを付け加えます。

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

さて、これでチェック実行を更新するために必要な情報がすべて揃いました。 [このクイックスタートの前半](#step-14-updating-a-check-run)では、このコードを追加して、チェック実行のステータスを `success` に設定しました。

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

RuboCop の結果に基づいて (`success` または `neutral` に) 設定した `conclusion` 変数を使用するよう、このコードを更新する必要があります。 コードは以下のようにして更新できます。

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

さて、これで CI テストのステータスに基づいて結論を設定し、RuboCop の結果からの出力を追加しました。あなたは CI テストを作成したのです。 おめでとうございます。 🙌

また、上記のコードは、`actions` オブジェクトを介して CI サーバーに[リクエストされたアクション](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/)という機能も追加しています。 {% if currentVersion == "free-pro-team@latest" %}(Note this is not related to [GitHub Actions](/actions).) {% endif %}リクエストされたアクションは、追加のアクションを実行するためにチェック実行をリクエストできるボタンを GitHub の [**Checks**] タブに追加します。 The additional action is completely configurable by your app. For example, because RuboCop has a feature to automatically fix the errors it finds in Ruby code, your CI server can use a requested actions button to allow people to request automatic error fixes. When someone clicks the button, the app receives the `check_run` event with a `requested_action` action. Each requested action has an `identifier` that the app uses to determine which button was clicked.

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

* **Q:** アプリケーションが GitHub にコードをプッシュしません。 I don't see the fixes that RuboCop automatically makes!

    **A:** Make sure you have **Read & write** permissions for "Repository contents," and that you are cloning the repository with your installation token. [ステップ 2.2. Cloning the repository](#step-22-cloning-the-repository) for details.

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
* If you'd prefer that RuboCop doesn't commit files directly to the head branch, you can update the code to [create a pull request](/rest/reference/pulls#create-a-pull-request) with a new branch based on the head branch.
