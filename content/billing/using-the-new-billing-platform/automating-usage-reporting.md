---
title: Automating usage reporting with the REST API
intro: Learn how to automate reporting on your use of paid features using the REST API.
allowTitleToDifferFromFilename: true
shortTitle: Automate usage reporting
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Billing
  - REST
permissions: 'Enterprise owners, organization owners, and billing managers'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
---

You can automatically pull data from {% data variables.product.github %} to populate the business systems you use to monitor costs and usage using the REST API. If you haven't used the {% data variables.product.github %} REST API before, the following articles are a good starting point, see [AUTOTITLE](/rest/using-the-rest-api).

## Using the billing platform `/usage` endpoint to retrieve metered usage details for an enterprise or organization

The new billing platform provides REST API `/usage` endpoints that you can use to report on the use of all metered products in an enterprise or an organization. The usage data provided by the enterprise endpoint is available to enterprise owners and enterprise billing managers, and the data provided by the organization endpoint is available to organization owners within an enterprise and organization owners within an organization account. You will need to authenticate with {% data variables.product.github %}.

* If you use the GitHub CLI, use the `gh auth login` command to authenticate.
* Otherwise, you will need to create a {% data variables.product.pat_v1 %}, see [Creating a {% data variables.product.pat_v1 %}](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

When you call a `/usage` endpoint, you must specify the enterprise or organization that you want data for and, by default, usage for the current year that does not belong to a cost center is reported. You can reduce the scope of data returned by the endpoint using query parameters.

* Define a specific time period by setting one or more of the following parameters: `year`, `month`, `day`, and `hour`.
* Define a cost center to report on by identifier using the `cost_center_id` query parameter. This query parameter is only available for the enterprise-level endpoint.

For more detailed information and an example call and response, see [Get billing usage report for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) or [Get billing usage report for an organization](/rest/billing/enhanced-billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization) .

<!-- expires 2025-07-01 -->
## Migrating from the endpoints used for the previous billing platform

The previous billing platform provided three different endpoints for usage data:

* [Get GitHub Actions billing for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-github-actions-billing-for-an-enterprise)
* [Get GitHub Packages billing for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-github-packages-billing-for-an-enterprise)
* [Get shared storage billing for an enterprise](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-shared-storage-billing-for-an-enterprise)

When you transition to the new billing platform, these endpoints will no longer return accurate usage information. You should upgrade any automation that uses these endpoints to use the new endpoint [GET /enterprises/{enterprise}/settings/billing/usage](/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise). The tables below provide a detailed explanation how to use the billing platform to retrieve equivalent information.

### Changes in call definition

If you used a {% data variables.product.pat_v2 %} to authenticate with the previous endpoints, you will need create a {% data variables.product.pat_v1 %} to authenticate with the new endpoint.

In addition, you may want to use the new query parameters to specify a time period or cost center.

### Getting GitHub Actions billing data from the new response data

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

### Getting GitHub Packages billing data from the new response data

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

### Getting shared storage billing from the new response data

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

<!-- end expires 2025-07-01 -->
