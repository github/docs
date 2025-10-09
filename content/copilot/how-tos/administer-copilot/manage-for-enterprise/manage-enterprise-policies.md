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

<!-- expires 2025-10-20 -->
<!-- Temporarily documents the old and new UI for direct Copilot licensing -->
<!-- Will be addressed by Driver team once the rollout is complete, docs issue 18525 -->

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. If you see tabs at the top of the page, click the **Policies** or **Models** tab. If you don't see tabs, you will find the {% data variables.product.prodname_copilot_short %} policies on the page you're on, or you can click the {% octicon "chevron-right" aria-label="Go to models settings" %} icon for models policies.
1. For each policy you want to configure, click the dropdown menu and select an enforcement option. Select **No policy** to delegate the decision to individual organization owners. For more information, see [AUTOTITLE](/copilot/reference/feature-availability-enterprise).

<!-- end expires 2025-10-20 -->

{% data reusables.copilot.mcp-servers-policy-note %}

## Opting in to previews or feedback

If your enterprise has a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan and you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" on the "Policies" tab, two additional options are displayed:

  {% data reusables.copilot.policies-for-dotcom %}
