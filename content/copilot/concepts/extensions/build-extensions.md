---
title: About building GitHub Copilot Extensions
shortTitle: Build extensions
intro: Learn about developing {% data variables.copilot.copilot_extensions_short %}.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-extensions %}'
versions:
  feature: copilot-extensions
topics:
  - Copilot
redirect_from:
  - /copilot/building-copilot-extensions/about-building-copilot-extensions
  - /copilot/concepts/build-copilot-extensions/about-building-copilot-extensions
  - /copilot/concepts/copilot-extensions/about-building-copilot-extensions
  - /copilot/concepts/extensions/about-extensions
contentType: concepts
category: 
  - Integrate Copilot with your tools
---

<!-- expires 2025-11-19 -->

<!-- When this expires, check with the stakeholder for release #6165 if the knowledge bases content can be deleted -->

{% data reusables.copilot.copilot-extensions.extensions-retirement %}

<!-- end expires 2025-11-19 -->

## About building {% data variables.copilot.copilot_extensions_short %}

{% data reusables.copilot.copilot-extensions.about-copilot-extensions %}

## About skillsets and agents

{% data reusables.copilot.copilot-extensions.differences-between-agents-and-skillsets-1 %}
For more information about skillsets, see [AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-skillset-for-your-copilot-extension/about-copilot-skillsets).
{% data reusables.copilot.copilot-extensions.differences-between-agents-and-skillsets-2 %}

## About context passing

