---
title: Migrating from the endpoints used for the previous billing platform
shortTitle: Previous billing platform endpoints
intro: 'If your organization previously used the billing platform that predated metered billing, this article explains how to migrate existing usage reporting to the current billing usage endpoints.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Enterprise
  - Billing
  - REST
permissions: 'Enterprise owners, organization owners, and billing managers'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: reference
---

<!-- expires 2026-01-15 -->
<!-- To check on whether this can be deleted or not, see the PM in ref: 6591 -->

After you transition to metered billing, the endpoints you used to get data from the previous billing platform will no longer return accurate usage information.

You will need to upgrade all calls using the previous `/ACCOUNT-TYPE/NAME/settings/billing/PRODUCT` REST API endpoints to use the equivalent `/ACCOUNT-TYPE/NAME/settings/billing/usage` endpoint.

## Changes in authentication

If you used a {% data variables.product.pat_v2 %} to authenticate with the previous endpoints, you will need create a {% data variables.product.pat_v1 %} to authenticate with the new endpoint.

In addition, you may want to use the new query parameters to specify a time period or cost center.

## Calculating {% data variables.product.prodname_actions %} information from the new response data

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
| `total_minutes_used`	| <ol><li> Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `quantity`</li></ol>|
| `total_paid_minutes_used`| This is now represented as a $ amount via `netAmount`.<ol><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `netAmount`</li></ol>|
| `included_minutes` |  This is now represented as a $ amount via `discountAmount`.<ol><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `discountAmount`</li></ol>|
| `minutes_used_breakdown` |  <ol><li>Filter results by `"product": "Actions"` and `"unitType": "minutes"`</li><li>Sum `quantity` grouped by `sku`</li></ol>|

{% endrowheaders %}

## Calculating {% data variables.product.prodname_registry %} information from the new response data

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
| `total_gigabytes_bandwidth_used` | <ol><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"` </li><li>Sum `quantity`</li></ol> |
| `total_paid_gigabytes_bandwidth_used`| This is now represented as a $ amount via `netAmount`. <ol><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"`</li><li>Sum `netAmount`</li></ol> |
| `included_gigabytes_bandwidth` | This is now represented as a $ amount via `discountAmount`.<ol><li>Filter results by `"product": "Packages"` and `"unitType": "gigabytes"`</li><li>Sum `discountAmount`</li></ol> |

{% endrowheaders %}

## Calculating shared storage information from the new response data

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
| `estimated_paid_storage_for_month`| This is now represented as a $ amount via `netAmount`. <br><br> Prerequisite: pass the `month` and `year` query parameters. <br><br>  <i> For Actions storage </i> <ol><li> Filter results by `"product": "Actions"` and `"unitType": "GigabyteHours"`</li><li> Sum `netAmount`</li></ol>  <i> For Packages storage </i> <ol><li> Filter results by `"product": "Packages"` and `"unitType": "GigabyteHours"`</li><li> Sum `netAmount`</li></ol>|
| `estimated_storage_for_month` | Prerequisite: pass the `month` and `year` query parameters.  <br><br>  <i> For Actions storage </i> <ol><li> Filter results by `"product": "Actions"` and `"unitType": "GigabyteHours"`</li><li> Sum `quantity`</li></ol>  <i> For Packages storage </i> <ol><li> Filter results by `"product": "Packages"` and `"unitType": "GigabyteHours"`</li><li> Sum `quantity`</li></ol>|

{% endrowheaders %}

<!-- end expires 2026-01-15 -->
