---
title: Jekyll を使用して GitHub Pages サイトにコンテンツを追加する
intro: '{% data variables.product.prodname_pages %} の Jekyll サイトに、新規ページや投稿を追加できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

リポジトリへの書き込み権限があるユーザは、Jekyll を使用して {% data variables.product.prodname_pages %} サイトにコンテンツを追加できます。

### Jekyll サイトのコンテンツについて

{% data variables.product.prodname_pages %} で Jekyll サイトにコンテンツを追加する前に、Jekyll サイトを作成する必要があります。 詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site-with-jekyll)」を参照してください。

Jekyll サイトのコンテンツとして 2 つの主なタイプは、ページと投稿です。 ページとは、特定の日付に紐付けられていない、「About」ページなどの独立したコンテンツです。 デフォルトの Jekyll サイトには、`about.md` という名前のファイルが含まれ、サイトの `YOUR-SITE-URL/about` でページとして表示されます。 このファイルのコンテンツを編集して、「About」ページをパーソナライズできます。また、新しいページを作成するため、「About」ページをテンプレートとして使用できます。 詳しい情報については、Jekyll ドキュメンテーションの「[Pages](https://jekyllrb.com/docs/pages/)」を参照してください。

投稿とは、ブログ記事のことです。 デフォルトの Jekyll サイトには、デフォルト投稿ファイルがある、`_posts` という名前のディレクトリが含まれています。 この投稿のコンテンツを編集し、デフォルト投稿を、新規投稿を作成するためのテンプレートとして使用できます。 詳しい情報については、Jekyllのドキュメンテーションの「[Posts](https://jekyllrb.com/docs/posts/)」を参照してください。

テーマには、デフォルトのレイアウト、およびサイトの新規ページや新規投稿に自動的に適用されるスタイルシートが含まれますが、これらのデフォルト設定はオーバーライドできます。 詳しい情報については、「[{% data variables.product.prodname_pages %} と Jekyll](/articles/about-github-pages-and-jekyll#themes)」を参照してください。

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

### 新規ページをサイトに追加する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. ページを作成するため、公開元のルートに _PAGE-NAME.md_ という名前の新規ファイルを作成します。_PAGE-NAME_ は、ページを示す、意味のあるファイル名に置き換えてください。
4. 以下の YAML frontmatter を、ファイルの先頭に追加します。_PAGE TITLE_ はページのタイトルに、_URL-PATH_ はページの URL として指定したい URL に置き換えてください。 たとえば、サイトのベース URL が `https://octocat.github.io` で、_URL-PATH_ が `/about/contact/` である場合、ページの場所は `https://octocat.github.io/about/contact` となります。
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. frontmatter の下に、ページのコンテンツを追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 新規投稿をサイトに追加する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. `_posts` ディレクトリに移動します。
4. _YYYY-MM-DD-NAME-OF-POST.md_ という名前の新規ファイルを作成します。_YYYY-MM-DD_ は投稿の日時に、_NAME-OF-POST_ は投稿の名前に置き換えてください。
4. 以下の YAML frontmatter を、ファイルの先頭に追加します。 _POST TITLE_ は投稿のタイトルに、 _YYYY-MM-DD hh:mm:ss -0000_ は投稿の日時に置き換え、投稿に追加したいカテゴリを _CATEGORY-1_、_CATEGORY-2_ のように好きなだけ追加し、カテゴリの名前に置き換えてください。
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. frontmatter の下に、投稿のコンテンツを追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

Your post should now be up on your site! If the base URL of your site is `https://octocat.github.io`, then your new post will be located at `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

### 次のステップ

{% data reusables.pages.add-jekyll-theme %}詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」を参照してください。
