---
title: Reviewing usage data for GitHub Copilot in your organization
shortTitle: Usage data
intro: 'Review {% data variables.product.prodname_copilot %} usage in your organization to make informed decisions about seat assignment.'
permissions: 'Organization owners for organizations with a subscription to {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or{% endif %} {% data variables.product.prodname_copilot_business_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization
  - /billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage
---

## Reviewing usage data for {% data variables.product.prodname_copilot %} in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.access-settings %}
1. At the top of the page, under "{% data variables.product.prodname_copilot %}," you can see an overview of your organization's {% data variables.product.prodname_copilot %} usage. You can see the number seats assigned through your {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} subscription, and the estimated monthly cost.

   {% ifversion ghec %}
   ![Screenshot of the {% data variables.product.prodname_copilot %} usage overview.](/assets/images/help/copilot/copilot-usage-overview-enterprise.png)
   {% else %}
   ![Screenshot of the {% data variables.product.prodname_copilot %} usage overview.](/assets/images/help/copilot/copilot-usage-overview.png)
   {% endif %}

1. For more detailed information, next to "Access management," click **Get report**.

   {% data variables.product.prodname_dotcom %} generates a report for you, which you can download as a CSV file.

1. Alternatively, under "Access management," you can use the **Sort** options to sort the list of users by when they last used {% data variables.product.prodname_copilot %}.

## Using the API to retrieve assignment information

You can use {% data variables.product.prodname_dotcom %}'s REST API to get details about the assignment of {% data variables.product.prodname_copilot %} seats in your organization. See "[Get Copilot seat information and settings for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-information-and-settings-for-an-organization)," "[List all Copilot seat assignments for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#list-all-copilot-seat-assignments-for-an-organization)," and "[Get Copilot seat assignment details for a user](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-assignment-details-for-a-user)."

## Further reading

{% ifversion ghec%}
- "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/viewing-copilot-usage-for-your-enterprise)"{% endif %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
- "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."
- "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)"
