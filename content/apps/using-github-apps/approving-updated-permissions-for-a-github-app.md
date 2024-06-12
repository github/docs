---
title: Approving updated permissions for a GitHub App
intro: 'When a {% data variables.product.prodname_github_app %} requests additional permissions, you can review what behavior the permissions will enable and decide whether to approve the permissions.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Approve new permissions
---

Occasionally, a {% data variables.product.prodname_github_app %} that you have installed will request additional permissions. This may happen if the {% data variables.product.prodname_github_app %} owner wants the app to make additional API requests or respond to additional webhook events. For more information about what different permissions enable a {% data variables.product.prodname_github_app %} to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

When a {% data variables.product.prodname_github_app %} requests additional organization or repository permissions, {% data variables.product.company_short %} will notify you if the app is installed on your personal account or on an organization that you own.

You can choose to accept or reject the additional permissions. If you reject the additional permissions, the {% data variables.product.prodname_github_app %} will still retain its current permissions. The {% data variables.product.prodname_github_app %} may not function as expected if you reject the additional permissions.

If the app is authorized but not installed or if the {% data variables.product.prodname_github_app %} only requested additional account permissions, {% data variables.product.company_short %} will not notify you. Instead, the {% data variables.product.prodname_github_app %} will prompt you to reauthorize the app in order to enable the new account permissions. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."
