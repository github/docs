---
title: デプロイメントを配信する
intro: 'Deployment REST APIを使用すると、サーバーおよびサードパーティアプリケーションとやり取りするカスタムツールを構築できます。'
redirect_from:
  - /guides/delivering-deployments/
  - /guides/automating-deployments-to-integrators/
  - /v3/guides/delivering-deployments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
 
  

[Deployment API][deploy API]は、{% data variables.product.product_name %}にホストされたプロジェクトが、あなたのサーバーで起動できるようにします。 Combined with [the Status API][status API], you'll be able to coordinate your deployments the moment your code lands on the default branch.

このAPIでは、ステータスAPIを使って、利用できる設定を示します。 このシナリオでは、以下を行います。

* ププルリクエストをマージします。
* CIが終了したら、それに応じてプルリクエストのステータスを設定します。
* プルリクエストがマージされたら、サーバーでデプロイメントを実行します。

このCIシステムとホストサーバーは、想像上のものです。 Herokuでも、Amazonでも、何でも構いません。 このガイドのポイントは、通信を管理するサーバーを設定し、構成することにあります。

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

* デプロイメント
* デプロイメントステータス
* プルリクエスト

これらは、関係するアクションが発生するごとに{% data variables.product.product_name %}がこのサーバーに送信するイベントです。 ここではプルリクエストがマージされたときの処理*だけ*を処理するようサーバーを設定します。

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

さて、ここで起こっていることを説明しましょう。 {% data variables.product.product_name %}が送信するすべてのイベントには、`X-GitHub-Event` HTTPヘッダが添付されています。 ここではPRイベントのみに注目しましょう。 プルリクエストがマージされると (ステータスが`closed`となり、`merged`が`true`になると)、デプロイメントを開始します。

この概念実証を試すため、テストリポジトリのブランチで何か変更を行い、プルリクエストを開いてマージします。 そうすると、サーバーはそれに応じてレスポンスを返すはずです。

### デプロイメントを扱う

サーバーの準備が整い、コードがレビューされ、プルリクエストがマージされたので、プロジェクトをデプロイしたいと思います。

まず、イベントリスナーを修正し、マージされたときにプルリクエストを処理して、デプロイメントの待機を開始することから始めましょう。

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

プルリクエストからの情報に基づき、`start_deployment`メソッドを書き込むことから始めます。

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

デプロイメントには、`payload`および`description`の形式で、一部のメタデータを添付できます。 これらの値はオプションですが、ログの記録や情報の表示に役立ちます。

新しいデプロイメントが作成されると、まったく別のイベントがトリガーされます。 ですから、`deployment`のために、イベントハンドラーの`switch`に新たなcaseを用意します。 この情報を使用して、デプロイメントがトリガーされたときに通知を受け取ることができます。

デプロイメントにはかなり時間がかかる場合があるため、デプロイメントがいつ作成されたか、デプロイメントのステータスなどのさまざまなイベントをリッスンしたいと思います。

何かの作業をするデプロイメントをシミュレートし、その影響を出力として通知しましょう。 まず、`process_deployment`メソッドを完成させます。

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

ここの処理を細かく説明しましょう。 新しいデプロイメントが`start_deployment`により作成され、それが`deployment`イベントをトリガーします。 そこから`process_deployment`を呼び出して、実行中の作業をシミュレートします。 この処理の間に`create_deployment_status`も呼び出し、ステータスを`pending`に切り替えることで受信側に状態を通知します。

デプロイメントが完了後、ステータスを`success`に設定します。

### おわりに

GitHubでは長年、デプロイメントを管理するため[Heaven][heaven]の特定のバージョンを使用してきました。 その基本的なフローは、上記で構築してきたサーバーと本質的にまったく同じです。 GitHubでは、以下を実行しています。

* CIのステータスについてレスポンスを待つ
* コードが緑色なら、プルリクエストにマージする
* Heavenはマージされたコードを取り込み、本番サーバーとステージングサーバーにデプロイする
* その間にHeavenは、当社のチャットルームに居座っている[Hubot][hubot]を通じて全員にビルドについて通知する

これで完了です。 この例を使用するために、独自のデプロイメントを構築する必要はありません。 いつでも[GitHubインテグレーション][integrations]に頼ることができます。

[deploy API]: /v3/repos/deployments/
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
