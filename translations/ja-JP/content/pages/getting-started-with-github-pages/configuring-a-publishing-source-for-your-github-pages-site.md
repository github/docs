---
title: GitHub Pages サイトの公開元を設定する
intro: '{% data variables.product.prodname_pages %} サイトでデフォルトの公開元を使用している場合、サイトは自動的に公開されます。 You can also choose to publish your site from a different branch or folder.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: 公開ソースの設定
---

公開元に関する詳しい情報については、「[{% data variables.product.prodname_pages %} について](/articles/about-github-pages#publishing-sources-for-github-pages-sites)」を参照してください。

## 公開元を選択する

Before you configure a publishing source, make sure the branch you want to use as your publishing source already exists in your repository.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. [{% data variables.product.prodname_pages %}] で、[**None**] または [**Branch**] ドロップダウンメニューから公開元を選択します。 ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
4. 必要に応じて、ドロップダウンメニューで発行元のフォルダを選択します。 ![公開元のフォルダを選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. [**Save**] をクリックします。 ![公開元の設定への変更を保存するボタン](/assets/images/help/pages/publishing-source-save.png)

## {% data variables.product.prodname_pages %} サイトの公開に関するトラブルシューティング

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. 詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)」を参照してください。
