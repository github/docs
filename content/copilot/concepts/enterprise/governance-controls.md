---
title: Governance controls for GitHub Copilot
shortTitle: Governance controls
intro: Prepare to build your governance framework by understanding the tools at your disposal.
versions:
  feature: copilot
contentType: concepts
docsTeamMetrics:
  - ai-governance
---

Governance of {% data variables.product.prodname_copilot %} depends on a range of features and settings. Some are specific to {% data variables.product.prodname_copilot_short %}, and some apply to the {% data variables.product.github %} platform as a whole. Understanding how these surfaces interact is the first step of setting up your governance framework.

## Overview

As a simplified example, you can think of the surfaces interacting like this:

1. **Assign seats** on your enterprise's {% data variables.product.prodname_copilot_short %} plan. Users who receive seats from your enterprise are governed by your other settings and controls.
1. **Configure your network settings** to control which endpoints {% data variables.product.prodname_copilot_short %} can reach on your corporate network. {% data variables.product.prodname_copilot_short %}'s endpoints are segregated by SKU, so you can block the use of personal {% data variables.product.prodname_copilot_short %} plans on the network. This ensures that everyone using {% data variables.product.prodname_copilot_short %} through the network uses a plan assigned by your organization or enterprise and is subject to the corresponding governance controls.
1. **Set policies** to determine where your licensed users can use {% data variables.product.prodname_copilot_short %} and which features are available in those clients. For example, you can enable {% data variables.product.prodname_vscode_shortname %}, {% data variables.copilot.copilot_cli_short %}, or the {% data variables.copilot.github_copilot_app_short %} separately.
1. **Configure settings** to govern what your licensed users can do in those clients:

   * Model settings control which LLM models users can choose when interacting with {% data variables.product.prodname_copilot_short %}, including custom models from an external provider.
   * A `{% data variables.copilot.managed_setting_file %}` file gives you granular control over what users and agents can do in the clients you've enabled.
   * Billing settings, such as budgets and cost centers, control the costs associated with usage that's billed to your enterprise.

1. **Create rulesets** to enforce code and review standards in your enterprise's repositories, for both users and agents.
1. **Use audit logs** to record changes to these settings so you can prevent unintended configuration drift.

## How each surface works

{% rowheaders %}

| Surface | What it does | Where it's defined | Who it affects | Where it applies |
| ------- | ------------ | ------------------ | -------------- | ---------------- |
| Seat assignment | Gives users the right to use {% data variables.product.prodname_copilot_short %}. Determines whose usage is billed to your enterprise and who is affected by your enterprise policies. If you use {% data variables.product.prodname_emus %}, this is the only route for managed accounts to access {% data variables.product.prodname_copilot_short %}. | Enterprise **AI controls**, organization settings, or an external identity provider (via enterprise teams). | Members of the enterprise or organization. | Gives users the right to use {% data variables.product.prodname_copilot_short %}, but where and how they can use it is controlled by the rest of your governance settings. |
| Network settings | Defines which {% data variables.product.github %} endpoints users can access, and with which account. For example: does traffic flow through a proxy? Can users use a personal {% data variables.product.prodname_copilot_short %} plan on your network, or connect to {% data variables.product.github %} with their personal account at all? | A combination of enterprise settings on {% data variables.product.github %} and rules on your corporate proxy or firewall. | Anyone on your corporate network | The {% data variables.product.github %} website and connections to remote resources from local clients. |
| {% data variables.product.prodname_copilot_short %} policies | Sets basic on/off controls, such as whether a feature is enabled or a client is available to users. | Enterprise **AI controls** or organization settings. Enterprises can choose to set blanket policies or let organizations decide. | Generally, all users who receive a {% data variables.product.prodname_copilot_short %} seat from your organization or enterprise. | Each specific client has its own enablement policy. Other policies have varying client support. See [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies). | 
| Model settings | Controls which models are available to which users, including models from external providers. | Enterprise **AI controls** or organization settings. Different settings can be rolled out to enterprise teams or organizations with specific requirements. | Users who receive a {% data variables.product.prodname_copilot_short %} seat from your organization or enterprise. | See the **Configure models** row in [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies). |
| Enterprise managed settings | Controls what users and their agents can do in the clients they use. For example, which plugins can they install, which MCP servers can they connect to, and which agent tool calls require approval. | Either a JSON file in a `.github-private` repository, or configuration rolled out directly to users' machines via mobile device management. | Depends on the rollout method: the JSON file targets your licensed {% data variables.product.prodname_copilot_short %} users only; machine configuration targets anyone using that machine. | Different keys are supported in different clients. See [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#client-support-by-key). |
| Billing settings | Sets budgets to control your enterprise's usage costs. | Enterprise or organization billing settings: budgets, cost centers, and overage policies. | People whose usage is billed to your enterprise. | All {% data variables.product.prodname_copilot_short %} clients and surfaces. |
| Rulesets | Protects branches from undesired or unreviewed code changes. | Enterprise, organization, or repository settings on {% data variables.product.github %}. | Anyone who contributes to the targeted repositories, including both agents and humans. | Targeted repositories and branches, which you can specify based on naming conventions or custom properties. |
| Audit logs | Allows your enterprise to track agent activity and changes to your governance settings or {% data variables.product.prodname_copilot_short %} plan. | Available to view on {% data variables.product.github %} and optionally stream to an external platform for retention. | Enterprise and organization administrators; not visible to users without the required permission. | Captures activity on the {% data variables.product.github %} website, but does not provide visibility into what users do in local clients or provide a granular breakdown of agent sessions. |

{% endrowheaders %}
