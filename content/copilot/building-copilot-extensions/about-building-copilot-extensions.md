---
title: About building Copilot Extensions
intro: 'Learn about the development process for {% data variables.product.prodname_copilot_extension_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: About building Extensions
type: overview
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About {% data variables.product.prodname_copilot_extensions_short %}

{% data variables.product.prodname_copilot_extensions_short %} are integrations that expand the functionality of {% data variables.product.prodname_copilot_chat_short %}. {% data variables.product.prodname_copilot_extensions_short %} allow developers to integrate external tools, services, and custom behaviours into the {% data variables.product.prodname_copilot_chat_short %} experience across all supported IDEs and {% data variables.product.company_short %}.

{% data variables.product.prodname_copilot_extensions_short %} are built as {% data variables.product.prodname_github_apps %} with additional capabilities, including:
* Read-access to your {% data variables.product.prodname_copilot_chat_short %} history
* Sending responses to users in the {% data variables.product.prodname_copilot_chat_short %} window
* Execution of {% data variables.product.company_short %} (first party) or functions on external services (third party)

## Visibility of {% data variables.product.prodname_copilot_extensions_short %}

{% data variables.product.prodname_copilot_extensions_short %} can be private, public and shareable, or public and listed on the {% data variables.product.prodname_marketplace %}. Which visibility option you choose will depend on your use case and the audience you are targeting.

* Private extensions are often preferred by large enterprises or companies that:
    * Want more customization and controls over data access
    * Need to integrate with a large volume of internal documents and databases
    * Have strict security policies making it difficult to authorize permissions for third-parties
* Public extensions are suitable for:
    * Open-source projects
    * Collaborative development and use across organizations within an enterprise
    * Sharing your tool and getting feedback before publishing to the {% data variables.product.prodname_marketplace %}
* {% data variables.product.prodname_marketplace %} extensions are ideal for third-parties that want to:
    * Offer their service to a broader audience
    * Integrate their tool into the developer workflow on {% data variables.product.company_short %} and the IDE
    * Leverage the {% data variables.product.company_short %} ecosystem to raise awareness for their product

## Use cases

You can use {% data variables.product.prodname_copilot_extensions_short %} to extend the capabilities of {% data variables.product.prodname_copilot_chat_short %} in a variety of ways. For example, you could use them for:

* **Docs querying**: A {% data variables.product.prodname_copilot_extension_short %} could allow {% data variables.product.prodname_copilot_chat_short %} to query a third-party documentation service to find information about a specific topic.
* **AI-assisted coding**: A {% data variables.product.prodname_copilot_extension_short %} could use a third-party AI model to provide code suggestions.
* **Data retrieval**: A {% data variables.product.prodname_copilot_extension_short %} could allow {% data variables.product.prodname_copilot_chat_short %} to query a third-party data service to retrieve information about a specific topic.
* **Action execution**: A {% data variables.product.prodname_copilot_extension_short %} could allow {% data variables.product.prodname_copilot_chat_short %} to execute a specific action, such as posting to a message board or updating a tracking item in an external system.

## Extensions toolkit, code samples and SDK

{% data variables.product.company_short %} provides a comprehensive toolkit for extension builders, with code samples, a CLI debugging tool, quickstart SDKs, and a user feedback repository. For more information, see the [copilot-extensions](https://github.com/orgs/copilot-extensions/) organization on {% data variables.product.company_short %}.

Before creating your own {% data variables.product.prodname_copilot_extension_short %} from scratch, you may want to explore an existing {% data variables.product.prodname_copilot_agent_short %}, and integrate it with a {% data variables.product.prodname_github_app %} to see how it works. {% data variables.product.company_short %} provides a few example {% data variables.product.prodname_copilot_agents_short %}, that you can clone and use as the basis for your own {% data variables.product.prodname_copilot_extension_short %}, including:

* **Blackbeard**: A simple {% data variables.product.prodname_copilot_agent_short %} that responds to requests like a pirate, using {% data variables.product.prodname_copilot_short %}'s LLM API and special system prompts. It is a good starting point for learning how to build a {% data variables.product.prodname_copilot_extension_short %}. For more information, see the [Blackbeard {% data variables.product.prodname_copilot_extension_short %}](https://github.com/copilot-extensions/blackbeard-extension).
* **{% data variables.product.prodname_github_models %}**: A more complex {% data variables.product.prodname_copilot_agent_short %} that let's you ask about and interact with various LLMs listed on the {% data variables.product.prodname_marketplace %} from within {% data variables.product.prodname_copilot_chat_short %}. For more information, see the [{% data variables.product.prodname_github_models %} {% data variables.product.prodname_copilot_extension_short %}](https://github.com/copilot-extensions/github-models-extension).
* **Function calling**: an example agent written in Go that demonstrates function calling and confirmation dialogues. For more information, see the [Function calling extension](https://github.com/copilot-extensions/function-calling-extension).
* **RAG extension**: an example agent written in Go that demonstrates a simple implementation of retrieval augmented generation. For more information, see the [RAG extension](https://github.com/copilot-extensions/rag-extension).
* **Preview SDK**: An SDK that simplifies the process of building {% data variables.product.prodname_copilot_extensions_short %} by handling request verification, response formatting, and API interactions. It allows builders to focus on their extension's core functionality rather than boilerplate, by streamlining the integration of tools, APIs, and data sources into {% data variables.product.prodname_copilot_chat_short %}. For more information, see the [Preview SDK](https://github.com/copilot-extensions/preview-sdk.js).

## About {% data variables.product.prodname_vscode %} Chat extensions

{% data variables.product.prodname_copilot_extensions %} are generally built as {% data variables.product.prodname_github_apps %}. However, there is also an option to build a {% data variables.product.prodname_vscode %} Chat extension that integrates with {% data variables.product.prodname_copilot_chat_short %} and provides a similar end user experience. {% data variables.product.prodname_vscode %} Chat extensions are a good option for developers looking to customize their copilot experience with functionalities specific to {% data variables.product.prodname_vscode %}.

There are some key differences from {% data variables.product.prodname_github_app %} {% data variables.product.prodname_copilot_extensions_short %}:
* {% data variables.product.prodname_vscode %} Specific: Unlike {% data variables.product.prodname_github_app %} {% data variables.product.prodname_copilot_extensions_short %}, which work across all supported IDEs and {% data variables.product.company_short %}, {% data variables.product.prodname_vscode %} Chat extensions only work within the {% data variables.product.prodname_vscode %} environment.
* Capabilities: They have more access to {% data variables.product.prodname_vscode %}'s features and APIs, allowing for more editor-specific interactions, such as accessing local workspace data and manipulating {% data variables.product.prodname_vscode %}'s interface.
* Publishing: They can be published to the {% data variables.product.prodname_vscode %} Marketplace. They cannot be published on the {% data variables.product.prodname_marketplace %}.

For more information, see [{% data variables.product.prodname_vscode %} Chat extensions](https://code.visualstudio.com/api/extension-guides/chat) in the Visual Studio Code documentation.

## Further reading

* For a glossary of terms used in the context of {% data variables.product.prodname_copilot_extensions_short %}, see [Copilot Extensions Glossary](/copilot/building-copilot-extensions/copilot-extensions-glossary)
