---
title: ウィキのコンテンツを編集する
intro: 'ウィキ内のコンテンツに画像やリンクを追加したり、一部のサポートされている MediaWiki 形式を使用したりできます。'
redirect_from:
  - /articles/adding-links-to-wikis/
  - /articles/how-do-i-add-links-to-my-wiki/
  - /articles/how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/how-do-i-add-images-to-my-wiki/
  - /articles/adding-images-to-wikis/
  - /articles/supported-mediawiki-formats/
  - /articles/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### リンクの追加

ページでサポートされている標準的なマークアップや MediaWiki の構文を使ってウィキにリンクを作成できます。 例:

- ページが Markdown でレンダリングされる場合、リンクの構文は `[Link Text](full-URL-of-wiki-page)` です。
- MediaWiki 構文では、リンクの構文は `[[Link Text|nameofwikipage]]` となります。

### 画像の追加

ウィキでは PNG、JPEG、および GIF 画像を表示できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. ウィキ サイドバーを使って、変更したいページにアクセスし、[**Edit**] をクリックします。
4. ウィキ ツールバーで [**Image**] をクリックします。 ![ウィキの画像追加ボタン](/assets/images/help/wiki/wiki_add_image.png)
5. [Insert Image] ダイアログボックスで、画像の URL と代替テキスト (これは検索エンジンや画像リーダーで使われます) を入力します。
6. Click **OK**.

#### リポジトリでの画像へのリンク

{% data variables.product.product_name %}上のリポジトリにある画像は、ブラウザで URL をコピーし、それを画像へのパスとして利用することでリンクできます。 たとえば、Markdown を使ってウィキに画像を埋め込むと、以下のようになります:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

### サポートされる MediaWiki 形式

ウィキがどのマークアップ言語で書かれたかにかかわらず、特定の MediaWiki 構文を常に使用できます。
- リンク ([Asciidoc を除く](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- 水平罫線: `---`
- 省略記号エンティティ (`&delta;` や `&euro;` など)

セキュリティとパフォーマンス上の理由により、一部の構文はサポートされていません。
- [トランスクルージョン](https://www.mediawiki.org/wiki/Transclusion)
- 定義リスト
- インデント
- 目次
