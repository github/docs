---
title: Changing the visibility of your GitHub Pages site
intro: You can manage access control for your project site by publishing the site publicly or privately.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
category:
  - Managing a GitHub Pages site
---

{% data reusables.pages.privately-publish-ghec-only %}

For information about who can access a privately published site, how its subdomain works, and what happens to it if your organization stops using {% data variables.product.prodname_ghe_cloud %}, see [AUTOTITLE](/pages/getting-started-with-github-pages/about-privately-published-github-pages-sites).

## Changing the visibility of your {% data variables.product.prodname_pages %} site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "{% data variables.product.prodname_pages %}", select the **{% data variables.product.prodname_pages %} visibility** dropdown menu, then select a visibility.
1. To see your published site, under "{% data variables.product.prodname_pages %}", click **{% octicon "link-external" aria-hidden="true" aria-label="link-external" %} Visit site**.

   ![Screenshot of a confirmation message for {% data variables.product.prodname_pages %} listing the site's URL. On the right, the "Visit site" button is outlined in orange.](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% data reusables.pages.twenty-minutes-to-publish %}
