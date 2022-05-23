---
title: 配置 GitHub Pages 站点的发布源
intro: '如果您使用 {% data variables.product.prodname_pages %} 站点的默认发布源，您的站点将自动发布。 您也可以选择从不同的分支或文件夹发布您的站点。'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
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
shortTitle: 配置发布源
---

有关发布源的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)”。

## 选择发布源

在配置发布源之前，请确保您要用作发布源的分支已经存在于您的仓库中。

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **None（无）**或 **Branch（分支）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
4. （可选）使用下拉菜单选择发布源的文件夹。 ![用于选择发布源文件夹的下拉菜单](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击 **Save（保存）**。 ![用于保存对发布源设置的更改的按钮](/assets/images/help/pages/publishing-source-save.png)

## {% data variables.product.prodname_pages %} 站点发布问题疑难排解

{% data reusables.pages.admin-must-push %}

如果选择任意分支上的 `docs` 文件夹作为发布源，然后从仓库的该分支中删除了 `/docs` 文件夹，则您的站点将不会构建，并且您将收到提示缺失 `/docs` 文件夹的页面构建错误。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。

{% ifversion fpt %}

{% data variables.product.prodname_pages %} 站点将始终使用 {% data variables.product.prodname_actions %} 工作流程运行进行部署，即使您已将 {% data variables.product.prodname_pages %} 站点配置为使用其他 CI 工具构建也是如此。 大多数外部 CI 工作流程通过将构建输出提交到仓库的 `gh-pages` 分支来“部署”到 GitHub Pages，并且通常包含一个 `.nojekyll` 文件。 发生这种情况时， {% data variables.product.prodname_actions %} 工作流程将检测分支不需要构建步骤的状态，并且仅执行将站点部署到 {% data variables.product.prodname_pages %} 服务器所需的步骤。

若要查找构建或部署的潜在错误，可以通过查看仓库的工作流程运行来检查 {% data variables.product.prodname_pages %} 站点的工作流程运行情况。 更多信息请参阅“[查看工作流程运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。  有关如何在出现错误时重新运行工作流程的详细信息，请参阅”[重新运行工作流程和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)“。

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}

{% endif %}
