---
title: Extending GitHub Copilot Chat with the Model Context Protocol (MCP)
allowTitleToDifferFromFilename: true
shortTitle: Extend Copilot Chat with MCP
intro: 'Learn how to use the Model Context Protocol (MCP) to extend {% data variables.copilot.copilot_chat_short %}.'
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/extending-copilot-chat-with-mcp
  - /copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp
  - /copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp
  - /copilot/how-tos/context/model-context-protocol/extend-copilot-chat-with-mcp
  - /copilot/how-tos/context/use-mcp/extend-copilot-chat-with-mcp
contentType: how-tos
---

{% data reusables.copilot.mcp-availability-and-preview-note %}

## Introduction

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). For an overview of MCP, see [AUTOTITLE](/copilot/concepts/about-mcp).

For information on currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

{% data reusables.copilot.mcp.mcp-policy %}

{% vscode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vscode %} version 1.99 or later**. For information on installing {% data variables.product.prodname_vscode %}, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers in {% data variables.product.prodname_vscode %}

To configure MCP servers in {% data variables.product.prodname_vscode %}, you need to set up a configuration script that specifies the details of the MCP servers you want to use. You can configure MCP servers for either:

{% data reusables.copilot.mcp.mcp-configuration-location %}

	>[!NOTE] We recommend you use only one location per server. Adding the same server to both locations may cause conflicts and unexpected behavior.

The steps below show how to configure the Fetch MCP server in your `.vscode/mcp.json` file. The Fetch MCP server is a simple MCP server that provides web content fetching capabilities. For more information on the Fetch MCP server, see [the Fetch directory](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) in the MCP Server repository.

You can use the same steps to configure MCP servers in your personal {% data variables.product.prodname_vscode %} settings. Details on how to configure other MCP servers are available in the [MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

For information on configuring the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server).

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

1. Open {% data variables.copilot.copilot_chat_short %} by clicking the {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} icon in the title bar of {% data variables.product.prodname_vscode %}.
1. In the {% data variables.copilot.copilot_chat_short %} box, select **Agent** from the popup menu.

    ![Screenshot of the {% data variables.copilot.copilot_chat_short %} box in {% data variables.product.prodname_vscode %}. The "Agent" option is outlined in dark orange.](/assets/images/help/copilot/copilot-chat-agent-option.png)

1. To view your list of available MCP servers, click the tools icon in the top left corner of the chat box. This will open the MCP server list, where you can see all the MCP servers and associated tools that are currently available in your {% data variables.product.prodname_vscode %} instance.
     * Optionally, you can define toolsets, groups of related tools that you can reference in chat. Toolsets make it easier to group related MCP tools together and quickly enable or disable them. For information on how to define and use a toolset, see the [{% data variables.product.prodname_vscode_shortname %} docs](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode#_define-tool-sets).

For more information on configuring MCP servers in {% data variables.product.prodname_vscode %}, see [Use MCP servers in {% data variables.product.prodname_vscode %}](https://aka.ms/vscode-add-mcp) in the {% data variables.product.prodname_vscode %} documentation.

## Using MCP servers in {% data variables.copilot.copilot_chat_short %}

Once you have configured your MCP servers, you can use them in {% data variables.copilot.copilot_chat_short %} to access a wide range of tools and services. In the example below, we will use the Fetch MCP server to fetch details about a web page.

{% data reusables.copilot.open-chat-vs-code %}
{% data reusables.copilot.select-agent %}
1. In the file with the MCP configuration, check that the MCP server is running. If it is not running, click the "Start" button to start the MCP server.

    ![Screenshot of the MCP server configuration in {% data variables.product.prodname_vscode %}. The "Running" status is outlined in dark orange.](/assets/images/help/copilot/vsc-mcp-server-running.png)

1. Ask {% data variables.copilot.copilot_chat_short %} to fetch the details of a URL. For example:

    `Fetch https://github.com/github/docs.`

1. If {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to proceed, click **Continue**.

1. {% data variables.product.prodname_copilot_short %} will fetch the details of the URL and display them in the chat box.

Optionally, you can use MCP prompts and resources in {% data variables.product.prodname_vscode_shortname %}.

  * MCP servers can define preconfigured prompts for interacting with their tools. You can access these prompts in chat with slash commands, using the format `/mcp.servername.promptname`.
  * MCP servers provide resources, which are any kind of data that the server wants to make available. For example, the {% data variables.product.github %} MCP server provides repository content as a resource. To add resources from an MCP server to your chat context, click **Add Context...** in the chat box, then click **MCP Resources**.

For more information on using MCP servers in {% data variables.product.prodname_vscode %}, see [Use MCP servers in {% data variables.product.prodname_vscode %}](https://aka.ms/vscode-add-mcp) in the {% data variables.product.prodname_vscode %} documentation.

## Using existing MCP configurations

If you already have an MCP configuration in Claude Desktop, you can use that configuration in {% data variables.product.prodname_vscode %} to access the same MCP servers. To do this, add the following configuration to your `settings.json` file in {% data variables.product.prodname_vscode %}:

```json copy
"chat.mcp.discovery.enabled": true
```

{% data variables.product.prodname_vscode %} will automatically find your existing configuration and use it in your {% data variables.product.prodname_vscode %} instance.

{% endvscode %}

{% jetbrains %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers in JetBrains IDEs

{% data reusables.copilot.jetbrains-mcp-setup-steps %}
1. In the `mcp.json` file, define your MCP servers. JetBrains IDEs support both remote and local servers. Remote servers are hosted externally for easier setup and sharing, while local servers run on your local machine and can access local resources.

You can use the following configurations as examples:

### Remote server configuration example with PAT

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-remote %}

### Local server configuration example

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-local %}

{% endjetbrains %}

{% xcode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_copilot %} for Xcode extension**. See [AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers in Xcode

{% data reusables.copilot.xcode-mcp-setup-steps %}
1. Define your MCP servers, editing `mcp.json`. Xcode supports both remote and local servers. Remote servers are hosted externally for easier setup and sharing, while local servers run on your local machine and can access local resources.

You can use the following configurations as examples:

### Remote server configuration example with PAT

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-remote %}

### Local server configuration example

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-local %}

{% endxcode %}

{% eclipse %}

## Prerequisites

{% data reusables.copilot.eclipse-prerequisites %}

## Configuring MCP servers in Eclipse

{% data reusables.copilot.eclipse-mcp-setup-steps %}
1. Under "Server Configurations", define your MCP servers. Eclipse supports both remote and local servers. Remote servers are hosted externally for easier setup and sharing, while local servers run on your local machine and can access local resources.

You can use the following configurations as examples:

### Remote server configuration example with PAT

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-remote %}

### Local server configuration example

  {% data reusables.copilot.mcp-chat-json-snippet-for-other-ides-local %}

{% endeclipse %}

## Creating a new MCP server

You can create a new MCP server to fulfill your specific needs, and then integrate it with {% data variables.copilot.copilot_chat_short %}. For example, you can create an MCP server that connects to a database or a web service, and then use that server in {% data variables.copilot.copilot_chat_short %} to perform tasks on that database or web service.

For more information on creating and configuring your own MCP servers, see [the official MCP documentation](https://modelcontextprotocol.io/quickstart/server).

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)
* [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server)
* [AUTOTITLE](/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
