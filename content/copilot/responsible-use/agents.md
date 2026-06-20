---
title: 'Application card: GitHub Copilot Agents'
shortTitle: Agents
intro: 'Learn how to use GitHub Copilot agentic features responsibly by understanding their purposes, capabilities, and limitations.'
versions:
  feature: copilot
redirect_from:
  - /early-access/copilot/code-review/responsible-use-of-copilot-code-review
  - /early-access/copilot/code-reviews/responsible-use-of-copilot-code-review
  - /early-access/copilot/code-reviews/responsible-use-of-copilot-code-reviews
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review
  - /copilot/responsible-use-of-github-copilot-features/code-review
  - /copilot/responsible-use/code-review
  - /early-access/copilot/coding-agent/responsible-use-of-copilot-coding-agent
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom
  - /copilot/responsible-use-of-github-copilot-features/copilot-coding-agent
  - /copilot/responsible-use/copilot-coding-agent
  - /copilot/responsible-use/copilot-cloud-agent
  - /copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-in-the-cli
  - /copilot/responsible-use-of-github-copilot-features/copilot-in-the-cli
  - /copilot/responsible-use/copilot-in-the-cli
  - /copilot/responsible-use/copilot-cli
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark
  - /copilot/responsible-use-of-github-copilot-features/spark
  - /copilot/responsible-use/spark
contentType: rai
category:
  - Responsible use
---

## What is an Application Card?

{% data reusables.rai.copilot.application-card-intro %}

## 1. Overview

GitHub Copilot includes several agentic features that go beyond suggestion and conversation—they can review code, take action on your behalf, and build applications. This card covers the following experiences:

* **Copilot code review**: Reviews pull request diffs and metadata on GitHub.com, producing feedback comments and suggested changes.
* **Copilot cloud agent**: An asynchronous agent on GitHub.com that can create branches, write code, and open pull requests in response to assigned issues. The cloud agent runs in an ephemeral, firewalled environment with automated security scanning.
* **Copilot CLI**: A command-line tool that can create and modify files, execute commands, and perform multi-step tasks. All actions require explicit permission prompts and are scoped to the current directory.
* **Copilot SDK**: A programmatic library that allows developers to build custom AI-powered applications using Copilot. The SDK communicates with Copilot CLI over JSON-RPC and supports custom agents, MCP server integrations, lifecycle hooks, and session management.
* **{% data variables.copilot.github_copilot_app %}**: A desktop application for directing agent sessions across local repositories, git worktrees, and cloud sandboxes. The app uses {% data variables.copilot.copilot_cli %} and {% data variables.copilot.copilot_sdk %} as its foundation and adds a user interface for parallel sessions, quick chats, {% data variables.product.github %} issue and pull request workflows, automations, and canvases.
{% ifversion spark %}
* **GitHub Spark (preview)**: A managed app-building experience where an agent writes code and runs commands in a development environment. Spark provides a managed runtime and can add inference capabilities via the GitHub Models SDK.
{% endif %}

These features share common principles—human oversight, review of outputs, and responsible use—but differ in their execution environments, permissions, and data flows. The sections below describe each experience in context.

## 2. Key terms

The following list provides a glossary of key terms related to GitHub Copilot Agents:

