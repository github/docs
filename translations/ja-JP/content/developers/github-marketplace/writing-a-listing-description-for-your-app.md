---
title: アプリケーションのリストの説明を書く
intro: '{% data variables.product.prodname_marketplace %}で[アプリケーションをリスト](/marketplace/listing-on-github-marketplace/) するには、GitHubのガイドラインに従ってアプリケーションの説明を書き、画像を指定する必要があります。'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions/
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images/
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



ドラフトリストの [**リストの説明**] セクションに入力する必要があるフィールドについてのガイドラインは以下のとおりです。

### 名前のリンク

#### リスト名

アプリケーションの名前は、[{% data variables.product.prodname_marketplace %} ホームページ](https://github.com/marketplace)に表示されます。 名前の上限は 255 文字です。

#### ごく簡単な説明

コミュニティには、[{% data variables.product.prodname_marketplace %}ホームページ](https://github.com/marketplace)のアプリケーション名の下に「ごく短い」説明が表示されます。

![{% data variables.product.prodname_marketplace %}アプリケーションの短い説明](/assets/images/marketplace/marketplace_short_description.png)

##### 長さ

簡単な説明は、40～80文字にとどめることをお勧めします。 それ以上の文字数を使うこともできますが、説明は簡潔なほうが顧客に読みやすく、わかりやすくなります。

##### 内容

- アプリケーションの機能を説明します。 このスペースを操作の指示には使用しないでください。 例:

  **良い例:** GitHub Issueの軽量なプロジェクト管理

  **悪い例:** GitHubでプロジェクトとIssueを管理してください

  **ヒント:** 「～してください」ではなく「～します」と書けば、一応、説明として許容されます。例: _GitHubでプロジェクトとIssueを管理します_

- 説明でアプリケーション名は繰り返さないようにします。

  **良い例:** コンテナ対応の継続的インテグレーションツール

  **悪い例:** Skycapは、コンテナ対応の継続的インテグレーションツールです

##### フォーマット

- 英文字表記は固有名詞に使用し、大文字小文字は常に正しく使ってください。 大文字で始めて英文字表記するのは固有名詞だけです。

- 短い説明の終わりには句読点を付けません。 完全文では書かないようにし、複数文は絶対に避けてください。

- 大文字で始めて英文字表記するのは固有名詞だけです。 例:

  **良い例:** Web開発者向けのワンクリック配信の自動化

  **悪い例:** Web Developer用のワンクリック配信の自動化

- 3つ以上の項目を並べるとき、[最後の「および」の前には読点](https://en.wikipedia.org/wiki/Serial_comma)を打ちます。

- GitHubコミュニティを「ユーザー」と称するのは避けてください。

  **良い例:** Organizationの人に自動的にIssueを作成する

  **悪い例:** 組織のユーザーについて自動的にIssueを作成する

- 略語は一般的な場合 (APIなど) を除いて使用しないでください。 例:

  **良い例:** GitHubから移動しないアジャイルタスクボード、推定、およびレポート

  **悪い例'T:** GitHub UIから移動しないアジャイルタスクボード、推定、およびレポート

#### カテゴリ

{% data variables.product.prodname_marketplace %}のアプリケーションはカテゴリ別に表示できます。 アプリケーションの主な機能を端的に表すカテゴリを [**Primary category**] ドロップダウンで選択し、オプションでstrong x-id="1">アプリケーションに適した [**Secondary category**] を選択します。

#### サポートされている言語

アプリケーションが特定の言語でのみ動作する場合は、アプリケーションがサポートしている言語を最大10まで選択します。 選択した言語はアプリケーションの{% data variables.product.prodname_marketplace %}リストページに表示されます。 このフィールドはオプションです。

#### URLのリスト

**必須のURL**
* **カスタマーサポートのURL:** 顧客がテクニカルサポート、製品、またはアカウントについて問い合わせるためにアクセスするWebページのURL。
* **プライバシーポリシーのURL:** アプリケーションのプライバシーポリシーが表示されるWebページ。
* **インストールURL:** このフィールドが表示されるのはOAuthアプリケーションの場合のみです。 (GitHub AppはこのURLを使用しません。かわりに、GitHub Appの設定ページからオプションの設定URLを使用するからです。) 顧客がOAuth Appを購入する際、アプリケーションのインストール後にGitHubは顧客をインストールURLにリダイレクトします。 OAuth認証フローを始めるには、顧客を`https://github.com/login/oauth/authorize`にリダイレクトする必要があります。 詳細については、「[OAuthアプリケーションの新規購入](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)」を参照してください。 GitHub Appをリストする場合、このフィールドはスキップしてください。

**オプションのURL**
* **企業URL:** 会社のWebサイトへのリンク。
* **ステータスURL:** アプリケーションのステータスを表示するWebページへのリンク。 ステータスページには、現在および履歴のインシデントレポート、Webアプリケーションの稼働時間ステータス、およびメンテナンスのスケジュールが記載されます。
* **ドキュメントのURL:** 顧客にアプリケーションの使用方法を説明するドキュメントへのリンク。

### ロゴと機能カード

{% data variables.product.prodname_marketplace %}には、アプリケーションを視覚的に区別するために、円形のバッジの中に四角いロゴ画像の付いたリストが表示されます。

![GitHub Marketplaceのロゴおよびバッジ画像](/assets/images/marketplace/marketplace-logo-and-badge.png)

機能カードは、アプリケーションのロゴ、名前、およびブランドの個性を捉えた顧客の背景画像で構成されます。 アプリケーションが、ランダムに選択されて[ホームページ](https://github.com/marketplace)の上部に表示されているアプリケーションの1つである場合、{% data variables.product.prodname_marketplace %}には、このカードが表示されます。 各アプリケーションのごく短い説明が、機能カードの下に表示されます。

![機能カード](/assets/images/marketplace/marketplace_feature_card.png)

画像をアップロードして色を選択すると、{% data variables.product.prodname_marketplace %}のドラフトリストに、ロゴと機能カードのプレビューが表示されます。

##### ロゴのガイドライン

ロゴ用として、カスタム画像をアップロードする必要があります。 バッジには、背景色を選択します。

- リストを公開するときにアップスケールしなくて済むように、アップロードするロゴ画像は200×200ピクセル以上にしてください。
- ロゴは正方形にトリミングされます。 ロゴが中央にある正方形の画像ファイルをアップロードすることをお勧めします。
- 最適な結果を得るには、透明な背景のロゴ画像をアップロードしてください。
- 継ぎ目がないようにバッジを表示するには、ロゴ画像の背景色 (または透明) と一致する色をバッジの背景として選択します。
- 単語や文章が含まれるロゴ画像の使用は避けてください。 文字が含まれる画像は、小さい画面で適切に縮小されません。

##### 機能カードのガイドライン

機能カード用として、カスタム背景画像をアップロードする必要があります。 アプリケーションの名前には、文字色を選択します。

- カードを視覚的に区別しやすいように、また{% data variables.product.prodname_marketplace %}ホームページの暗い背景に対して目立つように、背景画像にはパターンまたはテクスチャを使用します。 機能カードには、アプリケーションのブランドの個性を取得する必要があります。
- 背景画像の大きさは、幅965ピクセル x 高さ482ピクセルです。
- アプリケーション名の文字色には、背景画像に対してはっきり見える色を選択してください。

### リストの詳細

アプリケーションのランディングページにアクセスするには、{% data variables.product.prodname_marketplace %}ホームページまたはカテゴリページからアプリケーションの名前をクリックします。 ランディングページページには、アプリケーションの長い説明が表示されます。説明は「概要説明」と「詳細説明」の2部で構成されています。

「概要説明」は、アプリケーションの{% data variables.product.prodname_marketplace %}ランディングページの上部に表示されます。

![{% data variables.product.prodname_marketplace %}の概要説明](/assets/images/marketplace/marketplace_intro_description.png)

[**Read more...**] をクリックすると、「詳細説明」が表示されます。

![{% data variables.product.prodname_marketplace %}の詳細説明](/assets/images/marketplace/marketplace_detailed_description.png)

説明の記述は、以下のガイドラインに従ってください。

#### 長さ

[アプリケーションをリストする](/marketplace/listing-on-github-marketplace/)ときの必須の「概要説明」フィールドに、150～250文字の長さで1、2文くらいの概要を記述してください。 それ以上の文字数を使うこともできますが、概要は簡潔なほうが顧客に読みやすく、わかりやすくなります。

オプションの「詳細説明」フィールドに情報を追加することもできます。 アプリケーションのランディングページで概要説明の下にある [**Read more...**] をクリックすると、この説明が表示されます。 詳細説明は3～5個の[バリュープロポジション](https://en.wikipedia.org/wiki/Value_proposition)で構成され、それぞれが1、2文の説明です。 この説明には、最大1,000文字まで使用できます。

#### 内容

- 概要説明は、必ずアプリケーション名から始めます。

- 説明とバリュープロポジションは、必ず能動態で書きます。

#### フォーマット

- バリュープロポジションでは、英文字表記は固有名詞に使用し、大文字小文字は常に正しく使ってください。 大文字で始めて英文字表記するのは固有名詞だけです。

- 説明では句点を使用します。 感嘆符は避けてください。

- バリュープロポジションのタイトルの終わりには句読点を付けません。 バリュープロポジションのタイトルを完全文では書かないようにし、複数文は避けてください。

- 各バリュープロポジションには、タイトルとそれに続く説明があります。 タイトルは、Markdownを使用して[レベル3ヘッダ](/articles/basic-writing-and-formatting-syntax/#headings)としてフォーマットします。 例:


  ### 必要なスキルを学ぶ

  GitHub Learning Labでは、GitHubの使い方を学習、Markdownによる効果的な連絡、マージコンフリクトの処理などが可能です。

- 大文字で始めて英文字表記するのは固有名詞だけです。

- 3つ以上の項目を並べるとき、[最後の「および」の前には読点](https://en.wikipedia.org/wiki/Serial_comma)を打ちます。

- GitHubコミュニティを「ユーザー」と称するのは避けてください。

  **良い例:** Organizationの人に自動的にIssueを作成する

  **悪い例:** 組織のユーザーについて自動的にIssueを作成する

- 略語は一般的な場合 (APIなど) を除いて使用しないでください。

### 製品のスクリーンショット

アプリケーションのランディングページで表示されるように、アプリケーションのスクリーンショット画像を5つまでアップロードできます。 スクリーンショットごとに状況がわかるキャプションをオプションとして追加します。 スクリーンショットをアップロードすると、ランディングページに表示したい順序でドラッグできます。

#### スクリーンショットのガイドライン

- 画像は高解像度 (幅1200px以上) でなければなりません。
- 画像を次から次へのクリックしたときにページが移動するのを避けるために、すべての画像は高さと幅 (アスペクト比) を等しくする必要があります。
- アプリケーションの動作が見えるように、ユーザーインターフェースはできるだけ多く表示してください。
- ブラウザーでアプリケーションのスクリーンショットを取得するときには、ディスプレイウィンドウの内容のみを含めるようにします。 アドレスバー、タイトルバー、ツールバーのアイコンは含めないでください。小さい画面で適切に縮小されません。
- アップロードしたスクリーンショットは、アプリケーションのランディングページにあるボックスに表示されるので、スクリーンショットの周囲にボックスや枠線は必要ありません。
- キャプションは、短く簡潔なほうが効果があります。

![GitHub Marketplaceのスクリーンショット画像](/assets/images/marketplace/marketplace-screenshots.png)
