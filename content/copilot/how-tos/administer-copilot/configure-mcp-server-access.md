---
title: Configure MCP server access for your organization or enterprise
intro: You can configure an MCP Registry URL and access control policy to determine which MCP servers developers can discover and use in supported IDEs with {% data variables.product.prodname_copilot %}.
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
---

> [!NOTE]
> * The display of available MCP servers based on a configured MCP registry is supported in {% data variables.product.prodname_vscode_shortname %} Stable and Insiders.
> * Policy enforcement for the "Registry only" setting is currently available only in {% data variables.product.prodname_vscode_shortname %} Insiders, with support for {% data variables.product.prodname_vscode_shortname %} Stable coming in October 2025. MCP registry and allowlisting support is coming to all other Copilot IDEs in the coming months.

## Overview

An MCP registry is a directory of Model Context Protocol (MCP) servers that acts like a catalog for IDEs and {% data variables.product.prodname_copilot_short %} (as well as other host applications). Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that the server exposes.

As an enterprise or organization owner, you can configure an **MCP Registry URL** along with an access control policy to determine which MCP servers your developers can see and run in supported IDEs with {% data variables.product.prodname_copilot %}.

By configuring an MCP Registry, you can:
* **Provide a curated catalog** of MCP servers your developers can discover and use
* **Restrict access** to unapproved servers for more granular access control
* **Give clarity to developers** when a server is blocked by policy

If you don't have an MCP registry set up yet, see [Setting up an MCP Registry](#setting-up-an-mcp-registry) later in this article.

## About MCP policy settings

The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise.

### MCP servers policy

First, you must set the overall **MCP servers in Copilot** policy:
* Enabled: MCP servers are allowed (default behavior depends on registry configuration)
* Disabled: No MCP servers can be used by any users with Copilot seats from this enterprise or organization
* No policy (Enterprise only): Child organizations can set their own MCP policies

### MCP Registry URL

The **MCP Registry URL** is an optional field where you specify the endpoint of your discoverable or restricted internal MCP registry.

When configured:
* The servers listed in the registry are displayed in IDEs that support MCP
* Enables the "Restrict MCP access to registry servers" option

### "Restrict MCP access to registry servers" setting

Under the **Restrict MCP access to registry servers** setting, you choose how strictly to enforce registry-based access:

* **Allow all** (default): Developers can run any local and remote MCP servers. Registry servers are still shown in the IDE catalog as a curated list for easier discoverability.
* **Registry only**: Developers can only run MCP servers that are explicitly listed in the uploaded MCP registry. All other servers—whether remote (hosted) or local (running client-side on the user's machine)—will be blocked at runtime. In IDE UIs, blocked servers appear greyed out with a warning message. In the `mcp.json` configuration file, they may also show `"run": "blocked"`.

> [!WARNING]
> * You cannot configure the "Registry only" option without providing an MCP registry URL with a valid format and clicking "Save".
> * "Registry only" enforcement is currently active **only** in {% data variables.product.prodname_vscode_shortname %} Insiders. Support for other Copilot environments is being added in the coming months.

## Configuring the MCP allowlist policy for an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Under "Features", ensure **MCP servers in {% data variables.product.prodname_copilot_short %}** is set to **Enabled**.
1. In the **MCP Registry URL (optional)** field, enter the URL of your specification-compliant MCP registry.
1. Click **Save**.
1. Next to **Restrict MCP access to registry servers**, select one of the following from the dropdown:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

   > [!NOTE]
   > If no registry URL is set, the "Registry only" option blocks all MCP servers.

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

   > [!NOTE]
   > If no registry URL is set, the "Registry only" option blocks all MCP servers.

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
1. **Recency of registry upload**: If two policies have the same scope and strictness, the registry most recently uploaded (saved) wins.
1. **Tie-breaker**: If all else is equal, the lowest internal ID wins (rare edge case).

> [!IMPORTANT]
> At this time, only one registry URL can be applied to a user. Even if multiple organizations or enterprises provide different registries, only the winning registry (determined by the above rules) is used.
>
> **Recommendation**: To ensure consistency and avoid conflicts across multiple organizations, set and maintain your MCP registry URL and allowlist policy at the **enterprise** level whenever possible.

## Setting up an MCP Registry

If you don't already have an MCP Registry configured, there are a few different ways you can create one depending on your needs.

### Simple/static registry

At its core, a registry is just an HTTPS endpoint that serves a list of MCP server manifests. You can publish this as a static JSON file on {% data variables.product.prodname_pages %}, an S3 bucket, or any web server. This is the fastest and most lightweight option.

### Example registry format

Your registry must return a JSON response with the following structure:

``` json
{
  "servers": [
    {
      "id": "github",
      "name": "GitHub MCP Server",
      "description": "Tools and resources for GitHub repos, issues, PRs, and Actions.",
      "manifest_url": "https://registry.yourcompany.com/servers/github/manifest.json",
      "categories": ["code", "devops", "github"],
      "version": "1.0.0",
      "release_date": "2025-09-01T00:00:00Z",
      "latest": true
    },
    {
      "id": "local-linter",
      "name": "Local Linter",
      "description": "Runs lint checks against local files",
      "manifest_url": "file:///path/to/local/manifest.json",
      "categories": ["linting", "local", "devtools"],
      "version": "1.0.0",
      "release_date": "2025-09-01T00:00:00Z",
      "latest": true
    }
  ],
  "total_count": 2,
  "updated_at": "2025-09-09T12:00:00Z"
}
```

Required fields:

* `id`: Unique identifier for the server
* `name`: Display name for the server
* `description`: Brief description of the server's functionality
* `manifest_url`: URL pointing to the server's MCP manifest

Optional fields that provide additional metadata:

* `categories`: Array of category tags
* `version`: Version identifier
* `release_date`: ISO format release date
* `latest`: Boolean indicating if this is the latest version
* Additional fields like `total_count` and `updated_at` at the root level

### Azure API Center

For enterprises that want a dynamic and fully managed option, Azure API Center (part of Azure API Management) can be used as an MCP Registry. It provides governance features, discovery UI, and integration with existing API catalogs.

**Steps to set up with Azure API Center:**

1. Go to the Azure API Center portal.
1. Create a new API Center instance (or reuse an existing one).
1. Add your MCP servers as APIs, including their manifests and metadata.
1. Publish your API Center instance.
1. Copy the API Center endpoint URL—this becomes your MCP Registry URL.
1. Paste this URL into the **MCP Registry URL (optional)** field in your {% data variables.product.prodname_enterprise %} or organization settings.

> [!NOTE]
> Azure API Center includes a free tier for basic API cataloging and discovery. Larger organizations may choose to use paid Azure API Management plans for higher scale and advanced governance.

For more information, see [Azure API Center Documentation](https://learn.microsoft.com/en-us/azure/api-center/) and [Azure API Center Quickstart](https://learn.microsoft.com/en-us/azure/api-center/set-up-api-center).
