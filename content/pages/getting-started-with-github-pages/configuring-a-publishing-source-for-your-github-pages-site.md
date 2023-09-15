---
title: Configuring a publishing source for your GitHub Pages site
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
shortTitle: Configure publishing source
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
1. Under "Build and deployment", use the branch dropdown menu and select a publishing source.
   ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
{% else %}
1. Under "{% data variables.product.prodname_pages %}", use the branch dropdown menu and select a publishing source.
   ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}
1. Optionally, use the folder dropdown menu to select a folder for your publishing source.
   ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a folder for a publishing source, labeled "/(root)," is outlined in dark orange.](/assets/images/help/pages/publishing-source-folder-drop-down.png)
1. Click **Save**.

### Troubleshooting publishing from a branch

{% ifversion pages-disable-symlinks-on-legacy-pages %}

{% data reusables.pages.symlink-removal %}

{% endif %}

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)."

{% ifversion build-pages-with-actions %}

Your {% data variables.product.prodname_pages %} site will always be deployed with a {% data variables.product.prodname_actions %} workflow run, even if you've configured your {% data variables.product.prodname_pages %} site to be built using a different CI tool. Most external CI workflows "deploy" to {% data variables.product.prodname_pages %} by committing the build output to the `gh-pages` branch of the repository, and typically include a `.nojekyll` file. When this happens, the {% data variables.product.prodname_actions %} workflow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to {% data variables.product.prodname_pages %} servers.

To find potential errors with either the build or deployment, you can check the workflow run for your {% data variables.product.prodname_pages %} site by reviewing your repository's workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)." For more information about how to re-run the workflow in case of an error, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

{% endif %}

{% ifversion pages-custom-workflow %}

## Publishing with a custom {% data variables.product.prodname_actions %} workflow

{% data reusables.pages.pages-custom-workflow-beta %}

To configure your site to publish with {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **{% data variables.product.prodname_actions %}**.
1. {% data variables.product.product_name %} will suggest several starter workflows. If you already have a workflow to publish your site, you can skip this step. Otherwise, choose one of the options to create a {% data variables.product.prodname_actions %} workflow. For more information about creating your custom workflow, see "[Creating a custom {% data variables.product.prodname_actions %} workflow to publish your site](#creating-a-custom-github-actions-workflow-to-publish-your-site)."

   {% data variables.product.prodname_pages %} does not associate a specific workflow to the {% data variables.product.prodname_pages %} settings. However, the {% data variables.product.prodname_pages %} settings will link to the workflow run that most recently deployed your site.

### Creating a custom {% data variables.product.prodname_actions %} workflow to publish your site

For more information about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions)."

When you configure your site to publish with {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} will suggest starter workflows for common publishing scenarios. The general flow of a workflow is to:

1. Trigger whenever there is a push to the default branch of the repository or whenever the workflow is run manually from the Actions tab.
1. Use the [`actions/checkout`](https://github.com/actions/checkout) action to check out the repository contents.
1. If required by your site, build any static site files.
1. Use the [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) action to upload the static files as an artifact.
1. If the workflow was triggered by a push to the default branch, use the [`actions/deploy-pages`](https://github.com/actions/deploy-pages) action to deploy the artifact. This step is skipped if the workflow was triggered by a pull request.

The starter workflows use a deployment environment called `github-pages`. If your repository does not already include an environment called `github-pages`, the environment will be created automatically. We recommend that you add a deployment protection rule so that only the default branch can deploy to this environment. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

{% ifversion fpt or ghec %}
{% note %}

**Note**: A `CNAME` file in your repository file does not automatically add or remove a custom domain. Instead, you must configure the custom domain through your repository settings or through the API. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" and the [Pages API reference documentation](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}
{% endif %}

### Troubleshooting publishing with a custom {% data variables.product.prodname_actions %} workflow

For information about how to troubleshoot your {% data variables.product.prodname_actions %} workflow, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)."

{% endif %}
