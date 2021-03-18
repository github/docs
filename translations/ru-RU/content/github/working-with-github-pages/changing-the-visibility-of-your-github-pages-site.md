---
title: Changing the visibility of your GitHub Pages site
intro: 'You can manage access control for your project site by publishing the site publicly or privately.'
product: '{% data reusables.gated-features.private-pages %}'
versions:
  free-pro-team: '*'
permissions: People with admin permissions for a repository can change the visibility of a {% data variables.product.prodname_pages %} site.
---

### About access control for {% data variables.product.prodname_pages %} sites

If your project site is published from a private or internal repository that's owned by an organization using {% data variables.product.prodname_ghe_cloud %}, you can manage access control for the site. With access control, you can choose to publish the site publicly to anyone on the internet or privately to people with read access to your repository. A privately published site can be used to share your internal documentation or knowledge base with members of your enterprise. You cannot manage access control for an organization site. For more information about the types of {% data variables.product.prodname_pages %} sites, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)."

Privately published sites are available at a different subdomain than publicly published sites. You can see your site's URL in the repository settings. If you're using a static site generator configured to build the site with the repository name as a path, you may need to update the settings for the static site generator when changing the site to private. For more information, see "[Configuring Jekyll in your {% data variables.product.prodname_pages %} site](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" or the documentation for your static site generator.

### Changing the visibility of your {% data variables.product.prodname_pages %} site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "{% data variables.product.prodname_pages %}", select the **{% data variables.product.prodname_pages %} visibility** drop-down menu, then click a visibility. ![Drop-down to choose a visibility for your site](/assets/images/help/pages/public-or-private-visibility.png)
4. To see your published site, under "{% data variables.product.prodname_pages %}", click your site's URL. ![URL of your privately published site](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
