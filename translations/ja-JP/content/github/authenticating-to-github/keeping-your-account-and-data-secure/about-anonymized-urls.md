---
title: About anonymized URLs
intro: 'If you upload an image or video to {% data variables.product.product_name %}, the URL of the image or video will be modified so your information is not trackable.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---
画像をホストするために、{% data variables.product.product_name %}は[オープンソースプロジェクトの Camo](https://github.com/atmos/camo) を使用します。 Camo generates an anonymous URL proxy for each file which hides your browser details and related information from other users. URL は `https://<subdomain>.githubusercontent.com/` で始まり、画像のアップロード方法に応じて異なるサブドメインがあります。

Videos also get anonymized URLs with the same format as image URLs, but are not processed through Camo. This is because {% data variables.product.prodname_dotcom %} does not support externally hosted videos, so the anonymized URL is a link to the uploaded video hosted by {% data variables.product.prodname_dotcom %}.

Anyone who receives your anonymized URL, directly or indirectly, may view your image or video. To keep sensitive media files private, restrict them to a private network or a server that requires authentication instead of using Camo.

### Camoでの問題のトラブルシューティング

まれな状況下において、Camoによって処理された画像が{% data variables.product.prodname_dotcom %}に表示されないことがあります。 問題のありかを判断するために利用できる手順を以下に示します。

{% windows %}

{% tip %}

Windowsユーザは、Git Powershell（これは[{% data variables.product.prodname_desktop %}](https://desktop.github.com/)と共にインストールされます）を使うか、[curl for Windows](http://curl.haxx.se/download.html)をダウンロードする必要があります。

{% endtip %}

{% endwindows %}

#### 画像が表示されない

If an image is showing up in your browser but not on {% data variables.product.prodname_dotcom %}, you can try requesting it locally.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. `curl` を使って画像ヘッダをリクエストしてください。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
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
1. `curl` を使って画像ヘッダをリクエストしてください。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
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
1. Camo の URL に対して `curl -X PURGE` を使い、画像をパージしてください。
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### プライベートネットワークでの画像の表示

画像がプライベートネットワークや、認証を要求するサーバから提供されている場合、{% data variables.product.prodname_dotcom %}では表示できません。 実際のところ、その画像はユーザにサーバへのログインを求めなければ表示されません。

この問題を修正するには、その画像をパブリックにアクセスできるサービスに移してください。

### 参考リンク

- {% data variables.product.prodname_blog %}の[ユーザの画像のプロキシ処理](https://github.com/blog/1766-proxying-user-images)
