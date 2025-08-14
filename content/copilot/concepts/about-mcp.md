---
title: About Model Context Protocol (MCP)
allowTitleToDifferFromFilename: true
shortTitle: About MCP
intro: 'Model Context Protocol (MCP) is a protocol that allows you to extend the capabilities of {% data variables.product.prodname_copilot %} by integrating it with other systems.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
---

{% data reusables.copilot.mcp-availability-and-preview-note %}

## Overview of Model Context Protocol (MCP)

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of {% data variables.copilot.copilot_chat_short %} by integrating it with a wide range of existing tools and services. For example, the {% data variables.product.github %} MCP server allows you to use {% data variables.copilot.copilot_chat_short %} in your IDE to perform tasks on {% data variables.product.github %}. You can also use MCP to create new tools and services that work with {% data variables.copilot.copilot_chat_short %}, allowing you to customize and enhance your experience.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

To learn how to configure and use MCP servers with {% data variables.copilot.copilot_chat_short %}, see [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp).

{% data reusables.copilot.mcp.mcp-policy %}

## About the {% data variables.product.github %} MCP server

The {% data variables.product.github %} MCP server is a Model Context Protocol (MCP) server provided and maintained by {% data variables.product.github %}.

{% data variables.product.github %} MCP server can be used to:

* Automate and streamline code-related tasks.
* Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage {% data variables.product.github %}’s context and AI capabilities.
* Enable cloud-based workflows that work from any device, without local setup.

For public repositories, interactions with the {% data variables.product.github %} MCP server are secured by push protection, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server, such as creating an issue. See [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server).

You can access the {% data variables.product.github %} MCP server remotely through {% data variables.product.prodname_vscode %}, or other editors that support remote MCP; or you can run it locally in any MCP-compatible editor, allowing you to choose between the convenience of a hosted solution or the customizability of a self-hosted setup.

If you want to utilize the remote {% data variables.product.github %} MCP server, you can do so in a few steps, without any local setup. This is particularly useful for users who want to quickly leverage {% data variables.product.github %}’s AI capabilities without the overhead of managing a local MCP server.

Running the {% data variables.product.github %} MCP server locally requires a bit more setup, but it allows for greater customization and control over your AI interactions.

To learn how to set up and use the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server).

## Availability

There is currently broad support for local MCP servers in clients such as {% data variables.product.prodname_vscode %}, JetBrains IDEs, XCode, and others.

Support for remote MCP servers is growing, with editors like {% data variables.product.prodname_vscode %} (with OAuth or PAT), {% data variables.product.prodname_vs %} (PAT only), JetBrains IDEs (PAT only), Xcode (PAT only), Eclipse (PAT only), Windsurf (PAT only), and Cursor (PAT only) already providing this functionality.

To find out if your preferred editor supports remote MCP servers, check the documentation for your specific editor.

## Next steps

* [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp)
* [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server)
* [AUTOTITLE](/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
