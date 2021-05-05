---
title: ペイロードを受信するようサーバーを設定する
intro: 受信するwebhookのペイロードを管理するためのサーバー設定を学んでください。
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---



webhookがメッセージを配信する準備ができたので、受信するペイロードを処理するための基本的なSinatraサーバーをセットアップしましょう。

{% note %}

**Note:** You can download the complete source code for this project [from the platform-samples repo][platform samples].

{% endnote %}

### サーバーの作成

サーバーを`/payload`で`POST`リクエストに対して待ち受けさせたいですが、これはGitHubにそこがwebhookのURLだと伝えたからです。 Because we're using ngrok to expose our local environment, we don't need to set up a real server somewhere online, and can happily test out our code locally.

小さなSinatraのアプリケーションをセットアップして、この情報で何かをさせてみましょう。 初期のセットアップは以下のようになるでしょう。

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Sinatraの仕組みに詳しくない方は、[Sinatraのガイド][Sinatra]を読むことをお勧めします。)

このサーバーを起動してください。

Since we set up our webhook to listen to events dealing with `Issues`, go ahead and create a new issue on the repository you're testing with. 作成できたら、ターミナルに戻ってください。 以下のような出力があるでしょう。

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

成功です! webhookを待ち受けるようにサーバーを設定することに成功しました。 これでサーバーは、適切だと考えられる方法でこの情報を処理できるようになりました。 たとえば、「本物の」Webアプリケーションをセットアップしているなら、JSONの出力をデータベースに記録したいかもしれません。

楽しみと利益のためにwebhookを扱うための追加情報については、[webhookのテスト](/webhooks/testing)ガイドを参照してください。

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
