---
title: GitHub Pages サイトを取り下げる
intro: '{% data variables.product.prodname_pages %} サイトを取り下げて、サイトを利用不可にすることができます。'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Pagesサイトの公開取り下げ
---

## プロジェクトサイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリに `gh-pages` ブランチが存在する場合は、`gh-pages` ブランチを削除します。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)を参照してください。
3. 公開ソースが`gh-pages`ブランチなら、{% ifversion fpt or ghec %}ステップ 6 までスキップします{% else %}サイトの公開は取り消され、残りのステップをスキップできます{% endif %}。
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
5. {% data variables.product.prodname_pages %} で、[**Source**] ドロップダウンメニューを使用して [**None**] を選択します。 ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

## ユーザまたは Organization サイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. 公開元として使用しているブランチを削除するか、リポジトリ全体を削除します。 詳細は「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」および「[リポジトリを削除する](/articles/deleting-a-repository)」を参照してください。
{% data reusables.pages.update_your_dns_settings %}
