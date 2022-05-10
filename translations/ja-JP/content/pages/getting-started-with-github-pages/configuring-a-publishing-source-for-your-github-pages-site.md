---
title: Configuring a publishing source for your GitHub Pages site
intro: 'If you use the default publishing source for your {% data variables.product.prodname_pages %} site, your site will publish automatically. You can also choose to publish your site from a different branch or folder.'
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

For more information about publishing sources, see "[About {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)."

## Choosing a publishing source

Before you configure a publishing source, make sure the branch you want to use as your publishing source already exists in your repository.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Under "{% data variables.product.prodname_pages %}", use the **None** or **Branch** drop-down menu and select a publishing source.
  ![Drop-down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
4. Optionally, use the drop-down menu to select a folder for your publishing source.
  ![Drop-down menu to select a folder for publishing source](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Click **Save**.
  ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png)

## Troubleshooting publishing problems with your {% data variables.product.prodname_pages %} site

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. For more information, see "[Troubleshooting Jekyll build errors for {% data variables.product.prodname_pages %} sites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)."

{% ifversion fpt %} 

Your {% data variables.product.prodname_pages %} site will always be deployed with a {% data variables.product.prodname_actions %} workflow run, even if you've configured your {% data variables.product.prodname_pages %} site to be built using a different CI tool. Most external CI workflows "deploy" to GitHub Pages by committing the build output to the `gh-pages` branch of the repository, and typically include a `.nojekyll` file. When this happens, the {% data variables.product.prodname_actions %} workflow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to {% data variables.product.prodname_pages %} servers.

To find potential errors with either the build or deployment, you can check the workflow run for your {% data variables.product.prodname_pages %} site by reviewing your repository's workflow runs. For more information, see "[Viewing workflow run history](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."  For more information about how to re-run the workflow in case of an error, see "[Re-running workflows and jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}

{% endif %}
