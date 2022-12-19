---
title: CIサーバーの構築
intro: Status APIで独自のCIシステムを構築しましょう。
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: e8a22317562e209adca6cafa3fb8f1d55b1e04ee
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132948'
---
[Status API][status API] は、コミットをテスト サービスと結びつけて、行うすべてのプッシュがテストされ、{% data variables.product.product_name %} の pull request で表すことができるようにする役割を果たします。

このAPIでは、ステータスAPIを使って、利用できる設定を示します。
このシナリオでは、以下を行います。

* プルリクエストが開かれたときにCIスイートを実行します (CIステータスを保留中に設定します)。
* CIが終了したら、それに応じてプルリクエストのステータスを設定します。

このCIシステムとホストサーバーは、想像上のものです。 Travis でも、Jenkins でも、何でも構いません。 このガイドのポイントは、通信を管理するサーバーを設定し、構成することにあります。

まだ行っていない場合は `ngrok` を[ダウンロードし][ngrok]、その[使い方][using ngrok]をご確認ください。 これは、ローカル アプリケーションをインターネットに公開するために非常に便利なツールであることがわかりました。

{% ifversion cli-webhook-forwarding %} {% note %}

**メモ:** または、Webhook 転送を使って、Webhook を受信するようにローカル環境を設定することもできます。 詳しくは、「[GitHub CLI を使った Webhook の受信](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli)」を参照してください。

{% endnote %} {% endif %}

注: このプロジェクトの完全なソース コードは、[platform-samples リポジトリから][platform samples]ダウンロードできます。

## サーバーを書く

ローカル接続が機能していることを証明するための、簡単なSinatraアプリケーションを書きます。
まずは以下のソースから始めましょう。

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Sinatra のしくみに詳しくない場合は、[Sinatra ガイド][Sinatra]を読むことをお勧めします。)

このサーバーを起動してください。 既定では、Sinatra はポート `4567` で起動するため、これのリッスンも開始するよう `ngrok` を構成します。

このサーバーが機能するには、webhookでリポジトリを設定する必要があります。
プルリクエストが作成やマージされるたびに、webhookが起動するよう設定すべきです。
なんでも好きにして構わないようなリポジトリを作成しましょう。 [@octocat の Spoon/Knife リポジトリ](https://github.com/octocat/Spoon-Knife)などはどうでしょうか。
その後、お使いのリポジトリ内に新しい Webhook を作成し、`ngrok` で提供された URL を指定し、コンテンツ タイプとして `application/x-www-form-urlencoded` を選びます。

![新しいngrok URL](/assets/images/webhook_sample_url.png)

**[Webhook の更新]** をクリックします。 `Well, it worked!` という本文の応答が表示されます。
すばらしい。 **[個々のイベントの選択]** をクリックし、以下を選びます。

* 状態
* Pull Request

これらは、関係するアクションが発生するたびに {% data variables.product.product_name %} によってこのサーバーに送信されるイベントです。 ここで pull request のシナリオ *だけ* を処理するようサーバーを更新しましょう。

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

何が起こっているのでしょうか。 {% data variables.product.product_name %} によって送信されるすべてのイベントには、`X-GitHub-Event` HTTP ヘッダーが添付されています。 ここではPRイベントのみに注目しましょう。 そこから、情報のペイロードを取得し、タイトルのフィールドを返します。 理想的なシナリオにおいては、pull request が開かれたときだけではなく、更新されるたびにサーバーが関与します。 そうすると、すべての新しいプッシュがCIテストに合格するようになります。
しかしこのデモでは、開かれたときについてのみ気にすることにしましょう。

この概念実証を試すため、テスト リポジトリのブランチで何か変更を行い、pull request を開きます。 そうすると、サーバーはそれに応じてレスポンスを返すはずです。

## ステータスを扱う

サーバーの環境を整えたところで、最初の要件、つまり CI 状態の設定 (と更新) を始める準備が整いました。 いつでもサーバーを更新するときに、 **[再配信]** をクリックして同じペイロードを送信できることに留意してください。 変更を行うたびに新しい pull request を作成する必要はありません。

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API とやり取りしているので、そのやり取りを管理するために [Octokit.rb][octokit.rb] を使います。 そのクライアントを [{% data variables.product.pat_generic %}][access token] で構成します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

その後、CI で処理していることを明確にするため、{% data variables.product.product_name %} の pull request を更新するだけでよいのです。

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

これで完了です。 これで、テスト スイートを実行するために必要なあらゆるプロセスを実行できます。 コードを Jenkins に渡すことも、API 経由で [Travis][travis api] のような別の Web サービスを呼び出すこともできます。 その後は、状態をもう一度更新するようにしてください。 この例では、単に `"success"` に設定します。

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## まとめ

GitHub では長年、CI を管理するためにあるバージョンの [Janky][janky] を使ってきました。
その基本的なフローは、上記で構築してきたサーバーと本質的にまったく同じです。
GitHubでは、以下を実行しています。

* プルリクエストが作成または更新されたときにJenkinsに送信する (Janky経由)
* CIのステータスについてのレスポンスを待つ
* コードが緑色なら、プルリクエストにマージする

これら全ての通信は、チャットルームに集約されます。 この例を使うために、独自の CI 設定をビルドする必要はありません。
いつでも [GitHub 統合][integrations]に頼ることができます。

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
