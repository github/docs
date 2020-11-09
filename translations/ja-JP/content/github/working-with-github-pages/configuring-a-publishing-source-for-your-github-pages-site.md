---
title: GitHub Pages サイトの公開元を設定する
intro: '{% data variables.product.prodname_pages %} サイトでデフォルトの公開元を使用している場合、サイトは自動的に公開されます。 You can also choose to publish your{% if currentVersion ver_lt "enterprise-server@2.23" %} project{% endif %} site from a different branch or folder.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

公開元に関する詳しい情報については、「[{% data variables.product.prodname_pages %} について](/articles/about-github-pages#publishing-sources-for-github-pages-sites)」を参照してください。

### 公開元を選択する

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@2.23" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@2.23" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
3. Under "{% data variables.product.prodname_pages %}", use the **None** or **Branch** drop-down menu and select a publishing source. ![Drop-down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
4. Optionally, use the drop-down menu to select a folder for your publishing source. ![Drop-down menu to select a folder for publishing source](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. [**Save**] をクリックします。 ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. [
{% data variables.product.prodname_pages %}", use the **Source** drop-down menu and select a publishing source.
   ![公開元を選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### {% data variables.product.prodname_pages %} サイトの公開に関するトラブルシューティング

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}any{% else %}the `master`{% endif %} branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. 詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)」を参照してください。
