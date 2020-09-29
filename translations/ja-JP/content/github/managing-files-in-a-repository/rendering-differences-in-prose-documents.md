---
title: 文章ドキュメントの差分をレンダリングする
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

文章ドキュメントを含むコミットとプルリクエストには、そのドキュメントを*ソース*と*レンダリング済み*のビューで表示する機能があります。

ソースビューでは入力された生テキストが表示されますが、レンダリング済みビューでは {% data variables.product.product_name %} でレンダリングされた様子を見ることができます。 たとえば、 Markdown での `**bold**` がレンダリング済みビューで **bold** と表示される、という違いがあります。

文章のレンダリングがサポートされるのは、[github/markup](https://github.com/github/markup) によってサポートされるレンダリング済みドキュメントです。

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![レンダリング済み文章ドキュメントを表示する紙アイコン](/assets/images/help/repository/rendered_prose_diff.png)

{% octicon "file" aria-label="The paper icon" %} をクリックすると、コミットの一環としてドキュメントに行った変更を表示できます。

![レンダリング済み文章変更](/assets/images/help/repository/rendered_prose_changes.png)

### 属性変更を可視化する

読者に見せる文字部分とは異なり、属性への変更は、レンダリングされたドキュメントでは見えなくなります。Github ではそれをツールチップで示します。 たとえば、リンク URL が、あるウェブサイトから別のものに変更された場合、ツールチップで次のように示されます:

![レンダリング済み文章属性変更](/assets/images/help/repository/prose_diff_attributes.png)

### 変更についてのコメントを入力する

[コミットコメント](/articles/commenting-on-differences-between-files)は、*ソース*ビュー内で行ごとにのみ追加できます。

### ヘッダにリンクする

[他のレンダリング済み文章ドキュメント](/articles/about-readmes)と同様、ドキュメントのヘッダにマウスオーバーすると、リンクアイコンが作成されます。 レンダリング済み文章の diff の読者を特定のセクションにリンクできます。

### 複雑な diff を表示する

プルリクエストの中には、大きくて複雑なドキュメントでの多数の変更を含むものがあります。 When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

その場合でもソースビューは変更の分析やコメント入力に使用できます。

### HTML 要素を表示する

HTML ドキュメントへのコミットのレンダリング済みビューは、直接にはサポートしていません。 形式の中には、Markdown のように、任意の HTML をドキュメントに埋め込むことができるものがあります。 そうしたドキュメントが {% data variables.product.product_name %}で表示される際、埋め込まれた HTML はプレビューで表示されますが、表示できないもの (埋め込み YouTube 動画など) もあります。

通常、埋め込み HTML を含むドキュメントへの変更のレンダリング済みビューでは、{% data variables.product.product_name %} のドキュメントのビューでサポートされている要素への変更を表示します。 埋め込み HTML を含むドキュメントへの変更のレビューは、完全を期して、常にレンダリング済みとソースの両方のビューで行う必要があります。
