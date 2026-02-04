---
title: Custom agents configuration
shortTitle: Custom agents configuration
intro: 'Reference for configuring {% data variables.copilot.custom_agents_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
category:
  - Configure Copilot
---

This reference article provides detailed configuration information for {% data variables.copilot.custom_agents_short %}. For general information about creating {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

{% data reusables.copilot.custom-agents-ide-preview %}

## YAML frontmatter properties

The following table outlines the properties that are supported in repository-level {% data variables.copilot.agent_profiles %}, organization or enterprise level {% data variables.copilot.agent_profiles %}, and in {% data variables.product.prodname_vscode_shortname %}. The configuration file's name (minus `.md` or `.agent.md`) is used for deduplication between levels so that the lowest level configuration takes precedence.

{% rowheaders %}

| Property      | Type      | Purpose    | Repository | Organization / enterprise | {% data variables.product.prodname_vscode_shortname %}, JetBrains IDEs, Eclipse, and Xcode |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- | ------------------ |
| `name`        | string     | Display name for the {% data variables.copilot.copilot_custom_agent_short %}. Optional.                                      | {% octicon "check" aria-label="Supported" %}          | {% octicon "check" aria-label="Supported" %}                         | {% octicon "check" aria-label="Supported" %}                  |
| `description` | **Required** string     | Description of the {% data variables.copilot.copilot_custom_agent_short %}'s purpose and capabilities                                                                                                   | {% octicon "check" aria-label="Supported" %}          | {% octicon "check" aria-label="Supported" %}                         | {% octicon "check" aria-label="Supported" %}                  |
| `target` | string     | Target environment or context for the {% data variables.copilot.copilot_custom_agent_short %} (`vscode` or `github-copilot`). If unset, defaults to both environments.                                                                                                   | {% octicon "check" aria-label="Supported" %}          | {% octicon "check" aria-label="Supported" %}                         | {% octicon "check" aria-label="Supported" %}                  |
| `tools`       | list of strings, string | List of tool names the {% data variables.copilot.copilot_custom_agent_short %} can use. Supports both a comma separated string and yaml string array. If unset, defaults to all tools. See [Tools](#tools). | {% octicon "check" aria-label="Supported" %}          | {% octicon "check" aria-label="Supported" %}                         | {% octicon "check" aria-label="Supported" %}                  |
| `infer`       | boolean | Controls whether {% data variables.copilot.copilot_coding_agent %} can automatically use this {% data variables.copilot.copilot_custom_agent_short %} based on task context. When `false`, the agent must be manually selected. If unset, defaults to `true`. | {% octicon "check" aria-label="Supported" %}          | {% octicon "check" aria-label="Supported" %}                         | {% octicon "check" aria-label="Supported" %}                  |
| `mcp-servers` | object                  | Additional MCP servers and tools that should be used by the {% data variables.copilot.copilot_custom_agent_short %}.                                                                   | {% octicon "x" aria-label="Not supported" %}            | {% octicon "check" aria-label="Supported" %}                         | {% octicon "x" aria-label="Not supported" %}                    |
| `metadata`   | object consisting of a name and value pair, both strings | Allows annotation of the agent with useful data | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.

> [!NOTE]
> The `model`, `argument-hint`, and `handoffs` properties from {% data variables.product.prodname_vscode_shortname %} and other IDE {% data variables.copilot.custom_agents_short %} are currently not supported for {% data variables.copilot.copilot_coding_agent %} on {% data variables.product.prodname_dotcom_the_website %}. They are ignored to ensure compatibility. For more information on {% data variables.copilot.copilot_custom_agent_short %} file structure in {% data variables.product.prodname_vscode_shortname %}, see [{% data variables.copilot.custom_agents_caps_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-agents#_custom-agent-file-structure) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Tools

The {% data variables.copilot.copilot_custom_agent_short %} `tools` property controls which tools are available to your agent, including those from MCP servers.

While you cannot configure MCP servers directly within an {% data variables.copilot.agent_profile %} for repository-level {% data variables.copilot.custom_agents_short %}, your {% data variables.copilot.copilot_custom_agent_short %} will have access to MCP server tools that have been configured in the repository settings. For more information on configuring MCP servers for coding agent in a repository, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp).

You can configure `tools` using the following approaches:

* **Enable all available tools**: Omit the `tools` property entirely or use `tools: ["*"]` to enable all available tools. This will include all MCP server tools configured in the repository settings.
* **Enable specific tools**: Provide a list of specific tool names or aliases (for example, `tools: ["read", "edit", "search"]`) to enable only those tools. For available tool aliases, see [Tool aliases](#tool-aliases) below.
  * Note that if your repository has MCP servers configured, you can choose to make only specific tools from those servers available to your {% data variables.copilot.copilot_custom_agent_short %}. Tool names from specific MCP servers can be prefixed with the server name followed by a `/`. For example, `some-mcp-server/some-tool`.
  * You can also explicitly enable all tools from a specific MCP server using `some-mcp-server/*`.
  * Tools from {% data variables.product.prodname_vscode_shortname %} extensions can use the extension name as a proxy, like `azure.some-extension/some-tool`.
* **Disable all tools**: Use an empty list (`tools: []`) to disable all tools for the agent.

All unrecognized tool names are ignored, which allows product-specific tools to be specified in an {% data variables.copilot.agent_profile %} without causing problems.

### Tool aliases

The following tool aliases are available for {% data variables.copilot.custom_agents_short %}. All aliases are case insensitive:

| Primary alias | Compatible aliases                        | {% data variables.copilot.copilot_coding_agent_short_cap_c %} mapping | Purpose                                                                                          |
| ------------- | -------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `execute`       | `shell`, `Bash`, `powershell`                         | Shell tools: `bash` or `powershell`                             | Execute a command in the appropriate shell for the operating system.                                     |
| `read`        | `Read`, `NotebookRead`                       | `view`                                                           | Read file contents.                                                                                      |
| `edit`        | `Edit`, `MultiEdit`, `Write`, `NotebookEdit` | Edit tools: e.g. `str_replace`, `str_replace_editor`             | Allow LLM to edit. Exact arguments can vary.                                                            |
| `search`      | `Grep`, `Glob`                               | `search`                                                         | Search for files or text in files.                                                                       |
| `agent` | `custom-agent`, `Task`                                       | "{% data variables.copilot.copilot_custom_agent_caps_short %}" tools                                             | Allows a different {% data variables.copilot.copilot_custom_agent_short %} to be invoked to accomplish a task. |
| `web`         | `WebSearch`, `WebFetch`                      | Currently not applicable for {% data variables.copilot.copilot_coding_agent_short %}. | Allows fetching content from URLs and performing a web search                                            |
| `todo`        | `TodoWrite`                                  | Currently not applicable for {% data variables.copilot.copilot_coding_agent_short %}. | Creates and manages structured task lists. Not supported in {% data variables.copilot.copilot_coding_agent_short %} today, but supported by {% data variables.product.prodname_vscode_shortname %}. |

### Tool names for "out-of-the-box" MCP servers

The following MCP servers are available out-of-box for {% data variables.copilot.copilot_coding_agent %} and can be referenced using namespacing:

| MCP server name | Available tools |
| --------------- | --------------- |
| `github` | All read-only tools are available by default, but the token the server receives is scoped to the source repository. `github/*` includes all of them, or you can reference `github/<tool name>` where `<tool name>` is a value from the MCP server documentation. |
| `playwright` | All playwright tools are available by default, but the server is configured to only access localhost. `playwright/*` includes all of them, or you can reference `playwright/<tool name>` where `<tool name>` is a value from the MCP server documentation. By default the token it has access to is scoped to the source code repository. |

## MCP server configuration details

{% data reusables.copilot.mcp-custom-agents-org-enterprise-only %}

The following sample {% data variables.copilot.agent_profile %} shows an organization-level agent with MCP server and secret configured. Additionally, only one tool from the MCP server has been enabled in the `tools` property in the YAML frontmatter:

```text
---
name: my-custom-agent-with-mcp
description: Custom agent description
tools: ['tool-a', 'tool-b', 'custom-mcp/tool-1']
mcp-servers:
  custom-mcp:
    type: 'local'
    command: 'some-command'
    args: ['--arg1', '--arg2']
    tools: ["*"]
    env:
      ENV_VAR_NAME: ${{ secrets.COPILOT_MCP_ENV_VAR_VALUE }}
---

Prompt with suggestions for behavior and output
```

The `mcp-servers` property in an {% data variables.copilot.agent_profile %} is a YAML representation of the JSON configuration format used to configure MCP servers for {% data variables.copilot.copilot_coding_agent %}.

Most sub-properties are the same as the JSON representation. The following sections describe changes from the initial implementation of MCP configuration in {% data variables.copilot.copilot_coding_agent %} that are relevant to {% data variables.copilot.custom_agents_short %}. For more information about the JSON configuration format, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp#writing-a-json-configuration-for-mcp-servers).

### MCP server type

For compatibility, the `stdio` type used by Claude Code and {% data variables.product.prodname_vscode_shortname %} is mapped to {% data variables.copilot.copilot_coding_agent_short %}'s `local` type.

### MCP server environment variables and secrets

> [!NOTE]
> If your MCP server requires secrets or environment variables, these must be configured in the {% data variables.product.prodname_copilot_short %} environment in each repository where the {% data variables.copilot.copilot_custom_agent_short %} will be used. For more information on setting up environment variables, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment#setting-environment-variables-in-copilots-environment).

{% data variables.copilot.copilot_custom_agent_caps_short %} MCP configuration supports the same environment variable and secret replacement capabilities as existing repository-level MCP configurations. Similar to repository-level configurations, secrets and variables can be sourced from the "copilot" environment in the repository's settings. The syntax for referencing these values has been expanded to support common patterns used in {% data variables.product.prodname_actions %} and Claude Code.

Both the repository-level MCP JSON configuration and the {% data variables.copilot.copilot_custom_agent_short %} YAML configuration support the following syntax patterns:

* `COPILOT_MCP_ENV_VAR_VALUE` - Environment variable only (not recommended due to header differences)
* `$COPILOT_MCP_ENV_VAR_VALUE` - Environment variable and header
* `${COPILOT_MCP_ENV_VAR_VALUE}` - Environment variable and header (Claude Code syntax)

The {% data variables.copilot.copilot_custom_agent_short %} YAML configuration supports the following additional syntax patterns:

* `{% raw %}${{ secrets.COPILOT_MCP_ENV_VAR_VALUE }}{% endraw %}` - Environment variable and header
* `{% raw %}${{ var.COPILOT_MCP_ENV_VAR_VALUE }}{% endraw %}` - Environment variable and header

## Example {% data variables.copilot.agent_profile %} configurations

{% data reusables.copilot.custom-agents-example-profiles %}

## Processing of {% data variables.copilot.custom_agents_short %}

### {% data variables.copilot.custom_agents_caps_short %} names

In the case of naming conflicts, the lowest level configuration overrides higher-level configurations. This means that a repository-level agent would take precedence over an organization-level agent, and the organization-level agent would override an enterprise-level agent.

### Versioning

{% data variables.copilot.copilot_custom_agent_caps_short %} versioning is based on Git commit SHAs for the {% data variables.copilot.agent_profile %} file. This allows you to create branches or tags with different versions of {% data variables.copilot.custom_agents_short %} as needed. When you assign a {% data variables.copilot.copilot_custom_agent_short %} to a task, the {% data variables.copilot.copilot_custom_agent_short %} will be instantiated using the latest version of the {% data variables.copilot.agent_profile %} for that repository and branch. When the agent creates a pull request, interactions within the pull request use the same version of the {% data variables.copilot.copilot_custom_agent_short %} for consistency.

### Tools processing

The `tools` list filters the set of tools that are made available to the agent - whether built-in or sourced from MCP servers. When you configure tools in your {% data variables.copilot.agent_profile %}, the behavior depends on what you specify:

* If no tools are specified, all available tools are enabled
* An empty tools list (`tools: []`) disables all tools
* A specific list (`tools: [...]`) enables only those tools

### MCP server configurations

For MCP server configurations, there is a specific processing order that ensures proper override behavior: out-of-the-box MCP configurations (like the GitHub MCP) are processed first, followed by the {% data variables.copilot.copilot_custom_agent_short %} MCP configuration (supported for organization or enterprise level {% data variables.copilot.custom_agents_short %} only), and finally repository-level MCP configurations. This allows each level to override settings from the previous level as appropriate.
