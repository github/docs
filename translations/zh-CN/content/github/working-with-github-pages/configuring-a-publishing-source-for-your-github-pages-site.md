---
title: 配置 GitHub Pages 站点的发布源
intro: '如果您使用 {% data variables.product.prodname_pages %} 站点的默认发布源，您的站点将自动发布。 You can also choose to publish your{% if currentVersion ver_lt "enterprise-server@2.22" %} project{% endif %} site from a different branch or folder.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

有关发布源的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”。

### 选择发布源

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@2.22" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@2.22" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Under "{% data variables.product.prodname_pages %}", use the **None** or **Branch** drop-down menu and select a publishing source. ![Drop-down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
4. Optionally, use the drop-down menu to select a folder for your publishing source. ![Drop-down menu to select a folder for publishing source](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击 **Save（保存）**。 ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **Source（源）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### {% data variables.product.prodname_pages %} 站点发布问题疑难排解

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}any{% else %}the `master`{% endif %} branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。
