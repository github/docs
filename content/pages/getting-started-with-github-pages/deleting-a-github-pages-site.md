---
title: Deleting a GitHub Pages site
intro: 'You can delete a {% data variables.product.prodname_pages %} site.'
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can delete a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Delete a GitHub Pages site
---

## Deleting your site

You can delete your site in two ways:
* Delete the repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)."
* Change the source to the `None` branch. For more information, see [Deleting your site by changing the source](#deleting-your-site-by-changing-the-source) below.

If you want to remove the current deployment of your site but do not want to delete the site, you can unpublish your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)."

## Deleting your site by changing the source

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **Deploy from a branch** even if the site is currently using {% data variables.product.prodname_actions %}.
1. Under "Build and deployment", use the branch dropdown menu and select `None` as the publishing source.
   ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
1. Click **Save**.
