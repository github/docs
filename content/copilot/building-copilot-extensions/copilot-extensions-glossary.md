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

{% data reusables.copilot.copilot-extensions.beta-note %}

The following terms are used in the context of {% data variables.product.prodname_copilot_extensions_short %}, and are defined here for clarity.

#### Agent

A concrete implementation of an AI assistant that can receive user queries and return a stream of response tokens. The combination of an agent + {% data variables.product.prodname_github_app %} is what we refer to as a {% data variables.product.prodname_copilot_extension_short %}.

#### {% data variables.product.prodname_copilot_chat_short %}

The conversational interface within {% data variables.product.prodname_copilot %} where users can interact with the AI assistant and extensions.

#### {% data variables.product.prodname_copilot_extension_short %}

A {% data variables.product.prodname_github_app %} with additional access to the {% data variables.product.prodname_copilot_chat_short %} window and Copilot API, allowing for extended functionality in {% data variables.product.company_short %}'s {% data variables.product.prodname_copilot_chat_short %}. This is how we will refer to extensions from the perspective of an extension user.

#### {% data variables.product.prodname_copilot_short %} Extensibility Platform

The system that handles authentication and proxies requests between clients and agent plugins.

#### {% data variables.product.prodname_github_app %}

The foundation for a {% data variables.product.prodname_copilot_extension_short %} that provides the necessary infrastructure, permissions, and context from {% data variables.product.company_short %}, such as user, repo and organization metadata.

##### {% data variables.product.prodname_marketplace %}

The platform where {% data variables.product.company_short %} approved {% data variables.product.prodname_copilot_extensions_short %} can be listed publicly and discovered by users.

#### Listed/Published Extension

An extension that appears on the {% data variables.product.prodname_marketplace %}. These extensions must be reviewed and approved by {% data variables.product.company_short %}.

#### Private Extension

An extension that is only visible and usable by the organization or individual user that created it.

##### Public Extension

An extension that is visible and installable by any {% data variables.product.company_short %} user or organization.

#### Skill

A piece of code that retrieves context or executes an action in response to a user’s prompt (e.g., "findIssueByID(id: number)").

#### Tool/Function Calling

A capability of {% data variables.product.prodname_copilot_short %}'s LLM (as well as Open AI’s) that allows them to invoke specific tools or functions. Extension builders can define available tools with parameters, enabling the LLM to select and call appropriate tools to fulfill a user’s request. “Functions” are a subset of “tools” and the “function calling” term will eventually be deprecated.

#### Unlisted Extension

An extension that is not published on the {% data variables.product.prodname_marketplace %}. Builders may develop and distribute public unlisted extensions without requiring review or approval from {% data variables.product.company_short %}. {% data variables.product.company_short %} does not guarantee the security or quality of unlisted extensions.

#### Verified Creator

A status required for organizations to publish extensions on the {% data variables.product.prodname_marketplace %}.

#### {% data variables.product.prodname_vscode %} Chat Extensions

{% data variables.product.prodname_vscode %} Chat Extensions extend {% data variables.product.prodname_copilot_chat_short %} functionality for a similar end-user experience, but they’re built as a {% data variables.product.prodname_vscode %} Extension rather than a {% data variables.product.prodname_github_app %}.
