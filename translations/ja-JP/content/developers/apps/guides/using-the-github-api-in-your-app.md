---
title: アプリケーションでのGitHub APIの利用
intro: イベントを待ち受けるアプリケーションのセットアップと、Octokitライブラリを使ったREST APIの操作の方法を学んでください。
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 93679e41fe145406ed1eb99e2daaba6bf8e10e76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089911'
---
## はじめに

このガイドは、GitHub Appをビルドしてサーバー上で実行するのに役立ちます。 ビルドするアプリケーションは、アプリケーションがインストールされたリポジトリでオープンされたすべての新しいIssueにラベルを付けます。

このプロジェクトでは、以下を見ていきます。

* イベントを待ち受けるアプリケーションのプログラミング
* Octokit.rbライブラリを使ったREST APIの操作の実行

{% data reusables.apps.app-ruby-guides %}

以下のステップを行っていけば、GitHub APIの完全な一式を使って他の種類のインテグレーションを開発する準備が整います。 {% ifversion fpt or ghec %}[GitHub Marketplace](https://github.com/marketplace) と「[GitHub での作業](https://github.com/works-with)」でアプリの成功事例を確認できます。{% endif %}

## 前提条件

以下に関する基本的な理解があると役立つでしょう。

* [GitHub アプリ](/apps/about-apps)
* [Webhook](/webhooks)
* [プログラミング言語の Ruby](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

とはいえ、経験のレベルにかかわらず見ていくことはできます。 その過程で必要な情報にはリンクしていきます！

始める前に、以下を行っておく必要があります。

1. [アプリでの GitHub API の使用](https://github.com/github-developer/using-the-github-api-in-your-app)リポジトリをクローンします。
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  ディレクトリの中には、このクイックスタートで使うテンプレート コードを含む `template_server.rb` ファイルと、完成したプロジェクト コードを含む `server.rb` ファイルがあります。

1. [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)に関するクイックスタートの手順に従い、`template_server.rb` アプリ サーバーを構成して実行します。 [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)以外の GitHub App のクイックスタートを以前に完了している場合は、 _"新しい"_ GitHub App を登録し、このクイックスタートで使用する新しい Smee チャネルを開始する必要があります。

  このクイックスタートには、[開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)に関するクイックスタートと同じ `template_server.rb` コードが含まれています。 **注:** [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)に関するクイックスタートに従って、[アプリでの GitHub API の使用](https://github.com/github-developer/using-the-github-api-in-your-app)リポジトリに含まれているプロジェクト ファイルを必ず使用してください。

  テンプレート GitHub App の設定で問題が発生する場合は、「[トラブルシューティング](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting)」セクションをご覧ください。

## アプリケーションのビルド

`template_server.rb` のコードに馴染んだところで、アプリケーションがインストールされたリポジトリでオープンされたすべての issue に自動的に `needs-response` ラベルを追加するコードを作成しましょう。

この `template_server.rb` ファイルには、まだカスタマイズされていないアプリ テンプレート コードが含まれています。 このファイルには、webhookイベントを処理するためのプレースホルダーのコードや、Octokit.rbクライアントを初期化する他のコードが含まれています。

{% note %}

**注:** `template_server.rb` には、このガイドを補完し、追加の技術的な詳細を説明する多くのコード コメントが含まれています。 このセクションの先に進む前に、コードの動作の概要をつかむために、この時点でこのファイル中のコメントを読み通しておくと役立つかもしれません。

このガイドの終わりまでに作成するカスタマイズされた最終コードは、[`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb) にあります。 とはいえ、最後までそれを見るのは待ってみてください!

{% endnote %}

以下が、最初のGitHub Appを作成するまでに行うステップです。

1. [アプリのアクセス許可を更新する](#step-1-update-app-permissions)
2. [イベント処理の追加](#step-2-add-event-handling)
3. [新しいラベルの作成](#step-3-create-a-new-label)
4. [ラベルの処理の追加](#step-4-add-label-handling)

## 手順 1. アプリのアクセス許可を更新する

[最初にアプリを登録](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)したときは、既定のアクセス許可を受け入れました。これは、アプリがほとんどのリソースにアクセスできないことを意味します。 この例においては、アプリケーションはIssueを読み、ラベルを書く権限を必要とします。

アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリの設定ページ](https://github.com/settings/apps)でアプリを選び、サイドバーの **[アクセス許可と Webhook]** をクリックします。
1. [アクセス許可] セクションで [Issue] を探し、その横にある [アクセス] ドロップダウンで **[読み取りと書き込み]** を選びます。 このオプションはIssueとラベルの両方へのアクセスを許可するものと説明されており、これはまさに必要なことです。
1. [イベントのサブスクライブ] セクションで、 **[Issue]** を選んでイベントをサブスクライブします。
{% data reusables.apps.accept_new_permissions_steps %}

すばらしい。 アプリケーションは必要なタスクを実行する権限を所有しています。 これで、アプリケーションを動作させるコードを追加できるようになりました。

## 手順 2. イベント処理の追加

アプリケーションが最初にやらなければならないのは、オープンされた新しいIssueを待ち受けることです。 **Issue** イベントをサブスクライブしたので、特定の issue 関連のアクションが発生したときにトリガーされる [`issues`](/webhooks/event-payloads/#issues) Webhook の受信を開始します。 コード中にほしい特定のアクションに対してこのイベントの種類をフィルターできます。

GitHub は、Webhook ペイロードを `POST` 要求として送信します。 Smee Webhook ペイロードを `http://localhost/event_handler:3000` に転送したため、サーバーは `post '/event_handler'` ルートで `POST` 要求のペイロードを受信します。

空の `post '/event_handler'` ルートは、「[前提条件](#prerequisites)」セクションでダウンロードした `template_server.rb` ファイルに既に含まれています。 空のルートは次のようになっています。

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

以下のコードを追加することで、このルートを使って `issues` イベントを処理します。

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

GitHub が送信する全てのイベントには、`HTTP_X_GITHUB_EVENT` という要求ヘッダーが含まれており、これは `POST` 要求でのイベントの種類を示します。 この時点では、関心があるのは`issues` というイベントの種類だけです。 各イベントには、イベントをトリガーしたアクションの種類を示す追加の `action` フィールドがあります。 `issues` の場合、`action` フィールドは `assigned`、`unassigned`、`labeled`、`unlabeled`、`opened`、`edited`、`milestoned`、`demilestoned`、`closed`、または `reopened` になります。

イベントハンドラをテストするには、一時的なヘルパーメソッドを追加してみてください。 [後でラベル処理を追加](#step-4-add-label-handling)するときに更新します。 この時点では、コードの `helpers do` セクションの中に以下のコードを追加してください。 他の任意のヘルパーメソッドの前後に新しいメソッドを追加できます。 順序は問題ではありません。

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

このメソッドはJSON形式のイベントペイロードを引数として受け取ります。 これは、メソッド中でペイロードをパースして、任意の必要なデータへとドリルダウンしていけるということです。 どこかの時点でペイロード全体を調べると役立つかもしれません。`logger.debug 'An issue was opened!` を `logger.debug payload` に変更してみてください。 表示されるペイロード構造は、[`issues` Webhook イベント ドキュメントに表示されているもの](/webhooks/event-payloads/#issues)と一致している必要があります。

すばらしい。 変更をテストしてみましょう。

{% data reusables.apps.sinatra_restart_instructions %}

ブラウザで、アプリケーションをインストールしたリポジトリにアクセスしてください。 そのリポジトリで新しいIssueをオープンしてください。 そのIssueは好きな内容でかまいません。 これは単にテストにすぎません。

ターミナルを見直してみれば、`An issue was opened!` というメッセージが出力にあるはずです。おめでとうございます! アプリケーションにイベントハンドラを追加できました。 💪

## 手順 3. 新しいラベルの作成

これで、アプリケーションはIssueがオープンされたときを示せるようになりました。 今度は、アプリケーションがインストールされたリポジトリの新しくオープンされた任意の issue に `needs-response` というラベルを追加しましょう。

ラベルを任意の場所に _追加_ する前に、リポジトリにカスタム ラベルを _作成_ する必要があります。 これをする必要があるのは一度だけです。 このガイドのためには、ラベルをGitHub上で手動で作成します。 リポジトリで、 **[Issue]** 、 **[ラベル]** 、 **[新しいラベル]** の順にクリックします。 新しいラベルに `needs-response` という名前を付けます。

{% tip %}

**ヒント**: アプリでラベルをプログラムから作成できたら素晴らしいのではないでしょうか? [できます](/rest/reference/issues#create-a-label)。 このガイドのステップを終えた後に、自分でそのためのコードを追加してみてください。

{% endtip %}

ラベルが存在するようになったので、REST API を使用して [新しくオープンした issue にラベルを追加するように](/rest/reference/issues#add-labels-to-an-issue)アプリをプログラミングできます。

## 手順 4. ラベルの処理の追加

おめでとうございます。最後のステップである、アプリケーションへのラベル処理の追加にまで来ました。 このタスクでは、[Octokit.rb Ruby ライブラリ](http://octokit.github.io/octokit.rb/)を使用します。

Octokit.rb ドキュメントで、[ メソッド](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html)の一覧を見つけます。 使用するメソッドは [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) です。

`template_server.rb` に戻って、前に定義したメソッドを見つけます。

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

[`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) ドキュメントでは、このメソッドに 3 つの引数を渡す必要があることがわかります。

* リポジトリ (`"owner/name"` 形式の文字列)
* Issue number(integer)
* Labels (array)

ペイロードをパースすれば、リポジトリとIssue番号を取得できます。 ラベル名は常に同じ (`needs-response`) なので、labels 配列にハードコードした文字列で渡せます。 これらのピースをまとめると、更新されたメソッドは以下のようになるでしょう。

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

新しいIssueをテストのリポジトリでオープンして、何が起こるか見てみてください! もしすぐには何も起こらなければ、リフレッシュしてみてください。

ターミナルにはあまり表示されません _が_ 、ボット ユーザーが問題にラベルを追加していることがわかります。

{% note %}

**メモ：** GitHub Apps が API を介してラベルの追加などのアクションを実行すると、これらのアクションが _ボット_ アカウントによって実行されていると表示GitHub。 詳しくは、「[マシンアカウントとボット アカウント](/apps/differences-between-apps/#machine-vs-bot-accounts)」をご覧ください。

{% endnote %}

そうなっていたら、おめでとうございます! 動作するアプリケーションの構築に成功しました! 🎉

最終的なコードは、`server.rb`アプリ テンプレート リポジトリ[で](https://github.com/github-developer/using-the-github-api-in-your-app)確認できます。

ここから移動できる場所に関するアイデアについては、「[次のステップ](#next-steps)」を参照してください。

## トラブルシューティング

以下は、いくつかの一般的な問題と推奨される解決策です。 他の問題が生じた場合は、{% data variables.product.prodname_support_forum_with_url %}で助けやアドバイスを求めることができます。

* **Q:** サーバーがイベントをリッスンしていません。 Smeeクライアントはターミナルウィンドウで動作していて、新しいIssueをオープンしてGitHub.com上でイベントを送信していますが、サーバーを動作させているターミナルウィンドウに出力がありません。

    **A:** アプリ設定の Smee ドメインが正しくないかもしれません。 [アプリ設定ページ](https://github.com/settings/apps)にアクセスし、「[新しいアプリを GitHub に登録する](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)」に示されているフィールドを再確認します。 これらのフィールドのドメインが、「[新しい Smee チャンネルの開始](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)」の `smee -u <unique_channel>` コマンドで使用したドメインと一致していることを確認します。

* **Q:** アプリが機能しません。 新しいIssueをオープンしましたが、リフレッシュしてもラベルが追加されません。

    **A:** 次のすべてに該当することを確認してください。

    * issue を開いているリポジトリに[アプリをインストールした](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account)。
    * [Smee クライアント](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)がターミナル ウィンドウで実行されている。
    * [Web サーバーが](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server)別のターミナル ウィンドウでエラーなしで実行されている。
    * アプリには、[issue に対する読み取りおよび書き込みアクセス許可があり、issue イベントをサブスクライブしている](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)。
    * アクセス許可を更新した後に[メールを確認](#step-1-update-app-permissions)し、新しいアクセス許可を受け入れた。

## まとめ

このガイドを見終えれば、GitHub Appを開発するための基本的なビルディングブロックを学んだことになります! 振り返ると、以下を行いました。

* イベントを待ち受けるようにアプリケーションをプログラム
* Octokit.rbライブラリを使ったREST APIの操作

## 次の手順

以下は、次に行えることのいくつかのアイデアです。

* [GraphQL を使用してアプリを書き換える](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)。
* [Probot](https://github.com/probot/probot) を使用して Node.js でアプリを書き換える。
* `needs-response` ラベルが issue に既にあるかをアプリで確認して、なければ追加する。
* ボットがラベルを追加できたら、ターミナルにメッセージを表示する。 (ヒント: メッセージの条件として `needs-response` ラベルの ID をペイロードのラベルの ID と比較し、他のラベルではなく関連するラベルが追加されたときにのみメッセージが表示されるようにします)
* ランディング ページをアプリに追加し、それに対する [Sinatra ルート](https://github.com/sinatra/sinatra#routes)を接続する。
* コードをホストされたサーバー（Herokuのような）に移す。 新しいドメインでアプリケーションの設定を更新するのを忘れないようにしてください。
* {% data variables.product.prodname_support_forum_with_url %} でプロジェクトを共有したりアドバイスをもらったりする。{% ifversion fpt or ghec %}
* 他の人の役に立つかもと思うような、新しい輝くアプリケーションを構築しましたか？ [GitHub Marketplace に追加する](/apps/marketplace/creating-and-submitting-your-app-for-approval/)。{% endif %}
