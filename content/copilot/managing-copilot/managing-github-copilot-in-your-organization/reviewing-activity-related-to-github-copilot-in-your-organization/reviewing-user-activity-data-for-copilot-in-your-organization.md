---
title: Reviewing user activity data for Copilot in your organization
shortTitle: User activity data
intro: 'Review {% data variables.product.prodname_copilot %} usage in your organization to make informed decisions about seat assignment.'
permissions: Organization owners
product: 'Organizations with a subscription to {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or{% endif %} {% data variables.product.prodname_copilot_business_short %}'
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
---

## Reviewing user activity data for {% data variables.product.prodname_copilot_short %}

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

## Understanding the `last_activity_at` calculation

> [!NOTE] This data is in public beta and subject to change.

To align the `last_activity_at` data point with _actual usage_, the system returns the timestamp of a user's most recent interaction with Copilot functionality. These interactions are:

* Receiving a code suggestion in an IDE
* Chatting with Copilot Chat in an IDE
{%- ifversion ghec %}
* Creating or updating a knowledge base
* Creating a pull request summary
* Interacting with Copilot Chat on GitHub.com
{%- endif %}
* Interacting with Copilot on a mobile device
* Interacting with Copilot Chat for CLI

The `last_activity_at` date is consistent across the CSV generated via `Get Report` in Copilot Access settings as well as through {% data variables.product.prodname_dotcom %}'s REST API. The events which are tracked come from both client, and server-side telemetry. This allows the timestamp to be durable in the event that network conditions would impact client-telemetry.

### Troubleshooting `last_activity_at` data

Processing new telemetry events and updating a user's `last_activity_at` date can take up to 24 hours. Users must have telemetry enabled in their IDE for their usage to be reflected in `last_activity_at`.

If you believe a user's `last_activity_at` date should be more recent than shown in the CSV or API report, please wait 24 hours and check again. If their recent Copilot usage is still not reflected in their `last_activity_at` date, have the user check that telemetry is enabled in their IDE settings.

For more information about enabling telemetry in various IDEs, see:

* "[Enable or disable usage data collection for Azure Data Studio](https://learn.microsoft.com/azure-data-studio/usage-data-collection)" in the Microsoft documentation
* "[Data Sharing](https://www.jetbrains.com/help/idea/settings-usage-statistics.html)" in the JetBrains documentation
* "[Telemetry](https://code.visualstudio.com/docs/getstarted/telemetry)" in the {% data variables.product.prodname_vscode_shortname %} documentation

## Further reading

{% ifversion ghec%}
* "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/viewing-copilot-usage-for-your-enterprise)"{% endif %}
* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
* "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."
* "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)"
