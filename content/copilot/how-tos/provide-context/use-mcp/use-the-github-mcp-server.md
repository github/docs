---
title: Using the GitHub MCP Server
intro: 'Learn how to use the GitHub Model Context Protocol (MCP) server to interact with repositories, issues, pull requests, and other GitHub features, directly from {% data variables.copilot.copilot_chat_short %}.'
shortTitle: Use the GitHub MCP Server
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server
  - /copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server
  - /copilot/how-tos/context/model-context-protocol/use-the-github-mcp-server
  - /copilot/how-tos/context/use-mcp/use-the-github-mcp-server
contentType: how-tos
category: 
  - Integrate Copilot with your tools
---

The {% data variables.product.github %} MCP server is available to all {% data variables.product.github %} users regardless of plan type. However, specific tools within the MCP server inherit the same access requirements as their corresponding {% data variables.product.github %} features. If a feature requires a paid {% data variables.product.github %} or {% data variables.product.prodname_copilot_short %} license, the equivalent MCP tool will require the same subscription. For example, tools that interact with {% data variables.product.prodname_copilot_short %} Coding Agent require a paid {% data variables.product.prodname_copilot_short %} license.

{% vscode %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* A {% data variables.product.github %} account.
* {% data variables.product.prodname_vscode %}.
* The {% data variables.product.github %} MCP server, configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* {% data reusables.copilot.mcp-policy-requirement %}

## Using the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vscode %}

The {% data variables.product.github %} MCP server enables you to perform a wide range of actions on {% data variables.product.github %}, via {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}.

{% data reusables.copilot.open-chat-vs-code %}
{% data reusables.copilot.select-agent %}
1. To see the available actions, in the {% data variables.copilot.copilot_chat_short %} box, click the **Select tools** icon.
    * In the **Tools** dropdown, under **MCP Server: {% data variables.product.github %}**, you will see a list of available actions.
1. In the {% data variables.copilot.copilot_chat_short %} box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the {% data variables.product.github %} MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The {% data variables.product.github %} MCP server will process your request and provide a response in the chat interface.
    * In the {% data variables.copilot.copilot_chat_short %} box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

{% data reusables.copilot.mcp.troubleshooting-mcp-server %}

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vs %} version 17.14 or later**. For more information on installing {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).
* The {% data variables.product.github %} MCP server, configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* **Sign in to {% data variables.product.company_short %} from {% data variables.product.prodname_vs %}**.
* {% data reusables.copilot.mcp-policy-requirement %}

## Using the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vs %}

The {% data variables.product.github %} MCP server enables you to perform a wide range of actions on {% data variables.product.github %}, via {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vs %}.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon.
    * Under **{% data variables.product.github %}**, you will see a list of available tools.
1. In the {% data variables.copilot.copilot_chat_short %} box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the {% data variables.product.github %} MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The {% data variables.product.github %} MCP server will process your request and provide a response in the chat interface.
    * In the {% data variables.copilot.copilot_chat_short %} box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

{% endvisualstudio %}

