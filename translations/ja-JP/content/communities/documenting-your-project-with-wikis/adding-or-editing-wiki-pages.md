---
title: ウィキページを追加または編集する
intro: 'ウィキページは、{% data variables.product.product_name %} 上で直接、あるいはコマンドラインを使ってローカルで追加および編集できます。'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface/
  - /articles/editing-wiki-pages-via-the-online-interface/
  - /articles/adding-and-editing-wik-pages-locally/
  - /articles/adding-and-editing-wiki-pages-locally/
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - コミュニティ
---

### ウィキページを追加する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. ページの右上にある [**New Page**] をクリックします。 ![ウィキの新規ページボタン](/assets/images/help/wiki/wiki_new_page_button.png)
4. Markdown 以外のフォーマットで書くために、[Edit mode] ドロップダウンメニューを使い、他のフォーマットをクリックすることもできます。 ![ウィキのマークアップの選択](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. テキストエディタを使って、ページの内容を追加してください。 ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 追加しようとしている新しいファイルを説明するコミットメッセージを入力してください。 ![ウィキのコミットメッセージ](/assets/images/help/wiki/wiki_commit_message.png)
7. 変更を wiki にコミットするには [**Save Page**] をクリックします。

### ウィキページを編集する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
4. ウィキサイドバーを使用して、変更したいページに移動してください。 ページの右上にある [**Edit**] をクリックしてください。 ![ウィキのページ編集ボタン](/assets/images/help/wiki/wiki_edit_page_button.png)
5. テキストエディタを使って、ページの内容を編集します。 ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 変更内容を説明するコミットメッセージを入力します。 ![ウィキのコミットメッセージ](/assets/images/help/wiki/wiki_commit_message.png)
7. 変更を wiki にコミットするには [**Save Page**] をクリックします。

### ローカルでウィキページを追加または編集する

ウィキは Git のリポジトリの一部なので、Git ワークフローを使ってローカルで変更を加え、リポジトリにプッシュできます。

#### 手元のコンピュータへウィキをクローンする

すべてのウィキは、その内容をあなたのコンピュータにクローンする簡単な方法を提供しています。 提供されている次の URL でお使いのコンピュータにリポジトリをクローンできます。

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# ローカルに wiki をクローン
```

wiki をクローンした後は、新しいファイルの追加、既存のファイルの編集、変更のコミットができます。 あなたとコラボレータは、Wiki で作業するときにブランチを作成できますが、デフォルトブランチにプッシュされた変更のみがライブになり、読者が利用できるようになります。

### ウィキのファイル名について

wiki のページのタイトルはファイル名で決まり、ファイルの拡張子で wiki の内容の描画方法が決まります。

wiki は[弊社のオープンソースマークアップライブラリ](https://github.com/github/markup)でマークアップに変換され、ライブラリはファイルの拡張子によって使用するコンバータが決定されます。 たとえばファイルに *foo.md* あるいは *foo.markdown* という名前を付けた場合、wiki は Markdown コンバータを使います。一方で、*foo.textile* という名前のファイルには Textile コンバータが使われます。

wiki ページのタイトルには `\ / : * ? " < > |` という文字は使わないでください。 特定のオペレーティングシステムのユーザは、これらの文字を含むファイル名を扱えません。 内容を書く上では、拡張子にマッチしたマークアップ言語を使ってください。そうなっていない場合、内容は正しく描画されません。
