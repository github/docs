---
title: Viewing Copilot license usage in your enterprise
shortTitle: View license usage
intro: 'View how many users have access to {% data variables.product.prodname_copilot %} across {% ifversion fpt %}your organization{% else %} all the organizations in your enterprise{% endif %}.'
product: 'Enterprises with a subscription to {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
permissions: Enterprise owners
versions:
  feature: copilot-enterprise
type: how_to
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/viewing-your-github-copilot-usage
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/viewing-copilot-usage-for-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/viewing-copilot-usage-for-your-enterprise
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## About your {% data variables.product.prodname_copilot %} usage

If you have a subscription to {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}, you can view usage information for {% data variables.product.prodname_copilot %} in your {% ifversion ghec %}enterprise, broken down by organization, or in your{% endif %} organization, broken down by seat assignment status. {% ifversion ghec %}At the enterprise level, this information includes the number of seats assigned in each organization, and the total spending associated with each organization, for the current billing cycle.{% endif %} At the organization level, this information includes the total number of seats, seats carried over from the previous billing cycle, new seats added during the current cycle, and seats to be removed at the end of the current cycle.

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_copilot_short %} license usage at the enterprise-level

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_copilot_short %} monthly usage," view the breakdown of your {% data variables.product.prodname_copilot %} usage.

   ![Screenshot of enterprise-level billing, showing the section headed '{% data variables.product.prodname_copilot_short %} monthly usage.'](/assets/images/help/copilot/enterprise-level-seat-view.png)

   The figures represent the billed seats so far for the current billing cycle. The seat usage so far this month is calculated as the number of seats, divided by the number of days in the current billing cycle, multiplied by the days elapsed so far in the billing cycle. So, if you have 5 seats assigned from the beginning of the billing cycle, and the current cycle is 30 days long, and it's the 10th day of the cycle, this figure will be 1.6666. On day 20, it will be 3.3333 and on the last day of the cycle, it will be 5.

   The total spending for each organization for the current cycle will usually be the number of seats assigned, multiplied by the cost per seat. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot-business-and-github-copilot-enterprise)." However, if the same organization member is assigned a seat in multiple organizations, their seat usage will be included for each organization, but the enterprise will only be charged once. The cost for this person will only be included in the organization where they were first assigned a seat.

1. Optionally, to receive a CSV report by email detailing the usage of {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, {% data variables.product.prodname_github_codespaces %}, and {% data variables.product.prodname_copilot %} for each of your enterprise account's organizations, under the billing summary at the top of the page click **Get usage report**. The report is sent to your account's primary email address.

   ![Screenshot of the header of the billing settings page on GitHub. A button, labeled "Get usage report", is highlighted with an orange outline.](/assets/images/help/billing/actions-packages-report-download-enterprise.png)

## Viewing {% data variables.product.prodname_copilot_short %} license usage at the organization-level

{% else %}

## Viewing your organization's use of {% data variables.product.prodname_copilot %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Under "{% data variables.product.prodname_copilot_short %}", view the breakdown of your {% data variables.product.prodname_copilot %} usage and upcoming changes in your organization.

   ![Screenshot of the organization-level {% data variables.product.prodname_copilot %} seat usage page.](/assets/images/help/copilot/org-level-seat-view.png)

   The figure for Total Seats shows how many seats are currently assigned for {% data variables.product.prodname_copilot %}.

1. Optionally, to download a CSV report detailing the usage of {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, {% data variables.product.prodname_github_codespaces %}, and {% data variables.product.prodname_copilot %} in your organization, next to "Usage this month", click **Get usage report**. An email containing a link for downloading the CSV report is sent to the primary email address for your account. You can choose whether the report should cover the last 7, 30, 90, or 180 days.
   ![Screenshot of the "Billing and plans" settings. A button, labeled "Get usage report", is highlighted with an orange outline.](/assets/images/help/billing/actions-packages-report-download.png)
