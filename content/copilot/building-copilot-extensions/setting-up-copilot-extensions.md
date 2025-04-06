---
title: Setting up Copilot Extensions
intro: 'Follow these steps to start building {% data variables.product.prodname_copilot_extensions_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Set up Copilot Extensions
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## 1. Learn about {% data variables.product.prodname_copilot_agents_short %}

{% data variables.product.prodname_copilot_agents_short %} contain the custom code for your {% data variables.product.prodname_copilot_extension_short %}, and integrate with a {% data variables.product.prodname_github_app %} to form the {% data variables.product.prodname_copilot_extension_short %} itself. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/about-copilot-agents)."

To successfully build a {% data variables.product.prodname_copilot_agent_short %}, you need to understand how the agent communicates with:

* The {% data variables.product.prodname_copilot_short %} platform using server-sent events. See "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-the-copilot-platform)."
* The {% data variables.product.github %} API. See "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github)."

## 2. Review example {% data variables.product.prodname_copilot_agents_short %} and the {% data variables.product.prodname_copilot_extensions_short %} SDK

To see the previous concepts in practice and learn about agent implementations, review the following example agents and software development kit (SDK), all of which are available in the [`copilot-extensions`](https://github.com/copilot-extensions) organization:

* [Blackbeard](https://github.com/copilot-extensions/blackbeard-extension) (best starting point): A simple agent that responds to requests like a pirate using {% data variables.product.prodname_copilot_short %}'s large language model (LLM) API and special system prompts.
* [{% data variables.product.prodname_github_models %}](https://github.com/copilot-extensions/github-models-extension): A more complex agent that lets you ask about and interact with various LLMs listed on the {% data variables.product.prodname_marketplace %} through {% data variables.product.prodname_copilot_chat_short %}. The {% data variables.product.prodname_github_models %} agent makes use of function calling.
* [Function Calling](https://github.com/copilot-extensions/function-calling-extension): An example agent written in Go that demonstrates function calling and confirmation dialogs.
* [RAG Extension](https://github.com/copilot-extensions/rag-extension): An example agent written in Go that demonstrates a simple implementation of retrieval augmented generation.
* [Preview SDK](https://github.com/copilot-extensions/preview-sdk.js/tree/main): An SDK that streamlines the development of {% data variables.product.prodname_copilot_extensions_short %} by handling request verification, payload parsing, and response formatting automatically. This SDK allows extension builders to focus more on creating core functionality and less on boilerplate code.

## 3. Build a {% data variables.product.prodname_copilot_agent_short %}

Using the reference material from the previous steps, plan and build your {% data variables.product.prodname_copilot_agent_short %}. You can choose to implement any of the following options:

* To avoid building and managing your own LLM deployment, your agent can call the Copilot LLM deployment. See "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/using-copilots-llm-for-your-agent)."
* To quickly interpret user input and choose from a variety of predefined functions to execute, you can implement function calling in your agent. To learn more, see [How to use function calling with Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling) in the Azure OpenAI documentation and [Function calling](https://platform.openai.com/docs/guides/function-calling) in the OpenAI documentation.

## 4. Deploy your {% data variables.product.prodname_copilot_agent_short %}

To make your {% data variables.product.prodname_copilot_agent_short %} accessible to the {% data variables.product.prodname_copilot_short %} platform and {% data variables.product.github %}, you need to deploy it to a server that is reachable by HTTP request. See "[AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-server-to-deploy-your-copilot-agent)."

## 5. Create a {% data variables.product.prodname_github_app %} and integrate it with your {% data variables.product.prodname_copilot_agent_short %}

To create a {% data variables.product.prodname_copilot_extension_short %}, you need to create and configure a {% data variables.product.prodname_github_app %}, then integrate it with your {% data variables.product.prodname_copilot_agent_short %}. See "[AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension)" and "[AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-agent)."

## 6. Choose the availability of your {% data variables.product.prodname_copilot_extension_short %}

Choose one of two visibility levels for your {% data variables.product.prodname_copilot_extension_short %}:
* **Public**: Any user or organization account with the installation page link for the extension can install it.
* **Private**: Only the user or organization account that created the extension can install it.

If you make your {% data variables.product.prodname_copilot_extension_short %} public, you can then choose to list it on the {% data variables.product.prodname_marketplace %}.

To learn how to change the visibility of your {% data variables.product.prodname_copilot_extension_short %} and list it on the {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/copilot/building-copilot-extensions/managing-the-availability-of-your-copilot-extension)."

## Next steps

To learn how to use your {% data variables.product.prodname_copilot_extension_short %}, see "[AUTOTITLE](/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat)."
