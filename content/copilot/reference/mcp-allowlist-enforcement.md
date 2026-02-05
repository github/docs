---
title: MCP allowlist enforcement
intro: 'Understand the logic and limitations of MCP allowlist enforcement.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
category:
  - Learn about Copilot
---

## Current enforcement limitations

MCP allowlist enforcement currently has the following limitations:

* Enforcement is based only on server name/ID matching, which can be bypassed by editing configuration files
* Strict enforcement that prevents installation of non-registry servers is not yet available

For the highest level of security, you can **disable MCP servers in {% data variables.product.prodname_copilot_short %}** until strict enforcement is available.

## Enforcement for local servers

MCP allowlist enforcement applies to both remote and local MCP servers. When "Registry only" is configured, local servers must be included in your registry with the correct server ID, which must exactly match the installed server ID. A server's canonical ID is often defined in its documentation or manifest.

## Policy resolution for users with multiple seats

MCP allowlist enforcement is always tied to the organization or enterprise that assigns the {% data variables.product.prodname_copilot %} seat. If a user has multiple seats, {% data variables.product.github %} automatically resolves conflicts and applies a single active policy and registry.

The resolution logic is:

1. **Scope**: Policies set by a parent enterprise override those set by an organization. Enterprise policies trickle down to all organizations and members within that enterprise.
1. **Enforcement strictness**: Since `Registry only` is more restrictive than `Allow all`, it will always take precedence.
1. **Recency of registry upload**: If two policies have the same scope and strictness, the most recently uploaded registry will be applied.
