An {% data variables.copilot.agent_profile %} is a Markdown file with YAML frontmatter that specifies the {% data variables.copilot.copilot_custom_agent_short %}'s name, description, available tools, and MCP server configurations. Configuring an {% data variables.copilot.agent_profile %} involves defining the agent's identity, capabilities, tool access, and behavioral instructions.

For detailed configuration information about YAML properties, tools, MCP server setup, tool aliases, and how {% data variables.copilot.custom_agents_short %} are processed, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).

To configure your {% data variables.copilot.agent_profile %}:

1. Optionally, write a `name` for your {% data variables.copilot.copilot_custom_agent_short %}. If unset, the name will default to the filename (without the `.md` or `.agent.md` suffix).
1. Write a brief `description` (required) explaining what your agent does and its specific capabilities or domain expertise.
1. In the `tools` property, define which tools the agent can use. This is a list of tool names or aliases, including tools from MCP servers configured in the repository settings or the {% data variables.copilot.agent_profile %} (for example, `tools: ["read", "edit", "search", "some-mcp-server/tool-1"]`). If you omit this property, the agent will have access to all available tools. See "Tools" in [AUTOTITLE](/copilot/reference/custom-agents-configuration#tools).
1. Optionally, in the `mcp-servers` property, you can configure MCP servers that will be available only to this agent to extend its capabilities. See "MCP server configuration details" in [AUTOTITLE](/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).
1. If you are creating and using the {% data variables.copilot.agent_profile %} in {% data variables.product.prodname_vscode_shortname %}, JetBrains IDEs, Eclipse, or Xcode, you can also use the `model` property to control which AI model the agent should use.
1. Optionally, set the `target` property to either `vscode` or `github-copilot` if you want to only use the agent in a specific environment. The agent will be available in both environments if you omit the property.
1. Write the agent's prompt. Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.
