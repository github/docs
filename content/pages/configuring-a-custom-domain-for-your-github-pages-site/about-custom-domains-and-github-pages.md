---
title: About custom domains and GitHub Pages
intro: '{% data variables.product.prodname_pages %} supports using custom domains, or changing the root of your site''s URL from the default, like `octocat.github.io`, to any domain you own.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
---

## Supported custom domains

{% data reusables.pages.custom-domain-warning %}

On {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_pages %} works with two types of domains: subdomains and apex domains. For a list of unsupported custom domains, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#custom-domain-names-that-are-unsupported)."

| Supported custom domain type | Example |
|---|---|
| `www` subdomain | `www.example.com` |
| Custom subdomain | `blog.example.com` |
| Apex domain        | `example.com` |

You can set up either or both of apex and `www` subdomain configurations for your site. For more information on apex domains, see "[Using an apex domain for your {% data variables.product.prodname_pages %} site](#using-an-apex-domain-for-your-github-pages-site)."

We recommend always using a `www` subdomain, even if you also use an apex domain. When you create a new site with an apex domain, we automatically attempt to secure the `www` subdomain for use when serving your site's content, but you need to make the DNS changes to use the `www` subdomain. If you configure a `www` subdomain, we automatically attempt to secure the associated apex domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."

## Using a custom domain across multiple repositories

If you set a custom domain for a user or organization site, by default, the same custom domain will be used for all project sites owned by the same account. For more information about site types, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

For example, if the custom domain for your user site is `www.octocat.com`, and you have a project site with no custom domain configured that is published from a repository called `octo-project`, the {% data variables.product.prodname_pages %} site for that repository will be available at `www.octocat.com/octo-project`.

You can override the default custom domain by adding a custom domain to the individual repository.

{% note %}

**Note:** The URLs for project sites that are privately published are not affected by the custom domain for your user or organization site. For more information about privately published sites, see "[AUTOTITLE](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endnote %}

To remove the default custom domain, you must remove the custom domain from your user or organization site.

## Using a subdomain for your {% data variables.product.prodname_pages %} site

A subdomain is the part of a URL before the root domain. You can configure your subdomain as `www` or as a distinct section of your site, like `blog.example.com`.

Subdomains are configured with a `CNAME` record through your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)."

### `www` subdomains

A `www` subdomain is the most commonly used type of subdomain. For example, `www.example.com` includes a `www` subdomain.

`www` subdomains are the most stable type of custom domain because `www` subdomains are not affected by changes to the IP addresses of {% data variables.product.product_name %}'s servers.

### Custom subdomains

A custom subdomain is a type of subdomain that doesn't use the standard `www` variant. Custom subdomains are mostly used when you want two distinct sections of your site. For example, you can create a site called `blog.example.com` and customize that section independently from `www.example.com`.

## Using an apex domain for your {% data variables.product.prodname_pages %} site

An apex domain is a custom domain that does not contain a subdomain, such as `example.com`. Apex domains are also known as base, bare, naked, root apex, or zone apex domains.

An apex domain is configured with an `A`, `ALIAS`, or `ANAME` record through your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)."

{% data reusables.pages.www-and-apex-domain-recommendation %} For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)."

## Securing the custom domain for your {% data variables.product.prodname_pages %} site

{% data reusables.pages.secure-your-domain %} For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)" and "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."

There are a couple of reasons your site might be automatically disabled.

* If you downgrade from {% data variables.product.prodname_pro %} to {% data variables.product.prodname_free_user %}, any {% data variables.product.prodname_pages %} sites that are currently published from private repositories in your account will be unpublished. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan)."
* If you transfer a private repository to a personal account that is using {% data variables.product.prodname_free_user %}, the repository will lose access to the {% data variables.product.prodname_pages %} feature, and the currently published {% data variables.product.prodname_pages %} site will be unpublished. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

## Further reading

* "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)"
