---
title: HTTPS で GitHub Pages サイトを保護する
intro: 'HTTPS は、他者によるあなたのサイトへのトラフィックの詮索や改ざんを防ぐ暗号化のレイヤーを追加します。 透過的に HTTP リクエストを HTTPS にリダイレクトするために、あなたの {% data variables.product.prodname_pages %} サイトに HTTPS を強制できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
topics:
  - pages
---

リポジトリの管理者権限があるユーザは、{% data variables.product.prodname_pages %} サイトに強制的に HTTPS を指定できます。

### HTTPS と {% data variables.product.prodname_pages %} について

カスタムドメインが正しく設定されたサイトを含めたすべての {% data variables.product.prodname_pages %} サイトは、HTTPS や HTTPS 強制をサポートします。 カスタムドメインの詳細は、「[カスタムドメインと {% data variables.product.prodname_pages %} について](/articles/about-custom-domains-and-github-pages)」と「[カスタムドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)」を参照してください。

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### あなたの {% data variables.product.prodname_pages %} サイトに HTTPS を強制する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. [{% data variables.product.prodname_pages %}] で、[**Enforce HTTPS**] を選択します。 ![[Enforce HTTPS] チェックボックス](/assets/images/help/pages/enforce-https-checkbox.png)

### 混在したコンテンツの問題を解決する

{% data variables.product.prodname_pages %} サイトの HTTPS を有効化したが、サイトの HTML がまだ HTTP 経由で画像、CSS、JavaScript を参照している場合、サイトは*混在したコンテンツ*を提供する場合があります。 混在したコンテンツを提供することで、サイトのセキュリティが下がり、アセットの読み込みに問題が生じる場合があります。

サイトでコンテンツの混在を解消するには、サイトの HTML で `http://` を `https://` に変更して、すべてのアセットが HTTPS 経由で提供されるようにしてください。

アセットは通常、以下の場所にあります。
- サイトで Jekyll を使用している場合、HTML ファイルは *_layouts* フォルダにあります。
- CSS は普通、HTML ファイルの `<head>` セクションにあります。
- JavaScript は通常、`<head>` セクションまたは閉じタグ `</body>` の直前にあります。
- 画像はたいてい、`<body>` セクションにあります。

{% tip %}

**ヒント:** サイトのソースファイルでアセットが見つからない場合は、テキストエディタまたは {% data variables.product.product_name %} 上で、サイトのソースファイルから `http`を検索してみましょう。

{% endtip %}

#### HTML ファイルで参照されているアセットの例

|  アセットのタイプ  |                                                       HTTP                                                       |                                                       HTTPS                                                        |
|:----------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
|    CSS     |                      `<link rel="stylesheet" href="http://example.com/css/main.css">`                      |                      `<link rel="stylesheet" href="https://example.com/css/main.css">`                       |
| JavaScript |            `<script type="text/javascript" src="http://example.com/js/main.js"></script>`            |            `<script type="text/javascript" src="https://example.com/js/main.js"></script>`             |
|     画像     | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logo"></a>` |  
