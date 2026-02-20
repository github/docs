---
title: Overview of customizing {% data variables.copilot.copilot_cli %}
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: "{% data variables.copilot.copilot_cli_short %} works best when customized for your specific project and workflow."
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Configure Copilot
---

You can download and install {% data variables.copilot.copilot_cli_short %}, and start using it straight away, without any additional configuration. However, you'll find that you can improve {% data variables.product.prodname_copilot_short %}'s responses if you spend a little time providing it with guidelines and context, and giving it access to tools that are relevant to your project. This article introduces the various ways in which you can customize {% data variables.copilot.copilot_cli_short %}.

## Custom instructions

You can provide {% data variables.product.prodname_copilot_short %} with instructions for how it should respond. Whenever you ask {% data variables.product.prodname_copilot_short %} a question, or task it to perform some work, a copy of these instructions is added to your prompt. This allows you, for example, to provide details of your project's coding standards, without having to manually tell {% data variables.product.prodname_copilot_short %} about them each time you start a conversation.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).

## Hooks

Hooks let you run your own shell commands at key points during a {% data variables.copilot.copilot_cli_short %} session. By defining hooks, you can automate specific operations to be triggered when certain events occur: such as the start or end of a session, whenever someone submits a prompt, after the agent completes a task, or when an error occurs.

For example, you could set up a hook to automatically run tests after {% data variables.product.prodname_copilot_short %} makes changes to code files.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks).

## Skills

Skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load to improve its performance on specialized tasks. By adding skills to your project, you can give {% data variables.product.prodname_copilot_short %} extra knowledge or tools for particular workflows, technologies, or domains.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-skills).

## Custom agents

Custom agents let you define specific expertise and behavior for the CLI when it works on a particular type of task. Custom agents are run as subagents—separately to the main agent that responds to a prompt—with their own context window. This allows {% data variables.product.prodname_copilot_short %} to offload work to custom agents without cluttering the main agent's context window, and to use the expertise of a custom agent when it's a good fit for the task at hand.

You can define the toolset available to a custom agent, so that the tools the agent can use are appropriate to its role. For example, a custom agent that works as a reviewer would typically not be permitted to make changes to code files.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

## MCP servers

The Model Context Protocol (MCP) allows you to add external tools and data sources to {% data variables.copilot.copilot_cli_short %}. By adding MCP servers to {% data variables.copilot.copilot_cli_short %} you can add functionality such as the ability to:

* Query databases
* Access issue tracking systems
* Integrate with CI/CD pipelines
* Generate design diagrams
* Search specialist documentation sources
* Book tickets online
* Integrate with a calendar application

For more information, see [AUTOTITLE](/copilot/concepts/context/mcp).

## Plugins

{% data variables.copilot.copilot_cli_short %} plugins are distributable packages that provide a simple way to extend the functionality of the CLI.

They bundle multiple customization components together into a single installable unit. You can install plugins directly from a repository, from a plugin marketplace, or from a local path.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-plugins).
