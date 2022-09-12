---
title: ウィキのコンテンツを編集する
intro: ウィキ内のコンテンツに画像やリンクを追加したり、一部のサポートされている MediaWiki 形式を使用したりできます。
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578941'
---
## リンクの追加

ページでサポートされている標準的なマークアップや MediaWiki の構文を使ってウィキにリンクを作成できます。 次に例を示します。

- ページが Markdown でレンダリングされる場合、リンク構文は `[Link Text](full-URL-of-wiki-page)` です。
- MediaWiki 構文では、リンク構文は `[[nameofwikipage|Link Text]]` です。

## イメージの追加

ウィキでは PNG、JPEG、および GIF 画像を表示できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Wiki サイドバーを使用して、変更するページに移動し、 **[編集]** をクリックします。
4. Wiki ツール バーの **[画像]** をクリックします。
   ![Wiki の画像追加ボタン](/assets/images/help/wiki/wiki_add_image.png)
5. [Insert Image] ダイアログボックスで、画像の URL と代替テキスト (これは検索エンジンや画像リーダーで使われます) を入力します。
6. **[OK]** をクリックします。

### リポジトリでの画像へのリンク

{% data variables.product.product_name %}上のリポジトリにある画像は、ブラウザで URL をコピーし、それを画像へのパスとして利用することでリンクできます。 たとえば、Markdown を使ってウィキに画像を埋め込むと、以下のようになります:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## 数式とダイアグラムの追加{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## サポートされる MediaWiki 形式

ウィキがどのマークアップ言語で書かれたかにかかわらず、特定の MediaWiki 構文を常に使用できます。
- リンク ([AsciiDoc を除く](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- `---` を介した水平ルール
- 短縮記号エンティティ (`&delta;` または `&euro;` など)

セキュリティとパフォーマンス上の理由により、一部の構文はサポートされていません。
- [トランスクルージョン](https://www.mediawiki.org/wiki/Transclusion)
- 定義リスト
- [インデント幅]
- 目次
