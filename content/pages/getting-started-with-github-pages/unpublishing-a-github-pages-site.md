---
title: Unpublishing a GitHub Pages site
intro: 'You can unpublish your {% data variables.product.prodname_pages %} site so that the site is no longer available.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
---

{% ifversion pages-custom-workflow %}

When you unpublish your site, the site will no longer be available. Any existing repository settings or content will not be affected.

{% data reusables.repositories.navigate-to-repo %}
1. Under **{% data variables.product.prodname_pages %}**, next to the **Your site is live at** message, click {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. In the menu that appears, select **Unpublish site**.
   ![Screenshot of {% data variables.product.prodname_pages %} settings showing the URL of a live Pages site. Under the horizontal kebab icon to the right, the "Unpublish site" dropdown option is outlined in dark orange.](/assets/images/help/pages/unpublish-site.png)

{% else %}

## Unpublishing a project site

{% data reusables.repositories.navigate-to-repo %}
2. If a `gh-pages` branch exists in the repository, delete the `gh-pages` branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)."
3. If the `gh-pages` branch was your publishing source, {% ifversion fpt or ghec %}skip to step 6{% else %}your site is now unpublished and you can skip the remaining steps{% endif %}.
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
5. Under "{% data variables.product.prodname_pages %}", use the branch dropdown menu and select **None.**
  ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

## Unpublishing a user or organization site

{% data reusables.repositories.navigate-to-repo %}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" and "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)."
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
