---
title: 'Application card: GitHub Copilot Chat'
shortTitle: Chat
intro: 'Learn how to use GitHub Copilot Chat responsibly by understanding its purposes, capabilities, and limitations.'
versions:
  feature: copilot
redirect_from:
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-githubcom
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-github
  - /copilot/responsible-use-of-github-copilot-features/chat-in-github
  - /copilot/responsible-use/chat-in-github
  - /early-access/copilot/github-copilot-chat-transparency-note
  - /early-access/copilot/github-copilot-chat-technical-preview-license-terms
  - /copilot/github-copilot-chat/about-github-copilot-chat
  - /copilot/github-copilot-chat/copilot-chat-in-ides/about-github-copilot-chat-in-your-ide
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-your-ide
  - /copilot/responsible-use-of-github-copilot-features/chat-in-your-ide
  - /copilot/responsible-use/chat-in-your-ide
  - /early-access/copilot/about-github-copilot-chat-in-github-mobile
  - /copilot/github-copilot-chat/about-github-copilot-chat-in-github-mobile
  - /copilot/github-copilot-chat/copilot-chat-in-github-mobile/about-github-copilot-chat-in-github-mobile
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-github-mobile
  - /copilot/responsible-use-of-github-copilot-features/chat-in-github-mobile
  - /copilot/responsible-use/chat-in-github-mobile
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-in-windows-terminal
  - /copilot/responsible-use-of-github-copilot-features/copilot-in-windows-terminal
  - /copilot/responsible-use/copilot-in-windows-terminal
  - /copilot/responsible-use/copilot-spaces
  - /copilot/github-copilot-enterprise/copilot-pull-request-summaries/about-copilot-pull-request-summaries
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-pull-request-summaries
  - /copilot/responsible-use-of-github-copilot-features/pull-request-summaries
  - /copilot/responsible-use/pull-request-summaries
  - /copilot/responsible-use-of-github-copilot-features/copilot-commit-message-generation
  - /copilot/responsible-use/copilot-commit-message-generation
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-in-github-desktop
  - /copilot/responsible-use-of-github-copilot-features/copilot-in-github-desktop
  - /copilot/responsible-use/copilot-in-github-desktop
contentType: rai
category:
  - Responsible use
---

## What is an Application Card?

{% data reusables.rai.copilot.application-card-intro %}

## 1. Overview

GitHub Copilot Chat is a chat interface that lets you interact with GitHub Copilot to ask and receive answers to coding-related questions. GitHub Copilot Chat is available on GitHub.com, in supported IDEs (VS Code, Visual Studio, JetBrains, and Eclipse), on GitHub Mobile, and in Windows Terminal. On GitHub.com and in GitHub Desktop, Copilot can also generate pull request summaries and commit messages—AI-powered overviews of changes made in a pull request or commit.

GitHub Copilot Chat can answer a wide range of coding-related questions on topics including syntax, programming concepts, test cases, debugging, and more. GitHub Copilot Chat is not designed to answer non-coding questions or provide general information on topics outside of coding.

The primary supported language for GitHub Copilot Chat is English.

## 2. Key terms

The following list provides a glossary of key terms related to GitHub Copilot Chat:

* **Content filtering**: A safety system that scans prompts and responses to detect and block harmful content before it is shown to the user.
* **Hallucination**: A phenomenon where a language model generates output that sounds plausible but is factually incorrect, unsupported by the provided context, or entirely fabricated. Hallucinations are a known risk of large language models and are reason that human review of AI-generated output is important.
* **Large language model (LLM)**: A type of neural network trained on a large body of text data that can generate, analyze, and transform natural language and code. GitHub Copilot Chat uses one or more LLMs to process prompts and produce responses.
* **Prompt**: The input that is provided to GitHub Copilot Chat. The system combines the prompt with additional context (for example, open files or repository data) before sending it to the language model.
* **Public code matching**: A feature that checks whether Copilot's suggestions match publicly available code. Depending on your settings, matching suggestions may be turned off or on; if turned on, it can either block or annotate with a reference to the source repository and any license information.
* **Pull request summary**: An AI-generated overview of the changes in a pull request, consisting of a prose paragraph and a bulleted list of key changes linked to the affected files. Summaries are generated on demand on GitHub.com.
* **Red teaming**: A structured testing practice in which testers deliberately attempt to provoke unsafe, harmful, or unintended behavior from an AI system. Red teaming helps identify vulnerabilities and improve safety mitigations before and after release.
* **Training data**: The large body of publicly available text and code that was used to train the foundation models behind GitHub Copilot Chat. The composition of the training data influences the quality and coverage of the model's suggestions across different programming languages, frameworks, and topics.

