---
title: 'Controlling and tracking costs at scale'
intro: 'Control costs and provide granular reporting for your enterprise by mapping your company''s financial structures to cost centers and setting budgets at scale.'
shortTitle: 'Control costs at scale'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Enterprise
  - Billing
  - REST
permissions: 'Enterprise owners and billing managers'
product: '{% data reusables.billing.cta-ghec-cost-centers %}'
contentType: tutorials
audience:
  - driver
---

Cost centers help you track and control {% data variables.product.github %} costs by mapping them to your company's financial structure.

This tutorial guides you through planning, creating, and managing cost centers using both the user interface and the REST API, helping you decide which approach best fits your organization's needs.

## 1. Plan your cost center strategy

Cost centers allow you to group {% data variables.product.github %} resources—users, organizations, and repositories—for separate cost tracking and reporting. Each cost center should represent a segment of your company that you want to report on or control costs for as a separate entity.

If you use Azure billing, you can assign a different billing identity to each cost center.

### Identify the cost centers you need

The best strategy depends on the complexity of both your financial reporting structure and your {% data variables.product.github %} setup. Start with the simplest approach—you can always add more cost centers later.

Follow these steps to plan your cost centers:

1. **Map to financial entities**: Create one cost center for each financial entity you want to track internally (such as departments, business units, or project teams).

1. **Identify users**: List the users who belong to each financial entity. Assigning users directly to a cost center ensures their license and product usage is allocated correctly.

1. **Identify organizations**: List the organizations that belong to each financial entity. Assigning organizations to a cost center allocates their usage of actions, {% data variables.product.prodname_codespaces %}, packages, and other products correctly.

1. **Identify mixed ownership**: If an organization contains repositories owned by different financial entities, plan to assign individual repositories to the relevant cost centers and leave the organization unassigned.

> [!TIP]
> If a user is directly assigned to cost center A, and indirectly part of cost center B by organization membership, all their costs for licensed products are allocated to cost center A. For more details and an example, see [AUTOTITLE](/billing/reference/cost-center-allocation).

## 2. Create a cost center in the UI

Now you'll create your first cost center using the user interface (UI) to familiarize yourself with how cost centers work. Choose one of the cost centers you've identified as an example—it's best to start with a small financial entity.

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Click **New cost center** in the upper-right corner.
1. In the text box under "Name", enter the name of the financial entity you want to track costs for.
1. Optionally, if this financial entity has a separate Azure subscription, you can add the Azure subscription to the cost center to charge usage directly to it. The credentials will be verified against Azure to ensure the Azure ID associated with the account is available.
1. Under **Resources**, select the users, organizations, and repositories to track as part of this cost center.
1. Click **Create cost center**.

Your new cost center is now active and usage will begin to attribute to the cost center immediately. Future billing reports will include this cost center with an entry in the `cost_center_name` column for usage allocated to it. You'll also be able to filter usage charts by this cost center.

## 3. Set budgets to control costs

Creating a cost center allows you to track costs separately for different financial entities. To actually control costs, you need to apply budgets to your cost centers.

### Understanding budgets

Budgets give you control over spending. Each budget:

* Applies to a single organization, repository, cost center, or your entire enterprise
* Controls the monthly usage of one paid product, SKU, or group of SKUs
* Can be configured to stop usage or to only alert when the budget limit is reached
* Can alert account owners, billing managers, and nominated users as the budget limit is approached

### Calculate your cost center budget

If your internal financial plan allocates a single monthly budget for {% data variables.product.github %} for this cost center, you'll need to distribute it across the products this team uses.

1. **Calculate fixed license costs**: Add up the costs of licenses the team already uses for {% data variables.product.prodname_enterprise %}, {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_GH_cs_and_sp %}.
1. **Calculate variable budget**: Subtract the license costs from the internal budget. The remaining amount is what you can allocate for usage-based products beyond what's included in the plan.

### Create budgets for the cost center

Create one budget for each product, SKU, or group of SKUs that you want to control costs for.

1. On the  "Billing and licensing tab", click {% octicon "bell" aria-hidden="true" aria-label="bell" %} **Budgets and alerts** to display the existing budgets.
1. Click **New budget** to open the "New monthly budget" page.
1. Under "Budget Type" select **Product-level budget**, **SKU-level budget**, or **Bundled premium requests budget**.

   * To limit spending at the product level, in "Product-level budget", choose a product from the dropdown (for example, {% data variables.product.prodname_codespaces %}).
   * To limit spending at the SKU level, in "SKU-level budget", choose a product and a SKU (for example, {% data variables.product.prodname_copilot_short %} and {% data variables.product.prodname_copilot_short %} Premium Request).
   * To limit spending for all premium requests, use the "Bundled premium requests budget".

