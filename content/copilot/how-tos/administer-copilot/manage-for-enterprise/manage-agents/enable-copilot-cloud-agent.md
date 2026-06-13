---
title: Enabling GitHub Copilot cloud agent in your enterprise
intro: 'Choose which organizations can use {% data variables.copilot.copilot_cloud_agent %} and connect it to MCP servers.'
allowTitleToDifferFromFilename: true
permissions: Enterprise owners and AI managers
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Contact Sales</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
shortTitle: 'Enable {% data variables.copilot.copilot_cloud_agent %}'
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-coding-agent
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/adding-copilot-coding-agent-to-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/making-copilot-coding-agent-available-to-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-copilot-coding-agent-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-copilot-coding-agent-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/manage-copilot-coding-agent
  - /copilot/how-tos/administer/manage-for-enterprise/manage-copilot-coding-agent
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-copilot-coding-agent
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-cloud-agent
contentType: how-tos
category:
  - Manage Copilot for a team
---

## Prerequisites

You may want to run a trial before enabling {% data variables.copilot.copilot_cloud_agent %} for the enterprise. See [AUTOTITLE](/copilot/tutorials/cloud-agent/pilot-cloud-agent).

## Enabling {% data variables.copilot.copilot_cloud_agent %}

{% data variables.copilot.copilot_cloud_agent %} and use of third-party MCP servers are disabled by default. You can enable these features for users who receive a {% data variables.product.prodname_copilot_short %} license from your enterprise or organizations.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.cca-policies %}
1. Select a global policy for {% data variables.copilot.copilot_cloud_agent %}, then communicate your decision with your organizations.

   >[!TIP] If you select **Enabled for selected organizations**, you can select individual organizations in the UI. To select organizations based on custom properties instead, use the REST API. See [AUTOTITLE](/rest/copilot/copilot-coding-agent-management#selecting-organizations-with-custom-properties).

1. By default, the agent will be available in all repositories in selected organizations. If there are repositories where {% data variables.copilot.copilot_cloud_agent %} should be blocked for all users, tell organization owners to configure this setting. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent#disabling-or-enabling-copilot-cloud-agent-in-your-repositories).

## Enabling MCP servers

{% data variables.copilot.copilot_cloud_agent %} automatically has access to a small number of default MCP servers. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent#default-mcp-servers).

You can enable third-party MCP servers to allow developers to integrate {% data variables.copilot.copilot_cloud_agent %} with other services in your DevOps toolchain, such as error-tracking platforms or logging systems.

{% data reusables.enterprise-accounts.view-mcp-policies %}
1. Set a policy for **MCP servers in {% data variables.product.prodname_copilot_short %}**.

>[!NOTE] The "MCP Registry URL" and "Restrict MCP access to registry servers" policies do **not** apply to {% data variables.copilot.copilot_cloud_agent %}.
