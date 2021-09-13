---
title: GitHub Pages サイトを取り下げる
intro: 'You can unpublish your {% data variables.product.prodname_pages %} site so that the site is no longer available.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---
### プロジェクトサイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリに `gh-pages` ブランチが存在する場合は、`gh-pages` ブランチを削除します。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)を参照してください。
3. `gh-pages` ブランチが公開ソースだった場合、
{% if currentVersion == "free-pro-team@latest" %}skip to step 6{% else %}your site is now unpublished and you can skip the remaining steps{% endif %}.
{% data reusables.repositories.sidebar-settings %}
5. [
{% data variables.product.prodname_pages %}", use the **Source** drop-down menu and select **None.**
  ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### ユーザまたは Organization サイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. 詳細は「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」および「[リポジトリを削除する](/articles/deleting-a-repository)」を参照してください。
{% data reusables.pages.update_your_dns_settings %}
