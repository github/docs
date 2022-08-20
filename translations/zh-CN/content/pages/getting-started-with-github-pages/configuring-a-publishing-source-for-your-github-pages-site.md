---
title: 配置 GitHub Pages 站点的发布源
intro: '{% ifversion pages-custom-workflow %}You can configure your {% data variables.product.prodname_pages %} site to publish when changes are pushed to a specific branch, or you can write a {% data variables.product.prodname_actions %} workflow to publish your site.{% else%}If you use the default publishing source for your {% data variables.product.prodname_pages %} site, your site will publish automatically. You can also choose to publish your site from a different branch or folder.{% endif %}'
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

## About publishing sources

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Publishing from a branch

1. Make sure the branch you want to use as your publishing source already exists in your repository.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion pages-custom-workflow %}
1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
1. Under "Build and deployment", under "Branch", use the **None** or **Branch** drop-down menu and select a publishing source.

   ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
{% else %}
3. 在“{% data variables.product.prodname_pages %}”下，使用 **None（无）**或 **Branch（分支）**下拉菜单选择发布源。 ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}
4. （可选）使用下拉菜单选择发布源的文件夹。 ![用于选择发布源文件夹的下拉菜单](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击 **Save（保存）**。 ![用于保存对发布源设置的更改的按钮](/assets/images/help/pages/publishing-source-save.png)

### Troubleshooting publishing from a branch

{% data reusables.pages.admin-must-push %}

如果选择任意分支上的 `docs` 文件夹作为发布源，然后从仓库的该分支中删除了 `/docs` 文件夹，则您的站点将不会构建，并且您将收到提示缺失 `/docs` 文件夹的页面构建错误。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。

{% ifversion build-pages-with-actions %}

{% data variables.product.prodname_pages %} 站点将始终使用 {% data variables.product.prodname_actions %} 工作流程运行进行部署，即使您已将 {% data variables.product.prodname_pages %} 站点配置为使用其他 CI 工具构建也是如此。 大多数外部 CI 工作流程通过将构建输出提交到仓库的 `gh-pages` 分支来“部署”到 GitHub Pages，并且通常包含一个 `.nojekyll` 文件。 发生这种情况时， {% data variables.product.prodname_actions %} 工作流程将检测分支不需要构建步骤的状态，并且仅执行将站点部署到 {% data variables.product.prodname_pages %} 服务器所需的步骤。

若要查找构建或部署的潜在错误，可以通过查看仓库的工作流程运行来检查 {% data variables.product.prodname_pages %} 站点的工作流程运行情况。 更多信息请参阅“[查看工作流程运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。 有关如何在出现错误时重新运行工作流程的详细信息，请参阅”[重新运行工作流程和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)“。

{% endif %}

{% ifversion pages-custom-workflow %}

## Publishing with a custom {% data variables.product.prodname_actions %} workflow

{% data reusables.pages.pages-custom-workflow-beta %}

To configure your site to publish with {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **GitHub Actions**.
1. {% data variables.product.product_name %} will suggest several starter workflows. If you already have a workflow to publish your site, you can skip this step. Otherwise, choose one of the options to create a {% data variables.product.prodname_actions %} workflow. For more information about creating your custom workflow, see "[Creating a custom {% data variables.product.prodname_actions %} workflow to publish your site](#creating-a-custom-github-actions-workflow-to-publish-your-site)."

   {% data variables.product.prodname_pages %} does not associate a specific workflow to the {% data variables.product.prodname_pages %} settings. However, the {% data variables.product.prodname_pages %} settings will link to the workflow run that most recently deployed your site.

### Creating a custom {% data variables.product.prodname_actions %} workflow to publish your site

For more information about {% data variables.product.prodname_actions %}, see "[Actions](/actions)."

When you configure your site to publish with {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} will suggest starter workflows for common publishing scenarios. The general flow of a workflow is to:

1. Trigger whenever there is a push to the default branch of the repository or whenever a pull request that targets the default branch is opened, reopened, or updated.
1. Use the [`actions/checkout`](https://github.com/actions/checkout) action to check out the repository contents.
1. If required by your site, build any static site files.
1. Use the [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) action to upload the static files as an artifact.
1. If the workflow was triggered by a push to the default branch, use the [`actions/deploy-pages`](https://github.com/actions/deploy-pages) action to deploy the artifact. This step is skipped if the workflow was triggered by a pull request.

The starter workflows use a deployment environment called `github-pages`. If your repository does not already include an environment called `github-pages`, the environment will be created automatically. We recommend that you add an environment protection rule so that only the default branch can deploy to this environment. 更多信息请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”。

{% note %}

**Note**: A `CNAME` file in your repository file does not automatically add or remove a custom domain. Instead, you must configure the custom domain through your repository settings or through the API. For more information, see "[Managing a custom domain for your GitHub Pages site](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" and the [Pages API reference documentation](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Troubleshooting publishing with a custom {% data variables.product.prodname_actions %} workflow

For information about how to troubleshoot your {% data variables.product.prodname_actions %} workflow, see "[About monitoring and troubleshooting](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)."

{% endif %}
