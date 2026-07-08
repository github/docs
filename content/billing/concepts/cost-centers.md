---
title: Cost centers
intro: 'Attribute spending to specific parts of your business.'
shortTitle: Cost centers
versions:
  feature: enhanced-billing-platform
contentType: concepts
product: '{% data variables.product.prodname_ghe_cloud %}'
category:
  - Track spending and control costs
---

Cost centers allow you to attribute usage and spending to business units, improving accountability, forecasting, and cost allocation. You can also apply one or more budgets to them to control costs.

## Cost center creation

* **Enterprise owners and billing managers** can create and edit cost centers for **any resource**.
* **Organization owners** can create and edit cost centers that contain **resources in their organization**.

When you create a cost center, you define which resources it contains from users, repositories, organizations, and enterprise teams. If your account is billed through Azure, you can also add an Azure subscription to bill usage to a different Azure subscription than the enterprise default.

{% data reusables.billing.enterprise-teams-in-cost-centers %}

To get started with cost centers, see [AUTOTITLE](/billing/tutorials/control-costs-at-scale).

## Cost center allocation

{% data reusables.billing.cost-center-allocation %}

For more details, see [AUTOTITLE](/billing/reference/cost-center-allocation).

## Controlling included usage

For cost centers that contain {% data variables.product.prodname_copilot_short %} licenses, you can apply included usage controls in addition to budgets.

{% data reusables.billing.included-usage-controls %}

This is separate from a cost center budget, which caps metered charges only after the shared pool of {% data variables.product.prodname_ai_credits_short %} is exhausted. For more information, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing#included-usage-controls-for-cost-centers).

## Cost center limitations

* The maximum number of active cost centers per enterprise is 500.
* The maximum number of resources per cost center is 25,000.
* A maximum of 50 resources can be added to or removed from a cost center at a time.
* Azure subscriptions can only be added to or removed from cost centers through the UI.
* Outside collaborators or unaffiliated users can only be added to cost centers via the cost center API. For more information, see [AUTOTITLE](/billing/tutorials/control-costs-at-scale#add-resources-to-the-cost-center).
* You can't set different budgets for teams within the same cost center. A budget applies to the whole cost center, so if two teams need separate budgets, create a separate cost center for each. Separate cost centers can share the same Azure billing identity.