## 3. Key features or capabilities

The key features and capabilities outlined here describe what GitHub Copilot Chat is designed to do and how it performs across supported tasks.

* **Conversational coding assistance**: GitHub Copilot Chat provides a natural language interface for asking coding-related questions and receiving answers in the form of code, explanations, or step-by-step guidance. Users can ask follow-up questions to refine responses, and the conversation history is maintained within a session.
* **Context-aware responses**: GitHub Copilot Chat uses contextual information—such as open files, the active repository, chat history, and (when enabled) web search results—to generate responses that are relevant to the user's current work. The specific context available depends on the platform (GitHub.com, IDE, Mobile, Windows Terminal, or GitHub Desktop).
* **Multi-platform availability**: GitHub Copilot Chat is available across multiple surfaces, including GitHub.com, supported IDEs (VS Code, Visual Studio, JetBrains, and Eclipse), GitHub Mobile, Windows Terminal, and GitHub Desktop. Each platform offers a tailored experience optimized for its environment.
* **Agent mode**: In supported IDEs, GitHub Copilot Chat can operate in agent mode, where the model autonomously plans multi-step tasks, invokes tools (such as running terminal commands or editing files), and iterates on results. This extends the chat experience beyond single-turn question-and-answer interactions.
* **Copilot Spaces**: Spaces let users organize repositories, files, issues, and other materials into a curated collection of context. When a question is asked inside a space, Copilot uses the included context to produce more targeted and relevant responses. Spaces can also be accessed from the IDE via the remote GitHub MCP server.
* **Pull request summaries**: On GitHub.com, Copilot can generate an AI-powered summary of the changes in a pull request. The output consists of a prose overview followed by a bulleted list of key changes linked to the affected files. Summaries are generated on demand and are intended to help reviewers quickly understand what changed.
* **Commit message generation**: On GitHub.com and in GitHub Desktop, Copilot can generate a suggested commit summary (title) and description based on the code changes you have selected. In GitHub Desktop, users can select specific lines of code or files to improve context and accuracy. Generated messages can be reviewed and edited before committing.
* **Bring Your Own Key (BYOK)**: Organizations can connect GitHub Copilot Chat to large language models from supported third-party providers by supplying their own API key, rather than using the default GitHub-hosted model.
* **Content filtering**: At times, GitHub Copilot Chat may include a content filtering system that scans prompts and responses to detect and block harmful content. A public code matching feature checks whether suggestions match publicly available code and, depending on settings, blocks or annotates those matches with source and license information.

## 4. Intended uses

GitHub Copilot Chat can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

* **Answering coding questions**: Ask GitHub Copilot Chat for help or clarification on specific coding problems and receive responses in natural language or code snippet format. The response may draw on the model's training data, repository context, and web search results (when enabled).
* **Explaining code and suggesting improvements**: Generate natural language descriptions of a function's purpose, inputs, outputs, and dependencies. GitHub Copilot Chat can also suggest improvements such as better error handling or more readable control flow. Note that generated explanations may not always be accurate or complete and should be reviewed.
* **Generating unit test cases**: GitHub Copilot Chat can help write unit test cases by generating code snippets based on the code open in the editor or a highlighted code snippet. It can suggest possible input parameters, expected output values, and assertions based on the function's signature and body. GitHub Copilot Chat can also suggest test cases for edge cases and boundary conditions—such as error handling, null values, or unexpected input types—that might be difficult to identify manually. Generated test cases may not cover all possible scenarios; manual testing and code review are still necessary.
* **Proposing code fixes**: Get suggested fixes for bugs based on the error message, code syntax, and surrounding context. GitHub Copilot Chat can suggest changes to variables, control structures, or function calls that might resolve the issue. Note that suggested fixes may not always be optimal or complete.
* **Planning coding tasks**: Read and summarize GitHub issues, answer questions about them, or propose next steps.
* **Learning about releases, discussions, and commits**: Summarize what changed in a release, the gist of a discussion, or the changes in a specific commit.
* **Summarizing pull request changes (GitHub.com)**: Generate an AI-powered summary of the changes in a pull request—including a prose overview and a bulleted list of key changes linked to the affected files—to help reviewers quickly understand what changed and where to focus their review.
* **Generating commit messages (GitHub.com and GitHub Desktop)**: Generate a commit message summary (title) and description based on the code changes you've selected to commit, helping you save time and maintain clear commit histories. In GitHub Desktop, you can select specific lines of code or files for better context understanding to increase accuracy. You can review and edit the suggested title and description before committing.
* **Finding the right command (Windows Terminal)**: Ask Copilot to suggest commands that help you perform tasks in the command line. You can revise your question until the returned command meets your expectations, then insert it into your command line to run it.
* **Explaining an unfamiliar command (Windows Terminal)**: Ask Copilot to generate a natural language description of a command's functionality, including its input and output parameters and usage examples. Note that generated explanations may not always be accurate or complete.
* **Developing a new feature (Spaces)**: Bundle relevant code, product specs, and design notes in a space so Copilot can explain the current implementation, highlight gaps, and draft new code or next steps.
* **Defining logic for repeated tasks (Spaces)**: Document a process once—with flowcharts, examples, or schemas—and reuse it across your team for consistent patterns and reusable templates.
* **Sharing knowledge with teammates (Spaces)**: Collect the latest code and documentation in one place so Copilot can explain systems, answer questions, and onboard teammates.

