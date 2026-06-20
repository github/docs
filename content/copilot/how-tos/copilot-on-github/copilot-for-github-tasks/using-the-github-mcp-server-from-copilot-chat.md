---
title: Using the GitHub MCP Server from Copilot Chat
shortTitle: Use the {% data variables.product.github %} MCP Server from {% data variables.copilot.copilot_chat_short %}
intro: Perform {% data variables.product.github %} tasks—like creating branches, merging pull requests, and searching for users—directly from {% data variables.copilot.copilot_chat_dotcom_short %}, with no setup required.
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
redirect_from:
  - /copilot/how-tos/copilot-on-github/copilot-for-github-tasks/use-the-github-mcp-server
  - /copilot/how-tos/copilot-on-github/copilot-for-github-tasks/using-the-github-mcp-server-on-github
---

The {% data variables.product.github %} MCP server is pre-configured in {% data variables.copilot.copilot_chat_dotcom_short %} with a limited set of skills, so you can use it immediately. Instruct {% data variables.copilot.copilot_chat_short %} to perform tasks like creating branches or merging pull requests on your behalf.

For a full list of available skills, see [AUTOTITLE](/copilot/reference/github-copilot-chat-cheat-sheet#mcp-skills). For more about MCP, see [AUTOTITLE](/copilot/concepts/about-mcp).

## Use the {% data variables.product.github %} MCP server

{% data reusables.copilot.access-chat-instructions %}
1. Type a request and press **Enter**. For example:

    {% prompt %}Create a new branch called [BRANCH-NAME] in the repository [OWNER/REPO-NAME].{% endprompt %}

    {% prompt %}Merge the pull request [PR-NUMBER] in the repository [OWNER/REPO-NAME].{% endprompt %}

1. Click **Allow** to confirm the action.
1. {% data variables.copilot.copilot_chat_short %} performs the action and shows the result.

## Limitations

The {% data variables.product.github %} MCP server in {% data variables.copilot.copilot_chat_dotcom_short %} supports a limited set of skills. If a requested action is not supported, {% data variables.copilot.copilot_chat_short %} provides guidance but cannot perform it directly.

To access the full set of tools, set up the {% data variables.product.github %} MCP server in your IDE. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

You can also use the {% data variables.product.github %} MCP server with {% data variables.copilot.copilot_cloud_agent %}. It is enabled with read-only access by default and can be customized for wider access. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp#customizing-the-built-in-github-mcp-server).
## Further reading

* [AUTOTITLE](/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
