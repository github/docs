---
title: Viewing committer information for volume/subscription licenses for GitHub Advanced Security
intro: 'You can view information about the {% data variables.product.prodname_GH_cs_and_sp %} committers for your enterprise and calculate the cost for additional committers with the site admin dashboard.'
allowTitleToDifferFromFilename: true
permissions: 'Site administrators'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghes: '*'
type: how_to
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/viewing-committer-information-for-github-advanced-security
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security committers
---

## About the "Advanced Security Committers" dashboard

You can estimate the number of licenses your enterprise might need for {% data variables.product.prodname_GH_cs_and_sp %} with the "Advanced Security Committers" section of the site admin dashboard.

If you currently use {% data variables.product.prodname_cs_or_sp %}, this tool helps you understand how many committers are currently using licenses. It also helps you estimate how many additional licenses would be used if you enable {% data variables.product.prodname_cs_or_sp %} for more organizations and repositories.

If you're considering using {% data variables.product.prodname_cs_or_sp %}, you can use this tool to estimate potential costs to enable {% data variables.product.prodname_cs_or_sp %}.

For more information about billing for {% data variables.product.prodname_AS %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

## Viewing committer information

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Advanced Security Committers**.
1. To the right of "Current active committer count", view the number of active committers for repositories with {% data variables.product.prodname_cs_or_sp %} enabled. This is the number of licenses that are currently being used.
1. To the right of "Total billable committers if GHAS is enabled for all repositories", you can see the number of active committers across all the repositories in your enterprise. This is the number of licenses that would be used if you enabled {% data variables.product.prodname_cs_or_sp %} for every repository in your enterprise.

## Calculating the cost to add committers

Under "Calculate Additional Advanced Committers", you can calculate how many more new or additional licenses will be used if you enable {% data variables.product.prodname_cs_or_sp %} for specific organizations and repositories.

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Advanced Security Committers**.
1. Under "Organizations and Repositories", enter or paste a list of organizations and repositories, with one organization or repository per line. For example:

   ```text
   example-org
   octo-org/octo-repo
   ```

1. Click **Recalculate**.
