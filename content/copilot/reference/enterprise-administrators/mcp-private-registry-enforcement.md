---
title: MCP private registry enforcement
intro: Understand the logic and limitations of MCP private registry enforcement using a private registry server.
versions:
  feature: copilot
contentType: reference
category:
  - Learn about Copilot
redirect_from:
  - /copilot/reference/mcp-allowlist-enforcement
  - /copilot/reference/enterprise-administrators/mcp-allowlist-enforcement
---

> [!IMPORTANT] {% data reusables.copilot.mcp.registry-alternative %}

## Supported surfaces

The following table lists where MCP private registry features are supported.

| Surface | Registry display | Allowlist enforcement |
|---|:---:|:---:|
| {% data variables.copilot.copilot_cli_short %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.0.11+ |
| {% data variables.copilot.copilot_cloud_agent %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Eclipse | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v4.38+ |
| JetBrains | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.5.64+ |
| {% data variables.product.prodname_vs %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v18.4.0+ |
| {% data variables.product.prodname_vscode_shortname %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.109.3+ |
| Xcode | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v0.47.0+ |

> [!NOTE]
> For Eclipse, JetBrains, and Xcode, MCP management features are supported in the pre-release versions of {% data variables.product.prodname_copilot_short %}.

## Current enforcement limitations

MCP private registry enforcement currently has the following limitations:

* Enforcement is based only on server name/ID matching, which can be bypassed by editing configuration files.
* Strict enforcement that prevents installation of non-registry servers is not yet available. For stricter URL-based enforcement that users cannot override locally, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

## Enforcement for local servers

MCP private registry enforcement applies to both remote and local MCP servers. When "Registry only" is configured, local servers must be included in your registry with the correct server ID, which must exactly match the installed server ID. A server's canonical ID is often defined in its documentation or manifest.

## Policy resolution for users with multiple seats

MCP private registry enforcement is always tied to the organization or enterprise that assigns the {% data variables.product.prodname_copilot %} seat. If a user has multiple seats, {% data variables.product.github %} automatically resolves conflicts and applies a single active policy and registry.

The resolution logic is:

1. **Scope**: Policies set by a parent enterprise override those set by an organization. Enterprise policies trickle down to all organizations and members within that enterprise.
1. **Enforcement strictness**: Since `Registry only` is more restrictive than `Allow all`, it will always take precedence.
1. **Recency of registry upload**: If two policies have the same scope and strictness, the most recently uploaded registry will be applied.
