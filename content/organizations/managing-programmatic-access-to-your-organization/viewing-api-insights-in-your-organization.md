---
title: Viewing API insights in your organization
shortTitle: Viewing API insights
intro: "You can view REST API activity for your entire organization or specific apps and users."
permissions: 'Organization owners and users with the "View organization API insights" permission.'
product: 'Your organization must be on a {% data variables.product.prodname_ghe_cloud %} plan.'
versions:
  feature: 'api-insights'
topics:
  - API
  - Organizations
  - REST
---

## About API insights

As a {% data variables.product.prodname_ghe_cloud %} organization owner, you and your designated users can view REST API activity for your entire organization or specific apps and users. This helps you understand the sources of your REST API activity and manage against your primary rate limits, giving you visibility into the timeframe, apps, and API endpoints involved. To learn more about primary rate limits, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-primary-rate-limits).

> [!NOTE] Currently, this feature supports only the `core` category of REST API endpoints and primary rate limits. API activity for search, {% data variables.product.prodname_actions %} (using the [`GITHUB_TOKEN`](/actions/security-for-github-actions/security-guides/automatic-token-authentication) secret), and secondary rate-limiting are not supported. For information about API categories, see [AUTOTITLE](/rest/rate-limit/rate-limit). To learn more about primary and secondary rate limits, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api).

## Enabling access to API insights
  
Organization owners can create custom organization roles to allow people to view API insights for their organization. To provide users with access, select the **View organization API insights** permission when creating a custom organization role. Then assign the custom role to an organization member or team. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

>[!WARNING] Granting access to organization non-owners will allow them to view API insights for all users and apps in the organization, so privacy should be considered.

## Understanding API insights aggregation

The time period selection feature allows you to view API insights over predefined periods or a custom period, as detailed in the following table. By default, data is presented in Coordinated Universal Time (UTC). You can change the data displayed from UTC to your browser's time zone in the "Period" drop down menu at the top-right of the page.

{% rowheaders %}

| Period          | Description                                                                                                |
|-----------------|------------------------------------------------------------------------------------------------------------|
| Last 30 minutes | Data from the last 30 minutes to when the page is viewed.                                                  |
| Last 1 hour     | Data from the last 1 hour to when the page is viewed.                                                      |
| Last 3 hours    | Data from the last 3 hours to when the page is viewed.                                                     |
| Last 12 hours   | Data from the last 12 hours to when the page is viewed.                                                    |
| Last 24 hours   | (Default) Data from the last 24 hours to when the page is viewed.                                          |
| Last 7 days     | Data from the last 7 days to when the page is viewed.                                                      |
| Last 31 days    | Data from the last 31 days to when the page is viewed.                                                     |
| Custom          | Data from a custom date and time range that you provide. Custom ranges must begin within the last 31 days. |

{% endrowheaders %}

## Viewing API insights for an organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
1. In the "Insights" navigation menu, click **REST API**.
1. Optionally, to select a time period to view API insights for, choose an option from the **Period** drop down menu at the top-right of the page. For more information, see [Understanding API insights aggregation](#understanding-api-insights-aggregation).
1. Optionally, to switch between displaying dates and times in Coordinated Universal Time (UTC) or the local time zone used by your browser, select "UTC" or "Local" from the **Period** drop down menu at the top-right of the page.
1. Optionally, to select how granularly to display REST API requests on the chart, choose an option from the **Interval** drop down menu at the top-right of the page. Large intervals show summaries of the API activity on the chart while smaller intervals show greater detail for the selected time period. The chart does not automatically update to show new activity.

The selected period and interval automatically become part of the page URL so that if you share the URL with someone, they will see the same view.

## Viewing API insights for an organization's apps and users

The "Actors" table displays {% data variables.product.prodname_github_apps %} and users that made REST API requests in the current organization within the selected time period. The table does not automatically update to show new activity.

1. First, view API insights for an organization using the steps above in [Viewing API insights for an organization](#viewing-api-insights-for-an-organization).
1. Filter the apps and users displayed in the "Actors" table.
    1. To filter by name, enter the first few letters of the name in the search field above the "Actors" table. Then press enter.
    1. To filter by type of actor (app or user), choose an option from the **Type** drop down menu above the top-right of the "Actors" table.
    1. To filter by type of request (all or primary-rate-limited), choose an option from the **Requests** drop down menu above the top-right of the "Actors" table.

## Viewing API insights for a specific app or user in an organization

1. First, view API insights for an organization using the steps above in [Viewing API insights for an organization](#viewing-api-insights-for-an-organization).
1. Optionally, select an app in the "Actors" table to display its REST API activity and any primary-rate-limiting. The resulting view will be specific to the selected app and will display the API endpoints it accessed.
1. Optionally, select a user in the "Actors" table to display their personal REST API activity. The resulting view will be specific to the selected user and will display API activity of their {% data variables.product.pat_generic_plural %} and requests made by {% data variables.product.prodname_oauth_apps %} on their behalf. Both contribute to a user’s personal primary rate limit. For information about primary rate limits for users, and {% data variables.product.prodname_oauth_apps %} that act on their behalf, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api#primary-rate-limit-for-authenticated-users).
    1. Optionally, in the user-specific view, click on a {% data variables.product.pat_generic %} or {% data variables.product.prodname_oauth_app %} to view its REST API activity made on behalf of the user.
