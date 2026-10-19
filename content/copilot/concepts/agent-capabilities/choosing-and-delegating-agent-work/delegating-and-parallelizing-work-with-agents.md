---
title: Delegating and parallelizing work with agents
shortTitle: Delegate and parallelize work
intro: 'Break complex development work into focused tasks and coordinate multiple agents in the {% data variables.copilot.github_copilot_app %} or {% data variables.copilot.copilot_cli %}.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/copilot-cli/fleet
contentType: concepts
category:
  - Learn about Copilot
---

Delegating work to multiple agents can help you make progress on complex tasks more quickly. Each agent can focus on a defined part of the work, while you or another agent coordinates the overall result.

## How agents coordinate work

Multi-agent work typically has an orchestrator that keeps track of the overall goal. The orchestrator is usually the main agent that delegates work to subagents.

A coordinated workflow usually involves:

1. Breaking the goal into smaller tasks.
1. Identifying dependencies between the tasks.
1. Assigning each task to a subagent with the context and tools it needs.
1. Running independent tasks in parallel.
1. Reviewing and combining the results.

## When to use multiple agents

Delegation works best for:

* **Large or complex tasks**: When your request involves multiple independent steps, such as refactoring several files, updating dependencies, or running tests across modules.
* **Parallelizable work**: If your task can be split into subtasks that don’t depend on each other.
* **Automated workflows**: When you want the quickest possible completion of a large task—for example, when you're using autopilot mode to allow {% data variables.product.prodname_copilot_short %} to work autonomously.

## Using the `/fleet` command to delegate and parallelize work

When you use the `/fleet` command in the {% data variables.copilot.github_copilot_app %} or {% data variables.copilot.copilot_cli %}, the main {% data variables.product.prodname_copilot_short %} agent analyzes the prompt and determines whether it can be divided into smaller subtasks. It will assess, based on the nature of the subtasks and their dependencies, whether these can be efficiently executed by subagents.

If it decides to assign some or all of the subtasks to subagents, it will act as orchestrator, managing the workflow and dependencies between the subtasks.

Where possible, the orchestrator agent will run the subagents in parallel, allowing the whole task to be completed more quickly.

Each subagent has its own context window, so it can focus on its assigned task without carrying all the context from the main session.

### Planning work for delegation

For a complex task, planning before delegation can clarify the goal, divide it into manageable subtasks, and reveal dependencies between them. In {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli_short %}, the `/plan` slash command can help shape that breakdown, and fleet mode can then delegate suitable subtasks to agents, running independent work in parallel. See [Using the `/fleet` slash command](/copilot/how-tos/copilot-cli/use-copilot-cli/speed-up-task-completion#using-the-fleet-slash-command).

## Considerations when using the `/fleet` command

Using multiple agents can provide the following benefits:

* **Faster completion:** Independent tasks can make progress at the same time.
* **Focused context:** Each agent can concentrate on a bounded task with only the relevant context.
* **Specialization:** You can assign work to custom agents or models that are suited to particular tasks.

In addition to the benefits, there are some aspects to consider:

* **Increased usage:** Each agent interacts with an AI model independently, so splitting work up into smaller tasks that are run by subagents may result in more LLM interactions than if the work was handled by the main agent. Using `/fleet` in a prompt may therefore cause more {% data variables.product.prodname_ai_credits %} to be consumed.
* **Task composition:** Parallel work provides the most value when the tasks are independent, the boundaries are clear, and the cost of coordinating the results is lower than the time saved. If your request is inherently sequential, using `/fleet` may not provide any benefit.

## Next steps

For more information on running `/fleet`, assigning specialized subagents to tasks, managing subagent tasks, and starting fleet mode directly from the command line, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/speed-up-task-completion).
