---
title: ウィキにフッタやサイドバーを作成する
intro: カスタムのサイドバーやフッタをウィキに追加して、さらに多くのコンテキスト情報を読者に提供できます。
redirect_from:
  - /articles/creating-a-footer/
  - /articles/creating-a-sidebar/
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - コミュニティ
---
### フッタの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. ページの下部にある [**Add a custom footer**] をクリックします。 ![ウィキのフッタセクションの追加](/assets/images/help/wiki/wiki_add_footer.png)
4. テキストエディタを使用して、フッタに表示するコンテンツを入力します。 ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. 追加中のフッタを説明するコミットメッセージを入力します。 ![ウィキのコミットメッセージ](/assets/images/help/wiki/wiki_commit_message.png)
6. 変更を wiki にコミットするには [**Save Page**] をクリックします。

### サイドバーの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. [**Add a custom sidebar**] をクリックします。 ![ウィキのサイドバーの追加](/assets/images/help/wiki/wiki_add_sidebar.png)
4. テキストエディタを使って、ページの内容を追加してください。 ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. 追加するサイドバーを説明するコミットメッセージを入力します。 ![ウィキのコミットメッセージ](/assets/images/help/wiki/wiki_commit_message.png)
6. 変更を wiki にコミットするには [**Save Page**] をクリックします。

### フッタまたはサイドバーをローカルで作成

`_Footer.<extension>` というファイルがフッタの、そして `_Sidebar.<extension>` というファイルがサイドバーの内容として使われます。 他のすべてのウィキページと同じく、これらのファイルは、その拡張子に応じて描画されます。
