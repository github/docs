---
title: Viewing committer information for GitHub Advanced Security
intro: 'You can view information about the {% data variables.product.prodname_GH_advanced_security %} committers for your enterprise and calculate the cost for additional committers with the site admin dashboard.'
permissions: 'Site administrators can view committer information for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security committers
---

## About the "Advanced Security Committers" dashboard

You can estimate the number of licenses your enterprise might need for {% data variables.product.prodname_GH_advanced_security %} with the "Advanced Security Committers" section of the site admin dashboard.

If you currently use {% data variables.product.prodname_GH_advanced_security %}, this tool helps you understand how many committers are currently using licenses. It also helps you estimate how many additional licenses would be used if you enable {% data variables.product.prodname_GH_advanced_security %} for more organizations and repositories.

If you're considering using {% data variables.product.prodname_GH_advanced_security %}, you can use this tool to estimate potential costs to enable {% data variables.product.prodname_GH_advanced_security %}.

For more information about billing for {% data variables.product.prodname_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."

## Viewing committer information

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Advanced Security Committers**.
1. To the right of "Current active committer count", view the number of active committers for repositories with {% data variables.product.prodname_GH_advanced_security %} enabled. This is the number of {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} that are currently being used.
1. To the right of "Total billable committers if GHAS is enabled for all repositories", you can see the number of active committers across all the repositories in your enterprise. This is the number of {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} that would be used if you enabled {% data variables.product.prodname_GH_advanced_security %} for every repository in your enterprise.

## Calculating the cost to add committers

Under "Calculate Additional Advanced Committers", you can calculate how many more new or additional {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} will be used if you enable {% data variables.product.prodname_GH_advanced_security %} for specific organizations and repositories.

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Advanced Security Committers**.
1. Under "Organizations and Repositories", enter or paste a list of organizations and repositories, with one organization or repository per line. For example:

   ```text
   example-org
   octo-org/octo-repo
   ```

1. Click **Recalculate**.
