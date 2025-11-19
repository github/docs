---
title: Configure MCP server access for your organization or enterprise
intro: You can configure an MCP registry URL and access control policy to determine which MCP servers developers can discover and use in supported IDEs with {% data variables.product.prodname_copilot %}.
permissions: Enterprise owners and organization owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
topics:
  - Copilot
  - Enterprise
shortTitle: Configure MCP server access
redirect_from:
  - /copilot/how-tos/administer-copilot/configure-mcp-server-access
  - /copilot/how-tos/administer-copilot/manage-for-organization/set-extension-permissions
contentType: how-tos
category:
  - Manage Copilot for a team
---

> [!NOTE]
> The MCP registry URL and allowlist are in {% data variables.release-phases.public_preview %} and subject to change.

## Prerequisites

Before you can fully configure MCP server access for your company, you need to create an MCP registry. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).

## Configuring the MCP allowlist policy for an enterprise

To ensure uniform access, you can set and maintain your MCP registry URL and allowlist policy at the enterprise level. Otherwise, if your teams have different needs, you should configure separate policies for each organization.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.view-mcp-policies %}
1. Ensure **MCP servers in {% data variables.product.prodname_copilot_short %}** is set to **Enabled everywhere**.
1. In the **MCP Registry URL** section, enter the URL of your registry, then click **Save**.

    {% data reusables.copilot.mcp.azure-api-center-url %}

1. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your enterprise.

## Configuring the MCP allowlist policy for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies**.
1. In the "Features" section, ensure **MCP servers in {% data variables.product.prodname_copilot_short %}** is set to **Enabled**.
1. In the **MCP Registry URL (optional)** field, enter the URL of your registry, then click **Save**.

    {% data reusables.copilot.mcp.azure-api-center-url %}

1. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your organization.

## Next steps

For detailed information on MCP allowlist enforcement and limitations, see [AUTOTITLE](/copilot/reference/mcp-allowlist-enforcement).
