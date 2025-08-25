---
title: Managing policies and features for GitHub Copilot in your enterprise
intro: 'Control the availability of features for {% data variables.product.prodname_copilot %} in your enterprise using policies.'
permissions: Enterprise owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
topics:
  - Copilot
  - Enterprise
shortTitle: Manage enterprise policies
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-policies-and-features-for-copilot-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/manage-enterprise-policies
  - /copilot/how-tos/administer/manage-for-enterprise/manage-enterprise-policies
contentType: how-tos
---

When an organization owner assigns a {% data variables.product.prodname_copilot_short %} license to a member of their organization, the availability of features and models is controlled by policies.

## Defining policies for your enterprise

Enterprise owners can define a policy for the whole enterprise, or delegate the decision to individual organization owners. See [AUTOTITLE](/copilot/concepts/policies).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. On the "{% data variables.product.prodname_copilot %}" page:
   * Click the **Policies** tab to edit the policies that control privacy and availability of features.
   * Click the **Models** tab to edit the policies that control availability of models beyond the basic models provided with {% data variables.product.prodname_copilot_short %}, which may incur additional costs.
1. For each policy you want to configure, click the dropdown menu and select an enforcement option. Select **No policy** to delegate the decision to individual organization owners. For more information, see [AUTOTITLE](/copilot/reference/feature-availability-enterprise).

## Opting in to previews or feedback

If your enterprise has a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan and you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" on the "Policies" tab, two additional options are displayed:

  {% data reusables.copilot.policies-for-dotcom %}
