---
title: About Model Context Protocol (MCP)
allowTitleToDifferFromFilename: true
shortTitle: MCP
intro: Model Context Protocol (MCP) is a protocol that allows you to extend the capabilities of {% data variables.product.prodname_copilot %} by integrating it with other systems.
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/about-mcp
  - /copilot/concepts/extensions/agents
  - /copilot/concepts/extensions/build-extensions
  - /copilot/concepts/extensions/skillsets
  - /copilot/concepts/extensions/openid-connect
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent/use-copilots-llm
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension/create-github-app
  - /copilot/how-tos/use-copilot-extensions/build-copilot-skillsets
  - /copilot/how-tos/use-copilot-extensions/debug-copilot-extension
  - /copilot/how-tos/use-copilot-extensions/manage-extension-availability
  - /copilot/how-tos/use-copilot-extensions/set-up-oidc
  - /copilot/how-tos/provide-context/install-copilot-extensions
  - /copilot/concepts/extensions
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension
  - /copilot/how-tos/use-copilot-extensions
  - /copilot/concepts/context/copilot-extensions
  - /copilot/reference/extensions-glossary
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent
  - /copilot/building-copilot-extensions/about-building-copilot-extensions
  - /copilot/customizing-copilot/extending-the-capabilities-of-github-copilot-in-your-organization
  - /copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat
category:
  - Learn about Copilot
---

## Overview of Model Context Protocol (MCP)

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of {% data variables.copilot.copilot_chat_short %} by integrating it with a wide range of existing tools and services. For example, the {% data variables.product.github %} MCP server allows you to use {% data variables.copilot.copilot_chat_short %} in your IDE to perform tasks on {% data variables.product.github %}. You can also use MCP to create new tools and services that work with {% data variables.copilot.copilot_chat_short %}, allowing you to customize and enhance your experience.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

To learn how to configure and use MCP servers with {% data variables.copilot.copilot_chat_short %}, see [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp).

{% data reusables.copilot.mcp.mcp-policy %}

## Availability

There is currently broad support for local MCP servers in clients such as {% data variables.product.prodname_vscode %}, JetBrains IDEs, XCode, and others.

Support for remote MCP servers is growing, with editors like {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Xcode, Eclipse, and Cursor providing this functionality with OAuth or PAT, and Windsurf supporting PAT only.

To find out if your preferred editor supports remote MCP servers, check the documentation for your specific editor.

## About the {% data variables.product.github %} MCP server

The {% data variables.product.github %} MCP server is a Model Context Protocol (MCP) server provided and maintained by {% data variables.product.github %}.

{% data variables.product.github %} MCP server can be used to:

* Automate and streamline code-related tasks.
* Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage {% data variables.product.github %}’s context and AI capabilities.
* Enable cloud-based workflows that work from any device, without local setup.
* Invoke {% data variables.product.github %} tools, such as {% data variables.copilot.copilot_coding_agent %} (requires {% data variables.product.prodname_copilot %} subscription) and {% data variables.product.prodname_code_scanning %} (requires {% data variables.product.prodname_GHAS %} subscription), to assist with code generation and security analysis.

To learn how to set up and use the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server).

### Remote access

You can access the {% data variables.product.github %} MCP server remotely through {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %} without any local setup. The remote server has access to additional toolsets only available in the remote {% data variables.product.github %} MCP server. For a list of such tools, see [Additional toolsets](https://github.com/github/github-mcp-server?tab=readme-ov-file#additional-toolsets-in-remote-github-mcp-server) in the `github/github-mcp-server` repository.

The {% data variables.product.github %} MCP server can also run locally in any MCP-compatible editor, if necessary.

### Toolset customization

> [!IMPORTANT]
> Always review the {% data variables.product.github %} MCP server repository at [github/github-mcp-server](https://github.com/github/github-mcp-server) for the latest toolsets and authoritative configuration guidance.

The {% data variables.product.github %} MCP server supports enabling or disabling specific groups of functionalities via toolsets. Toolsets allow you to control which {% data variables.product.github %} API capabilities are available to your AI tools.

Enabling only the toolsets you need improves your AI assistant's performance and security. Fewer tools means better tool selection accuracy and fewer errors. Disabling unused toolsets also frees up tokens in the AI's context window.

Toolsets do not only include tools, but also relevant MCP resources and prompts where applicable.

To learn how to configure toolsets for the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/context/use-mcp/configure-toolsets).

### Security

For all public repositories, and private repositories covered by {% data variables.product.prodname_GHAS %}, interactions with the {% data variables.product.github %} MCP server are secured by push protection, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server, such as creating an issue. For more information, see [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server).

## About the {% data variables.product.github %} MCP Registry

The {% data variables.product.github %} MCP Registry is a curated list of MCP servers from partners and the community. You can use the registry to discover new MCP servers and find ones that meet your specific needs. See [the {% data variables.product.github %} MCP Registry](https://github.com/mcp).

>[!NOTE]
> The {% data variables.product.github %} MCP Registry is currently in {% data variables.release-phases.public_preview %} and subject to change.

## Next steps

* [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp)
* [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server)
* [AUTOTITLE](/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