* **Code suggestion**: A specific code change proposed by Copilot code review as part of its feedback on a pull request. Code suggestions are presented as suggested changes that can be applied with a couple of clicks.
* **Content filtering**: A safety system that scans prompts and responses to detect and block harmful, offensive, or insecure content before it is shown to the user.
* **Custom instructions**: Natural language descriptions of coding style and best practices that a repository maintainer can configure to guide Copilot code review's feedback. Custom instructions help Copilot understand the conventions and standards of a specific codebase.
* **Hallucination**: A phenomenon where a language model generates output that sounds plausible but is factually incorrect, unsupported by the provided context, or entirely fabricated. In code review, hallucination can manifest as feedback that highlights problems that do not exist or are based on misunderstandings of the code.
* **Large language model (LLM)**: A type of neural network trained on a large body of text data that can generate, analyze, and transform natural language and code. Copilot Agents use one or more LLMs to process context and produce responses.
* **Ephemeral development environment**: A temporary, isolated compute environment created for each cloud agent session. The environment is destroyed after the session ends, ensuring that no state persists between runs.
* **Firewall**: A network-level control enabled by default for the cloud agent that prevents outbound connections to unauthorized hosts, protecting against accidental or malicious exfiltration of code or data.
* **AI credit**: A unit of consumption for Copilot features. Each use of Copilot code review consumes AI credits.
* **Permission prompt**: An interactive confirmation step in Copilot CLI that asks the user to approve an action—such as modifying a file, executing a command, or accessing files outside the current directory—before the agent proceeds. Permission prompts are a key safety mechanism for local agentic execution.
* **Copilot SDK**: A programmatic library (`@github/copilot-sdk`) that lets developers build custom AI-powered applications by creating sessions, sending prompts, and receiving streaming responses from Copilot. The SDK communicates with Copilot CLI over JSON-RPC.
* **JSON-RPC**: The communication protocol used between the Copilot SDK and Copilot CLI. The SDK sends structured requests to the CLI process, which handles model interaction and tool execution.
* **Custom agent (SDK)**: A named agent configuration within the SDK that has its own system prompt, scoped tools, and optional MCP servers. The SDK runtime can automatically delegate to sub-agents based on user intent.
* **Hooks (SDK)**: Lifecycle callbacks in the Copilot SDK that let developers inject custom logic at specific points during a session, such as before or after tool use, on session start or end, and on error.
{% ifversion spark %}
* **Managed runtime**: The fully managed hosting environment provided by GitHub Spark that scales with your application's needs and eliminates the need to manually manage infrastructure.
* **Spark**: An application built using GitHub Spark. Sparks can range from simple utilities to full-stack web applications and can be deployed to the public internet with configurable visibility.
* **Targeted edit**: A feature in GitHub Spark that allows you to select a specific element within your application and provide a focused prompt to refine its style, substance, or behavior, rather than applying a global change.
{% endif %}

## 3. Key features or capabilities

The key features and capabilities outlined here describe what GitHub Copilot Agents are designed to do and how they perform across supported tasks.

* **Automated code review feedback**: When a user requests a review from Copilot, it scans the code changes plus additional relevant context and provides feedback on the code. Feedback may include natural language comments and specific code suggestions linked to particular lines and files.
* **Customizable review guidance**: Copilot code review can be customized with custom instructions—natural language descriptions of coding style and best practices—so that feedback reflects a repository's conventions and standards.
* **Autonomous pull request creation**: The Copilot cloud agent can pick up a task from an issue, a pull request comment, or Copilot Chat, create a branch, generate tailored code changes, and open a pull request. After the initial pull request is created, the agent can iterate based on your feedback and reviews.
* **Ephemeral, firewalled execution**: While working on a task, the cloud agent has access to its own ephemeral development environment where it can make changes to code, execute automated tests, and run linters. A firewall is enabled by default to prevent data exfiltration.
* **Automated security scanning**: During code generation, the cloud agent automatically analyzes newly generated code for security vulnerabilities using CodeQL, secret scanning, and dependency analysis, and attempts to resolve any issues before they are introduced.
* **External integrations**: The cloud agent can receive information and context from MCP like workIQ and Microsoft 365, and external applications like Microsoft Teams, Linear, Slack, and Jira, enabling teams to assign tasks and track progress directly within their existing workflows.
* **Local agentic execution (Copilot CLI)**: Copilot CLI provides a chat-like interface in the terminal that can autonomously create and modify files, execute commands, and perform multi-step tasks. All actions are scoped to the current directory and require explicit permission prompts before the agent modifies files or runs commands.
{% ifversion spark %}
* **Natural language app building (Spark)**: GitHub Spark offers a natural language-centric development environment for creating and deploying full-stack web applications without requiring users to write or deploy code manually. Spark provides a fully managed runtime environment that scales with your application's needs.
* **Inference capabilities (Spark)**: Spark's SDK natively integrates with GitHub Models, allowing you to incorporate model inference into your application. If Spark determines that your application requires inference capabilities, it will add them using the Spark SDK.
{% endif %}

## 4. Intended uses

GitHub Copilot Agents can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

* **Supplementing human code review**: Copilot code review is intended to quickly provide feedback on a developer's code, enabling developers to get code ready to merge more quickly and increasing overall code quality.
* **Codebase maintenance**: The cloud agent can tackle security-related fixes, dependency upgrades, and targeted refactoring.
* **Feature development**: The cloud agent can implement incremental feature requests, develop additional test suites, and create or update documentation.
* **Prototyping new projects**: The cloud agent and Copilot CLI can greenfield new concepts, helping developers explore ideas quickly.
* **Setting up your environment (CLI)**: Copilot CLI can run commands in your terminal to set up your local environment to work on existing projects.
* **Finding the right command (CLI)**: Copilot CLI can suggest commands to perform tasks you're trying to complete, and explain unfamiliar commands in natural language.
* **Building custom AI applications (SDK)**: The Copilot SDK enables developers to build applications that leverage Copilot for code generation, natural language interaction, and task automation in their own products and workflows.
* **Multi-agent orchestration (SDK)**: Using custom agents and sub-agents, developers can build sophisticated workflows where multiple specialized agents collaborate on complex tasks, with automatic delegation based on user intent.
* **Extending applications with external tools (SDK)**: The SDK's MCP server support allows developers to connect their applications to external data sources and services, expanding the range of tasks their agents can perform.
{% ifversion spark %}
* **Building and deploying web applications (Spark)**: You can use GitHub Spark to build full-stack web applications using natural language. Spark's integrated runtime environment allows you to deploy these applications to the public internet with configurable visibility based on GitHub account permissions.
* **Rapid prototyping (Spark)**: Spark helps developers, designers, product managers, and other builders rapidly prototype ideas without needing to build applications from scratch or construct complex mockups. Prototypes can be deployed for ease of sharing or remain unpublished.
{% endif %}

