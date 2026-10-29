---
title: About GitHub Copilot agents
shortTitle: GitHub Copilot agents
intro: '{% data variables.product.prodname_copilot_short %} agents use context and tools to plan and complete tasks. You can choose where and how you work with them.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

## What is an agent?

An agent is an AI system that can complete a goal on your behalf. Unlike an assistant that only returns a response, an agent can plan a task, use tools to take action, inspect the results, and adjust its approach.

For example, when you ask an agent to fix a bug, it can search a repository, identify the relevant files, edit the code, run tests, and revise its changes in response to test failures. The tools and environments available to an agent depend on where you use it.

Agents can work with different levels of autonomy:

* In a collaborative session, you can guide the agent, approve actions, and provide feedback as it works.
* In an asynchronous session, you can delegate a task, work on something else, and review the result later.
* In an automated workflow, an event or schedule can start an agent without you initiating each individual task.

In every case, you remain responsible for defining the goal and constraints, granting appropriate access, and reviewing the agent's work.

## Agents, chat, and automation

Chat, agents, and automation are related concepts, but each describes a different part of an AI-assisted workflow.

| Concept | Primary purpose | Key distinction |
| --- | --- | --- |
| Chat | Explore ideas, ask questions, and provide direction through a conversation | Chat is a back-and-forth exchange of questions and responses. Some chat experiences can also use tools or invoke an agent. |
| Agent | Complete a goal by reasoning, using tools, and adapting to results | An agent can decide which steps to take instead of only producing a response. |
| Automation | Start repeatable work from an event, schedule, or other trigger | An automation can run fixed steps or invoke an agent. Not every automation is agentic. |

For example, you might use chat to explore why a test is failing, then ask an agent to update the code and run the test suite. If the same type of failure needs regular attention, you could create an automation that starts an agent whenever the failure occurs.

## Where you can work with agents

You can work with agents in several {% data variables.product.prodname_copilot_short %} experiences. Choose an experience based on where you want the work to run, how closely you want to guide it, and how you want to review the result.

### {% data variables.copilot.github_copilot_app %}

The {% data variables.copilot.github_copilot_app %} is a desktop application for directing agent-driven development. You can run multiple agent sessions in parallel, use local or cloud environments, and manage work from an initial task through pull request review. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/github-copilot-app).

### {% data variables.copilot.copilot_cli_short %}

{% data variables.copilot.copilot_cli %} lets you work with an agent from your terminal. The agent can answer questions, modify files, run commands, and complete multi-step tasks in local or sandboxed environments. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli).

### {% data variables.product.prodname_copilot_short %} in IDEs

Agent mode in supported IDEs provides a collaborative experience in your local development environment. The agent can identify files to change, propose edits, run commands, and respond to your feedback while you work. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).

### {% data variables.product.github %}

On {% data variables.product.github %}, you can delegate asynchronous work to {% data variables.product.prodname_copilot_short %} from entry points such as [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=about-agents-docs-dotcom&utm_medium=docs&utm_campaign=universe-2026), issues, and pull requests. The agent works in a cloud environment and can research a repository, create a plan, make changes on a branch, and open a pull request for review. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github).

You can also delegate tasks to supported third-party coding agents. These agents work alongside {% data variables.product.prodname_copilot_short %} and return their changes through the same pull request workflow. See [AUTOTITLE](/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents).

### {% data variables.copilot.agent_apps_caps %}

{% data variables.copilot.agent_apps_caps %} are partner-built agents that you can use through {% data variables.product.github %}. They can specialize in particular domains and connect to a partner's systems and tools. An {% data variables.copilot.agent_app %} is installed as a {% data variables.product.prodname_github_app %}. See [AUTOTITLE](/copilot/concepts/agent-capabilities/about-agents/agent-apps).

### Automated workflows

You can configure agents to perform recurring or event-driven work. For example, an agent can triage new issues, investigate continuous integration failures, or prepare a scheduled report. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations).

### {% data variables.product.prodname_copilot_short %} integrations

You can integrate {% data variables.product.prodname_copilot_short %} with various tools and platforms to enhance its functionality and streamline your development workflow. With integrations, you can work with and trigger {% data variables.product.prodname_copilot_short %} from within your existing tools, such as Microsoft Teams, Slack, Linear, Azure Boards, and Jira, providing the cloud agent with the context it needs to assist you. See [AUTOTITLE](/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/about-copilot-integrations).

## Choosing an agent experience

Start with the level of control and delegation that fits your task. Use the {% data variables.copilot.github_copilot_app %}, {% data variables.copilot.copilot_cli_short %} or a collaborative IDE session when you want to guide work closely. Use a cloud agent when you want to delegate a well-scoped task and review the result later. Use an automated workflow when the same kind of work should run repeatedly from a defined trigger.

For help matching {% data variables.product.github %}'s AI tools to your task, see [AUTOTITLE](/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/ai-tools).
