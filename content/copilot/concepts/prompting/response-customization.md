---
title: About customizing GitHub Copilot responses
shortTitle: Response customization
intro: Learn about customizing the behavior of {% data variables.product.prodname_copilot %} to fit with your preferences and requirements.
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - /copilot/concepts/about-customizing-github-copilot-chat-responses
  - /copilot/concepts/code-review/coding-guidelines
  - /copilot/concepts/response-customization
contentType: concepts
category:
  - Configure Copilot
---

<!-- START WEB BROWSER TAB -->

{% webui %}

> [!NOTE] This version of this article is about custom instructions on the {% data variables.product.github %} website. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to your personal preferences, the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create custom instructions that automatically add this information for you. The additional information is not displayed, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% data reusables.copilot.custom-insts-nondeterministic %}

## Types of custom instructions

There are three main types of custom instructions that you can use to customize {% data variables.product.prodname_copilot_short %} responses on the {% data variables.product.github %} website:

* **[Personal instructions](#about-personal-instructions)** apply to all conversations you have with {% data variables.copilot.copilot_chat_short %} across the {% data variables.product.github %} website. They allow you to specify your individual preferences, such as preferred language or response style, ensuring that the responses are tailored to your personal needs.
* **[Repository custom instructions](#about-repository-custom-instructions)** apply to conversations within the context of a specific repository. They are useful for defining project-specific coding standards, frameworks, or tools. For example, you can specify that a repository uses TypeScript and a particular library, ensuring consistent responses for all contributors.
* **[Organization custom instructions](#about-organization-custom-instructions)** (public preview) apply to conversations within the context of an organization on the {% data variables.product.github %} website. They are ideal for enforcing organization-wide preferences, such as a common language or security guidelines. Organization custom instructions can only be set by organization owners for organizations with a {% data variables.copilot.copilot_enterprise_short %} subscription.

## About personal instructions

{% data reusables.copilot.personal-instructions-note %}

You can customize how {% data variables.copilot.copilot_chat_short %} responds to you on {% data variables.product.prodname_dotcom_the_website %} by adding personal instructions, which {% data variables.product.prodname_copilot_short %} will only apply to you. You do this in a popup on the {% data variables.copilot.copilot_chat_short %} page on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-personal-instructions).

## About repository custom instructions

You can use three types of repository custom instructions in {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}:

{% data reusables.copilot.custom-instructions-about %}

## About organization custom instructions

{% data reusables.copilot.custom-instructions-org-support %}

Organization owners can add instructions for {% data variables.product.prodname_copilot_short %}, to tailor responses to the needs and preferences of your organization. For example, you can choose to always have {% data variables.product.prodname_copilot_short %} respond in your company's language of choice or with a particular style.

Custom instructions defined in an organization's {% data variables.product.prodname_copilot_short %} settings are used for all members of the organization, irrespective of whether they receive their {% data variables.product.prodname_copilot_short %} subscription from that organization.

Some examples of instructions you could add are:
* `Always respond in Spanish.`
* `Do not generate code blocks in responses.`
* `For questions related to security, use the Security Docs Knowledge Base.`

## Precedence of custom instructions

{% data reusables.copilot.custom-instructions-chat-precedence %}

The following list shows the complete order of precedence, with instructions higher in this list taking precedence over those lower in the list:

* **Personal** instructions
* **Repository** custom instructions:
  * **Path-specific** instructions in any applicable `.github/instructions/**/*.instructions.md` file
  * **Repository-wide** instructions in the `.github/copilot-instructions.md` file
  * **Agent** instructions (for example, in an `AGENTS.md` file)
* **Organization** custom instructions

{% data reusables.copilot.custom-instructions-conflict %}

## Using custom instructions

Custom instructions consist of natural language instructions and are most effective when they are short, self-contained statements. Consider the scope over which you want the instruction to apply when choosing whether to add an instruction on the personal, repository, or organization level.

Here are some common use cases and examples for each type of custom instructions:
* **Personal instructions:**
  * Preferred individual language: `Always respond in Portuguese.`
  * Individual response preferences: `Explain a single concept per line. Be clear and concise.`
* **Repository custom instructions:**
  * Coding standards: `Use early returns whenever possible.`
  * Frameworks:  `Use Vue with the PrimeVue library.` or  `Use Typescript rather than Javascript.`
  * Code style preferences: `Use camel case for variable names.`
* **Organization custom instructions:**
  * Describe how to answer certain questions: `For questions related to security, use the Security Docs Knowledge Base or advise people to consult with #security on Slack.`
  * Preferred language for a company which exclusively speaks a single language: `Always respond in Portuguese.`
  * Organization-wide preferences: `Do not generate code blocks in responses.`

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot)

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-memory)

