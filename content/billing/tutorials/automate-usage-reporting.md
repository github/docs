---
title: Automating usage reporting with the REST API
intro: Learn how to automate reporting on your use of paid features using the REST API.
shortTitle: Automate usage reporting
redirect_from:
  - /billing/using-the-new-billing-platform/automating-usage-reporting
  - /billing/managing-your-billing/automating-usage-reporting
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Enterprise
  - Billing
  - REST
permissions: 'Enterprise owners, organization owners, and billing managers'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: tutorials
---

After you transition to metered billing, you may want to automatically track usage and costs for paid {% data variables.product.github %} features in your internal reporting systems. For example, you might want to monitor spend over time, reconcile invoices, or feed usage data into finance or BI tools.

In this tutorial, you’ll learn how to use the REST API to retrieve billing usage data, filter it by time period or cost center, and automate recurring reports at the user, organization, or enterprise level. You’ll also learn how to interpret key fields in the response so you can turn raw usage data into meaningful cost insights.

## Prerequisites

Before you begin this tutorial, make sure that:

* You have access to billing data at the level you want to report on:
  * User-level reports: account holder
  * Organization-level reports: organization owner or billing manager
  * Enterprise-level reports: enterprise administrator or billing manager

* You’re familiar with making authenticated requests to the REST API. For an introduction, see [AUTOTITLE](/rest/using-the-rest-api).
* You authenticate using a {% data variables.product.pat_v1 %}. The billing usage endpoints do not support {% data variables.product.pat_v2_plural %}.

Depending on your reporting needs, you may also want access to an internal system (such as a spreadsheet, database, or BI tool) where you can store and analyze the usage data retrieved from the API.

## Step 1: Decide what level to report on

Decide which account level you want to report on. This determines **which REST API endpoint you’ll call** and what your report will include.

Choose the reporting level that best matches your goal:

| Reporting level   | When to use it   |
| ----------------- | ---------------- |
| **User** | You want a report for a single account, for example to understand personal usage and costs. |
| **Organization** | You want to track usage and costs for a specific organization, for example for team-level monitoring or chargeback. |
| **Enterprise** | You want a centralized view across multiple organizations, for example for finance reporting or cost center reporting. |

Once you’ve chosen a reporting level, you’ll use the corresponding endpoint in the next step to retrieve usage data and build an automated report.

## Step 2: Retrieve usage data for paid products

After you’ve decided which level to report on, use the REST API to retrieve usage data for paid {% data variables.product.github %} products. For all endpoints, see [AUTOTITLE](/rest/billing/usage).

{% data variables.product.github %} provides two types of billing usage data:

* **Usage summaries** – aggregated usage and cost data for all paid products.
* **Premium request usage** – detailed usage and billing data for premium requests, including quotas and overage usage.

In most reporting scenarios, you’ll start with a **usage summary** to understand overall usage and spend, and then use premium request usage data when you need deeper insight into premium request consumption.

### Retrieve a usage summary

Use the usage summary endpoint that corresponds to the reporting level you chose in Step 1.

For example, to retrieve a usage summary for an enterprise, make a request to:

`/enterprises/{enterprise}/settings/billing/usage/summary`

You must authenticate your request to this endpoint.

**Example using curl**

```bash
curl -L \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/enterprises/ENTERPRISE/settings/billing/usage/summary
```

Replace `ENTERPRISE` with the enterprise slug and set the `GITHUB_TOKEN` environment variable to a {% data variables.product.pat_generic %} with the required billing permissions.

**Example using the {% data variables.product.prodname_cli %}**

```bash
gh api \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /enterprises/ENTERPRISE/settings/billing/usage/summary
```

This endpoint returns aggregated usage data for all paid products for the current year by default. Each entry includes information such as the product, unit type, quantity used, and billed amount.

You can use the same approach to retrieve usage summaries for an organization or user by calling the equivalent endpoint for that account level.

### Retrieve premium request usage

If you need to report specifically on premium request consumption, use the `premium_request/usage` endpoint for the same account level. This endpoint provides additional details such as included usage, billed overages, and remaining quota.

In the next step, you’ll learn how to filter usage data by time period or cost center so you can generate more targeted reports.

## Step 3: Filter usage data by time period or cost center

By default, usage summary endpoints return data for the **current year**. To generate more targeted reports or analyze trends over time, you can filter usage data using query parameters.

### Filter by time period

You can limit the usage data returned by specifying one or more of the following query parameters:

* `year`
* `month`
* `day`
* `hour`

For example, to retrieve usage data for a specific month, include the `year` and `month` parameters in your request:

 ```http
GET /enterprises/{enterprise}/settings/billing/usage/summary?year=2024&month=12
```

Filtering by time period is useful when you want to:

* Generate monthly or daily usage reports
* Compare usage before and after a change, such as enabling a new feature
* Reconcile usage with invoices for a specific billing period

### Filter by cost center (enterprise only)

If you’re retrieving enterprise-level usage data, you can also filter results by cost center using the `cost_center_id` query parameter.

Filtering by cost center allows you to:

* Attribute usage and costs to specific teams or business units
* Generate cost center–specific reports for finance or leadership stakeholders

Cost center filtering is available only for enterprise usage summary endpoints.

In the next step, you’ll learn how to automate these API calls to generate recurring usage reports.

## Step 4: Automate recurring usage reports

Once you’ve identified the usage data you want to collect and how to filter it, you can automate your reporting by running the same API requests on a recurring schedule.

Common automation patterns include:

* Running scheduled API requests (for example, daily or monthly) to collect usage data
* Storing the results in an internal system such as a database, spreadsheet, or BI tool
* Using the data to monitor trends, detect changes in usage, or support cost reviews

When automating reports, consistency matters. Use the same reporting level, filters, and time ranges each time so that usage trends are comparable over time.

For example, you might:

* Run a monthly enterprise-level usage summary to track overall spend
* Generate cost center–specific reports for internal chargeback or showback
* Monitor usage growth after enabling new paid features

In the next step, you’ll learn how to interpret the usage and cost fields returned by the API so you can turn raw data into meaningful insights.

## Step 5: Interpret usage and cost fields in the API response

The usage summary response includes both **usage** and **cost** information. Understanding how these fields relate to each other helps you interpret spend, included usage, and billed overages.

Each usage item includes:

* A **quantity**, which represents the amount of usage for a specific product and unit type
* A **netAmount**, which represents the billed cost for that usage
* A **discountAmount**, which represents usage covered by included quotas or discounts

In general:

* Use **quantity** to understand how much of a product was consumed
* Use **netAmount** to understand what was billed
* Use **discountAmount** to understand how much usage was included or discounted

For example, a high quantity with a low netAmount may indicate that most usage was covered by included quotas, while a rising netAmount over time may indicate increased paid usage.

Different products report usage using different unit types (such as minutes, gigabytes, or requests). To calculate product-specific metrics or reproduce values from the previous billing platform, you may need to filter usage items by product and unit type and aggregate the results. Detailed examples are available in the reference documentation linked in the next step.

## Step 6: Calculate product-specific usage metrics

In some cases, you may need to calculate product-specific usage metrics from the usage summary response. This is most relevant if you want to generate custom reports for a specific product or reproduce values used in legacy reporting.

To calculate these metrics, you typically filter usage items by `product` and `unitType`, then aggregate fields such as `quantity`, `netAmount`, and `discountAmount`.

For detailed examples and product-specific calculations, see [AUTOTITLE](/billing/reference/previous-billing-platform-endpoints).
