---
title: Extending Copilot Chat with the Model Context Protocol (MCP)
allowTitleToDifferFromFilename: true
shortTitle: Extend Copilot Chat with MCP
intro: "Learn how to use the Model Context Protocol (MCP) to extend {% data variables.product.prodname_copilot_chat_short %}."
versions:
  feature: copilot
topics:
  - Copilot
---

>[!NOTE]
> * MCP support is currently in {% data variables.release-phases.public_preview %} and subject to change.
> * MCP support is only available in {% data variables.product.prodname_copilot_chat_short %} for {% data variables.product.prodname_vscode %}.
> * The [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) apply to your use of this product.

## Overview

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of {% data variables.product.prodname_copilot_chat_short %} by integrating it with a wide range of existing tools and services. For example, the {% data variables.product.github %} MCP server allows you to use {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %} to perform tasks on {% data variables.product.github %}. You can also use MCP to create new tools and services that work with {% data variables.product.prodname_copilot_chat_short %}, allowing you to customize and enhance your experience.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction).

For information on some of the other currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vscode %} version 1.99 or later**. For information on installing {% data variables.product.prodname_vscode %}, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

## Configuring MCP servers in {% data variables.product.prodname_vscode %}

To configure MCP servers in {% data variables.product.prodname_vscode %}, you need to set up a configuration script that specifies the details of the MCP servers you want to use. You can configure MCP servers for either:

* **A specific repository**. This will share MCP servers with anyone who opens the project in {% data variables.product.prodname_vscode %}. To do this, create a `.vscode/mcp.json` file in the root of your repository.
* **Your personal instance of {% data variables.product.prodname_vscode %}**. You will be the only person who has access to configured MCP servers. To do this, add the configuration to your `settings.json` file in {% data variables.product.prodname_vscode %}.

	>[!NOTE] We recommend you use only one location per server. Adding the same server to both locations may cause conflicts and unexpected behavior.

The steps below show how to configure the Fetch MCP server in your `.vscode/mcp.json` file. The Fetch MCP server is a simple MCP server that provides web content fetching capabilities. For more information on the Fetch MCP server, see [the Fetch directory](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) in the MCP Server repository.

You can use the same steps to configure MCP servers in your personal {% data variables.product.prodname_vscode %} settings. Details on how to configure other MCP servers are available in the [MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

1. Add the following configuration to your `.vscode/mcp.json` file:

    ```json copy
    {
    "inputs": [
      // The "inputs" section defines the inputs required for the MCP server configuration. 
      {
        "type": "promptString"
      }
    ],
    "servers": {
      // The "servers" section defines the MCP servers you want to use.
      "fetch": {
        "command": "uvx",
        "args": ["mcp-server-fetch"]
      }
     }
    }
   ```

1. Save the `.vscode/mcp.json` file.
1. A "Start" button will appear in your `.vscode/mcp.json` file, at the top of the list of servers. Click the "Start" button to start the MCP servers. This will trigger the input dialog and discover the server tools, which are then stored for later sessions.

    ![Screenshot of MCP server configuration in {% data variables.product.prodname_vscode %}. The "Start" button is outlined in dark orange. ](/assets/images/help/copilot/mcp-start-server-button.png)

1. Open {% data variables.product.prodname_copilot_chat_short %} by clicking the {% octicon "copilot" aria-hidden="true" %} icon in the title bar of {% data variables.product.prodname_vscode %}.
1. In the {% data variables.product.prodname_copilot_chat_short %} box, select **Agent** from the popup menu.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} box in {% data variables.product.prodname_vscode %}. The "Agent" option is outlined in dark orange.](/assets/images/help/copilot/copilot-chat-agent-option.png)

1. To view your list of available MCP servers, click the tools icon in the top left corner of the chat box. This will open the MCP server list, where you can see all the MCP servers and associated tools that are currently available in your {% data variables.product.prodname_vscode %} instance.

For more information on configuring MCP servers in {% data variables.product.prodname_vscode %}, see [Use MCP servers in {% data variables.product.prodname_vscode %} (Preview)](https://aka.ms/vscode-add-mcp) in the {% data variables.product.prodname_vscode %} documentation.

>[!IMPORTANT] Beginning April 4, 2025, the {% data variables.product.github %} MCP server, and installation instructions, will be publicly available in the [github-mcp-server](https://github.com/github/github-mcp-server) repository.

## Using MCP servers in {% data variables.product.prodname_copilot_chat_short %}

Once you have configured your MCP servers, you can use them in {% data variables.product.prodname_copilot_chat_short %} to access a wide range of tools and services. In the example below, we will use the Fetch MCP server to fetch details about a web page.

1. Open {% data variables.product.prodname_copilot_chat_short %} by clicking the {% octicon "copilot" aria-hidden="true" %} icon in the title bar of {% data variables.product.prodname_vscode %}.
1. In the {% data variables.product.prodname_copilot_chat_short %} box, select **Agent** from the popup menu.
1. In the file with the MCP configuration, check that the MCP server is running. If it is not running, click the "Start" button to start the MCP server.

    ![Screenshot of the MCP server configuration in {% data variables.product.prodname_vscode %}. The "Running" status is outlined in dark orange.](/assets/images/help/copilot/vsc-mcp-server-running.png)

1. Ask {% data variables.product.prodname_copilot_chat_short %} to fetch the details of a URL. For example:

    `Fetch https://github.com/github/docs.`

1. If {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to proceed, click **Continue**.

1. {% data variables.product.prodname_copilot_short %} will fetch the details of the URL and display them in the chat box.

For more information on using MCP servers in {% data variables.product.prodname_vscode %}, see [Use MCP servers in {% data variables.product.prodname_vscode %} (Preview)](https://aka.ms/vscode-add-mcp) in the {% data variables.product.prodname_vscode %} documentation.

## Using existing MCP configurations

If you already have an MCP configuration in Claude Desktop, you can use that configuration in {% data variables.product.prodname_vscode %} to access the same MCP servers. To do this, add the following configuration to your `settings.json` file in {% data variables.product.prodname_vscode %}:

```json copy
"chat.mcp.discovery.enabled": true"
```

{% data variables.product.prodname_vscode %} will automatically find your existing configuration and use it in your {% data variables.product.prodname_vscode %} instance.

## Creating a new MCP server

You can create a new MCP server to fulfill your specific needs, and then integrate it with {% data variables.product.prodname_copilot_chat_short %}. For example, you can create an MCP server that connects to a database or a web service, and then use that server in {% data variables.product.prodname_copilot_chat_short %} to perform tasks on that database or web service.

For more information on creating and configuring your own MCP servers, see [the official MCP documentation](https://modelcontextprotocol.io/quickstart/server).