1. Click **Next: Configure budget** to display "Budget scope" and set the scope of spending for this budget to the cost center you created earlier.
1. Under "Budget", set a budget amount. To stop any usage and further spending once the budget limit is reached, select **Stop usage when budget limit is reached**. This is not available for licensed-based products.


1. To receive an alert when usage reaches 75%, 90%, and 100% of the budget target, select **Receive budget threshold alerts** under "Alerts".  Account owners, billing managers, and any additional specified recipients will be notified via email. You may opt out at any time.

   Under "Alert Recipients", select any additional recipients to receive the alerts.

1. Click **Create budget**.

### Review existing budgets for conflicts

After creating your cost center budgets, check existing enterprise-wide budgets to ensure they don't conflict with or override your new cost center budgets.

Navigate to the "Budgets and alerts" page. You'll see two lists of budgets:

* **Enterprise budgets**: Limits that apply to the whole enterprise account
* **Other budgets**: Limits for specific repositories, organizations, or cost centers

#### Check enterprise budgets

Review whether any enterprise budgets apply to the same products or SKUs as your new cost center budgets. If an enterprise budget is very low, it might block usage for your cost center before the cost center's own budget is reached. Consider deleting or adjusting conflicting enterprise budgets.

#### View your cost center budgets

Filter the other budgets list to show a scope of **Cost Centers**. You should see your new cost center with a row for each budget you created. Initially, usage will be near zero, but within a few days you'll see costs accumulating as users and repositories consume products beyond the allowance in their plan.

## 4. Create a cost center with the REST API

Now that you understand how to create cost centers in the user interface, you can explore the REST API to see how cost centers can be created programmatically. Understanding the API helps you evaluate whether automation would benefit your organization.

This section demonstrates key REST API endpoints for cost center management using {% data variables.product.prodname_cli %}. For details on installing {% data variables.product.prodname_cli %} and authenticating to access these endpoints, see [AUTOTITLE](/rest/quickstart?apiVersion=2022-11-28&tool=cli).

> [!NOTE]
> The following examples use {% data variables.product.prodname_cli %}, but you can adapt these commands to use `curl` or any HTTP client that supports REST API calls.

### List all existing cost centers

First, retrieve all cost centers in your enterprise to see what already exists. This simple request allows you to ensure that you're correctly authenticated to manage billing for your enterprise.

In your terminal, run the following command, replacing `ENTERPRISE` with the slug of your enterprise.

```shell copy
gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /enterprises/ENTERPRISE/settings/billing/cost-centers
```

The response will include all the cost centers created in your enterprise, including the cost center you created earlier in this tutorial. In this example, the enterprise has one cost center, "Octocenter", with an organization and two users assigned.

```json
{
  "costCenters": [
    {
      "id": "33635e2c-edc0-40b8-abea-261839ff73c1",
      "name": "Octocenter",
      "state": "active",
      "resources": [
        {
          "type": "User",
          "name": "monalisa"
        },
        {
          "type": "Org",
          "name": "doctocat-org"
        },
        {
          "type": "User",
          "name": "doctocat"
        }
      ]
    }
  ]
}
```

### Create a new cost center

Create a new cost center by providing a name. You'll receive a unique identifier that you'll use to manage this cost center.

In your terminal, run the following command, replacing `ENTERPRISE` and `NAME` with appropriate values.

```shell copy
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /enterprises/ENTERPRISE/settings/billing/cost-centers \
   -f 'name=NAME'
```

The response includes the identifier for the new cost center. You'll need to use this `id` for all future operations on this cost center.

```json
{
  "id": "3312fdf2-5950-4f64-913d-e734124059c9",
  "name": "NAME",
  "state": "active",
  "resources": []
}
```

### Add resources to the cost center

Assign users, organizations, and repositories to your cost center. This example shows how to add multiple users and an organization.

In your terminal, run the following command, replacing `COST_CENTER_ID` with the identifier from the previous step, and `ENTERPRISE`, `NAME`, and `ORG` with appropriate values.

