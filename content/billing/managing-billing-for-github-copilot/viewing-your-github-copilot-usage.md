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

You can view usage information for {% data variables.product.prodname_copilot %} in your {% ifversion ghec %}enterprise, broken down by organization, or in your{% endif %} organization, broken down by seat assignment status. {% ifversion ghec %}At the enterprise level, this information includes the number of seats assigned in each organization, and the total spending associated with each organization, for the current billing cycle.{% endif %} At the organization level, this information includes the total number of seats, seats carried over from the previous billing cycle, new seats added during the current cycle, and seats to be removed at the end of the current cycle.

If an organization admin has assigned one or more seats partway through the current billing cycle, the enterprise-level information will display a decimal number of seats. For example, if the organization started the billing cycle with 3 seats assigned, and then assigned an additional seat half way through the cycle, the seat usage information will display 3.5 seats. The "3" representing the seats assigned at the start of the cycle, and the "0.5" representing the additional seat assigned halfway through the cycle.

The spending information will display the total spending for each organization for the current billing cycle. The total spending for the organization for the current cycle will usually be the number of seats assigned, multiplied by the cost per seat ($19 per seat per month). {% ifversion ghec %}However, if the same organization member is assigned a seat in multiple organizations, their seat usage will be reflected in each organization, but as the enterprise will only be charged once, their spending will only be reflected in the organization where they were first assigned a seat.{% endif %}

## Viewing your usage for {% data variables.product.prodname_copilot_for_business %}
{% ifversion ghec %}
### At the enterprise-level

{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_copilot_short %} monthly usage," view the breakdown of your {% data variables.product.prodname_copilot %} usage.
    - Under "Seat usage" you can view the total number of seats currently assigned per organization, with a decimal number representing seats assigned partway through the current billing cycle.
    - Under "Spending" you can view the total cost of {% data variables.product.prodname_copilot_for_business %} for the current billing cycle per organization.

### At the organization-level
{% endif %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-label="The credit card icon" %} Billing and plans**.
1. Under "{% data variables.product.prodname_copilot_short %}", view the breakdown of your {% data variables.product.prodname_copilot %} usage and upcoming changes in your organization.

   ![Screenshot of the organization-level {% data variables.product.prodname_copilot %} seat usage page](/assets/images/help/copilot/org-level-seat-view.png)
