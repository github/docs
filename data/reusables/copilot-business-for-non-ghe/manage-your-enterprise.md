For next steps that apply to any enterprise using {% data variables.copilot.copilot_business_short %}, see [AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise). The step for granting access to organizations does not apply.

The following sections contain specific information for your enterprise.

### Automate license management

You can use the REST API to automate license management. For example, you can list assigned licenses and latest activity, then remove access for users who haven't been using their license.

To do this in your enterprise, you can use the [List all {% data variables.product.prodname_copilot_short %} seat assignments for an enterprise](/rest/copilot/copilot-user-management#list-all-copilot-seat-assignments-for-an-enterprise) endpoint, then use the API to manage access to enterprise teams. To request documentation for the API endpoints for enterprise teams, please contact your account manager.

### Manage billing

Your enterprise has access to the new billing platform, which allows you to estimate upcoming spending, control overspending with budgets, and track spending changes over time.

See [AUTOTITLE](/billing/managing-your-billing).

### Configure content exclusions

You can prevent specified files or repositories from being used to inform code completion suggestions made by {% data variables.product.prodname_copilot %}. {% data variables.product.prodname_copilot %} will not be available in excluded files.

{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.view-copilot-policies %}
1. Click {% octicon "circle-slash" aria-hidden="true" aria-label="circle-slash" %} **Content exclusion**.
1. Use paths to specify which content to exclude. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot).
