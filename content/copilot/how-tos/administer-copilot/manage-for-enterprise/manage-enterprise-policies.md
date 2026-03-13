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
category: 
  - Manage Copilot for a team
---

When an organization owner assigns a {% data variables.product.prodname_copilot_short %} license to a member of their organization, the availability of features and models is controlled by policies. If you are using a dedicated enterprise to manage {% data variables.copilot.copilot_business_short %} without {% data variables.product.prodname_enterprise %} licenses, see [AUTOTITLE](/copilot/how-tos/set-up/set-up-a-dedicated-enterprise-for-copilot-business).

## Defining policies for your enterprise

Enterprise owners can define a policy for the whole enterprise, or delegate the decision to individual organization owners. See [AUTOTITLE](/copilot/concepts/policies).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. Navigate to the page containing the policies you want to manage:

   * To view policies for **AI agents**, in the sidebar, click {% octicon "agent" aria-hidden="true" aria-label="agent" %} **Agents**.
   * To view policies for **{% data variables.product.prodname_copilot_short %}**, in the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}**.
   * To view policies for **Model Context Protocol (MCP)**, in the sidebar, click {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} **MCP**.

1. Configure your policies as follows:
   * For policies with a **dropdown menu**, select the menu and click an enforcement option.
   * For policies with a **toggle**, click the toggle to set availability or enforcement.
   * For policies with **no visible dropdown menu or toggle**, click the name of the policy for configuration options.

{% data reusables.copilot.mcp-servers-policy-note %}

## Opting in to previews or feedback

If your enterprise has a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan and you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" from the "{% data variables.product.prodname_copilot_short %}" page of the "AI Controls" tab, two additional options are displayed:

  {% data reusables.copilot.policies-for-dotcom %}

## Further reading

* [AUTOTITLE](/copilot/reference/policy-conflicts)
