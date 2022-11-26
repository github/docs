---
title: 匿名化された URL について
intro: '画像または動画を {% data variables.product.product_name %} にアップロードする場合、その画像または動画の URL は情報を追跡できないように変更されます。'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-anonymized-urls
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: b96c01144d28d668d33e96e4067801395aaa8275
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120006'
---
画像をホストするために、{% data variables.product.product_name %} では、[オープン ソース プロジェクト Camo](https://github.com/atmos/camo) を使用しています。 Camo では、ファイルごとに匿名の URL プロキシを生成し、ブラウザの詳細や関連情報が他のユーザーに対して非表示となるようにします。 URL は、`https://<subdomain>.githubusercontent.com/` で始まり、画像のアップロード方法に応じて、さまざまなサブドメインが含まれます。 

また、動画にも匿名化された URL があります。画像の URL と同じ形式ですが、Camo を使用した処理は行いません。 これは、{% data variables.product.prodname_dotcom %} が外部でホストされた動画をサポートしないため、匿名化された URL が {% data variables.product.prodname_dotcom %} によってホストされたアップロード済み動画へのリンクとなるためです。

匿名化された URL を受け取ったユーザーは、直接であれ、間接であれ、画像や動画を見ることができます。 機密のメディア ファイルを非公開のままにしておくには、Camo を使用するのではなく、認証が必要なプライベート ネットワークまたはサーバーに制限します。

## Camoでの問題のトラブルシューティング

まれな状況下において、Camoによって処理された画像が{% data variables.product.prodname_dotcom %}に表示されないことがあります。 問題のありかを判断するために利用できる手順を以下に示します。

{% windows %}

{% tip %}

Windows ユーザーは、Git PowerShell ([{% data variables.product.prodname_desktop %} と併せてインストールされます](https://desktop.github.com/)) を使用するか、[Windows 用の curl](http://curl.haxx.se/download.html) をダウンロードします。

{% endtip %}

{% endwindows %}

### 画像が表示されない

画像がブラウザーに表示されるものの、{% data variables.product.prodname_dotcom %} には表示されない場合、その画像をローカルでリクエストしてみることができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
1. `curl` を使用して、画像ヘッダーをリクエストします。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. `Content-Type` の値を確認します。 このケースでは `image/x-png` です。
4. そのコンテント タイプを、[Camo でサポートされている種類の一覧](https://github.com/atmos/camo/blob/master/mime-types.json)に照らし合わせて確認します。

コンテントタイプが Camo でサポートされていない場合、試せることがいくつかあります:
  * 画像をホストしているサーバーを自分で所有しているなら、画像の適切なコンテントタイプを返すように修正してください。
  * 画像を外部のサービスでホストしているなら、そのサービスのサポートに連絡してください。
  * Camo にプルリクエストを送り、コンテントタイプをリストに追加してもらってください。

### 最近変更した画像が更新されない

最近変更した画像がブラウザでは表示され、{% data variables.product.prodname_dotcom %}では表示されない場合、その画像のキャッシュをリセットしてみることができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
1. `curl` を使用して、画像ヘッダーをリクエストします。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

`Cache-Control` の値を確認します。 この例には、`Cache-Control` はありません。 そのような場合は、次の処理を行います。
  * 画像をホストしているサーバーを所有している場合は、画像の `no-cache` の `Cache-Control` を返すように、そのサーバーを修正します。
  * 画像を外部のサービスでホストしているなら、そのサービスのサポートに連絡してください。

 `Cache-Control` が `no-cache` に設定 "*されている*" 場合、{% data variables.contact.contact_support %} に問い合わせるか、{% data variables.contact.community_support_forum %} を検索してください。

### Camoのキャッシュから画像を削除する

キャッシュをパージすれば、すべての{% data variables.product.prodname_dotcom %}ユーザは画像をリクエストし直すようになるので、この方法はごく控えめに使うべきであり、これまでに述べたステップがうまく働かなかった場合にかぎるべきです。

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Camo URL で `curl -X PURGE` を使用する画像を消去します。
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

### プライベートネットワークでの画像の表示

画像がプライベートネットワークや、認証を要求するサーバから提供されている場合、{% data variables.product.prodname_dotcom %}では表示できません。 実際のところ、その画像はユーザにサーバへのログインを求めなければ表示されません。

この問題を修正するには、その画像をパブリックにアクセスできるサービスに移してください。

## 参考資料

- {% data variables.product.prodname_blog %} 「[Proxying user images](https://github.com/blog/1766-proxying-user-images)」 (ユーザー イメージのプロキシ)
