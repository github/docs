---
title: Extending GitHub Copilot Chat with Model Context Protocol (MCP) servers
allowTitleToDifferFromFilename: true
shortTitle: Extend Copilot Chat with MCP
intro: 'Connect MCP servers to {% data variables.copilot.copilot_chat_short %} to share context from other applications.'
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
category: 
  - Integrate Copilot with your tools
---

## Introduction

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). For an overview of MCP, see [AUTOTITLE](/copilot/concepts/about-mcp).

For information on currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

{% data reusables.copilot.mcp.mcp-policy %}

{% vscode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vscode %} version 1.99 or later**. For information on installing {% data variables.product.prodname_vscode %}, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download?ref_product=copilot&ref_type=engagement&ref_style=text).
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers in {% data variables.product.prodname_vscode %}

MCP servers can be configured manually in a configuration file, or through the {% data variables.product.github %} MCP Registry. The {% data variables.product.github %} MCP Registry provides a curated list of MCP servers that you can easily add to your {% data variables.product.prodname_vscode %} instance.

### Using the {% data variables.product.github %} MCP Registry

>[!NOTE]
> The {% data variables.product.github %} MCP Registry is in {% data variables.release-phases.public_preview %} and may change.

Only MCP servers listed in the {% data variables.product.github %} MCP Registry can be added through the registry. Other servers can be configured manually. See [Configuring MCP servers manually](#configuring-mcp-servers-manually).

1. In {% data variables.product.prodname_vscode %}, open the extensions panel by clicking the extensions icon in the sidebar or pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Mac).
1. In the extensions search bar, click the filter icon and select **MCP Registry** from the dropdown.
1. If it is your first time using the MCP Registry, follow the prompts on screen to enable the registry.
1. In the search bar, type the name of the MCP server you want to add and select it from the search results.
1. On the MCP server's configuration page, click **Install**.
1. To check that the MCP server is configured correctly, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: List Servers**. You should see the MCP server listed as a configured server.

### Configuring MCP servers manually

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

{% visualstudio %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vs %} version 17.14 or later**. For more information on installing {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).
* **Sign in to {% data variables.product.company_short %} from {% data variables.product.prodname_vs %}**.
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers in {% data variables.product.prodname_vs %}

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields, including server ID, type, and any additional fields required for the specific MCP server configuration.

   {% data variables.product.prodname_vs %} supports both remote and local servers. Remote servers, defined with a URL and credentials, are hosted externally for easier setup and sharing, while local servers, defined with command-line invocation, run on your local machine and can access local resources. See example configurations below, using the {% data variables.product.github %} MCP server as an example.

1. Click **Save**.
1. If you are using a remote server with OAuth authentication, in the `mcp.json` file, click **Auth** from the CodeLens above the server to authenticate to the server. A pop-up or new window will appear, allowing you to authenticate with your account. The server will only be able to access the scopes you approve, and that your organization policies allow.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon. You should now see additional tools from the MCP server that you configured.

### Remote server configuration example with OAuth

  1. For "Server ID", type `github`.
  1. For "Type", select "HTTP/SSE" from the dropdown.
  1. For "URL", type `https://api.githubcopilot.com/mcp/`.
  1. After clicking **Save**, the configuration in the `mcp.json` file should look like this:

      ```json copy
          {
            "servers": {
              "github": {
                "url": "https://api.githubcopilot.com/mcp/"
              }
            }
          }
      ```

  1. In the `mcp.json` file, click **Auth** from the CodeLens above the server to authenticate to the server. A pop-up will come up allowing you to authenticate with your {% data variables.product.github %} account.

### Local server configuration example

  1. For "Server ID", type `github`.
  1. For "Type", select "stdio" from the dropdown.
  1. For "Command (with optional arguments)", type `docker "run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"`
  1. Add an environment variable "GITHUB_PERSONAL_ACCESS_TOKEN" set to your {% data variables.product.pat_generic %}.
  1. After clicking **Save**, the configuration in the `mcp.json` file should look like this:

        ```json copy
            {
              "servers": {
                "github": {
                  "type": "stdio",
                  "command": "docker",
                  "args": [
                    "run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
                    "ghcr.io/github/github-mcp-server"
                  ],
                  "env": {
                    "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_PAT"
                  }
                }
              }
            }
        ```

For more information on configuring MCP servers in {% data variables.product.prodname_vs %}, see [Use MCP servers in {% data variables.product.prodname_vs %} (Preview)](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022) in the {% data variables.product.prodname_vs %} documentation.

{% endvisualstudio %}

{% jetbrains %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
* {% data reusables.copilot.mcp-policy-requirement %}

## Configuring MCP servers from your MCP registry

1. In your JetBrains IDE, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} MCP icon.
1. In the MCP Registry window, find the MCP server(s) you want to add from the list of available servers.
1. Next to each MCP server you want to add, click **Install**.
1. When you are finished adding MCP servers, click **OK**.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon. You should now see additional tools from the MCP server(s) that you installed.

## Configuring MCP servers manually

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

## Configuring MCP servers from your MCP registry

1. In Xcode, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the {% octicon "gear" aria-label="The Settings gear" %} icon to open settings.
1. In the settings window, select the **Tools** tab.
1. Next to **MCP Registry URL (Optional)**, click **Browse MCP Servers**.
1. In the MCP Registry window, find the MCP server(s) you want to add from the list of available servers.
1. Next to each MCP server you want to add, click **Install**.
1. When you are finished adding MCP servers, close the **MCP Servers Marketplace** window.
1. In the settings window, under **Available MCP Tools**, click the **>** icon to expand the list of available MCP tools. You should now see additional tools from the MCP server(s) that you installed.

## Configuring MCP servers manually

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

## Configuring MCP servers from your MCP registry

1. In Eclipse, open {% data variables.copilot.copilot_chat_short %}.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} MCP icon.
1. In the MCP Registry window, find the MCP server(s) you want to add from the list of available servers.
1. Next to each MCP server you want to add, click **Install**.
1. When you are finished adding MCP servers, click **Close**.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon. You should now see additional tools from the MCP server(s) that you installed.

## Configuring MCP servers manually

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
