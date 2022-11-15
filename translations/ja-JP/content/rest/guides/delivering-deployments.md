---
title: デプロイメントを配信する
intro: Deployment REST APIを使用すると、サーバーおよびサードパーティアプリケーションとやり取りするカスタムツールを構築できます。
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132988'
---
[Deployments API][deploy API] によって、所有しているサーバーでプロジェクトを起動するための機能が、{% data variables.product.product_name %} でホストされるプロジェクトに提供されます。 [Status API][status API] と組み合わせると、コードがデフォルト ブランチに到達した瞬間にデプロイを調整できます。

このAPIでは、ステータスAPIを使って、利用できる設定を示します。
このシナリオでは、以下を行います。

* Pull Requestをマージします。
* CIが終了したら、それに応じてプルリクエストのステータスを設定します。
* プルリクエストがマージされたら、サーバーでデプロイメントを実行します。

このCIシステムとホストサーバーは、想像上のものです。 Heroku でも、Amazon でも、何でも構いません。 このガイドのポイントは、通信を管理するサーバーを設定し、構成することにあります。

まだ行っていない場合は必ず `ngrok` を[ダウンロードし][ngrok]、その[使い方][using ngrok]をご確認ください。 これは、ローカル アプリケーションをインターネットに公開するために非常に便利なツールであることがわかりました。

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
すばらしい。 **[個々のイベントの選択]** をクリックして、次のイベントを選択します。

* デプロイ
* [デプロイ ステータス]
* Pull Request

これらは、関係するアクションが発生するたびに、{% data variables.product.product_name %} によってサーバーに送信されるイベントです。 ここではプルリクエストがマージされたときに *だけ* 処理するようにサーバーを設定します。

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

何が起こっているのでしょうか。 {% data variables.product.product_name %} によって送信されるすべてのイベントには、`X-GitHub-Event` HTTP ヘッダーが添付されています。 ここではPRイベントのみに注目しましょう。 プルリクエストがマージされると (その状態は `closed` で、`merged` が `true`)、デプロイが開始されます。

この概念実証をテストするには、テスト リポジトリのブランチで何か変更を行い、プルリクエストを開いてマージします。 そうすると、サーバーはそれに応じてレスポンスを返すはずです。

## デプロイメントを扱う

サーバーの準備が整い、コードがレビューされ、プルリクエストがマージされたので、プロジェクトをデプロイしたいと思います。

まず、イベント リスナーを修正し、マージされたときにプルリクエストを処理して、デプロイメントの待機を開始することから始めましょう。

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

プルリクエストからの情報に基づき、`start_deployment` メソッドを書き込むことから始めます。

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

デプロイには、一部のメタデータを `payload` および `description` の形式で添付できます。 これらの値はオプションですが、ログの記録や情報の表示に役立ちます。

新しいデプロイメントが作成されると、まったく別のイベントがトリガーされます。 そのため、`deployment` のイベント ハンドラーに新しい `switch` ケースがあります。 この情報を使用して、デプロイメントがトリガーされたときに通知を受け取ることができます。

デプロイメントにはかなり時間がかかる場合があるため、さまざまなイベント (デプロイメントがいつ作成されたか、デプロイメントの状態など) をリッスンしたいと思います。

何らかの作業が行われるデプロイメントをシミュレートして、出力に対する影響を確認してみましょう。 まず、`process_deployment` メソッドを完成させます。

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

最後に、ステータス情報の保存をコンソールの出力としてシミュレートします。

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

ここの処理を細かく説明しましょう。 `deployment` イベントをトリガーする `start_deployment` によって、新しいデプロイが作成されます。 そこから、`process_deployment` を呼び出して、進行中の作業をシミュレートします。 この処理中に `create_deployment_status` も呼び出して、状態を `pending` に切り替えることで、受信者に状況を通知します。

デプロイメントが完了したら、状態を `success` に設定します。

## まとめ

GitHub では長年、デプロイを管理するためにあるバージョンの [Heaven][heaven] を使用してきました。 一般的なフローは、上記で構築したサーバーと本質的に同じです。

* CIチェックのステータスに対する応答（成功もしくは失敗）を待つ
* 必要なチェックが成功していれば、Pull Requestをマージする
* Heavenはマージされたコードを取り込み、ステージング及びプロダクションサーバーにデプロイする
* その間に Heaven では、当社のチャット ルームにいる [Hubot][hubot] を通じて全員にビルドについて通知する

これで完了です。 この例を使用するために、独自のデプロイメントを構築する必要はありません。
いつでも [GitHub 統合][integrations]を使用することができます。

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
