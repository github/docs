---
title: Viewing committer information for Advanced Security licenses
intro: 'You can view information about the {% data variables.product.prodname_GH_cs_and_sp %} committers for your enterprise and calculate the cost for additional committers with the site admin dashboard.'
permissions: Site administrators
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghes: '*'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/viewing-committer-information-for-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-committer-information-for-github-advanced-security
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: View GHAS committers
contentType: how-tos
---

## About the "Advanced Security Committers" dashboard

You can estimate the number of licenses your enterprise might need for {% data variables.product.prodname_GH_cs_and_sp %} with the "Advanced Security Committers" section of the site admin dashboard.

If you currently use {% data variables.product.prodname_cs_or_sp %}, this tool helps you understand how many committers are currently using licenses. It also helps you estimate how many additional licenses would be used if you enable {% data variables.product.prodname_cs_or_sp %} for more organizations and repositories.

If you're considering using {% data variables.product.prodname_cs_or_sp %}, you can use this tool to estimate potential costs to enable {% data variables.product.prodname_cs_or_sp %}.

For more information about billing for {% data variables.product.prodname_AS %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

## Viewing committer information

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %} to display the "Site admin" pages.
1. In the left sidebar, click **Advanced Security Committers**. If this option is not displayed, at the top of the page, click {% octicon "rocket" aria-hidden="true" aria-label="Site admin" %} **Site admin** to show the top-level "Site admin" page.

The page shows the number of licenses currently being used and the number of licenses you would use if you enabled {% data variables.product.prodname_AS %} for all repositories.

## Calculating the cost to add committers

Under "Calculate Additional Advanced Licenses", you can calculate how many more new or additional licenses will be used if you enable {% data variables.product.prodname_cs_or_sp %} for specific organizations and repositories.

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %} to display the "Site admin" pages.
1. In the left sidebar, click **Advanced Security Committers**. If this option is not displayed, at the top of the page, click {% octicon "rocket" aria-hidden="true" aria-label="Site admin" %} **Site admin** to show the top-level "Site admin" page.
1. Under "Organizations and Repositories", enter or paste a list of organizations and repositories, with one organization or repository per line. For example:

   ```text
   example-org
   octo-org/octo-repo
   ```

1. Click **Recalculate**.
