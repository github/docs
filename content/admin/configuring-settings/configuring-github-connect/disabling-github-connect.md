---
title: Disabling GitHub Connect
shortTitle: Disable GitHub Connect
intro: 'You can disable {% data variables.product.prodname_github_connect %} to stop the connection from {% data variables.location.product_location %} to {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
permissions: 'Enterprise owners'
---

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account and credentials stored on {% data variables.location.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_github_connect %}", to the right of the enterprise account you'd like to disconnect, click **Disable {% data variables.product.prodname_github_connect %}**.
1. Read the information about disconnection, then click **Disable {% data variables.product.prodname_github_connect %}**.
