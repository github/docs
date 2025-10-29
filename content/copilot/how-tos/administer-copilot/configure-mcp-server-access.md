---
title: Configure MCP server access for your organization or enterprise
intro: You can configure an MCP registry URL and access control policy to determine which MCP servers developers can discover and use in supported IDEs with {% data variables.product.prodname_copilot %}.
permissions: Enterprise owners and organization owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
topics:
  - Copilot
  - Enterprise
shortTitle: Configure MCP server access
contentType: how-tos
category: 
  - Manage Copilot for a team
---

> [!NOTE]
> The MCP registry URL and allowlist are in {% data variables.release-phases.public_preview %} and subject to change.

## Overview

An MCP registry is a directory of Model Context Protocol (MCP) servers that acts like a catalog for IDEs and {% data variables.product.prodname_copilot_short %} (as well as other host applications). Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that server exposes.

As an enterprise or organization owner, you can configure an **MCP registry URL**, allowing you to:
* **Provide a curated catalog** of MCP servers your developers can discover and use
* **Restrict access** to unapproved servers for increased security and compliance
* **Give clarity to developers** when a server is blocked by policy

If you haven't created an MCP registry yet, see [Setting up an MCP registry](#setting-up-an-mcp-registry) later in this article.

## About MCP policy settings

The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise.

### MCP servers in {% data variables.product.prodname_copilot_short %}

First, you must set the overall **MCP servers in {% data variables.product.prodname_copilot_short %}** policy:
* Enabled for all: MCP servers are allowed (default behavior depends on registry configuration)
* Disabled for all: No MCP servers can be used by any users with {% data variables.product.prodname_copilot_short %} seats from this enterprise or organization
* Let organizations decide (Enterprise only): Child organizations can set their own MCP policies

### MCP Registry URL

The **MCP Registry URL** is an optional field where you specify the URL of your discoverable or restricted internal MCP registry. When you configure a registry URL:

* The servers listed in the registry are displayed in supported IDEs
* The "Restrict MCP access to registry servers" setting becomes configurable

### Restrict MCP access to registry servers

Under the **Restrict MCP access to registry servers** setting, you choose how strictly to enforce registry-based access:

* **Allow all** (default): Developers can run any local and remote MCP servers. Registry servers are still shown in the IDE catalog as a curated list for easier discoverability.
* **Registry only**: Developers can only run MCP servers that are explicitly listed in the uploaded MCP registry. In IDE UIs, blocked servers appear greyed out with a warning message. In the `mcp.json` configuration file, they may also show `"run": "blocked"`.

> [!NOTE]
> If you choose the "Registry only" option with the MCP registry URL cleared, all MCP servers will be blocked.

#### Current enforcement limitations

The "Registry only" setting currently has the following limitations:

* Enforcement is based only on server name/ID matching, which can be bypassed by editing configuration files
* Strict enforcement that prevents installation of non-registry servers is not yet available

For the highest level of security, you can **disable MCP servers in {% data variables.product.prodname_copilot_short %}** until strict enforcement is available.

## How MCP policies apply to your users

MCP policies apply to **all users who receive {% data variables.product.prodname_copilot_short %} seats** from the organization or enterprise where the policy is configured.

When a policy is enabled or disabled at the enterprise level, it is automatically applied to all child organizations and their members, and cannot be overridden by those organizations.

When an enterprise lets child organizations configure their own MCP policies, each organization must choose its own registry URL and enforcement settings. This allows teams with different security or compliance needs to choose the configuration that works best for them.

## Support for MCP policies

| Surface | Registry display | Allowlist enforcement |
|---|:---:|:---:|
| {% data variables.copilot.copilot_cli_short %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.copilot.copilot_coding_agent %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Eclipse | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| JetBrains | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.product.prodname_vs %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.product.prodname_vscode_shortname %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.product.prodname_vscode_shortname %} Insiders | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Xcode | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