## 5. Models and training data

GitHub Copilot Chat leverages a variety of AI models to power the experience that users see. For a comparison of the models available for Copilot, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison). For the full list of supported models, see [AUTOTITLE](/copilot/reference/ai-models/supported-models). For information on where models are hosted, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting). To learn more about the data used to train the foundation models behind GitHub Copilot Chat, refer to the linked AI model comparison above and [What data has GitHub Copilot been trained on?](https://github.com/features/copilot#faq) in the GitHub Copilot FAQ.

### Using Bring Your Own Key (BYOK)

When you use Bring Your Own Key with GitHub Copilot Chat, you can connect the chat experience to large language models from supported providers beyond the default Copilot model. Examples of supported providers include Anthropic, AWS Bedrock, Google AI Studio, Microsoft Foundry, OpenAI, OpenAI-compatible providers, and xAI. You add your API key for the chosen provider directly in your Copilot settings.

When BYOK is active:

* **Feature scope**: Your chosen model is used within GitHub Copilot Chat. In Agent mode, BYOK powers the main conversation, but certain actions such as code application or other tool calls may still use Copilot-integrated models optimized for those tasks. These built-in models do not run through your BYOK provider.
* **Content filtering**: Regardless of which provider is active, responses still pass through GitHub's API and may have content filtering before results are shown to you.
* **Quality considerations**: Suggestions may vary depending on the strengths and training coverage of your chosen provider.
* **Data handling**: When using BYOK, your prompts and responses are transmitted to your selected provider and may be subject to that provider's data retention and privacy policies.
* **Your responsibilities**: You are responsible for the following:
  * Provider API key security
  * Usage costs or quotas
  * Output validation
  * Evaluating whether your chosen model meets your safety and quality requirements
  * Compliance with your selected provider's terms
  * Determining whether your chosen model complies with applicable laws
  * Ensuring that a human reviews any output before using it to make decisions that affect people
* **Export restrictions**: Certain AI models may be subject to export controls. Verify your selected provider and model are authorized for use in your jurisdiction.

BYOK empowers your organization to choose the language model that best fits your needs. Note that model performance and safety characteristics are provider-dependent.

## 6. Performance

GitHub Copilot Chat works by using a combination of natural language processing and machine learning to understand your question and provide you with an answer. This process involves:

1. **Input processing**: The user's prompt is pre-processed by the system, combined with contextual information (for example, the current repository, open files, or chat history), and sent to a large language model. User input can take the form of code snippets or plain language.
1. **Language model analysis**: The prompt is passed through the language model, which is a neural network trained on a large body of text data. The language model analyzes the input prompt.
1. **Response generation**: The model generates a response based on its analysis of the input prompt and the context provided to it. This response can take the form of generated code, code suggestions, or explanations of existing code.
1. **Output formatting**: The response is formatted with syntax highlighting, indentation, and other features to add clarity. Depending on the type of question, links to context that the model used—such as source code files, issues, or documentation—may also be provided.

### Differences by experience

* **On GitHub.com**: The model can gather additional context from repository data stored on GitHub and web search results (when enabled by your administrator). Responses may include links to source code files, issues, or documentation.
* **Pull request summaries (GitHub.com)**: When a user requests a summary, a workflow uses the code diffs from files to build a prompt and requests Copilot to generate an overall summary. The output consists of a prose paragraph giving an overview of the changes, followed by a bulleted list of key changes linked to the respective lines of code. You can generate a summary in the description of a new or existing pull request, or in a comment on the pull request timeline. Larger pull requests may take up to a couple of minutes to process. The only supported language for pull request summaries is English.
* **Commit message generation (GitHub.com)**: When you click the **Commit changes** button on GitHub.com, Copilot generates a suggested summary (title) and description based on the code changes in the selected files. The text is inserted into the summary and description fields for you to review and edit before committing. The only supported language for commit message generation is English.
* **Commit message generation (GitHub Desktop)**: When you click the Copilot button in GitHub Desktop, Copilot generates a suggested summary (title) and description based on the code changes you've selected. You can select specific lines of code or files to improve context and accuracy, and you can regenerate suggestions before finalizing. The only supported language is English.
* **In your IDE**: The system combines user input with contextual information such as the name of the repository and the files the user has open. In VS Code and Visual Studio, additional context can be provided automatically from an optional `.github/copilot-instructions.md` file (the user can disable this in settings). When using the `@github` chat participant in VS Code or Visual Studio, GitHub Copilot Chat can also gather context from code stored on GitHub and from Bing search results (if enabled by your administrator).
* **On GitHub Mobile**: The input prompt is pre-processed and sent to the language model. The system is only intended to respond to coding-related questions. The options available vary by Copilot plan: users with a Copilot Enterprise subscription can have conversations using data from private indexed repositories and, if the web search integration is enabled, receive responses informed by web search results. Users with a Copilot Pro subscription can discuss top popular public repositories.
* **In Windows Terminal**: The user's prompt is combined with contextual information (the name of the active shell and the chat history) and sent to the language model. Responses take the form of a suggested command or an explanation of a command. Suggested commands are not run automatically—you must click on a command to insert it into your command line and then manually run it.
* **In Copilot Spaces**: Spaces let you organize the context that GitHub Copilot Chat uses to answer your questions. A space can include repositories, code, pull requests, issues, free-text content like transcripts or notes, images, and file uploads. When you submit a question in a space, Copilot augments your request with relevant context from that space. Spaces can also be accessed from the IDE via the remote GitHub MCP server. Not all content in a space is used in every response—Copilot processes a portion of the included content, so being selective about what you add helps ensure relevance.

GitHub Copilot Chat is intended to provide you with the most relevant answer to your question. However, it may not always provide the answer you are looking for. Users of GitHub Copilot Chat are responsible for reviewing and validating responses generated by the system to ensure they are accurate and appropriate.

## 7. Limitations

Understanding GitHub Copilot Chat's limitations is crucial to determine if it is used within safe and effective boundaries. While we encourage customers to leverage GitHub Copilot Chat in their innovative solutions or applications, it's important to note that GitHub Copilot Chat was not designed for every possible scenario. We encourage users to refer to [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms) as well as the following considerations when choosing a use case:

* **Limited scope**: GitHub Copilot Chat has been trained on a large body of code but may not be able to handle more complex code structures or obscure programming languages. For each language, the quality of suggestions depends on the volume and diversity of training data. For example, JavaScript is well-represented and well-supported, while less common languages may yield lower-quality results.
* **Potential biases**: Training data drawn from existing code repositories may contain biases and errors that can be perpetuated by the tool. GitHub Copilot Chat may also be biased towards certain programming languages or coding styles, which can lead to suboptimal or incomplete code suggestions.
* **Security risks**: Generated code can potentially expose sensitive information or vulnerabilities if not reviewed carefully. Always review and test generated code thoroughly, especially for security-sensitive applications.
* **Matches with public code**: While the probability is low, GitHub Copilot Chat may produce code that matches code in the training set. You should take the same precautions as you would with any code that uses material you did not independently originate including rigorous testing, IP scanning, and checking for security vulnerabilities. For more information, see [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).
* **Inaccurate code**: GitHub Copilot Chat may generate code that appears valid but is not semantically or syntactically correct, or does not accurately reflect the intent of the developer. Carefully review and test generated code, particularly for critical or sensitive applications.
* **Inaccurate responses to non-coding topics**: GitHub Copilot Chat is not designed to answer non-coding questions, and its responses in those contexts may be irrelevant or nonsensical.
* **Risk of destructive commands (Windows Terminal)**: Copilot may suggest commands that could be destructive—such as deleting content or formatting a hard drive—that may be necessary in certain scenarios but can cause problems if used incorrectly. You are ultimately responsible for any commands you choose to execute. Despite the presence of fail-safes and safety mechanisms, executing commands carries inherent risks.
* **Lines changed limits for PR summaries (GitHub.com)**: Files with more than 400 combined additions and deletions are excluded from summarization.
* **PR summaries are not auto-updated (GitHub.com)**: Pull request summaries are only created when users request them manually. When updates or changes are made to the pull request, the summary is not automatically refreshed. Users can request a new summary, but should carefully review the updated output—it carries the same risks of inaccuracy as the original.
* **Replication of PR content (GitHub.com)**: Because a summary outlines the changes in a pull request, if harmful or offensive terms appear in the pull request content, there is potential for the summary to replicate those terms. Users should expect terms used in their PR to appear in the AI-generated summary.
* **Limited scope for commit messages (GitHub.com and GitHub Desktop)**: Commit message generation may struggle with intricate code changes, short diff windows, or recently developed programming languages. The quality of suggestions depends on the availability and diversity of training data for the languages involved.
* **Replication of commit content (GitHub.com and GitHub Desktop)**: Because a commit message summarizes the changes in a commit, if harmful or offensive terms appear in the code changes, there is potential for the generated message to include those terms.
* **Commit messages are not auto-updated (GitHub.com and GitHub Desktop)**: Commit messages are only generated when you request them. When you make additional changes, the commit message is not automatically refreshed. You can regenerate a new suggestion, but should carefully review the updated output—it carries the same risks of inaccuracy as the original.
* **Interpretation of user intent (Spaces)**: Spaces help ground GitHub Copilot Chat's responses in curated context, but the system may still misunderstand your intent. Always review output to confirm it reflects your goals.
* **Context limits (Spaces)**: Spaces have defined size limits, and GitHub Copilot Chat only processes a portion of the content you include. Not every file, document, or note in a space will be used in a response. Being selective about what you add helps ensure the most relevant context is used.
* **Differing performance based on natural language**: GitHub Copilot Chat has been optimized primarily for English. You may notice differing performance with prompts in other languages.
* **Leveraging web search**: On GitHub.com and when using the GitHub chat participant in supported IDEs, GitHub Copilot Chat can optionally use a Bing search to help answer your question—for example, queries about recent events, new technologies, or highly specific subjects. Your enterprise administrator can enable or disable Bing for your organization. When web search is used, the content of your prompt, along with additional context, is used to generate a Bing search query on your behalf. The search query sent to Bing is governed by [Microsoft's Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement). For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## 8. Evaluations

{% data reusables.rai.copilot.application-card-evaluations %}

### Performance and quality evaluations

GitHub Copilot Chat AI features are evaluated using a combination of industry-standard benchmarks (e.g., SWE-Bench) and internally developed evaluation suites. Benchmark tasks are sourced from public open-source repositories and synthetic scenarios; no real user queries or customer code are used. Each evaluation includes multiple independent runs to account for nondeterminism in model outputs. Key metrics include resolution rate (percentage of tasks successfully completed), token efficiency, latency, and tool call reliability. Models are re-evaluated when updates are made and monitored continuously in production via error rates, response latency, and aggregate usage patterns.

### Performance and quality evaluation methods

New models for GitHub Copilot Chat undergo a staged evaluation process before deployment. Integrator teams run benchmark suites specific to their surface, testing the model on representative coding tasks such as bug fixes, code generation, and multi-file refactoring. Results are reviewed against established baselines and existing production models. Models must meet or exceed baseline performance across key metrics like resolution rate, token efficiency, and latency, before advancing to the next stage. A cross-functional review board makes a formal go/no-go decision before any model is approved for user-facing deployment.

### Risk and safety evaluations

{% data reusables.rai.copilot.application-card-risk-and-safety-evaluations %}

### Evaluation data for quality and safety

{% data reusables.rai.copilot.application-card-evaluation-data-for-quality-and-safety %}

### Custom evaluations

As part of our product development process, we undertake red teaming to understand and improve the safety of GitHub Copilot Chat. When enabled, input prompts and output completions are run through content filters.

## 9. Safety components and mitigations

* **Content filtering**: When enabled, the content filtering system detects and prevents the output of harmful content. If you encounter offensive content, report it to `copilot-safety@github.com`.
* **Public code matching**: Depending on your settings, GitHub Copilot Chat may have the duplicate detection filter turned on or off. If on, GitHub Copilot Chat either blocks suggestions that match public code or annotates them with links to the source repositories and any license details. In VS Code, if you have enabled suggestions that match public code, GitHub Copilot Chat displays a message with a link to show the matched code and any license details in the editor. In Visual Studio, JetBrains, Eclipse, and GitHub Mobile, GitHub Copilot Chat uses filters that block matches with public code. Regardless of settings, you should take the same precautions as with any code that uses material you did not independently originate—including rigorous testing, IP scanning, and checking for security vulnerabilities. For more information, see [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

## 10. Best practices for deploying and adopting GitHub Copilot Chat

Responsible AI is a shared commitment between GitHub and its customers. While GitHub builds AI applications with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

* **Exercise caution and evaluate outcomes when using GitHub Copilot Chat for consequential decisions or in sensitive domains**: {% data reusables.rai.copilot.application-card-consequential-decisions %}
* **Evaluate legal and regulatory considerations**: {% data reusables.rai.copilot.application-card-evaluate-legal-regulatory %}

* **Exercise human oversight when appropriate**: Human oversight is an important safeguard when interacting with AI applications. While we continuously improve our AI applications, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by GitHub Copilot Chat and verify that they match their expectations and requirements.
* **Be aware of the risk of overreliance**: {% data reusables.rai.copilot.application-card-overreliance %}
* **Exercise caution when designing agentic AI in sensitive domains**: {% data reusables.rai.copilot.application-card-agentic-ai-caution %}
* **Use GitHub Copilot Chat as a tool, not a replacement**: While GitHub Copilot Chat can be a powerful tool for generating code, it is important to use it as a tool rather than a replacement for human programming. Always review and test code generated by GitHub Copilot Chat to ensure it meets your requirements and is free of errors or security concerns.
* **Keep prompts on topic**: GitHub Copilot Chat is intended to address coding-related queries. Limiting prompts to coding questions or tasks enhances the model's output quality.
* **Use secure coding and code review practices**: Follow best practices for secure coding—such as avoiding hard-coded passwords or SQL injection vulnerabilities—and review all generated code.
* **Be selective with context (Spaces)**: Adding only the most relevant files, repositories, and notes to a space helps Copilot stay focused. Overloading a space with unnecessary content can dilute response quality.
* **Keep context updated (Spaces)**: As your project evolves, refresh the files, issues, or documentation in your space. Outdated context may cause Copilot to generate inaccurate or incomplete answers.
* **Use instructions alongside sources (Spaces)**: Combining natural language instructions with curated sources helps Copilot better understand your intent.
* **Anchor chat in a space (Spaces)**: Starting conversations from within a space ensures continuity and relevance, keeping responses aligned with the context you've set up.
* **Review PR summaries before publishing (GitHub.com)**: Pull request summaries are intended to supplement—not replace—your own context about the changes. Always review and assess the accuracy of a generated summary before saving or publishing your pull request.
* **Review commit messages before committing (GitHub.com and GitHub Desktop)**: Commit message generation is intended to supplement—not replace—your own descriptions of the changes. Always review and edit the suggested title and description before committing. In GitHub Desktop, selecting specific lines of code or files can improve accuracy. You can opt out of commit message generation via the Copilot [settings page](https://github.com/settings/copilot/features) on GitHub.com.
* **Provide feedback**: If you encounter any issues or limitations, provide feedback through the thumbs up/down buttons below each chat response. The ability to provide feedback about pull request summaries is dependent on your enterprise settings. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise). For commit message generation, you can share feedback via the [community discussion](https://github.com/orgs/community/discussions/categories/copilot-news-and-announcements) or by [opening an issue in the GitHub Desktop repository](https://github.com/desktop/desktop/issues). This helps improve the tool and address concerns.
* **Stay up to date**: GitHub Copilot Chat is evolving. Stay current with updates, new security risks, and best practices.

## 11. Learn more about GitHub Copilot Chat

For additional guidance on the responsible use of GitHub Copilot Chat, we recommend reviewing the following documentation:

* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
* [AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-pull-request-summaries/creating-a-pull-request-summary-with-github-copilot)
* [AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)
* [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)
* [Terminal Chat](https://learn.microsoft.com/windows/terminal/terminal-chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page/)

### Learn more about responsible AI

* [Microsoft AI principles](https://www.microsoft.com/en-us/ai/responsible-ai)
* [Microsoft responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)
* [Microsoft Azure Learning courses on responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)
