---
title: About GitHub's IP addresses
intro: '{% data variables.product.product_name %} serves applications from multiple IP address ranges, which are available using the API.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist/
  - /categories/73/articles/
  - /categories/administration/
  - /articles/github-s-ip-addresses/
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---

You can retrieve a list of {% data variables.product.prodname_dotcom %}'s IP addresses from the [meta](https://api.github.com/meta) API endpoint. For more information, see "[Meta](/rest/reference/meta)."

These ranges are in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). You can use an online conversion tool such as this  [CIDR / VLSM Supernet Calculator](http://www.subnet-calculator.com/cidr.php) to convert from CIDR notation to IP address ranges.

We make changes to our IP addresses from time to time, and will keep this API up to date. We do not recommend allowing by IP address, however if you use these IP ranges we strongly encourage regular monitoring of our API.

For applications to function, you must allow TCP ports 22, 80, 443, and 9418 via our IP ranges for `github.com`.

### Дополнительная литература

- "[Troubleshooting connectivity problems](/articles/troubleshooting-connectivity-problems)"
