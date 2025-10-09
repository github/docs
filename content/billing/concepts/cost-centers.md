---
title: Cost centers
intro: 'Attribute spending to specific parts of your business.'
shortTitle: Cost centers
versions:
  feature: enhanced-billing-platform
topics:
  - Billing
  - Enterprise
  - Team
contentType: concepts
product: '{% data variables.product.prodname_ghe_cloud %}'
---

You can create cost centers to attribute usage and spending to business units, improving accountability, forecasting, and cost allocation.

If your account is billed through Azure, you can add an Azure subscription to a cost center to bill usage to a different Azure subscription than the enterprise default.

To get started with cost centers, see [AUTOTITLE](/billing/tutorials/use-cost-centers).

## Cost center allocation

{% data reusables.billing.cost-center-allocation %}

For more details, see [AUTOTITLE](/billing/reference/cost-center-allocation).

## Cost center limitations

* The maximum number of active cost centers per enterprise is 250.
* The maximum number of resources per cost center is 10,000.
* A maximum of 50 resources can be added to or removed from a cost center at a time.
* Azure subscriptions can only be added to or removed from cost centers through the UI.
