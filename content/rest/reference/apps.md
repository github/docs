---
title: Apps
redirect_from:
  - /v3/apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The GitHub Apps API enables you to get high-level information about a GitHub App as well as specific information about installations of the app. To learn more about GitHub Apps, see "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)."

{% data reusables.apps.general-apps-restrictions %}

This page lists endpoints that you can access while authenticated as a GitHub App. See "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" to learn more.

When authenticated as a GitHub App, the GitHub Apps API enables you to get high-level information about a GitHub App as well as specific information about installations of an app.

You can access REST API v3 endpoints while authenticated as a GitHub App. These endpoints have a "Notes" section that contains a bullet point that says "Works with GitHub Apps." You can also access these endpoints while authenticated as a user.

A subset of REST API v3 endpoints requires authenticating as a GitHub App installation. See [Installations](/rest/reference/apps#installations) for a list of these endpoints.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## OAuth Applications API

You can use this API to manage the OAuth tokens an OAuth application uses to access people's {% data variables.product.prodname_dotcom %} accounts.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'oauth-applications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Installations

The Installations API enables you to get information about installations of your GitHub App and perform actions within those installations. An _installation_ refers to any user or organization account that has installed the app. For information on how to authenticate as an installation and limit access to specific repositories, see "[Authenticating as an installation](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)."

To list all GitHub App installations for an organization, see "[List app installations for an organization](/rest/reference/orgs#list-app-installations-for-an-organization)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'installations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt %}
## Marketplace

For more information about {% data variables.product.prodname_marketplace %}, see "[GitHub Marketplace](/marketplace/)."

The {% data variables.product.prodname_marketplace %} API allows you to see which customers are using a pricing plan, see a customer's purchases, and see if an account has an active subscription.

### Testing with stubbed endpoints

This API includes endpoints that allow you to [test your {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) with **stubbed data**. Stubbed data is hard-coded, fake data that will not change based on actual subscriptions.

To test with stubbed data, use a stubbed endpoint in place of its production counterpart. This allows you to test whether API logic succeeds before listing {% data variables.product.prodname_github_apps %} on {% data variables.product.prodname_marketplace %}.

Be sure to replace stubbed endpoints with production endpoints before deploying your {% data variables.product.prodname_github_app %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'marketplace' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## Webhooks

A {% data variables.product.prodname_github_app %}'s webhook allows you to receive HTTP `POST` payloads whenever certain events happen for an app. {% data reusables.webhooks.webhooks-rest-api-links %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
