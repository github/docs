---
title: About GitHub's IP addresses
intro: '{% data variables.product.product_name %} serves applications from multiple IP address ranges, which are available using the API.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
---

You can retrieve a list of {% data variables.product.prodname_dotcom %}'s IP addresses from the [meta](https://api.github.com/meta) API endpoint. For more information, see "[AUTOTITLE](/rest/meta)."

{% note %}

**Note:** The list of {% data variables.product.prodname_dotcom %} IP addresses returned by the Meta API is not intended to be an exhaustive list. For example, IP addresses for some {% data variables.product.prodname_dotcom %} services might not be listed, such as LFS or {% data variables.product.prodname_registry %}.

{% endnote %}

These IP addresses are used by {% data variables.product.prodname_dotcom %} to serve our content, deliver webhooks, and perform hosted {% data variables.product.prodname_actions %} builds.

These ranges are in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). You can use an online conversion tool to convert from CIDR notation to IP address ranges, for example: [CIDR to IPv4 conversion site](https://www.ipaddressguide.com/cidr).

We make changes to our IP addresses from time to time. We do not recommend allowing by IP address, however if you use these IP ranges we strongly encourage regular monitoring of our API.

For applications to function, you must allow TCP ports 22, 80, and 443 via our IP ranges for `github.com`.

## Further reading

- "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"
- "[AUTOTITLE](/get-started/using-github/allowing-access-to-githubs-services-from-a-restricted-network)"