```shell copy
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /enterprises/ENTERPRISE/settings/billing/cost-centers/COST_CENTER_ID/resource \
  --input - <<< '{
  "users": [
    "NAME-1",
    "NAME-2"
  ],
  "organizations": [
    "ORG-1"
  ]
}'
```

The response confirms the successful addition of resources. If any resources were previously assigned to a different cost center, they'll be listed in the `reassigned_resources` array.

```json
{
  "message": "Resources successfully added to the cost center.",
  "reassigned_resources": [
    {
      "resource_type": "User",
      "name": "monalisa",
      "previous_cost_center": "Octocenter"
    }
  ]
}
```

If the endpoint responds with `Problems parsing JSON`, use a JSON validator to check that the data specified in the `--input` option is valid.

## 5. Set budgets with the REST API

You can create budgets programmatically to apply spending controls to the cost centers you've created. This is particularly useful for managing usage-based costs like premium requests at scale.

### Create a budget for premium requests

This example shows how to create a SKU-level budget for {% data variables.product.prodname_copilot_short %} premium requests and apply it to your new cost center. This allows you to set a spending limit specifically for premium request usage by the resources in this cost center.

In your terminal, run the following command, replacing `ENTERPRISE`, `COST_CENTER_ID`, `USERNAME`, and `1000.0` with appropriate values.

```shell copy
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /enterprises/ENTERPRISE/settings/billing/budgets \
  -f budget_type='SkuPricing' \
  -f budget_product_sku='copilot_premium_request' \
  -f budget_scope='cost_center' \
  -f budget_entity_name='COST_CENTER_ID' \
  -F budget_amount=1000.0 \
  -F prevent_further_usage=true \
  -f budget_alerting='{"will_alert":true,"alert_recipients":["USERNAME"]}'
```

The response confirms the budget was created and returns its configuration. Notice that this budget sets both `prevent_further_usage` and `will_alert` to `true`. The `octocat@github.com` email address will receive alerts as the budget limit is approached and usage will be blocked for cost center resources once 1000 USD is reached.

```json
{
  "id": "budget-uuid-here",
  "budget_type": "SkuPricing",
  "budget_product_sku": "copilot_premium_request",
  "budget_scope": "cost_center",
  "budget_entity_name": "3312fdf2-5950-4f64-913d-e734124059c9",
  "budget_amount": 1000.0,
  "prevent_further_usage": true,
  "budget_alerting": {
    "will_alert": true,
    "alert_recipients": [
      "octocat"
    ]
  }
}
```

> [!TIP]
> You can create multiple budgets for the same cost center to control different products or SKUs independently. For example, you might set separate budgets for {% data variables.product.prodname_copilot_short %} premium requests, {% data variables.product.prodname_actions %} compute, and {% data variables.product.prodname_codespaces %} usage. See [AUTOTITLE](/billing/reference/product-and-sku-names).

## 6. Decide whether to automate

This tutorial has shown you two approaches to creating cost centers: using the user interface for hands-on management, and using the REST API for programmatic management. Understanding both approaches helps you decide which is right for your organization.

The **user interface** is ideal when you:

* Set up your first few cost centers
* Make occasional updates to existing cost centers
* Prefer visual confirmation of changes
* Have a small number of cost centers to manage

The **REST API** is valuable when you:

* Need to create or update multiple cost centers regularly
* Need to integrate cost center management with existing financial systems or generate configurations from external data sources
* Need cost centers to mirror your organizational structure (such as team membership or department structure)
* Need to maintain cost center assignments automatically as users change roles or move between teams

### Options for automation

If you decide that automation would benefit your organization, the REST API examples in this tutorial provide the foundation for building custom scripts. For details of other endpoints, see [AUTOTITLE](/rest/enterprise-admin/billing?apiVersion=2022-11-28).

If you want to automate cost centers based on team membership or create a two-tier model for controlling costs of premium requests, [{% data variables.product.github %} Cost Center Automation](https://github.com/github/cost-center-automation?ref_product=copilot&ref_type=engagement&ref_style=text) provides a complete implementation using actions workflows that you can adapt for your needs.

## Next steps

To find out about the endpoints you can use to automate reporting of usage and costs, see [AUTOTITLE](/billing/tutorials/automate-usage-reporting).

If there are any paid products that you want to block all access to, you can disable the feature using an enterprise policy. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/about-enterprise-policies).
