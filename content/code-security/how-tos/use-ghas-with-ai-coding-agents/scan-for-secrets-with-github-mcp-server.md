---
title: Scanning for secrets with the GitHub MCP server
shortTitle: Scan for secrets with MCP
allowTitleToDifferFromFilename: true
intro: 'Detect exposed secrets in real time from your AI coding agent, before they ever reach your repository.'
versions:
  feature: copilot
permissions: 'People with write access to a repository.'
contentType: how-tos
category:
  - Protect your secrets
---

The {% data variables.product.github %} Model Context Protocol (MCP) server lets you run {% data variables.product.prodname_secret_scanning %} directly from {% data variables.product.prodname_copilot %} agent mode, {% data variables.copilot.copilot_cli %}, and other MCP-compatible tools. Scan your code for exposed keys, tokens, and credentials as you work, and fix them before you push.

The secret scanning tools are only available via the {% data variables.product.github %} remote MCP server. **Local MCP server configurations are not supported**.

This works with any MCP-compatible agent or IDE, including {% data variables.product.prodname_vscode %}, JetBrains, Claude Code, Cursor, and Windsurf. The experience varies across clients.

> [!NOTE] Findings returned by MCP-invoked scans are **ephemeral**. They are surfaced in your agent's chat for the current session only and are not persisted as alerts on {% data variables.product.github %}. This means these findings won't appear in the Security tab, in the {% data variables.product.prodname_secret_scanning %} alerts list, or in the REST/GraphQL APIs for alerts. MCP scans should be treated as a pre-commit safety check, not as a system of record. Remediate findings before they are pushed to the repository and persisted in Git history.

## Prerequisites

* **{% data variables.product.prodname_GH_secret_protection %}** is enabled for the repository.
* **{% data variables.product.github %} MCP server** is connected in your IDE or agent. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* Your organization's **security configuration** determines which secret types are detected and whether push protection is enforced. The MCP tools respect your organization's push protection configuration (repository-level push protection settings are not used).

## Step 1:  Install and configure tools

### Enable the `secret_protection` toolset

Enable the `secret_protection` toolset to make the scanning tools available to your agent. The default toolsets do not include it.

The `run_secret_scanning` tool is currently attached to the `copilot` toolset rather than `secret_protection`. You must explicitly include `run_secret_scanning` as an additional tool alongside the `secret_protection` toolset in your MCP configuration.

{% cli %}

{% data variables.copilot.copilot_cli %} has the {% data variables.product.github %} MCP server built in:

```shell
copilot mcp --toolsets=secret_protection --tools=run_secret_scanning
```

{% endcli %}

{% vscode %}

Add the `secret_protection` toolset and the `run_secret_scanning tool` to your MCP configuration:

```json copy
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Toolsets": "secret_protection",
        "X-MCP-Tools": "run_secret_scanning"
      }
    }
  }
}
```

{% endvscode %}

{% jetbrains %}

In your JetBrains IDE, edit your MCP server configuration to include the `secret_protection` toolset and `run_secret_scanning` tool headers. For more information on configuring MCP servers in JetBrains, see [MCP Server](https://www.jetbrains.com/help/idea/mcp-server.html) in the JetBrains documentation.

```json copy
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "GitHub-MCP-Toolsets": "secret_protection",
        "GitHub-MCP-Tools": "run_secret_scanning"
      }
    }
  }
}
```

{% endjetbrains %}

### (Optional) Install the {% data variables.product.prodname_AS %} plugin

The [{% data variables.product.prodname_AS %} plugin](https://github.com/github/copilot-plugins/tree/main/plugins/advanced-security) gives you a `/secret-scanning` slash command for a streamlined scanning experience in {% data variables.copilot.copilot_cli %} and {% data variables.product.prodname_vscode %}. 
The plugin uses the MCP tools under the hood, so you'll still need to enable the `secret_protection` toolset.

Instructions for installing the plugin:
* For **{% data variables.copilot.copilot_cli %}**, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing#installing-plugins).
* For **{% data variables.product.prodname_vscode %}**, see [Discover and install plugins](https://code.visualstudio.com/docs/copilot/customization/agent-plugins#_discover-and-install-plugins) in the {% data variables.product.prodname_vscode %} documentation.

## Step 2: Scan your code

Once the toolset is enabled, you can trigger a scan in several ways depending on your client.

**Natural-language prompt**. In any MCP-compatible agent, you can ask:

> "Scan my current changes for exposed secrets and show me the files and lines I should update before I commit."

> "Run {% data variables.product.prodname_secret_scanning %} on the files I've changed since my last commit and summarize any high-confidence findings."

**Slash command (requires the {% data variables.product.prodname_AS %} plugin)**. If you installed the optional plugin in Step 1, you can also use:

>"/secret-scanning Review the staged diff for credentials, keys, or tokens and propose replacements using environment variables."

**Direct tool invocation:** You can also invoke the scanning tool directly from your client.

{% cli %}

Run `copilot --add-github-mcp-tool run_secret_scanning`.

{% endcli %}

{% vscode %}

Type `/secret-scanning` in {% data variables.copilot.copilot_chat_short %}.

{% endvscode %}

{% jetbrains %}

1. In your IDE, open {% data variables.copilot.copilot_chat_short %}
1. Click the **Agent** tab
1. Use a prompt like: "Scan my recent changes for exposed secrets before I commit." You can also click the tools icon in the chat box to browse available `secret_protection` tools directly.

{% endjetbrains %}

The agent returns:

* The **type** of secret found
* The **file and line** where it was detected
* **Remediation steps**, such as removing or rotating the credential

If push protection is enabled, the MCP server also blocks secrets from being included in any actions it takes on your behalf, such as commits, pull requests, or the creation of files. See [AUTOTITLE](/code-security/concepts/secret-security/working-with-push-protection-and-the-github-mcp-server).

## Troubleshooting

| Problem | Check |
|---|---|
| Scanning returns no results | Verify the `secret_protection` toolset is enabled in your MCP configuration. |
| Repository not eligible |{% data variables.product.prodname_secret_scanning_caps %} via MCP is available to public repositories and requires {% data variables.product.prodname_GH_secret_protection %} to be enabled for private and internal repositories. |
| Agent doesn't recognize the tool | Confirm your IDE or agent supports MCP. See [AUTOTITLE](/copilot/concepts/context/mcp#availability). |
| Unexpected detection results | Your organization's security configuration controls which patterns are scanned. Check your repository security settings. |
| Tool works in one client but not another | The experience varies across MCP-compatible clients. Check your client's MCP documentation for supported features. |

## Further reading

* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets)