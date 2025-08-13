---
title: About GitHub Copilot Extensions
shortTitle: About extensions
intro: 'Learn about the development process for {% data variables.copilot.copilot_extensions_short %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-extensions %}'
versions:
  feature: copilot-extensions
topics:
  - Copilot
redirect_from:
  - /copilot/building-copilot-extensions/about-building-copilot-extensions
  - /copilot/concepts/build-copilot-extensions/about-building-copilot-extensions
  - /copilot/building-copilot-extensions/copilot-extensions-faq
  - /copilot/reference/copilot-extensions/copilot-extensions-faq
  - /copilot/reference/copilot-extensions
  - /copilot/concepts/copilot-extensions/about-building-copilot-extensions
  - /copilot/concepts/copilot-extensions/about-copilot-extensions
  - /copilot/concepts/copilot-extensions/about-extensions
contentType: concepts
---

## About {% data variables.copilot.copilot_extensions_short %}

{% data variables.copilot.copilot_extensions_short %} are integrations that expand the functionality of {% data variables.copilot.copilot_chat_short %}, allowing developers to bring external tools, services, and custom behaviors into the Chat experience. You can use {% data variables.copilot.copilot_extensions_short %} to extend the capabilities of {% data variables.copilot.copilot_chat_short %} in a variety of ways, including:

* **Querying documentation:** A {% data variables.copilot.copilot_extension_short %} can allow {% data variables.copilot.copilot_chat_short %} to query a third-party documentation service to find information about a specific topic.
* **AI-assisted coding:** A {% data variables.copilot.copilot_extension_short %} can use a third-party AI model to provide code suggestions.
* **Data retrieval:** A {% data variables.copilot.copilot_extension_short %} can allow {% data variables.copilot.copilot_chat_short %} to query a third-party data service to retrieve information about a specific topic.
* **Action execution:** A {% data variables.copilot.copilot_extension_short %} can allow {% data variables.copilot.copilot_chat_short %} to execute a specific action, such as posting to a message board or updating a tracking item in an external system.

{% data variables.copilot.copilot_extensions %} are built with {% data variables.product.prodname_github_apps %}. They are best suited for developers who want cross-platform compatibility and app management and support from {% data variables.product.github %}.

## Supported clients and IDEs

{% data reusables.copilot.copilot-extensions.supported-clients-and-ides-table %}

## Visibility of {% data variables.copilot.copilot_extensions %}

{% data variables.copilot.copilot_extensions %} can be private, public and shareable, or public and listed on the {% data variables.product.prodname_marketplace %}. Which visibility option you choose will depend on your use case and the audience you are targeting.

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

## {% data variables.copilot.copilot_extensions %} permissions

Permissions vary by extension, depending on the level of authorization that the extension requires in order to respond to your query. You can view the required permissions on the extension’s installation page, located after the billing information step and before the install and authorize step.

**For extension users**: At a minimum, the **{% data variables.copilot.copilot_chat_short %}** permissions must be set to "Read-only". Additional permissions may include executing write actions on other surfaces and authorizing read access to repository and organization level data in {% data variables.product.github %}.

**For extension creators**: In addition to the above, you may also request local context from a user’s editor to further tailor responses. To do so, the **{% data variables.product.prodname_copilot_short %} Editor Context** permissions must be set to "Read-only". Users will be notified to provide the required authorization.

For more information on {% data variables.product.prodname_github_app %} permissions, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

### Granting permissions to access organization resources

Users with an individual {% data variables.product.prodname_copilot_short %} subscription can install and use {% data variables.copilot.copilot_extensions_short %}. Users with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} subscription need an organization administrator to enable this feature.

Only organization administrators can grant permissions for {% data variables.copilot.copilot_extensions_short %} to access organization resources.

To grant organization members access, the organization administrator must:

* Install the extension
* Grant the extension permission to access specific repositories
* Authorize access for all, or specific repositories

### Controlling access at the enterprise level

If you are an enterprise administrator, you can disable {% data variables.copilot.copilot_extensions_short %} across your enterprise by setting the **{% data variables.copilot.copilot_extensions_short %}** policy to "Disabled". The "No Policy" setting allows organization administrators to set their own policy.

No, there is no allowlist or blocklist at the enterprise level.

## Sharing data with {% data variables.copilot.copilot_extensions_short %}

The following data is shared when you interact with {% data variables.copilot.copilot_extensions_short %}:

* Data attached to your account and {% data variables.copilot.copilot_chat_short %} usage, such as {% data variables.product.github %} user ID, and timestamps of messages.
* Past messages within the chat thread where you are invoking an extension. Only one extension can be used per thread, preventing data sharing across extensions. The data retention period for thread context is 30 days.
* Any additional organization and repository data that is authorized for the extension by your organization administrator. Administrators installing extensions must approve access to the required permissions prior to completing installation.
* For {% data variables.copilot.copilot_chat_dotcom_short %}, if your administrator has approved the extension to access repository or organization metadata, that data will be shared as well.

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
