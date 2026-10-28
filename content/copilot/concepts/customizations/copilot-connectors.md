---
title: Copilot connectors
shortTitle: 'Connectors'
allowTitleToDifferFromFilename: true
intro: 'Connect a service once to bring its tools and context into supported {% data variables.product.prodname_copilot_short %} surfaces.'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/prompting-and-context/copilot-connectors
category:
  - Integrate Copilot with your tools
---

> [!NOTE]
> {% data reusables.copilot.connectors-public-preview %}

## About {% data variables.product.prodname_copilot_short %} connectors

Much of what you need to know while coding lives outside your repository, in the services your team uses to plan, discuss, and monitor its work. {% data variables.product.prodname_copilot_short %} can access services such as Slack, Work IQ, Atlassian Rovo, and Sentry through {% data variables.product.github %}-verified Model Context Protocol (MCP) servers, or connectors. {% data variables.product.github %} handles MCP server configuration and authentication for you.

Connect a service once by signing in and approving access. You can then use its tools and context in supported {% data variables.product.prodname_copilot_short %} surfaces, without repeating setup.

To get started, visit the [{% data variables.product.prodname_copilot_short %} customization page](https://github.com/copilot/customize?utm_source=link-docs-new-connectors-product&utm_medium=docs&utm_campaign=universe-2026) to explore available connectors. 

Depending on the connected service and its tools, you could ask {% data variables.product.prodname_copilot_short %} to:

* Find requirements in Teams and SharePoint with Work IQ, then suggest the code changes and tests needed to implement them.
* Find and summarize the Slack thread where your team agreed on an API design before changing the implementation.
* Investigate a failing service by querying logs and metrics in Grafana Cloud.

{% data variables.product.prodname_copilot_short %} can use tools from a connected service when they are relevant to your request, even if you do not mention the service by name. For a list of supported services, see [AUTOTITLE](/copilot/reference/supported-connectors).

## Where you can use connectors

You can set up and use connectors from these locations:

* **{% data variables.copilot.github_copilot_app %}**: The **Customize** tab in the app sidebar. Select **MCP** from the dropdown next to the search field, then select the **{% data variables.product.github %} verified** filter.
* **{% data variables.copilot.copilot_cli %}**: The **Connectors** view of the MCP server dashboard, opened with `/mcp`.
* **{% data variables.product.prodname_vscode %}**: The **Customizations** section of the Agents window.
* **{% data variables.copilot.copilot_in_the_cloud_short %}**: The [{% data variables.product.prodname_copilot_short %} customization page](https://github.com/copilot/customize?utm_source=link-docs-new-connectors-product&utm_medium=docs&utm_campaign=universe-2026).

After you connect a service, you can also use its connector with {% data variables.copilot.copilot_in_the_cloud_short %} in {% data variables.product.prodname_mobile %} for iOS and Android, or in a mobile browser.

Connectors work locally and in {% data variables.product.prodname_copilot_short %} sessions that run on a cloud sandbox, including sessions started on {% data variables.product.prodname_dotcom_the_website %}. They are not yet supported in sessions that run on {% data variables.product.prodname_actions %}, such as when you assign an issue to {% data variables.product.prodname_copilot_short %}.

## Enabling connectors in your organization

If your organization or enterprise provides your {% data variables.product.prodname_copilot_short %} subscription, the following policies and settings must allow connectors before you can use them:

* **Editor preview features**: Because connectors are in {% data variables.release-phases.public_preview %}, this policy must be enabled. To enable it, see [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* **MCP servers in {% data variables.product.prodname_copilot_short %}**: This policy must be enabled. If MCP servers are disabled, you can't use connectors.
* **Restrict MCP access to registry servers**: On clients that enforce this policy, setting it to **Registry only** blocks connectors. To use connectors on those clients, this policy must be set to **Allow all**.
* **MCP allowlist**: On clients that support MCP managed settings, if your enterprise defines an `allowedMcpServers` allowlist, the allowlist must include each connector's URL, or a wildcard that matches all connectors. A matching `deniedMcpServers` entry blocks the connector even if the allowlist permits it. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist#allowing-copilot-connectors).

For more information about these policies, see [AUTOTITLE](/copilot/concepts/enterprise/mcp-management). For the clients that enforce each policy, see [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies).

The service you're connecting may have its own MCP access requirements. For example, a Slack administrator may need to enable MCP connections before you can connect Slack to {% data variables.product.prodname_copilot_short %}.
