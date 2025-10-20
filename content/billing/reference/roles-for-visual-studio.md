---
title: Roles for {% data variables.visual_studio.prodname_vss_ghe %} reference
shortTitle: Roles for Visual Studio
intro: 'Learn about the different roles required to set up {% data variables.visual_studio.prodname_vss_ghe %}.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: reference
---

{% data variables.visual_studio.prodname_vss_ghe %} is a combined offering and knowledge of roles in both systems is useful.

## {% data variables.product.prodname_vs %} roles

| Role | Description | More information |
| :- | :- | :- |
| **Subscriptions admin** | Person who assigns licenses for {% data variables.product.prodname_vs %} subscription | [Overview of admin responsibilities](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) in Microsoft Docs |
| **Subscriber** | Person who uses a license for {% data variables.product.prodname_vs %} subscription | [Visual Studio Subscriptions documentation](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) in Microsoft Docs |

## {% data variables.product.github %} roles

| Role | Description | More information |
| :- | :- | :- |
| **Enterprise owner** | Person who has a personal account that's an administrator of an enterprise on {% data variables.location.product_location %} | [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %} |
| **Organization owner** | Person who has a personal account that's an owner of an organization in your team's enterprise on {% data variables.location.product_location %} | [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %} |
| **Enterprise member** | Person who has a personal account that's a member of an enterprise on {% data variables.location.product_location %} | [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)  |
