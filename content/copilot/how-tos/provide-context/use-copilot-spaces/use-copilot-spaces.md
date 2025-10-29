---
title: Using GitHub Copilot Spaces
shortTitle: Use Copilot Spaces
intro: 'Use spaces to ground {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

For information on creating {% data variables.copilot.copilot_spaces %}, see [AUTOTITLE](/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces).

## Using {% data variables.copilot.copilot_spaces %} in {% data variables.product.github %}

Once you've added context to your space, you can ask {% data variables.product.prodname_copilot_short %} questions in the space's chat interface in {% data variables.product.github %}. Your chat will be grounded in the context you've added. You can view all conversations you have had in the space's "Conversations" tab.

You can also change the large language model (LLM) used for your space by selecting the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then clicking the AI model of your choice. For more information, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

To star your favorite spaces so that you can easily find them later, you can click **{% octicon "star" aria-hidden="true" aria-label="star" %}** in the top right corner of the space. To view all spaces available to you, including starred spaces, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text).

## Using {% data variables.copilot.copilot_spaces %} in your IDE

You can also access the information and context from {% data variables.copilot.copilot_spaces_short %} directly in your IDE using the {% data variables.product.github %} MCP server. This allows you to leverage your curated context while coding without switching between your IDE and the web interface.

This functionality is available in any IDE that supports the {% data variables.product.prodname_copilot %} extension and the {% data variables.product.github %} MCP server.

>[!NOTE] When using {% data variables.copilot.copilot_spaces_short %} in your IDE, repository context is not supported. You will have access to all other sources and instructions from the space.

Once you've accessed space context from your IDE:

* The space's context will inform {% data variables.product.prodname_copilot_short %}'s responses
* You can reference the space's content when generating code, getting explanations, or working on development tasks
* Your spaces stay in sync as your project evolves. {% data variables.product.github %} files and other {% data variables.product.github %}-based sources added to a space are automatically updated as they change, making {% data variables.product.prodname_copilot_short %} an evergreen expert in your project

### Prerequisites

To use {% data variables.copilot.copilot_spaces_short %} in your IDE, you need to install the {% data variables.product.github %} MCP server. For setup instructions, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).

### Accessing space context from your IDE

For more detailed information on using the {% data variables.product.github %} MCP server in a specific IDE, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).

Note that {% data variables.copilot.copilot_spaces_short %} can only be used in agent mode in your IDE, since spaces are accessed via the {% data variables.product.github %} MCP server.

1. In your IDE, open {% data variables.copilot.copilot_chat_short %} and select **Agent** from the mode dropdown or select the **Agent** tab.
   * To confirm that the {% data variables.copilot.copilot_spaces_short %} tools are enabled, in the {% data variables.copilot.copilot_chat_short %} box, click the tools icon. In the dropdown, expand the list of available tools for **MCP Server: github**, and confirm that the `get_copilot_space` and `list_copilot_spaces` tools are enabled.
1. In the {% data variables.copilot.copilot_chat_short %} box, enter a prompt that references the space that you want to use as context. If you know the exact name of the space and the name of the user or organization that owns the space, you can provide that. Otherwise, {% data variables.product.prodname_copilot_short %} will automatically use the `list_copilot_spaces` tool to find spaces that match the name or text you provide and access the context from those spaces.

   For example, you could use either of these two prompts:
    * `Using the Copilot space 'Checkout Flow Redesign' owned by myorganization, summarize the implementation plan.`
    * `Summarize the implementation plan from the Copilot space for the checkout flow redesign.`

   Follow-up prompts in the same chat conversation will have access to the same spaces, without you having to reference it explicitly.

## Next steps

* To learn more about how to use {% data variables.copilot.copilot_spaces_short %} to help you with development work, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
* To learn how to share your space with your team, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).