{% jetbrains %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
{% data reusables.copilot.jetbrains-plugin-prerequisites %}
* **The {% data variables.product.github %} MCP server**, configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* {% data reusables.copilot.mcp-policy-requirement %}

## Using the {% data variables.product.github %} MCP server in JetBrains IDEs

The {% data variables.product.github %} MCP server enables you to perform a wide range of actions on {% data variables.product.github %}, via {% data variables.copilot.copilot_chat_short %} in JetBrains IDEs.

1. Open the {% data variables.copilot.copilot_chat_short %} window by clicking the **{% data variables.copilot.copilot_chat %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.copilot.copilot_chat %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)
1. At the top of the chat panel, click the **Agent** tab.
1. To see the available actions, in the {% data variables.copilot.copilot_chat_short %} box, click the tools icon.
    * Under **MCP Server: {% data variables.product.github %}**, you will see a list of available actions.
1. In the {% data variables.copilot.copilot_chat_short %} box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the {% data variables.product.github %} MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The {% data variables.product.github %} MCP server will process your request and provide a response in the chat interface.
    * In the {% data variables.copilot.copilot_chat_short %} box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

{% data reusables.copilot.mcp.troubleshooting-mcp-server %}

{% endjetbrains %}

{% xcode %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_copilot %} for Xcode extension**. See [AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
* The {% data variables.product.github %} MCP server, configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* {% data reusables.copilot.mcp-policy-requirement %}

## Using the {% data variables.product.github %} MCP server in Xcode

The {% data variables.product.github %} MCP server enables you to perform a wide range of actions on {% data variables.product.github %}, via {% data variables.copilot.copilot_chat_short %} in Xcode.

1. To open the chat view, click **Editor** in the menu bar, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** then **Open Chat**. {% data variables.copilot.copilot_chat_short %} opens in a new window.
1. At the bottom of the chat panel, select **Agent**.
1. To see the available actions, in the {% data variables.copilot.copilot_chat_short %} box, click the tools icon.
    * Under **MCP Server: {% data variables.product.github %}**, you will see a list of available actions.
1. In the {% data variables.copilot.copilot_chat_short %} box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the {% data variables.product.github %} MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The {% data variables.product.github %} MCP server will process your request and provide a response in the chat interface.
    * In the {% data variables.copilot.copilot_chat_short %} box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

{% data reusables.copilot.mcp.troubleshooting-mcp-server %}

{% endxcode %}

{% eclipse %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

{% data reusables.copilot.eclipse-prerequisites %}
* The {% data variables.product.github %} MCP server, configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
* **Latest version of the {% data variables.product.prodname_copilot %} extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment?tool=eclipse).
* **Sign in to {% data variables.product.company_short %} from Eclipse**.

## Using the {% data variables.product.github %} MCP server in Eclipse

The {% data variables.product.github %} MCP server enables you to perform a wide range of actions on {% data variables.product.github %}, via {% data variables.copilot.copilot_chat_short %} in Eclipse.

1. To open the {% data variables.copilot.copilot_chat_short %} panel, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then click **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. To see the available actions, in the {% data variables.copilot.copilot_chat_short %} box, click the tools icon.
    * Under `github`, you will see a list of available actions.
1. In the {% data variables.copilot.copilot_chat_short %} box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the {% data variables.product.github %} MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The {% data variables.product.github %} MCP server will process your request and provide a response in the chat interface.
    * In the {% data variables.copilot.copilot_chat_short %} box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

{% data reusables.copilot.mcp.troubleshooting-mcp-server %}

{% endeclipse %}

{% webui %}

## About MCP in {% data variables.copilot.copilot_chat_dotcom_short %}

The {% data variables.product.github %} MCP server is a Model Context Protocol (MCP) server provided and maintained by {% data variables.product.github %}. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction).

Within {% data variables.copilot.copilot_chat_dotcom_short %}, the {% data variables.product.github %} MCP server is automatically configured, with a limited set of skills available. This allows you to instruct {% data variables.copilot.copilot_chat_short %} to perform tasks such as creating branches or merging pull requests on your behalf. For a full list of available skills, see [AUTOTITLE](/copilot/reference/github-copilot-chat-cheat-sheet#mcp-skills).

## Using the {% data variables.product.github %} MCP server in {% data variables.copilot.copilot_chat_dotcom_short %}

The {% data variables.product.github %} MCP server is automatically configured in {% data variables.copilot.copilot_chat_dotcom_short %}. You can start using it immediately without any additional setup.

{% data reusables.copilot.immersive-mode-instructions %}
1. In the prompt box, type a request related to the skill you want {% data variables.copilot.copilot_chat_short %} to perform, and press **Enter**.

    Some examples of requests you can make are:

    {% prompt %}Create a new branch called [BRANCH-NAME] in the repository [OWNER/REPO-NAME].{% endprompt %}

    {% prompt %}Search for users with the name [USER-NAME]{% endprompt %}

    {% prompt %}Merge the pull request [PR-NUMBER] in the repository [OWNER/REPO-NAME].{% endprompt %}

1. {% data variables.copilot.copilot_chat_short %} will ask you to confirm that you want to proceed with the action. Click **Allow** to confirm.
1. {% data variables.copilot.copilot_chat_short %} will use the relevant skill from the {% data variables.product.github %} MCP server to perform the action you requested. {% data variables.copilot.copilot_chat_short %} will show you the result of the action in the chat interface.

## Limitations

The {% data variables.product.github %} MCP server in {% data variables.copilot.copilot_chat_dotcom_short %} is currently limited to a set of predefined skills. If you ask {% data variables.copilot.copilot_chat_short %} to perform an action that is not supported by the MCP server, it will still attempt to provide a helpful response, but it may not be able to perform the action as expected. For example, if you ask {% data variables.copilot.copilot_chat_short %} to create a new issue, it may provide you with a draft issue template, but you will still need to manually create the issue.

{% endwebui %}

## Further reading

* [AUTOTITLE](/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)