{% endwebui %}

<!-- end of web browser tab -->

<!-- START VS CODE TAB -->

{% vscode %}

> [!NOTE] This version of this article is about custom instructions and prompt files in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create files in your repository that automatically add this information for you.

There are two types of files you can use to provide context and instructions to {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}:

* **Repository custom instructions** allow you to specify instructions and preferences that {% data variables.product.prodname_copilot_short %} will consider when working in the context of the repository.
* **Prompt files** (public preview) allow you to save common prompt instructions and relevant context in Markdown files (`*.prompt.md`) that you can then reuse in your chat prompts. {% data reusables.copilot.prompt-files-available-in-editors %}

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

{% data reusables.copilot.custom-insts-nondeterministic %}

## About repository custom instructions

You can use three types of repository custom instructions in {% data variables.product.prodname_vscode_shortname %}:

{% data reusables.copilot.custom-instructions-about %}

## About prompt files

> [!NOTE] Prompt files are {% data variables.release-phases.public_preview %} and subject to change.

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). This allows blending natural language instructions, additional context, and even linking to other prompt files as dependencies.

Common use cases include:

* **Code generation**. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
* **Domain expertise**. Share specialized knowledge through prompts, such as security practices, or compliance checks.
* **Team collaboration**. Document patterns and guidelines with references to specs and documentation.
* **Onboarding**. Create step-by-step guides for complex processes or project-specific patterns.

You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Examples

The following examples demonstrate how to use prompt files.

* `New React form.prompt.md` - contains instructions for a reusable task to generate a form using React.

  ```markdown
  Your goal is to generate a new React form component.

  Ask for the form name and fields if not provided.

  Requirements for the form:
  - Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
  - Use `react-hook-form` for form state management:
    - Always define TypeScript types for your form data
    - Prefer *uncontrolled* components using register
    - Use `defaultValues` to prevent unnecessary rerenders
  - Use `yup` for validation:
    - Create reusable validation schemas in separate files
    - Use TypeScript types to ensure type safety
    - Customize UX-friendly validation rules
  ```

* `API security review.prompt.md` - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

  ```markdown
  Secure REST API review:
  - Ensure all endpoints are protected by authentication and authorization
  - Validate all user inputs and sanitize data
  - Implement rate limiting and throttling
  - Implement logging and monitoring for security events
  …
  ```

For information on how to enable, create, and use prompt files, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode#enabling-and-using-prompt-files).

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endvscode %}

<!-- end of vs code tab -->

<!-- START VISUAL STUDIO TAB -->

{% visualstudio %}

> [!NOTE] This version of this article is about custom instructions and prompt files in {% data variables.product.prodname_vs %}. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create files in your repository that automatically add this information for you.

There are two types of files you can use to provide context and instructions to {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vs %}:

* **Repository custom instructions** allow you to specify instructions and preferences that {% data variables.product.prodname_copilot_short %} will consider when working in the context of the repository.
* **Prompt files** allow you to save common prompt instructions and relevant context in Markdown files (`*.prompt.md`) that you can then reuse in your chat prompts. {% data reusables.copilot.prompt-files-available-in-editors %}

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

{% data reusables.copilot.custom-insts-nondeterministic %}

## About repository custom instructions

You can use two types of repository custom instructions in {% data variables.product.prodname_vs %}:

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository.

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository.

  By using path-specific instructions you can avoid overloading your repository-wide instructions with information that only applies to files of certain types, or in certain directories.

For details of support for each of these types of repository custom instructions across different {% data variables.product.prodname_copilot_short %} features, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

## About prompt files

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). This allows blending natural language instructions, additional context, and even linking to other prompt files as dependencies.

Common use cases include:

* **Code generation**. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
* **Domain expertise**. Share specialized knowledge through prompts, such as security practices, or compliance checks.
* **Team collaboration**. Document patterns and guidelines with references to specs and documentation.
* **Onboarding**. Create step-by-step guides for complex processes or project-specific patterns.

You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Examples

The following examples demonstrate how to use prompt files.

* `New React form.prompt.md` - contains instructions for a reusable task to generate a form using React.

  ```markdown
  Your goal is to generate a new React form component.

  Ask for the form name and fields if not provided.

  Requirements for the form:
  - Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
  - Use `react-hook-form` for form state management:
    - Always define TypeScript types for your form data
    - Prefer *uncontrolled* components using register
    - Use `defaultValues` to prevent unnecessary rerenders
  - Use `yup` for validation:
    - Create reusable validation schemas in separate files
    - Use TypeScript types to ensure type safety
    - Customize UX-friendly validation rules
  ```

