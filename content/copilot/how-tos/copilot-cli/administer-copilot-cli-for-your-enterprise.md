---
title: Administering Copilot CLI for your enterprise
shortTitle: Administer for enterprise
intro: 'Control the use of {% data variables.copilot.copilot_cli_short %} within your enterprise.'
versions:
  feature: copilot
topics:
  - Copilot
  - Enterprise
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Manage Copilot for a team # Copilot discovery page
  - Administer Copilot CLI # Copilot CLI bespoke landing page
---

## Enabling or disabling {% data variables.copilot.copilot_cli_short %}

**Enterprise owners** can control the use of {% data variables.copilot.copilot_cli_short %} by configuring a policy.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. To manage policies for **{% data variables.product.prodname_copilot_short %}**, in the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}**.
1. In the "{% data variables.product.prodname_copilot_short %} Clients" section, for {% data variables.copilot.copilot_cli_short %}, select your preferred policy.

## How do other AI controls affect {% data variables.copilot.copilot_cli_short %}?

Not all enterprise-level AI controls and policies apply to {% data variables.copilot.copilot_cli_short %}. These are the controls that **do apply**:

### {% data variables.copilot.copilot_cli_short %} enablement

You can enable or disable {% data variables.copilot.copilot_cli_short %} at the enterprise or organization level.

### Model selection

Users can only access AI models that are enabled at the enterprise level. When you enable or disable models in your enterprise settings, those changes are reflected in {% data variables.copilot.copilot_cli_short %}. Users can view which models are available to them using the `/model` command.

### Custom agents

Enterprise-configured custom agents are available to use with {% data variables.copilot.copilot_cli_short %}.

### {% data variables.copilot.copilot_coding_agent %} enablement

Both the {% data variables.copilot.copilot_cli_short %} policy and the {% data variables.copilot.copilot_coding_agent %} policy must be enabled for users to be able to use the `/delegate` command in {% data variables.copilot.copilot_cli_short %}.

### Audit logging

{% data variables.copilot.copilot_cli_short %} usage events appear in enterprise audit logs.

### Seat assignment

Users must have an assigned {% data variables.product.prodname_copilot %} seat to access {% data variables.copilot.copilot_cli_short %}.

### Controls that do not apply

All other controls do **not** affect {% data variables.copilot.copilot_cli_short %}, notably:

* **Model Context Protocol (MCP) server policies**: Enterprise policies that control whether MCP servers can be used, or which MCP registry servers are allowed
* **IDE-specific policies**: Policies configured for specific IDEs or editor extensions
* **Content exclusions**: File path-based content exclusions

## Why can't my developers access {% data variables.copilot.copilot_cli_short %}?

If you expect a user to have access to {% data variables.copilot.copilot_cli_short %} and they don't:

1. Ensure the user has a valid {% data variables.product.prodname_copilot %} seat assignment from an organization in your enterprise.
1. Verify the **enterprise-level policy.** If you set the policy to "Enabled everywhere" or "Disabled everywhere," this overrides all organization-level settings.
1. If the enterprise policy is set to "Let organizations decide," check the organizations where the user receives their {% data variables.product.prodname_copilot %} license. {% data variables.copilot.copilot_cli_short %} must be enabled in **at least one** of the organization granting them a {% data variables.product.prodname_copilot %} license.

One way to ensure consistent access across all organizations is to set the policy to **Enabled everywhere** at the enterprise level.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/cli-best-practices)
