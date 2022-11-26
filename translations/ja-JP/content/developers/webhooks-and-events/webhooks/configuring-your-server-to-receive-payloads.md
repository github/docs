---
title: ペイロードを受信するようサーバーを設定する
intro: 受信するwebhookのペイロードを管理するためのサーバー設定を学んでください。
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132983'
---
Webhook でメッセージを配信する準備ができたので、受信ペイロードを処理する基本的な Sinatra サーバーをセットアップします。

{% note %}

**注:** このプロジェクトの完全なソース コードは、[platform-samples リポジトリ][platform samples]からダウンロードできます。

{% endnote %}

## サーバーの作成

サーバーが `/payload` で `POST` 要求をリッスンするようにします。これは、GitHub にそこが Webhook の URL だと伝えたからです。 ここでは `ngrok` を使ってローカル環境を公開しているため、オンラインのどこかに実際のサーバーをセットアップする必要はなく、ローカルでコードを問題なくテストすることができます。

小さなSinatraのアプリケーションをセットアップして、この情報で何かをさせてみましょう。 初期のセットアップは以下のようになります。

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Sinatra のしくみに詳しくない場合は、[Sinatra ガイド][Sinatra]を読むことをお勧めします。)

このサーバーを起動してください。

`Issues` を処理するイベントをリッスンするように Webhook をセットアップしたので、先に進んで、テストしているリポジトリに新しい Issue を作成します。 作成したら、ターミナルに戻ります。 以下のような出力があるでしょう。

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

成功です。 webhookを待ち受けるようにサーバーを設定することに成功しました。 サーバーで、この情報を適切な方法で処理できるようになりました。 たとえば、"実際の" Web アプリケーションをセットアップしている場合は、JSON 出力の一部をデータベースにログできます。

楽しく利益を得るために Webhook を操作する方法の詳細については、[Webhook のテスト](/webhooks/testing)のガイドに進んでください。

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
