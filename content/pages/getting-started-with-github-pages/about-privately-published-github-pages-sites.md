---
title: About privately published GitHub Pages sites
shortTitle: Privately published sites
intro: 'A privately published {% data variables.product.prodname_pages %} site is only available to people with read access to its repository. Learn how access and URLs work for these sites, and what happens to them if your organization''s plan changes.'
versions:
  ghec: '*'
contentType: concepts
category:
  - Managing a GitHub Pages site
---

## About access control for {% data variables.product.prodname_pages %} sites

With access control for {% data variables.product.prodname_pages %}, you can restrict access to your project site by publishing the site privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.

{% data reusables.pages.privately-publish-ghec-only %}

If your enterprise uses {% data variables.product.prodname_emus %}, {% data variables.product.prodname_pages %} sites can only be published as private, and all {% data variables.product.prodname_pages %} sites are only accessible to other enterprise members. For more information about {% data variables.product.prodname_emus %}, see [AUTOTITLE](/pages/getting-started-with-github-pages/github-pages-limits#limits-for-enterprise-managed-users).

If your organization uses {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, you can choose to publish your project sites privately or publicly to anyone on the internet.

Access control is available for project sites published from a private or internal repository that the organization owns. You cannot manage access control for an organization site. For more information about the types of {% data variables.product.prodname_pages %} sites, see [AUTOTITLE](/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites).

## About subdomains for privately published sites

Privately published sites are available at a different subdomain than publicly published sites. This ensures that your {% data variables.product.prodname_pages %} site is secure from the moment it's published:

* Every subdomain of `*.pages.github.io` is automatically secured with a TLS certificate, and HSTS is enforced so that browsers always serve the page over HTTPS.
* Each privately published site uses a unique subdomain, so other repositories in your organization cannot publish content on the same origin as the site. This protects your site from [cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/). This is also why {% data variables.product.prodname_pages %} sites are not hosted on the `github.com` domain.

You can see your site's unique subdomain in the "Pages" tab of your repository settings. If you're using a static site generator configured to build the site with the repository name as a path, you may need to update the settings for the static site generator when changing the site to private. For more information, see [AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) or the documentation for your static site generator.

If you change a privately published site to public, the site's URL changes, unless the site uses a custom domain.

To use a shorter and more memorable domain for your privately published site, you can configure a custom domain. For more information, see [AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Privately published sites after a plan change

If your organization stops using {% data variables.product.prodname_ghe_cloud %}, for example because the organization is removed from your enterprise, {% data variables.product.github %} keeps existing privately published sites private. A plan change never changes the visibility of a site. However, if a privately published site is deleted, a new site created from the same repository can be public.

After the change:

* Existing privately published sites stay published privately, at their current URL.
* While a site exists, pushing to its publishing source or running a {% data variables.product.prodname_pages %} workflow doesn't publish it publicly.
* Each site keeps its unique subdomain. The subdomain is only released if the site is deleted.
* Organization policies for publishing {% data variables.product.prodname_pages %} sites stay in effect. See [AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
* New sites can't be published privately.
* You can't change the visibility of an existing privately published site to public.

To publish the content publicly, delete the site, then create it again. The new site is public because the organization can no longer publish privately. See [AUTOTITLE](/pages/getting-started-with-github-pages/deleting-a-github-pages-site) and [AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site).

You can only create the new site if your organization's plan supports {% data variables.product.prodname_pages %} for the repository and your organization's policy allows publicly published sites. With {% data variables.product.prodname_free_team %} for organizations, {% data variables.product.prodname_pages %} is only available for public repositories.

After a site is deleted, a push to a branch named `gh-pages` in the repository can also create a new site from that branch automatically, as long as the same plan and policy conditions are met. That new site is public too.

> [!WARNING]
> Before you delete a privately published site, check whether the repository has a `gh-pages` branch that a person or an automated process might push to.

## Further reading

* [AUTOTITLE](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)
* [AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)
