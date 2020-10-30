---
title: GitHub Pages サイトを取り下げる
intro: 'サイトを{% if currentVersion == "free-pro-team@latest" %}パブリックに{% else %}{% data variables.product.product_location %} を使用する誰にも{% endif %} 使用できないように、{% data variables.product.prodname_pages %} サイトを取り下げることができます。'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### プロジェクトサイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリに `gh-pages` ブランチが存在する場合は、`gh-pages` ブランチを削除します。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)を参照してください。
3. `gh-pages` ブランチが公開ソースだった場合、
{% if currentVersion == "free-pro-team@latest" %}ステップ 6 までスキップしてください{% else %}サイトが取り下げられ、残りのステップはスキップできます{% endif %}。
{% data reusables.repositories.sidebar-settings %}
5. {% data variables.product.prodname_pages %} で、[**Source**] ドロップダウンメニューを使用して [**None**] を選択します。 ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### ユーザまたは Organization サイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. 詳細は「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」および「[リポジトリを削除する](/articles/deleting-a-repository)」を参照してください。
{% data reusables.pages.update_your_dns_settings %}
