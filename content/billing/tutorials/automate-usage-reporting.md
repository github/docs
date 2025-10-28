---
title: Automating usage reporting with the REST API
intro: Learn how to automate reporting on your use of paid features using the REST API.
shortTitle: Automate usage reporting
redirect_from:
  - /billing/using-the-new-billing-platform/automating-usage-reporting
  - /billing/managing-your-billing/automating-usage-reporting
versions:
  ghec: '*'
topics:
  - Enterprise
  - Billing
  - REST
permissions: 'Enterprise owners, organization owners, and billing managers'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: tutorials
---

You can automatically pull data from {% data variables.product.github %} to populate the business systems you use to monitor costs and usage using the REST API. If you haven't used the {% data variables.product.github %} REST API before, see [AUTOTITLE](/rest/using-the-rest-api).

## Overview of endpoints

You need to use different endpoints to gather data depending on your account type and the information level you want.

{% rowheaders %}

| Account | Report | Access | Endpoint | More information |
|---------|--------|--------|----------|------------------|
| Users | Usage data for all paid products | Account holder | `/users/{username}/settings/billing/usage` | [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-a-user) |
| Organizations | Premium request consumption, with details of quota and billed usage | Organization owners and billing managers | `/organizations/{org}/settings/billing/premium_request/usage` | [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-premium-request-usage-report-for-an-organization) |
| Organizations | Usage data for all paid products | Organization owners and billing managers | `/organizations/{org}/settings/billing/usage` | [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization) |
| Enterprises | Premium request consumption, with details of quota and billed usage | Enterprise owners and billing managers | `/enterprises/{enterprise}/settings/billing/premium_request/usage` | [AUTOTITLE](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-premium-request-usage-report-for-an-enterprise) |
| Enterprises | Usage data for all paid products | Enterprise owners and billing managers | `/enterprises/{enterprise}/settings/billing/usage` | [AUTOTITLE](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) |

{% endrowheaders %}

## Getting premium request consumption

