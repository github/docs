---
title: About customizing GitHub Copilot Chat responses
shortTitle: Response customization
intro: 'Learn about customizing the behavior of {% data variables.product.prodname_copilot %} to fit with your preferences and requirements.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - /copilot/concepts/about-customizing-github-copilot-chat-responses
contentType: concepts
---

{% webui %}

> [!NOTE] This version of this article is about custom instructions on the {% data variables.product.github %} website. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

{% endwebui %}

{% vscode %}

> [!NOTE] This version of this article is about custom instructions and prompt files in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

{% endvscode %}

{% visualstudio %}

> [!NOTE] This version of this article is about custom instructions in {% data variables.product.prodname_vs %}. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->

{% endvisualstudio %}

{% jetbrains %}

> [!NOTE] This version of this article is about custom instructions in JetBrains IDEs. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->
{% endjetbrains %}

{% xcode %}

> [!NOTE] This version of this article is about custom instructions in Xcode. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->
{% endxcode %}

{% eclipse %}

> [!NOTE] This version of this article is about custom instructions in Eclipse. Click the tabs above for other environments. <!-- markdownlint-disable-line MD027 -->
{% endeclipse %}

## About customizing {% data variables.copilot.copilot_chat %} responses

{% webui %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to your personal preferences, the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create custom instructions that automatically add this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

### Types of custom instructions

* **Personal custom instructions** apply to all conversations you have with {% data variables.copilot.copilot_chat_short %} across the {% data variables.product.github %} website. They allow you to specify your individual preferences, such as preferred language or response style, ensuring that the responses are tailored to your personal needs.
* **Repository custom instructions** apply to conversations within the context of a specific repository. They are useful for defining project-specific coding standards, frameworks, or tools. For example, you can specify that a repository uses TypeScript and a particular library, ensuring consistent responses for all contributors.
* **Organization custom instructions (public preview)** apply to conversations within the context of an organization on the {% data variables.product.github %} website. They are ideal for enforcing organization-wide preferences, such as a common language or security guidelines. Organization custom instructions can only be set by organization owners for organizations with a {% data variables.copilot.copilot_enterprise_short %} subscription.

### About repository custom instructions

Repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository.

Repository custom instructions files are used for chat responses, for code review, and also by {% data variables.product.prodname_copilot_short %} when you assign it to an issue or ask it to create a pull request. Instructions included in this file can help {% data variables.product.prodname_copilot_short %} to work on files in a way that matches your team's working practices and conforms to coding standards for your project. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create files in your repository that automatically add this information for you.

There are two types of files you can use to provide context and instructions to {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vscode_shortname %}:

* **Repository custom instructions** allow you to specify repository-wide instructions and preferences, in a single file, that apply to any conversation held in the context of the repository.
* **Prompt files** (public preview) allow you to save common prompt instructions and relevant context in Markdown files (`*.prompt.md`) that you can then reuse in your chat prompts. Prompt files are only available in {% data variables.product.prodname_vscode_shortname %}.

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

{% endvscode %}

{% visualstudio %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% endvisualstudio %}

{% jetbrains %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% endjetbrains %}

{% xcode %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% endxcode %}

{% eclipse %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a custom instructions file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

There are two types of repository custom instructions you can use to provide context and instructions to {% data variables.copilot.copilot_chat_short %} in Eclipse:

* **Workspace custom instructions** which apply to all projects in a workspace, and allow you to specify workspace-wide instructions and preferences, in a single file.
* **Project custom instructions** which apply to a specific project.

{% endeclipse %}

{% webui %}

## Using custom instructions

Custom instructions consist of natural language instructions and are most effective when they are short, self-contained statements. Consider the scope over which you want the instruction to apply when choosing whether to add an instruction on the personal, repository, or (if available) organization level.

{% data reusables.copilot.custom-instructions-interactions-note %}

Here are some common use cases and examples for each type of custom instructions:
* **Personal custom instructions:**
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

{% endwebui %}

{% vscode %}

## About repository custom instructions

Repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement chat questions.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

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

{% endvscode %}

{% visualstudio %}

## About repository custom instructions

Repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement chat questions.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

{% endvisualstudio %}

{% jetbrains %}

## About repository custom instructions

Repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement chat questions.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% endjetbrains %}

{% xcode %}

## About repository custom instructions

Repository custom instructions consist of a single file, `.github/copilot-instructions.md`, that you create in a repository. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement chat questions.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% endxcode %}

{% eclipse %}

## About repository custom instructions

**Workspace custom instructions** apply to all projects in a workspace, and allow you to specify workspace-wide instructions and preferences. You can use workspace custom instructions to provide context and instructions to {% data variables.copilot.copilot_chat_short %} in Eclipse.

**Project custom instructions** consist of a single file, `.github/copilot-instructions.md`, that you create in a project. The instructions you add to the file should be short, self-contained statements that add context or relevant information to supplement chat questions.

Common use cases include:

* **Test generation.** Create instructions for test generation, such as specifying the use of a certain test framework.
* **Code review.** Specify instructions for reviewing code, such as telling a reviewer to look for a specific error in the code.
* **Commit message generation.** Write instructions for generating commit messages, such as format or the type of information to include.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% endeclipse %}

## Writing effective custom instructions

The instructions you add should ideally be short, self-contained statements provide {% data variables.product.prodname_copilot_short %} with relevant information to help it work.

When writing custom instructions for a repository, you should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, **these may cause problems**:

* Requests to refer to external resources when formulating a response
* Instructions to answer in a particular style
* Requests to always respond with a certain level of detail

For example, the following instructions **may not have the intended results**:

```markdown
Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
```

## Next steps

{% webui %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
* [AUTOTITLE](/copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}

{% endwebui %}

{% vscode %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endvscode %}

{% visualstudio %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endvisualstudio %}

{% jetbrains %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endjetbrains %}

{% xcode %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endxcode %}

{% eclipse %}

* [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)

{% endeclipse %}