* `API security review.prompt.md` - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

  ```markdown
  Secure REST API review:
  - Ensure all endpoints are protected by authentication and authorization
  - Validate all user inputs and sanitize data
  - Implement rate limiting and throttling
  - Implement logging and monitoring for security events
  …
  ```

For information on how to create and use prompt files, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=visualstudio#using-prompt-files).

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endvisualstudio %}

<!-- end of vs tab -->

<!-- START JETBRAINS TAB -->

{% jetbrains %}

> [!NOTE] This version of this article is about custom instructions and prompt files in JetBrains IDEs. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create a custom instructions file in your repository that automatically adds this information for you.

There are two types of files you can use to provide context and instructions to {% data variables.product.prodname_copilot_short %} in JetBrains IDEs:

* **Repository custom instructions** allow you to specify instructions and preferences that {% data variables.product.prodname_copilot_short %} will consider when working in the context of the repository.
* **Prompt files** (public preview) allow you to save common prompt instructions and relevant context in Markdown files (`*.prompt.md`) that you can then reuse in your chat prompts. {% data reusables.copilot.prompt-files-available-in-editors %}

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

{% data reusables.copilot.custom-insts-nondeterministic %}

## About repository custom instructions

In JetBrains IDEs, repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement a {% data variables.product.prodname_copilot_short %} prompt.

### Support for repository custom instructions

For details of which types of custom instructions are supported across various environments, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

### Use cases for custom instructions

Common use cases for custom instructions include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

## About prompt files

> [!NOTE] Prompt files are {% data variables.release-phases.public_preview %} and subject to change.

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). This allows blending natural language instructions and additional context.

Common use cases include:

* **Code generation**. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
* **Domain expertise**. Share specialized knowledge through prompts, such as security practices, or compliance checks.
* **Team collaboration**. Document patterns and guidelines with references to specs and documentation.
* **Onboarding**. Create step-by-step guides for complex processes or project-specific patterns.

You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Examples

The following examples demonstrate how to use prompt files.

* `New React form.prompt.md` - contains instructions for a reusable task to generate a form using React.

  ```markdown
  Your goal is to generate a new React form component.

  Ask for the form name and fields if not provided.

  Requirements for the form:
  - Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
  - Use `react-hook-form` for form state management:
    - Always define TypeScript types for your form data
    - Prefer *uncontrolled* components using register
    - Use `defaultValues` to prevent unnecessary rerenders
  - Use `yup` for validation:
    - Create reusable validation schemas in separate files
    - Use TypeScript types to ensure type safety
    - Customize UX-friendly validation rules
  ```

* `API security review.prompt.md` - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

  ```markdown
  Secure REST API review:
  - Ensure all endpoints are protected by authentication and authorization
  - Validate all user inputs and sanitize data
  - Implement rate limiting and throttling
  - Implement logging and monitoring for security events
  …
  ```

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/prompt-files).

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endjetbrains %}

<!-- end of jetbrains tab -->

<!-- START XCODE TAB -->

{% xcode %}

> [!NOTE] This version of this article is about custom instructions in Xcode. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat input box, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% data reusables.copilot.custom-insts-nondeterministic %}

## About repository custom instructions

In Xcode, repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement a {% data variables.product.prodname_copilot_short %} prompt.

### Support for repository custom instructions

For details of which types of custom instructions are supported across various environments, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

### Use cases for custom instructions

Common use cases for repository custom instructions include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endxcode %}

<!-- end of xcode tab -->

<!-- START ECLIPSE TAB -->

{% eclipse %}

> [!NOTE] This version of this article is about custom instructions in Eclipse. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

## About customizing {% data variables.product.prodname_copilot_short %} responses

{% data variables.product.prodname_copilot %} can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your prompts, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat input box, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

There are two types of repository custom instructions you can use to provide context and instructions to {% data variables.product.prodname_copilot_short %} in Eclipse:

* **Workspace custom instructions** which apply to all projects in a workspace, and allow you to specify workspace-wide instructions and preferences, in a single file.
* **Project custom instructions** which apply to a specific project.

{% data reusables.copilot.custom-insts-nondeterministic %}

## About repository custom instructions

**Workspace custom instructions** apply to all projects in a workspace, and allow you to specify workspace-wide instructions and preferences. You can use workspace custom instructions to provide context and instructions to {% data variables.product.prodname_copilot_short %} in Eclipse.

**Project custom instructions** consist of a single file, `.github/copilot-instructions.md`, that you create in a project. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement a {% data variables.product.prodname_copilot_short %} prompt.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

For a curated collection of examples, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

{% data reusables.copilot.custom-instructions-effective %}

## Next steps

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endeclipse %}

<!-- end of eclipse tab -->