> [!NOTE]
> For Eclipse, JetBrains, and Xcode, these features are supported in the pre-release versions of {% data variables.product.prodname_copilot_short %}.

## Configuring the MCP allowlist policy for an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.view-mcp-policies %}
1. Ensure **MCP servers in {% data variables.product.prodname_copilot_short %}** is set to **Enabled everywhere**.
1. In the **MCP Registry URL** section, enter the URL of your specification-compliant MCP registry, then click **Save**.
1. In the **Restrict MCP access to registry servers** section, select one of the following from the dropdown menu:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your enterprise.

## Configuring the MCP allowlist policy for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies**.
1. Under "Features" ensure **MCP servers in {% data variables.product.prodname_copilot_short %}** is set to **Enabled**.
1. In the **MCP Registry URL (optional)** field, enter the URL of your specification-compliant MCP registry.
1. Click **Save**.
1. Next to **Restrict MCP access to registry servers**, select one of the following from the dropdown:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your organization.

## How are MCP allowlists enforced?

{% data variables.product.github %} uses the following strategies for MCP allowlist enforcement.

### Local servers

MCP allowlist enforcement applies to local MCP servers as well. When "Registry only" is configured, local servers must be included in the registry to be allowed.

**Including local servers in your registry:**
* Local servers must be listed in your registry with their correct server ID
* The server ID must match exactly between the registry entry and the installed server
* Consult the server's documentation or manifest for its canonical ID
* For consistent deployment across your organization, provide installation instructions that ensure users install the server with the expected ID

### Policy resolution for users with multiple seats

MCP allowlist enforcement is always tied to the organization or enterprise that assigns the {% data variables.product.prodname_copilot %} seat. If a user has multiple seats (for example, from several organizations or from both an enterprise and its child organizations), {% data variables.product.github %} automatically resolves conflicts and applies a single active policy.

The resolution logic is:

1. **Scope**: Policies set by a parent enterprise override those set by an organization. Enterprise policies trickle down to all organizations and members within that enterprise.
1. **Enforcement strictness**: `Registry only` outranks `Allow all`.
1. **Recency of registry upload**: If two policies have the same scope and strictness, the most recently uploaded registry wins.
1. **Tie-breaker**: If all else is equal, the lowest internal ID wins.

> [!IMPORTANT]
> At this time, only one registry URL can be applied to a user. Even if multiple organizations or enterprises provide different registries, only the winning registry is used.
>
> **For uniform access**, you can set and maintain your MCP registry URL and allowlist policy at the enterprise level.
>
> **For varied team needs**, configure separate policies for each organization, ensuring users only belong to one organization to avoid policy conflicts.

## Setting up an MCP registry

If you don't already have an MCP registry configured, there are a few different ways you can create one depending on your needs.

### Self-hosting a registry

At its core, a registry is a set of HTTPS endpoints that serve details about the included MCP servers. To make your registry reachable, you can take any of the following paths:
* Fork and self-host the open-source MCP Registry
* Run the open-source registry locally using Docker
* Publish your own custom implementation

