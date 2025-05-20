---
title: Copilot Extensions Glossary
intro: 'Understand the terminology used in {% data variables.product.prodname_copilot_extensions_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Extensions Glossary
type: reference
---

The following terms are used in the context of {% data variables.product.prodname_copilot_extensions_short %}, and are defined here for clarity.

#### Agent

A type of {% data variables.product.prodname_copilot_extension_short %} implementation that gives developers full control over handling user queries and response generation. This approach is ideal for builders who want complete customization and management of AI interactions.

#### Context Passing

A capability in {% data variables.product.prodname_copilot_extensions_short %} that enables user context from editors to be sent to agents, allowing for more tailored responses.

#### {% data variables.product.prodname_copilot_chat_short %}

The conversational interface within {% data variables.product.prodname_copilot %} where users can interact with the AI assistant and extensions.

#### {% data variables.product.prodname_copilot_extension_short %}

A {% data variables.product.prodname_github_app %} with additional access to the {% data variables.product.prodname_copilot_chat_short %} window and Copilot API, allowing for extended functionality in {% data variables.product.company_short %}'s {% data variables.product.prodname_copilot_chat_short %}. This is how we will refer to extensions from the perspective of an extension user.

#### {% data variables.product.prodname_copilot_short %} Extensibility Platform

The system that handles authentication and proxies requests between clients and agent plugins.

#### {% data variables.product.prodname_copilot_extension_vsc %}

Also known as {% data variables.product.prodname_vscode %} Chat extensions, {% data variables.product.prodname_copilot_extensions_vsc %} are built as a {% data variables.product.prodname_vscode %} extension rather than a {% data variables.product.prodname_github_app %}. These extensions are exclusive to {% data variables.product.prodname_vscode_shortname %} and can be downloaded from the {% data variables.product.prodname_vscode_shortname %} Marketplace.

#### {% data variables.product.prodname_github_app %}

The foundation for a {% data variables.product.prodname_copilot_extension_short %} that provides the necessary infrastructure, permissions, and context from {% data variables.product.company_short %}, such as user, repo and organization metadata.

#### {% data variables.product.prodname_marketplace %}

The platform where {% data variables.product.company_short %} approved {% data variables.product.prodname_copilot_extensions %} can be listed publicly and discovered by users.

#### Listed/Published Extension

An extension that appears on the {% data variables.product.prodname_marketplace %}. These extensions must be reviewed and approved by {% data variables.product.company_short %}.

#### Private Extension

An extension that is only visible and usable by the enterprise, organization, or individual user that created it. Enterprise-created extensions can be installed by organizations that are within the enterprise.

#### Public Extension

An extension that is visible and installable by any {% data variables.product.company_short %} user or organization.

#### Skill

A piece of code that retrieves context or executes an action in response to a user’s prompt (for example, "findIssueByID(id: number)"). For a list of a skills, see [Currently available skills](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#currently-available-skills).

#### Skillset

A type of {% data variables.product.prodname_copilot_extension_short %} implementation that gives developers the ability to connect external services and custom API endpoints to {% data variables.product.prodname_copilot_short %} with minimal complexity. The {% data variables.product.prodname_copilot_extensibility_platform_short %} handles prompt crafting, function evaluation, and response generation. The builder only needs to handle API skill definitions. This approach is ideal for builders who want minimal complexity.

#### Tool/Function Calling

A capability of {% data variables.product.prodname_copilot_short %}'s LLM (as well as Open AI’s) that allows them to invoke specific tools or functions. Extension builders can define available tools with parameters, enabling the LLM to select and call appropriate tools to fulfill a user’s request. “Functions” are a subset of “tools” and the “function calling” term will be {% data variables.release-phases.closing_down %}.

#### Unlisted Extension

An extension that is not published on the {% data variables.product.prodname_marketplace %}. Builders may develop and distribute public unlisted extensions without requiring review or approval from {% data variables.product.company_short %}. {% data variables.product.company_short %} does not guarantee the security or quality of unlisted extensions.

#### Verified Creator

A status required for organizations to publish extensions on the {% data variables.product.prodname_marketplace %}.
