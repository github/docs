---
title: Copilot customization cheat sheet
shortTitle: Customization cheat sheet
intro: 'Compare the different customization options for {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot
contentType: reference
---

{% data variables.product.prodname_copilot %} offers several customization features that let you tailor its behavior to your workflow, your team's standards, and your project's needs. Use the tables below to find the right one for your use case.

## Feature overview

This table shows what each customization feature is and where it lives.

| Feature | What it is | Filename and location |
|---------|-----------|-------------------|
| [Custom instructions](/copilot/concepts/prompting/response-customization) | Always-on context that automatically applies to every interaction within its defined scope | `.github/copilot-instructions.md` (repo-wide), `.github/instructions/*.instructions.md` (path-specific), `AGENTS.md` (third-party agents), or personal/org settings via UI on {% data variables.product.github %} |
| [Prompt files](/copilot/concepts/prompting/response-customization?tool=vscode#about-prompt-files) | Reusable, standalone prompt template with input variables | `.github/prompts/*.prompt.md` |
| [{% data variables.copilot.custom_agents_caps_short %}](/copilot/concepts/agents/coding-agent/about-custom-agents) | Specialist persona with its own instructions, tool restrictions, and context | `.github/agents/AGENT-NAME.md` (repo), `agents/AGENT-NAME.md` in `.github-private` repo (org/enterprise), or user profile |
| [{% data variables.copilot.subagents_caps_short %}](/copilot/how-tos/chat-with-copilot/chat-in-ide#using-subagents) | Separate agent spawned by the main agent to handle delegated work in an isolated context | N/A (runtime process, not a user-configured file) |
| [Agent skills](/copilot/concepts/agents/about-agent-skills) | Folder of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} loads when relevant to a task | `.github/skills/<skill-name>/SKILL.md` (project) or `~/.copilot/skills/<skill-name>/SKILL.md` (personal) |
| [MCP servers](/copilot/concepts/context/mcp) | Connection to external systems, APIs, and databases | `mcp.json` (path varies by IDE), repo settings on {% data variables.product.github %} ({% data variables.copilot.copilot_coding_agent_short %}), or `mcp-servers` property in {% data variables.copilot.copilot_custom_agent_short %} configurations |

## Usage comparison

This table helps you decide which customization feature to use.

| Feature | How to trigger | Best for | Example use cases |
|---------|---------------|-------------|-------------------|
| [Custom instructions](/copilot/concepts/prompting/response-customization) | Automatic | Standards, guidelines, or expectations that apply broadly across a context | Enforce coding standards, accessibility rules, review checklists |
| [Prompt files](/copilot/concepts/prompting/response-customization?tool=vscode#about-prompt-files) | Manual: reference directly in chat or use the prompt file picker | Focused single tasks you run once with different inputs each time | Generate unit tests, run a code review checklist |
| [{% data variables.copilot.custom_agents_caps_short %}](/copilot/concepts/agents/coding-agent/about-custom-agents) | Manual: select from the agent dropdown in your IDE, on {% data variables.product.github %}, or in {% data variables.copilot.copilot_cli_short %} | Projects or processes with distinct stages that need specialized capabilities or strict handoffs | React reviewer agent, read-only auditing agent |
| [{% data variables.copilot.subagents_caps_short %}](/copilot/how-tos/chat-with-copilot/chat-in-ide#using-subagents) | Automatic, or reference a {% data variables.copilot.subagent_short %} directly in your prompt | Complex subtasks that should run in isolation from the main agent | Codebase research, running test suites |
| [Agent skills](/copilot/concepts/agents/about-agent-skills) | Automatic: chosen by {% data variables.product.prodname_copilot_short %} when relevant to your prompt | Multi-step workflows with bundled assets that should be loaded as needed | {% data variables.product.prodname_actions %} failure debugging, deployment procedures, release note drafting |
| [MCP servers](/copilot/concepts/context/mcp) | Automatic, or ask for a specific tool by name | Tasks that require access to external tools or real-time data | Manage issues and PRs ({% data variables.product.github %} MCP server), automate browser testing (Playwright MCP server) |

## IDE and surface support

This table shows which customization features are supported in each IDE and surface. For the full {% data variables.product.prodname_copilot_short %} feature matrix, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix#features-by-ide).

{% data variables.product.company_short %} recommends using the latest stable IDE, {% data variables.copilot.copilot_cli_short %}, and {% data variables.product.prodname_copilot_short %} extension versions to get the best {% data variables.product.prodname_copilot_short %} experience.

**Key:**

* ✓ = supported
* ✗ = not supported
* P = under preview

| Feature | {% data variables.product.prodname_vscode_shortname %} | {% data variables.product.prodname_vs %} | JetBrains IDEs | Eclipse | Xcode | <span style="white-space: nowrap;">{% data variables.product.prodname_dotcom_the_website %}</span> | {% data variables.copilot.copilot_cli_short %} |
|---------|:-------:|:-------------:|:---------:|:-------:|:-----:|:-------:|:---:|
| Custom instructions | ✓ | ✓ | P | P | P | ✓ | ✓ |
| Prompt files | ✓ | ✓ | P | ✗ | P | ✗ | ✓ |
| {% data variables.copilot.custom_agents_caps_short %} | ✓ | ✗ | P | P | P | ✓ | ✓ |
| {% data variables.copilot.subagents_caps_short %} | ✓ | ✗ | P | P | P | ✗ | ✓ |
| Agent skills | ✓ | ✗ | P | ✗ | ✗ | ✓ | ✓ |
| MCP servers | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

For a detailed breakdown of which types of custom instructions are supported in each IDE and surface, see [AUTOTITLE](/copilot/reference/custom-instructions-support).

## Further reading

* [AUTOTITLE](/copilot/tutorials/customization-library)—a curated collection of examples
