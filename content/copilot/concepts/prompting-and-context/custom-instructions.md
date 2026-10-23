---
title: Custom instructions for GitHub Copilot
shortTitle: Custom instructions
allowTitleToDifferFromFilename: true
intro: Customize {% data variables.product.prodname_copilot %} responses to your preferences, project conventions, and organization requirements.
versions:
  feature: copilot
redirect_from:
  - /copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - /copilot/concepts/about-customizing-github-copilot-chat-responses
  - /copilot/concepts/code-review/coding-guidelines
  - /copilot/concepts/response-customization
  - /copilot/concepts/prompting/response-customization
contentType: concepts
category:
  - Configure Copilot
---

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to your preferences, the way your team works, the tools you use, and the specifics of your project. Instead of repeatedly adding the same context to your prompts, you can create custom instructions that automatically provide this information to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

Prompt files provide another way to give {% data variables.product.prodname_copilot_short %} task-specific instructions and context. Unlike custom instructions, you choose when to use them in a chat. For more information, see [AUTOTITLE](/copilot/concepts/prompting-and-context/prompt-files).

The types of custom instructions available, and the {% data variables.product.prodname_copilot_short %} features that use them, vary by client and surface ({% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_jetbrains_ides %}, Xcode, and Eclipse). To check which types your environment supports, see [AUTOTITLE](/copilot/reference/custom-instructions-support). For supported IDEs and versions, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

{% data reusables.copilot.custom-insts-nondeterministic %}

## Types of custom instructions

Custom instructions can apply at different levels:

| Type | Scope | Example uses |
| --- | --- | --- |
| **Personal instructions** | Your conversations with {% data variables.product.prodname_copilot_short %} | Specify your individual preferences, such as preferred language or response style. |
| **Repository custom instructions** | Conversations with {% data variables.product.prodname_copilot_short %} performed in the context of a repository, project, path, or supported agent | Describe the languages, frameworks, tools, architecture, and coding conventions used in a project. |
| **Organization custom instructions** | Conversations with {% data variables.product.prodname_copilot_short %} when used in the context of an organization | Provide organization-wide language, security, compliance, or response guidelines. |

Some clients ({% data variables.product.prodname_jetbrains_ides %} and Xcode) provide additional global, workspace, or project instruction mechanisms. These mechanisms do not always map directly to personal, repository, and organization instructions in {% data variables.product.github %}.

## About personal instructions

Personal instructions configured on {% data variables.product.prodname_dotcom_the_website %} apply to {% data variables.copilot.copilot_chat_dotcom %}. Other clients, such as {% data variables.copilot.copilot_cli_short %}, use local files for personal instructions. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions#how-multiple-instruction-files-interact).

You can customize how {% data variables.copilot.copilot_chat_short %} responds to you on {% data variables.product.prodname_dotcom_the_website %} by adding personal instructions. These instructions apply only to you. For example, you can specify your preferred language, the level of detail you want, or how you want responses to be structured. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions).

## About repository custom instructions

Repository custom instructions provide project-specific context and guidance. For example, you can describe the repository's purpose, the frameworks and tools it uses, and the coding or testing conventions that contributors should follow.

There are three main types of repository custom instructions:

{% data reusables.copilot.custom-instructions-about %}

Note that agent instruction files, such as `AGENTS.md`, provide instructions to supported AI agents. They are different from custom agent definition files stored in `.github/agents`, which define specialized agents and their configuration. For the agent instruction filenames that {% data variables.product.prodname_copilot_short %} recognizes, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

### Repository custom instructions across clients and surfaces

Which types of repository custom instructions you can use (repository-wide, path-specific, or agent instructions) depends on your environment and on the task, such as chatting, working in the cloud, or reviewing a pull request. For example, an environment may support path-specific instructions for one task but not another. To check support for your setup, see [AUTOTITLE](/copilot/reference/custom-instructions-support). For supported IDEs and versions, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

## About organization custom instructions

{% data reusables.copilot.custom-instructions-org-support %}

Organization owners can add instructions to tailor {% data variables.product.prodname_copilot_short %} to the needs and preferences of their organization. These instructions are used for all members of the organization, regardless of whether they receive their {% data variables.product.prodname_copilot_short %} subscription from that organization.

Organization custom instructions can only be configured for organizations with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} subscription.

For example, organization instructions can:

* Specify a language that should be used in responses.
* Provide organization-wide security or compliance guidance.
* Specify preferred response formats, such as not generating code blocks.
* Direct people to an internal knowledge base or support channel for particular topics.

For information about adding organization instructions, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions).

## Precedence of custom instructions

Precedence depends on the client and feature. Most surfaces and clients, including {% data variables.copilot.copilot_cli_short %}, {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}, combine applicable instruction files without defining a general precedence order.

For {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}, all relevant instructions are provided to {% data variables.product.prodname_copilot_short %}. The order of precedence, from highest to lowest, is:

1. **Personal instructions**
1. **Repository custom instructions:**
   1. **Path-specific instructions** in any applicable `.github/instructions/**/*.instructions.md` file
   1. **Repository-wide instructions** in `.github/copilot-instructions.md`
   1. **Agent instructions**, such as instructions in an `AGENTS.md` file
1. **Organization custom instructions**

{% data reusables.copilot.custom-instructions-conflict %}

## Using custom instructions

Custom instructions consist of natural language instructions and are most effective when they are short, self-contained statements. Consider the scope over which you want an instruction to apply before deciding whether to add it at the personal, repository, or organization level.

Common use cases include:

* **Response preferences.** Specify a preferred language, response structure, tone, or level of explanation.
* **Project context.** Explain the purpose, architecture, or domain of a repository.
* **Languages and frameworks.** Identify the languages, libraries, frameworks, and versions used by a project.
* **Coding and testing conventions.** Describe naming, formatting, testing, error-handling, or documentation standards.
* **Review and security guidance.** Identify issues that should receive particular attention when a supported feature reviews or changes code.
* **Organization requirements.** Provide organization-wide language, security, compliance, or support guidance.

For example:

* Personal instruction: `Always respond in Portuguese.`
* Personal instruction: `Explain a single concept per line. Be clear and concise.`
* Repository instruction: `Use Vue with the PrimeVue library.`
* Repository instruction: `Use early returns whenever possible.`
* Organization instruction: `For questions related to security, use the Security Docs Knowledge Base.`
* Organization instruction: `Do not generate code blocks in responses.`

Instructions about testing, commit messages, or code review can provide useful context. However, the {% data variables.product.prodname_copilot_short %} features that use a particular instruction vary by client and surface, and custom instructions do not guarantee that generated content will comply with a policy.

{% data reusables.copilot.code-review.custom-instructions-limit %}

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/configure-custom-instructions/add-repository-instructions-in-your-ide)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions)

## Further reading

* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/customize-code-review)
* [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-memory)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)
