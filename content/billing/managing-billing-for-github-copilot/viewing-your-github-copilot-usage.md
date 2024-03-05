---
title: Viewing your GitHub Copilot usage
intro: 'You can view how many users have access to {% data variables.product.prodname_copilot %} across {% ifversion fpt %}your organization{% else %} all the organizations in your enterprise{% endif %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
permissions: '{% ifversion fpt %}Organization admins{% else %}Enterprise owners{% endif %} can view usage for {% data variables.product.prodname_copilot %} in their {% ifversion fpt %}organization{% else %}enterprise{% endif %}.'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
shortTitle: View your usage
---

## About your {% data variables.product.prodname_copilot %} usage

You can view usage information for {% data variables.product.prodname_copilot_for_business %} in your {% ifversion ghec %}enterprise, broken down by organization, or in your{% endif %} organization, broken down by seat assignment status. {% ifversion ghec %}At the enterprise level, this information includes the number of seats assigned in each organization, and the total spending associated with each organization, for the current billing cycle.{% endif %} At the organization level, this information includes the total number of seats, seats carried over from the previous billing cycle, new seats added during the current cycle, and seats to be removed at the end of the current cycle.

{% ifversion ghec %}

## Viewing your usage of {% data variables.product.prodname_copilot_for_business %}

### At the enterprise-level

{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_copilot_short %} monthly usage," view the breakdown of your {% data variables.product.prodname_copilot %} usage.

   ![Screenshot of enterprise-level billing, showing the section headed '{% data variables.product.prodname_copilot_short %} monthly usage.'](/assets/images/help/copilot/enterprise-level-seat-view.png)

   The figures represent the billed seats so far for the current billing cycle. The seat usage so far this month is calculated as the number of seats, divided by the number of days in the current billing cycle, multiplied by the days elapsed so far in the billing cycle. So, if you have 5 seats assigned from the beginning of the billing cycle, and the current cycle is 30 days long, and it's the 10th day of the cycle, this figure will be 1.6666. On day 20, it will be 3.3333 and on the last day of the cycle, it will be 5.

   The total spending for each organization for the current cycle will usually be the number of seats assigned, multiplied by the cost per seat ({% data variables.copilot.cfb_price_per_month %} per seat per month for {% data variables.product.prodname_copilot_for_business %}). However, if the same organization member is assigned a seat in multiple organizations, their seat usage will be included for each organization, but the enterprise will only be charged once. The cost for this person will only be included in the organization where they were first assigned a seat.

### At the organization-level

{% else %}

## Viewing your organization's use of {% data variables.product.prodname_copilot_for_business %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Under "{% data variables.product.prodname_copilot_short %}", view the breakdown of your {% data variables.product.prodname_copilot %} usage and upcoming changes in your organization.

   ![Screenshot of the organization-level {% data variables.product.prodname_copilot %} seat usage page.](/assets/images/help/copilot/org-level-seat-view.png)

   The figure for Total Seats shows how many seats are currently assigned for {% data variables.product.prodname_copilot %}.
