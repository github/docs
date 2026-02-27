---
title: Running tasks in parallel with the `/fleet` command
shortTitle: Parallel task execution
allowTitleToDifferFromFilename: true
intro: 'The `/fleet` slash command lets {% data variables.copilot.copilot_cli_short %} break down a complex request into smaller tasks and run them in parallel, maximizing efficiency and throughput.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot CLI
---

## Introduction

The `/fleet` slash command in {% data variables.copilot.copilot_cli_short %} is designed to take an implementation plan and break it down into smaller, independent tasks that can be executed in parallel by subagents. This allows for faster completion of complex requests that involve multiple steps.

This article gives an overview of the `/fleet` slash command. For details of how to use it, see [AUTOTITLE](/copilot/how-tos/copilot-cli/speeding-up-task-completion).

## How `/fleet` works

When you use the `/fleet` command, the main {% data variables.product.prodname_copilot_short %} agent analyzes the prompt and determines whether it can be divided into smaller subtasks. It will assess, based on the nature of the subtasks and their dependencies, whether these can be efficiently executed by subagents. If it decides to assign some or all of the subtasks to subagents, it will act as orchestrator, managing the workflow and dependencies between the subtasks. Where possible, the orchestrator agent will run the subagents in parallel, allowing the whole task to be completed more quickly.

## Benefits of using `/fleet`

* **Speed of task completion**: The main benefit of using the `/fleet` command is that a large, multi-part task can be completed more quickly by running subtasks in parallel. Whether parts of a large task can be worked on in parallel will be determined by the dependencies between the subtasks. Some tasks, such as creating a suite of tests for a new feature, are well suited to parallelization and will typically complete faster when you use the `/fleet` slash command.

* **Specialization**: If you've defined custom agents that are specialized for certain types of work, these may be used by the subagents. This allows for specialization, with the subagents using the custom agents best suited to the specific subtask they are working on.

  By default, subagents use a low-cost AI model. However, you can tell {% data variables.product.prodname_copilot_short %} to use a specific model for part of the work. For example, within a larger prompt, you could specify `... Use GPT-5.3-Codex, to create ... Use Claude Opus 4.5, to analyze ...`. If a subagent uses a custom agent profile that specifies a particular AI model, then that model will be used by the subagent. Using a specific model may produce better quality results for particular types of subtask.

  If custom agents are available, {% data variables.product.prodname_copilot_short %} will decide whether to use one to complete a particular subtask. However, if you know that a specific custom agent is well-suited to a particular subtask, you can specify this in your prompt by using `@CUSTOM-AGENT-NAME`. For example, within a larger prompt: `... Use @test-writer to create comprehensive unit tests for ...`.

  For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

* **Context window**: Each subagent has its own context window, separate from the main agent and other subagents. This allows each subagent to focus on its specific task without being overwhelmed by the full context of the larger task.

## When should you use `/fleet`?

* **Large or complex tasks**: When your request involves multiple independent steps, such as refactoring several files, updating dependencies, or running tests across modules.
* **Parallelizable work**: If your task can be split into subtasks that don’t depend on each other.
* **Automated workflows**: When you want the quickest possible completion of a large task—for example, when you're using autopilot mode to allow {% data variables.product.prodname_copilot_short %} to work autonomously.

## Points to consider

* **Premium request usage**: When you submit a prompt in the CLI and {% data variables.product.prodname_copilot_short %} interacts with the selected large language model (LLM) to generate a response, this consumes premium requests. The number of premium requests consumed depends on the model that's currently selected. More interactions with the LLM result in more premium requests being consumed.

  Each subagent can interact with the LLM independently of the main agent, so splitting work up into smaller tasks that are run by subagents may result in more LLM interactions than if the work was handled by the main agent. Using `/fleet` in a prompt may therefore cause more premium requests to be consumed.

  {% data reusables.cli.billable-prus %}

* **Task composition**: Work is best suited to execution by multiple subagents if it can be decomposed into independent subtasks. If your request is inherently sequential, using the `/fleet` slash command mode may not provide any benefit.

## Relationship between `/fleet` and autopilot mode

The `/fleet` slash command is often used in autopilot mode, but these are distinct features that can be used independently:

* **Autopilot mode** allows {% data variables.product.prodname_copilot_short %} to continue working autonomously until a task is complete, auto-responding to requests that would otherwise require user intervention.
* **`/fleet`** is all about using subagents to execute tasks in parallel, while the main agent manages the overall workflow. You can use the `/fleet` slash command in interactive sessions independently of autopilot mode.

A typical workflow for using `/fleet` in autopilot mode might look like this:

1. Press <kbd>Shift</kbd>+<kbd>Tab</kbd> to switch into plan mode and work with {% data variables.copilot.copilot_cli_short %} to create an implementation plan.
1. Recognize that the completed plan contains multiple elements and looks like a good candidate for `/fleet`.
1. Select the **Accept plan and build on autopilot + /fleet** option that's displayed when the plan is complete.

For more information about autopilot mode, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/speeding-up-task-completion)
