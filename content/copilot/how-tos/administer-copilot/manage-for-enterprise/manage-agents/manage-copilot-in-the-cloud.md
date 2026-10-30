---
title: Managing GitHub Copilot in the cloud for your enterprise or organization
intro: Allow users to use {% data variables.product.prodname_copilot_short %} on {% data variables.product.github %} and start cloud sessions from local clients.
allowTitleToDifferFromFilename: true
permissions: Enterprise owners and AI managers
versions:
  feature: copilot
shortTitle: Manage {% data variables.copilot.copilot_in_the_cloud_short %}
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
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent
  - /copilot/concepts/enterprise/cloud-agent-access
  - /copilot/concepts/agents/coding-agent/access-management
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/enabling-copilot-coding-agent-for-your-personal-repositories
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent-for-your-personal-repositories
  - /copilot/using-github-copilot/coding-agent/enabling-copilot-coding-agent
  - /copilot/concepts/coding-agent/about-enabling-coding-agent
  - /copilot/concepts/coding-agent/enable-coding-agent
  - /copilot/concepts/agents/coding-agent/enable-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/enabling-copilot-coding-agent
  - /copilot/concepts/agents/coding-agent/coding-agent-for-business-and-enterprise
  - /copilot/concepts/agents/coding-agent/managing-access
  - /copilot/concepts/agents/cloud-agent/access-management
  - /copilot/concepts/enterprise/agent-management
  - /copilot/tutorials/cloud-agent/pilot-cloud-agent
  - /copilot/tutorials/coding-agent/pilot-coding-agent
  - /copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org
  - /copilot/tutorials/pilot-copilot-coding-agent
  - /copilot/concepts/agents/enterprise-management
contentType: how-tos
category:
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

{% data reusables.copilot.copilot-in-the-cloud-policy %}

## What if I already set policies for {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_chat_dotcom_short %}?

The individual policies for {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_chat_dotcom_short %}, and {% data variables.copilot.copilot_mobile_short %} have been replaced by the **{% data variables.copilot.copilot_in_the_cloud_short %}** policy. If you previously opted a repository out of {% data variables.copilot.copilot_cloud_agent %}, that repository exclusion is carried over to the new experience.

Be aware that coverage of other policies and enterprise managed settings is different for the unified surface. Check that your governance settings still meet your needs. See [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies) and [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

## Prerequisites

Before enabling {% data variables.copilot.copilot_in_the_cloud_short %}, you may want to review your enterprise policies, repository protections, and runner settings to ensure agents will operate in a secure environment. See [AUTOTITLE](/copilot/tutorials/cloud-agent/build-guardrails).

## Managing the {% data variables.copilot.copilot_in_the_cloud_short %} policy

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}**.
1. Under "Features & clients", click **Configure features & clients**.
1. Select a global policy for {% data variables.copilot.copilot_in_the_cloud_short %}, then communicate your decision with your organizations.

   > [!TIP] If you select **Enabled for selected organizations**, click **Manage organizations**, then **Select organizations**. In the "{% data variables.copilot.copilot_in_the_cloud_short %}" dialog, select the organizations to enable, then click **Save**. To select organizations based on custom properties instead, use the REST API. See [AUTOTITLE](/rest/copilot/copilot-coding-agent-management#selecting-organizations-with-custom-properties).

1. By default, the feature will be available in all repositories in selected organizations. If there are repositories where the cloud agent should be blocked for all users, tell organization owners to configure this setting. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent#disabling-or-enabling-copilot-cloud-agent-in-your-repositories).

## Configuring permissions for tool calls

By default, cloud sessions run in interactive mode with assisted tool approvals. This gives users the best balance between control and ease of use. Users can also enable "allow-all" mode unless your enterprise has blocked this option.

To disable "allow-all" mode or assisted approval, or configure permissions for specific operations, you can use your enterprise's `{% data variables.copilot.managed_setting_file %}` file. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

## Configuring MCP servers and web access

{% data variables.product.prodname_copilot_short %} automatically has access to a small number of default MCP servers. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent#default-mcp-servers).

You can enable third-party MCP servers for your enterprise.

{% data reusables.enterprise-accounts.view-mcp-policies %}
1. Set a policy for **MCP servers in {% data variables.product.prodname_copilot_short %}**.

For more granular settings, you can configure an allowlist or denylist in your enterprise's `{% data variables.copilot.managed_setting_file %}` file. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

Organization owners can configure the firewall for their organization to determine which external hosts and URLs the cloud agent can access. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Configuring session environments

{% data reusables.copilot.agent-env-enterprise %}

{% data reusables.copilot.agent-env-support-caveat %}

Enabling the **{% data variables.copilot.copilot_in_the_cloud_short %}** policy automatically makes cloud sandboxes available to users, and cloud sandboxes cannot be disabled separately. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

For more information about configuring the {% data variables.product.prodname_actions %} environment, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).

## Enabling {% data variables.copilot.agent_apps %} and third-party agents

Enterprise owners can enable third-party agents, including {% data variables.copilot.agent_apps %}, for their organizations. Once enabled at the enterprise level, organization owners can choose which agents to allow. For more information, see [AUTOTITLE](/copilot/concepts/agent-capabilities/about-agents/agent-apps) and [AUTOTITLE](/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents).
