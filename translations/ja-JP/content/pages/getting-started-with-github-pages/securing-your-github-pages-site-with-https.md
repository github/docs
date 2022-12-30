---
title: HTTPS で GitHub Pages サイトを保護する
intro: 'HTTPS は、他者によるあなたのサイトへのトラフィックの詮索や改ざんを防ぐ暗号化のレイヤーを追加します。 透過的に HTTP リクエストを HTTPS にリダイレクトするために、あなたの {% data variables.product.prodname_pages %} サイトに HTTPS を強制できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: fb1ce5b0a0f5c19ac58ef0b93cb379f807a89fe4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273067'
---
リポジトリの管理者権限があるユーザは、{% data variables.product.prodname_pages %} サイトに強制的に HTTPS を指定できます。

## HTTPS と {% data variables.product.prodname_pages %} について

カスタムドメインが正しく設定されたサイトを含めたすべての {% data variables.product.prodname_pages %} サイトは、HTTPS や HTTPS 強制をサポートします。 カスタム ドメインの詳しい情報については、「[カスタム ドメインと {% data variables.product.prodname_pages %} について](/articles/about-custom-domains-and-github-pages)」と[カスタムドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)」を参照してください。

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**注:** RFC3280 では、共通名の長さは最大 64 文字とされています。 したがって、証明書が正常に作成されるようにするには、{% data variables.product.prodname_pages %}サイトのドメイン名全体の長さは64文字未満でなければなりません。

{% endnote %}

## あなたの {% data variables.product.prodname_pages %} サイトに HTTPS を強制する

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. 「{% data variables.product.prodname_pages %}」で、 **[HTTPS の適用]** を選択します。
  ![[HTTPS の適用] チェックボックス](/assets/images/help/pages/enforce-https-checkbox.png)

## 証明書プロビジョニングのトラブルシューティング（"Certificate not yet created" error"）

Pagesの設定でカスタムドメインを設定もしくは変更した場合、自動DNSチェックが開始されます。 このチェックは、DNS設定が{% data variables.product.prodname_dotcom %}による自動的な証明書の取得を許可するように設定されているかを判断します。 チェックが正常に終わったら、{% data variables.product.prodname_dotcom %} によって、[[Let's Encrypt]](https://letsencrypt.org/) から TLS 証明書をリクエストするジョブがキューイングされます。 有効な証明書を受信すると、{% data variables.product.prodname_dotcom %}は自動的にそれをPagesのTLSターミネーションを処理するサーバーにアップロードします。 このプロセスが正常に終了すると、カスタムドメイン名の横にチェックマークが表示されます。

このプロセスには多少の時間がかかることがあります。 **[保存]** をクリックしてから数分経ってもプロセスが完了しない場合は、カスタム ドメイン名の横にある **[削除]** をクリックしてみてください。 ドメイン名を再入力し、 **[保存]** をもう一度クリックします。 これでプロビジョニングのプロセスがキャンセルされ、再起動されます。

## 混在したコンテンツの問題を解決する

{% data variables.product.prodname_pages %} サイトで HTTPS を有効にしているのに、サイトの HTML が HTTP 経由で画像、CSS、または JavaScript を引き続き参照している場合、サイトは "*混在したコンテンツ*" を提供しています。 混在したコンテンツを提供することで、サイトのセキュリティが下がり、アセットの読み込みに問題が生じる場合があります。

サイトでのコンテンツの混在を解消するには、サイトの HTML で `http://` を `https://` に変更して、すべてのアセットが HTTPS 経由で提供されるようにしてください。

アセットは通常、以下の場所にあります。
- サイトで Jekyll を使っている場合、HTML ファイルはおそらく *_layouts* フォルダーにあります。
- CSS は通常、HTML ファイルの `<head>` セクションにあります。
- JavaScript は通常、`<head>` セクションか、`</body>` を閉じるタグの直前にあります。
- 画像は通常、`<body>` セクションにあります。

{% tip %}

**ヒント:** サイトのソース ファイルにアセットが見つからない場合は、テキスト エディターか {% data variables.product.product_name %} で、サイトのソース ファイルを `http` で検索してください。

{% endtip %}

### HTML ファイルで参照されているアセットの例

| 資産の種類 | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| Image        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