You can allow your {% data variables.copilot.copilot_extension_short %} to receive context from the editor, such as the currently opened file, by enabling the **Read-only** access level for the "{% data variables.product.prodname_copilot_short %} Editor Context" permission in your {% data variables.product.prodname_github_app %} settings. See step 10 of [Configuring your {% data variables.product.prodname_github_app %}](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-extension#configuring-your-github-app).

The {% data variables.copilot.copilot_extensibility_platform %} automatically handles messaging when implicit and explicit context is unavailable or unauthorized. To enable context passing, you are required to request permissions from users. To enable context passing, you are required to:

* Update your APIs to handle new reference types.
* Request permissions from users. When requesting permissions, follow these best practices:
  * Clearly communicate what context you need and what you need it for.
  * Implement appropriate error handling for unavailable context that your own application logic and API calls.
  * If context is unavailable, provide value where possible without this data.
  * Request only the minimum required permissions for your extension.

Context passing respects content exclusions, which refers to any files listed in your context exclusion settings, including files that begin with `.`.

For more information about context passing, see [AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/context-passing-for-your-agent).

## Using APIs in {% data variables.copilot.copilot_extensions %}

Building {% data variables.copilot.copilot_extensions %} requires using the {% data variables.product.github %} API. Optionally, the {% data variables.product.prodname_copilot_short %} API can be used for additional capabilities. For details on request and response formatting, see the [OpenAI API documentation](https://platform.openai.com/docs/api-reference/chat).

> [!NOTE] The {% data variables.product.prodname_copilot_short %} API is available for {% data variables.copilot.copilot_extension_short %} builders, but only {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_vscode_shortname %} Chat extensions can be used to access these endpoints.

## Resources for building {% data variables.copilot.copilot_extensions %}

{% data variables.product.company_short %} provides a comprehensive toolkit for extension builders, with code samples, a CLI debugging tool, quickstart SDKs, and a user feedback repository. For more information, see the [copilot-extensions](https://github.com/orgs/copilot-extensions/) organization on {% data variables.product.company_short %}.

Before creating your own {% data variables.copilot.copilot_extension %} from scratch, you may want to explore an existing {% data variables.copilot.copilot_agent_short %}, then integrate it with a {% data variables.product.prodname_github_app %} to see how it works. {% data variables.product.company_short %} provides a few example {% data variables.copilot.copilot_agents_short %} that you can clone and use as the basis for your own {% data variables.copilot.copilot_extension %}:

* **Blackbeard:** A simple {% data variables.copilot.copilot_agent_short %} that responds to requests like a pirate, using {% data variables.product.prodname_copilot_short %}'s LLM API and special system prompts. It is a good starting point for learning how to build a {% data variables.copilot.copilot_extension %}. For more information, see the [Blackbeard {% data variables.copilot.copilot_extension_short %}](https://github.com/copilot-extensions/blackbeard-extension).
* **{% data variables.product.prodname_github_models %}:** A more complex {% data variables.copilot.copilot_agent_short %} that lets you ask about and interact with various LLMs listed on the {% data variables.product.prodname_marketplace %} from within {% data variables.copilot.copilot_chat_short %}. For more information, see the [{% data variables.product.prodname_github_models %} {% data variables.copilot.copilot_extension_short %}](https://github.com/copilot-extensions/github-models-extension).

  > [!NOTE] {% data variables.product.prodname_github_models %} are in {% data variables.release-phases.public_preview %} and subject to change.

* **Function calling:** an example agent written in Go that demonstrates function calling and confirmation dialogues. For more information, see the [Function calling extension](https://github.com/copilot-extensions/function-calling-extension).
* **RAG extension:** an example agent written in Go that demonstrates a simple implementation of retrieval augmented generation. For more information, see the [RAG extension](https://github.com/copilot-extensions/rag-extension).
* **Preview SDK:** An SDK that simplifies the process of building {% data variables.copilot.copilot_extensions %} by handling request verification, response formatting, and API interactions. It allows builders to focus on their extension's core functionality rather than boilerplate, by streamlining the integration of tools, APIs, and data sources into {% data variables.copilot.copilot_chat_short %}. For more information, see the [Preview SDK](https://github.com/copilot-extensions/preview-sdk.js).

## About building {% data variables.copilot.copilot_vsc_chat_participants %}

> [!NOTE] The {% data variables.product.github %} documentation focuses on building {% data variables.copilot.copilot_extensions %}, not {% data variables.copilot.copilot_vsc_chat_participants %}.

You can build a {% data variables.copilot.copilot_extension_short %} that is exclusive and native to {% data variables.product.prodname_vscode %}, called a {% data variables.copilot.copilot_vsc_chat_participant %}.

{% data variables.copilot.copilot_extensions %} and {% data variables.copilot.copilot_vsc_chat_participants %} use the same backend platform to route requests to extensions. Both provide similar end-user experiences, integrate with {% data variables.copilot.copilot_chat_short %}, and can leverage the {% data variables.product.prodname_copilot_short %} API or other LLMs.

While they share similarities, below are several key differences:

* {% data variables.copilot.copilot_extensions %} can be used in any editor where extensions are supported, while {% data variables.copilot.copilot_vsc_chat_participants %} are only available in {% data variables.product.prodname_vscode %}.
* {% data variables.copilot.copilot_extensions %} are server-side extensions, requiring server infrastructure to build. These extensions provide a built-in connection to your {% data variables.product.github %} workspaces, as set by your organization administrator.
* {% data variables.copilot.copilot_vsc_chat_participants %} are client-side extensions that have more access to {% data variables.product.prodname_vscode_shortname %}'s features and APIs, allowing more editor-specific interactions like accessing local workspace data, manipulating {% data variables.product.prodname_vscode %}'s interface, and read/write access to local files. They do not require server infrastructure.
* Because {% data variables.copilot.copilot_vsc_chat_participants %} are local to the user's machine, they cannot be controlled by the {% data variables.product.prodname_copilot_short %} policies of an organization or enterprise on {% data variables.product.prodname_dotcom_the_website %}.
* {% data variables.copilot.copilot_vsc_chat_participants %} are published to the {% data variables.product.prodname_vs_marketplace_shortname %}, not the {% data variables.product.prodname_marketplace %}.

{% data variables.copilot.copilot_vsc_chat_participants %} are best suited for developers who want to build extensions that use {% data variables.product.prodname_vscode_shortname %}-specific APIs and functionality, or extend existing {% data variables.product.prodname_vscode_shortname %} extensions.

For more information on {% data variables.copilot.copilot_vsc_chat_participants %}, see [Chat extensions](https://code.visualstudio.com/api/extension-guides/chat) in the {% data variables.product.prodname_vscode %} documentation.

## Indemnity for {% data variables.copilot.copilot_extensions_short %}

{% data variables.copilot.copilot_extensions_short %} are not covered by {% data variables.product.prodname_copilot %}’s indemnity policy. However, this exclusion applies only to issues that arise within extension chat threads.

Installing and using extensions does not affect indemnity coverage for any issues that occur while using other {% data variables.product.prodname_copilot_short %} features such as code completion and chat.

## Further reading

* [AUTOTITLE](/copilot/building-copilot-extensions/copilot-extensions-glossary)
