---
title: 配置 GitHub Pages 站点的发布源
intro: '如果您使用 {% data variables.product.prodname_pages %} 站点的默认发布源，您的站点将自动发布。 您也可以从不同的分支或文件夹发布{% if currentVersion ver_lt "enterprise-server@3.0" %}项目{% endif %}站点。'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

有关发布源的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”。

### 选择发布源

在配置发布源之前，请确保要用作发布源的分支{% if currentVersion ver_lt "enterprise-server@3.0" %} 或文件夹{% endif %} 已存在于您的仓库中。{% if currentVersion ver_lt "enterprise-server@3.0" %} 例如，从仓库的 `master` 分支上的 `/docs` 文件夹中发布项目站点之前，您或协作者必须在仓库的默认 `master` 分支上创建 `/docs` 文件夹。{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **None（无）**或 **Branch（分支）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
4. （可选）使用下拉菜单选择发布源的文件夹。 ![用于选择发布源文件夹的下拉菜单](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击 **Save（保存）**。 ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png){% else %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **Source（源）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### {% data variables.product.prodname_pages %} 站点发布问题疑难排解

{% data reusables.pages.admin-must-push %}

如果选择 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}任意{% else %} `master`{% endif %} 分支上的 `docs` 文件夹作为发布源，然后从仓库的该分支中删除了 `/docs` 文件夹，则您的站点将不会构建，并且您将收到提示缺失 `/docs` 文件夹的页面构建错误。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。
