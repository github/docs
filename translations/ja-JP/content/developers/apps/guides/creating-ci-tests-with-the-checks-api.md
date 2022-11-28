---
title: Checks API で CI テストを作成する
intro: '{% data variables.product.prodname_github_app %} と Checks API を使用して、テストを実行するための継続的インテグレーションサーバーを構築します。'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179678'
---
## はじめに

このガイドでは、[GitHub App](/apps/) と [Checks API](/rest/reference/checks) について説明します。これらを使って、テストを実行する継続的インテグレーション (CI) サーバーを構築します。

CI とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの発生が早くなり、開発者がエラーの原因を見つけようとしてデバッグする必要性も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 コードの記述により多くの時間をかけられるようになり、エラーのデバッグやマージコンフリクトの解決にかける時間が減るので、これは開発者にとって素晴らしいやり方です。 🙌

CI サーバーは、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コード網羅率、その他のチェックといった CI テストをリポジトリの新しいコードコミットに対して実行するコードをホストします。 CI サーバーは、ステージングサーバーや本番サーバーにコードを構築しデプロイすることも可能です。 GitHub App で作ることができる CI テストの種類の例については、GitHub Marketplace で手に入る[継続的インテグレーション アプリ](https://github.com/marketplace/category/continuous-integration)を確認してください。

{% data reusables.apps.app-ruby-guides %}

### Checks API の概要

[Checks API](/rest/reference/checks) を使うと、リポジトリでコードがコミットされるたびに自動的に実行される CI テストを設定できます。 Checks API により、GitHub での各チェックについての詳細情報が、pull request の **[チェック]** タブで報告されます。Checks API を使うと、コードの特定の行に対して、追加情報を含むアノテーションを作成できます。 アノテーションは **[チェック]** タブに表示されます。pull request の一部であるファイルに対してアノテーションを作成すると、そのアノテーションは **[変更されたファイル]** タブにも表示されます。

_チェック スイート_ は、_チェック実行_ のグループ (個々の CI テスト) です。 スイートと実行の両方に、GitHubのプル要求に表示される _状態_ が含まれています。 ステータスを使用して、コードコミットがエラーを発生させるタイミングを決定できます。 これらのステータスを[保護されたブランチ](/rest/reference/repos#branches)で使うと、pull request の早すぎるマージを防ぐことができます。 詳しくは、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)」をご覧ください。

Checks API は、新しいコードがリポジトリにプッシュされるたびに、リポジトリにインストールされているすべての GitHub App に [`check_suite` Webhook イベント](/webhooks/event-payloads/#check_suite)を送信します。 Checks API イベントのすべてのアクションを受信するには、アプリに `checks:write` アクセス許可が必要です。 GitHub は既定のフローを使ってリポジトリでの新しいコードのコミットに対する `check_suite` イベントを自動的に作成しますが、必要に応じて[チェック スイートに関するリポジトリ設定を更新](/rest/reference/checks#update-repository-preferences-for-check-suites)できます。 デフォルトのフローは以下の通りです。

1. リポジトリにコードがプッシュされるたびに、GitHub は、リポジトリにインストールされていて `checks:write` アクセス許可を持つすべての GitHub App に、`requested` アクションを含む `check_suite` イベントを送信します。 このイベントにより、コードがプッシュされたことと、GitHub が新しいチェックスイートを自動的に作成したことがアプリケーションに通知されます。
1. アプリでは、このイベントを受信したら、そのスイートに[チェック実行を追加](/rest/reference/checks#create-a-check-run)できます。
1. チェック実行には、特定のコード行に表示される[アノテーション](/rest/reference/checks#annotations-object)を含めることができます。

**このガイドでは、次の方法について説明します。**

* パート 1: Checks API を使用して CI サーバー用のフレームワークをセットアップする。
  * Checks API イベントを受信するサーバーとして GitHub App を構成します。
  * 新たにプッシュされたコミットをリポジトリが受信した時に、CI テスト用の新しいチェック実行を作成します。
  * ユーザが GitHub でチェック実行のアクションをリクエストした時に、チェック実行を再実行します。
* パート 2: 文法チェッカー CI テストを追加して、作成した CI サーバーフレームワークを基に構築する。
  * `status`、`conclusion`、`output` の詳細を使って、チェック実行を更新します。
  * pull request の **[チェック]** および **[変更されたファイル]** タブに表示されるコード行のアノテーションを作成します。
  * pull request の **[チェック]** タブに [これを修正する] ボタンを表示して、リンターによる推奨事項を自動的に修正します。

このクイックスタートを完了したときに Checks API CI サーバーがどのように動作するかを理解するには、以下のデモをご覧ください。

![Checks API CI サーバークイックスタートのデモ](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## 前提条件

[GitHub アプリ](/apps/)、[Webhook](/webhooks)、[Checks API](/rest/reference/checks) のことをまだ理解していない場合は、作業を始める前に理解しておいてください。 [REST API ドキュメント](/rest)には、さらに API が記載されています。Checks API は [GraphQL](/graphql) でも使用できますが、このクイックスタートでは REST に焦点を当てます。 詳しくは、GraphQL の [Checks Suite](/graphql/reference/objects#checksuite) および [Check Run](/graphql/reference/objects#checkrun) オブジェクトをご覧ください。

Checks API CI サーバー アプリを作るには、[Ruby プログラミング言語](https://www.ruby-lang.org/en/)、[Smee](https://smee.io/) Webhook ペイロード配信サービス、GitHub REST API 用の [Octokit.rb Ruby ライブラリ](http://octokit.github.io/octokit.rb/)、[Sinatra Web フレームワーク](http://sinatrarb.com/)を使います。

このプロジェクトを完了するために、これらのツールや概念のエキスパートである必要はありません。 このガイドでは、必要なステップを順番に説明していきます。 Checks API で CI テストを作成する前に、以下を行う必要があります。

1. 「[Checks API で CI テストを作成する](https://github.com/github-developer/creating-ci-tests-with-the-checks-api)」のリポジトリをクローンします。
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  ディレクトリの中には、このクイックスタートで使うテンプレート コードを含む `template_server.rb` ファイルと、完成したプロジェクト コードを含む `server.rb` ファイルがあります。

1. [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)に関するクイックスタートの手順に従い、アプリ サーバーを構成して実行します。 **注:** [GitHub App のテンプレート リポジトリをクローンする](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites)のではなく、このクイックスタートの前のステップでクローンしたリポジトリにある `template_server.rb` ファイルを使います。

  GitHub App クイックスタート ガイドを以前に完了している場合は、必ず _新しい_ GitHub App を登録し、このクイックスタートで使う新しい Smee チャネルを開始してください。

  テンプレート GitHub App の設定で問題が発生する場合は、「[トラブルシューティング](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting)」セクションをご覧ください。

## 第 1 部 Checks API インターフェースを作成する

このパートでは、`check_suite` Webhook イベントを受信してチェック実行を作成および更新するために必要なコードを追加します。 また、GitHub でチェックが再リクエストされた場合にチェック実行を作成する方法についても学びます。 このセクションの最後では、GitHub プルリクエストで作成したチェック実行を表示できるようになります。

このセクションでは、作成したチェック実行はコードでチェックを実行しません。 その機能は、「[パート 2: Octo RuboCop CI テストを作成する](#part-2-creating-the-octo-rubocop-ci-test)」で追加します。

ローカルサーバーにwebhook ペイロードを転送するよう Smee チャンネルが構成されているでしょうか。 サーバーは実行中で、登録済みかつテストリポジトリにインストールした GitHub App に接続している必要があります。 [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)に関する記事の手順を完了していない場合は、続ける前にそれを行う必要があります。

それでは作業を始めましょう。 パート 1 では、以下のステップを完了させます。

1. [アプリのアクセス許可を更新する](#step-11-updating-app-permissions)
1. [イベントの処理を追加する](#step-12-adding-event-handling)
1. [チェック実行を作成する](#step-13-creating-a-check-run)
1. [チェック実行を更新する](#step-14-updating-a-check-run)

## ステップ 1.1. アプリケーションの権限を更新する

[最初にアプリを登録](#prerequisites)したときは、既定のアクセス許可を受け入れました。これは、アプリがほとんどのリソースにアクセスできないことを意味します。 この例においては、アプリケーションにはチェックを読み取りおよび書き込みする権限が必要となります。

アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリの設定ページ](https://github.com/settings/apps)でアプリを選び、サイドバーの **[アクセス許可と Webhook]** をクリックします。
1. [アクセス許可] セクションで [チェック] を探し、その横にある [アクセス] ドロップダウンで **[読み取りと書き込み]** を選びます。
1. [イベントへのサブスクライブ] セクションで、 **[チェック スイート]** と **[チェック実行]** を選んで、これらのイベントにサブスクライブします。
{% data reusables.apps.accept_new_permissions_steps %}

すばらしい。 アプリケーションは必要なタスクを実行する権限を所有しています。 これでイベントを処理するコードを追加できるようになりました。

## ステップ 1.2. イベントの処理を追加する

アプリが **チェック スイート** と **チェック実行** イベントにサブスクライブされたので、[`check_suite`](/webhooks/event-payloads/#check_suite) および [`check_run`](/webhooks/event-payloads/#check_run) Webhook の受信が始まります。 GitHub は、Webhook ペイロードを `POST` 要求として送信します。 Smee Webhook ペイロードを `http://localhost/event_handler:3000` に転送したため、サーバーは `post '/event_handler'` ルートで `POST` 要求のペイロードを受信します。

空の `post '/event_handler'` ルートは、「[前提条件](#prerequisites)」セクションでダウンロードした `template_server.rb` ファイルに既に含まれています。 空のルートは次のようになっています。

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

以下のコードを追加することで、このルートを使って `check_suite` イベントを処理します。

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

GitHub が送信する全てのイベントには、`HTTP_X_GITHUB_EVENT` という要求ヘッダーが含まれており、これは `POST` 要求でのイベントの種類を示します。 ここで関心のあるイベントの種類は `check_suite` だけであり、これは新しいチェック スイートが作成されると出力されます。 各イベントには、イベントをトリガーしたアクションの種類を示す追加の `action` フィールドがあります。 `check_suite` の場合、`action` フィールドは `requested`、`rerequested`、または `completed` になります。

`requested` アクションはリポジトリにコードがプッシュされるたびにチェック実行を要求し、`rerequested` アクションはリポジトリに既に存在するコードのチェックの再実行を要求します。 `requested` と `rerequested` のどちらのアクションでもチェック実行を作成する必要があるため、`create_check_run` というヘルパーを呼び出します。 では、このメソッドを書いてみましょう。

## ステップ 1.3. チェック実行を作成する

他のルートでも使う場合に備えて、この新しいメソッドを [Sinatra ヘルパー](https://github.com/sinatra/sinatra#helpers)として追加します。 `helpers do` の下に、次の `create_check_run` メソッドを追加します。

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

このコードは、[create_check_run メソッド](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method)を使って "[チェック実行を作成する](/rest/reference/checks#create-a-check-run)" エンドポイントを呼び出します。

チェック実行を作成するために必要な入力パラメーターは、`name` と `head_sha` の 2 つのみです。 このクイックスタートでは、後で [RuboCop](https://rubocop.readthedocs.io/en/latest/) を使って CI テストを実装します。そのため、ここでは "Octo RuboCop" という名前を使いますが、チェック実行には任意の名前を選べます。

ここでは基本的な機能を実行するため必要なパラメータのみを指定していますが、チェック実行について必要な情報を収集するため、後でチェック実行を更新することになります。 既定では、`status` は `queued` に設定されます。

GitHub によって特定のコミット SHA に対するチェック実行が作成されるため、`head_sha` は必須パラメーターです。 コミット SHA は、webhook ペイロードで確認できます。 今は `check_suite` イベントのためのチェック実行だけを作成していますが、`head_sha` はイベント ペイロードの `check_suite` オブジェクトと `check_run` オブジェクトの両方に含まれることを覚えておいてください。

上のコードでは、`if/else` ステートメントのように機能する[三項演算子](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if)を使って、ペイロードに `check_run` オブジェクトが含まれるかどうかを調べています。 そうである場合は `check_run` オブジェクトから `head_sha` を読み取り、そうでない場合は `check_suite` オブジェクトから読み取ります。

このコードをテストするには、サーバーをターミナルから再起動します。

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

さて、それではアプリケーションをインストールしたリポジトリにあるプルリクエストを開いてください。 アプリケーションは応答し、プルリクエストのチェック実行を作成するはずです。 **[チェック]** タブをクリックすると、次のような内容が表示されます。

![キューに入ったチェック実行](/assets/images/github-apps/github_apps_queued_check_run.png)

[チェック] タブに他のアプリが表示される場合は、チェックに対する **読み取りと書き込み** アクセス権を持ち、**チェック スイート** および **チェック実行** イベントにサブスクライブしている他のアプリが、リポジトリにインストールされていることを意味します。

すばらしい。 ここまでで、GitHub にチェック実行を作成するよう指示しました。 黄色のアイコンの横で、チェック実行のステータスが `queued` に設定されていることを確認できます。 次は、GitHub がチェック実行を作成し、ステータスを更新するのを待てばよいでしょう。

## ステップ 1.4. チェック実行を更新する

`create_check_run` メソッドは実行すると、GitHub に新しいチェック実行の作成を要求します。 GitHub でチェック実行の作成が完了すると、`created` アクションを含む `check_run` Webhook イベントを受け取ります。 このイベントは、チェックの実行を開始する合図です。

`created` アクションを待つように、イベント ハンドラーを更新します。 イベント ハンドラーを更新するときに、`rerequested` アクションに対する条件を追加できます。 [再実行] ボタンをクリックして GitHub 上で単一のテストを再実行すると、GitHub からアプリに `rerequested` チェック実行イベントが送信されます。 チェック実行が `rerequested` の場合は、すべてのプロセスを開始してから、新しいチェック実行を作成します。

`post '/event_handler'` ルートに `check_run` イベントの条件を含めるには、`case request.env['HTTP_X_GITHUB_EVENT']` の下に次のコードを追加します。

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

GitHub は `created` チェック実行に関するすべてのイベントを、リポジトリにインストールされていて必要なチェック アクセス許可を持つすべてのアプリに送信します。 これはつまり、あなたのアプリケーションが他のアプリケーションにより作成されたチェック実行を受信するということです。 `created` チェック実行は、チェックの実行を要求されているアプリのみに GitHub が送信する `requested` や `rerequested` チェック スイートとは少し違います。 上記のコードは、チェック実行のアプリケーション ID を待ち受けます。 リポジトリの他のアプリケーションに対するチェック実行はすべて遮断されます。

次に、`initiate_check_run` メソッドを作成します。そこでは、チェック実行のステータスを更新して、CI テストの開始を準備します。

このセクションでは、CI テストはまだ開始しませんが、チェック実行のステータスを `queued` から `pending` に更新し、さらに `pending` から `completed` に更新する手順を調べることで、チェック実行のフロー全体を確認します。 「[パート 2: Octo RuboCop CI テストを作成する](#part-2-creating-the-octo-rubocop-ci-test)」で、CI テストを実際に実行するコードを追加します。

`initiate_check_run` メソッドを作成し、チェック実行のステータスを更新しましょう。 以下のコードを helpers セクションに追加します。

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

上のコードでは、[`update_check_run` Octokit メソッド](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method)を使って "[チェック実行を更新する](/rest/reference/checks#update-a-check-run)" API エンドポイントを呼び出し、既に作成したチェック実行を更新しています。

このコードがしていることを説明しましょう。 まず、チェック実行のステータスを `in_progress` に更新し、`started_at` の日時を現在の日時に暗黙的に設定します。 このクイックスタートの「[パート 2](#part-2-creating-the-octo-rubocop-ci-test)」では、実際の CI テストを開始するコードを `***** RUN A CI TEST *****` の下に追加します。 今はこのセクションをプレースホルダーとして残しておきましょう。そうすると、続くコードが CI のプロセスを成功させ、すべてのテストに合格したことをシミュレートすることになります。 最後に、コードでチェック実行のステータスを再び `completed` に更新します。

「[チェック実行を更新する](/rest/reference/checks#update-a-check-run)」のドキュメントを見ると、`completed` ステータスを指定するときは、`conclusion` と `completed_at` パラメーターが必須であることがわかります。 `conclusion` はチェック実行の結果の要約であり、`success`、`failure`、`neutral`、`cancelled`、`timed_out`、または `action_required` を指定できます。 conclusion は `success` に、`completed_at` の日時は現在の日時に、ステータスは `completed` に設定します。

チェックが行っていることについてより詳しく指定することもできますが、それは次のセクションで行うことにします。 `template_server.rb` を実行し直して、このコードをもう一度テストしてみましょう。

```shell
$ ruby template_server.rb
```

開いている pull request に移動し、 **[チェック]** タブをクリックします。左上隅にある [すべて再実行] ボタンをクリックします。 チェック実行が `pending` から `in_progress` に変わり、`success` で終わることを確認できるはずです。

![完了したチェック実行](/assets/images/github-apps/github_apps_complete_check_run.png)

## 第 2 部 Octo RuboCop CI テストを作成する

[RuboCop](https://rubocop.readthedocs.io/en/latest/) は Ruby コードのリンターおよびフォーマッタです。 Ruby のコードが「[Ruby スタイル ガイド](https://github.com/rubocop-hq/ruby-style-guide)」に準拠していることをチェックします。 RuboCop の主な機能は、以下の 3 つです。

* コードのスタイルを確認する文法チェック
* コードのフォーマット
* `ruby -w` を使って Ruby のネイティブ リンティング機能を置き換える

さて、Checks API を受信し、チェック実行を作成するために作ったインターフェースができあがったところで、今度は CI テストを実装するチェック実行を作成しましょう。

あなたのアプリケーションは CI サーバー上の RuboCop で実行され、結果を RuboCop が GitHub に報告するチェック実行 (ここでは CI テスト) を作成します。

Checks API を使用すると、ステータス、画像、要約、アノテーション、リクエストされたアクションなどの、各チェック実行の詳細情報を報告できます。

アノテーションとは、リポジトリのコードの特定の行についての情報です。 アノテーションを使用すると、追加情報を表示したいコードの部分を細かく指定して、それを視覚化できます。 この情報は、たとえばコメント、エラー、警告など何でも構いません。 このクイックスタートでは、RuboCop のエラーを視覚化するためにアノテーションを使用します。

要求されたアクションを利用するため、アプリ開発者は pull request の **[チェック]** タブにボタンを作成できます。 これらのボタンをクリックすると、クリックから GitHub アプリに `requested_action` `check_run` イベントが送信されます。 アプリケーションが実行するアクションは、アプリケーション開発者が自由に設定できます。 このクイックスタートでは、RuboCop が見つけたエラーを修正するようユーザがリクエストするためのボタンを追加する方法について説明します。 RuboCop はコマンド ライン オプションを使ったエラーの自動修正をサポートしており、ここでは `requested_action` を構成してこのオプションを利用します。

それでは作業を始めましょう。 このセクションでは、以下のステップを完了させます。

1. [Ruby ファイルを追加する](#step-21-adding-a-ruby-file)
1. [リポジトリの複製](#step-22-cloning-the-repository)
1. [RuboCop を実行する](#step-23-running-rubocop)
1. [RuboCop のエラーを収集する](#step-24-collecting-rubocop-errors)
1. [CI テスト結果でチェック実行を更新する](#step-25-updating-the-check-run-with-ci-test-results)
1. [RuboCop のエラーを自動的に修正する](#step-26-automatically-fixing-rubocop-errors)
1. [セキュリティのヒント](#step-27-security-tips)

## ステップ 2.1. Ruby ファイルを追加する

RuboCop がチェックするため、特定のファイルまたはディレクトリ全体を渡すことができます。 このクイックスタートでは、ディレクトリ全体で RuboCop を実行します。 RuboCop がチェックするのは Ruby のコードのみなので、エラーが含まれる Ruby ファイルをリポジトリ内に最低 1 つ置くとよいでしょう。 以下に示すサンプルのファイルには、いくつかのエラーが含まれています。 この例の Ruby ファイルを、アプリがインストールされているリポジトリに追加します (`myfile.rb` のように、ファイル名には必ず `.rb` 拡張子を付けます)。

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

## ステップ 2.2. リポジトリの複製

RuboCop はコマンドラインユーティリティとして使用できます。 これはつまり、RuboCop がファイルを解析するためには、GitHub App が CI サーバー上のリポジトリのローカルコピーをクローンする必要があるということです。 Ruby アプリで Git の操作を実行するには、[ruby-git](https://github.com/ruby-git/ruby-git) gem を使えます。

`building-a-checks-api-ci-server` リポジトリの `Gemfile` には既に ruby-git gem が含まれており、[前提条件ステップ](#prerequisites)で `bundle install` を実行したときにインストール済みです。 gem を使うには、次のコードを `template_server.rb` ファイルの先頭に追加します。

``` ruby
require 'git'
```

リポジトリをクローンするには、アプリケーションに「リポジトリコンテンツ」の読み取り権限が必要です。 このクイックスタートでは、後ほどコンテンツを GitHub にプッシュする必要がありますが、そのためには書き込み権限が必要です。 ここでアプリの "リポジトリの内容" のアクセス許可を **[読み取りと書き込み]** に設定しておけば、後で再び変更する必要がなくなります。 アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリの設定ページ](https://github.com/settings/apps)でアプリを選び、サイドバーの **[アクセス許可と Webhook]** をクリックします。
1. [アクセス許可] セクションで "リポジトリの内容" を探し、その横にある [アクセス] ドロップダウンで **[読み取りと書き込み]** を選びます。
{% data reusables.apps.accept_new_permissions_steps %}

GitHub App のアクセス許可を使ってリポジトリをクローンするには、次の例で示すアプリのインストール トークン (`x-access-token:<token>`) を使えます。

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

上記のコードは、HTTP 経由でリポジトリをクローンします。 コードには、リポジトリの所有者 (ユーザまたは Organization) およびリポジトリ名を含む、リポジトリのフルネームを入力する必要があります。 たとえば、[octocat Hello-World](https://github.com/octocat/Hello-World) リポジトリのフル ネームは `octocat/hello-world` です。

アプリでは、リポジトリをクローンした後、最新のコード変更をプルし、特定の Git ref をチェックアウトする必要があります。これらのすべてを行うコードは、専用のメソッドにするのに最適です。 メソッドがこれらの操作を実行するには、リポジトリの名前とフルネーム、チェックアウトする ref が必要です。 ref にはコミット SHA、ブランチ、タグ名を指定できます。 次の新しいメソッドを `template_server.rb` のヘルパー メソッド セクションに追加します。

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

上のコードでは、`ruby-git` gem を使い、アプリのインストール トークンを使ってリポジトリをクローンしています。 このコードでは、`template_server.rb` と同じディレクトリにコードがクローンされます。 リポジトリで Git コマンドを実行するには、コードをリポジトリのディレクトリに変更する必要があります。 ディレクトリを変更する前に、コードで現在の作業ディレクトリを変数 (`pwd`) に保存して戻る場所を記憶した後、`clone_repository` メソッドを終了します。

このコードは、リポジトリのディレクトリから最新の変更をフェッチしてマージし (`@git.pull`)、ref をチェックアウトしてから (`@git.checkout(ref)`)、元の作業ディレクトリに戻ります (`pwd`)。

これで、リポジトリをクローンして ref をチェックアウトするメソッドができました。次に、必要な入力パラメーターを取得して新しい `clone_repository` メソッドを呼び出すコードを追加する必要があります。 `initiate_check_run` ヘルパー メソッドの `***** RUN A CI TEST *****` というコメントの下に、次のコードを追加します。

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

上のコードは、リポジトリのフル ネームとコミットのヘッド SHA を、`check_run` Webhook ペイロードから取得します。

## ステップ 2.3. RuboCop を実行する

すばらしい。 リポジトリをクローンし、CI サーバーを使用してチェック実行を作成しようという段階にまで到達しました。 ここでは、[RuboCop リンター](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker)と [Checks API ノーテーション](/rest/reference/checks#create-a-check-run)の核心部分に踏み込みます。

次のコードは、RuboCop を実行し、スタイル コード エラーを JSON フォーマットで保存します。 [前のステップ](#step-22-cloning-the-repository)で追加した `clone_repository` の呼び出しの下、チェック実行を更新するコードの上に、このコードを追加して完了です。

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

上記のコードは、リポジトリのディレクトリにある全てのファイルで RuboCop を実行します。 オプション `--format json` は、リンティングの結果のコピーをコンピューターで解析可能な形式で保存する便利な方法です。 JSON 形式の詳細と例については、[RuboCop のドキュメント](https://docs.rubocop.org/rubocop/formatters.html#json-formatter)をご覧ください。

このコードは RuboCop の結果を `@report` 変数に格納するため、リポジトリのチェックアウトを安全に削除できます。 また、このコードは JSON も解析するため、`@output` 変数を使って GitHub App のキーと変数に簡単にアクセスできます。

{% note %}

**注:** リポジトリの削除に使うコマンド (`rm -rf`) を元に戻すことはできません。 アプリで意図したものとは異なるディレクトリを削除するために使われる可能性がある悪意のあるコマンドの挿入を Webhook で調べる方法については、「[ステップ 2.7. セキュリティのヒント](#step-27-security-tips)」をご覧ください。 たとえば、悪意のあるアクターが `./` というリポジトリ名を使って Webhook を送信した場合、アプリはルート ディレクトリを削除します。 😱何らかの理由で _メソッド_  (に含まれている) を使用して Webhook の送信者を検証`verify_webhook_signature`していない`template_server.rb`場合は、リポジトリ名が有効であることを確認してください。

{% endnote %}

このコードが動作することをテストし、サーバーのデバッグ出力で RuboCop により報告されたエラーを確認できます。 `template_server.rb` サーバーを再起動し、アプリをテストしているリポジトリで新しい pull request を作成します。

```shell
$ ruby template_server.rb
```

デバッグ出力に文法エラーが表示されているはずです。ただし、出力は整形されていません。 [JSON フォーマッタ](https://jsonformatter.org/)のような Web ツールを使うと、JSON 出力を次のように書式設定されたリンティング エラー出力に整形できます。

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

## ステップ 2.4. RuboCop のエラーを収集する

`@output` 変数には、RuboCop レポートの解析済みの JSON の結果が含まれます。 上で示すように、結果には `summary` セクションが含まれており、コードでエラーがあるかどうかを迅速に判断するために使えます。 次のコードは、エラーが報告されないときは、チェック実行の結果を `success` に設定します。 RuboCop は `files` 配列で各ファイルのエラーを報告するので、エラーがある場合、file オブジェクトからデータを抽出する必要があります。

Checks API により、コードの特定の行に対してアノテーションを作成することができます。 チェック実行を作成または更新する際に、アノテーションを追加できます。 このクイックスタートでは、アノテーションを使って[チェック実行を更新](/rest/reference/checks#update-a-check-run)しています。

Checks API では、アノテーションの数は API の 1 リクエストあたり最大 50 に制限されています。 51 個以上のアノテーションを作るには、"[チェック実行を更新する](/rest/reference/checks#update-a-check-run)" エンドポイントに対して要求を複数回行う必要があります。 たとえば、105 個のアノテーションを作るには、"[チェック実行を更新する](/rest/reference/checks#update-a-check-run)" エンドポイントを 3 回呼び出す必要があります。 始めの 2 回のリクエストでそれぞれ 50 個のアノテーションが作成され、3 回目のリクエストで残り 5 つのアノテーションが作成されます。 チェック実行を更新するたびに、アノテーションは既存のチェック実行にあるアノテーションのリストに追加されます。

チェック実行は、アノテーションをオブジェクトの配列として受け取ります。 各アノテーション オブジェクトには、`path`、`start_line`、`end_line`、`annotation_level`、`message` が含まれている必要があります。 RuboCop により `start_column` と `end_column` も提供されるので、それらのオプションのパラメーターをアノテーションに含めることができます。 アノテーションの `start_column` と `end_column` は、同じ行でのみサポートされます。 詳しくは、[`annotations` オブジェクト](/rest/reference/checks#annotations-object-1)の参照ドキュメントをご覧ください。

各アノテーションを作成するために必要な RuboCop から、必須の情報を抽出します。 [前のセクション](#step-23-running-rubocop)で追加したコードの後に次のコードを追加します。

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

このコードでは、アノテーションの合計数を 50 に制限しています。 このコードを、50 のアノテーションごとにチェック実行を更新するよう変更することも可能です。 上のコードには、違反を反復処理するループで使われる変数 `max_annotations` が含まれていて、制限が 50 に設定されています。

`offense_count` が 0 の場合、CI テストは `success` になります。 エラーがある場合、このコードは結果を `neutral` に設定します。これは、コード リンターによってエラーが厳格に強制されるのを防ぐためです。 ただし、リンティング エラーがある場合にチェックスイートが失敗になるようにしたい場合は、結果を `failure` に変更できます。

エラーが報告されると、上のコードは RuboCop レポートの `files` 配列を反復処理します。 各ファイルについて、ファイル パスが抽出され、アノテーション レベルが `notice` に設定されます。 さらに細かく、[RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html) の各種類に特定の警告レベルを設定することもできますが、このクイックスタートでは簡単さを優先し、すべてのエラーを `notice` のレベルに設定します。

このコードでは、また、`offenses` 配列の各エラーを反復処理し、違反の場所とエラー メッセージを収集します。 必要な情報を抽出した後、コードでエラーごとにアノテーションを作成して、`annotations` 配列に格納します。 アノテーションは開始列と終了列が同じ行にある場合にのみサポートされるため、開始行と終了行の値が同じ場合にだけ、`start_column` と `end_column` が `annotation` オブジェクトに追加されます。

このコードはまだチェック実行のアノテーションを作成しません。 それを作成するコードは、次のセクションで追加します。

## ステップ 2.5. CI テスト結果でチェック実行を更新する

GitHub からの各チェック実行には、`title`、`summary`、`text`、`annotations`、`images` を含む `output` オブジェクトが含まれます。 `output` の必須パラメーターは `summary` と `title` だけですが、それらだけでは十分に詳細な情報が提供されないので、このクイックスタートでは `text` と `annotations` も追加します。 ここに挙げるコードでは画像は追加しませんが、追加したければぜひどうぞ。

`summary` については、この例では RuboCop からの概要情報を使い、出力の書式を設定するために改行 (`\n`) をいくつか追加します。 `text` パラメーターに追加するものはカスタマイズできますが、この例では RuboCop のバージョンを `text` パラメーターに設定します。 `summary` と `text` を設定するには、[前のセクション](#step-24-collecting-rubocop-errors)で追加したコードに次のコードを追加します。

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

さて、これでチェック実行を更新するために必要な情報がすべて揃いました。 [このクイックスタートの前半](#step-14-updating-a-check-run)では、チェック実行のステータスを `success` に設定するためにこのコードを追加しました。

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

そのコードを、RuboCop の結果に基づいて (`success` または `neutral` に) 設定した `conclusion` 変数を使うように、更新する必要があります。 コードは以下のようにして更新できます。

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
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
  }],
  accept: 'application/vnd.github+json'
)
```

さて、これで CI テストのステータスに基づいて結論を設定し、RuboCop の結果からの出力を追加しました。あなたは CI テストを作成したのです。 お疲れさまでした。 🙌

また、上のコードでは、`actions` オブジェクトによって CI サーバーに[要求されたアクション](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/)という機能も追加されます。 {% ifversion fpt or ghec %}(これは [GitHub Actions](/actions) には関係がないことに注意してください)。{% endif %}"要求されたアクション" により、追加アクションの実行をチェック実行に要求できるボタンが GitHub の **[チェック]** タブに追加されます。 追加のアクションは、アプリケーションが自由に設定できます。 たとえば、RuboCop には Ruby のコードで見つかったエラーを自動的に修正する機能があるので、CI サーバーはリクエストされたアクションボタンを使用して、自動的なエラー修正をユーザが許可することができます。 このボタンをクリックすると、アプリは `requested_action` アクションを含む `check_run` イベントを受け取ります。 アプリでは、各要求されたアクションに含まれる `identifier` を使って、クリックされたボタンを特定します。

上記のコードには、まだ RuboCop が自動的にエラーを修正する処理がありません。 この処理については、次のセクションで追加します。 ただし、まず、`template_server.rb` サーバーをもう一度起動して新しい pull request を作成することで、作成した CI テストを見てみましょう。

```shell
$ ruby template_server.rb
```

アノテーションが **[チェック]** タブに表示されます。

![[Checks] タブのチェック実行アノテーション](/assets/images/github-apps/github_apps_checks_annotations.png)

リクエストされたアクションを追加することにより作成された [Fix this] ボタンに注目してください。

![チェック実行のリクエストされたアクションのボタン](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

既に PR に含まれるファイルにアノテーションが関連している場合、 **[変更されたファイル]** タブにもそのアノテーションが表示されます。

![ファイルが変更されたタブのチェック実行アノテーション](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## ステップ 2.6. RuboCop のエラーを自動的に修正する

ここまで来たのはすごいですよ！ 👏 CI テストの作成は済んでいます。 このセクションでは、もう 1 つの機能を追加します。RuboCop を使用して、見つけたエラーを自動的に修正するために使用するための機能です。 [これを修正する] ボタンは、[前のセクション](#step-25-updating-the-check-run-with-ci-test-results)で既に追加しました。 ここでは、[これを修正する] ボタンがクリックされるとトリガーされる `requested_action` チェック実行イベントを処理するコードを追加します。

RuboCop ツールには、検出されたエラーを自動的に修正するための `--auto-correct` コマンド ライン オプションが[用意されています](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses)。 `--auto-correct` 機能を使うと、サーバー上のローカル ファイルに更新が適用されます。 RuboCop がこの作業をやってのけた後は、その変更を GitHub にプッシュする必要があります。

リポジトリにブッシュするには、アプリケーションに [Repository contents] への書き込み権限が必要です。 このアクセス許可は、「[ステップ 2.2. リポジトリの複製](#step-22-cloning-the-repository)」で既に **読み取りと書き込み** に設定してあるので、準備はすべて整っています。

ファイルをコミットするには、Git はコミットに関連付ける[ユーザー名](/github/getting-started-with-github/setting-your-username-in-git/)と[メール アドレス](/articles/setting-your-commit-email-address-in-git/)を認識する必要があります。 名前 (`GITHUB_APP_USER_NAME`) とメール アドレス (`GITHUB_APP_USER_EMAIL`) の設定を格納するための 2 つの環境変数を、`.env` ファイルに追加します。 アプリケーションにはあなたの名前を付けることもできます。この例では、メールアドレスは何でも構いません。 次に例を示します。

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

作成者およびコミットしたユーザーの名前とメール アドレスで `.env` ファイルを更新したら、環境変数を読み取って Git 構成を設定するコードを追加する準備が整います。 このコードは、もうすぐ追加することになります。

[これを修正する] ボタンをクリックすると、アプリは `requested_action` アクションの種類を含む[チェック実行 Webhook](/webhooks/event-payloads/#check_run) を受信します。

「[ステップ 1.4. チェック実行を更新する](#step-14-updating-a-check-run)」で、`check_run` イベント内のアクションを検索するように `event_handler` を更新しました。 `created` と `rerequested` のアクションの種類を処理する case ステートメントは既に存在します。

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

`rerequested_action` イベントを処理するための別の `when` ステートメントを、`rerequested` ケースの後に追加します。

``` ruby
when 'requested_action'
  take_requested_action
```

このコードは、アプリに対するすべての `requested_action` イベントを処理する新しいメソッドを呼び出します。 以下のメソッドをコードのヘルパーメソッドセクションに追加します。

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

上のコードは、「[ステップ 2.2. リポジトリの複製](#step-22-cloning-the-repository)」で追加したコードと同じようにリポジトリをクローンします。 `if` ステートメントは、要求されたアクションの識別子が RuboCop のボタン識別子 (`fix_rubocop_notices`) と一致することを確認します。 それらが一致する場合、コードはリポジトリをクローンし、Git のユーザー名とメール アドレスを設定してから、オプション `--auto-correct` を指定して RuboCop を実行します。 `--auto-correct` オプションは、ローカル環境の CI サーバー ファイルに変更を自動的に適用します。

ファイルはローカルで変更されますが、それを GitHub にプッシュする必要はあります。 もう一度便利な `ruby-git` gem を使って、すべてのファイルをコミットします。 Git には、変更または削除されたすべてのファイルをステージングし、それらをコミットする `git commit -a` というコマンドがあります。 `ruby-git` を使って同じことを行うため、上のコードでは `commit_all` メソッドを使っています。 その後、Git の `clone` コマンドと同じ認証方法を使い、インストール トークンを使って GitHub にコミットしたファイルをプッシュします。 最後に、リポジトリディレクトリを削除して、ワーキングディレクトリが次のイベントに備えるようにします。

これで完了です。 Checks API CI サーバーのコードがついに完成しました。 💪 `template_server.rb` サーバーをもう一度再起動し、新しい pull request を作成します。

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

今回は、[これを修正する] ボタンをクリックすると、RuboCop が **[チェック]** タブで検出したエラーが自動的に修正されます。

**[コミット]** タブには、Git の構成で設定したユーザー名で新しいコミットが表示されます。 更新を確認するには、ブラウザを更新する必要がある場合があります。

![Octo RuboCop の通知を自動的に修正する新しいコミット](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

新しいコミットがリポジトリにプッシュされたので、 **[チェック]** タブに Octo RuboCop の新しいチェック スイートが表示されています。しかし、今回は RuboCop によってすべて修正されたためエラーはありません。 🎉

![チェックスイート、チェック実行のエラーなし](/assets/images/github-apps/github_apps_checks_api_success.png)

作成したアプリの完成したコードは、「[Checks API で CI テストを作成する](https://github.com/github-developer/creating-ci-tests-with-the-checks-api)」のリポジトリの `server.rb` ファイルにあります。

## ステップ 2.7. セキュリティのヒント

GitHub App コードのテンプレートには、受信した webhook ペイロードを検証して、信頼できるソースからのものであることを確認するためのメソッドが最初から用意されています。 webhook ペイロードを検証しない場合、リポジトリ名が webhook ペイロードに含まれる際には、その webhook が悪意をもって使用されかねない任意のコマンドを確実に含まないようにする必要があります。 以下のコードは、リポジトリ名に含まれる文字がラテン文字、ハイフン、アンダースコアのみであることを検証します。 完全な例を提供するため、このクイックスタートの[コンパニオン リポジトリ](https://github.com/github-developer/creating-ci-tests-with-the-checks-api)で入手できる完全な `server.rb` のコードには、受信した Webhook ペイロードを検証するメソッドと、リポジトリ名を検証するためのこのチェックの両方が含まれています。

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

## トラブルシューティング

以下は、いくつかの一般的な問題と推奨される解決策です。 他の問題が発生した場合は、{% data reusables.support.prodname_support_forum_with_url %} にヘルプやアドバイスを求めることができます。

* **Q:** アプリで GitHub にコードがプッシュされません。 RuboCop が自動的に行う修正が表示されません。

    **A:** "リポジトリの内容" に対する **読み取りと書き込み** アクセス許可があること、およびインストール トークンを使ってリポジトリをクローンしていることを確認します。 詳しくは、「[ステップ 2.2. リポジトリの複製](#step-22-cloning-the-repository)」をご覧ください。

* **Q:** `template_server.rb` のデバッグ出力に、リポジトリのクローンに関するエラーが表示されます。

    **A:** 以下のエラーが表示される場合、`initiate_check_run` と `take_requested_action` メソッドの一方または両方で、リポジトリのチェックアウトを削除していません。

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    自分のコードを `server.rb` ファイルと比較し、`initiate_check_run` および `take_requested_action` メソッドのコードが同じであることを確認してください。

* **Q:** 新しいチェック実行が、GitHub の [チェック] タブに表示されません。

    **A:** Smee を再起動し、`template_server.rb` サーバーを実行し直してください。

* **Q:** [すべて再実行] ボタンが GitHub の [チェック] タブに表示されません。

    **A:** Smee を再起動し、`template_server.rb` サーバーを実行し直してください。

## まとめ

このガイドの手順を一通り終えたら、Checks API を使用して CI サーバーを作成することの基本が習得できています。 振り返ると、以下を行いました。

* Checks API イベントを受信し、チェック実行を作成するようサーバーを設定しました。
* リポジトリ内のコードをチェックし、エラーのアノテーションを作成するため RuboCop を使用しました。
* 文法エラーを自動的に修正する、リクエストされたアクションを実装しました。

## 次の手順

以下は、次に行えることのいくつかのアイデアです。

* 現在、[Fix this] ボタンは常に表示されています。 ここまで書いたコードを更新し、RuboCop がエラーを見つけた時にのみ [Fix this] ボタンが表示されるようにしましょう。
* RuboCop で head ブランチにファイルを直接コミットしたくない場合は、head ブランチに基づいて新しいブランチで [pull request を作成する](/rest/reference/pulls#create-a-pull-request)ようにコードを更新できます。
