---
title: Comparing GitHub Copilot CLI customization features
shortTitle: Comparing CLI features
intro: 'Find out about the various ways you can customize {% data variables.product.prodname_copilot_short %}: what they do, and when to use them.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category:
  - Learn about Copilot
---

## Introduction

{% data variables.copilot.copilot_cli_short %} is a terminal-based AI agent that can answer questions, plan work, and complete tasks on your behalf. It’s designed to be highly extensible, and there are various ways in which you can customize its behavior and extend its capabilities.

This article explains the difference between:

* **Custom instructions**

  These tell {% data variables.product.prodname_copilot_short %} **how to behave** in general. For example, to ensure any code that {% data variables.product.prodname_copilot_short %} writes conforms to your coding standards. [Find out more](#custom-instructions).

* **Skills**

  These tell {% data variables.product.prodname_copilot_short %} **how to handle a specific kind of task**. For example, to use a particular tool when working on a specific type of task. [Find out more](#skills).

* **Tools**

  These **provide abilities**. For example, for finding and modifying files, or for interacting with parts of {% data variables.product.github %}. [Find out more](#tools).

* **MCP servers**

  These **add collections of tools** that allow {% data variables.product.prodname_copilot_short %} to interact with external services. [Find out more](#mcp-servers).

* **Hooks**

  These let you **run your own logic at specific lifecycle moments**. For example, you can run a specific script every time a CLI session starts or ends. [Find out more](#hooks).

* **Subagents**

  These are **delegated agent processes**, tied to the main agent and used to perform specific tasks separately from the main agent process. They have their own context window, which can be populated without affecting the main agent's context. [Find out more](#subagents).

* **Custom agents**

  These are **definitions of specialized abilities**, designed to perform specific tasks. The main CLI agent can delegate a task to a subagent, using a custom agent profile, to apply specialist knowledge and a particular approach to the task. For example, a custom agent might perform the role of a React reviewer, a docs writer, a security auditor, or a test generator. [Find out more](#custom-agents).

* **Plugins**

  These are **packages** that can deliver preconfigured customizations such as skills, hooks, custom agents, and MCP servers. [Find out more](#plugins).

## Custom instructions

### What are custom instructions?

**Custom instructions** are persistent guidance that the {% data variables.copilot.copilot_cli_short %} loads from instruction files at the start of a session.

{% data variables.product.prodname_copilot_short %} will find and load instruction files from a number of default locations in the repository, such as `AGENTS.md` and `.github/copilot-instructions.md`, or from your home directory at `$HOME/.copilot/copilot-instructions.md`.

You can use the `--no-custom-instructions` flag to avoid loading these instructions.

### What problem do custom instructions solve?

Custom instructions help you:
* Keep {% data variables.product.prodname_copilot_short %} aligned with your coding conventions and preferences.
* Apply team or organization standards consistently.
* Avoid having to include repetitive reminders to {% data variables.product.prodname_copilot_short %} in every prompt.

### When should you use custom instructions?

Use custom instructions for:

* Style and quality rules

  Example: "Prefer small PRs, write tests, and avoid changing public APIs without discussion."

* Repository conventions

  Example: "Use `pnpm`, keep changelog entries in `CHANGELOG.md`, run `pnpm test` before committing."

* Communication preferences

  Example: “Explain tradeoffs briefly, then provide the recommended choice.”

### When shouldn't you use custom instructions?

Avoid or keep them minimal when:

* You only want the behavior in one workflow (use a **skill** instead).
* Your instructions are so large/specific they distract {% data variables.product.prodname_copilot_short %} from the immediate task (prefer a **skill** or a **custom agent**).

### Find out more about custom instructions

See [AUTOTITLE](/copilot/how-tos/copilot-cli/add-custom-instructions).

## Skills

### What is a skill?

A **skill** is, minimally, a Markdown file containing instructions that {% data variables.product.prodname_copilot_short %} can use to perform tasks in a specific context. The name and skill description allow {% data variables.product.prodname_copilot_short %} to determine whether it should use the skill for a given task. If it decides to use the skill, it will load the instructions and follow them to complete the task.

Skills can optionally reference other files, stored within the skill directory. These can include scripts that {% data variables.product.prodname_copilot_short %} can run when the skill is used.

### What problem does a skill solve?

Skills help you:
* Standardize how {% data variables.product.prodname_copilot_short %} performs tasks in a specific context (for example, when performing a code review).
* Provide "just-in-time" instructions without permanently changing {% data variables.product.prodname_copilot_short %}'s behavior.
* Avoid overloading {% data variables.product.prodname_copilot_short %}'s context window with instructions that are not relevant to the current task.

### How do you access skills?

You can manually invoke a skill by using a slash command. For example, `/Markdown-Checker check README.md`. Use `/skills list` to list the available skills.

{% data variables.copilot.copilot_cli_short %} automatically invokes skills when it detects one that is relevant to the current task.

### When should you use a skill?

Use a skill when you want:

* A repeatable set of instructions or functionality to be available for a type of task.

  Example: a documentation skill that checks that user-facing documentation is updated when frontend code is changed.

* A consistent output format.

  Example: a "release note draft" skill that ensures {% data variables.product.prodname_copilot_short %} uses a template to create a release note.

* A workflow you sometimes need, but not always.

  Example: a “deep refactor” skill you only enable during migrations.

### When shouldn't you use a skill?

Avoid skills when:

* The guidance should **apply to everything** you do (use **custom instructions** instead).
* You need new capabilities (you may need an **MCP server** to add tools, or a **custom agent** for specialization).

### Find out more about agent skills

See [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

## Tools

### What is a tool?

A **tool** is an ability that {% data variables.product.prodname_copilot_short %} uses to get something done—like searching files, viewing file contents, editing, running a task, or invoking a skill. Some tools are built in, and others can be added through MCP servers.

### What problem do tools solve?

Tools let the CLI:

* Gather accurate context (using read/search tools).
* Make changes safely (using edit tools).
* Execute commands and validate outcomes (potentially using subagents).

### When should you use tools?

You typically don't call tools directly—{% data variables.product.prodname_copilot_short %} decides to use tools as needed. You can allow or deny use of tools, either for a specific task, for the current session, or for all of your {% data variables.copilot.copilot_cli_short %} sessions.

You’ll see {% data variables.product.prodname_copilot_short %} using tools when you:

* Ask {% data variables.product.prodname_copilot_short %} to search the repository for something, update a file, or run tests.
* Invoke a skill—which triggers the `skill` tool.
* Ask {% data variables.product.prodname_copilot_short %} to perform a task that requires it to use a tool supplied by an MCP server.
* Task {% data variables.product.prodname_copilot_short %} to complete a complex task and it decides to delegate to a subagent—which triggers the `task` tool.

### Find out more about allowing or denying tools

See [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli#allowed-tools).

## MCP servers

### What is an MCP server?

An **MCP server** is a service that allows AI applications, such as {% data variables.copilot.copilot_cli_short %}, to connect to external data sources and tools.

Adding an MCP server to {% data variables.copilot.copilot_cli_short %} provides additional capabilities, by allowing you to use tools supplied by that MCP server. For example, you could add an MCP server that provides tools for interacting with an online calendar application, or a support ticketing system.

### What problem do MCP servers solve?

MCP servers help when the built-in tools aren’t enough. They can:

* Connect {% data variables.copilot.copilot_cli_short %} to external systems.
* Add purpose-built tools (for example, for working with APIs, databases, or image generation).
* Standardize safe access patterns for non-repository resources.

### When should you use an MCP server?

Use an MCP server when you need:

* Integration with external data or systems.

  Example: `How many support tickets have been opened this month for Product X?`

* Domain-specific actions that you want the CLI to perform on your behalf.

  Example: `Message the bug-watch channel: Only 2 support tickets raised this month for Product X.`

### When shouldn't you use an MCP server?

Avoid adding MCP servers when:

* Built-in tools already cover your needs.

### Find out more about MCP servers

See [AUTOTITLE](/copilot/concepts/context/mcp).

## Hooks

### What is a hook?

**Hooks** allow you to specify that, at a given point in a session lifecycle, {% data variables.copilot.copilot_cli_short %} will execute a shell command you have defined.

| Hook | When it runs |
| ---- | ------------ |
| `preToolUse` / `postToolUse` | Before/after a tool runs. |
| `userPromptSubmitted` | When a user submits a prompt. |
| `sessionStart` / `sessionEnd` | At the start/end of a session. |
| `errorOccurred` | When an error occurs. |
| `agentStop` | When the main agent stops without an error. |
| `subagentStop` | When a subagent completes. |

### What problem do hooks solve?

Hooks help when you want **programmable control or observability** around {% data variables.copilot.copilot_cli_short %} behavior, such as:

* **Enforcing guardrails**—block or warn before certain tools run.
* **Adding logging/telemetry**
* **Customizing retry/abort behavior on recoverable errors**
* **Adding "policy" checks**—for example, to prevent edits to protected paths.
* **Intercepting the moment a subagent finishes**—before results return to the parent agent.

Hooks are useful when you need more control than skills or custom instructions can provide. While skills and instructions guide {% data variables.product.prodname_copilot_short %}'s behavior through prompts, hooks ensure that operations you have defined will be performed at specific moments—for example, to block a tool from running, or to log activity when a session ends.

### When should you usehooks?

Use hooks when you want:

* **Tool guardrails**

  * Example: before `bash` runs, require that the specific command matches an allowlist.
  * Example: before `edit` runs, block changes under `infra/` unless a ticket ID is present.

* **Session lifecycle automation**

  * Example: when the agent stops, archive the transcript of the session to a storage location.

* **Error handling policy**

  * Example: on rate limit errors, automatically choose "retry" with a capped retry count.

* **Subagent workflow control**

  * Example: when a subagent finishes, validate its output before passing results back to the main agent.

### When shouldn't you use hooks?

Avoid hooks when:

* You just need consistent prompting or workflow instructions (use **skills**).
* You want persistent preferences and standards (use **custom instructions**).
* You need new external capabilities (use **MCP servers** and tools).
* Maintaining configuration that can affect every session may be problematic for you.

### Find out more about hooks

See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-hooks).

## Subagents

### What is a subagent?

A **subagent** is the execution of a separate AI agent that the main agent of a {% data variables.copilot.copilot_cli_short %} session spins up to do a specific piece of work.

{% data variables.copilot.copilot_cli_short %} uses a subagent when the main agent decides that delegating a chunk of work to a separate agent is the best way to complete the user’s request.

### What problem do subagents solve?

Subagents help {% data variables.product.prodname_copilot_short %}:

* Keep the context window of the main agent in a CLI session focused, by offloading a chunk of work to a separate agent.
* Parallelize work, where necessary, by running certain tasks in the background.
* Run a custom agent separately from the main agent, performing specialist work with a different approach to the work carried out by the main agent.

### When are subagents used?

{% data variables.product.prodname_copilot_short %} is likely to use a subagent for:

* Codebase exploration

  For example, listing all endpoints in an API.

* Command execution for complex tasks

  For example, running a test suite, or building a large project and analyzing the results.

* Reviewing changes

  For example, reviewing staged changes and identifying potential security issues.

* Complex multi-step work

  For example, implementing a feature with several changes.

* For using custom agents

  If you’ve defined a custom agent and it’s eligible for inference (`infer` is not set to `false`), {% data variables.product.prodname_copilot_short %} may choose to delegate work to that custom agent by spinning up a subagent with the custom agent's configuration.

## Custom agents

### What is a custom agent?

**Custom agents** are a way that you can provide {% data variables.product.prodname_copilot_short %} with specialist knowledge about a particular subject, and define a particular approach that you want {% data variables.product.prodname_copilot_short %} to use when working in that area. You can think of a custom agent as a "persona" that {% data variables.product.prodname_copilot_short %} can adopt when working on certain tasks.

You define a custom agent in a Markdown file with YAML frontmatter. The file contains:

* A description of the agent's role and expertise
* A list of allowed tools (or all tools)
* Optional MCP server connections
* An optional `infer` setting—when enabled, {% data variables.product.prodname_copilot_short %} will automatically delegate to this agent when it detects a task that matches the agent's specialty.

### What problem do custom agents solve?

Custom agents help when you need:

* Specialist knowledge to be applied consistently in a particular context.
* Different tool permissions for different work, as defined in the custom agent configuration.
* To allow the main agent's context window to stay focused on the main task, with the custom agent's own context window being used for the specialist work it performs.

### When should you use a custom agent?

Use a custom agent when you want:

* A specialized reviewer or helper

  Example: Create a "react-reviewer" custom agent that focuses on work involving React patterns.

* Safer permissions

  Example: A custom agent that can only `view/grep/glob` (read-only) for auditing.

* Optional auto-delegation

  Example: Set `infer: true` in the custom agent configuration so that {% data variables.product.prodname_copilot_short %} can automatically use this custom agent when appropriate.

### When shouldn't you use a custom agent?

Avoid custom agents when:

* You only need guidance text (a **skill** can be a lighter-weight solution).
* You don't need specialization and the default agent performs tasks well.

### Find out more about custom agents

See [AUTOTITLE](/copilot/reference/custom-agents-configuration).

## Plugins

### What is a plugin?

A **plugin** is an installable package that can deliver a bundle of functionality to {% data variables.product.prodname_copilot_short %}. A plugin can include any combination of the other customization features. For example, skills, custom agents, hooks, and MCP server configurations.

{% data variables.product.prodname_copilot_short %} includes plugin management commands (install, update, list, uninstall) and supports installing from a marketplace or directly from a GitHub repository.

### What problem do plugins solve?

Plugins help you:

* Easily add a bundle of functionality to {% data variables.product.prodname_copilot_short %} without having to manually configure each piece.
* Package and distribute a custom configuration—potentially a combination of skills, custom agents, hooks, and MCP servers—to your team, or to the public.
* Alter available functionality without having to manually copy files into directories.

### When should you use a plugin?

Use a plugin when:

* You want a team-wide bundle

  Example: A company-wide engineering plugin that includes:

  * Skills for incident response.
  * A custom agent for code review.
  * An MCP server for internal services.

* You want easy installation and updates

  Example: Install a plugin initially, then update it regularly using `/plugin update PLUGIN-NAME`.

### When shouldn't you use a plugin?

Avoid plugins when:

* You're experimenting locally and don't need distribution (use local skills, custom instructions, or custom agents).
* You only need a small one-off workflow. A single skill file may be simpler.

## Putting it together: choosing the right option

| Requirement | Best option |
|---|---|
| I want {% data variables.product.prodname_copilot_short %} to always follow our repository conventions.  | **Custom instructions** |
| I want a repeatable workflow I can invoke on demand. | **Skills** |
| I want {% data variables.product.prodname_copilot_short %} to answer questions and carry out work in my repository. | {% data variables.product.prodname_copilot_short %} requests permission to use the appropriate **tools** |
| I want guardrails, policy, or automation around tool use and session events. | **Hooks** |
| I need {% data variables.product.prodname_copilot_short %} to be able to use tools provided by an external service. | **MCP servers** |
| When working on particular tasks, I want {% data variables.product.prodname_copilot_short %} to operate as a specialist with a constrained toolset. | **Custom agent** |
| I want {% data variables.product.prodname_copilot_short %} to carry out a complex task on my behalf. | {% data variables.product.prodname_copilot_short %} automatically uses **subagents** when appropriate. |
| I want to add a package of functionality to {% data variables.copilot.copilot_cli_short %} without configuring it manually myself. | **Plugin** |
