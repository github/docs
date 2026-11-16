---
title: Extensions for GitHub Copilot
shortTitle: Extensions
intro: 'Extend {% data variables.product.prodname_copilot_short %} with capabilities implemented in code.'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/agents/copilot-cli/about-cli-extensions
category:
  - Learn about Copilot
  - Learn about Copilot CLI
---

Extensions let you implement capabilities that go beyond prompting the agent. For example, in {% data variables.copilot.copilot_cli %}, an extension can add tools and slash commands backed by code running alongside your session.

These extensions are distinct from the retired {% data variables.product.prodname_github_app %}-based {% data variables.product.prodname_copilot_short %} Extensions integration. They are also distinct from IDE extensions, such as the {% data variables.product.prodname_copilot_short %} extension you install in an editor.

## Where you can use extensions

You can use extensions in:

* The {% data variables.copilot.github_copilot_app %}.
* {% data variables.copilot.copilot_cli %}.

For customization options in the {% data variables.copilot.github_copilot_app %}, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app).

{% data reusables.copilot.copilot-cli.cli-extensions-experimental %}

## Choosing an extension scope

Choose an extension's scope based on who needs it:

* **Repository extensions** keep project-specific capabilities with the project so you can share them with collaborators.
* **Personal extensions** provide capabilities for your own workflows.
* **Plugin extensions** are supplied as part of an installed plugin, alongside other customizations.

To create an extension for {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/tutorials/create-an-extension).

## Extensions in {% data variables.copilot.copilot_cli_short %}

An extension for {% data variables.copilot.copilot_cli_short %} is a JavaScript module that runs as a separate Node.js process alongside an interactive session. It connects to the session through the extension SDK bundled with {% data variables.copilot.copilot_cli_short %}.

An extension can add:

* **Tools** that the agent can call while working on your request.
* **Slash commands** that you invoke yourself.
* Session-aware behavior, such as observing events and keeping state across tool calls.

Use an extension when a capability needs code that stays active during the session. For example, an extension can track tool-call timings across a session and expose the totals through a tool.

{% data variables.copilot.copilot_cli_short %} also lets you control whether extensions run and whether the agent can manage them. For the extension modes and their effects, see [Extension modes](/copilot/reference/copilot-cli-reference/cli-command-reference#extension-modes).

## Choosing between extensions and other customizations

The distinction is the capability you need, not just where you install it:

| Need | Start with |
| --- | --- |
| A repeatable workflow expressed as instructions and resources | An agent skill |
| Access to tools exposed by an external service | An MCP server |
| A command at a defined agent lifecycle event | A hook |
| Session-aware tools or slash commands implemented in JavaScript | An extension for {% data variables.copilot.copilot_cli_short %} |
| A distributable bundle of related capabilities | A plugin |

A plugin can distribute extensions, but the surface determines how those extensions are used.

> [!WARNING]
> Extensions for {% data variables.copilot.copilot_cli_short %} execute on your computer with your privileges. Only load extension code that you trust, just as you would for any other script you did not write yourself.

## Next steps

To compare extensions with the other customization options, see [AUTOTITLE](/copilot/concepts/customizations/comparing-customizations).
