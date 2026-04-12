---
title: About custom agents
shortTitle: Custom agents
intro: '{% data variables.copilot.custom_agents_caps_short %} enhance {% data variables.product.prodname_copilot_short %} with assistance tailored to your needs.'
versions:
  feature: copilot
category:
  - Learn about Copilot
contentType: concepts
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.copilot.copilot-cli.custom-agents-about-intro %}

In addition to any {% data variables.copilot.custom_agents_short %} you define yourself, {% data variables.product.prodname_copilot_short %} includes a set of pre-built {% data variables.copilot.custom_agents_short %}. See [Built-in agents](#built-in-agents).

{% data reusables.copilot.copilot-cli.custom-agents-about-details %}

## Built-in agents

In addition to the main {% data variables.product.prodname_copilot_short %} agent, which processes your request when you submit a prompt, {% data variables.copilot.copilot_cli_short %} includes the following built-in agents which the main agent can run as subagents to assist with common development tasks. These agents are optimized for efficiency and accuracy, leveraging the capabilities of the underlying language models and tools to provide high-quality assistance in their respective domains.

{% data variables.product.prodname_copilot_short %} will automatically use an appropriate built-in agent based on your prompt and the current context. For example, the prompt `How does authentication work in this codebase?` will typically trigger the Explore agent, and using the `/research` slash command will trigger the Research agent.

* **explore** — A fast, lightweight codebase exploration agent. It uses code intelligence, grep, glob, view, and shell tools to search files and understand code structure. It will not change any files, so can be called in parallel to other subagents being run by the main {% data variables.product.prodname_copilot_short %} agent. It has read-only access to GitHub MCP server tools.

* **task** — A command execution agent that runs development commands (tests, builds, linters, formatters, dependency installs) and reports results efficiently. It returns a brief summary on success, and full output on failure, keeping the main context clean. It has access to all of the tools the parent agent can use (excluding some that are not appropriate in a subagent context), with the same permissions granted or denied.

* **general-purpose** — This agent essentially has all of the same capabilities as the main {% data variables.product.prodname_copilot_short %} agent. The main agent can run the general-purpose agent as a subagent to assist with any task that requires a separate context window, or to run in parallel when appropriate.

* **code-review** — Reviews code changes with an extremely high signal-to-noise ratio. This agent analyzes staged/unstaged changes and branch diffs, surfacing only issues that genuinely matter: bugs, security vulnerabilities, race conditions, memory leaks, and logic errors. It never comments on style or formatting. It will not make any changes to files.

* **research** — This agent operates as a staff-level software engineer and research specialist. It provides exhaustive, meticulously researched answers about codebases, APIs, libraries, and software architecture. It uses {% data variables.product.github %} search/exploration tools, web fetch/search, and local tools. Unlike the other agents, the research agent can only be invoked by using the `/research` slash command. It cannot be automatically triggered by the main agent.

## Running agents as subagents

One of the benefits of using custom agents you have defined yourself—or the built-in agents—is that the main {% data variables.product.prodname_copilot_short %} agent can run them as subagents with a separate context window. This means that your custom agent, or built-in agent, can focus on a specific subtask without cluttering the context window of the main agent.

Where appropriate, tasks performed by subagents can be run in parallel, allowing the overall task to be completed more quickly.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/comparing-cli-features).

## Next steps

To create your own {% data variables.copilot.custom_agents_short %}, see:

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)
