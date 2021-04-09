---
title: CIサーバーの構築
intro: Status APIで独自のCIシステムを構築しましょう。
redirect_from:
  - /guides/building-a-ci-server/
  - /v3/guides/building-a-ci-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---



[Status API][status API]は、コミットをテストのサービスと結びつけて、各プッシュがテストされ、{% data variables.product.product_name %}のプルリクエストとするようにする役割を果たします。

このAPIでは、ステータスAPIを使って、利用できる設定を示します。 このシナリオでは、以下を行います。

* プルリクエストが開かれたときにCIスイートを実行します (CIステータスを保留中に設定します)。
* CIが終了したら、それに応じてプルリクエストのステータスを設定します。

このCIシステムとホストサーバーは、想像上のものです。 Travisでも、Jenkinsでも、何でも構いません。 このガイドのポイントは、通信を管理するサーバーを設定し、構成することにあります。

まだngrokをダウンロードしていない場合は[ダウンロード][ngrok]し、その[使いかた][using ngrok]を学びましょう。 これはローカル接続を公開するために非常に役立つツールだと思います。

注釈: このプロジェクトの完全なソースコードは、[platform-samplesリポジトリ][platform samples]からダウンロードできます。

### サーバーを書く

ローカル接続が機能していることを証明するための、簡単なSinatraアプリケーションを書きます。 まずは以下のソースから始めましょう。

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(シナトラの仕組みに詳しくない方は、[Sinatraのガイド][Sinatra]を読むことをお勧めします。)

このサーバーを起動してください。 デフォルトでは、Sinatraはポート`4567`で起動するため、このポートもリッスンを開始するようngrokを設定するとよいでしょう。

このサーバーが機能するには、webhookでリポジトリを設定する必要があります。 プルリクエストが作成やマージされるたびに、webhookが起動するよう設定すべきです。 なんでも好きにして構わないようなリポジトリを作成しましょう。 [@octocat's Spoon/Knifeリポジトリ](https://github.com/octocat/Spoon-Knife)などはどうでしょうか。 その後、リポジトリ内に新しいwebhookを作成し、ngrokが提供したURLを指定し、コンテンツタイプとして`application/x-www-form-urlencoded`を選択します。

![新しいngrok URL](/assets/images/webhook_sample_url.png)

**Update webhook（webhookの更新）**をクリックしてください。 本文に`Well, it worked!`というレスポンスが表示されるはずです。 これでうまくいきました。 [**Let me select individual events**]をクリックし、以下を選択します。

* 状況
* プルリクエスト

これらは、関係するアクションが発生するごとに{% data variables.product.product_name %}がこのサーバーに送信するイベントです。 では、ここでプルリクエストのシナリオ*だけ*を処理するようサーバーを更新しましょう。

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

さて、ここで起こっていることを説明しましょう。 {% data variables.product.product_name %}が送信するすべてのイベントには、`X-GitHub-Event` HTTPヘッダが添付されています。 ここではPRイベントのみに注目しましょう。 そこから、情報のペイロードを取得し、タイトルのフィールドを返します。 理想的なシナリオにおいては、サーバはプルリクエストが開かれたときだけではなく、更新されるごとに関与します。 そうすると、すべての新しいプッシュがCIテストに合格するようになります。 しかしこのデモでは、開かれたときについてのみ気にすることにしましょう。

この概念実証を試すため、テストリポジトリのブランチで何か変更を行い、プルリクエストを開きます。 そうすると、サーバーはそれに応じてレスポンスを返すはずです。

### ステータスを扱う

サーバーの環境を整えたところで、最初の要件、すなわちCIステータスの設定 (および更新) を行う準備が整いました。 サーバーを更新するごとに、[**Redeliver**]をクリックして同じペイロードを送信できます。 変更を行うたびに新しいプルリクエストを作成する必要はありません。

{% data variables.product.product_name %} APIとやり取りをしているので、そのやり取りを管理するため[Octokit.rb][octokit.rb]を使用します。 そのクライアントは、以下のように構成します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

後は、CIで処理していることを明確にするため、{% data variables.product.product_name %}のプルリクエストを更新するだけでよいのです。

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

ここでは3つの基本的なことを行っています。

* リポジトリのフルネームを検索する
* プルリクエストの最後のSHAを検索する
* ステータスを「保留中」に設定する

これで完了です。 これで、テストスイートを実行するために必要なあらゆる処理を行うことができます。 コードをJenkinsに渡すことも、API経由で[Travis][travis api]のような別のウェブサービスを呼び出すことも可能です。 その後は、ステータスをもう一度更新するようにしてください。 次の例では、ステータスを単に`"success"`と設定します。

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
```

### おわりに

GitHubでは長年、CIを管理するため[Janky][janky]の特定のバージョンを使用してきました。 その基本的なフローは、上記で構築してきたサーバーと本質的にまったく同じです。 GitHubでは、以下を実行しています。

* プルリクエストが作成または更新されたときにJenkinsに送信する (Janky経由)
* CIのステータスについてレスポンスを待つ
* コードが緑色なら、プルリクエストにマージする

これら全ての通信は、チャットルームに集約されます。 この例を使用するために、独自のCI設定を構築する必要はありません。 いつでも[GitHubインテグレーション][integrations]に頼ることができます。

[status API]: /rest/reference/repos#statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[octokit.rb]: https://github.com/octokit/octokit.rb
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[integrations]: https://github.com/integrations