To get started with the open-source registry, see the [MCP Registry Quickstart](https://github.com/modelcontextprotocol/registry/tree/main?tab=readme-ov-file#quick-start) in the `github/modelcontextprotocol` repository.

A valid registry must:
* Be reachable over HTTPS
* Support URL routing

To successfully configure your registry, you need to implement the following endpoints:

* `GET /v0.1/servers`: Returns a list of all included MCP servers
* `GET /v0.1/servers/{serverName}/versions/latest`: Returns the latest version of a specific server
* `GET /v0.1/servers/{serverName}/versions/{version}`: Returns the details for a specific version of a server

#### Example registry format

Your registry must return a JSON response following [the v0.1 MCP registry specification](https://registry.modelcontextprotocol.io/docs#/operations/list-servers-v0.1):

```json
{
  "servers": [
    {
      "_meta": {
        "io.modelcontextprotocol.registry/official": {
          "status": "active",
          "publishedAt": "2025-09-01T00:00:00Z",
          "isLatest": true
        }
      },
      "server": {
        "$schema": "https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json",
        "name": "io.github.modelcontextprotocol/server-github",
        "description": "Official GitHub MCP server for repository management, issues, and pull requests.",
        "version": "1.0.0",
        "packages": [
          {
            "registryType": "npm",
            "identifier": "@modelcontextprotocol/server-github",
            "version": "1.0.0",
            "transport": { "type": "stdio" }
          }
        ],
        "remotes": [
          {
            "type": "http",
            "url": "https://api.githubcopilot.com/mcp/"
          }
        ]
      }
    },
    {
      "_meta": {
        "io.modelcontextprotocol.registry/official": {
          "status": "active",
          "publishedAt": "2025-09-01T00:00:00Z",
          "isLatest": true
        }
      },
      "server": {
        "$schema": "https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json",
        "name": "io.github.modelcontextprotocol/server-filesystem",
        "description": "MCP server for secure file system operations with configurable access controls.",
        "version": "1.0.0",
        "packages": [
          {
            "registryType": "npm",
            "identifier": "@modelcontextprotocol/server-filesystem",
            "version": "1.0.0",
            "transport": { "type": "stdio" }
          }
        ]
      }
    }
  ],
  "metadata": {
    "count": 2,
    "nextCursor": null
  }
}
```

Required fields:

* `server.name`: Reverse DNS identifier for the MCP server
* `server.description`: Brief summary of server functionality
* `server.version`: Version string
* `server.packages`: Required if the server provides a local installation (`registryType`, `identifier`, `version`, `transport`)
* `server.remotes`: Required if the server provides hosted endpoints (`type`, `url`)

Optional fields that provide additional metadata:

* `_meta`: Registry-managed metadata (`status`, `publishedAt`, `isLatest`)
* `metadata`: Pagination details (`count`, `nextCursor`)
* Additional publisher-provided fields may appear under `server._meta`

#### Support for v0.1

To avoid breaking changes to your registry in the future, you should implement v0.1 of the MCP registry specification. Be aware that v0.1 is currently only supported in {% data variables.product.prodname_vscode_shortname %} Insiders, with other surfaces adding support soon. See the following table for more details.

| Surface           | v0.1 support date |
| ---------------------- | ----------------- |
| {% data variables.product.prodname_vscode_shortname %} Insiders | Oct 23, 2025      |
| {% data variables.product.prodname_vs %}      | Nov 5, 2025       |
| {% data variables.product.prodname_vscode_shortname %}   | Nov 14, 2025      |
| Eclipse | Dec 2025    |
| JetBrains IDEs     | Dec 2025    |
| Xcode    | Dec 2025    |

### Using Azure API Center as a registry

> [!NOTE]
> Azure API Center requires an Azure API Management subscription to function as an MCP registry. For pricing details, see [MCP management availability](https://learn.microsoft.com/en-us/azure/api-management/mcp-server-overview#availability) and [API Management pricing](https://azure.microsoft.com/en-us/pricing/details/api-management/) in the Azure API Center documentation.

For enterprises that want a dynamic and fully managed option, Azure API Center can be used as an MCP registry. It provides governance features, discovery UI, and integration with existing API catalogs.

1. Go to the Azure API Center portal.
1. Create a new API Center instance (or reuse an existing one).
1. Add your MCP servers as APIs, including their manifests and metadata.
1. Publish your API Center instance.
1. Copy the API Center endpoint URL—this becomes your MCP registry URL.
1. Paste this URL into the **MCP Registry URL (optional)** field in your {% data variables.product.prodname_enterprise %} or organization settings.

For more information, see [Register and discover remote MCP servers in your API inventory](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server) in the Azure API Center Documentation.
