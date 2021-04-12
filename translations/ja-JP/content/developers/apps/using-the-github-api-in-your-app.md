---
title: アプリケーションでのGitHub APIの利用
intro: イベントを待ち受けるアプリケーションのセットアップと、Octokitライブラリを使ったREST APIの操作の方法を学んでください。
redirect_from:
  - /apps/building-your-first-github-app/
  - /apps/quickstart-guides/using-the-github-api-in-your-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---


### はじめに

このガイドは、GitHub Appをビルドしてサーバー上で実行するのに役立ちます。 ビルドするアプリケーションは、アプリケーションがインストールされたリポジトリでオープンされたすべての新しいIssueにラベルを付けます。

このプロジェクトでは、以下を見ていきます。

* イベントを待ち受けるアプリケーションのプログラミング
* Octokit.rbライブラリを使ったREST APIの操作の実行

{% data reusables.apps.app-ruby-guides %}

以下のステップを行っていけば、GitHub APIの完全な一式を使って他の種類のインテグレーションを開発する準備が整います。 {% if currentVersion == "free-pro-team@latest" %} アプリケーションの成功例は、[GitHub Marketplace](https://github.com/marketplace)や[Works with GitHub](https://github.com/works-with)で調べることができます。{% endif %}

### 必要な環境

以下に関する基本的な理解があると役立つでしょう。

* [GitHub Apps](/apps/about-apps)
* [webhook](/webhooks)
* [プログラミング言語のRuby](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

とはいえ、経験のレベルにかかわらず見ていくことはできます。 その過程で必要な情報にはリンクしていきます！

始める前に、以下を行っておく必要があります。

1. [Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app)リポジトリのクローン。
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  ディレクトリの中には、このクイックスタートで使用する `template_server.rb` ファイルと、完成したプロジェクトコードである `server.rb` ファイルがあります。

1. [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)クイックスタート中のステップに従い、`template_server.rb`アプリケーションサーバーを設定し、実行してください。 [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)以外のGitHub Appクイックスタートを完了させたことがあるなら、_新しい_GitHub Appを登録して、このクイックスタートで使う新しいSmeeチャンネルを開始してください。

  このクイックスタートには、[開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)クイックスタートと同じ`template_server.rb`コードが含まれています。 **ノート:** [開発環境のセットアップ](/apps/quickstart-guides/setting-up-your-development-environment/)クイックスタートを見ていく際には、必ず[Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app)リポジトリに含まれているプロジェクトをファイルを使ってください。

  テンプレートのGitHub Appのセットアップで問題が生じた場合は、[トラブルシューティング](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting)のセクションを参照してください。

### アプリケーションのビルド

`template_server.rb`のコードに馴染んだところで、アプリケーションがインストールされたリポジトリでオープンされたすべてのIssueに自動的に`needs-response`ラベルを追加するコードを作成しましょう。

`template_server.rb`ファイルには、まだカスタマイズされていないアプリケーションのテンプレートコードが含まれています。 このファイルには、webhookイベントを処理するためのプレースホルダーのコードや、Octokit.rbクライアントを初期化する他のコードが含まれています。

{% note %}

**ノート:** `template_server.rb`には、このガイドを補完し、追加の技術的な詳細を説明する多くのコードコメントが含まれています。 このセクションの先に進む前に、コードの動作の概要をつかむために、この時点でこのファイル中のコメントを読み通しておくと役立つかもしれません。

このガイドの終わりに作成することになるカスタマイズされた最終のコードは、[`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb)にあります。 とはいえ、最後までそれを見るのは待ってみてください!

{% endnote %}

以下が、最初のGitHub Appを作成するまでに行うステップです。

1. [アプリケーションの権限の更新](#step-1-update-app-permissions)
2. [イベント処理の追加](#step-2-add-event-handling)
3. [新しいラベルの作成](#step-3-create-a-new-label)
4. [ラベルの処理の追加](#step-4-add-label-handling)

### ステップ 1. アプリケーションの権限の更新

[最初にアプリケーションを登録](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)した際は、デフォルトの権限を受け入れています。これは、アプリケーションがほとんどのリソースにアクセスできないことを意味します。 この例においては、アプリケーションはIssueを読み、ラベルを書く権限を必要とします。

アプリケーションの権限を更新するには、以下の手順に従います。

1. [アプリケーションの設定ページ](https://github.com/settings/apps)からアプリケーションを選択し、サイドバーの [**Permissions & Webhooks**] をクリックします。
1. "Permissions（権限）"セクションで"Issues"を見つけ、隣の"Access（アクセス）"ドロップダウンで**Read & Write（読み書き）**を選択してください。 このオプションはIssueとラベルの両方へのアクセスを許可するものと説明されており、これはまさに必要なことです。
1. "Subscribe to events（イベントのサブスクライブ）"セクションで、**Issues**を選択してこのイベントをサブスクライブしてください。
{% data reusables.apps.accept_new_permissions_steps %}

これでうまくいきました。 アプリケーションは必要なタスクを実行する権限を所有しています。 これで、アプリケーションを動作させるコードを追加できるようになりました。

### ステップ 2. イベント処理の追加

アプリケーションが最初にやらなければならないのは、オープンされた新しいIssueを待ち受けることです。 **Issues**イベントにサブスクライブしたので、[`issues`](/webhooks/event-payloads/#issues) webhookを受信し始めることになります。このイベントは、特定のIssueに関連するアクションが生じたときにトリガーされます。 コード中にほしい特定のアクションに対してこのイベントの種類をフィルターできます。

GitHub は webhook ペイロードを `POST` リクエストとして送信します。 Smeeのwebhookペイロードは`http://localhost/event_handler:3000`に転送しているので、サーバーはこの`POST`リクエストのペイロードを`post '/event_handler'`ルートで受け取ります。

空の `post '/event_handler'` ルートは、[必要な環境](#prerequisites)セクションでダウンロードした `template_server.rb` ファイルに既に含まれています。 空のルートは次のようになっています。

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

以下のコードを追加することで、このルートを使って`issues`イベントを処理してください。

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

GitHub が送信する全てのイベントには、`HTTP_X_GITHUB_EVENT` というリクエストヘッダが含まれており、これは `POST` リクエストのイベントの型を示します。 この時点では、関心があるのは`issues`というイベントの種類だけです。 各イベントには、アクションをトリガーしたイベントのタイプを示す `action` フィールドが付いています。 `issues`の場合、`action`フィールドは`assigned`、`unassigned`、`labeled`、`unlabeled`、`opened`、`edited`、`milestoned`、`demilestoned`、`closed`、`reopened`のいずれかです。

イベントハンドラをテストするには、一時的なヘルパーメソッドを追加してみてください。 後で[ラベルの処理を追加](#step-4-add-label-handling)するときに更新します。 この時点では、以下のコードを`helpers do`セクションの中に追加してください。 他の任意のヘルパーメソッドの前後に新しいメソッドを追加できます。 順序は問題ではありません。

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

このメソッドはJSON形式のイベントペイロードを引数として受け取ります。 これは、メソッド中でペイロードをパースして、任意の必要なデータへとドリルダウンしていけるということです。 どこかの時点でペイロード全体を調べると役立つかもしれません。`logger.debug 'An issue was opened!`を`logger.debug payload`に変更してみてください。 出力されるペイロードの構造は、[`issues` webhookイベントのドキュメントに示されている](/webhooks/event-payloads/#issues)ものと一致しているはずです。

これでうまくいきます! 変更をテストしてみましょう。

{% data reusables.apps.sinatra_restart_instructions %}

ブラウザで、アプリケーションをインストールしたリポジトリにアクセスしてください。 そのリポジトリで新しいIssueをオープンしてください。 そのIssueは好きな内容でかまいません。 これは単にテストにすぎません。

ターミナルを見直してみれば、`An issue was opened!`というメッセージが出力にあるはずです。おめでとうございます! アプリケーションにイベントハンドラを追加できました。 💪

### ステップ 3. 新しいラベルの作成

これで、アプリケーションはIssueがオープンされたときを示せるようになりました。 今度は、アプリケーションがインストールされたリポジトリのあらゆる新しくオープンされたIssueに`needs-response`というラベルを追加しましょう。

ラベルをどこでも_追加_できるようにするには、リポジトリでカスタムラベルを_作成_しなければなりません。 これをする必要があるのは一度だけです。 このガイドのためには、ラベルをGitHub上で手動で作成します。 リポジトリで**Issues**をクリックして、続いて**Labels**を、そして**New label（新規ラベル）**をクリックしてください。 新しいラベルの名前を`needs-response`にしてください。

{% tip %}

**Tip**: アプリケーションがラベルをプログラムから作成できたら素晴らしいのではないでしょうか？ [できます](/rest/reference/issues#create-a-label)! このガイドのステップを終えた後に、自分でそのためのコードを追加してみてください。

{% endtip %}

これでラベルができたので、REST APIを使って[新しくオープンされたすべてのIssueにラベルを追加する](/rest/reference/issues#add-labels-to-an-issue)ようにアプリケーションをプログラムできます。

### ステップ 4. ラベルの処理の追加

おめでとうございます。最後のステップである、アプリケーションへのラベル処理の追加にまで来ました。 このタスクのためには、[Octokit.rb Rubyライブラリ](http://octokit.github.io/octokit.rb/)を使いましょう。

Octokit.rbのドキュメントで、[ラベルメソッド](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html)のリストを見つけてください。 使うメソッドは[`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method)です。

`template_server.rb`に戻って、以前に定義したメソッドを見つけてください。

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

[`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method)のドキュメントには、このメソッドに3つの引数を渡さなければならないとあります。

* Repo (`"owner/name"`という形式のstring)
* Issue number(integer)
* Labels (array)

ペイロードをパースすれば、リポジトリとIssue番号を取得できます。 ラベル名は常に同じ(`needs-response`)なので、labels配列にハードコードした文字列で渡せます。 これらのピースをまとめると、更新されたメソッドは以下のようになるでしょう。

``` ruby
# Issueがオープンされたらラベルを追加
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

新しいIssueをテストのリポジトリでオープンして、何が起こるか見てみてください! もしすぐには何も起こらなければ、リフレッシュしてみてください。

ターミナルにはあまり表示されませんが、_とはいえ_ボットユーザがラベルをIssueに追加したことはわかります。

{% note %}

**ノート:** GitHub AppがAPIを介してラベルの追加といったアクションを起こした場合、GitHubはそれらのアクションを_ボット_アカウントが行ったものと示します。 詳しい情報については「[マシン対ボットアカウント](/apps/differences-between-apps/#machine-vs-bot-accounts)」を参照してください。

{% endnote %}

そうなっていたら、おめでとうございます! 動作するアプリケーションの構築に成功しました! 🎉

`server.rb`の最終のコードは[アプリケーションのテンプレートリポジトリ](https://github.com/github-developer/using-the-github-api-in-your-app)にあります。

ここから進む先に関するアイデアについては「[次のステップ](#next-steps)」を参照してください。

### トラブルシューティング

以下は、いくつかの一般的な問題と推奨される解決策です。 他の問題が生じた場合は、{% data variables.product.prodname_support_forum_with_url %}で助けやアドバイスを求めることができます。

* **Q:** サーバーがイベントを待ち受けていません! Smeeクライアントはターミナルウィンドウで動作していて、新しいIssueをオープンしてGitHub.com上でイベントを送信していますが、サーバーを動作させているターミナルウィンドウに出力がありません。

    **A:** アプリケーション設定のSmeeドメインが正しくないかもしれません。 [アプリケーション設定ページ](https://github.com/settings/apps)にアクセスし、[Register a new app with GitHub（GitHubに新しいアプリケーションを登録）](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)にあるフィイールドをダブルチェックしてください。 それらのフィールドのドメインが、「[新しいSmeeチャンネルの開始](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)」の`smee -u <unique_channel>`で使ったドメインと一致していることを確認してください。

* **Q:** アプリケーションが動きません! 新しいIssueをオープンしましたが、リフレッシュしてもラベルが追加されません。

    **A:** 以下のようになっていることをすべて確認してください。

    * Issueをオープンしているリポジトリに[アプリケーションをインストールした](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account)こと。
    * ターミナルウィンドウで[Smeeクライアントが動作している](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)こと。
    * 他のターミナルウィンドウで[Webサーバーが動作している](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server)こと。
    * アプリケーションが[Issueの読み書き権限を持っており、issueイベントをサブスクライブしている](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)こと。
    * 権限を更新した後に[メールを確認して](#step-1-update-app-permissions)新しい権限を承認したこと。

### おわりに

このガイドを見終えれば、GitHub Appを開発するための基本的なビルディングブロックを学んだことになります! 振り返ると、以下を行いました。

* イベントを待ち受けるようにアプリケーションをプログラム
* Octokit.rbライブラリを使ったREST APIの操作

### 次のステップ

以下は、次に行えることのいくつかのアイデアです。

* [GraphQLを使ってアプリケーションを書き直す](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)!
* [ Probot](https://github.com/probot/probot)を使ってNode.jsでアプリケーションを書き直す!
* アプリケーションが`needs-response`ラベルがIssueにすでに付いているかを確認して、なければ追加するようにする。
* ボットがラベルを追加できたら、ターミナルにメッセージを表示する。 （ヒント: `needs-response`ラベルのIDをペイロード中のラベルのIDと比較してメッセージの条件とし、他のラベルではなく関連するラベルが追加されたときにのみメッセージを表示してください）
* アプリケーションにランディングページを追加し、[Sinatraのルート](https://github.com/sinatra/sinatra#routes)をそこに接続する。
* コードをホストされたサーバー（Herokuのような）に移す。 新しいドメインでアプリケーションの設定を更新するのを忘れないようにしてください。
* {% data variables.product.prodname_support_forum_with_url %}でプロジェクトを共有したりアドバイスをもらったりする。{% if currentVersion == "free-pro-team@latest" %}
* 他の人の役に立つかもと思うような、新しい輝くアプリケーションを構築しましたか？ [GitHub Marketplaceに追加してください](/apps/marketplace/creating-and-submitting-your-app-for-approval/)!{% endif %}
