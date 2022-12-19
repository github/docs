---
title: Jekyll を使用して GitHub Pages サイトにコンテンツを追加する
intro: '{% data variables.product.prodname_pages %} の Jekyll サイトに、新規ページや投稿を追加できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add content to Pages site
ms.openlocfilehash: 90bd0d067837364eb2767739da286da7906399c0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140212'
---
リポジトリへの書き込み権限があるユーザは、Jekyll を使用して {% data variables.product.prodname_pages %} サイトにコンテンツを追加できます。

## Jekyll サイトのコンテンツについて

{% data variables.product.prodname_pages %} で Jekyll サイトにコンテンツを追加する前に、Jekyll サイトを作成する必要があります。 詳細については、「[Jekyll で {% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site-with-jekyll)」を参照してください。

Jekyll サイトのコンテンツとして 2 つの主なタイプは、ページと投稿です。 ページとは、特定の日付に紐付けられていない、「About」ページなどの独立したコンテンツです。 既定の Jekyll サイトには、`YOUR-SITE-URL/about` のご自分のサイトでページとしてレンダリングされる `about.md` というファイルが含まれています。 このファイルのコンテンツを編集して、「About」ページをパーソナライズできます。また、新しいページを作成するため、「About」ページをテンプレートとして使用できます。 詳細については、Jekyll のドキュメントの「[Pages](https://jekyllrb.com/docs/pages/)」\(ページ\) を参照してください。

投稿とは、ブログ記事のことです。 デフォルトの Jekyll サイトには、既定の投稿ファイルがある、`_posts` という名前のディレクトリが含まれています。 この投稿のコンテンツを編集し、デフォルト投稿を、新規投稿を作成するためのテンプレートとして使用できます。 詳細については、Jekyll のドキュメントの「[Posts](https://jekyllrb.com/docs/posts/)」\(投稿\) を参照してください。

テーマには、デフォルトのレイアウト、およびサイトの新規ページや新規投稿に自動的に適用されるスタイルシートが含まれますが、これらのデフォルト設定はオーバーライドできます。 詳細については、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll#themes)」を参照してください。

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## 新規ページをサイトに追加する

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. 公開元のルートに、ご自分のページ用の _PAGE NAME.md_ という名前の新規ファイルを作成します。_PAGE-NAME_ は、ページを示す意味のあるファイル名に置き換えます。
4. 以下の YAML frontmatter を、ファイルの先頭に追加します。_PAGE TITLE_ はページのタイトルに、_URL-PATH_ はページの URL として指定するパスに置き換えます。 たとえば、サイトのベース URL が `https://octocat.github.io` で _URL-PATH_ が `/about/contact/` である場合、ページは `https://octocat.github.io/about/contact` に配置されます。
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. frontmatter の下に、ページのコンテンツを追加します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

## 新規投稿をサイトに追加する

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
3. `_posts` ディレクトリに移動します。
4. _YYYY-MM-DD-NAME-OF-POST.md_ という名前の新しいファイルを作成し、_YYYY-MM-DD_ をご自分が投稿する日付に置き換え、_NAME-OF-POST_ を投稿の名前に置き換えます。
4. 以下の YAML frontmatter を、ファイルの先頭に追加して、_POST TITLE_ は投稿のタイトルに、_YYYY-MM-DD hh:mm:ss -0000_ は投稿の日時に置き換え、_CATEGORY-1_、_CATEGORY-2_ を投稿するカテゴリの数に合わせて置き換えてください。
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. frontmatter の下に、投稿のコンテンツを追加します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% data reusables.files.choose_pull_request %} {% data reusables.files.merge_pull_request %} {% data reusables.files.write_commit_message_pull_request %} {% data reusables.files.confirm_merge %} {% data reusables.files.delete_branch %}

あなたの投稿がサイトにアップされているはずです。 ご自分のベース URL が`https://octocat.github.io` の場合は新しい投稿の場所は `https://octocat.github.io/YYYY/MM/DD/TITLE.html` になります。

## 次のステップ

{% data reusables.pages.add-jekyll-theme %} 詳細については、「[Jekyll を使って {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」を参照してください。
