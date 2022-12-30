---
title: アプリケーションのリストの説明を書く
intro: '{% data variables.product.prodname_marketplace %} で[アプリをリスト](/marketplace/listing-on-github-marketplace/)するには、GitHub のガイドラインに従ってアプリの説明を書き、画像を指定する必要があります。'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: f29e049529801011d25d2723c5851b56d7a8bb92
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139257'
---
ドラフト リストの **[Listing description]\(リストの説明\)** セクションに入力する必要があるフィールドについてのガイドラインは以下のとおりです。

## 名前のリンク

### リスト名

リストの名前は [{% data variables.product.prodname_marketplace %} ホームページ](https://github.com/marketplace)に表示されます。 名前は255文字を上限とし、アプリケーションの名前と異なっていても構いません。 リストの名前は、{% data variables.product.product_location %}上の既存アカウントと同じ名前にできません。ただし、その名前があなた自身のユーザ名やOrganization名である場合は例外です。 

### ごく簡単な説明

コミュニティには、[{% data variables.product.prodname_marketplace %} ホームページ](https://github.com/marketplace)のアプリ名の下に "ごく短い" 説明が表示されます。

![{% data variables.product.prodname_marketplace %}アプリケーションの短い説明](/assets/images/marketplace/marketplace_short_description.png)

#### 長さ

簡単な説明は、40～80文字にとどめることをお勧めします。 それ以上の文字数を使うこともできますが、説明は簡潔なほうが顧客に読みやすく、わかりやすくなります。

#### コンテンツ

- アプリケーションの機能を説明します。 このスペースを操作の指示には使用しないでください。 次に例を示します。

  **良い例:** GitHub issue のための軽量なプロジェクト管理

  **悪い例:** GitHub 上でプロジェクトと issue を管理してください

  **ヒント：** アクションの呼び出しで動詞の末尾に "s" を追加して、許容できる説明に変換します。_GitHubに関するプロジェクトと問題を管理します。_

- 説明でアプリケーション名は繰り返さないようにします。

  **良い例:** コンテナーネイティブの継続的インテグレーション ツール

  **悪い例:** Skycap はコンテナーネイティブの継続的インテグレーション ツールです

#### 書式設定

- 英文字表記は固有名詞に使用し、大文字小文字は常に正しく使ってください。 大文字で始めて英文字表記するのは固有名詞だけです。

- 短い説明の終わりには句読点を付けません。 完全文では書かないようにし、複数文は絶対に避けてください。

- 大文字で始めて英文字表記するのは固有名詞だけです。 次に例を示します。

  **良い例:** Web 開発者向けのワンクリック配信自動化

  **悪い例:** Web Developers 向けのワンクリック配信自動化

- リストには常に[シリアル コンマ](https://en.wikipedia.org/wiki/Serial_comma)を使います。

- GitHubコミュニティを「ユーザー」と称するのは避けてください。

  **良い例:** 組織内の個人向けに issue を自動的に作成する

  **悪い例:** 組織のユーザー向けに issue を自動的に作成する

- 略語は一般的な場合 (APIなど) を除いて使用しないでください。 次に例を示します。

  **良い例:** GitHub を離れることなく使用できるアジャイル タスク ボード、見積もり、レポート

  **悪い例:** GitHub の UI を離れることなく使用できるアジャイル タスク ボード、見積もり、レポート

### Categories

{% data variables.product.prodname_marketplace %}のアプリケーションはカテゴリ別に表示できます。 **[Primary category]\(プライマリ カテゴリ\)** ドロップダウンでアプリの主な機能を端的に表すカテゴリを選び、必要に応じてアプリに適した **[Secondary category]\(セカンダリ カテゴリ\)** を選びます。

### サポートされている言語

アプリケーションが特定の言語でのみ動作する場合は、アプリケーションがサポートしている言語を最大10まで選択します。 選択した言語はアプリケーションの{% data variables.product.prodname_marketplace %}リストページに表示されます。 このフィールドは省略可能です。

### URLのリスト

**必須 URL**
* **Customer support URL (カスタマー サポートの URL):** 顧客がテクニカル サポート、製品、またはアカウントについて問い合わせるためにアクセスする Web ページの URL。
* **Privacy policy URL (プライバシーポリシーのURL):** アプリのプライバシー ポリシーが表示される Web ページ。
* **Installation URL (インストール URL):** このフィールドは OAuth アプリの場合にのみ表示されます (GitHub アプリはこの URL を使いません。GitHub アプリの設定ページの省略可能な [Setup URL]\(設定 URL\) を代わりに使うからです)。顧客が OAuth アプリを購入し、アプリをインストールした後、GitHub によってインストール URL にリダイレクトされます。 OAuth 認可フローを開始するために、顧客を `https://github.com/login/oauth/authorize` にリダイレクトする必要があります。 詳細については、「[OAuth アプリの新規購入](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)」を参照してください。 GitHub Appをリストする場合、このフィールドはスキップしてください。

**Optional URLs (省略可能な URL)**
* **Company URL (会社の URL):** あなたの会社の Web サイトへのリンク。
* **Status URL (ステータス URL):** アプリのステータスを表示する Web ページのリンク。 ステータスページには、現在および履歴のインシデントレポート、Webアプリケーションの稼働時間ステータス、およびメンテナンスのスケジュールが記載されます。
* **Documentation URL (ドキュメントの URL):** 顧客にアプリの使用方法を説明するドキュメントのリンク。

## ロゴと機能カード

{% data variables.product.prodname_marketplace %}には、アプリケーションを視覚的に区別するために、円形のバッジの中に四角いロゴ画像の付いたリストが表示されます。

![GitHub Marketplaceのロゴおよびバッジ画像](/assets/images/marketplace/marketplace-logo-and-badge.png)

機能カードは、アプリケーションのロゴ、名前、およびブランドの個性を捉えた顧客の背景画像で構成されます。 アプリが、[ホームページ](https://github.com/marketplace)の上部にランダムに表示されている 4 つのアプリの 1 つである場合、{% data variables.product.prodname_marketplace %} にこのカードが表示されます。 各アプリケーションのごく短い説明が、機能カードの下に表示されます。

![機能カード](/assets/images/marketplace/marketplace_feature_card.png)

画像をアップロードして色を選択すると、{% data variables.product.prodname_marketplace %}のドラフトリストに、ロゴと機能カードのプレビューが表示されます。

#### ロゴのガイドライン

ロゴ用として、カスタム画像をアップロードする必要があります。 バッジには、背景色を選択します。

- リストを公開するときにアップスケールしなくて済むように、アップロードするロゴ画像は200×200ピクセル以上にしてください。
- ロゴは正方形にトリミングされます。 ロゴが中央にある正方形の画像ファイルをアップロードすることをお勧めします。
- 最適な結果を得るには、透明な背景のロゴ画像をアップロードしてください。
- 継ぎ目がないようにバッジを表示するには、ロゴ画像の背景色 (または透明) と一致する色をバッジの背景として選択します。
- 単語や文章が含まれるロゴ画像の使用は避けてください。 文字が含まれる画像は、小さい画面で適切に縮小されません。

#### 機能カードのガイドライン

機能カード用として、カスタム背景画像をアップロードする必要があります。 アプリケーションの名前には、文字色を選択します。

- カードを視覚的に区別しやすいように、また{% data variables.product.prodname_marketplace %}ホームページの暗い背景に対して目立つように、背景画像にはパターンまたはテクスチャを使用します。 機能カードには、アプリケーションのブランドの個性を取得する必要があります。
- 背景画像の大きさは、幅965ピクセル x 高さ482ピクセルです。
- アプリケーション名の文字色には、背景画像に対してはっきり見える色を選択してください。

## 一覧表示の詳細

アプリケーションのランディングページにアクセスするには、{% data variables.product.prodname_marketplace %}ホームページまたはカテゴリページからアプリケーションの名前をクリックします。 ランディングページページには、アプリケーションの長い説明が表示されます。説明は「概要説明」と「詳細説明」の2部で構成されています。

「概要説明」は、アプリケーションの{% data variables.product.prodname_marketplace %}ランディングページの上部に表示されます。

![{% data variables.product.prodname_marketplace %}の概要説明](/assets/images/marketplace/marketplace_intro_description.png)

**[Read more]\(詳細を読む\)** をクリックすると、[Detailed description]\(詳細説明\) が表示されます。

![{% data variables.product.prodname_marketplace %}の詳細説明](/assets/images/marketplace/marketplace_detailed_description.png)

説明の記述は、以下のガイドラインに従ってください。

### 長さ

[アプリをリストする](/marketplace/listing-on-github-marketplace/)ときに、必須の [Introductory description]\(概要説明\) フィールドには、150 から 250 文字の長さで 1、2 文の概要を入力することをお勧めします。 それ以上の文字数を使うこともできますが、概要は簡潔なほうが顧客に読みやすく、わかりやすくなります。

オプションの「詳細説明」フィールドに情報を追加することもできます。 アプリのランディング ページで概要説明の下にある **[Read more]\(詳細を読む\)** をクリックすると、この説明が表示されます。 詳細説明は、3 つから 5 つの[価値提案](https://en.wikipedia.org/wiki/Value_proposition)と、それぞれを説明する 1、2 文から構成されます。 この説明には、最大1,000文字まで使用できます。

### コンテンツ

- 概要説明は、必ずアプリケーション名から始めます。

- 説明とバリュープロポジションは、必ず能動態で書きます。

### 書式設定

- バリュープロポジションでは、英文字表記は固有名詞に使用し、大文字小文字は常に正しく使ってください。 大文字で始めて英文字表記するのは固有名詞だけです。

- 説明では句点を使用します。 感嘆符は避けてください。

- バリュープロポジションのタイトルの終わりには句読点を付けません。 バリュープロポジションのタイトルを完全文では書かないようにし、複数文は避けてください。

- 各バリュープロポジションには、タイトルとそれに続く説明があります。 Markdown を使って、タイトルに[レベル 3 ヘッダー](/articles/basic-writing-and-formatting-syntax/#headings)の書式を設定します。 次に例を示します。

  ### 必要なスキルを学ぶ

  GitHub Skills を使用すると、GitHub の使い方、Markdown を使用した効果的なコミュニケーション、マージ競合の処理方法などの学習に役立ちます。

- 大文字で始めて英文字表記するのは固有名詞だけです。

- リストには常に[シリアル コンマ](https://en.wikipedia.org/wiki/Serial_comma)を使います。

- GitHubコミュニティを「ユーザー」と称するのは避けてください。

  **良い例:** 組織内の個人向けに issue を自動的に作成する

  **悪い例:** 組織のユーザー向けに issue を自動的に作成する

- 略語は一般的な場合 (APIなど) を除いて使用しないでください。

## 製品のスクリーンショット

アプリケーションのランディングページで表示されるように、アプリケーションのスクリーンショット画像を5つまでアップロードできます。 スクリーンショットごとに状況がわかるキャプションをオプションとして追加します。 スクリーンショットをアップロードすると、ランディングページに表示したい順序でドラッグできます。

### スクリーンショットのガイドライン

- 画像は高解像度 (幅1200px以上) でなければなりません。
- 画像を次から次へのクリックしたときにページが移動するのを避けるために、すべての画像は高さと幅 (アスペクト比) を等しくする必要があります。
- アプリケーションの動作が見えるように、ユーザーインターフェースはできるだけ多く表示してください。
- ブラウザーでアプリケーションのスクリーンショットを取得するときには、ディスプレイウィンドウの内容のみを含めるようにします。 アドレスバー、タイトルバー、ツールバーのアイコンは含めないでください。小さい画面で適切に縮小されません。
- アップロードしたスクリーンショットは、アプリケーションのランディングページにあるボックスに表示されるので、スクリーンショットの周囲にボックスや枠線は必要ありません。
- キャプションは、短く簡潔なほうが効果があります。

![GitHub Marketplaceのスクリーンショット画像](/assets/images/marketplace/marketplace-screenshots.png)
