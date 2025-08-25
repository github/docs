---
title: Combined use of GitHub Enterprise and Azure DevOps
intro: '{% data variables.product.prodname_ghe_cloud %} customers who manage users with Entra ID can access Azure DevOps without additional cost.'
versions:
  fpt: '*'
  ghec: '*'
product: Enterprise accounts using Microsoft Entra ID as their identity provider, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Azure DevOps licenses
contentType: concepts
---

{% data variables.product.prodname_ghe_cloud %} customers can use Azure DevOps without additional costs per user. For customers using Microsoft Entra, users can sign in with the same credentials on {% data variables.product.github %} and Azure DevOps.

No additional setup is required for enterprises hosted on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_enterprise %} users are detected automatically when they sign in to Azure DevOps. See [User and permissions management](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/faq-user-and-permissions-management?view=azure-devops#github-enterprise) in the Microsoft Learn documentation.

{% data variables.enterprise.data_residency %} administrators need to link their instance of {% data variables.enterprise.data_residency_site %} to Azure DevOps before {% data variables.product.prodname_enterprise %} users can be detected. See [How are GitHub Enterprise users in data residency regions identified?](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/faq-user-and-permissions-management?view=azure-devops#q--how-are-github-enterprise-users-in-data-residency-regions-identified-) in the Microsoft Learn documentation.