## 5. Models and training data

GitHub Copilot Agents leverage a variety of AI models to power the experience that users see. For a comparison of the models available for Copilot, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison). For the full list of supported models, see [AUTOTITLE](/copilot/reference/ai-models/supported-models). For information on where models are hosted, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting). To learn more about the data used to train the foundation models behind GitHub Copilot Agents, refer to the linked AI model comparison above and [What data has GitHub Copilot been trained on?](https://github.com/features/copilot#faq) in the GitHub Copilot FAQ.

Copilot code review is a purpose-built product that uses a carefully tuned mix of models, prompts, and system behaviors to deliver consistent, high-quality feedback across a wide range of codebases. Model switching is not supported, as changing the model is likely to compromise reliability, user experience, and the quality of review comments. Copilot code review may use models that are not enabled on your organization's "Models" settings page.

The Copilot cloud agent uses a large language model to reason about tasks, generate code, and leverage tools within its ephemeral development environment. The agent has been evaluated across a variety of programming languages. English is the primary supported language for prompts and responses.

Copilot CLI uses a large language model to reason about tasks, generate code, modify files, and execute commands in your local terminal environment. The agent has been evaluated across a variety of programming languages. English is the primary supported language for prompts and responses.

The Copilot SDK communicates with Copilot CLI over JSON-RPC, using the same underlying models and capabilities. Applications built with the SDK use the same models available to the authenticated Copilot user or organization. Developers can also bring their own API keys (BYOK) to use custom model providers.

{% ifversion spark %}
GitHub Spark uses a large language model to power its agent within the development environment. The agent writes code and runs commands to build your application. Spark's SDK natively integrates with GitHub Models, allowing your application to incorporate model inference capabilities. For information on the models used by GitHub Models, see [AUTOTITLE](/github-models/responsible-use-of-github-models). Spark does not test the prompts you create within your application for inference—you must ensure that your included capabilities act as intended.
{% endif %}

## 6. Performance

### Differences by experience

#### Copilot cloud agent

The Copilot cloud agent works by using a combination of natural language processing and machine learning to understand your task and make changes in a codebase. This process can be broken down into a number of steps:

1. **Prompt processing**: The task provided through an issue, pull request comment, or Copilot Chat message is combined with other relevant, contextual information to form a prompt. That prompt is sent to a large language model for processing. Inputs can take the form of plain natural language, code snippets, or images.
1. **Language model analysis**: The prompt is passed through a large language model, which is a neural network that has been trained on a large body of data. The language model analyzes the input prompt to help the agent reason about the task and leverage necessary tools.
1. **Response generation**: The language model generates a response based on its analysis of the prompt. This response can take the form of natural language suggestions and code suggestions.
1. **Output formatting**: Once the agent completes its first run, it updates the pull request description with the changes it made. The agent may include supplemental information about resources it could not access and provide suggestions on steps to resolve. You may provide feedback by commenting within the pull request or explicitly mentioning the agent (`@copilot`). The agent will then resubmit that feedback for further analysis and respond with updated changes.

Copilot cloud agent is intended to provide the most relevant solution for task resolution. However, it may not always provide the answer you are looking for. You are responsible for reviewing and validating responses generated by Copilot cloud agent to ensure they are accurate and appropriate.

#### Copilot code review

Copilot code review inspects your code and provides feedback using a combination of natural language processing and machine learning. This process can be broken down into a number of steps:

1. **Input processing**: The code changes are combined with other relevant, contextual information (for example, the pull request's title and body), and any custom instructions that have been defined, to form a prompt. That prompt is sent to a large language model.
1. **Language model analysis**: The prompt is passed through the Copilot language model, which is a neural network that has been trained on a large body of text data. The language model analyzes the input prompt.
1. **Response generation**: The language model generates a response based on its analysis of the input prompt. This response can take the form of natural language suggestions and code suggestions.
1. **Output formatting**: The response is presented to the user either directly in a supported editor or as a pull request review on GitHub.com, providing code feedback linked to specific lines of specific files. Where Copilot has provided a code suggestion, the suggestion is presented as a suggested change, which can be applied with a couple of clicks.

#### Copilot CLI

Copilot CLI works by using a combination of natural language processing and machine learning to understand your task and make changes in a codebase. This process can be broken down into a number of steps:

1. **Input processing**: Your input is combined with relevant contextual information to form a prompt. That prompt is sent to a large language model for processing. Inputs can take the form of plain natural language, code snippets, or references to files in your terminal.
1. **Language model analysis**: The prompt is passed through a large language model, which is a neural network that has been trained on a large body of data. The language model analyzes the input prompt to help the agent reason about the task and use the necessary tools.
1. **Response generation**: The language model generates a response based on its analysis of the prompt. This response can take the form of natural language suggestions, code suggestions, file modifications, and command executions.
1. **Output formatting**: The response is formatted and presented using syntax highlighting, indentation, and other formatting features. The agent may also execute commands in your local environment and create, edit, or delete files in your file system in order to complete the task. All such actions require explicit permission prompts.

You may provide feedback to the agent after it returns a response in the interactive chat window. The agent will resubmit that feedback to the language model for further analysis and return an additional response.

#### Copilot SDK

The Copilot SDK provides a programmatic interface to Copilot's agentic capabilities. Applications built with the SDK follow this process:

1. **Session creation**: The application creates a session with the SDK, specifying the model, system prompt, available tools, custom agents, MCP servers, and hooks. The SDK establishes a JSON-RPC connection to Copilot CLI.
1. **Prompt submission**: User input is submitted to the session. The SDK routes the prompt (along with session context) to the CLI, which forwards it to the language model.
1. **Agent execution**: The language model reasons about the task and may invoke tools, delegate to sub-agents, or connect to MCP servers. Lifecycle hooks fire at each stage, allowing the application to inject custom logic.
1. **Response streaming**: Responses are streamed back to the application, which can present them in any format appropriate for its interface. The SDK provides structured events for text, tool calls, errors, and completion signals.

{% ifversion spark %}

#### GitHub Spark

GitHub Spark uses an agent-based approach to build and modify applications. This process can be broken down into a number of steps:

1. **Input processing**: Input prompts are pre-processed by Copilot, augmented with contextual information from your current Spark inputs—including code from your current application, previous prompts, and any error logs from your development environment—and sent to a large language model-powered agent within your development environment. The system is designed to generate code based on submitted prompts and is not capable of conversational interactions. English is the preferred language for prompts.
1. **Language model analysis**: The prompt is passed through a large language model, which is a neural network trained on a large body of text data. The language model analyzes the input prompt to help the agent reason about the task and leverage necessary tools.
1. **Agent execution**: The agent runs in your development environment, accepting the prompt and additional context, and decides how to update your application. The agent can write code, run commands, and read execution outputs. All actions are taken to ensure functional, accurate code. The only output from the agent is your application code.

Spark uses frameworks and SDKs that ensure modern design and secure deployments seamlessly integrated into Spark's runtime component. The design framework is flexible and modular, enabling you to modify the theme to match your desired look and feel. Spark's runtime integration uses best practices for web deployments to ensure secure, scalable deployments.

{% endif %}

## 7. Limitations

Understanding GitHub Copilot agentic features' limitations is crucial to determine they are used within safe and effective boundaries. While we encourage customers to leverage these features in their innovative solutions or applications, it's important to note that they were not designed for every possible scenario. We encourage users to refer to [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms) as well as the following considerations when choosing a use case:

* **Missed code quality problems**: Copilot may not identify all of the problems that are present in code, especially where changes are large or complex. To ensure that all relevant problems are identified and corrected, Copilot code review should be supplemented with careful human code review.
* **False positives**: Copilot code review has a risk of hallucination—it may highlight problems in reviewed code that do not exist or are based on misunderstandings of the code. Comments generated by Copilot code review should be carefully reviewed and considered before taking action and making changes.
* **Inaccurate or insecure code suggestions**: As part of its comments, Copilot code review may provide specific code suggestions. The code generated may appear to be valid but may not actually be semantically or syntactically correct, or may not correctly resolve the problem identified in the comment. In addition, code generated by Copilot may contain security vulnerabilities or other issues. You should always carefully review and test code generated by Copilot.
* **Potential biases**: Copilot's training data is drawn from existing code repositories, which may contain biases and errors that can be perpetuated by the tool. Additionally, Copilot code review may be biased toward certain programming languages or coding styles, which can lead to suboptimal or incomplete feedback.
* **Limited scope (cloud agent)**: The language model used by the cloud agent has been trained on a large body of code but still has a limited scope and may not be able to handle certain code structures or obscure programming languages. For each language, the quality of suggestions depends on the volume and diversity of training data for that language.
* **Inaccurate code (cloud agent)**: The cloud agent may generate code that appears to be valid but may not actually be semantically or syntactically correct, or may not accurately reflect the intent of the developer. You should carefully review and test generated code, particularly when dealing with critical or sensitive applications.
* **Security risks (cloud agent)**: The cloud agent generates code and natural language based on the context of an issue or comment within a repository, which can potentially expose sensitive information or vulnerabilities if not used carefully. You should review all outputs generated by the agent thoroughly prior to merging.
* **Public code matches (cloud agent)**: The cloud agent may generate code that is a match or near match of publicly available code, even if the "Suggestions matching public code" policy is set to "Block." If this happens, Copilot will show matches in the agent session logs with a link to display details of the matched code.
* **Limited scope (CLI)**: The language model used by Copilot CLI has been trained on a large body of code but still has a limited scope and may not be able to handle certain code structures or obscure programming languages. For each language, the quality of suggestions depends on the volume and diversity of training data for that language.
* **Inaccurate code (CLI)**: Copilot CLI may generate code that appears to be valid but may not actually be semantically or syntactically correct, or may not accurately reflect the intent of the developer. You should carefully review and test generated code, particularly when dealing with critical or sensitive applications.
* **Security risks (CLI)**: Copilot CLI generates code and natural language based on the context of your local environment, which can potentially expose sensitive information or vulnerabilities if not used carefully. You should review all outputs generated by the agent thoroughly.
* **Public code matches (CLI)**: Copilot CLI may generate code that is a match or near match of publicly available code, even if the "Suggestions matching public code" policy is set to "Block."
* **Command execution risks (CLI)**: Additional caution is required when asking or allowing Copilot CLI to execute a command, particularly regarding the potential destructiveness of some suggested commands. You may encounter commands for file deletion or hard drive formatting, which can cause problems if used incorrectly. You are ultimately responsible for the commands executed by Copilot CLI.
* **Inherited limitations (SDK)**: Because the Copilot SDK communicates with Copilot CLI, applications built with the SDK inherit the same model limitations, including limited scope for certain programming languages and the potential for inaccurate or insecure code generation.
* **Custom agent complexity (SDK)**: Incorrectly configured custom agents, tools, or hooks may produce unexpected behavior. Developers are responsible for testing and validating the behavior of their custom agent configurations.
* **MCP server trust (SDK)**: MCP servers connected through the SDK can expose tools and data from external sources. Developers must ensure that connected MCP servers are trustworthy, as malicious or misconfigured servers could introduce harmful behavior or expose sensitive data.
* **BYOK model variance (SDK)**: When using bring-your-own-key configurations with third-party model providers, behavior may differ from GitHub-hosted models. Developers are responsible for evaluating the safety and quality of responses from their chosen provider.
{% ifversion spark %}
* **Interpretation of user intent (Spark)**: Spark is not always correct in its interpretation of your intent. You should always use Spark's provided preview to confirm accurate behavior within your application.
* **Limited scope (Spark)**: Spark has been trained on a large body of code and relevant applications but may struggle with complex or truly novel applications. Spark performs best on common and personal application scenarios (for example, productivity tools, learning aids, life management utilities), and when the natural language instruction is provided in English.
* **Public code matches (Spark)**: Spark may generate code that is a match or near match of publicly available code, even if the "Suggestions matching public code" policy is set to "Block." If this happens, Copilot will not provide code references pointing to the original source of the code.
* **Security limitations (Spark)**: While Spark's runtime follows best practices for application deployment, it generates code probabilistically, which can potentially introduce vulnerabilities especially if those vulnerabilities are common in the training set. You should be careful when building applications that manage personal or sensitive data and always review and test the generated application thoroughly.
{% endif %}

## 8. Evaluations

{% data reusables.rai.copilot.application-card-evaluations %}

### Performance and quality evaluations

GitHub Copilot Agents are evaluated across its supported surfaces using a combination of industry-standard benchmarks (e.g., SWE-Bench) and internally developed evaluation suites. Benchmark tasks are sourced from public open-source repositories and synthetic scenarios; no real user queries or customer code are used. Each evaluation includes multiple independent runs to account for nondeterminism in model outputs. Key metrics include resolution rate (percentage of tasks successfully completed), token efficiency, latency, and tool call reliability. Models are re-evaluated when updates are made and monitored continuously in production via error rates, response latency, and aggregate usage patterns. 

### Performance and quality evaluation methods

New models for GitHub Copilot Agents undergo a staged evaluation process before deployment. Integrator teams run benchmark suites specific to their surface, testing the model on representative coding tasks such as bug fixes, code generation, and multi-file refactoring. Results are reviewed against established baselines and existing production models. Models must meet or exceed baseline performance across key metrics like resolution rate, token efficiency, and latency, before advancing to the next stage. A cross-functional review board makes a formal go/no-go decision before any model is approved for user-facing deployment. 

### Risk and safety evaluations

{% data reusables.rai.copilot.application-card-risk-and-safety-evaluations %}

### Evaluation data for quality and safety

{% data reusables.rai.copilot.application-card-evaluation-data-for-quality-and-safety %}

### Custom evaluations

Copilot agentic features have been subject to RAI red teaming to identify and address potential risks. We continue to monitor the efficacy and safety of these features over time. For more information, see [Microsoft AI Red Team building future of safer AI](https://www.microsoft.com/en-us/security/blog/2023/08/07/microsoft-ai-red-team-building-future-of-safer-ai/) on the Microsoft security blog.

## 9. Safety components and mitigations

### Copilot cloud agent

* **Privilege escalation controls**: The cloud agent only responds to interactions from users with repository write access. Actions workflows triggered by pull requests raised by the agent require approval from a user with write access before they will run. The agent filters hidden characters that might allow users to hide harmful instructions in comments or issue contents.
* **Constrained permissions**: The cloud agent only has access to the repository where it is creating a pull request and cannot access other repositories. It can only push to a single branch: the existing pull request branch when triggered via `@copilot`, or otherwise to a new `copilot/` branch. This means that Copilot cannot push directly to your default branch (for example, `main`). The agent does not have access to Actions organization or repository secrets—only secrets and variables specifically added to the `copilot` environment are passed to the agent.
* **Ensuring traceability**: The cloud agent's commits are authored by Copilot, with the human who started the task marked as the co-author. This makes it easier to identify code generated by the agent and who initiated the task. The cloud agent's commits are signed, so they appear as "Verified" on GitHub. This provides confidence that the commits were made by GitHub Copilot cloud agent and have not been altered. Each commit message includes a link to the agent session logs. This gives you a permanent link from any agent-authored commit to the full session logs, so you can understand why Copilot made a change during code review or trace it later for auditing purposes.
* **Firewall for data exfiltration prevention**: By default, the cloud agent has a firewall enabled to prevent exfiltration of code or other sensitive data, either accidentally or due to malicious user input.
* **Automated security vulnerability detection**: During code generation, the cloud agent automatically analyzes newly generated code for security vulnerabilities and attempts to resolve them. Analysis is performed using CodeQL (to identify potential vulnerabilities and errors), secret scanning (to ensure secrets aren't introduced), and dependency analysis (to check for known vulnerabilities in referenced dependencies).

### Copilot CLI

* **Directory-scoped access**: By default, Copilot CLI only has access to files and folders in, and below, the directory from which it was invoked. If the agent wishes to access files outside the current directory, it will ask for permission.
* **Permission prompts for file modifications**: Copilot CLI asks for permission before modifying files. You should ensure it is modifying the correct files before granting permission.
* **Permission prompts for command execution**: Copilot CLI asks for permission before executing commands that may be dangerous. You should review these commands carefully before giving permission to run.
* **Configurable permissions**: You can grant Copilot CLI specific permissions, or all permissions, by using the various command line options: for example, `--allow-tool=[TOOLS...]`, `--allow-all-tools`, `--allow-all` (or its slash command equivalent `/allow-all` for use in an interactive session). For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options). Typically, when you use Copilot CLI in autopilot mode, you will grant it full permissions to allow it to complete a task autonomously, without requiring you to approve activity as it works on the task. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot).
* **Security considerations**: For more information about security practices while using Copilot CLI, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli#security-considerations).

### Copilot SDK

* **Inherited CLI safety controls**: The Copilot SDK communicates with Copilot CLI, inheriting its permission model and safety controls. Tool executions and file modifications still require appropriate permissions.
* **Hook-based oversight**: The SDK's lifecycle hooks (such as `onPreToolUse` and `onPostToolUse`) allow developers to implement custom safety checks, audit logging, and approval workflows before and after tool execution.
* **MCP server isolation**: MCP servers run as separate processes. Developers can control which servers are available per session, limiting the scope of external tool access.
* **Session scoping**: Each SDK session is isolated with its own context, tools, and permissions. Developers can control what data and capabilities are available within each session.
* **BYOK responsibility**: When using bring-your-own-key configurations, prompts and responses are sent directly to the configured provider. Developers are responsible for reviewing the data handling policies of their chosen provider.

### {% data variables.copilot.github_copilot_app %}

The {% data variables.copilot.github_copilot_app %} is a desktop application for directing agent sessions across local repositories, git worktrees, and cloud sandboxes. The app uses {% data variables.copilot.copilot_cli %} and {% data variables.copilot.copilot_sdk %} as its foundation and adds a user interface for parallel sessions, quick chats, {% data variables.product.github %} issue and pull request workflows, automations, and canvases.

* **Workspace isolation**: App sessions can run in separate git worktrees or cloud sandboxes, helping isolate concurrent tasks from each other and from the default branch.
* **Inherited CLI and SDK safety controls**: App sessions use {% data variables.copilot.copilot_cli %} and {% data variables.copilot.copilot_sdk %}, so they inherit the same model limitations and safety controls for file access, file modification, command execution, session scoping, and connected tools.
* **Human review before merge**: The app surfaces generated changes, pull request status, CI results, review activity, and session history so users can inspect work before submitting reviews, enabling agent merge, or merging pull requests.
* **Configurable integrations and automations**: Users control which MCP servers, skills, canvas extensions, and automations are available in the app. These configurations should be reviewed before use because they can affect the tools, data, and background actions available to sessions.

### Data handling when using your own model provider (CLI)

When you configure Copilot CLI to use your own model provider, your prompts, code context, and generated responses are sent directly to the provider you configure. They are not routed through GitHub. You are responsible for reviewing and complying with the terms of service and data handling policies of your chosen provider.

#### Telemetry

When you use your own model provider without offline mode, Copilot CLI continues to send telemetry to GitHub as usual. This telemetry does not include your prompts or code, but it does include usage metadata.

If you enable offline mode by setting the `COPILOT_OFFLINE` environment variable to `true`, all telemetry is disabled. In offline mode, Copilot CLI only makes network requests to your configured model provider.

#### Authentication and feature availability

GitHub authentication is not required when using your own model provider (BYOK). Without GitHub authentication, the following features are unavailable:

* `/delegate`, which hands off the session to GitHub's server-side Copilot
* The GitHub MCP server
* GitHub Code Search

In offline mode, web-based tools such as `web_fetch` and GitHub Code Search are also disabled.

#### No fallback to GitHub-hosted models

If your model provider configuration is invalid, Copilot CLI exits with an error. It does not fall back to GitHub-hosted models. Common failures, such as connection refused, authentication errors, model not found, and timeouts, produce user-friendly messages with actionable guidance.

{% ifversion spark %}

### GitHub Spark

* **Content protections**: Spark has built-in protections against harmful, hateful, or offensive content.
* **Content reporting**: You can report problematic or offensive content via feedback, or report a spark as abuse or spam. Examples of offensive content should be reported to copilot-safety@github.com with the spark's URL.
* **Secure runtime**: Spark's runtime integration uses best practices for web deployments to ensure secure, scalable deployments.

{% endif %}

## 10. Best practices for deploying and adopting GitHub Copilot agentic features

Responsible AI is a shared commitment between GitHub and its customers. While GitHub builds AI applications with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

* **Exercise caution and evaluate outcomes when using Copilot agentic features for consequential decisions or in sensitive domains**: {% data reusables.rai.copilot.application-card-consequential-decisions %}
* **Evaluate legal and regulatory considerations**: {% data reusables.rai.copilot.application-card-evaluate-legal-regulatory %}
* **Exercise human oversight when appropriate**: Human oversight is an important safeguard when interacting with AI applications. While we continuously improve our AI applications, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by Copilot agentic features and verify that they match their expectations and requirements.
* **Be aware of the risk of overreliance**: {% data reusables.rai.copilot.application-card-overreliance %}
* **Exercise caution when designing agentic AI in sensitive domains**: {% data reusables.rai.copilot.application-card-agentic-ai-caution %}
* **Use Copilot code review to supplement human reviews, not to replace them**: While Copilot code review can be a powerful tool for improving code quality, it is important to use it as a tool, rather than to replace human reviews. You should always review and verify the feedback generated by Copilot code review, and supplement Copilot's feedback with careful human review to ensure your code meets your requirements.
* **Provide feedback**: If you encounter any issues or limitations with Copilot code review, we recommend that you provide feedback by using the thumbs up and thumbs down buttons on Copilot's comments. This can help GitHub improve the tool and address any concerns or limitations.
* **Configure custom instructions**: You can configure custom instructions to help Copilot understand your coding style and best practices, improving the relevance and quality of review feedback.
* **Ensure cloud agent tasks are well-scoped**: The more clear and well-scoped the prompt you assign to the cloud agent, the better the results. An ideal issue includes a clear description of the problem, complete acceptance criteria, and hints on what files need to be changed.
* **Customize the cloud agent with additional context**: The cloud agent has access to semantic code search, which helps it find relevant code based on meaning rather than just exact text matches, allowing it to complete tasks faster. To further enhance performance, implement custom Copilot instructions to help the agent better understand your project and how to build, test, and validate its changes.
* **Use the cloud agent as a tool, not a replacement**: You should always review and test the content generated by the cloud agent to ensure that it meets your requirements and is free of errors or security concerns prior to merging.
* **Use secure coding and code review practices with the cloud agent**: Although the cloud agent can generate syntactically correct code, it may not always be secure. Follow best practices for secure coding and code review. Take the same precautions as you would with any code that uses material you did not independently originate, including rigorous testing, IP scanning, and checking for security vulnerabilities.
* **Stay up to date**: The cloud agent is an evolving technology. Stay up to date with any new security risks or best practices that may emerge.
* **Use Copilot CLI as a tool, not a replacement**: You should always review and verify commands and code generated by Copilot CLI to ensure they meet your requirements and are free of errors or security concerns.
* **Review commands before execution (CLI)**: Exercise particular caution when Copilot CLI suggests executing commands, especially those that modify or delete files. You are ultimately responsible for the commands you allow the agent to run.
* **Keep CLI tasks well-scoped**: The more clear and well-scoped the prompt you provide, the better the results. Include a clear description of the problem, acceptance criteria, and hints on what files need to be changed.
* **Provide feedback (CLI)**: If you encounter any issues or limitations with Copilot CLI, provide feedback using the `/feedback` command.
* **Validate custom agent behavior (SDK)**: Thoroughly test custom agents, tools, and hooks before deploying applications built with the SDK to production. Ensure that tool configurations and system prompts produce safe, expected behavior.
* **Audit MCP server connections (SDK)**: Only connect to MCP servers that you trust. Review the tools and data that each server exposes and ensure they align with your application's security requirements.
* **Implement safety hooks (SDK)**: Use the SDK's lifecycle hooks to implement guardrails such as content filtering, audit logging, and tool approval workflows in your applications.
* **Scope sessions appropriately (SDK)**: Configure each SDK session with only the tools, agents, and permissions required for the task at hand. Avoid granting broad access when narrow scoping is sufficient.
* **Review BYOK provider policies (SDK)**: If using bring-your-own-key configurations, ensure your chosen model provider's terms of service and data handling policies meet your organization's requirements.
{% ifversion spark %}
* **Keep Spark prompts specific and on topic**: The more specific you can be about the intended behaviors and interactions, the better the output. Incorporating relevant context such as specific scenarios, mockups, or specifications will help Spark understand your intent. Spark incorporates context from previous prompts, so off-topic prompts may hinder performance on subsequent revisions.
* **Use targeted edits in Spark**: Targeted edits allow you to specify elements within your application for focused refinement. Using targeted edits when possible—rather than global prompts—will result in more accurate changes and fewer side effects.
* **Verify Spark's output**: Always use Spark's provided application preview to verify that your application behaves as intended in different scenarios. If you are comfortable with code, review the generated code to ensure it meets your quality standards.
* **Ensure inference capabilities act as intended (Spark)**: If your Spark application uses inference capabilities via the GitHub Models SDK, you are responsible for testing the prompts you create to ensure they produce appropriate results.
{% endif %}

## 11. Learn more about GitHub Copilot agentic features

For additional guidance on the responsible use of Copilot agentic features, we recommend reviewing the following documentation:

* [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review)
* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)
* [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* [AUTOTITLE](/copilot/concepts/agents/github-copilot-app)
{% ifversion spark %}
* [AUTOTITLE](/copilot/tutorials/building-your-first-app-in-minutes-with-github-spark)
* [AUTOTITLE](/copilot/tutorials/building-ai-app-prototypes)
* [AUTOTITLE](/copilot/concepts/copilot-billing/about-billing-for-github-spark)
* [AUTOTITLE](/github-models/responsible-use-of-github-models)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
{% endif %}
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [Copilot Trust Center](https://copilot.github.trust.page/)

### Learn more about responsible AI

* [Microsoft AI principles](https://www.microsoft.com/en-us/ai/responsible-ai)
* [Microsoft responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)
* [Microsoft Azure Learning courses on responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)