1. Authenticate with {% data variables.product.github %} with one of the following methods:
   * **{% data variables.product.prodname_cli %}:** use the `gh auth login` command to authenticate, see [AUTOTITLE](/github-cli/github-cli/quickstart).
   * **Create a {% data variables.product.pat_v1 %}:** and pass the token to in your API call, see [Creating a {% data variables.product.pat_v1 %}](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

1. Call the required `premium_request/usage` endpoint, specifying the enterprise, organization, or user that you want data for.

## Getting usage data for all paid products

1. Authenticate with {% data variables.product.github %} with one of the following methods:
   * **{% data variables.product.prodname_cli %}:** use the `gh auth login` command to authenticate, see [AUTOTITLE](/github-cli/github-cli/quickstart).
   * **Create a {% data variables.product.pat_v1 %}:** and pass the token to in your API call, see [Creating a {% data variables.product.pat_v1 %}](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

1. Call the required `usage` endpoint, specifying the enterprise, organization, or user that you want data for.

1. By default, data for all products for the current year is reported. For enterprises, only data that is not associated with a cost center is reported.

   You can request more specific data using query parameters.
   * Specify time period by setting one or more of the following parameters: `year`, `month`, `day`, and `hour`.
   * Specify a cost center to report on by identifier using the `cost_center_id` query parameter (enterprise endpoint only).

For more detailed information and an example calls and responses, see:
* [Get billing usage report for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise)
* [Get billing usage report for an organization](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization)
* [Get billing usage report for a user](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-a-user)

<!-- expires 2026-01-15 -->
<!-- To check on whether this can be deleted or not, see the PM in ref: 6591 -->

## Migrating from the endpoints used for the previous billing platform

After you transition to metered billing, the endpoints you used to get data from the previous billing platform will no longer return accurate usage information.

* Upgrade all calls of the form: `/ACCOUNT-TYPE/NAME/settings/billing/PRODUCT`
* To use the equivalent: `/ACCOUNT-TYPE/NAME/settings/billing/usage` endpoint

### Changes in authentication

If you used a {% data variables.product.pat_v2 %} to authenticate with the previous endpoints, you will need create a {% data variables.product.pat_v1 %} to authenticate with the new endpoint.

In addition, you may want to use the new query parameters to specify a time period or cost center.

### Calculating {% data variables.product.prodname_actions %} information from the new response data

Example of the previous response

```json
{"total_minutes_used": 305, "total_paid_minutes_used": 0, "included_minutes": 3000, "minutes_used_breakdown": { "UBUNTU": 205, "MACOS": 10, "WINDOWS": 90 }  }
```

Example of the new response

```json
{ "usageItems": [ { "date": "2023-08-01", "product": "Actions", "sku": "Actions Linux", "quantity": 100, "unitType": "minutes", "pricePerUnit": 0.008, "grossAmount": 0.8, "discountAmount": 0, "netAmount": 0.8, "organizationName": "GitHub", "repositoryName": "github/example"} ] }
```

To get the same values from the new response data:

{% rowheaders %}

| Previous property	| Calculate from new API response |
|------	|-----------	|
| `total_minutes_used`	| <ul><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `quantity`</li></ul>|
| `total_paid_minutes_used`| This is now represented as a $ amount via `netAmount`.<ul><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `netAmount`</li></ul>|
| `included_minutes` |  This is now represented as a $ amount via `discountAmount`.<ul><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `discountAmount`</li></ul>|
| `minutes_used_breakdown` |  <ul><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `quantity` grouped by `sku`</li></ul>|

{% endrowheaders %}

### Calculating {% data variables.product.prodname_registry %} information from the new response data

Example of the previous response

```json
{ "total_gigabytes_bandwidth_used": 50, "total_paid_gigabytes_bandwidth_used": 40, "included_gigabytes_bandwidth": 10 }
```

Example of the new response

```json
{ "usageItems": [ { "date": "2023-08-01", "product": "Packages", "sku": "Packages data transfer", "quantity": 100, "unitType": "gigabytes", "pricePerUnit": 0.008, "grossAmount": 0.8, "discountAmount": 0, "netAmount": 0.8, "organizationName": "GitHub", "repositoryName": "github/example" } ] }
```

{% rowheaders %}

| Previous property	| Calculate from new API response |
|------	|-----------	|
| `total_gigabytes_bandwidth_used` | <ul><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"` </li><li>Sum `quantity`</li></ul> |
| `total_paid_gigabytes_bandwidth_used`| This is now represented as a $ amount via `netAmount`. <ul><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"`</li><li>Sum `netAmount`</li></ul> |
| `included_gigabytes_bandwidth` | This is now represented as a $ amount via `discountAmount`.<ul><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"`</li><li>Sum `discountAmount`</li></ul> |

{% endrowheaders %}

### Calculating shared storage information from the new response data

Example of the previous response

```json
{ "days_left_in_billing_cycle": 20, "estimated_paid_storage_for_month": 15, "estimated_storage_for_month": 40 }
```

Example of the new response

```json
{ "usageItems": [ { "date": "2023-08-01", "product": "Packages", "sku": "Packages storage", "quantity": 100, "unitType": "GigabyteHours", "pricePerUnit": 0.008, "grossAmount": 0.8, "discountAmount": 0, "netAmount": 0.8, "organizationName": "GitHub", "repositoryName": "github/example" } ] }
```

{% rowheaders %}

| Previous property	| Calculate from new API response |
|------	|-----------	|
| `days_left_in_billing_cycle` | Not available. This information can be inferred by subtracting the current day of the month from the number of days in the current month. |
| `estimated_paid_storage_for_month`| This is now represented as a $ amount via `netAmount`. <br><br> Prerequisite: pass the `month` and `year` query parameters. <br><br>  <i> For Actions storage </i> <ul><li> Filter results by `"product": "Actions"` and `"unitType": "GigabyteHours"`</li><li> Sum `netAmount`</li></ul>  <i> For Packages storage </i> <ul><li> Filter results by `"product": "Packages"` and `"unitType": "GigabyteHours"`</li><li> Sum `netAmount`</li></ul>|
| `estimated_storage_for_month` | Prerequisite: pass the `month` and `year` query parameters.  <br><br>  <i> For Actions storage </i> <ul><li> Filter results by `"product": "Actions"` and `"unitType": "GigabyteHours"`</li><li> Sum `quantity`</li></ul>  <i> For Packages storage </i> <ul><li> Filter results by `"product": "Packages"` and `"unitType": "GigabyteHours"`</li><li> Sum `quantity`</li></ul>|

{% endrowheaders %}

<!-- end expires 2025-12-01 -->
