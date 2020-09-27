---
title: Unpublishing a GitHub Pages site
intro: 'You can unpublish your {{ site.data.variables.product.prodname_pages }} site so that the site is no longer available to {% if currentVersion == "free-pro-team@latest" %}the public{% else %}everyone using {{ site.data.variables.product.product_location }}{% endif %}.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {{ site.data.variables.product.prodname_pages }} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Unpublishing a project site

{{ site.data.reusables.repositories.navigate-to-repo }}
2. If a `gh-pages` branch exists in the repository, delete the `gh-pages` branch. For more information, see "[Creating and deleting branches within your repository](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)."
3. If the `gh-pages` branch was your publishing source,
{% if currentVersion == "free-pro-team@latest" %}skip to step 6{% else %}your site is now unpublished and you can skip the remaining steps{% endif %}.
{{ site.data.reusables.repositories.sidebar-settings }}
5. Under "{{ site.data.variables.product.prodname_pages }}", use the **Source** drop-down menu and select **None.** ![Drop down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
{{ site.data.reusables.pages.update_your_dns_settings }}

### Unpublishing a user or organization site

{{ site.data.reusables.repositories.navigate-to-repo }}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. For more information, see "[Creating and deleting branches within your repository](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" and "[Deleting a repository](/articles/deleting-a-repository)."
{{ site.data.reusables.pages.update_your_dns_settings }}
