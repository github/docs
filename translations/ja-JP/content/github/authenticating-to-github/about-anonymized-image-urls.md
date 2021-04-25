---
title: 匿名化された画像URLについて
intro: '画像を{% data variables.product.product_name %}にアップロードする場合、その画像のURLは情報が追跡できないように変更されます。'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
versions:
  free-pro-team: '*'
topics:
  - アイデンティティ
  - アクセス管理
---

画像をホストするために、{% data variables.product.product_name %}は[オープンソースプロジェクトの Camo](https://github.com/atmos/camo) を使用します。 Camo は、画像ごとに匿名の URL プロキシを生成し、ブラウザの詳細と関連情報を他のユーザから見えないようにします。 URL は `https://<subdomain>.githubusercontent.com/` で始まり、画像のアップロード方法に応じて異なるサブドメインがあります。

匿名化した画像URLを受け取った人は、直接であれ間接であれ、その画像を見ることができます。 機密の画像をプライベートにしておきたい場合は、Camoを使う代わりにそれらを認証が必要なプライベートなネットワークあるいはサーバーから提供するようにしてください。

### Camoでの問題のトラブルシューティング

まれな状況下において、Camoによって処理された画像が{% data variables.product.prodname_dotcom %}に表示されないことがあります。 問題のありかを判断するために利用できる手順を以下に示します。

{% windows %}

{% tip %}

Windowsユーザは、Git Powershell（これは[{% data variables.product.prodname_desktop %}](https://desktop.github.com/)と共にインストールされます）を使うか、[curl for Windows](http://curl.haxx.se/download.html)をダウンロードする必要があります。

{% endtip %}

{% endwindows %}

#### 画像が表示されない

画像がブラウザでは表示されるものの{% data variables.product.prodname_dotcom %}では表示されない場合、その画像をローカルで要求してみることができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `curl` を使って画像ヘッダをリクエストしてください。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. `Content-Type` の値を確認してください。 ここでは `image/x-png` です。
4. コンテントタイプは[Camo がサポートするタイプのリスト](https://github.com/atmos/camo/blob/master/mime-types.json)で確認してください。

コンテントタイプが Camo でサポートされていない場合、試せることがいくつかあります:
  * 画像をホストしているサーバーを自分で所有しているなら、画像の適切なコンテントタイプを返すように修正してください。
  * 画像を外部のサービスでホストしているなら、そのサービスのサポートに連絡してください。
  * Camo にプルリクエストを送り、コンテントタイプをリストに追加してもらってください。

#### 最近変更した画像が更新されない

最近変更した画像がブラウザでは表示され、{% data variables.product.prodname_dotcom %}では表示されない場合、その画像のキャッシュをリセットしてみることができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `curl` を使って画像ヘッダをリクエストしてください。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

`Cache-Control`の値を確認してください。 この例では`Cache-Control`はありません。 その場合:
  * 画像をホストしているサーバを自分で保有しているなら、画像に対する `Cache-Control` に `no-cache` を返すように修正してください。
  * 画像を外部のサービスでホストしているなら、そのサービスのサポートに連絡してください。

 `Cache-Control` *が* `no-cache` に設定されている場合は、{% data variables.contact.contact_support %} にお問い合わせいただくか、{% data variables.contact.community_support_forum %} を検索してください。

#### Camoのキャッシュから画像を削除する

キャッシュをパージすれば、すべての{% data variables.product.prodname_dotcom %}ユーザは画像をリクエストし直すようになるので、この方法はごく控えめに使うべきであり、これまでに述べたステップがうまく働かなかった場合にかぎるべきです。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Camo の URL に対して `curl -X PURGE` を使い、画像をパージしてください。
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### プライベートネットワークでの画像の表示

画像がプライベートネットワークや、認証を要求するサーバから提供されている場合、{% data variables.product.prodname_dotcom %}では表示できません。 実際のところ、その画像はユーザにサーバへのログインを求めなければ表示されません。

この問題を修正するには、その画像をパブリックにアクセスできるサービスに移してください。

### 参考リンク

- {% data variables.product.prodname_blog %}の[ユーザの画像のプロキシ処理](https://github.com/blog/1766-proxying-user-images)
