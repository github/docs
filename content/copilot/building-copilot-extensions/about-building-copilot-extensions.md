---
title: About building Copilot Extensions
intro: 'Learn about the development process for {% data variables.product.prodname_copilot_extensions_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: About building Extensions
type: overview
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About {% data variables.product.prodname_copilot_extensions_short %}

{% data variables.product.prodname_copilot_extensions_short %} are integrations that expand the functionality of {% data variables.product.prodname_copilot_chat_short %}, allowing developers to bring external tools, services, and custom behaviors into the Chat experience. You can use {% data variables.product.prodname_copilot_extensions_short %} to extend the capabilities of {% data variables.product.prodname_copilot_chat_short %} in a variety of ways, including:

* **Querying documentation**: A {% data variables.product.prodname_copilot_extension_short %} can allow {% data variables.product.prodname_copilot_chat_short %} to query a third-party documentation service to find information about a specific topic.
* **AI-assisted coding**: A {% data variables.product.prodname_copilot_extension_short %} can use a third-party AI model to provide code suggestions.
* **Data retrieval**: A {% data variables.product.prodname_copilot_extension_short %} can allow {% data variables.product.prodname_copilot_chat_short %} to query a third-party data service to retrieve information about a specific topic.
* **Action execution**: A {% data variables.product.prodname_copilot_extension_short %} can allow {% data variables.product.prodname_copilot_chat_short %} to execute a specific action, such as posting to a message board or updating a tracking item in an external system.

## About building {% data variables.product.prodname_copilot_extensions %}

{% data variables.product.prodname_copilot_extensions %} are a type of {% data variables.product.prodname_copilot_extension_short %} built with {% data variables.product.prodname_github_apps %}. {% data variables.product.prodname_copilot_extensions %} are best suited for developers who want cross-platform compatibility and app management and support from {% data variables.product.github %}.

### Supported clients and IDEs

{% data reusables.copilot.copilot-extensions.supported-clients-and-ides-table %}

### About visibility of {% data variables.product.prodname_copilot_extensions %}

{% data variables.product.prodname_copilot_extensions %} can be private, public and shareable, or public and listed on the {% data variables.product.prodname_marketplace %}. Which visibility option you choose will depend on your use case and the audience you are targeting.

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

### Resources for building {% data variables.product.prodname_copilot_extensions %}

{% data variables.product.company_short %} provides a comprehensive toolkit for extension builders, with code samples, a CLI debugging tool, quickstart SDKs, and a user feedback repository. For more information, see the [copilot-extensions](https://github.com/orgs/copilot-extensions/) organization on {% data variables.product.company_short %}.

Before creating your own {% data variables.product.prodname_copilot_extension %} from scratch, you may want to explore an existing {% data variables.product.prodname_copilot_agent_short %}, then integrate it with a {% data variables.product.prodname_github_app %} to see how it works. {% data variables.product.company_short %} provides a few example {% data variables.product.prodname_copilot_agents_short %} that you can clone and use as the basis for your own {% data variables.product.prodname_copilot_extension %}:

* **Blackbeard**: A simple {% data variables.product.prodname_copilot_agent_short %} that responds to requests like a pirate, using {% data variables.product.prodname_copilot_short %}'s LLM API and special system prompts. It is a good starting point for learning how to build a {% data variables.product.prodname_copilot_extension %}. For more information, see the [Blackbeard {% data variables.product.prodname_copilot_extension_short %}](https://github.com/copilot-extensions/blackbeard-extension).
* **{% data variables.product.prodname_github_models %}**: A more complex {% data variables.product.prodname_copilot_agent_short %} that lets you ask about and interact with various LLMs listed on the {% data variables.product.prodname_marketplace %} from within {% data variables.product.prodname_copilot_chat_short %}. For more information, see the [{% data variables.product.prodname_github_models %} {% data variables.product.prodname_copilot_extension_short %}](https://github.com/copilot-extensions/github-models-extension).

    > [!NOTE] {% data variables.product.prodname_github_models %} are in {% data variables.release-phases.public_preview %} and subject to change. To request access, join the [waitlist](https://github.com/marketplace/models/waitlist).
* **Function calling**: an example agent written in Go that demonstrates function calling and confirmation dialogues. For more information, see the [Function calling extension](https://github.com/copilot-extensions/function-calling-extension).
* **RAG extension**: an example agent written in Go that demonstrates a simple implementation of retrieval augmented generation. For more information, see the [RAG extension](https://github.com/copilot-extensions/rag-extension).
* **Preview SDK**: An SDK that simplifies the process of building {% data variables.product.prodname_copilot_extensions %} by handling request verification, response formatting, and API interactions. It allows builders to focus on their extension's core functionality rather than boilerplate, by streamlining the integration of tools, APIs, and data sources into {% data variables.product.prodname_copilot_chat_short %}. For more information, see the [Preview SDK](https://github.com/copilot-extensions/preview-sdk.js).

## About building {% data variables.product.prodname_copilot_extensions_vsc %}

> [!NOTE] The {% data variables.product.github %} documentation focuses on building {% data variables.product.prodname_copilot_extensions %}, not {% data variables.product.prodname_copilot_extensions_vsc %}.

You can build a {% data variables.product.prodname_copilot_extension_short %} that is exclusive and native to {% data variables.product.prodname_vscode %}, called a {% data variables.product.prodname_copilot_extensions_vsc %}. This option is best suited for developers who want to build extensions that use {% data variables.product.prodname_vscode_shortname %}-specific APIs and functionality, or extend existing {% data variables.product.prodname_vscode_shortname %} extensions.

Also known as {% data variables.product.prodname_vscode_shortname %} Chat extensions, {% data variables.product.prodname_copilot_extensions_vsc %} function similarly to {% data variables.product.prodname_copilot_extensions %} by extending the capabilities of {% data variables.product.prodname_copilot_chat_short %}, with a few notable differences:
* {% data variables.product.prodname_vscode_shortname %} Chat extensions are only usable in {% data variables.product.prodname_vscode_shortname %}.
* {% data variables.product.prodname_vscode_shortname %} Chat extensions have more access to {% data variables.product.prodname_vscode_shortname %}'s features and APIs, allowing more editor-specific interactions like accessing local workspace data, manipulating {% data variables.product.prodname_vscode %}'s interface, and read/write access to local files.
* {% data variables.product.prodname_vscode_shortname %} Chat extensions are published to the {% data variables.product.prodname_vs_marketplace_shortname %}, not the {% data variables.product.prodname_marketplace %}.
* {% data variables.product.prodname_vscode_shortname %} Chat extensions are local to the user's machine, and cannot be controlled by an organization{% ifversion ghec %} or enterprise's{% else %}'s{% endif %} policies.

For more information on {% data variables.product.prodname_copilot_extensions_vsc %}, see [Chat extensions](https://code.visualstudio.com/api/extension-guides/chat) in the {% data variables.product.prodname_vscode %} documentation.

## Further reading

* "[AUTOTITLE](/copilot/building-copilot-extensions/copilot-extensions-glossary)"
