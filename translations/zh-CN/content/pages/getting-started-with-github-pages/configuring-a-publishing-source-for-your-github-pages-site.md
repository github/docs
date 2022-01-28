---
title: 配置 GitHub Pages 站点的发布源
intro: '如果您使用 {% data variables.product.prodname_pages %} 站点的默认发布源，您的站点将自动发布。 You can also choose to publish your site from a different branch or folder.'
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

Before you configure a publishing source, make sure the branch you want to use as your publishing source already exists in your repository.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **None（无）**或 **Branch（分支）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
4. （可选）使用下拉菜单选择发布源的文件夹。 ![用于选择发布源文件夹的下拉菜单](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击 **Save（保存）**。 ![用于保存对发布源设置的更改的按钮](/assets/images/help/pages/publishing-source-save.png)

## {% data variables.product.prodname_pages %} 站点发布问题疑难排解

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。

{% ifversion fpt %}

Your {% data variables.product.prodname_pages %} site will always be deployed with a {% data variables.product.prodname_actions %} workflow run, even if you've configured your {% data variables.product.prodname_pages %} site to be built using a different CI tool. Most external CI workflows "deploy" to GitHub Pages by committing the build output to the `gh-pages` branch of the repository, and typically include a `.nojekyll` file. When this happens, the {% data variables.product.prodname_actions %} worfklow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to {% data variables.product.prodname_pages %} servers.

To find potential errors with either the build or deployment, you can check the workflow run for your {% data variables.product.prodname_pages %} site by reviewing your repository's workflow runs. 更多信息请参阅“[查看工作流程运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。  For more information about how to re-run the workflow in case of an error, see "[Re-running workflows and jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}

{% endif %}
