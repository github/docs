---
title: About custom domains and GitHub Pages
intro: '{% data variables.product.prodname_pages %} supports using custom domains, or changing the root of your site''s URL from the default, like `octocat.github.io`, to any domain you own.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites/
  - /articles/about-supported-custom-domains/
  - /articles/custom-domain-redirects-for-your-github-pages-site/
  - /articles/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

### Supported custom domains

{% data variables.product.prodname_pages %} works with two types of domains: subdomains and apex domains. For a list of unsupported custom domains, see "[Troubleshooting custom domains and {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)."

| Supported custom domain type | Example |
|---|---|
| `www` subdomain | `www.example.com` |
| Custom subdomain | `blog.example.com` |
| Apex domain        | `example.com` |

You can set up either or both types of custom domains for your site. We recommend always using a `www` subdomain, even if you also use an apex domain. For more information, see "[Using an apex domain for your {% data variables.product.prodname_pages %} site](#using-an-apex-domain-for-your-github-pages-site)."

After you configure a custom domain for a user or organization site, the custom domain will replace the `<user>.github.io` or `<organization>.github.io` portion of the URL for any project sites owned by the account that do not have a custom domain configured. For example, if the custom domain for your user site is `www.octocat.com`, and you have a project site with no custom domain configured that is published from a repository called `octo-project`, the {% data variables.product.prodname_pages %} site for that repository will be available at `www.octocat.com/octo-project`.

### Using a subdomain for your {% data variables.product.prodname_pages %} site

A subdomain is the part of a URL before the root domain. You can configure your subdomain as `www` or as a distinct section of your site, like `blog.example.com`.

Subdomains are configured with a `CNAME` record through your DNS provider. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)."

#### `www` subdomains

A `www` subdomain is the most commonly used type of subdomain. For example, `www.example.com` includes a `www` subdomain.

`www` subdomains are the most stable type of custom domain because `www` subdomains are not affected by changes to the IP addresses of {% data variables.product.product_name %}'s servers. Your site will also load faster because Denial of Service (DoS) attack protection can be implemented more efficiently.

#### Custom subdomains

A custom subdomain is a type of subdomain that doesn't use the standard `www` subdomain. Custom subdomains are mostly used when you want two distinct sections of your site. For example, you can create a site called `blog.example.com` and customize that section independently from `www.example.com`.

### Using an apex domain for your {% data variables.product.prodname_pages %} site

An apex domain is a custom domain that does not contain a subdomain, such as `example.com`. Apex domains are also known as base, bare, naked, root apex, or zone apex domains.

An apex domain is configured with an `A`, `ALIAS`, or `ANAME` record through your DNS provider. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)."

{% data reusables.pages.www-and-apex-domain-recommendation %}

### Updating custom domains when your {% data variables.product.prodname_pages %} site is disabled

If your {% data variables.product.prodname_pages %} site is disabled but has a custom domain set up, you should immediately update or remove your DNS records with your DNS provider to avoid the risk of a domain takeover. Having a custom domain configured with your DNS provider while your site is disabled could result in someone else hosting a site on one of your subdomains. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."  

There are a couple of reasons your site might be automatically disabled.

- If you downgrade from {% data variables.product.prodname_pro %} to {% data variables.product.prodname_free_user %}, any {% data variables.product.prodname_pages %} sites that are currently published from private repositories in your account will be unpublished. For more information, see "[Downgrading your {% data variables.product.prodname_dotcom %} billing plan](/articles/downgrading-your-github-billing-plan)."
- If you transfer a private repository to a personal account that is using {% data variables.product.prodname_free_user %}, the repository will lose access to the {% data variables.product.prodname_pages %} feature, and the currently published {% data variables.product.prodname_pages %} site will be unpublished. For more information, see "[Transferring a repository](/articles/transferring-a-repository)."

### Further reading

- "[Troubleshooting custom domains and {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
