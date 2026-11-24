---
title: MCP server usage in your company
shortTitle: MCP management
intro: You can manage MCP server usage to provide your developers with valuable tools while maintaining security and compliance.
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Manage Copilot for a team
redirect_from:
  - /copilot/concepts/mcp-management
---

{% data reusables.copilot.mcp.intro %}

You can manage MCP server usage in your organization or enterprise by configuring MCP policies on {% data variables.product.github %}.

The **MCP servers in {% data variables.product.prodname_copilot_short %}** policy defines whether MCP servers can run at all across {% data variables.product.prodname_copilot_short %} clients. We recommend keeping this policy enabled and, if necessary, restricting the MCP servers that users can run to an approved list.

This policy also applies to {% data variables.product.prodname_copilot_short %} connectors. Because connectors are in {% data variables.release-phases.public_preview %}, the **Editor preview features** policy must also be enabled. To enable it, see [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise). On clients that enforce your MCP restrictions, connectors are blocked if **Restrict MCP access to registry servers** is set to **Registry only**, or if your allowlist doesn't include connector URLs. See [AUTOTITLE](/copilot/concepts/customizations/copilot-connectors#enabling-connectors-in-your-organization).

## MCP allowlists

The recommended method for creating an allowlist is to use your enterprise's `{% data variables.copilot.managed_setting_file %}` file. This allows you to apply settings across clients that users cannot override.

Alternatively, you can host your own MCP registry and restrict access to servers in the registry. However, this method has weaker enforcement than `{% data variables.copilot.managed_setting_file %}`.

{% rowheaders %}

| Method | Managed settings file | Custom registry |
| ------ | --------------------- | --------------- |
| Release phase | Generally available | {% data variables.release-phases.public_preview_caps %}, not prioritized for development |
| Ease of setup | You can host a configuration file on {% data variables.product.github %} that applies automatically to clients. | You must host your own registry that matches the MCP specification and serves HTTPS requests. |
| Enforcement level | Enterprise-wide settings, overridable for enterprise teams | Enterprise-wide or for individual organizations |
| Supported clients | Clients supported by the `{% data variables.copilot.managed_setting_file %}` file, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started). Planned to expand in the near future. | See [AUTOTITLE](/copilot/reference/enterprise-administrators/mcp-private-registry-enforcement). |
| Server matching method | Secure matching based on name, URL, or `stdio` commands | Less secure matching, based on name or ID only. Users can bypass the restriction by editing configuration files. |

{% endrowheaders %}

## Distribute MCP servers through a plugin marketplace

If your enterprise already uses a plugin marketplace, you can distribute approved MCP server configurations alongside skills in the same plugins. This lets you maintain one catalog of customizations instead of hosting a separate MCP registry for discovery.

On supported clients, combine the following settings:

* `strictKnownMarketplaces` restricts eligible marketplace sources.
* `strictPluginOnlyCustomization` with `mcp` blocks standalone user and project MCP configurations while allowing eligible plugin and managed sources.

These source restrictions do not replace MCP server allowlists and denylists. Keep those rules if you also need to restrict server URLs or commands.

Before retiring a registry policy, verify that the replacement controls cover every affected client and session type. For setup and migration steps, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins#move-mcp-distribution-from-a-registry-to-a-marketplace).

## Next steps

To configure an allowlist on {% data variables.product.github %}, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

## Further reading

* [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry)
