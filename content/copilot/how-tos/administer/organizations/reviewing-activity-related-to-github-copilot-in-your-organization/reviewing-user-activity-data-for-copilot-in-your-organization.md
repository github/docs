---
title: Reviewing user activity data for Copilot in your organization
shortTitle: Review user activity data
intro: 'Review {% data variables.product.prodname_copilot %} usage in your organization to make informed decisions about seat assignment.'
permissions: Organization owners
product: 'Organizations with a plan to {% ifversion ghec %}{% data variables.copilot.copilot_enterprise_short %} or{% endif %} {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization
  - /billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.access-settings %}
1. At the top of the page, under "{% data variables.product.prodname_copilot %}," you can see an overview of your organization's {% data variables.product.prodname_copilot %} usage. You can see the number seats assigned through your {% ifversion ghec %}{% data variables.copilot.copilot_enterprise_short %} or {% endif %}{% data variables.copilot.copilot_business_short %} plan, and the estimated monthly cost.

   {% ifversion ghec %}
   ![Screenshot of the {% data variables.product.prodname_copilot %} usage overview.](/assets/images/help/copilot/copilot-usage-overview-enterprise.png)
   {% else %}
   ![Screenshot of the {% data variables.product.prodname_copilot %} usage overview.](/assets/images/help/copilot/copilot-usage-overview.png)
   {% endif %}

1. Alternatively, under "Access management," you can use the **Sort** options to sort the list of users by when they last used {% data variables.product.prodname_copilot %}.
1. For more detailed information, you can retrieve the **Activity report**. {% data variables.product.prodname_dotcom %} generates a report for you, which you can download as a CSV file.

   <!-- expires 2025-10-23 -->

   >[!NOTE] This report is replacing the {% data variables.product.prodname_copilot_short %} **usage report**. The new report adds clarity by introducing authentication information and improving timestamp resolution. The old usage report is closing down and will be removed on October 23rd, 2025.

   <!-- end expires 2025-10-23 -->

## Using the API to retrieve assignment information

You can use {% data variables.product.prodname_dotcom %}'s REST API to get details about the assignment of {% data variables.product.prodname_copilot %} seats in your organization. See [Get Copilot seat information and settings for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-information-and-settings-for-an-organization), [List all Copilot seat assignments for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#list-all-copilot-seat-assignments-for-an-organization), and [Get Copilot seat assignment details for a user](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-assignment-details-for-a-user).

## Troubleshooting `last_activity_at` data

If you believe a user's `last_activity_at` date should be more recent than shown in the CSV or API report, wait 24 hours and check again. If their recent Copilot usage is still not reflected in their `last_activity_at` date, have the user check that telemetry is enabled in their IDE settings.

For more information about this property and other data in the activity report, see [AUTOTITLE](/copilot/reference/metrics-data).

## Further reading

{% ifversion ghec %}
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/viewing-copilot-usage-for-your-enterprise){% endif %}
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)
* [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)
* [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/reviewing-changes-to-content-exclusions-for-github-copilot)
