---
title: Management methods for premium request usage in an enterprise
shortTitle: Premium request management
intro: 'Learn about organization and user-based control of premium requests for enterprises.'
permissions: Enterprise owners and organization owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
contentType: concepts
category: 
  - Manage Copilot for a team
---

## Management methods

The best way to control budgets for premium requests in an enterprise is to create cost centers and scope one or more budgets to each center.

When you want to set different limits on additional premium requests for different subsets of users, there are two possible budget management approaches.

* **Organization-based:** Each cost center is assigned one or more organizations.
* **User-based:** Each cost center is assigned one or more users.

These options provide flexibility for managing the cost of premium requests, but involve tradeoffs and careful decision making.

{% rowheaders %}

| Considerations | Organization-based | User-based |
|----|----|----|
| Identity provider integration | SCIM supported | No support |
| {% data variables.product.prodname_copilot_short %} license assignment | Single organization only | Not relevant |
| REST API automation | Supported | Supported |

{% endrowheaders %}

See [AUTOTITLE](/billing/tutorials/use-cost-centers#creating-a-cost-center) and [AUTOTITLE](/rest/enterprise-admin/billing) or [open source utilities for automating cost center administration](https://github.com/github/cost-center-automation) in the `/github/cost-center-automation` repository on {% data variables.product.prodname_dotcom_the_website %}..
With organization-based management, the costs of {% data variables.product.prodname_copilot_short %} and {% data variables.product.prodname_enterprise %} licenses are allocated to the cost center. With user-based management, the costs of all paid licenses are allocated to the cost center. See [AUTOTITLE](/billing/reference/cost-center-allocation).

## Organization-based management example

An enterprise with the following properties would be a good candidate for organization-based management:

* Uses System for Cross-domain Identity Management (SCIM) to provision organization and team membership from the identity provider, which facilitates centralized management of {% data variables.product.prodname_copilot_short %} licenses.
* Users are already grouped into organizations that match the differential budgets planned.
* Most users are assigned a {% data variables.product.prodname_copilot_short %} license through a single organization.
* Any users who are currently assigned licenses through multiple organizations will be identified and their license assignment revised.

For example, there are a total of 25 {% data variables.product.prodname_copilot_short %} users, and you want to permit additional premium requests for only 10 users. All 10 of those users must be assigned {% data variables.product.prodname_copilot_short %} licenses through a single organization, separate from the organization that assigns licenses to the remaining 15 users.

For information about preparing your enterprise for organization-based management, see:

* [AUTOTITLE](/copilot/reference/copilot-billing/seat-assignment)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations)
* [AUTOTITLE](/billing/tutorials/use-cost-centers)

## User-based management example

An enterprise with the following properties would be a good candidate for user-based management:

* Organization membership does not align with the differential budgets planned.
* Many users are assigned a {% data variables.product.prodname_copilot_short %} license through multiple organizations.
* You want to allocate costs for {% data variables.product.prodname_enterprise %}, {% data variables.product.prodname_GH_cs_and_sp %} licenses using the same grouping of users.

For example, organizations in your company represent workstreams and not users in different roles. You want to make additional premium requests available to a small subset of users across different organizations. There are a total of 25 {% data variables.product.prodname_copilot_short %} users, and you want to permit additional premium requests for only 10 users. You assign the 10 users directly to one cost center and the remaining 15 to a second cost center. You set a budget of $0 for premium requests to the second cost center, and a higher budget for the first cost center.

## Next steps

* [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-request-allowances)
