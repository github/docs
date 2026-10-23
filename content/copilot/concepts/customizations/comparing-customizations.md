---
title: Comparing Copilot customization features
shortTitle: Comparing customizations
intro: 'Choose the right way to give {% data variables.product.prodname_copilot_short %} guidance, specialized expertise, and access to tools.'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/agents/copilot-cli/comparing-cli-features
category:
  - Learn about Copilot
  - Learn about Copilot CLI
---

## Introduction

You can customize {% data variables.product.prodname_copilot_short %} to follow your conventions, carry out repeatable workflows, or connect to systems beyond your codebase.

This article explains the difference between:

* **Custom instructions**

  These tell {% data variables.product.prodname_copilot_short %} **how to behave** in general. For example, to ensure code it writes follows your coding standards. [Find out more](#custom-instructions).

* **Agent skills**

  These tell {% data variables.product.prodname_copilot_short %} **how to handle a specific kind of task**. For example, to follow your team's process when drafting release notes. [Find out more](#agent-skills).

* **Tools**

  These **provide abilities**. For example, for finding and modifying files, or for interacting with parts of {% data variables.product.github %}. [Find out more](#tools).

* **MCP servers**

  These **add collections of tools** that allow {% data variables.product.prodname_copilot_short %} to interact with external services. [Find out more](#mcp-servers).

* **Hooks**

  These let you **run your own logic at specific points in an agent's workflow**. For example, you can run a script before the agent uses a tool. [Find out more](#hooks).

* **Subagents**

  These **perform delegated work** separately from the main agent. They have their own conversation context, so their intermediate work does not fill the main agent's context window. [Find out more](#subagents).

* **Custom agents**

  These **define specialized roles**, with instructions and tools for particular tasks. For example, a custom agent might act as a React reviewer, a docs writer, or a test generator. [Find out more](#custom-agents).

* **Extensions**

  These **add capabilities implemented in code**. For example, a {% data variables.copilot.copilot_cli_short %} extension can add a tool that tracks session activity. [Find out more](#extensions).

* **Plugins**

  These are **packages** that can deliver preconfigured customizations such as skills, hooks, custom agents, and MCP servers. [Find out more](#plugins).

Support and configuration differ between surfaces. For a support comparison, see [AUTOTITLE](/copilot/reference/customization-cheat-sheet#ide-and-surface-support).

## Custom instructions

Custom instructions are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}, and supported IDEs. The types of instructions available depend on where you use them.

### What are custom instructions?

Custom instructions are persistent guidance that {% data variables.product.prodname_copilot_short %} uses within a defined scope. For example, repository instructions can describe your project's coding conventions and test commands, while personal instructions can describe your communication preferences.

Instructions guide the model, but do not guarantee that it will follow every rule.

### What problem do custom instructions solve?

Custom instructions help you:

* Keep {% data variables.product.prodname_copilot_short %} aligned with your coding conventions and preferences.
* Apply team or organization standards consistently.
* Avoid including repetitive reminders in every prompt.

### When should you use custom instructions?

Use custom instructions for:

* Style and quality rules. For example: "Prefer small pull requests, write tests, and avoid changing public APIs without discussion."
* Repository conventions. For example: "Use `pnpm`, keep changelog entries in `CHANGELOG.md`, and run `pnpm test` before committing."
* Communication preferences. For example: "Explain tradeoffs briefly, then provide the recommended choice."

### When shouldn't you use custom instructions?

Keep them minimal when:

* You only want the behavior for one kind of task. Use a skill instead.
* The instructions are so detailed that they distract from the immediate task. Use a skill or a custom agent for specialized guidance.

### Find out more about custom instructions

* [AUTOTITLE](/copilot/concepts/prompting-and-context/custom-instructions)
* [AUTOTITLE](/copilot/reference/custom-instructions-support)

## Agent skills

Agent skills are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, and agent mode in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and {% data variables.jetbrains.prodname_jetbrains_ides %}.

### What is a skill?

A skill is a folder containing a `SKILL.md` file with instructions for a specific kind of task. Its name and description help {% data variables.product.prodname_copilot_short %} decide when to load those instructions.

Skills can also include supporting resources, such as templates and scripts the agent can run.

### What problem does a skill solve?

Skills help you:

* Standardize how {% data variables.product.prodname_copilot_short %} performs tasks in a specific context, such as a code review.
* Provide instructions when they are relevant, without adding them to every interaction.
* Avoid filling the context window with instructions unrelated to the current task.

### When should you use a skill?

Use a skill when you want:

* A repeatable workflow. For example, check that user-facing documentation is updated when frontend code changes.
* A consistent output format. For example, draft release notes using your team's template.
* A workflow you sometimes need, but not always. For example, follow a detailed refactoring process during a migration.

### When shouldn't you use a skill?

Choose another customization when:

* The guidance should apply broadly to your work. Use custom instructions instead.
* You need access to an external system. Use an MCP server to provide the tools, which a skill can then describe how to use.
* You need a reusable specialist with a particular toolset. Consider a custom agent.

### Find out more about agent skills

See [AUTOTITLE](/copilot/concepts/customizations/agent-skills).

## Tools

Tools are available to agents in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, and supported IDEs. The available tools and permission controls depend on the surface.

### What is a tool?

A tool is an ability that {% data variables.product.prodname_copilot_short %} uses to get something done, such as searching files, viewing file contents, editing, or running commands. Some tools are built in, and others can be added through MCP servers or extensions.

### What problem do tools solve?

Tools let an agent:

* Gather context by reading and searching.
* Make changes by editing files.
* Execute commands and validate the results.

### When are tools used?

You typically do not call tools directly. {% data variables.product.prodname_copilot_short %} chooses tools to carry out your request, subject to the permissions and controls of the surface you are using.

You will see tools used when you:

* Ask an agent to search a repository, update a file, or run tests.
* Ask for work that requires access to an external service through an MCP server.
* Give an agent a task that benefits from delegation to a subagent.

Before adding an integration, check whether the agent's existing tools already meet your needs.

## MCP servers

MCP servers are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.jetbrains.prodname_jetbrains_ides %}, Xcode, and Eclipse. Configuration and authentication options depend on the surface.

### What is an MCP server?

An MCP server is a service that allows AI applications, such as {% data variables.product.prodname_copilot_short %}, to connect to external data sources and tools.

For example, you could add an MCP server that provides tools for interacting with an online calendar or a support ticketing system.

### What problem do MCP servers solve?

MCP servers help when the built-in tools are not enough. They can:

* Connect {% data variables.product.prodname_copilot_short %} to external systems.
* Add purpose-built tools for working with APIs, databases, or other services.
* Provide access to information outside your repository.

### When should you use an MCP server?

Use an MCP server when you need:

* Information from an external system. For example: "How many support tickets have been opened this month for Product X?"
* Actions in another service. For example: "Add a comment to the support ticket summarizing this fix."

### When shouldn't you use an MCP server?

Avoid adding an MCP server when the built-in tools already cover your needs.

### Find out more about MCP servers

See [AUTOTITLE](/copilot/concepts/customizations/mcp).

## Hooks

Hooks are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, and {% data variables.product.prodname_vscode %}. Supported events and controls depend on the surface.

### What is a hook?

A hook runs a shell command you define at a particular point in an agent's workflow. For example, a hook can run before a tool is used or when a session ends.

Unlike skills and custom instructions, which guide the model through prompts, hooks execute code at defined events.

### What problem do hooks solve?

Hooks help when you need more control over agent actions, such as:

* Checking a tool request before allowing it to run.
* Logging tool use or session activity.
* Running custom validation at a supported event.

### When should you use hooks?

Use hooks when you want:

* Tool checks. For example, check a proposed command against an allowlist before it runs.
* Session automation. For example, record when an agent session starts or ends.
* Custom validation. For example, check whether a tool request would change a protected path.

Use the event and configuration reference for your surface rather than assuming that a hook works unchanged everywhere.

### When shouldn't you use hooks?

Choose another customization when:

* You just need workflow instructions. Use a skill.
* You want persistent preferences and standards. Use custom instructions.
* You need access to external tools. Use an MCP server.

### Find out more about hooks

* [AUTOTITLE](/copilot/concepts/customizations/hooks)
* [AUTOTITLE](/copilot/reference/hooks-reference)

## Subagents

Subagents are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.product.prodname_vscode %}, {% data variables.jetbrains.prodname_jetbrains_ides %}, Xcode, and Eclipse.

### What is a subagent?

A subagent is an agent that the main agent delegates a specific piece of work to. It works in its own conversation context and reports its results back to the main agent.

A subagent can use a built-in agent or a custom agent profile. You do not need to define a custom agent for every delegated task.

### What problem do subagents solve?

Subagents help an agent:

* Keep the main conversation focused by handling a subtask in separate context.
* Run independent tasks in parallel where supported.
* Delegate specialist work using a custom agent profile.

### When are subagents used?

Subagents are useful for:

* Codebase exploration. For example, find all endpoints in an API.
* Command execution. For example, run a test suite and summarize failures.
* Reviewing changes. For example, review staged changes while the main agent works on another part of the task.
* Specialist work. For example, delegate a review to a custom documentation agent.

Selecting a custom agent for your main session is different from delegating work to it as a subagent.

### Find out more about subagents

* [AUTOTITLE](/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/delegating-and-parallelizing-work-with-agents)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents)

## Custom agents

Custom agents are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.jetbrains.prodname_jetbrains_ides %}, Eclipse, and Xcode. Supported profile properties depend on the surface.

### What is a custom agent?

A custom agent defines a specialist role, with instructions and available tools for a particular kind of work. You can think of it as a persona that {% data variables.product.prodname_copilot_short %} can adopt, such as a React reviewer or a docs writer.

You define a custom agent in a Markdown file with YAML frontmatter. Its profile describes its purpose, gives it instructions, and can restrict its available tools. In supported environments, it can also configure MCP servers.

### What problem do custom agents solve?

Custom agents help when you need:

* Specialist guidance applied consistently to particular tasks.
* A different set of tools for different kinds of work.
* A reusable role you can select for a session or use for delegated work.

Separate context is a benefit of running an agent as a subagent, not a requirement for using a custom agent.

### When should you use a custom agent?

Use a custom agent when you want:

* A specialized reviewer or helper. For example, a React reviewer that checks your team's component patterns.
* A constrained toolset. For example, a reviewer with tools for reading and searching files, but not editing them.
* A consistent approach. For example, a documentation agent that follows your writing and review standards.

### When shouldn't you use a custom agent?

Choose a simpler option when:

* You only need task-specific instructions and resources. A skill may be enough.
* You do not need specialization and the default agent performs the task well.

### Find out more about custom agents

* [AUTOTITLE](/copilot/concepts/customizations/custom-agents)
* [AUTOTITLE](/copilot/reference/custom-agents-configuration)

## Extensions

Extensions are supported in the {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli_short %}. The examples below describe extensions for {% data variables.copilot.copilot_cli_short %}.

### What is an extension?

An extension adds capabilities implemented in code. In {% data variables.copilot.copilot_cli_short %}, an extension is a JavaScript module that runs alongside an interactive session and can add tools, slash commands, and session-aware behavior.

These are distinct from IDE extensions and the retired {% data variables.product.prodname_github_app %}-based {% data variables.product.prodname_copilot_short %} Extensions integration.

### What problem do extensions solve?

Extensions let you build capabilities that need more than instructions or configuration. For example, a {% data variables.copilot.copilot_cli_short %} extension can keep state across tool calls and make it available through a custom tool.

### When should you use an extension?

Use an extension when you need:

* Your own session-aware tools. For example, track tool-call timings across a {% data variables.copilot.copilot_cli_short %} session and expose the totals to the agent.
* A slash command backed by code. For example, add a command that summarizes information collected during a {% data variables.copilot.copilot_cli_short %} session.

### When shouldn't you use an extension?

Choose another customization when:

* Instructions and resources are enough. Use a skill.
* An existing MCP server provides the external tools you need.
* You only need to run a command at a defined event. Use a hook.

### Find out more about extensions

See [AUTOTITLE](/copilot/concepts/customizations/extensions).

## Plugins

Plugins are supported in the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, and {% data variables.product.prodname_vscode %}. A plugin's supported components depend on the surface.

### What is a plugin?

A plugin is an installable package that delivers a bundle of capabilities. For example, it can include skills, custom agents, hooks, and MCP server configurations.

A plugin packages customizations, but does not replace their individual purposes.

### What problem do plugins solve?

Plugins help you:

* Add related capabilities without configuring each piece separately.
* Distribute a set of customizations to your team or the public.
* Install and update customizations without manually copying files.

### When should you use a plugin?

Use a plugin when:

* You want a team-wide bundle. For example, share incident-response skills, a review agent, and MCP server configuration for internal services.
* You want to install and maintain related capabilities together.

### When shouldn't you use a plugin?

Start with individual customizations when:

* You are experimenting locally and do not need distribution.
* You only need a small workflow. A single skill may be simpler.

### Find out more about plugins

See [AUTOTITLE](/copilot/concepts/customizations/plugins).

## Putting it together: choosing the right option

Start with the smallest customization that solves your problem. These features can work together: a skill can describe a workflow that uses MCP tools, and a plugin can distribute both.

| Requirement | Start with |
| --- | --- |
| I want {% data variables.product.prodname_copilot_short %} to follow our repository conventions. | Custom instructions |
| I want a repeatable workflow for a particular kind of task. | Agent skills |
| I want an agent to search my repository, change files, or run tests. | Its existing tools |
| I need tools provided by an external service. | An MCP server |
| I want checks or automation around tool use and session events. | Hooks |
| I want a focused subtask handled separately from the main conversation. | Subagents |
| I want a reusable specialist with a particular approach and toolset. | A custom agent |
| I need to build my own session-aware tools in {% data variables.copilot.copilot_cli_short %}. | An extension |
| I want to install or share related customizations together. | A plugin |

## Next steps

For configuration locations and surface support, see [AUTOTITLE](/copilot/reference/customization-cheat-sheet).
