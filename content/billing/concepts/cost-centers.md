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

Cost centers allow you to attribute usage and spending to business units, improving accountability, forecasting, and cost allocation. You can also apply one or more budgets to them to control costs.

## Cost center creation

* **Enterprise owners and billing managers** can create and edit cost centers for **any resource**.
* **Organization owners** can create and edit cost centers that contain **resources in their organization**.

When you create a cost center, you define which resources it contains from users, repositories, and organizations. If your account is billed through Azure, you can also add an Azure subscription to bill usage to a different Azure subscription than the enterprise default.

To get started with cost centers, see [AUTOTITLE](/billing/tutorials/use-cost-centers).

## Cost center allocation

{% data reusables.billing.cost-center-allocation %}

For more details, see [AUTOTITLE](/billing/reference/cost-center-allocation).

## Cost center limitations

* The maximum number of active cost centers per enterprise is 250.
* The maximum number of resources per cost center is 10,000.
* A maximum of 50 resources can be added to or removed from a cost center at a time.
* Azure subscriptions can only be added to or removed from cost centers through the UI.
* Outside collaborators can only be added to cost centers via the cost center API. For more information, see [AUTOTITLE](/billing/tutorials/control-costs-at-scale#add-resources-to-the-cost-center).
