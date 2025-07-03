## About the {% data variables.product.github %} MCP server

The {% data variables.product.github %} MCP server is a Model Context Protocol (MCP) server provided and maintained by {% data variables.product.github %}. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction).

You can access the {% data variables.product.github %} MCP server remotely through {% data variables.product.prodname_vscode %}, or other editors that support remote MCP; or you can run it locally in any MCP-compatible editor, allowing you to choose between the convenience of a hosted solution or the customizability of a self-hosted setup.

If you want to utilize the remote {% data variables.product.github %} MCP server, you can do so in a few steps, without any local setup. This is particularly useful for users who want to quickly leverage {% data variables.product.github %}’s AI capabilities without the overhead of managing a local MCP server.

Running the {% data variables.product.github %} MCP server locally requires a bit more setup, but it allows for greater customization and control over your AI interactions.

{% data variables.product.github %} MCP server can be used to:

* Automate and streamline code-related tasks.
* Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage {% data variables.product.github %}’s context and AI capabilities.
* Enable cloud-based workflows that work from any device, without local setup.

## Availability

There is currently broad support for local MCP servers in clients such as {% data variables.product.prodname_vscode %}, JetBrains IDEs, XCode, and others.

Support for remote MCP servers is growing, with editors like {% data variables.product.prodname_vscode %} (with OAuth or PAT), {% data variables.product.prodname_vs %} (PAT only), JetBrains IDEs (PAT only), Xcode (PAT only), Eclipse (PAT only), Windsurf (PAT only), and Cursor (PAT only) already providing this functionality.

To find out if your preferred editor supports remote MCP servers, check the documentation for your specific editor.
