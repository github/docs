---
title: Loading tools on demand with tool search
shortTitle: Tool search
intro: 'Tool search keeps your context small by letting {% data variables.copilot.copilot_cli_short %} load external tools only when a task needs them.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Connecting MCP servers and other external tools to {% data variables.copilot.copilot_cli_short %} is powerful, but every tool you add carries a cost: its definition takes up space in the model's context window, and a long menu of tools makes it harder for the agent to pick the right one. On-demand tool loading (or "tool search") prevents the context window from being cluttered by definitions for tools that the agent doesn't use. The agent starts with just its built-in tools and a way to look up the rest, then loads extra tools only when they're needed to complete a task.

Tool search addresses two problems associated with a growing number of tools:

* **Wasted context.** A few dozen tool definitions can eat 10–20K tokens before the agent has done any work.
* **Degraded tool selection accuracy.** Once several dozen tools are in view at once, the model is more likely to reach for the wrong one.

## What happens during a session

Each time you enter a prompt, the CLI checks the current tool inventory and decides whether to use tool search. Below roughly 30 tools, the savings you get from tool search aren't worth it, so {% data variables.copilot.copilot_cli_short %} skips tool search entirely and just loads everything.

Initially, when tool search is used, only the CLI's built-in tools are loaded. Everything else—MCP tools and other external tools—is held back. The agent can see that these tools exist and roughly what they're for, but their full definitions aren't loaded yet.

When the agent hits a step that needs a tool it doesn't have loaded, it runs a quick search over the available tools and pulls the closest matches into context. Those tools then stick around for the rest of the conversation, so the lookup only happens the first time each one is needed.

That first lookup costs an extra exchange with the model, but you get it back many times over by keeping the context small on every later turn.

### Tools that are always loaded

A handful of tools skip tool search and are ready immediately:

* {% data variables.copilot.copilot_cli_short %}'s built-in tools (grep, glob, bash, edit, and so on).
* Tools from an MCP server you've configured with `deferTools: "never"`. See [Keeping an MCP server's tools always loaded](#keeping-an-mcp-servers-tools-always-loaded) later in this article.
* Tools loaded by a custom agent. See [Configuring tool deferral in custom agents](#configuring-tool-deferral-in-custom-agents) later in this article.

## Disabling tool search

Tool search is enabled by default and activates automatically whenever you're on a supported model and have enough connected tools to make it worthwhile. To disable tool search and go back to loading every tool, set `toolSearch: false` in your personal settings. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#user-settings-copilotsettingsjson).

### Supported models

| Family | Supported versions |
| ------ | ------------------ |
| Claude (Anthropic) | Mythos Preview, Fable, Sonnet 4.0+, Opus 4.0+ (not Haiku) |
| GPT (OpenAI) | GPT-5.4 and later |

On any other model, all tools are loaded up front.

### Keeping an MCP server's tools always loaded

Sometimes you may want a particular MCP server's tools to always be in front of the agent—for example, a server whose tools are used constantly, or one where the extra search step isn't worth it. Each MCP server has a `deferTools` setting that controls this:

* `"auto"` (the default)—the server's tools behave like any other and may be deferred once you're over the threshold.
* `"never"`—the server's tools are always included in the agent's tool list, even while tool search is active for everything else.

The easiest way to set it is by using the `/mcp edit` slash command. In the form for editing the MCP server, switch **Defer Tools** to **Never**. You can also set it directly in `~/.copilot/mcp-config.json`:

```json
{
    "mcpServers": {
        "my-server": {
            "type": "stdio",
            "command": "npx",
            "args": ["-y", "@example/mcp-server"],
            "deferTools": "never",
            "tools": ["*"]
        }
    }
}
```

### Configuring tool deferral in custom agents

When a custom agent lists its tools by name, those tools are always loaded so the agent can immediately use them. That's usually what you want, but if an agent declares a large set of tools and only touches a few of them in a given run, you can hand that list back to tool search so the tools are discovered as needed rather than all loaded at once.

For a Markdown agent (`.github/agents/*.md`), add `deferred-tool-loading: true` to the frontmatter:

```markdown
---
name: my-agent
description: Works with a large catalog of tools
tools:
    - some_mcp_tool
    - another_mcp_tool
    # ...many more
deferred-tool-loading: true
---

Agent instructions here.
```

Keep the following in mind regarding the `deferred-tool-loading` setting:

* It only has an effect when tool search is active (that is, on a supported model with enough tools to cross the threshold).
* It only matters for agents that name their tools. Agents using the `*` wildcard already use tool search.

## Optimizing tools for tool search

Tool search matches what the agent is trying to do against each tool's **name**, its **description**, and its **parameter names and descriptions**. Clear, specific wording makes a tool show up for the right requests:

* Name tools for what they do so that they're easier to find.
* Write descriptions with the words people would actually search for rather than vague ones.
