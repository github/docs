---
title: ウィキページを追加または編集する
intro: 'ウィキページは、{% data variables.product.product_name %} 上で直接、あるいはコマンドラインを使ってローカルで追加および編集できます。'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
ms.openlocfilehash: f163818a903d7c8261bd4c0b0268d748f578702f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425265'
---
## ウィキページを追加する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. ページの右上隅にある **[New Page]\(新しいページ\)** をクリックします
  ![Wiki の [New Page]\(新しいページ\) ボタン](/assets/images/help/wiki/wiki_new_page_button.png)
4. Markdown 以外のフォーマットで書くために、[Edit mode] ドロップダウンメニューを使い、他のフォーマットをクリックすることもできます。
  ![Wiki のマークアップの選択](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. テキストエディタを使って、ページの内容を追加してください。
  ![Wiki の WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 追加しようとしている新しいファイルを説明するコミットメッセージを入力してください。
  ![Wiki のコミット メッセージ](/assets/images/help/wiki/wiki_commit_message.png)
7. 変更を Wiki にコミットするには、 **[Save Page]\(ページの保存\)** をクリックします。

## ウィキページを編集する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
4. ウィキサイドバーを使用して、変更したいページに移動してください。 ウィンドウの右上にある **[Edit]\(編集\)** をクリックします。
   ![Wiki のページ編集ボタン](/assets/images/help/wiki/wiki_edit_page_button.png)
5. テキスト エディターを使って、ページの内容を編集します。
   ![Wiki の WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 変更内容を説明するコミットメッセージを入力します。
   ![Wiki のコミット メッセージ](/assets/images/help/wiki/wiki_commit_message.png)
7. 変更を Wiki にコミットするには、 **[Save Page]\(ページの保存\)** をクリックします。

## ローカルでウィキページを追加または編集する

ウィキは Git のリポジトリの一部なので、Git ワークフローを使ってローカルで変更を加え、リポジトリにプッシュできます。

### 手元のコンピュータへウィキをクローンする

すべてのウィキは、その内容をあなたのコンピュータにクローンする簡単な方法を提供しています。
{% data variables.product.product_name %} に最初のページを作成したら、指定した URL のコンピューターにリポジトリをクローンすることができます。

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clones the wiki locally
```

wiki をクローンした後は、新しいファイルの追加、既存のファイルの編集、変更のコミットができます。 ユーザとコラボレータは、Wiki で作業するときにブランチを作成できますが、デフォルトブランチにプッシュされた変更のみがライブになり、読者はそれのみを利用できます。

## ウィキのファイル名について

wiki のページのタイトルはファイル名で決まり、ファイルの拡張子で wiki の内容の描画方法が決まります。

Wiki はマークアップの変換に[私たちのオープンソースの Markup ライブラリ](https://github.com/github/markup)を使っており、ファイルの拡張子によって使うコンバーターを決定しています。 たとえば、ファイルに *foo.md* または *foo.markdown* という名前を付けた場合、wiki は Markdown コンバーターを使います。一方で、*foo.textile* というファイルには Textile コンバーターが使われます。

wiki ページのタイトルには次の文字を使用しないでください: `\ / : * ? " < > |`。 特定のオペレーティングシステムのユーザは、これらの文字を含むファイル名を扱えません。 内容を書く上では、拡張子にマッチしたマークアップ言語を使ってください。そうなっていない場合、内容は正しく描画されません。
