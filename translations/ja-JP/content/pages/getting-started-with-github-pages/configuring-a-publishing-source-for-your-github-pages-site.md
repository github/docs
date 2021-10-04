---
title: GitHub Pages サイトの公開元を設定する
intro: '{% data variables.product.prodname_pages %} サイトでデフォルトの公開元を使用している場合、サイトは自動的に公開されます。 様々なブランチあるいはフォルダから選択して{% ifversion ghes < 3.0 %}プロジェクト{% endif %}サイトを公開することもできます。'
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
topics:
  - Pages
shortTitle: 公開ソースの設定
---

公開元に関する詳しい情報については、「[{% data variables.product.prodname_pages %} について](/articles/about-github-pages#publishing-sources-for-github-pages-sites)」を参照してください。

## 公開元を選択する

公開ソースを設定する前に、公開ソースとして使いたいブランチ{% ifversion ghes < 3.0 %}もしくはフォルダ{% endif %}がすでにリポジトリ中に存在することを確認してください。{% ifversion ghes < 3.0 %}たとえば、プロジェクトサイトをリポジトリの`master`ブランチ上の`/docs`フォルダから公開するには、あなたあるいはコラボレータがリポジトリのデフォルトの`master`ブランチ上に`/docs`フォルダを作成しなければなりません。{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion fpt or ghes > 2.22 or ghae %}
3. [{% data variables.product.prodname_pages %}] で、[**None**] または [**Branch**] ドロップダウンメニューから公開元を選択します。 ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
4. 必要に応じて、ドロップダウンメニューで発行元のフォルダを選択します。 ![公開元のフォルダを選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. [**Save**] をクリックします。 ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png){% else %}
3. [{% data variables.product.prodname_pages %}] で、[**Source**] ドロップダウンメニューから公開元を選択します。 ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

## {% data variables.product.prodname_pages %} サイトの公開に関するトラブルシューティング

{% data reusables.pages.admin-must-push %}

公開元として{% ifversion fpt or ghes > 2.22 or ghae %}いずれかの{% else %}`master`{% endif %} ブランチの `docs` フォルダを選択した場合、その後リポジトリ内のそのブランチから `/docs` フォルダを削除すると、サイトがビルドされず、`/docs` フォルダが見つからないことのページのビルドエラーメッセージが表示されます。 詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)」を参照してください。
